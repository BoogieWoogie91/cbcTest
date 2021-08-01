<template>
  <section class='main'>
    <div class='content _1120'>
      <h2 class='header'>Users</h2>
      <div class='usersBox'>
        <h3>All users</h3>
        <div class='headerBox'>
          <h4 class='userIndex'>#</h4>
          <h4 class='userName'>All users</h4>
          <h4 class='userPhone'>Phone</h4>
        </div>

        <ul>
          <li  v-for="(user, index) of savedUsers" :key="user.id">
            <p class='userIndex'>{{`${index + 1}.`}}</p>
            <p class='userName'>{{user.name}}</p>
            <p class='userPhone'>{{user.phone}}</p>
            <button @click="removeUser(user)"><div class='minus'></div></button>
            </li>
        </ul>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  computed: {
    savedUsers() {
      return this.$store.getters['users/savedUsers']
    },
  },

  methods: {
    removeUser(user) {
      this.$store.dispatch('users/removeSavedUser', user)
    }
  },
}
</script>

<style scoped>
  h2.header {
    font-family: 'Mulish', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.3px;
    text-align: left;
    margin: 50px auto 50px 15px;
  }

  .headerBox {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 15px;
  }

  .usersBox {
    padding: 30px 35px 50px 35px;
    background: #FFFFFF;
    border: 1px solid #DFE0EB;
    box-sizing: border-box;
    box-shadow: -15px 15px 30px rgba(217, 217, 217, 0.2), 15px -15px 30px rgba(217, 217, 217, 0.2), -15px -15px 30px rgba(255, 255, 255, 0.9), 15px 15px 38px rgba(217, 217, 217, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(217, 217, 217, 0.5);
    border-radius: 7px;
  }

  .usersBox ul {
    list-style-type: none;
  }

  .usersBox ul li {
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }

  .usersBox ul li p {
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;

  }

  .userIndex {
    max-width: 40px;
    width: 100%;
  }

  .userName {
    max-width: 300px;
    width: 100%;
  }

  .usersBox ul li button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #000;
    margin: 0 0 0 auto;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms ease-in-out;
  }

  .usersBox ul li button:hover {
    transform: rotate(360deg);
    transition: 300ms ease-in-out;
    background: #fff;
  }

  .usersBox ul li button .minus {
    width: 10px;
    height: 2px;
    background: #fff;
    transition: 300ms ease-in-out;
  }

  .usersBox ul li button:hover .minus {
    background: #000;
  }

  h3 {
    font-family: 'Mulish', sans-serif;
    font-family: Mulish;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-align: left;
    margin-bottom: 15px;
  }

  h4 {
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
  }

  h4.userName {
    padding-left: 5px;
    box-sizing: border-box;
  }
</style>