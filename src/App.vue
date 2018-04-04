<template lang="pug">
  #app.container-fluid
    cabecalho
    router-view
    rodape
</template>

<script>
import Rodape from './components/Rodape';
import Cabecalho from './components/Cabecalho';

export default {
  name: 'desafio-frontend-estantevirtual',
  components: {
    rodape: Rodape,
    cabecalho: Cabecalho,
  },
};
</script>
