<template>
    <slot>
        <nav>
            <router-link to="/"><font-awesome-icon :icon="['fas', 'house']" /> Home</router-link> 
            <router-link :to="{name:'addDeclaration'}">Додати декларацію</router-link> 
            <router-link :to="{name:'data-page'}" >Нова инфа</router-link>
        </nav>
    </slot>

	 	<slot name="main">
	
		 </slot>
	
</template>

<script>
export default {
    name: 'MainMasterPage',
}
</script>

<style lang="scss" scoped>


</style>
