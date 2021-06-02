/// Execute code once nuxt is loaded and ready

window.onNuxtReady(() => {
  const backdropNode = document.createElement('div')
  backdropNode.setAttribute('id', 'modal-backdrop')
  document.body.appendChild(backdropNode)
})
