<template lang="pug">
  .mb-3
    h2.h4= 'Distância'
    .font-weight.bold.mb-3= '{{distanciaParaEndereco}}km'
    a.btn.btn-primary.btn-sm(
      :class="(this.botaoRota.desabilitado ? 'disabled' : '')",
      :href="this.botaoRota.url",
      target="_blank",
    )= 'Ver rota para endereço'
</template>

<script>
import debounce from 'debounce';
import geolib from 'geolib';

import converterLocalizacao from '@/helpers/converterLocalizacao';

export default {
  name: 'InformacoesDistancia',
  props: ['endereco'],
  data() {
    return {
      botaoRota: {
        desabilitado: true,
        url: '#',
      },
      distanciaParaEndereco: '--',
      enderecoAtual: '',
    };
  },
  methods: {
    atualizarBotaoRota() {
      const endereco = encodeURIComponent(`${this.endereco.logradouro} ${this.endereco.bairro} ${this.endereco.localidade} ${this.endereco.cep}`);
      this.botaoRota.desabilitado = false;
      this.botaoRota.url = `https://www.google.com/maps/dir/${encodeURIComponent(this.enderecoAtual)}/${endereco}`;
    },
    atualizarDistancia(posicaoAtual) {
      const endereco = encodeURIComponent(`${this.endereco.logradouro} ${this.endereco.bairro} ${this.endereco.localidade} ${this.endereco.cep}`);
      const posicaoDestino = converterLocalizacao.enderecoParaPosicao(endereco);
      posicaoDestino.then((dados) => {
        const posicao1 = {
          latitude: posicaoAtual.coords.latitude,
          longitude: posicaoAtual.coords.longitude,
        };
        const posicao2 = dados;
        const distancia = geolib.getDistance(posicao1, posicao2);
        this.distanciaParaEndereco = Math.floor(distancia / 1000);
      }).catch((mensagemErro) => {
        // eslint-disable-next-line no-console
        console.log(mensagemErro);
      });
    },
    obterDadosEnderecoAtual() {
      if (navigator.geolocation && this.endereco.cep !== '') {
        navigator.geolocation.getCurrentPosition((posicaoAtual) => {
          const enderecoAtual = converterLocalizacao.posicaoParaEndereco(posicaoAtual);
          enderecoAtual.then((dados) => {
            this.enderecoAtual = dados;
            this.atualizarBotaoRota();
            this.atualizarDistancia(posicaoAtual);
          }).catch(() => {
            this.enderecoAtual = '';
          });
        });
      }
    },
  },
  created: function componenteInformacoesDistanciaCriado() {
    this.obterDadosEnderecoAtual();
  },
  watch: {
    endereco: debounce(function observarEndereco() {
      this.obterDadosEnderecoAtual();
    }, 500),
  },
};
</script>
