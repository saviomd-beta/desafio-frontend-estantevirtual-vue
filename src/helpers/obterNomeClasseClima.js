const nomesClasseClima = {
  day: {
    c: 'sunny',
    h: 'hail',
    hc: 'cloudy',
    hr: 'rain',
    lc: 'cloudy',
    lr: 'rain-mix',
    s: 'showers',
    sl: 'sleet',
    sn: 'snow',
    t: 'thunderstorm',
  },
  night: {
    c: 'clear',
    h: 'hail',
    hc: 'cloudy',
    hr: 'rain',
    lc: 'cloudy',
    lr: 'rain-mix',
    s: 'showers',
    sl: 'sleet',
    sn: 'snow',
    t: 'thunderstorm',
  },
};

function obterNomeClasseClima(abreviaturaCondicao, horaLocal, nascerSol, porSol) {
  const periodoDia = (horaLocal >= nascerSol && horaLocal < porSol ? 'day' : 'night');
  return `wi wi-${periodoDia}-${nomesClasseClima[periodoDia][abreviaturaCondicao]}`;
}

export default obterNomeClasseClima;
