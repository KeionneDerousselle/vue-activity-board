<template>
  <div>
    <a-row
      type="flex"
      justify="center">
      <a-col :xs="22">
        <div class="container">
          <nuxt />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  padding: 2rem 0rem;
  font-size: 1.6rem;
}
</style>
