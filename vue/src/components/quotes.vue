<template>
  <div class="container">
    <button class="btn btn-primary" @click="onGetQuotes($event)">Get Quotes</button>
    <hr>
    <app-quote
      v-for="quote in quotes"
      :qt="quote"
      :key="quote.id"
      @quoteDeleted="onQuoteDeleted">
    </app-quote>
  </div>
</template>

<script>
import Quote from './quote.vue'
import axios from 'axios'
export default {
  data () {
    return {
      quotes: []
    }
  },
  methods: {
    onGetQuotes () {
      axios.get('http://localhost:8000/api/quote')
        .then(response => {
          this.quotes = response.data.quotes
        })
        .catch(err => console.log(err))
    },
    onQuoteDeleted (id) {
      const position = this.quotes.findIndex((element) => {
        return element.id === id
      })
      this.quotes.splice(position, 1)
    }
  },
  components: {
    'app-quote': Quote
  }
}
</script>

<style lang="css">
</style>
