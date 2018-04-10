import Vue from 'vue';
import TabelaEnderecos from '@/components/TabelaEnderecos';

describe('TabelaEnderecos.vue', () => {
  it('deve ter 2 endereços exibidos', () => {
    const propsData = {
      listaEnderecos: [
        {
          cep: 'lorem1',
          logradouro: 'lorem1',
          complemento: 'lorem1',
          bairro: 'lorem1',
          localidade: 'lorem1',
          uf: 'lorem1',
        },
        {
          cep: 'lorem2',
          logradouro: 'lorem2',
          complemento: 'lorem2',
          bairro: 'lorem2',
          localidade: 'lorem2',
          uf: 'lorem2',
        },
      ],
    };
    const Constructor = Vue.extend(TabelaEnderecos);
    const vm = new Constructor({ propsData: propsData }).$mount();
    expect(vm.$el.querySelectorAll('tbody > tr').length)
      .toEqual(2);
  });
});
