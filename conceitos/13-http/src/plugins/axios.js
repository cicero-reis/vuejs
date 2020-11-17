import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://curso-vue-6cd51.firebaseio.com/'
//axios.defaults.headers.common['Authorization'] = 'abc123'
//axios.defaults.headers.get['Authorization'] = 'abc111'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-6cd51.firebaseio.com/',
            headers: {
                'Authorization': 'abc333'
                // get: {
                //     'Authorization': 'abc222'
                // }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            return res
        }, error => Promise.reject(error))

    }
})