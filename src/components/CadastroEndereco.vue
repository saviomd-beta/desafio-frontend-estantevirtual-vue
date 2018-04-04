<template lang="pug">
  .justify-content-center.row
    .col-12.col-sm-7
      form
        h1.h3= 'Adicionar endereço'
        .form-group
          label(for='cep')= 'CEP'
          input#cep.form-control(required, type='number')
        .form-group
          label(for='logradouro')= 'Logradouro'
          input#logradouro.form-control(required, type='text')
        .form-group
          label(for='complemento')= 'Complemento'
          input#complemento.form-control(required, type='text')
        .form-group
          label(for='bairro')= 'Bairro'
          input#bairro.form-control(required, type='text')
        .form-row
          .col-9.form-group
            label(for='localidade')= 'Localidade'
            input#localidade.form-control(required, type='text')
          .col-3.form-group
            label(for='uf')= 'UF'
            input#uf.form-control(required, type='text')
        .text-right
          ul.list-inline
            li.list-inline-item
              router-link.btn.btn-outline-secondary(to='/')= 'Cancelar'
            li.list-inline-item
              button.btn.btn-primary(type='submit')= 'Criar'
</template>

<script>
export default {
  name: 'CadastroEndereco',
};
</script>
