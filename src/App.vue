<template>
  <div class="container-fluid" id="app">
    <cabecalho/>
    <router-view/>
    <rodape/>
  </div>
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
