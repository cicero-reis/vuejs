# HTTP - AXIOS

[1] npm i --save axios
[2] npm install

[3] Configuração do Axios de forma global
src/plugins/axios.js

[4] Criar a propriedade para estar disponivel de forma global apontando para o axios (toda aplicação)
Pra acessar this.$http

[4] Registrar o plugin axios
src/main.js

[5] Testando (Firebase)
# src/App.js
[
    export default {
        created() {
            this.$http.post('usuario.json', {
                nome: 'Maria',
                email: 'maria_maria@gmail.com'
            }).then(res => console.log(res))	
        }
    }
]

[6] Crinado instâncias do Axios e matendo as configurações
# src/main.js

import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-6cd51.firebaseio.com/'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-6cd51.firebaseio.com/'
        })
    }
})

# src/App.js
export default {
    created() {
        this.$http.post('usuario.json', {
            nome: 'Maria',
            email: 'maria_maria@gmail.com'
        }).then(res => console.log(res))	
    }
}

[6] Importando o axios localmente
# src/App

<script>

import axios from 'axios'

## usando localmente

axios.get('https://curso-vue-6cd51.firebaseio.com/').then(res => {
    this.usuarios = res.data
})

</script>

[8] Interceptor Request
# src/plugins/axios
Vue.prototype.$http.interceptors.request.use(config => {
    if (config.method == post) {
        config.method = 'put'
    }
    console.log(config.method)
}, error => Promise.reject(error))

[9] Interceptor Response
# src/plugins/axios
Vue.prototype.$http.interceptors.response.use(res => {
    const array = []
    for (let chave in res.data) {
        array.push({
            id: chave, ...res.data[chave]
        })
    }
    res.data = array
    return res
}, error => Promise.reject(error))