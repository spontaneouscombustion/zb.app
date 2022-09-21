<template>
    <ul class="p-2">
        <ZbNavbarLinksItem v-for="menu in menus" :menu="menu"/>
    </ul>
</template>

<script setup>
    import ZbNavbarLinksItem from './ZbNavbarLinksItem.vue';
    defineProps(["menus"])
</script>