<template>
  <header>
    <ZbNavbar :menus="menus" appname="AppName"/>
  </header>
  <RouterView />
</template>

<script setup>
  import { ref } from "vue";
  import ZbNavbar from "./components/ZbNavbar.vue";
  const menus = ref([
    {
      title: "Home",
      to: {
        name: "home"
      }
    },
    {
      title: "About",
      to: {
        name: "about"
      }
    },
    {
      title: "Tools",
      menus: [
        {
          title: "NS Lookup",
          to: {
            name: "home"
          }
        },
        {
          title: "Hostname to IP",
          to: {
            name: "about"
          }
        },
      ]
    }
  ])
</script>