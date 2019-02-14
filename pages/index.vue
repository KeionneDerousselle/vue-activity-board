<template>
  <div>
    <a-input-search
      placeholder="Find an Activity..."
      @search="handleSearch" />
    <card-list :items="activities" />
  </div>
</template>

<script>
import CardList from '@/components/ui/CardList/CardList.vue'
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  components: { CardList },
  data() {
    return {}
  },
  async fetch({ store }) {
    await store.dispatch('activities/getActivities')
  },
  computed: {
    ...mapGetters('activities', ['activities'])
  },
  methods: {
    handleSearch(value) {
      console.log(value)
    }
  }
}
</script>
