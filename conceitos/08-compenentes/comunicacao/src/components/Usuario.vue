<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome é <strong>{{ nome }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="alteraNome">Altera Nome</button>
        <hr>
        <div class="componentes">
            <appUsuarioInfo 
                :nome="nome"
                :idade="idade"
                @nomeMudou="nome = $event"
                :reiniciarNomeFn="reiniciarNome"
                />
            <appUsuarioEditar :idade="idade" />
        </div>
    </div>
</template>

<script>
import appUsuarioInfo from './UsuarioInfo'
import appUsuarioEditar from './UsuarioEditar'

export default {
    components: { 
        appUsuarioInfo, 
        appUsuarioEditar 
    },
    data() {
        return {
            nome: 'Pedro',
            idade: 21
        }
    },
    methods: {
        alteraNome() {
            this.nome = 'Ana';
        },
        reiniciarNome() {
            this.nome = 'Pedro'
        }
    }
    
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
