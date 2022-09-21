<template>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img :src="avatarSrc" />
        </div>
      </label>
      <ZbVerticalMenu class="menu-compact dropdown-content mt-3 p-2 shadow" tabindex="0">
        <ZbVerticalMenuItem :to="{ name: 'account' }" title="Profile"/>
        <ZbVerticalMenuItem :to="{ name: 'about' }" title="Settings"/>
      </ZbVerticalMenu>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import ZbVerticalMenu from './ZbVerticalMenu.vue';
import ZbVerticalMenuItem from './ZbVerticalMenuItem.vue';
import forge from 'node-forge'
const props = defineProps(["user"])

function getHash(str){
    const md = forge.md.md5.create()
    md.update(str.trim().toLowerCase())
    return md.digest().toHex()
}
const avatarSrc = computed(()=>{
    const hash = getHash(props.user.email);
    return `https://www.gravatar.com/avatar/${hash}`
})

</script>