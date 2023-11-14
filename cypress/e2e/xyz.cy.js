/// <reference types="cypress"/>

describe('Criando cenários de teste para o Google', () => {

  it('Caso de teste: Erro na criação de conta devido a email já utilizado', () => {
    cy.visit('localhost:4200')
    cy.get('#registro').type('1234')
    cy.get('#senha').type('123456')
    cy.get('.button-entrar').click()

    cy.get('p').should('contain.text', 'Olá, Karoline')
  })
})