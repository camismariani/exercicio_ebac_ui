///<reference types="cypress"/>

const { faker } = require("@faker-js/faker")

beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
});

describe('Fazer o cadastro no site', () => {

    it('Pré-cadastro', () => {

        // faz um registro de e-mail e senha com a biblioteca faker
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type(faker.internet.password())

        //clicar no botão de registrar
        cy.get(':nth-child(4) > .button').click()

        //abre a tela de detalhes da conta pra finalizar o cadastro
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        // preenche o nome
        cy.get('#account_first_name').type(faker.name.firstName())

        //preenche sobrenome
        cy.get('#account_last_name').type(faker.name.lastName())

        // clica em salvar para salvar os dados
        cy.get('.woocommerce-Button').click()

        //verificar se realmente o cadastro foi salvo verificando se o texto contem o que foi escrito na condição
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados')

    });

});