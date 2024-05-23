<template>
	<div class="header">
        <div class="header__container" :class="{'menu__open': isMenuActive}">
					<button type="button" class="menu__icon icon-menu" @click="toggleMenu"><span></span></button>
            <div class="header__menu menu">
                <div class="menu__body">
                    <div class="menu__list">
                        <router-link v-for="menuItem in menuItemsList" :key="menuItem.to" :to="menuItem.to">{{
                           ` ${menuItem.titleLabel}`
                        }}</router-link>
                    </div> 
                </div>
            </div>
			<currency-component />
        </div>
    </div>
</template>

<script>
import CurrencyComponent from '@/components/CurrencyComponent.vue'

	export default {
		name:'HeaderComponent',
		components: {
			CurrencyComponent,
		},
		data() {
        return {
            menuItemsList: [
                {
                    to: '/',
                    titleLabel: 'Home',
                },
                {
                    to: {
                        name: 'addDeclaration',
                    },
                    titleLabel: 'Додати декларацію',
                },
                {
                    to: {
                        name: 'data-page',
                    },
                    titleLabel: 'Фінанси',
                },

					 {
                    to: {
                        name: 'info',
                    },
                    titleLabel: 'Фін.пошук',
                },
					 {
                    to: {
                        name: 'searchDecl',
                    },
                    titleLabel: 'Пошук декл.',
                },
            ],
            isMenuActive: false,
        }
    },
		methods: {
			toggleMenu() {
            return (this.isMenuActive = !this.isMenuActive)
        },
		},
	}
</script>

<style lang="scss" scoped>

</style>