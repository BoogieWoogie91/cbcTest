export const state = () => ({
  users: [],
  sortedUsers: [],
  checkedUsers: [],
  savedUsers: [],
})

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },

  setSortedUsers(state, users) {
    state.sortedUsers = users;
  },

  setCheckedUsers(state, user) {
    state.checkedUsers.push(user);
  },

  removeCheckedUser(state, index) {
    state.checkedUsers.splice(index, 1);
  },

  setCheck(state, index) {
    state.sortedUsers[index].isChecked = true;
  },

  removeCheck(state, index) {
    state.sortedUsers[index].isChecked = false;
  },

  saveTheUsers(state, users) {
    state.savedUsers = users;
  },

  removeSavedUser(state, index) {
    state.savedUsers.splice(index, 1);
  },
}

export const actions = {
  async fetchUsers({commit}) {
    const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
    users.forEach(element => {
      element.isChecked = false;
    });
    commit('setUsers', users);
  },

  searchUsers({commit}, query) {
    if (!query) {
      const sorted = this.getters['users/users'].slice(0);
      commit('setSortedUsers', sorted);
    } else {
      const sorted =[];
      this.getters['users/users'].filter(function(el) {
        if (el.name.toLowerCase().indexOf(query.toLowerCase()) === -1) {
          //do nothing
        } else {
          sorted.push(el);
        }
      })
      commit('setSortedUsers', sorted);
    }
  },

  addCheckedUser({commit}, user) {
    const index = this.getters['users/checkedUsers'].indexOf(user);
    const sortedIndex = this.getters['users/sortedUsers'].indexOf(user);
    if (index === -1) {
      commit('setCheck', sortedIndex);
      commit('setCheckedUsers', user);
    } else if (index > -1) {
      commit('removeCheck', sortedIndex);
      commit('removeCheckedUser', index);
    }
  },

  saveUsers({commit}) {
    const checkedUsers = this.getters['users/checkedUsers'].slice(0);
    commit('saveTheUsers', checkedUsers)
  },

  removeSavedUser({commit}, user) {
    const index = this.getters['users/savedUsers'].indexOf(user);
    commit('removeSavedUser', index)
  }

}

export const getters = {
  users: state => state.users,
  sortedUsers: state => state.sortedUsers,
  checkedUsers: state => state.checkedUsers,
  savedUsers: state => state.savedUsers
}