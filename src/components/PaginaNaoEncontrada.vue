<template lang="pug">
  .mb-3
    h1.h3= 'Página não encontrada'
    .text-right
      router-link.btn.btn-primary(to='/')= 'Voltar para página inicial'
</template>

<script>
export default {
  name: 'PaginaNaoEncontrada',
};
</script>
