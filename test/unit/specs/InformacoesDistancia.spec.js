import Vue from 'vue';
import InformacoesDistancia from '@/components/InformacoesDistancia';

describe('InformacoesDistancia.vue', () => {
  const propsData = {
    endereco: {
      logradouro: 'lorem',
      bairro: 'lorem',
      localidade: 'lorem',
      cep: 'lorem',
    }
  };
  it('deve habilitar botão de rota', () => {
    const Constructor = Vue.extend(InformacoesDistancia);
    const vm = new Constructor({ propsData: propsData }).$mount();
    vm.atualizarBotaoRota();
    expect(vm.botaoRota.desabilitado)
      .toEqual(false);
  });
  it('deve atualizar link do botão de rota', () => {
    const Constructor = Vue.extend(InformacoesDistancia);
    const vm = new Constructor({ propsData: propsData }).$mount();
    vm.atualizarBotaoRota();
    expect(vm.botaoRota.url)
      .toContain('https://www.google.com/maps/dir/');
  });
});
