import { seed, simplex2 } from './perlin-generator.js'
seed(Math.floor(Math.random() * 64000))

const LOGO_IMAGE = require('~/assets/imgs/home/connect/logos-spritesheet.jpg')
const EMPTY_IMAGE = require('~/assets/imgs/home/connect/empty.png')

export const LogoBubbles = (bubblesSpec) => {
  const main = { ...bubblesSpec }
  main.container = document.querySelector(main.containerSelector) // get container
  // calculate container limits (will be used to hide/show bubbles and positions)
  main.containerBoundingRect = main.container.getBoundingClientRect()
  const calculateContainerLimits = function () {
    main.containerBoundingRect = main.container.getBoundingClientRect()
    main.containerLimitLeft = 0 // main.containerBoundingRect.left;
    main.containerLimitRight = main.containerWidth // + main.containerBoundingRect.left;
    if (main.containerBoundingRect.width < main.containerWidth) {
      main.containerLimitRight =
        main.containerBoundingRect.width - main.containerBoundingRect.left
    }

    if (main.containerBoundingRect.width <= main.maxContainerSizeToMobile) {
      // on touch devices
      main.containerLimitLeft = -150 // add extra space to left side (after screen)
      main.containerLimitRight += 250 // add extra space to right side (after screen)
    }
  }
  calculateContainerLimits()
  window.addEventListener('resize', calculateContainerLimits)

  // create bubbles
  main.logos = shuffleArray(main.logos)
  const lengthBubbles = main.bubbles.length
  for (let bubbleIndex = 0; bubbleIndex < lengthBubbles; bubbleIndex++) {
    const bubble = main.bubbles[bubbleIndex]
    bubble.el = createBubbleElement({
      ...main.bubbles[bubbleIndex],
      name: main.logos[bubbleIndex].name,
      posX: main.logos[bubbleIndex].posX,
      posY: main.logos[bubbleIndex].posY,
    })
    main.container.appendChild(bubble.el)
    bubble.width = bubble.el.getBoundingClientRect().width
    bubble.noiseSeedX = Math.floor(Math.random() * 64000)
    bubble.noiseSeedY = Math.floor(Math.random() * 64000)
  }

  // animate/move bubbles
  main.animateBubbles = function () {
    if (!main.playing) return
    const totalBubbles = main.bubbles.length
    for (let index = 0; index < totalBubbles; index++) {
      const bubble = main.bubbles[index]
      bubble.noiseSeedX += main.noiseSpeed
      bubble.noiseSeedY += main.noiseSpeed
      bubble.x -= main.scrollSpeed
      const xWithNoise =
        bubble.x + simplex2(bubble.noiseSeedX, 0) * main.noiseAmount
      const yWithNoise =
        bubble.y + simplex2(bubble.noiseSeedY, 0) * main.noiseAmount

      if (bubble.x < main.containerLimitLeft) {
        bubble.x += main.containerWidth
      }
      const rightLimit = main.containerLimitRight - bubble.width * 1.2 // bubble will be visible when is missing 20% of it's size to show in viewport
      bubble.el.style.opacity = bubble.x > rightLimit ? 0 : 1
      bubble.el.style.transform = `translate(${xWithNoise}px, ${yWithNoise}px) scale(${bubble.s})`
    }

    if (main.playing) requestAnimationFrame(main.animateBubbles)
  }

  playAnimationIfContentIsVisible()
  window.addEventListener('scroll', playAnimationIfContentIsVisible)

  function playAnimationIfContentIsVisible() {
    const bubblesContainer = main.container.getBoundingClientRect()
    if (
      (bubblesContainer.bottom < 0 ||
        bubblesContainer.top > window.innerHeight) &&
      main.playing
    ) {
      return (main.playing = false)
    }

    if (
      bubblesContainer.bottom > 0 &&
      bubblesContainer.top < window.innerHeight &&
      !main.playing
    ) {
      main.playing = true
      requestAnimationFrame(main.animateBubbles)
    }
  }
}

const createBubbleElement = ({ x, y, s, name, posX, posY }) => {
  const bubble = document.createElement('div')
  bubble.className = 'bubble'
  bubble.style.transform = `translate(${x + 150}px, ${y}px) scale(${s || 1})`
  const divImgEl = document.createElement('div')
  divImgEl.className = 'logo'
  divImgEl.width = '307px'
  divImgEl.height = '307px'
  const imgEl = document.createElement('img')
  const imgPath = LOGO_IMAGE
  imgEl.style.backgroundImage = `url(${imgPath})`
  imgEl.style.backgroundSize = '287px auto'
  imgEl.style.backgroundPositionX = posX
  imgEl.style.backgroundPositionY = posY
  imgEl.alt = name
  imgEl.src = EMPTY_IMAGE
  divImgEl.appendChild(imgEl)
  bubble.appendChild(divImgEl)
  return bubble
}

const shuffleArray = (logos) => {
  for (let total = logos.length - 1; total > 0; total -= 1) {
    const logoIndex = Math.floor(Math.random() * (total + 1))
    const logo = logos[total]
    logos[total] = logos[logoIndex]
    logos[logoIndex] = logo
  }
  return logos
}
