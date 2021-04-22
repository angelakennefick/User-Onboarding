describe("User-Onboarding app", () => {
    beforeEach(() => {
      // arbitrary code we want running before our tests run
      cy.visit("http://localhost:1234");
    });
  
    const usernameInput = () => cy.get('input[name="username"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const emailInput = () => cy.get('input[name="email"]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');
  
    // here go our tests
    it("sanity test to make sure tests work", () => {
      // 'expect' is an assertions
      // there can be many assertions per test
      // though inside the 'it' statement (the test),
      // usually those assertions are logically grouped together
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
      expect({}).not.to.equal({}); // not strict (==)
      expect({}).to.eql({}); // strict (===)
    });
  
    it("the proper elements are showing on the screen", () => {
      textInput().should("exist");
      cy.get('input[name="foobar"]').should("not.exist");
      usernameInput().should("exist");
      emailInput().should("exist");
      passwordInput().should("exist");
      submitBtn().should("exist");
     
      
    });
  
    it("can type in the inputs", () => {
      // grab the inputs
      // assert that they are empty
      // type in them
      // assert that the thing we typed is there
      usernameInput()
        .should("have.value", "")
        .type("CoolUser919")
        .should("have.value", "CoolUser919");
  
      passwordInput()
        .should("have.value", "")
        .type("SuperSecurePW")
        .should("have.value", "SuperSecurePW");

        emailInput()
        .should("have.value", "")
        .type("email@email.com")
        .should("have.value", "email@email.com");
    });
  
    it("submit button is disabled until both inputs are filled out", () => {
      // 1. Arrange: set up, sanity checks (make sure initial state is the state we expect)
      // 2. Act: (like typing or clicking - mimicking user input)
      // 3. Assert: that the action has the effect we expect
  
      // button is disabled is true
      submitBtn().should("be.disabled");
      // type in the text field
      textInput().type("TEXT INPUT");
      // button is disabled is true
      submitBtn().should("be.disabled");
      // empty the text field
      textInput().clear();
      // type in the author field
      authorInput().type("AUTHOR INPUT");
      // button is disabled is true
      submitBtn().should("be.disabled");
      // type in the text field
      textInput().type("TEXT INPUT");
      // button is disabled is false
      submitBtn().should("not.be.disabled");
  
      // new syntax you will need for this test:
      // (a) "be.disabled"
      // (b) .clear()
    });
  

  });
  