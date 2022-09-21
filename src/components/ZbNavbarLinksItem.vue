<template>
    <li>
        <template v-if="menu?.menus">
            <a class="justify-between">
                {{ menu.title }}
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ZbNavbarLinks :menus="getMenus(menu)"/>
        </template>
        <router-link :to="menu.to" v-else>{{ menu.title }}</router-link>
    </li>
</template>

<script setup>
import ZbNavbarLinks from './ZbNavbarLinks.vue';
    defineProps(["menu"])
    function getMenus(menuItem){
        return menuItem.menus
    }
</script>