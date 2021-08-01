<template>
  <header>
    <div class='content _1110 headerContent'>
      <nuxt-link exact to ='/'>
        <img class='logo' src="~/static/logo.png" alt="Logo">
      </nuxt-link>

      <ul>
        <li>
          <nuxt-link exact active-class='active' to ='/'>Search</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class='active' to ='/users'>Users</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class='active' to='#'>Contact</nuxt-link>
        </li>
        <li>
          <nuxt-link active-class='active' to='#'>Help</nuxt-link>
        </li>
      </ul>

      <div v-if="!gotToken" class='buttonBox'>
        <button @click='logIn' class='signIn'>Sign In</button>
        <button @click='logIn' class='signUp'>Sign Up</button>
      </div>

      <div v-else class='userPanel'>
        <button class='bellBtn'><img src="~/static/notification.png" alt="Bell"></button>
        <button class='gearBtn'><img src="~/static/gear.png" alt="params"></button>
        <button class='avaBox'><img src="~/static/user.png" alt="avatar"></button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logIn() {
      this.$store.dispatch('auth/login')
    }
  },

  computed: {
    gotToken() {
      return this.$store.getters['auth/hasToken']
    }
  }
}
</script>

<style scoped>
  header {
    background: #E4E9F2;
    position: fixed;
    top: 0;
    width: 100%;
    height: 88px;
    z-index: 2;
  }

  .headerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .headerContent ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 266px;
    width: 100%;
  }

  .headerContent ul a {
    text-decoration: none;
    color: #373F41;
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-align: left;
  }

  .headerContent ul a:hover {
    color: #3C64B1;
    opacity: .7;
  }

  .headerContent ul a.active {
    color: #3C64B1;
  }

  .buttonBox {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttonBox button {
    width: 91px;
    height: 42px;

    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.30000001192092896px;
    text-align: center;
  }

  .buttonBox button.signIn {
    color: #3C64B1;
    background: transparent;
    border: 2px solid transparent;
  }

  .buttonBox button.signUp {
    color: #fff;
    background: #3C64B1;
    border: 2px solid #3C64B1;
  }

  .buttonBox button.signIn:hover {
    color: #fff;
    background: #3C64B1;
    border: 2px solid #3C64B1;
  }

  .buttonBox button.signUp:hover {
    color: #3C64B1;
    background: transparent;
  }

  .userPanel {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .userPanel button {
    border: none;
    background: none;
  }

  .userPanel button.bellBtn:hover {
    transform: scale(1.2);
  }

  .userPanel button.gearBtn:hover {
    transform: rotate(360deg);
  }

  .userPanel button.avaBox img:hover {
    transform: scale(1.2);
    transition: 300ms ease-in-out;
  }

  .userPanel button:nth-child(2) {
    margin: 0 20px;
  }

  .userPanel .avaBox {
    border-radius: 50%;
    background: #fff;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
</style>