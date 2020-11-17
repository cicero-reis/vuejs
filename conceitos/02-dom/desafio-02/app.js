new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        btnAlerta: function() {
            alert('Botao clicado')
        },
        eventKeyup: function(event) {
            this.valor = event.target.value
        },
        eventEnter: function() {
            this.valor = event.target.value
        }
    }
})