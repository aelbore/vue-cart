function mounted() {
  if (this.$vnode 
      && this.$vnode.componentOptions
      && this.$vnode.componentOptions.Ctor.options
      && this.$vnode.componentOptions.Ctor.options) {
        this.$el.classList.add(this.$vnode.componentOptions.Ctor.options.styles)
  }
}

export default {
  install(Vue) {
    Vue.mixin({ mounted })
  }
}