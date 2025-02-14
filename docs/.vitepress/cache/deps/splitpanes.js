import {
  createElementBlock,
  h,
  normalizeStyle,
  openBlock,
  renderSlot
} from "./chunk-XH3QD76C.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/.pnpm/splitpanes@3.1.8_vue@3.5.13_typescript@5.7.3_/node_modules/splitpanes/dist/splitpanes.es.js
var M = {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "splitpanes",
  emits: ["ready", "resize", "resized", "pane-click", "pane-maximize", "pane-add", "pane-remove", "splitter-click"],
  props: {
    horizontal: { type: Boolean },
    pushOtherPanes: { type: Boolean, default: true },
    dblClickSplitter: { type: Boolean, default: true },
    rtl: { type: Boolean, default: false },
    // Right to left direction.
    firstSplitter: { type: Boolean }
  },
  provide() {
    return {
      requestUpdate: this.requestUpdate,
      onPaneAdd: this.onPaneAdd,
      onPaneRemove: this.onPaneRemove,
      onPaneClick: this.onPaneClick
    };
  },
  data: () => ({
    container: null,
    ready: false,
    panes: [],
    touch: {
      mouseDown: false,
      dragging: false,
      activeSplitter: null
    },
    splitterTaps: {
      // Used to detect double click on touch devices.
      splitter: null,
      timeoutId: null
    }
  }),
  computed: {
    panesCount() {
      return this.panes.length;
    },
    // Indexed panes by `uid` of Pane components for fast lookup.
    // Every time a pane is destroyed this index is recomputed.
    indexedPanes() {
      return this.panes.reduce((e, i) => (e[i.id] = i) && e, {});
    }
  },
  methods: {
    updatePaneComponents() {
      this.panes.forEach((e) => {
        e.update && e.update({
          // Panes are indexed by Pane component uid, as they might be inserted at different index.
          [this.horizontal ? "height" : "width"]: `${this.indexedPanes[e.id].size}%`
        });
      });
    },
    bindEvents() {
      document.addEventListener("mousemove", this.onMouseMove, { passive: false }), document.addEventListener("mouseup", this.onMouseUp), "ontouchstart" in window && (document.addEventListener("touchmove", this.onMouseMove, { passive: false }), document.addEventListener("touchend", this.onMouseUp));
    },
    unbindEvents() {
      document.removeEventListener("mousemove", this.onMouseMove, { passive: false }), document.removeEventListener("mouseup", this.onMouseUp), "ontouchstart" in window && (document.removeEventListener("touchmove", this.onMouseMove, { passive: false }), document.removeEventListener("touchend", this.onMouseUp));
    },
    onMouseDown(e, i) {
      this.bindEvents(), this.touch.mouseDown = true, this.touch.activeSplitter = i;
    },
    onMouseMove(e) {
      this.touch.mouseDown && (e.preventDefault(), this.touch.dragging = true, this.calculatePanesSize(this.getCurrentMouseDrag(e)), this.$emit("resize", this.panes.map((i) => ({ min: i.min, max: i.max, size: i.size }))));
    },
    onMouseUp() {
      this.touch.dragging && this.$emit("resized", this.panes.map((e) => ({ min: e.min, max: e.max, size: e.size }))), this.touch.mouseDown = false, setTimeout(() => {
        this.touch.dragging = false, this.unbindEvents();
      }, 100);
    },
    // If touch device, detect double tap manually (2 taps separated by less than 500ms).
    onSplitterClick(e, i) {
      "ontouchstart" in window && (e.preventDefault(), this.dblClickSplitter && (this.splitterTaps.splitter === i ? (clearTimeout(this.splitterTaps.timeoutId), this.splitterTaps.timeoutId = null, this.onSplitterDblClick(e, i), this.splitterTaps.splitter = null) : (this.splitterTaps.splitter = i, this.splitterTaps.timeoutId = setTimeout(() => {
        this.splitterTaps.splitter = null;
      }, 500)))), this.touch.dragging || this.$emit("splitter-click", this.panes[i]);
    },
    // On splitter dbl click or dbl tap maximize this pane.
    onSplitterDblClick(e, i) {
      let s = 0;
      this.panes = this.panes.map((n, t) => (n.size = t === i ? n.max : n.min, t !== i && (s += n.min), n)), this.panes[i].size -= s, this.$emit("pane-maximize", this.panes[i]), this.$emit("resized", this.panes.map((n) => ({ min: n.min, max: n.max, size: n.size })));
    },
    onPaneClick(e, i) {
      this.$emit("pane-click", this.indexedPanes[i]);
    },
    // Get the cursor position relative to the splitpane container.
    getCurrentMouseDrag(e) {
      const i = this.container.getBoundingClientRect(), { clientX: s, clientY: n } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
      return {
        x: s - i.left,
        y: n - i.top
      };
    },
    // Returns the drag percentage of the splitter relative to the container (ranging from 0 to 100%).
    getCurrentDragPercentage(e) {
      e = e[this.horizontal ? "y" : "x"];
      const i = this.container[this.horizontal ? "clientHeight" : "clientWidth"];
      return this.rtl && !this.horizontal && (e = i - e), e * 100 / i;
    },
    calculatePanesSize(e) {
      const i = this.touch.activeSplitter;
      let s = {
        prevPanesSize: this.sumPrevPanesSize(i),
        nextPanesSize: this.sumNextPanesSize(i),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      };
      const n = 0 + (this.pushOtherPanes ? 0 : s.prevPanesSize), t = 100 - (this.pushOtherPanes ? 0 : s.nextPanesSize), a = Math.max(Math.min(this.getCurrentDragPercentage(e), t), n);
      let r = [i, i + 1], o = this.panes[r[0]] || null, h2 = this.panes[r[1]] || null;
      const l = o.max < 100 && a >= o.max + s.prevPanesSize, u = h2.max < 100 && a <= 100 - (h2.max + this.sumNextPanesSize(i + 1));
      if (l || u) {
        l ? (o.size = o.max, h2.size = Math.max(100 - o.max - s.prevPanesSize - s.nextPanesSize, 0)) : (o.size = Math.max(100 - h2.max - s.prevPanesSize - this.sumNextPanesSize(i + 1), 0), h2.size = h2.max);
        return;
      }
      if (this.pushOtherPanes) {
        const d = this.doPushOtherPanes(s, a);
        if (!d) return;
        ({ sums: s, panesToResize: r } = d), o = this.panes[r[0]] || null, h2 = this.panes[r[1]] || null;
      }
      o !== null && (o.size = Math.min(Math.max(a - s.prevPanesSize - s.prevReachedMinPanes, o.min), o.max)), h2 !== null && (h2.size = Math.min(Math.max(100 - a - s.nextPanesSize - s.nextReachedMinPanes, h2.min), h2.max));
    },
    doPushOtherPanes(e, i) {
      const s = this.touch.activeSplitter, n = [s, s + 1];
      return i < e.prevPanesSize + this.panes[n[0]].min && (n[0] = this.findPrevExpandedPane(s).index, e.prevReachedMinPanes = 0, n[0] < s && this.panes.forEach((t, a) => {
        a > n[0] && a <= s && (t.size = t.min, e.prevReachedMinPanes += t.min);
      }), e.prevPanesSize = this.sumPrevPanesSize(n[0]), n[0] === void 0) ? (e.prevReachedMinPanes = 0, this.panes[0].size = this.panes[0].min, this.panes.forEach((t, a) => {
        a > 0 && a <= s && (t.size = t.min, e.prevReachedMinPanes += t.min);
      }), this.panes[n[1]].size = 100 - e.prevReachedMinPanes - this.panes[0].min - e.prevPanesSize - e.nextPanesSize, null) : i > 100 - e.nextPanesSize - this.panes[n[1]].min && (n[1] = this.findNextExpandedPane(s).index, e.nextReachedMinPanes = 0, n[1] > s + 1 && this.panes.forEach((t, a) => {
        a > s && a < n[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
      }), e.nextPanesSize = this.sumNextPanesSize(n[1] - 1), n[1] === void 0) ? (e.nextReachedMinPanes = 0, this.panes[this.panesCount - 1].size = this.panes[this.panesCount - 1].min, this.panes.forEach((t, a) => {
        a < this.panesCount - 1 && a >= s + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
      }), this.panes[n[0]].size = 100 - e.prevPanesSize - e.nextReachedMinPanes - this.panes[this.panesCount - 1].min - e.nextPanesSize, null) : { sums: e, panesToResize: n };
    },
    sumPrevPanesSize(e) {
      return this.panes.reduce((i, s, n) => i + (n < e ? s.size : 0), 0);
    },
    sumNextPanesSize(e) {
      return this.panes.reduce((i, s, n) => i + (n > e + 1 ? s.size : 0), 0);
    },
    // Return the previous pane from siblings which has a size (width for vert or height for horz) of more than 0.
    findPrevExpandedPane(e) {
      return [...this.panes].reverse().find((s) => s.index < e && s.size > s.min) || {};
    },
    // Return the next pane from siblings which has a size (width for vert or height for horz) of more than 0.
    findNextExpandedPane(e) {
      return this.panes.find((s) => s.index > e + 1 && s.size > s.min) || {};
    },
    checkSplitpanesNodes() {
      Array.from(this.container.children).forEach((i) => {
        const s = i.classList.contains("splitpanes__pane"), n = i.classList.contains("splitpanes__splitter");
        !s && !n && (i.parentNode.removeChild(i), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      });
    },
    addSplitter(e, i, s = false) {
      const n = e - 1, t = document.createElement("div");
      t.classList.add("splitpanes__splitter"), s || (t.onmousedown = (a) => this.onMouseDown(a, n), typeof window < "u" && "ontouchstart" in window && (t.ontouchstart = (a) => this.onMouseDown(a, n)), t.onclick = (a) => this.onSplitterClick(a, n + 1)), this.dblClickSplitter && (t.ondblclick = (a) => this.onSplitterDblClick(a, n + 1)), i.parentNode.insertBefore(t, i);
    },
    removeSplitter(e) {
      e.onmousedown = void 0, e.onclick = void 0, e.ondblclick = void 0, e.parentNode.removeChild(e);
    },
    redoSplitters() {
      const e = Array.from(this.container.children);
      e.forEach((s) => {
        s.className.includes("splitpanes__splitter") && this.removeSplitter(s);
      });
      let i = 0;
      e.forEach((s) => {
        s.className.includes("splitpanes__pane") && (!i && this.firstSplitter ? this.addSplitter(i, s, true) : i && this.addSplitter(i, s), i++);
      });
    },
    // Called by Pane component on programmatic resize.
    requestUpdate({ target: e, ...i }) {
      const s = this.indexedPanes[e._.uid];
      Object.entries(i).forEach(([n, t]) => s[n] = t);
    },
    onPaneAdd(e) {
      let i = -1;
      Array.from(e.$el.parentNode.children).some((t) => (t.className.includes("splitpanes__pane") && i++, t === e.$el));
      const s = parseFloat(e.minSize), n = parseFloat(e.maxSize);
      this.panes.splice(i, 0, {
        id: e._.uid,
        index: i,
        min: isNaN(s) ? 0 : s,
        max: isNaN(n) ? 100 : n,
        size: e.size === null ? null : parseFloat(e.size),
        givenSize: e.size,
        update: e.update
      }), this.panes.forEach((t, a) => t.index = a), this.ready && this.$nextTick(() => {
        this.redoSplitters(), this.resetPaneSizes({ addedPane: this.panes[i] }), this.$emit("pane-add", { index: i, panes: this.panes.map((t) => ({ min: t.min, max: t.max, size: t.size })) });
      });
    },
    onPaneRemove(e) {
      const i = this.panes.findIndex((n) => n.id === e._.uid), s = this.panes.splice(i, 1)[0];
      this.panes.forEach((n, t) => n.index = t), this.$nextTick(() => {
        this.redoSplitters(), this.resetPaneSizes({ removedPane: { ...s, index: i } }), this.$emit("pane-remove", { removed: s, panes: this.panes.map((n) => ({ min: n.min, max: n.max, size: n.size })) });
      });
    },
    resetPaneSizes(e = {}) {
      !e.addedPane && !e.removedPane ? this.initialPanesSizing() : this.panes.some((i) => i.givenSize !== null || i.min || i.max < 100) ? this.equalizeAfterAddOrRemove(e) : this.equalize(), this.ready && this.$emit("resized", this.panes.map((i) => ({ min: i.min, max: i.max, size: i.size })));
    },
    equalize() {
      const e = 100 / this.panesCount;
      let i = 0;
      const s = [], n = [];
      this.panes.forEach((t) => {
        t.size = Math.max(Math.min(e, t.max), t.min), i -= t.size, t.size >= t.max && s.push(t.id), t.size <= t.min && n.push(t.id);
      }), i > 0.1 && this.readjustSizes(i, s, n);
    },
    initialPanesSizing() {
      let e = 100;
      const i = [], s = [];
      let n = 0;
      this.panes.forEach((a) => {
        e -= a.size, a.size !== null && n++, a.size >= a.max && i.push(a.id), a.size <= a.min && s.push(a.id);
      });
      let t = 100;
      e > 0.1 && (this.panes.forEach((a) => {
        a.size === null && (a.size = Math.max(Math.min(e / (this.panesCount - n), a.max), a.min)), t -= a.size;
      }), t > 0.1 && this.readjustSizes(e, i, s));
    },
    equalizeAfterAddOrRemove({ addedPane: e, removedPane: i } = {}) {
      let s = 100 / this.panesCount, n = 0;
      const t = [], a = [];
      e && e.givenSize !== null && (s = (100 - e.givenSize) / (this.panesCount - 1)), this.panes.forEach((r) => {
        n -= r.size, r.size >= r.max && t.push(r.id), r.size <= r.min && a.push(r.id);
      }), !(Math.abs(n) < 0.1) && (this.panes.forEach((r) => {
        e && e.givenSize !== null && e.id === r.id || (r.size = Math.max(Math.min(s, r.max), r.min)), n -= r.size, r.size >= r.max && t.push(r.id), r.size <= r.min && a.push(r.id);
      }), n > 0.1 && this.readjustSizes(n, t, a));
    },
    /* recalculatePaneSizes ({ addedPane, removedPane } = {}) {
          let leftToAllocate = 100
          let equalSpaceToAllocate = leftToAllocate / this.panesCount
          let ungrowable = []
          let unshrinkable = []
    
          // When adding a pane with no size, apply min-size if defined otherwise divide another pane
          // (next or prev) in 2.
          // if (addedPane && addedPane.size === null) {
          //   if (addedPane.min) addedPane.size = addedPane.min
          //   else {
          //     const paneToDivide = this.panes[addedPane.index + 1] || this.panes[addedPane.index - 1]
          //     if (paneToDivide) {
          //       // @todo: Dividing that pane in 2 could be incorrect if becoming lower than its min size.
          //       addedPane.size = paneToDivide.size / 2
          //       paneToDivide.size /= 2
          //     }
          //   }
          // }
    
          this.panes.forEach((pane, i) => {
            // Added pane - reduce the size of the next pane.
            if (addedPane && addedPane.index + 1 === i) {
              pane.size = Math.max(Math.min(100 - this.sumPrevPanesSize(i) - this.sumNextPanesSize(i + 1), pane.max), pane.min)
              // @todo: if could not allocate correctly, try to allocate in the next pane straight away,
              // then still do the second loop if not correct.
            }
    
            // Removed pane - increase the size of the next pane.
            else if (removedPane && removedPane.index === i) {
              pane.size = Math.max(Math.min(100 - this.sumPrevPanesSize(i) - this.sumNextPanesSize(i + 1), pane.max), pane.min)
              // @todo: if could not allocate correctly, try to allocate in the next pane straight away,
              // then still do the second loop if not correct.
            }
    
            // Initial load and on demand recalculation.
            else if (!addedPane && !removedPane && pane.size === null) {
              pane.size = Math.max(Math.min(equalSpaceToAllocate, pane.max), pane.min)
            }
    
            leftToAllocate -= pane.size
    
            if (pane.size >= pane.max) ungrowable.push(pane.id)
            if (pane.size <= pane.min) unshrinkable.push(pane.id)
          })
    
          // Do one more loop to adjust sizes if still wrong.
          // > 0.1: Prevent maths rounding issues due to bytes.
          if (Math.abs(leftToAllocate) > 0.1) this.readjustSizes(leftToAllocate, ungrowable, unshrinkable)
        }, */
    // Second loop to adjust sizes now that we know more about the panes constraints.
    readjustSizes(e, i, s) {
      let n;
      e > 0 ? n = e / (this.panesCount - i.length) : n = e / (this.panesCount - s.length), this.panes.forEach((t, a) => {
        if (e > 0 && !i.includes(t.id)) {
          const r = Math.max(Math.min(t.size + n, t.max), t.min), o = r - t.size;
          e -= o, t.size = r;
        } else if (!s.includes(t.id)) {
          const r = Math.max(Math.min(t.size + n, t.max), t.min), o = r - t.size;
          e -= o, t.size = r;
        }
        t.update({
          [this.horizontal ? "height" : "width"]: `${this.indexedPanes[t.id].size}%`
        });
      }), Math.abs(e) > 0.1 && this.$nextTick(() => {
        this.ready && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
      });
    }
    /* distributeEmptySpace () {
          let growablePanes = []
          let collapsedPanesCount = 0
          let growableAmount = 0 // Total of how much the current panes can grow to fill blank space.
          let spaceToDistribute = 100 - this.panes.reduce((sum, pane) => (sum += pane.size) && sum, 0)
          // Do a first loop to determine if we can distribute the new blank space between all the
          // expandedPanes, without expanding the collapsed ones.
          this.panes.forEach(pane => {
            if (pane.size < pane.max) growablePanes.push(pane)
    
            if (!pane.size) collapsedPanesCount++
            else growableAmount += pane.max - pane.size
          })
    
          // If the blank space to distribute is too great for the expanded panes, also expand collapsed ones.
          let expandCollapsedPanes = growableAmount < spaceToDistribute
    
          // New space to distribute equally.
          let growablePanesCount = (growablePanes.length - (expandCollapsedPanes ? 0 : collapsedPanesCount))
          let equalSpaceToDistribute = spaceToDistribute / growablePanesCount
          // if (growablePanesCount === 1) equalSpace = 100 / this.panesCount
          let spaceLeftToDistribute = spaceToDistribute
    
          // Now add the equalSpaceToDistribute to each pane size accordingly.
          growablePanes.forEach(pane => {
            if (pane.size < pane.max && (pane.size || (!pane.size && expandCollapsedPanes))) {
              const newSize = Math.min(pane.size + equalSpaceToDistribute, pane.max)
              let allocatedSpace = (newSize - pane.size)
              spaceLeftToDistribute -= allocatedSpace
              pane.size = newSize
              // If the equalSpaceToDistribute is not fully added to the current pane, distribute the remainder
              // to the next panes.
              // Also fix decimal issue due to bites - E.g. calculating 8.33 and getting 8.3299999999999
              if (equalSpaceToDistribute - allocatedSpace > 0.1) equalSpaceToDistribute = spaceLeftToDistribute / (--growablePanesCount)
            }
          })
    
          /* Disabled otherwise will show up on hot reload.
          // if there is still space to allocate show warning message.
          if (this.panesCount && ~~spaceLeftToDistribute) {
            // eslint-disable-next-line no-console
            console.warn('Splitpanes: Could not distribute all the empty space between panes due to their constraints.')
          } *\/
    
          this.$emit('resized', this.panes.map(pane => ({ min: pane.min, max: pane.max, size: pane.size })))
        } */
  },
  watch: {
    panes: {
      // Every time a pane is updated, update the panes accordingly.
      deep: true,
      immediate: false,
      handler() {
        this.updatePaneComponents();
      }
    },
    horizontal() {
      this.updatePaneComponents();
    },
    firstSplitter() {
      this.redoSplitters();
    },
    dblClickSplitter(e) {
      [...this.container.querySelectorAll(".splitpanes__splitter")].forEach((s, n) => {
        s.ondblclick = e ? (t) => this.onSplitterDblClick(t, n) : void 0;
      });
    }
  },
  beforeUnmount() {
    this.ready = false;
  },
  mounted() {
    this.container = this.$refs.container, this.checkSplitpanesNodes(), this.redoSplitters(), this.resetPaneSizes(), this.$emit("ready"), this.ready = true;
  },
  render() {
    return h(
      "div",
      {
        ref: "container",
        class: [
          "splitpanes",
          `splitpanes--${this.horizontal ? "horizontal" : "vertical"}`,
          {
            "splitpanes--dragging": this.touch.dragging
          }
        ]
      },
      this.$slots.default()
    );
  }
};
var S = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [n, t] of i)
    s[n] = t;
  return s;
};
var x = {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "pane",
  inject: ["requestUpdate", "onPaneAdd", "onPaneRemove", "onPaneClick"],
  props: {
    size: { type: [Number, String], default: null },
    minSize: { type: [Number, String], default: 0 },
    maxSize: { type: [Number, String], default: 100 }
  },
  data: () => ({
    style: {}
  }),
  mounted() {
    this.onPaneAdd(this);
  },
  beforeUnmount() {
    this.onPaneRemove(this);
  },
  methods: {
    // Called from the splitpanes component.
    update(e) {
      this.style = e;
    }
  },
  computed: {
    sizeNumber() {
      return this.size || this.size === 0 ? parseFloat(this.size) : null;
    },
    minSizeNumber() {
      return parseFloat(this.minSize);
    },
    maxSizeNumber() {
      return parseFloat(this.maxSize);
    }
  },
  watch: {
    sizeNumber(e) {
      this.requestUpdate({ target: this, size: e });
    },
    minSizeNumber(e) {
      this.requestUpdate({ target: this, min: e });
    },
    maxSizeNumber(e) {
      this.requestUpdate({ target: this, max: e });
    }
  }
};
function P(e, i, s, n, t, a) {
  return openBlock(), createElementBlock("div", {
    class: "splitpanes__pane",
    onClick: i[0] || (i[0] = (r) => a.onPaneClick(r, e._.uid)),
    style: normalizeStyle(e.style)
  }, [
    renderSlot(e.$slots, "default")
  ], 4);
}
var g = S(x, [["render", P]]);
export {
  g as Pane,
  M as Splitpanes
};
//# sourceMappingURL=splitpanes.js.map
