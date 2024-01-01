import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({count: 0, name: 'Eduardo'}),
  actions: {
    increment() {
      this.count++
    }
  }
})