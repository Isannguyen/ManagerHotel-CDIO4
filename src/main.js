import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/MasterRocker.vue'
import Client from './Layout/Wrapper/MasterClient.vue'
import LoginAdmin from './Layout/Wrapper/AdminLogin.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("client-layout", Client);
app.component("login-layout", LoginAdmin);

app.mount("#app")