import { gsap } from 'gsap';
const ufo = document.querySelector('#ufo')
var tl = gsap.TimelineLite()
const earth = document.querySelector('.earth')
const edna = earth.querySelector('.edna')

tl.from('ufo', { x: 100 %, duration: 3 })
tl.to('ufo', { x: 0, duration: 3 })

// const tl = gsap.timeline()
gsap.to('.edna', {y: -200, duration:2})