describe('Login - SauceDemo', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('Deve realizar login com usuário válido', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Deve exibir erro ao tentar logar sem senha', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Password is required')
  })

  it('Deve exibir erro ao tentar logar com campos obrigatórios vazios', () => {
    cy.get('[data-test="login-button"]').click()

    cy.url().should('not.include', '/inventory.html')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')
  })

  it('Deve impedir login de usuário bloqueado', () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('not.include', '/inventory.html')

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out')
  })

})
