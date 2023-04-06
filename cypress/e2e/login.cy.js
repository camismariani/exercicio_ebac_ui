///<reference types="cypress"/>

beforeEach(() => {
  // abre a página de login do site
  cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
});

describe('Teste de login', () => {

  it('Login com sucesso', () => {
    // digitar e-mail e senha
    cy.get('#username').type("aluno_ebac@teste.com")
    cy.get('#password').type("teste@teste.com")

    //clicar no botão login
    cy.get('.woocommerce-form > .button').click()

    // verificar se o aluno logou
    cy.get('.page-title').should("contain", "Minha conta")

  });

  it('Login com senha errada', () => {
    // digitar e-mail e senha
    cy.get('#username').type("aluno_ebac@teste.com")
    cy.get('#password').type("1234")

    //clicar no botão login
    cy.get('.woocommerce-form > .button').click()

    // verificar se o sistema apresenta a msg correta para quando a senha estiver errada
    cy.get('.woocommerce-error > li').should("contain", "Erro: a senha fornecida para o e-mail")

  });

  it('Login com e-mail errado', () => {
    // digitar e-mail e senha
    cy.get('#username').type("camilamariani@teste.com")
    cy.get('#password').type("teste@teste.com")

    //clicar no botão login
    cy.get('.woocommerce-form > .button').click()

    // verificar se o sistema apresenta a msg correta para quando o e-mail estiver errado
    cy.get('.woocommerce-error > li').should("contain", "Endereço de e-mail desconhecido")
  });

  it('Login com usuario não encontrado', () => {
    // digitar e-mail e senha
    cy.get('#username').type("camilamariani")
    cy.get('#password').type("1234")

    //clicar no botão login
    cy.get('.woocommerce-form > .button').click()

    // verificar se o sistema apresenta a msg correta para quando o usuario não for encontrado
    cy.get('.woocommerce-error > li').should("contain", "não está cadastrado neste site")


  });

});