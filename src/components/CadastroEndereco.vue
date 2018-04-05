<template lang="pug">
  .justify-content-center.row
    .col-12.col-sm-7
      form(@submit='cadastrarEndereco')
        h1.h3= 'Adicionar endereço'
        .form-group
          label(for='cep')= 'CEP'
          input#cep.form-control(required, type='number', v-model='endereco.cep',
            @keyup='obterDadosEnderecoViaApi($event)'
          )
        .form-group
          label(for='logradouro')= 'Logradouro'
          input#logradouro.form-control(required, type='text', v-model='endereco.logradouro')
        .form-group
          label(for='complemento')= 'Complemento'
          input#complemento.form-control(required, type='text', v-model='endereco.complemento')
        .form-group
          label(for='bairro')= 'Bairro'
          input#bairro.form-control(required, type='text', v-model='endereco.bairro')
        .form-row
          .col-9.form-group
            label(for='localidade')= 'Localidade'
            input#localidade.form-control(required, type='text', v-model='endereco.localidade')
          .col-3.form-group
            label(for='uf')= 'UF'
            input#uf.form-control(required, type='text', v-model='endereco.uf')
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
  props: ['listaEnderecos'],
  data() {
    return {
      endereco: {
        bairro: '',
        cep: '',
        complemento: '',
        id: 0,
        localidade: '',
        logradouro: '',
        uf: '',
      },
    };
  },
  methods: {
    cadastrarEndereco(event) {
      event.preventDefault();
      this.$emit('cadastrarEndereco', this.endereco);
    },
    obterDadosEnderecoViaApi(event) {
      const value = event.target.value;
      if (value.length === 8) {
        fetch(`https://viacep.com.br/ws/${value}/json/`).then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        }).then((json) => {
          this.endereco = {
            ...this.endereco,
            bairro: json.bairro,
            complemento: json.complemento,
            localidade: json.localidade,
            logradouro: json.logradouro,
            uf: json.uf,
          };
        });
      }
    },
  },
};
</script>
