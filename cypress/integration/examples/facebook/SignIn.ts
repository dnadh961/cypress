export class SignInPage {

  fillEmail(value : string) {
    const field = cy.get(`#email`);
    field.clear();
    field.type(value);
    return this;
  }

  fillPassword(value : string) {
    const field = cy.get(`#pass`);
    field.clear();
    field.type(value).should('have.value', value);
    return this;
  }

  submit() {
    const button = cy.get(`#loginbutton`);
    button.click();
  }
}