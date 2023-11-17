/// <reference types="cypress"/>

describe('Criando cenários de teste para remover colaborador', () => {

  it('Caso de teste: Colaborador encontrado na pesquisa', () => {
    cy.visit('localhost:4200')
    cy.get('#registro').type('0001')
    cy.get('#senha').type('123456')
    cy.get('.button-entrar').click()
    cy.get(':nth-child(5) > button').click()
    cy.get('[style="margin-top: 20px;"] > .button-painelAdm').click()
    cy.get('#nome').type('Laura Ellen')
    cy.get('.input-text-group > .trash').click()
    cy.get('span').should('contain.text', 'Laura Ellen')
  });

  it('Caso de teste: Colaborador não encontrado na pesquisa', () => {
    cy.visit('localhost:4200')
    cy.get('#registro').type('0001')
    cy.get('#senha').type('123456')
    cy.get('.button-entrar').click()
    cy.get(':nth-child(5) > button').click()
    cy.get('[style="margin-top: 20px;"] > .button-painelAdm').click()
    cy.get('#nome').type('Kaique')
    cy.get('.input-text-group > .trash').click()
    cy.get('span').should('contain.text', 'Colaborador não encontrado')
  })
})