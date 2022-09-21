<template>
    <li>
        <router-link class="justify-between" :to="to">
            <div>
              <slot></slot>
              {{ title }}
            </div>
            <span v-if="badge" class="badge" :class="`badge-${badge.brand}`">{{ badge.title }}</span>
        </router-link>
    </li>
</template>

<script setup>
    defineProps([
        "title", "to", "badge"
    ])
</script>