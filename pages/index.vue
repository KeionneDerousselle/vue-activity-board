<template>
  <div>
    <a-input-search placeholder="Find an Activity..." @search="handleSearch" />
    <card-list :items="activities" />
  </div>
</template>

<script>
import CardList from '@/components/ui/CardList/CardList.vue'

export default {
  layout: 'default',
  components: { CardList },
  data() {
    return {
      activities: [
        {
          id: 1,
          name: 'My Activity',
          desc: 'Some description'
        },
        {
          id: 2,
          name: 'My Activity 2',
          desc: 'Some description 2'
        },
        {
          id: 3,
          name: 'My Activity 3',
          desc: 'Some description 3'
        }
      ]
    }
  },
  methods: {
    handleSearch(value) {
      console.log(value)
    }
  }
}
</script>
