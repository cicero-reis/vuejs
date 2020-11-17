<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Nome do Usuário Invertido: <strong>{{ inverteNome() }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">reiniciar Nome</button>
        <button @click="reiniciarNomeFn">Reinicia Nome (callback)</button>
    </div>
</template>

<script>

import barramento from "@/barramento"

export default {
    props: {
        nome: {
            type: String,
            required: true,
            default: 'Fulano',
            // default: () => {
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarNomeFn: Function,
        idade: Number
    },
    methods: {
        inverteNome() {
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome() {
            const antigo = this.nome
            this.nome = 'Pedro'
            this.$emit('nomeMudou', this.nome) // evento
            //ou
            // this.$emit('nomeMudou', {
            //     novo: this.nome,
            //     antigo
            // }) // evento
        },
    },
    created() {
        barramento.quandoIdadeMudar( idade => {
            this.idade = idade  
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
