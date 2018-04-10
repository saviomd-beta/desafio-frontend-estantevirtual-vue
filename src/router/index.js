import Vue from 'vue';
import Router from 'vue-router';

import CadastroEndereco from '@/components/CadastroEndereco';
import ListaEnderecos from '@/components/ListaEnderecos';
import PaginaNaoEncontrada from '@/components/PaginaNaoEncontrada';

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
    {
      path: '/cadastro-endereco/:id',
      name: 'EdicaoEndereco',
      component: CadastroEndereco,
    },
    {
      path: '*',
      name: 'PaginaNaoEncontrada',
      component: PaginaNaoEncontrada,
    },
  ],
});
