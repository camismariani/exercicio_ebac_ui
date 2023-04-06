///<reference types="cypress"/>

beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/page/10/")
});

describe('Testar adição do produto ao carrinho', () => {

    it('Selecionar o produto e verifica se foi add ao carinho', () => {

        var qtd=5

        //seleciona o item da lista
        cy.get('[class="product-block grid"]')
            .contains("Sinbad Fitness Tank")
            .click()

        // seleciona o tamanho        
        cy.get('.button-variable-item-XS').click()
        // seleciona a cor
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        // seleciona a quantidade
        cy.get('.input-text').clear().type(qtd)

        // clica para adicionar ao carrinho
        cy.get('.single_add_to_cart_button').click()

        // abre a tela do carrinho de compras
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()

        //verificar se o produto foi realmente add ao carrinho
        cy.get('.product-name > a').should("contain", "Sinbad Fitness Tank")
        cy.get('.quantity > .input-text').should("have.value",qtd)

    });

});