<template>
  <div>
    <header-component></header-component>
    <div class="flex flex-col justify-center items-center">
      <div class="w-80 flex flex-row my-5 justify-center items-center">
        <button class="mx-4 font-bold p-2 px-4 border-4 border-gray-400">
          &lt;
        </button>
        <span class="mx-4 font-bold p-2 px-4 border-b-2 border-gray-400">{{
          selectNumber
        }}</span>
        <button class="mx-4 font-bold p-2 px-4 border-4 border-gray-400">
          &gt;
        </button>
      </div>
      <div class="flex flex-row overflow-x-scroll flex-nowrap w-96">
        <span
          v-for="number in numbers"
          :key="number"
          class="py-2 px-4 mx-2 my-2 border-2 border-gray-500"
          @click="onClickspanLink(number)"
        >
          {{ number }}
        </span>
      </div>
      <div class="w-full" v-masonry="">
        <div v-masonry-tile class="w-1/2">
          <img src="../assets/d1.jpg" alt="" />
        </div>
        <div v-masonry-tile class="w-1/2">
          <img src="../assets/d2.jpg" alt="" />
        </div>
        <div v-masonry-tile class="w-1/2">
          <img src="../assets/d3.jpg" alt="" />
        </div>
        <div v-masonry-tile class="w-1/2">
          <img src="../assets/d4.jpg" alt="" />
        </div>
        <div v-masonry-tile class="w-1/2">
          <img src="../assets/d5.jpg" alt="" />
        </div>
        <div v-masonry-tile class="w-1/2">
          <img src="../assets/d6.jpg" alt="" />
        </div>
        <div v-masonry-tile class="w-1/2">
          <img src="../assets/d7.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "@/components/HeaderComponet.vue";

export default defineComponent({
  name: "allTopic",
  components: {
    HeaderComponent,
  },
  setup() {
    let numbers: string[] = ["1", "2", "3"];
    let selectNumber = "1";

    const onClickspanLink = (number: string) => {
      console.log(number);
    };

    return { numbers, selectNumber, onClickspanLink };
  },
});
</script>
