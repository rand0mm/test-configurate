import { acceptHMRUpdate, defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      products: []
    }
  },
  actions: {
   async getLocal() {
      const storageData = localStorage.getItem('products')
      if (storageData) {
        this.products = JSON.parse(storageData)
      } else {
        const  getArticles = () => import('~/data/data.json').then((m) => m.default || m)
        const articles = await getArticles()
        const data = articles
        if (Object.keys(data).length > 0) {
          this.products = data.products
        }
      }
    },
   setData(data) {
    if(data) {
      this.products = data
    }
   } 
  },
  getters: {
    getProducts(state) {
      return state.products
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot))
}