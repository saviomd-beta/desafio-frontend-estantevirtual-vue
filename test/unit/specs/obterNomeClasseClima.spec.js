import obterNomeClasseClima from '@/helpers/obterNomeClasseClima';

describe('obterNomeClasseClima.vue', () => {
  let nascerSol = new Date(Date.now());
  nascerSol.setHours(6, 0, 0);
  let porSol = new Date(Date.now());
  porSol.setHours(18, 0, 0);
  it('deve retornar classe "wi wi-day-hail" a partir da abreviatura "h" e a hora local é de dia', () => {
    let horaLocal = new Date(Date.now());
    horaLocal.setHours(10, 0, 0);
    expect(obterNomeClasseClima('h', horaLocal, nascerSol, porSol))
      .toEqual('wi wi-day-hail');
  });
  it('deve retornar classe "wi wi-night-cloudy" a partir da abreviatura "hc" e a hora local é de noite', () => {
    let horaLocal = new Date(Date.now());
    horaLocal.setHours(20, 0, 0);
    expect(obterNomeClasseClima('hc', horaLocal, nascerSol, porSol))
      .toEqual('wi wi-night-cloudy');
  });
});
