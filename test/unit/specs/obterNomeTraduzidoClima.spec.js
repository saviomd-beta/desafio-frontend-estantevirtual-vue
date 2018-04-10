import obterNomeTraduzidoClima from '@/helpers/obterNomeTraduzidoClima';

describe('obterNomeTraduzidoClima.vue', () => {
  it('deve retornar nome "Limpo" a partir da abreviatura "c"', () => {
    expect(obterNomeTraduzidoClima('c'))
      .toEqual('Limpo');
  });
  it('deve retornar nome "Chuva forte" a partir da abreviatura "hr"', () => {
    expect(obterNomeTraduzidoClima('hr'))
      .toEqual('Chuva forte');
  });
});
