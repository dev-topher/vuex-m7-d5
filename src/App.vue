<template>
  <div id="app">
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button @click="incrementStock(juego.codigo)">+</button>
            <button @click="decrementStock(juego.codigo)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      juegos: state => state.juegos
    })
  },
  methods: {
    ...mapActions(['updateStock']),
    incrementStock(codigo) {
      const juego = this.juegos.find(j => j.codigo === codigo);
      if (juego) {
        // Asegurarse de que juego.stock es un número
        this.updateStock({ codigo, newStock: parseInt(juego.stock, 10) + 1 });
      }
    },
    decrementStock(codigo) {
      const juego = this.juegos.find(j => j.codigo === codigo);
      if (juego && juego.stock > 0) {
        this.updateStock({ codigo, newStock: parseInt(juego.stock, 10) - 1 });
      }
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2em;
}

table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 80%;
}

table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 10px;
  text-align: center;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 1em;
}
</style>
