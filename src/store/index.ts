import Vue from 'vue'
import Vuex from 'vuex'
import TodoModel from '../models/TodoModel';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './mutation-types';
import { ASYNC_INCREMENT_COUNTER, ASYNC_INCREMENT_COUNTER_PROMISE } from './action-types';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      new TodoModel(1, 'todo text 1', true),
      new TodoModel(2, 'todo text 2', false)
    ]
  },
  mutations: {
    [INCREMENT_COUNTER]: (state) => state.count++,
    [DECREMENT_COUNTER]: (state) => state.count--
  },
  actions: {
    [ASYNC_INCREMENT_COUNTER]: ({ commit }) => {
      setTimeout(() => {
        commit(INCREMENT_COUNTER)
      }, 1000)
    },

    // just a promise example for an store action
    [ASYNC_INCREMENT_COUNTER_PROMISE]: ({ commit }) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit(INCREMENT_COUNTER)
          resolve()
        }, 1000)
      })
    },
  },

  modules: {
  },
  getters: {
    doneTodos: (state) => {
      return state.todos.filter(todo => todo.done)
    },

    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    }
  }
})
