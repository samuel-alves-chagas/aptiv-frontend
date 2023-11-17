/// <reference types="cypress"/>

describe('Criando cenários de teste Cadastrando Colaborador', () => {

  it('Caso de teste: Colaborador completo', () => {
    cy.visit('localhost:4200/cadastrarColaborador')
    cy.get('#nome').type('Ana Maria')
    cy.get('#data_admissao').type('2023-11-10')
    cy.get('#unidade').should('exist').select('6556bf4603429fdd64812074');
    cy.get('#cargo').type('Estagiária de Engenharia')
    cy.get('#departamento').type('Desenvolvimento de Firmware')
    cy.get('#perfil_de_acesso').should('exist').select('Padrão');
    cy.get('#data_admissao').type('2023-11-10')
    cy.get('#dataDeNascimento').type('2000-06-05')
    cy.get('#enderecoCep').type('37540-000')
    cy.get('#enderecoLogradouro').type('Rua da Natação, 256')
    cy.get('#enderecoBairro').type('Centro')
    cy.get('#enderecoCidade').type('Santa Rita do Sapucaí')
    cy.get('#enderecoEstado').type('Minas Gerais')
    cy.get('#enderecoPais').type('Brasil')
    cy.get('#telefone').type('(35996324567)')
    cy.get('#email').type('anaMaria@inatel.br')
    cy.get('#cpf').type('98765432198')
    cy.get('#salario').type('5000')
    cy.get('.fa.fa-trash').eq(1).click();
    cy.get('.fa.fa-trash').eq(0).click();
    cy.get('#registro').type('987654')
    cy.get('#senha').type('123456789')
    cy.get('.button-cadastrar').click();
    cy.contains('Cadastrar novo colaborador');
  });

  it('Caso de teste: Campos obrigatórios não informados', () => {
    cy.visit('localhost:4200/cadastrarColaborador')
    cy.get('#nome').type('Ana Maria')
    cy.get('#data_admissao').type('2023-11-10')
    cy.get('#unidade').should('exist').select('6556bf4603429fdd64812074');
    cy.get('#cargo').type('Estagiária de Engenharia')
    cy.get('#departamento').type('Desenvolvimento de Firmware')
    cy.get('#perfil_de_acesso').should('exist').select('Padrão');
    cy.get('#data_admissao').type('2023-11-10')
    cy.get('#dataDeNascimento').type('2000-06-05')
    cy.get('#enderecoCep').type('37540-000')
    cy.get('#enderecoLogradouro').type('Rua da Natação, 256')
    cy.get('#enderecoBairro').type('Centro')
    cy.get('#enderecoCidade').type('Santa Rita do Sapucaí')
    cy.get('#enderecoEstado').type('Minas Gerais')
    cy.get('#enderecoPais').type('Brasil')
    cy.get('#telefone').type('(35996324567)')
    cy.get('#email').type('anaMaria@inatel.br')
    cy.get('#cpf').type('98765432198')
    cy.get('#salario').type('5000')
    cy.get('.fa.fa-trash').eq(1).click();
    cy.get('.fa.fa-trash').eq(0).click();
    cy.get('.button-cadastrar').should('have.attr', 'disabled');
  });
})