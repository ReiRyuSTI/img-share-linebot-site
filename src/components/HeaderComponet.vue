<template>
    <div class="flex flex-col w-full h-40 bg-gray-100 justify-around items-center border-b-4 border-black">
        <div class="flex flex-col w-full">
            <router-link to="/" class="text-3xl">
                Title
            </router-link>
        </div>
        <div class="text-xl">
            Subtitle
        </div>
        <div>
            <ul class="flex flex-row justify-around items-center w-80">
                <router-link to="/random">random</router-link>
                <router-link to="/all">all</router-link>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:"HeaderComponent",
    setup() {
        return{}
    },
})
</script>
