<template>
  <div class="cards-container">
    <a-row
      type="flex"
      :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"
      class="card-list">
      <a-col
        v-for="item in items"
        :key="`${item.id}-col`"
        class="card-item"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="6"
        :xxl="6">
        <a-card
          :id="`${item.id}-card`"
          hoverable>
          <img
            slot="cover"
            class="cover-image"
            alt="Activity Image"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162bd73005f%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162bd73005f%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.203125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">
          <a-card-meta>
            <template slot="title">
              <div class="card-item--title">
                <span class="card-item--title-item card-item--title-header">
                  {{ item.name }}
                </span>
                <span class="card-item--title-item card-item--title-price">
                  ${{ item.price }}
                </span>
              </div>
            </template>
          </a-card-meta>
          <a-rate
            :default-value="item.rating"
            allow-half
            disabled />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      require: true,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.cards-container {
  padding-top: 2rem;

  .card-item {
    &--title {
      display: flex;
      justify-content: space-between;

      &-header {
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &-price {
        display: flex;
        justify-content: flex-end;
        text-overflow: clip;
      }

      &-item {
        flex-grow: 1;
      }
    }

    &:not(:last-child) {
      padding-bottom: 3rem;
    }
  }
}
</style>
