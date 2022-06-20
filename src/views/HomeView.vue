<template>
  <div class="home flex-col justify-center items-start py-4">
    <div class="text-3xl">title</div>
    <div class="flex justify-center items-center">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      <ul class="flex flex-row justify-around items-center w-80 m-auto my-20">
        <router-link to="/random">Random</router-link>
        <router-link to="/all">All</router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class HomeView extends Vue {}
</script>
