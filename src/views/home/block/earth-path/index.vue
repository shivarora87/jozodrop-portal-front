<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import ThreeGlobe from 'three-globe'
import { WebGLRenderer, Scene } from 'three'
import { PerspectiveCamera, AmbientLight, DirectionalLight, Color, Fog, PointLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import countries from './data/globe-data-min.json'
import travelHistory from './data/my-flights.json'

let renderer = null
let camera = null
let scene = null
let controls = null
let Globe = null
let animationFrame = null
const $el = ref()


// SECTION Initializing core ThreeJS elements
function init() {
  // Initialize renderer
  renderer = new WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize($el.value.clientWidth, $el.value.clientHeight)
  // renderer.outputEncoding = THREE.sRGBEncoding;
  $el.value.appendChild(renderer.domElement)

  // Initialize scene, light
  scene = new Scene()
  // scene.add(new AmbientLight(0xbbbbbb, 0.3))
  scene.add(new AmbientLight(0xffffff, 2))
  // scene.background = new Color(0x0077f0)
  scene.background = new Color(0x409eff)



  // Initialize camera, light
  camera = new PerspectiveCamera()
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  var dLight = new DirectionalLight(0xffffff, 0.8)
  dLight.position.set(-800, 2000, 400)
  camera.add(dLight)

  var dLight1 = new DirectionalLight(0x7982f6, 1)
  dLight1.position.set(-200, 500, 200)
  camera.add(dLight1)

  var dLight2 = new PointLight(0x8566cc, 0.5)
  dLight2.position.set(-200, 500, 200)
  camera.add(dLight2)

  camera.position.z = 300
  camera.position.x = 0
  camera.position.y = 0

  scene.add(camera)

  // Additional effects
  scene.fog = new Fog(0x535ef3, 400, 2000)

  // Helpers
  // const axesHelper = new AxesHelper(800);
  // scene.add(axesHelper);
  // var helper = new DirectionalLightHelper(dLight);
  // scene.add(helper);
  // var helperCamera = new CameraHelper(dLight.shadow.camera);
  // scene.add(helperCamera);

  // Initialize controls
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dynamicDampingFactor = 0.01
  controls.enablePan = false
  controls.minDistance = 200
  controls.maxDistance = 500
  controls.rotateSpeed = 0.8
  controls.enableZoom = false
  controls.autoRotate = false

  controls.minPolarAngle = Math.PI / 3.5
  controls.maxPolarAngle = Math.PI - Math.PI / 3

  window.addEventListener('resize', onWindowResize, false)
}

// SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe({
    waitForGlobeReady: true,
    animateIn: true,
    rotateSpeed: 1000
  })
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .showAtmosphere(true)
    .atmosphereColor('#0077f0')
    .atmosphereAltitude(0.25)
    .hexPolygonColor(e => {
      // if (["KGZ", "KOR", "THA", "RUS", "UZB", "IDN", "KAZ", "MYS"].includes(e.properties.ISO_A3)) {
      //   return "rgba(255,255,255, 1)";
      // } else return "rgba(255,255,255, 0.7)";
      return '#ffffff'
    })


  Globe.arcsData(travelHistory.flights)
    .arcColor(e => {
      return e.color || '#FFFFFF'
    })
    .arcAltitude(e => {
      return e.arc || 0.05
    })
    .arcStroke(e => {
      return 0.3
    })
    .arcDashLength(0.9)
    .arcDashGap(8)
    .arcDashAnimateTime(1000)
    .arcsTransitionDuration(1000)
    .arcDashInitialGap(e => e.order * 1)
    .labelDotOrientation(e => {
      return e.text === 'ALA' ? 'top' : 'right'
    })
    .labelDotRadius(0.3)
    .labelSize(e => e.size)
    .labelText('city')
    .labelResolution(6)
    .labelAltitude(0.01)
    .pointsMerge(true)
    .pointAltitude(0.07)
    .pointRadius(0.05)

  Globe.rotateY(-Math.PI * (5 / 9))
  Globe.rotateZ(-Math.PI / 6)
  const globeMaterial = Globe.globeMaterial()
  // globeMaterial.color = new Color(0x3a228a)
  globeMaterial.color = new Color(0x409eff)
  globeMaterial.emissive = new Color(0x409eff)
  globeMaterial.emissiveIntensity = 0.1
  globeMaterial.shininess = 0.7

  // NOTE Cool stuff
  // globeMaterial.wireframe = true;

  scene.add(Globe)
}

function onWindowResize() {
  camera.aspect = $el.value.clientWidth / $el.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize($el.value.clientWidth, $el.value.clientHeight)
}

function animate() {
  Globe.rotateY(0.002)
  camera.lookAt(scene.position)
  controls.update()
  renderer.render(scene, camera)
  animationFrame = requestAnimationFrame(animate)
}

const stop = () => {
  Globe.arcsData([])
  Globe._destructor()
  animationFrame && window.cancelAnimationFrame(animationFrame)
  renderer = null
  camera = null
  scene = null
  controls = null
  Globe = null
  animationFrame = null
}

onMounted(() => {
  init()
  initGlobe()
  onWindowResize()
  animate()
})

onUnmounted(stop)
</script>

<template>
  <div ref="$el" class="earth-path-container"></div>
</template>

<style scoped lang="scss">
.earth-path-container {
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-left: -20%;

}
</style>
