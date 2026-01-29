import LoginPage from '../pages/login.page'

describe('Login - SauceDemo', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('Deve realizar login com usuário válido', () => {
    LoginPage.login('standard_user', 'secret_sauce')

    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Deve exibir erro ao tentar logar sem senha', () => {
    LoginPage.login('standard_user')

    LoginPage.errorMessage()
      .should('be.visible')
      .and('contain', 'Password is required')
  })

  it('Deve exibir erro ao tentar logar com campos obrigatórios vazios', () => {
    LoginPage.submit()

    LoginPage.errorMessage()
      .should('be.visible')
      .and('contain', 'Username is required')
  })

  it('Deve impedir login de usuário bloqueado', () => {
    LoginPage.login('locked_out_user', 'secret_sauce')

    LoginPage.errorMessage()
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out')
  })

})
