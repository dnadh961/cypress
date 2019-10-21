import { HomePage } from './Home';
const config = require('./config.json')

describe('Sign In', () => {
  it('should show an error message on empty input', () => {
    const home = new HomePage();
    home.visit();

    const signIn = home.goToSignIn();

    signIn.fillEmail(config.user).fillPassword(config.pwd).submit();
  });

  // more tests
});