<template lang="pug">
  .mb-3
    h2.h4= 'Clima'
    .row
      .col-auto.h1(v-if="this.nomeClasseClima !== '--'")
        i(:class='this.nomeClasseClima')
      .col.font-weight-bold= '{{this.nomeCondicao}}'
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
      = 'Hora local'
      span.font-weight-bold.ml-1= '{{this.horaLocal}}'
      ul.list-inline.small
        li.list-inline-item
          i.wi.wi-sunrise
          span.font-weight-bold.ml-1= '{{this.nascerSol}}'
        li.list-inline-item
          i.wi.wi-sunset
          span.font-weight-bold.ml-1= '{{this.porSol}}'
</template>

<script>
import 'weather-icons/css/weather-icons.min.css';

import debounce from 'debounce';
import moment from 'moment';

import obterDadosClima from '@/helpers/obterDadosClima';
import obterNomeClasseClima from '@/helpers/obterNomeClasseClima';
import obterNomeTraduzidoClima from '@/helpers/obterNomeTraduzidoClima';

export default {
  name: 'InformacoesClima',
  props: ['localidade'],
  data() {
    return {
      abreviaturaCondicao: '--',
      horaLocal: '--',
      nascerSol: '--',
      nomeClasseClima: '--',
      nomeCondicao: '--',
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
          this.abreviaturaCondicao = dados.abreviaturaCondicao;
          this.horaLocal = moment(dados.horaLocal).format('HH:mm');
          this.nascerSol = moment(dados.nascerSol).format('HH:mm');
          this.nomeClasseClima = obterNomeClasseClima(this.abreviaturaCondicao,
            dados.horaLocal, dados.nascerSol, dados.porSol);
          this.nomeCondicao = obterNomeTraduzidoClima(dados.abreviaturaCondicao);
          this.porSol = moment(dados.porSol).format('HH:mm');
          this.temperaturaAtual = parseInt(dados.temperaturaAtual, 10);
          this.temperaturaMaxima = parseInt(dados.temperaturaMaxima, 10);
          this.temperaturaMinima = parseInt(dados.temperaturaMinima, 10);
          this.umidade = dados.umidade;
        }).catch(() => {
          this.abreviaturaCondicao = '--';
          this.horaLocal = '--';
          this.nascerSol = '--';
          this.nomeClasseClima = '--';
          this.nomeCondicao = '--';
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
