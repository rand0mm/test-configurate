import { acceptHMRUpdate, defineStore } from 'pinia'

export const useConfigurateStore = defineStore('configurate', {
  state: () => {
    return {
      config: null,
    }
  },
  actions: {
   async getLocal() {
      const storageData = localStorage.getItem('config')
      if (storageData) {
        this.config = JSON.parse(storageData)
      } else {
        const  getArticles = () => import('~/data/data.json').then((m) => m.default || m)
        const articles = await getArticles()
        const data = articles
        if (Object.keys(data).length > 0) {
          this.config = data.config
        }
      }
    },
    setData(data) {
      const storageData = localStorage.getItem('config')
      this.getLocal()
      if(storageData) {
        return
      } else if (data) {
        this.config = data
      }
     } 
  },
  getters: {
    getSize(state) {
      return state.size
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigurateStore, import.meta.hot))
}