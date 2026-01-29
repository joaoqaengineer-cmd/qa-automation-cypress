class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com')
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username)
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password)
  }

  submit() {
    cy.get('[data-test="login-button"]').click()
  }

  login(username, password) {
    if (username) this.fillUsername(username)
    if (password) this.fillPassword(password)
    this.submit()
  }

  errorMessage() {
    return cy.get('[data-test="error"]')
  }

}

export default new LoginPage()
