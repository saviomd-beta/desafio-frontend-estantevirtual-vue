<template lang="pug">
  div.mb-3
    h2.h4= 'Clima'
    .mb-3= '{{this.nomeEstado}} ({{this.abreviaturaEstado}})'
    .mb-3
      = 'Temperatura: {{this.temperaturaAtual}}°C'
      .small= 'mín.: {{this.temperaturaMinima}}°C | máx.: {{this.temperaturaMaxima}}°C'
    .mb-3= 'Umidade: {{this.umidade}}%'
    .mb-3= 'Nascer do sol: {{this.nascerSol}}'
    .mb-3= 'Pôr do sol: {{this.porSol}}'
    .mb-3= 'Hora local: {{this.horaLocal}}'
</template>

<script>
import debounce from 'debounce';
import moment from 'moment';

import obterDadosClima from '@/helpers/obterDadosClima';

export default {
  name: 'InformacoesClima',
  props: ['localidade'],
  data() {
    return {
      abreviaturaEstado: '--',
      horaLocal: '--',
      nascerSol: '--',
      nomeEstado: '--',
      porSol: '--',
      temperaturaAtual: '--',
      temperaturaMaxima: '--',
      temperaturaMinima: '--',
      umidade: '--',
    };
  },
  created: function componenteInformacoesClimaCriado() {
    this.obterPopularDadosClima();
  },
  methods: {
    obterPopularDadosClima() {
      if (this.localidade.length) {
        const dadosClima = obterDadosClima(this.localidade);
        dadosClima.then((dados) => {
          this.abreviaturaEstado = dados.abreviaturaEstado;
          this.horaLocal = moment(dados.horaLocal).format('HH:mm');
          this.nascerSol = moment(dados.nascerSol).format('HH:mm');
          this.nomeEstado = dados.nomeEstado;
          this.porSol = moment(dados.porSol).format('HH:mm');
          this.temperaturaAtual = parseInt(dados.temperaturaAtual, 10);
          this.temperaturaMaxima = parseInt(dados.temperaturaMaxima, 10);
          this.temperaturaMinima = parseInt(dados.temperaturaMinima, 10);
          this.umidade = `${dados.umidade}%`;
        }).catch(() => {
          this.abreviaturaEstado = '--';
          this.horaLocal = '--';
          this.nascerSol = '--';
          this.nomeEstado = '--';
          this.porSol = '--';
          this.temperaturaAtual = '--';
          this.temperaturaMaxima = '--';
          this.temperaturaMinima = '--';
          this.umidade = '--';
        });
      }
    },
  },
  watch: {
    localidade: debounce(function observarLocalidade() {
      this.obterPopularDadosClima();
    }, 500),
  },
};
</script>
