<template lang="pug">
  .table-responsive(v-if="listaEnderecos.length")
    table.table.table-striped
      thead
        tr
          th= 'CEP'
          th= 'Logradouro'
          th= 'Complemento'
          th= 'Bairro'
          th= 'Localidade'
          th= 'UF'
          th
      tbody
        tr(v-for='endereco in listaEnderecos', :key="endereco.id")
          td= '{{endereco.cep}}'
          td= '{{endereco.logradouro}}'
          td= '{{endereco.complemento}}'
          td= '{{endereco.bairro}}'
          td= '{{endereco.localidade}}'
          td= '{{endereco.uf}}'
          td
            router-link.btn.btn-secondary.btn-sm(
              :to="{name: 'EdicaoEndereco', params: {id: endereco.id}}"
            )= 'Editar'
  .text-center(v-else)= 'Nenhum endereço cadastrado'
</template>

<script>
export default {
  name: 'TabelaEnderecos',
  props: ['listaEnderecos'],
};
</script>
