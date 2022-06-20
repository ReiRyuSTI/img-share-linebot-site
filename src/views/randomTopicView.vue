<template>
  <div>
    <header-component></header-component>
    <div class="flex justify-center items-center">
      <button
        class="
          my-2
          border-2 border-gray-500
          rounded-md
          bg-gray-400
          font-bold
          text-white
          px-4
          py-2
        "
        @click="RandomDataChange"
      >
        ランダム変更
      </button>
    </div>
    <div class="w-full" v-masonry="">
      <div v-masonry-tile class="w-1/2" v-for="img in imageData" :key="img">
        <img :src="img" :alt="img" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HeaderComponent from "@/components/HeaderComponet.vue";

export default defineComponent({
  name: "randomTopic",
  components: {
    HeaderComponent,
  },
  setup() {
      let imageData;
      const RandomDataChange = ()=>{
          console.log("click");
      }
      onMounted(()=>{
          console.log("mount");
      })

    return {RandomDataChange, imageData};
  },
});
</script>
2