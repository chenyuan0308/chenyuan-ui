<template>
  <div ref="pointCloudRef" class="pointCloudWrapperStyle">
    <div ref="canvasContainer" class="canvas-container"></div>
    <div class="icon" @click="handleFullScreen">
      <el-icon>
        <FullScreen v-if="!isFullScreen" />
        <Aim v-else />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "pointCloud",
};
</script>
<script setup lang="ts">
import { ref, watch, onMounted, nextTick, defineProps, onUnmounted } from "vue";
import { FullScreen, Aim } from '@element-plus/icons-vue'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const props = defineProps({
  pointCloudList: {
    type: Array,
    required: true,
  },
});

const isFullScreen = ref(false)

const pointCloudRef = ref<HTMLElement | null>(null)
const handleFullScreen = () => {
  const pointCloud = pointCloudRef.value
  if (!isFullScreen.value) {
    pointCloud?.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// 处理全屏状态变化
const handleFullscreenChange = () => {
  const newIsFullScreen = document.fullscreenElement !== null
  if (isFullScreen.value === newIsFullScreen) return
  
  isFullScreen.value = newIsFullScreen
  if (!newIsFullScreen) {
    // 如果是退出全屏，重新初始化点云
    clearScene()
    isInitialized = false
    nextTick(async () => {
      await initScene()
      if (props.pointCloudList && props.pointCloudList.length > 0) {
        await updatePoints()
      }
    })
  }
}

// 监听全屏状态变化
onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange)
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
})

const canvasContainer = ref(null);
let scene, camera, renderer, points, controls;
let blinkingPoints = []; // 存储正在清洗的点
let isInitialized = false;

const reSize = () => {
  if (!renderer) return;
  nextTick(() => {
    const containerWidth = canvasContainer.value.clientWidth;
    const containerHeight = canvasContainer.value.clientHeight;
    if (containerWidth === 0 || containerHeight === 0) return;
    camera.aspect = containerWidth / containerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(containerWidth, containerHeight);
  })
};

const initScene = async () => {
  if (!canvasContainer.value) return Promise.reject('No container');
  if (isInitialized) return Promise.resolve('Already initialized');

  // 初始化场景
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#EBEDF0");

  const containerWidth = canvasContainer.value.clientWidth;
  const containerHeight = canvasContainer.value.clientHeight;

  if (containerWidth === 0 || containerHeight === 0) {
    requestAnimationFrame(initScene);
    return;
  }

  camera = new THREE.PerspectiveCamera(
    75,
    containerWidth / containerHeight,
    0.1,
    1000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(containerWidth, containerHeight);
  canvasContainer.value.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;

  // 设置初始相机位置
  camera.position.set(0, 0, 5);
  controls.target.set(0, 0, 0);
  controls.update();

  let animationFrameId = null;

  // 渲染循环
  const animate = () => {
    if (!isInitialized || !renderer || !scene || !camera || !controls) return;
    animationFrameId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  // 标记为已初始化
  isInitialized = true;
  animate();

  // 存储动画帧 ID 以便清理
  canvasContainer.value.animationFrameId = animationFrameId;

  // 处理窗口大小变化
  window.addEventListener("resize", reSize);

  // 初始化完成后更新点云
  if (props.pointCloudList && props.pointCloudList.length > 0) {
    updatePoints();
  }
};



// 监听点云数据变化
watch(() => props.pointCloudList, (newVal) => {
  if (isInitialized && newVal && newVal.length > 0) {
    updatePoints();
  }
}, { deep: true });

const clearScene = () => {
  console.log('清空当前点云数据', points);

  // 停止动画循环
  if (canvasContainer.value?.animationFrameId) {
    cancelAnimationFrame(canvasContainer.value.animationFrameId);
    canvasContainer.value.animationFrameId = null;
  }

  if (points) {
    scene?.remove(points);
    points.geometry.dispose();
    points.material.dispose();
    if (points.material.map) {
      points.material.map.dispose();
    }
    points = null;
    blinkingPoints = [];
  }

  // 清除渲染器
  if (renderer) {
    const canvas = renderer.domElement;
    // 重置 canvas 尺寸
    canvas.style.width = '0';
    canvas.style.height = '0';
    canvas.width = 0;
    canvas.height = 0;
    
    renderer.dispose();
    canvas.remove();
    renderer = null;
  }

  // 清除相机和场景
  if (controls) {
    controls.dispose();
    controls = null;
  }
  if (camera) {
    camera = null;
  }
  if (scene) {
    while(scene.children.length > 0){ 
      const object = scene.children[0];
      scene.remove(object);
    }
    scene = null;
  }

  isInitialized = false;
  return Promise.resolve('success');
};

const updatePoints = async () => {
  if (!isInitialized) return;

  if (!props.pointCloudList || props.pointCloudList.length === 0) {
    console.warn('No point cloud data available');
    return;
  }

  // 清理点云，但不清理场景
  if (points) {
    scene.remove(points);
    points.geometry.dispose();
    points.material.dispose();
    if (points.material.map) {
      points.material.map.dispose();
    }
    points = null;
    blinkingPoints = [];
  }

  // 如果场景不存在，重新初始化
  if (!scene || !camera || !renderer || !controls) {
    await initScene();
  }

  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];
  const translateY = 0.0;

  try {
    console.log('当前渲染的点云数据长度=======》', props.pointCloudList.length);
    props.pointCloudList.forEach((item, index) => {
      if (!Array.isArray(item) || item.length < 3) {
        console.warn('Invalid point data:', item);
        return;
      }

      positions.push(item[0], item[1] + translateY, item[2]);

      let color;
      switch (item[3]) {
        case 0: color = new THREE.Color("#537983"); break;
        case 1: color = new THREE.Color("#89caed"); break;
        case 2: color = new THREE.Color("#d6d7db"); break;
        case 3:
          color = new THREE.Color("#1463c3");
          blinkingPoints.push(index);
          break;
        default: color = new THREE.Color(0xffffff);
      }
      colors.push(color.r, color.g, color.b);
    });

    if (positions.length === 0) {
      console.warn('No valid points to render');
      return;
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.005,
      vertexColors: true,
      map: (() => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.arc(32, 32, 32, 0, Math.PI * 2);
        context.fillStyle = '#ffffff';
        context.fill();
        const texture = new THREE.CanvasTexture(canvas);
        return texture;
      })(),
      transparent: true,
      alphaTest: 0.1
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    // 调整相机位置
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;
    const boxSize = boundingBox.getSize(new THREE.Vector3());

    const center = boundingBox.getCenter(new THREE.Vector3());
    const maxDim = Math.max(boxSize.x, boxSize.y, boxSize.z);

    // 平滑过渡到新的相机位置
    const newPosition = new THREE.Vector3(
      center.x,
      center.y + maxDim * 0.5,
      center.z + maxDim * 1.5
    );

    camera.position.copy(newPosition);
    controls.target.copy(center);
    controls.update();

  } catch (error) {
    console.error('Error rendering point cloud:', error);
  }
};

onMounted(() => {
  nextTick(() => {
    initScene();
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", reSize);
  clearScene()
});



// 监听窗口大小变化
window.addEventListener("resize", reSize);
</script>

<style lang="scss" scoped>
.pointCloudWrapperStyle {
  width: 100%;
  height: 100%;
  position: relative;

  .canvas-container {
    width: 100%;
    height: 100%;
    min-height: 170px;
    background: #EBEDF0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    canvas {
      max-width: 100%;
      max-height: 100%;
      width: auto !important;
      height: auto !important;
    }
  }
}

:fullscreen {

  .pointCloudWrapperStyle,
  .canvas-container {
    width: 100vw;
    height: 100vh;
  }
}

.icon {
  position: absolute;
  right: 30px;
  bottom: 15px;
  cursor: pointer;
  z-index: 10;
  color: #409eff;

  &:hover {
    color: greenyellow;
  }
}
</style>
