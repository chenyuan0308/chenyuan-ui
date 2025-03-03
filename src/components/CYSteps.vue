<template>
  <el-steps :class="[curstomClass, vertical ? 'is-vertical--' : 'is-horizontal--']" v-bind="$attrs"
    :direction="vertical ? 'vertical' : 'horizontal'" :active="activeStep" align-center>
    <el-step v-for="(item, index) in stepList" :icon="activeStep > index ? SuccessFilled : ''" :key="item.title"
      :title="item.title" :description="item.description" />
  </el-steps>
</template>

<script setup lang="ts">
import { SuccessFilled } from "@element-plus/icons-vue";
import { defineProps } from "vue";
const props = defineProps({
  activeStep: {
    type: Number,
    default: 0
  },
  stepList: {
    type: Array,
    default: () => []
  },
  curstomClass: {
    type: String,
    default: ''
  },
  vertical: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.el-steps {
  width: 100%;

  
}

.is-horizontal-- {
  :deep() {
    .el-step__head.is-finish {
      height: 24px;
    }

    .el-step__title.is-finish,
    .el-step__description.is-finish {
      color: #0E478F !important;
      font-weight: 500 !important;
    }

    .el-step__line {
      background: transparent;
      height: 1px;
      border-bottom: 1px dashed #0E478F;
    }

    .is-finish {
      .el-step__icon.is-icon {
        color: #0E478F;
      }
    }

    .el-step__head.is-process {
      border-color: #1463C6;
    }

    .is-process {
      color: #1463C6;

      .el-step__icon.is-text {
        .el-step__icon-inner {
          color: #1463C6;
        }
      }
    }

    .is-process.el-step__description {
      color: #1463C6 !important;
    }

    .el-step__title.is-wait,
    .el-step.is-center .el-step__description {
      font-size: 16px;
      color: #9C9CA4;
      font-weight: 500;
    }

    .is-text {
      .el-step__icon-inner {
        font-size: 16px !important;
        font-weight: 600 !important;
      }
    }

    .is-icon {
      height: 28px;
      width: 28px;

      svg {
        font-size: 24px !important;
      }
    }
  }
}
.is-vertical--{
  :deep() {
    .el-step__title.is-finish,
    .el-step__description.is-finish {
      color: #0E478F !important;
      font-weight: 500 !important;
    }

    .is-finish {
      .el-step__icon.is-icon {
        color: #0E478F;
      }
    }

    .el-step__head.is-process {
      border-color: #1463C6;
    }

    .is-process {
      color: #1463C6;

      .el-step__icon.is-text {
        .el-step__icon-inner {
          color: #1463C6;
        }
      }
    }
    .el-step__title.is-wait,
    .el-step.is-center .el-step__description {
      font-size: 16px;
      color: #9C9CA4;
      font-weight: 500;
    }
    
  }
}
</style>