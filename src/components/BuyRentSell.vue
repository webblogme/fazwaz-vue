<template>
  <div class="columns buyRentSell">
    <div class="column is-3 is-3-mobile">Buy</div>
    <div class="column is-3 is-3-mobile">Rent</div>
    <div class="column is-3 is-3-mobile">Sell</div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/my-variables.scss';
@import '../../node_modules/bulma/sass/utilities/_all.sass';

.buyRentSell {
  display: flex;
  justify-content: center;
  margin: 0 0 0;
  transform: translate(0, -300%);
  div {
    text-align: center;
    border: 1px solid #ccc;
    background-color: rgba(100, 60, 0, 0.8);
    color: #fff;
  }
  @include from($tablet) {
    font-size: 1.6em;
  }
}
</style>
