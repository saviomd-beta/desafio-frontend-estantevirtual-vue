<template lang="pug">
  div
    .row
      .col
        h1.h3= 'Lista de endereços'
      .col-auto
        router-link.btn.btn-primary.btn-sm(to='/cadastro-endereco')= 'Adicionar'
</template>

<script>
export default {
  name: 'ListaEnderecos',
};
</script>
