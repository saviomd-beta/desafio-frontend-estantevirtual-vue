const nomesClasseClima = {
  day: {
    c: 'sunny',
    h: 'hail',
    hc: 'cloudy',
    hr: 'rain',
    lc: 'cloud',
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
    lc: 'cloud',
    lr: 'rain-mix',
    s: 'showers',
    sl: 'sleet',
    sn: 'snow',
    t: 'thunderstorm',
  },
};

function obterNomeClasseClima(abreviaturaEstado, horaLocal, nascerSol, porSol) {
  const periodoDia = (horaLocal >= nascerSol || horaLocal < porSol ? 'day' : 'night');
  return `wi wi-${periodoDia}-${nomesClasseClima[periodoDia][abreviaturaEstado]}`;
}

export default obterNomeClasseClima;
