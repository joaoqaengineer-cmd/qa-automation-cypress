import LoginPage from '../pages/login.page'

describe('Login - SauceDemo', () => {

  beforeEach(() => {
    LoginPage.visit()
    cy.fixture('users').as('users')
  })

  it('Deve realizar login com usuário válido', function () {
    LoginPage.login(
      this.users.valid.username,
      this.users.valid.password
    )

    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
  })

  it('Deve impedir login de usuário bloqueado', function () {
    LoginPage.login(
      this.users.locked.username,
      this.users.locked.password
    )

    LoginPage.errorMessage()
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out')
  })

  it('Deve exibir erro ao tentar logar sem senha', function () {
    LoginPage.login(this.users.valid.username)

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
})
