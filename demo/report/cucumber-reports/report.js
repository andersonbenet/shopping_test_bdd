$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shopping.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# Author: Anderson Benet"
    }
  ],
  "line": 5,
  "name": "Navegar no ecommerce",
  "description": "",
  "id": "navegar-no-ecommerce",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 4,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Buscar produto",
  "description": "",
  "id": "navegar-no-ecommerce;buscar-produto",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "tenha acessado a pagina",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "informo o produto no campo procurar produtos",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "clico no icone pesquisar",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "seleciono um produto na lista de produtos apresentados",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clico no botao adicionar ao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "clico no icone carrinho de compras",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "vejo o produto no carrinho de compras",
  "keyword": "Entao "
});
formatter.match({
  "location": "ShoppingSteps.tenha_acessado_a_pagina()"
});
formatter.result({
  "duration": 689855321,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.informo_o_produto_no_campo_procurar_produtos()"
});
formatter.result({
  "duration": 33662,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.clico_no_icone_pesquisar()"
});
formatter.result({
  "duration": 31200,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.seleciono_um_produto_na_lista_de_produtos_apresentados()"
});
formatter.result({
  "duration": 32841,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.clico_no_botao_adicionar_ao_carrinho()"
});
formatter.result({
  "duration": 32842,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.clico_no_icone_carrinho_de_compras()"
});
formatter.result({
  "duration": 32021,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingSteps.vejo_o_produto_no_carrinho_de_compras()"
});
formatter.result({
  "duration": 32842,
  "status": "passed"
});
});