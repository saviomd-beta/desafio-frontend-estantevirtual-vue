const nomesTraduzidosClima = {
  c: 'Limpo',
  h: 'Granizo',
  hc: 'Muito nublado',
  hr: 'Chuva forte',
  lc: 'Pouco nublado',
  lr: 'Chuva leve',
  s: 'Garoa',
  sl: 'Chuva com neve',
  sn: 'Neve',
  t: 'Tempestade',
};

function obterNomeTraduzidoClima(abreviaturaCondicao) {
  return nomesTraduzidosClima[abreviaturaCondicao];
}

export default obterNomeTraduzidoClima;
