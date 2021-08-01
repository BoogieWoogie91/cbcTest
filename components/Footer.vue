<template>
  <footer>
    <div class='content _1110 posr'>
      <nuxt-link exact to ='/'>
        <img class='logo' src="~/static/logo.png" alt="Logo">
      </nuxt-link>
      <p>2021</p>
    </div>
  </footer>
</template>

<style scoped>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    background: #E4E9F2;
  }

  footer .logo {
    position: absolute;
    margin-top: 7px;
  }

  footer p {
    width: 100%;
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.2px;
  }
</style>