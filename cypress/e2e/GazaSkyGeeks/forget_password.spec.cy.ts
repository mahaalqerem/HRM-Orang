import loginpage from "../../support/pageObject/login";


const loginobj :loginpage = new loginpage();

describe('forget_pass', () => {

  beforeEach(() => {
    cy.intercept('/web/index.php/dashboard/index').as('Login');
    cy.visit('/');
  });

  it('Forgot your password?', () => {
    loginobj.forget('Admin');
  });

});