[continuar] https://www.udemy.com/course/vue-js-completo/learn/lecture/12629246#overview

https://br.vuejs.org/index.html

[https://br.vuejs.org/v2/guide/] - Condicionais e Laços


Vuejs teóricas

## data
O atributo data é uma função que representa todos dados que um componente deverá ter,
ao criar um dado no retorno dessa função, você poderá fazer uso do dado em todo seu componete, 
seja atribuindo ou alterando seu valor.

- **methods**: Os métodos provavelmente são algo que você vai usar muito enquanto estiver trabalhando com o Vue. Eles são apropriadamente nomeados como, em essência, estamos pendurando uma função de um objeto. Eles são incrivelmente úteis para conectar funcionalidade a diretivas para eventos ou até mesmo para criar um pouco de lógica a ser reutilizada como qualquer outra função. Você pode chamar um método dentro de outro método, por exemplo. Você também pode chamar um método dentro de um gancho de ciclo de vida. Eles são muito versáteis.

- **Computed**: As propriedades computadas são muito valiosas para manipular dados que já existem. Sempre que você estiver criando algo em que precisa classificar um grande grupo de dados e não desejar executar novamente esses cálculos a cada pressionamento de tecla, pense em usar um valor calculado.

- **watcher**: é um recurso especial do Vue.js. que permite espionar uma propriedade do estado do componente e executar uma função quando esse valor da propriedade é alterado.


# Template

- **v-once**: define que a reativadade estará desabilitada nesse elemento.

- **v-if**: define uma condição para a execução daquele elemento, apenas se a condição for verdadeira, o componente será executado.

- **v-text**: Imprime um valor como texto do elemento HTML indicado, pode ser trocado pela interpolações do Mustache {{}}.

- **v-for**: estrutura de repetição, repete o elemento enquanto a sua condição for verdadeira, geralmente usado para percorrer itens de uma lista de dados.

- **v-model**: define uma representação do valor do elemento, ao definir um model para um elemento, ele será representado por uma variável do `data`.

- **v-on**: usado para definir uma ação, ou uma escuta, no elemento, assim ,quando é detectado a ação, um código pré definido é executado.

- **v-bind**: define um atributo dinâmico para o elemento, com ele você pode manipular atributos HTMl de acordo com o valor de suas variáveis.


['instance'] - https://vuejs.org/v2/guide/instance.html#ad

['ArtigosemPortuguessobreVue.js'] - http://vuejs-brasil.com.br/

['componentes'] http://vuejs-brasil.com.br/aplicacoes-com-vuejs-pensando-em-componentes/



# Novo Projeto referente a componentes
# Aula 103 Criar Projeto usando Vue CLI

sudo npm install -g @vue/cli

vue create componente-intro
> default
> cd componente-intro
> npm run serve
> Remover a pasta assets / components
> limpar o arquivo App.vue
> scf

vue create projeto-plugins
> manually select features
> usuando o espaço: Babel/Progressive/Router/Vuex/CSS/Linter/
> Yes
> Sass
> Slint padrão
> lint
> In package
> yes
> curso-vue

## Instalando plugin:

> vue add electron-builder
> vue add vuetify
