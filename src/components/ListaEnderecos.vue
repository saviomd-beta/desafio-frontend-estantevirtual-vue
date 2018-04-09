<template lang="pug">
  .mb-3
    .row
      .col
        h1.h3= 'Lista de endereços'
      .col-auto
        router-link.btn.btn-primary.btn-sm(to='/cadastro-endereco')= 'Adicionar'
    tabela-enderecos(
      v-bind:listaEnderecos='listaEnderecos'
    )
</template>

<script>
import TabelaEnderecos from '@/components/TabelaEnderecos';

export default {
  name: 'ListaEnderecos',
  props: ['listaEnderecos'],
  components: {
    'tabela-enderecos': TabelaEnderecos,
  },
};
</script>
