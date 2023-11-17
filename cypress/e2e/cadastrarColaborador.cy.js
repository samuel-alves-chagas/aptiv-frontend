/// <reference types="cypress"/>

describe('Criando cenários de teste Cadastrando Colaborador', () => {

  it('Caso de teste: Registro e senha corretos', () => {
    cy.visit('localhost:4200/cadastrarColaborador')
    cy.get('#nome').type('Ana Maria')
    cy.get('#nome').type('Ana Maria')
  });
})