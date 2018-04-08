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

function obterNomeClasseClima(abreviaturaEstado, horaLocal) {
  const hora = horaLocal.split(':')[0];
  const periodoDia = (Math.floor(hora / 12) ? 'night' : 'day');
  return `wi wi-${periodoDia}-${nomesClasseClima[periodoDia][abreviaturaEstado]}`;
}

export default obterNomeClasseClima;
