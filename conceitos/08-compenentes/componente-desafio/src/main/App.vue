<template>
	<v-app>
		
		<Menu />

		<Toolbar />
		
		<v-content>
			<Carousel />
		</v-content>

		<Footer />
		
	</v-app>
</template>

<script>

import Menu from '@/components/template/Menu' // @/ caminho absoluto
import Toolbar from '../components/template/Toolbar' // ../ caminho relativo
import Footer from '../components/template/Footer'
import Carousel from '../components/widgets/Carousel'

export default {

	components: {
		Menu,
		Toolbar,
		Carousel,
		Footer
		/**
		 * ou 
		 * 'app-menu': Menu
		 *  appMenu: Menu
		 */
	}
	
}
</script>
