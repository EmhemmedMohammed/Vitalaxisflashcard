import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

///
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/mdi-v7/mdi-v7.css'

// A few examples for animations from Animate.css:
import '@quasar/extras/animate/slideInLeft.css'
import '@quasar/extras/animate/slideInRight.css'
import '@quasar/extras/animate/slideInDown.css'
import '@quasar/extras/animate/slideInUp.css'
import '@quasar/extras/animate/backInUp.css'
import '@quasar/extras/animate/backInDown.css'
import '@quasar/extras/animate/backInRight.css'
import '@quasar/extras/animate/fadeIn.css'


//
// Import Quasar css
import 'quasar/src/css/index.sass'


const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')



// Add the touchmove event listener to prevent pinch zooming
document.addEventListener('touchmove', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });


