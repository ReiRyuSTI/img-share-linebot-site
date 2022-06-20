import axios from "axios";
import { inject, InjectionKey, reactive } from "vue";

const axiosStore = () => {
  const state = reactive({ data: [""], dataLength: 0 });
  const getDataLength = () => {
      console.log("data");
      axios.get("https://www.reina-ryu-f.xyz/photoAlb/api/get_length.php").then((res)=>{
        console.log(res);
      })
  };
  const getRandomData = () =>{
      console.log("getrandom");
      axios.get("https://www.reina-ryu-f.xyz/photoAlb/api/get_random.php").then((res)=>{
          console.log(res);
      })
  }
  const getAllData = ()=>{
      console.log("get all data");
      axios.get("https://www.reina-ryu-f.xyz/photoAlb/api/get_photo.php").then(()=>{
          console.log("all data");
      })
  }
  return {
    state,
    getAllData,
    getRandomData,
    getDataLength
  };
};

export default axiosStore;

export type AxiosStore = ReturnType<typeof axiosStore>;

export const axiosStoreKey: InjectionKey<AxiosStore> = Symbol("axiosStore");

export const useAxiosStore = () => {
  const store = inject(axiosStoreKey);
  if (!store) {
    throw new Error(`${axiosStoreKey} is not provided`);
  }
  return store;
};
