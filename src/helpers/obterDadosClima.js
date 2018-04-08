const urlProxy = 'https://cors-anywhere.herokuapp.com/';
const urlClimaLocalidade = 'https://www.metaweather.com/api/location/';
const urlProcurarLocalidade = `${urlClimaLocalidade}search/?query=`;

function pegarClimaDaLocalidade(woeid) {
  return new Promise((resolve, reject) => {
    fetch(`${urlProxy}${urlClimaLocalidade}${woeid}`).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then((json) => {
      const dadosClima = {
        abreviaturaEstado: json.consolidated_weather[0].weather_state_abbr,
        horaLocal: json.time,
        nascerSol: json.sun_rise,
        nomeEstado: json.consolidated_weather[0].weather_state_name,
        porSol: json.sun_set,
        temperaturaAtual: json.consolidated_weather[0].the_temp,
        temperaturaMaxima: json.consolidated_weather[0].max_temp,
        temperaturaMinima: json.consolidated_weather[0].min_temp,
        umidade: json.consolidated_weather[0].humidity,
      };
      resolve(dadosClima);
    }).catch((error) => {
      reject(error.message);
    });
  });
}

function obterDadosClima(localidade) {
  return new Promise((resolve, reject) => {
    fetch(`${urlProxy}${urlProcurarLocalidade}${encodeURIComponent(localidade)}`).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then((json) => {
      if (json.length) {
        const woeid = json[0].woeid;
        resolve(pegarClimaDaLocalidade(woeid));
      } else {
        reject(Error('No weather information available for this location'));
      }
    }).catch((error) => {
      reject(error.message);
    });
  });
}

export default obterDadosClima;
