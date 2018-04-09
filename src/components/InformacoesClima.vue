<template lang="pug">
  .mb-3
    h2.h4= 'Clima'
    .mb-3
      .h1(v-if="this.nomeClasseClima !== '--'")
        i(:class='this.nomeClasseClima')
      span.font-weight-bold= '{{this.nomeEstado}}'
    .mb-3
      = 'Temperatura'
      span.font-weight-bold.ml-1= '{{this.temperaturaAtual}}°C'
      ul.list-inline.small
        li.list-inline-item
          = 'mínima'
          span.font-weight-bold.ml-1= '{{this.temperaturaMinima}}°C'
        li.list-inline-item
          = 'máxima'
          span.font-weight-bold.ml-1= '{{this.temperaturaMaxima}}°C'
    .mb-3
      = 'Umidade'
      span.font-weight-bold.ml-1= '{{this.umidade}}%'
    .mb-3
      = 'Nascer do sol'
      span.font-weight-bold.ml-1= '{{this.nascerSol}}'
      i.ml-1.wi.wi-sunrise
    .mb-3
      = 'Pôr do sol'
      span.font-weight-bold.ml-1= '{{this.porSol}}'
      i.ml-1.wi.wi-sunset
    .mb-3
      = 'Hora local'
      span.font-weight-bold.ml-1= '{{this.horaLocal}}'
</template>

<script>
import 'weather-icons/css/weather-icons.min.css';

import debounce from 'debounce';
import moment from 'moment';

import obterDadosClima from '@/helpers/obterDadosClima';
import obterNomeClasseClima from '@/helpers/obterNomeClasseClima';

export default {
  name: 'InformacoesClima',
  props: ['localidade'],
  data() {
    return {
      abreviaturaEstado: '--',
      horaLocal: '--',
      nascerSol: '--',
      nomeClasseClima: '--',
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
          this.nomeClasseClima = obterNomeClasseClima(this.abreviaturaEstado,
            dados.horaLocal, dados.nascerSol, dados.porSol);
          this.nomeEstado = dados.nomeEstado;
          this.porSol = moment(dados.porSol).format('HH:mm');
          this.temperaturaAtual = parseInt(dados.temperaturaAtual, 10);
          this.temperaturaMaxima = parseInt(dados.temperaturaMaxima, 10);
          this.temperaturaMinima = parseInt(dados.temperaturaMinima, 10);
          this.umidade = dados.umidade;
        }).catch(() => {
          this.abreviaturaEstado = '--';
          this.horaLocal = '--';
          this.nascerSol = '--';
          this.nomeClasseClima = '--';
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
