import { createStore } from 'vuex';
import juegos from '../juegos.json';

const store = createStore({
  state: {
    juegos
  },
  mutations: {
    UPDATE_STOCK(state, { codigo, newStock }) {
      const juego = state.juegos.find(j => j.codigo === codigo);
      if (juego) {
        juego.stock = parseInt(newStock, 10); // Asegurarse de que newStock es un número
      }
    }
  },
  actions: {
    updateStock({ commit }, payload) {
      commit('UPDATE_STOCK', payload);
    }
  }
});

export default store;
