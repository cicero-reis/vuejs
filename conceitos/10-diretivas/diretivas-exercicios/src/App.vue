<template>
	<div id="app">

		<h1>Diretivas</h1>

		<hr>

		<p v-destaque>Usando diretivas personalizadas.</p>
		<p v-destaque="'white'">Usando diretivas personalizadas.</p>
		<p v-destaque="cor">Usando diretivas personalizadas.</p>

		<hr>
		
		<p v-destaque:fundo="'lightblue'">Usando diretivas personalizadas.</p>
		<p v-destaque="'red'">Usando diretivas personalizadas.</p>

		<hr>
		
		<p v-destaque:fundo.atrasar="'lightblue'">Usando diretivas personalizadas.</p>
        <p v-destaque.atrasar="cor">Usando diretivas personalizadas.</p>

		<hr>
		
		<p v-destaque-local:fundo.atrasar="'cyan'">Usando diretivas personalizadas.</p>
        <p v-destaque-local.atrasar="'cyan'">Usando diretivas personalizadas.</p>

		<br>

		<p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Usando diretivas personalizadas.</p>
        <p v-destaque-local.atrasar="cor">Usando diretivas personalizadas.</p>

	</div>
</template>

<script>
export default {

	components: {

	},

	directives: {

		'destaque-local': {

			bind(el, binding, vnode) {

				const aplicarCor = cor => {
					if (binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				
				if (binding.modifiers['atrasar']) atraso = 3000

				const cor1 = binding.value
				const cor2 = 'blue'
				let corAtual = cor1


				setTimeout( () => {

					if (binding.modifiers['alternar']) {
						setInterval( () => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						}, 1000)
					} else {
						aplicarCor(binding.value)
					}
				}, atraso)

			}
		}
	},

	data() {
		return {
			cor: 'blue'
		}
	}

	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
