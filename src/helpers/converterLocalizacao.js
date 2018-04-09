const chaveApi = '95a7b16d615f16';

const converterLocalizacao = {
  enderecoParaPosicao(endereco) {
    return new Promise((resolve, reject) => {
      fetch(`https://us1.locationiq.org/v1/search.php?key=${chaveApi}&q=${endereco}&format=json`).then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then((json) => {
        const posicao = {
          latitude: json[0].lat,
          longitude: json[0].lon,
        };
        resolve(posicao);
      }).catch((error) => {
        reject(error.message);
      });
    });
  },
  posicaoParaEndereco(posicao) {
    const latitude = posicao.coords.latitude;
    const longitude = posicao.coords.longitude;
    return new Promise((resolve, reject) => {
      fetch(`https://us1.locationiq.org/v1/reverse.php?key=${chaveApi}&lat=${latitude}&lon=${longitude}&format=json`).then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then((json) => {
        const endereco = `${json.address.road} ${json.address.neighbourhood} ${json.address.city} ${json.address.postcode}`;
        resolve(endereco);
      }).catch((error) => {
        reject(error.message);
      });
    });
  },
};

export default converterLocalizacao;
