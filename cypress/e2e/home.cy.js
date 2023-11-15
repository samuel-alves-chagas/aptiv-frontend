/// <reference types="cypress"/>

describe('Criando cenários de teste verificar o perfil do usuário', () => {

    it('Caso de teste: Colaborador com perfil admin', () => {
      cy.visit('localhost:4200')
      cy.get('#registro').type('0001')
      cy.get('#senha').type('123456')
      cy.get('.button-entrar').click();
      cy.get('.header').should('be.visible');
      cy.get('.header').should('have.css', 'background-color', 'rgb(248, 64, 24)');
    });
  
    it('Caso de teste: Colaborador com perfil padrão', () => {
        cy.visit('localhost:4200')
        cy.get('#registro').type('1704')
        cy.get('#senha').type('123456')
        cy.get('.button-entrar').click();
        cy.get('.header').should('be.visible');
        cy.get('.header').should('have.css', 'background-color', 'rgb(255, 255, 255)');
    })
  })