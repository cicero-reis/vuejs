new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		perigo: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px'
		},
		width: 0
	},
	methods: {
		iniciarEfeito() {
			let instanceVue = this
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ?
					'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let instanceVue = this
			let valor = 0;
			const temporizador = setInterval( function() {
				valor += 5
				instanceVue.width = valor + '%'
				if (valor == 100) {
					clearInterval(temporizador)
					console.log(valor);
				}
			}, 500);
		},
		setPerigo: function(event) {
			if (event.target.value == 'true') {
				this.perigo = true
			}else if (event.target.value == 'false') {
				this.perigo = false
			}
		}
 	}
})
