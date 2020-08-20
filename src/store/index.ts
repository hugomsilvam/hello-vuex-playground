import Vue from 'vue'
import Vuex from 'vuex'
import TodoModel from '../models/TodoModel';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './mutation-types';

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
