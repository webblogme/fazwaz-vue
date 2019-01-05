<template>
  <header id="masthead" class="masthead">
    <div class="masthead__logo">&#10070;
      <router-link to="/">Lorem ipsum</router-link>
    </div>
    <div class="masthead__gadgets">Twitter / Facebook &nbsp;
      <div>&#36;</div>
      <div>&#165;</div>
      <div>&#163;</div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/my-variables.scss';
@import '../../node_modules/bulma/sass/utilities/_all.sass';

header {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  background: $primary-color;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid $secondary-color;
  .masthead__logo {
    font-size: 1.8em;
    font-weight: 800;
    a {
      color: #fff;
    }
  }
  .masthead__gadgets {
    color: #fff;
    @include mobile {
      display: none;
    }
    div {
      font-weight: bold;
      color: orange;
      display: inline-block;
      background: #000;
      padding: 3px 10px;
      border-radius: 50%;
      &:hover {
        font-weight: normal;
        color: #fff;
      }
    }
  }
  @include from($tablet) {
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
