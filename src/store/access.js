import { defineStore } from "pinia";
export const access = defineStore("access", {
  state: () => ({ access: false }),
  actions: {
    changeAccessStatus(){
        this.access = true
    }
  },
});
