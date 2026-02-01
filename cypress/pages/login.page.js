class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com')
  }

  fillUsername(username) {
    if (username) {
      cy.get('[data-test="username"]').clear().type(username)
    }
  }

  fillPassword(password) {
    if (password) {
      cy.get('[data-test="password"]').clear().type(password)
    }
  }

  submit() {
    cy.get('[data-test="login-button"]').click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  errorMessage() {
    return cy.get('[data-test="error"]')
  }
}

export default new LoginPage()
