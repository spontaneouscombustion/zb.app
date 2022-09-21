<template>
    <nav class="navbar bg-base-100">
        <div class="navbar-start">
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ZbNavbarLinks v-if="menus" tabindex="0" class="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52" :menus="menus"/>
            </div>
            <RouterLink class="btn btn-ghost normal-case text-xl" :to="{ name: 'home' }">{{ appname }}</RouterLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ZbNavbarLinks v-if="menus" class="menu menu-horizontal p-0" :menus="menus"/>
        </div>
        <div class="navbar-end">
            <ZbNavbarUserMenus :user="{ email:'admin@example.com' }" v-if="session.isAuthenticated"/>
            <router-link class="btn" :to="{ name: 'login' }" v-else>Get started</router-link>
        </div>
    </nav>
  </template>
  
<script setup>
  import ZbNavbarLinks from "./ZbNavbarLinks.vue";
  import { useSessionStore } from "@/stores/session"
  import ZbNavbarUserMenus from "./ZbNavbarUserMenus.vue"
  const session = useSessionStore()
  defineProps(["menus", "appname"])
</script>