<template>
    <div class="citacao">
        <div>
            <slot name="autor"></slot>
            <slot name="texto"></slot>
            <slot name="fonte"></slot>
            <!-- slot padrão -->
            <slot></slot> 
        </div>
    </div>
</template>

<script>
export default {

    created() {
        console.log('created')
    },
    destroyed() {
        console.log('destroyed')
    },    
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    }
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
    h1 {
        color:red;
    }
</style>
