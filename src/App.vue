<template lang="pug">
  #app.container-fluid
    cabecalho
    router-view(
      v-bind:listaEnderecos='listaEnderecos',
      v-on:atualizarEndereco="atualizarEndereco",
      v-on:adicionarEndereco="adicionarEndereco",
      v-on:removerEndereco="removerEndereco",
    )
    rodape
</template>

<script>
import db from './firebase';
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
  firebase: {
    listaEnderecos: {
      source: db.ref('listaEnderecos'),
    },
  },
  methods: {
    atualizarEndereco(endereco) {
      const index = this.listaEnderecos.findIndex(obj => obj.id === endereco.id);
      this.listaEnderecos[index] = endereco;
      router.push('/');
    },
    adicionarEndereco(endereco) {
      const novoEndereco = endereco;
      if (this.listaEnderecos.length) {
        const ultimoEndereco = this.listaEnderecos[this.listaEnderecos.length - 1];
        novoEndereco.id = ultimoEndereco.id + 1;
      } else {
        novoEndereco.id = 1;
      }
      this.$firebaseRefs.listaEnderecos.push(novoEndereco);
      router.push('/');
    },
    removerEndereco(idEndereco) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Deseja realmente excluir esse endereço?')) {
        this.listaEnderecos = this.listaEnderecos.filter(item => item.id !== idEndereco);
        router.push('/');
      }
    },
  },
};
</script>
