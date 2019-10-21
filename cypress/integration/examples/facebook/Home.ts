import { SignInPage } from './SignIn';
const config = require('./config.json')

export class HomePage {
	
  constructor() {
    
  }

  visit() {
    cy.visit(config.instanceUrl);
  }

  goToSignIn() {
    const signIn = new SignInPage();
    return signIn;
  }
}
