import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerLicense } from '@syncfusion/ej2-base';


/*Vuetify*/
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
	components,
	directives
})
registerLicense('ORg4AjUWIQA/Gnt2UFhhQlJBfVldX2JWfFN0QXNYfVR1cV9HZEwxOX1dQl9nSXtRdERhXHdfeXNdRGc=');

createApp(App).use(router).use(vuetify).mount('#app')
