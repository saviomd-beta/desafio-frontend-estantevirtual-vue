webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("qb6w");var a=s("7+uW"),r=s("mvHQ"),o=s.n(r),n=s("/ocq"),i=s("Dd8w"),l=s.n(i),c=(s("pwGf"),s("HhAh")),d=s.n(c),u=s("PJh5"),m=s.n(u),h=s("//Fk"),p=s.n(h),v="https://cors-anywhere.herokuapp.com/",f="https://www.metaweather.com/api/location/",j=f+"search/?query=";var b=function(e){return new p.a(function(t,s){fetch(""+v+j+encodeURIComponent(e)).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(e){if(e.length){var a=e[0].woeid;t(function(e){return new p.a(function(t,s){fetch(""+v+f+e).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(e){var s={abreviaturaEstado:e.consolidated_weather[0].weather_state_abbr,horaLocal:e.time,nascerSol:e.sun_rise,nomeEstado:e.consolidated_weather[0].weather_state_name,porSol:e.sun_set,temperaturaAtual:e.consolidated_weather[0].the_temp,temperaturaMaxima:e.consolidated_weather[0].max_temp,temperaturaMinima:e.consolidated_weather[0].min_temp,umidade:e.consolidated_weather[0].humidity};t(s)}).catch(function(e){s(e.message)})})}(a))}else s(Error("No weather information available for this location"))}).catch(function(e){s(e.message)})})},C={day:{c:"sunny",h:"hail",hc:"cloudy",hr:"rain",lc:"cloud",lr:"rain-mix",s:"showers",sl:"sleet",sn:"snow",t:"thunderstorm"},night:{c:"clear",h:"hail",hc:"cloudy",hr:"rain",lc:"cloud",lr:"rain-mix",s:"showers",sl:"sleet",sn:"snow",t:"thunderstorm"}};var E=function(e,t){var s=t.split(":")[0],a=Math.floor(s/12)?"night":"day";return"wi wi-"+a+"-"+C[a][e]},_={name:"InformacoesClima",props:["localidade"],data:function(){return{abreviaturaEstado:"--",horaLocal:"--",nascerSol:"--",nomeClasseClima:"--",nomeEstado:"--",porSol:"--",temperaturaAtual:"--",temperaturaMaxima:"--",temperaturaMinima:"--",umidade:"--"}},created:function(){this.obterPopularDadosClima()},methods:{obterPopularDadosClima:function(){var e=this;this.localidade.length&&b(this.localidade).then(function(t){e.abreviaturaEstado=t.abreviaturaEstado,e.horaLocal=m()(t.horaLocal).format("HH:mm"),e.nascerSol=m()(t.nascerSol).format("HH:mm"),e.nomeClasseClima=E(e.abreviaturaEstado,e.horaLocal),e.nomeEstado=t.nomeEstado,e.porSol=m()(t.porSol).format("HH:mm"),e.temperaturaAtual=parseInt(t.temperaturaAtual,10),e.temperaturaMaxima=parseInt(t.temperaturaMaxima,10),e.temperaturaMinima=parseInt(t.temperaturaMinima,10),e.umidade=t.umidade}).catch(function(){e.abreviaturaEstado="--",e.horaLocal="--",e.nascerSol="--",e.nomeClasseClima="--",e.nomeEstado="--",e.porSol="--",e.temperaturaAtual="--",e.temperaturaMaxima="--",e.temperaturaMinima="--",e.umidade="--"})}},watch:{localidade:d()(function(){this.obterPopularDadosClima()},500)}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mb-3"},[s("h2",{staticClass:"h4"},[e._v("Clima")]),s("div",{staticClass:"mb-3"},["--"!==this.nomeClasseClima?s("div",{staticClass:"h1"},[s("i",{class:this.nomeClasseClima})]):e._e(),s("span",{staticClass:"font-weight-bold"},[e._v(e._s(this.nomeEstado))])]),s("div",{staticClass:"mb-3"},[e._v("Temperatura"),s("span",{staticClass:"font-weight-bold ml-1"},[e._v(e._s(this.temperaturaAtual)+"°C")]),s("ul",{staticClass:"list-inline small"},[s("li",{staticClass:"list-inline-item"},[e._v("mínima"),s("span",{staticClass:"font-weight-bold ml-1"},[e._v(e._s(this.temperaturaMinima)+"°C")])]),s("li",{staticClass:"list-inline-item"},[e._v("máxima"),s("span",{staticClass:"font-weight-bold ml-1"},[e._v(e._s(this.temperaturaMaxima)+"°C")])])])]),s("div",{staticClass:"mb-3"},[e._v("Umidade"),s("span",{staticClass:"font-weight-bold ml-1"},[e._v(e._s(this.umidade)+"%")])]),s("div",{staticClass:"mb-3"},[e._v("Nascer do sol"),s("span",{staticClass:"font-weight-bold ml-1"},[e._v(e._s(this.nascerSol))]),s("i",{staticClass:"ml-1 wi wi-sunrise"})]),s("div",{staticClass:"mb-3"},[e._v("Pôr do sol"),s("span",{staticClass:"font-weight-bold ml-1"},[e._v(e._s(this.porSol))]),s("i",{staticClass:"ml-1 wi wi-sunset"})]),s("div",{staticClass:"mb-3"},[e._v("Hora local"),s("span",{staticClass:"font-weight-bold ml-1"},[e._v(e._s(this.horaLocal))])])])},staticRenderFns:[]},w={name:"CadastroEndereco",props:["listaEnderecos"],components:{"informacoes-clima":s("VU/8")(_,g,!1,null,null,null).exports},data:function(){return{endereco:{bairro:"",cep:"",complemento:"",id:0,localidade:"",logradouro:"",uf:""}}},created:function(){if(void 0!==this.$route.params.id){var e=parseInt(this.$route.params.id,10),t=this.listaEnderecos.find(function(t){return t.id===e});void 0!==t&&(this.endereco=t)}},methods:{enviarCadastroEndereco:function(e){e.preventDefault();var t=void 0===this.$route.params.id?"adicionarEndereco":"atualizarEndereco";this.$emit(t,this.endereco)},obterDadosEnderecoViaApi:function(e){var t=this,s=e.target.value;8===s.length&&fetch("https://viacep.com.br/ws/"+s+"/json/").then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(e){t.endereco=l()({},t.endereco,{bairro:e.bairro,complemento:e.complemento,localidade:e.localidade,logradouro:e.logradouro,uf:e.uf})})},removerEndereco:function(){this.$emit("removerEndereco",this.endereco.id)}}},y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"justify-content-center row"},[s("div",{staticClass:"col-12 col-sm-7"},[s("form",{on:{submit:e.enviarCadastroEndereco}},[s("h1",{staticClass:"h3"},[e._v("Adicionar endereço")]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"cep"}},[e._v("CEP")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.cep,expression:"endereco.cep"}],staticClass:"form-control",attrs:{id:"cep",required:"required",type:"number"},domProps:{value:e.endereco.cep},on:{keyup:function(t){e.obterDadosEnderecoViaApi(t)},input:function(t){t.target.composing||e.$set(e.endereco,"cep",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"logradouro"}},[e._v("Logradouro")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.logradouro,expression:"endereco.logradouro"}],staticClass:"form-control",attrs:{id:"logradouro",required:"required",type:"text"},domProps:{value:e.endereco.logradouro},on:{input:function(t){t.target.composing||e.$set(e.endereco,"logradouro",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"complemento"}},[e._v("Complemento")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.complemento,expression:"endereco.complemento"}],staticClass:"form-control",attrs:{id:"complemento",required:"required",type:"text"},domProps:{value:e.endereco.complemento},on:{input:function(t){t.target.composing||e.$set(e.endereco,"complemento",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"bairro"}},[e._v("Bairro")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.bairro,expression:"endereco.bairro"}],staticClass:"form-control",attrs:{id:"bairro",required:"required",type:"text"},domProps:{value:e.endereco.bairro},on:{input:function(t){t.target.composing||e.$set(e.endereco,"bairro",t.target.value)}}})]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-9 form-group"},[s("label",{attrs:{for:"localidade"}},[e._v("Localidade")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.localidade,expression:"endereco.localidade"}],staticClass:"form-control",attrs:{id:"localidade",required:"required",type:"text"},domProps:{value:e.endereco.localidade},on:{input:function(t){t.target.composing||e.$set(e.endereco,"localidade",t.target.value)}}})]),s("div",{staticClass:"col-3 form-group"},[s("label",{attrs:{for:"uf"}},[e._v("UF")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endereco.uf,expression:"endereco.uf"}],staticClass:"form-control",attrs:{id:"uf",required:"required",type:"text"},domProps:{value:e.endereco.uf},on:{input:function(t){t.target.composing||e.$set(e.endereco,"uf",t.target.value)}}})])]),s("div",{staticClass:"text-right"},[s("ul",{staticClass:"list-inline"},[s("li",{staticClass:"list-inline-item"},[s("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:"/"}},[e._v("Cancelar")])],1),void 0===e.$route.params.id?s("li",{staticClass:"list-inline-item"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Criar")])]):[s("li",{staticClass:"list-inline-item"},[s("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:e.removerEndereco}},[e._v("Excluir")])]),e._m(0)]],2)])])]),s("div",{staticClass:"col-12 col-sm-5"},[s("div",{staticClass:"card card-body"},[s("informacoes-clima",{attrs:{localidade:e.endereco.localidade}})],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"list-inline-item"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Atualizar")])])}]},x=s("VU/8")(w,y,!1,null,null,null).exports,k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.listaEnderecos.length?s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-striped"},[e._m(0),s("tbody",e._l(e.listaEnderecos,function(t){return s("tr",{key:t.id},[s("td",[e._v(e._s(t.cep))]),s("td",[e._v(e._s(t.logradouro))]),s("td",[e._v(e._s(t.complemento))]),s("td",[e._v(e._s(t.bairro))]),s("td",[e._v(e._s(t.localidade))]),s("td",[e._v(e._s(t.uf))]),s("td",[s("router-link",{staticClass:"btn btn-secondary btn-sm",attrs:{to:{name:"EdicaoEndereco",params:{id:t.id}}}},[e._v("Editar")])],1)])}))])]):s("div",{staticClass:"text-center"},[e._v("Nenhum endereço cadastrado")])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("CEP")]),t("th",[this._v("Logradouro")]),t("th",[this._v("Complemento")]),t("th",[this._v("Bairro")]),t("th",[this._v("Localidade")]),t("th",[this._v("UF")]),t("th")])])}]},z={name:"ListaEnderecos",props:["listaEnderecos"],components:{"tabela-enderecos":s("VU/8")({name:"TabelaEnderecos",props:["listaEnderecos"]},k,!1,null,null,null).exports}},q={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mb-3"},[t("div",{staticClass:"row"},[this._m(0),t("div",{staticClass:"col-auto"},[t("router-link",{staticClass:"btn btn-primary btn-sm",attrs:{to:"/cadastro-endereco"}},[this._v("Adicionar")])],1)]),t("tabela-enderecos",{attrs:{listaEnderecos:this.listaEnderecos}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col"},[t("h1",{staticClass:"h3"},[this._v("Lista de endereços")])])}]},F=s("VU/8")(z,q,!1,null,null,null).exports;a.a.use(n.a);var P=new n.a({routes:[{path:"/",name:"ListaEnderecos",component:F},{path:"/cadastro-endereco",name:"CadastroEndereco",component:x},{path:"/cadastro-endereco/:id",name:"EdicaoEndereco",component:x}]}),N={render:function(){var e=this.$createElement;return(this._self._c||e)("footer",{staticClass:"border-top mb-3 py-1 small text-center"},[this._v("Coded by Sávio Mendes")])},staticRenderFns:[]},S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",{staticClass:"navbar navbar-dark bg-dark border border-secondary my-3 rounded"},[t("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[this._v("Lista de endereços")])],1)},staticRenderFns:[]},L={name:"desafio-frontend-estantevirtual",components:{rodape:s("VU/8")({name:"Rodape"},N,!1,null,null,null).exports,cabecalho:s("VU/8")({name:"Cabecalho"},S,!1,null,null,null).exports},data:function(){return{listaEnderecos:[]}},created:function(){this.listaEnderecos=JSON.parse(window.localStorage.getItem("listaEnderecos"))||[]},methods:{atualizarEndereco:function(e){var t=this.listaEnderecos.findIndex(function(t){return t.id===e.id});this.listaEnderecos[t]=e,P.push("/")},adicionarEndereco:function(e){var t=e;if(this.listaEnderecos.length){var s=this.listaEnderecos[this.listaEnderecos.length-1];t.id=s.id+1}else t.id=1;this.listaEnderecos.push(t),P.push("/")},removerEndereco:function(e){window.confirm("Deseja realmente excluir esse endereço?")&&(this.listaEnderecos=this.listaEnderecos.filter(function(t){return t.id!==e}),P.push("/"))}},watch:{listaEnderecos:function(e){window.localStorage.setItem("listaEnderecos",o()(e))}}},H={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container-fluid",attrs:{id:"app"}},[t("cabecalho"),t("router-view",{attrs:{listaEnderecos:this.listaEnderecos},on:{atualizarEndereco:this.atualizarEndereco,adicionarEndereco:this.adicionarEndereco,removerEndereco:this.removerEndereco}}),t("rodape")],1)},staticRenderFns:[]},M=s("VU/8")(L,H,!1,null,null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",router:P,components:{App:M},template:"<App/>"})},pwGf:function(e,t){},qb6w:function(e,t){},uslO:function(e,t,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(e){return s(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.f9394430225856f721ce.js.map