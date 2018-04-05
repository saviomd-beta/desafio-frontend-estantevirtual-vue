<template lang="pug">
  .table-responsive(v-if="listaEnderecos.length")
    .table.table-striped
      thead
        tr
          th= 'CEP'
          th= 'Logradouro'
          th= 'Complemento'
          th= 'Bairro'
          th= 'Localidade'
          th= 'UF'
      tbody
        tr(v-for='endereco in listaEnderecos')
          td= '{{endereco.cep}}'
          td= '{{endereco.logradouro}}'
          td= '{{endereco.complemento}}'
          td= '{{endereco.bairro}}'
          td= '{{endereco.localidade}}'
          td= '{{endereco.uf}}'
  .text-center(v-else)= 'Nenhum endereço cadastrado'
</template>

<script>
export default {
  name: 'TabelaEnderecos',
  props: ['listaEnderecos'],
};
</script>
