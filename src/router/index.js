import Vue from 'vue';
import Router from 'vue-router';

import CadastroEndereco from '@/components/CadastroEndereco';
import ListaEnderecos from '@/components/ListaEnderecos';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListaEnderecos',
      component: ListaEnderecos,
    },
    {
      path: '/cadastro-endereco',
      name: 'CadastroEndereco',
      component: CadastroEndereco,
    },
  ],
});
