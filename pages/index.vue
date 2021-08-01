<template>
  <section class='main'>
    <div class='content _826'>
      <div class='inputContainer'>
        <input class='search' type="search" v-model="searchValue" placeholder="Enter name">
        <img src="~/static/search.png" alt="search">
      </div>
      <div class='headers'>
        <h2>Name</h2>
        <h2>City</h2>
      </div>
      <div class='usersBox'>
        <ul class='usersList'>
          <li v-for="user of sortedUsers" :key="user.id"
              @click="checkBoxUser(user, $event)">
            <div class='checkBox'>
              <div class='customCheck' v-bind:class="{ active: user.isChecked }">
                <img src="~/static/check.png" alt="check">
              </div>
              <p>{{user.name}}</p>
            </div>
            <p class='userCity'>{{user.address.city}}</p>
          </li>
        </ul>
      </div>
      <button :disabled="!checkedUsersExist"
      class='saveBtn'
      :class="{active: checkedUsersExist}"
      @click="saveUsers()">Save</button>
    </div>
  </section>
</template>

<script>
export default {
  async fetch({store}) {
    if (store.getters['users/users'].length === 0) {
      await store.dispatch('users/fetchUsers');
    }
    await store.dispatch('users/searchUsers');
  },

  mounted() {
    this.checkUsers()
  },

  computed: {
    sortedUsers() {
      return this.$store.getters['users/sortedUsers']
    },

    checkedUsers() {
      return this.$store.getters['users/checkedUsers']
    },

  },
  methods: {
    sortUsers(val) {
      this.$store.dispatch('users/searchUsers', val)
    },

    checkBoxUser(user) {
      this.$store.dispatch('users/addCheckedUser', user);
      this.$data.checkedUsersExist = this.checkedUsers.length
    },

    saveUsers() {
      this.$store.dispatch('users/saveUsers');
    },
    checkUsers() {
      this.$data.checkedUsersExist = this.checkedUsers.length
    }
  },

  watch: {
    searchValue: "sortUsers",
  },

  data: () => ({
    searchValue: "",
    checkedUsersExist: 0,
  })
}
</script>

<style scoped>
  .headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px 15px 56px;
  }

  .headers h2 {
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;

  }

  .usersBox {
    border-radius: 10px;
    border: 1px solid #DFE0EB;
    margin: 0 auto 85px 0;
  }

  .inputContainer {
    position: relative;
    margin-top: 140px;
    margin-bottom: 66px;
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .inputContainer img {
    position: absolute;
    right: 25px;
    transition: 300ms ease-in-out;
  }

  .search {
    outline: none;
    text-indent: 35px;
    width: 100%;
    height: 42px;
    background: #F4F4F4;
    border: 1px solid rgba(0, 0, 0, 0.11);
    box-sizing: border-box;
    box-shadow: -11px 11px 22px rgba(227, 227, 227, 0.2), 11px -11px 22px rgba(227, 227, 227, 0.2), -11px -11px 22px rgba(255, 255, 255, 0.9), 11px 11px 28px rgba(227, 227, 227, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(227, 227, 227, 0.5);

    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.30000001192092896px;
  }

  .search:focus + img  {
    transform: scale(1.2);
  }

  .search::placeholder {
    color: #0000005C;
  }


  .usersList li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DFE0EB;
    height: 58px;
    padding: 0 18px;
    cursor: pointer;
    transition: 300ms ease-in-out;
  }

  .usersList li:hover {
    transform: scale(1.05);
    border: 1px solid #DFE0EB;
    background: #fff;
    transition: 300ms ease-in-out;
  }

  .usersList li:last-of-type {
    border-bottom: none;
  }

  .usersList li:first-of-type:hover {
    border-radius: 10px 10px 0 0;
  }

  .usersList li:last-of-type:hover {
    border: 1px solid #DFE0EB;
    border-radius: 0 0 10px 10px;
  }

  .usersList li .checkBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .usersList li .checkBox .customCheck {
    width: 20px;
    height: 20px;
    border: 2px solid #C3CBCD;
    background: #fff;
    transition: 300ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
  }

  .usersList li .checkBox .customCheck.active {
    background:  #3C64B1;
    border: 2px solid #3C64B1;
    transition: 300ms ease-in-out;
  }

  .usersList li p {
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.20000000298023224px;
    text-align: left;
    color: #252733;
  }

  .usersList li p.userCity {
    color: #9FA2B4;
  }

  .saveBtn {
    float: right;
    clear: both;
  }

  .saveBtn {
    width: 71px;
    height: 42px;
    background: #A1A8B6;
    border: 2px solid #A1A8B6;
    color: #fff;
    font-family: 'Mulish', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.30000001192092896px;
    text-align: center;
    cursor: none;
  }

  .saveBtn.active {
    background: #3C64B1;
    border: 2px solid #3C64B1;
    cursor: pointer;
  }
</style>
