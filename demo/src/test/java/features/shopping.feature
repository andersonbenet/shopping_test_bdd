# language: pt
# Author: Anderson Benet

@tag
Funcionalidade: Navegar no ecommerce

  @tag1
  Cenario: Buscar produto
    Dado tenha acessado a pagina
    Quando informo o produto no campo procurar produtos
    E clico no icone pesquisar
    E seleciono um produto na lista de produtos apresentados
    E clico no botao adicionar ao carrinho
    E clico no icone carrinho de compras
    Entao vejo o produto no carrinho de compras
