<template lang="pug">
  nav.navbar.navbar-dark.bg-dark.border.border-secondary.my-3.rounded
    router-link.navbar-brand(to='/')= 'Lista de endereços'
</template>

<script>
export default {
  name: 'Cabecalho',
};
</script>
