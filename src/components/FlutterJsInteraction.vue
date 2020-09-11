<template>
  <div>
    <h1>Flutter And JavaScript Interaction</h1>
    <button @click="javaScriptToFlutter()">调用Flutter</button>
    <button @click="callJS('none')">hide</button>
    <p :style="visibility">
      Flutter 调用了 JS.
      <br/>
      Flutter向JS传递的参数为{{message}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'FlutterJsInteraction',
  data () {
    return {
      visibility: 'display: none;',
      message: '',
      param: 'dingwen'
    }
  },
  mounted () {
    // JavaScript调用Flutter
    window.javaScriptToFlutter = this.javaScriptToFlutter
    // Flutter调用JavaScript
    window.callJS = this.callJS
  },
  methods: {
    javaScriptToFlutter () {
      // document.location = 'https://www.baidu.com'
      // eslint-disable-next-line no-undef
      Toast.postMessage('Java Script 调用了 Flutter,传递的参数为：' + this.param)
    },
    callJS (message) {
      this.message = message
      this.visibility = 'display:' + message + ';'
    }
  }
}
</script>

<style scoped>

</style>
