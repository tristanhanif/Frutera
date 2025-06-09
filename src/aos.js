import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  install(app) {
    app.AOS = AOS
    app.config.globalProperties.AOS = AOS
    AOS.init({
      once: true,
      offset: 120,
      delay: 100,
      duration: 600,
      easing: 'ease-out-quart',
    })
  }
}
