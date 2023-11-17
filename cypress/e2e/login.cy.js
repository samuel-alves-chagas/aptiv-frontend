/// <reference types="cypress"/>

describe('Criando cenários de teste realizando login', () => {

  it('Caso de teste: Registro e senha corretos', () => {
    cy.visit('localhost:4200')
    cy.get('#registro').type('0001')
    cy.get('#senha').type('123456')
    cy.get('.button-entrar').click();
    cy.contains('Olá');
  });

  it('Caso de teste: Registro e senha incorretos', () => {
      cy.visit('localhost:4200')
      cy.get('#registro').type('1648')
      cy.get('#senha').type('12345678')
      cy.get('.button-entrar').click();
      cy.contains('Registro ou senha inválidos!');
  })
})