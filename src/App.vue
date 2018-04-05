<template lang="pug">
  #app.container-fluid
    cabecalho
    router-view(
      v-bind:listaEnderecos='listaEnderecos',
      v-on:cadastrarEndereco="cadastrarEndereco",
    )
    rodape
</template>

<script>
import router from './router';

import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';

export default {
  name: 'desafio-frontend-estantevirtual',
  components: {
    rodape: Rodape,
    cabecalho: Cabecalho,
  },
  data() {
    return {
      listaEnderecos: [],
    };
  },
  created: function componenteAppCriado() {
    this.listaEnderecos = JSON.parse(window.localStorage.getItem('listaEnderecos')) || [];
  },
  methods: {
    cadastrarEndereco(endereco) {
      const novoEndereco = endereco;
      if (this.listaEnderecos.length) {
        const ultimoEndereco = this.listaEnderecos[this.listaEnderecos.length - 1];
        novoEndereco.id = ultimoEndereco.id + 1;
      } else {
        novoEndereco.id = 1;
      }
      this.listaEnderecos.push(novoEndereco);
      router.push('/');
    },
  },
  watch: {
    listaEnderecos: (value) => {
      window.localStorage.setItem('listaEnderecos', JSON.stringify(value));
    },
  },
};
</script>
