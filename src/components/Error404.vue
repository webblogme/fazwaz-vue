<template>
  <div>
    <TopSection/>
    <div class="columns">
      <div class="column has-text-centered">
        <h1 class="is-size-3">ขออภัย ไม่พบหน้านี้</h1>
        <h2 class="is-size-6">404 Not found</h2>
      </div>
    </div>
    <FooterContact/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // msg: ''
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-family: 'Kanit', sans-serif;
}
h1 {
  margin-top: 10vh;
}
h2 {
  height: 20vh;
}
</style>
