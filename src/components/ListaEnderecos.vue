<template>
  <div>
    <div class="row">
      <div class="col">
        <h1 class="h3">Lista de endereços</h1>
      </div>
      <div class="col-auto">
        <router-link class="btn btn-primary btn-sm" to="/cadastro-endereco">Adicionar</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaEnderecos',
};
</script>
