<template>
  <footer id="footer" class="footer">
    <span class="footer__text">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/tech">Technology</router-link>
        </li>
        <li>
          <router-link to="/life">Life/Arts</router-link>
        </li>
        <li>
          <router-link to="/culture">Culture/Recreation</router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/press">Press release</router-link>
        </li>
        <li>
          <router-link to="/legal">Legal</router-link>
        </li>
        <li>
          <router-link to="/contact">Contct Us</router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link to="/science">Science</router-link>
        </li>
        <li>
          <router-link to="/other">Other</router-link>
        </li>
        <li>
          <router-link to="/privacy">Privacy Policy</router-link>
        </li>
        <li>
          <router-link to="/engagement">Engagement</router-link>
        </li>
      </ul>
    </span>
    <p>&copy; 2019 Lorem Ipsum Inc. All rights reserved.</p>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/my-variables.scss';
@import '../../node_modules/bulma/sass/utilities/_all.sass';
p {
  font-size: 0.8em;
}
.footer {
  background-color: darken($color: $primary-color, $amount: 40);
  border-bottom: 10px solid $secondary-color;
  padding: 50px 0;
  p {
    text-align: center;
    color: #666;
  }
}
.footer__text {
  display: flex;
  justify-content: center;
  ul {
    margin-bottom: 30px;
    padding-left: 0;
    li {
      list-style-type: none;
      padding: 5px 20px;
      a {
        text-decoration: none;
        color: #f4f4f4;
      }
    }
  }
  @include mobile {
    text-align: center;
    display: block;
    li {
      padding: 5px;
    }
  }
}
</style>
