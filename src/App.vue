<template>
	<div class="app__container"><router-view /></div>
</template>
<script>

export default {}
</script>
<style lang="scss">

@import '@/assets/style';









#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
	background: rgb(88,108,50)
}
nav {
	display: flex;
	gap: 10px;
	align-items: center;
	justify-content: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: $secondaryColor;
	text-decoration: none;
    &.router-link-exact-active {
      color: #e47c04;
		
    }
  }

}

</style>
