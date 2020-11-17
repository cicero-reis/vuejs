import Vue from 'vue'
export default new Vue({
    methods: {
        alteraIdade(idade) {
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback) {
            this.$on('idadeMudou', callback)
        }
    }
})