describe("Check the login flow (negative case)", () => {
  it('clicks the link "type"', () => {
    cy.visit("https://demo.guru99.com/test/newtours/");
    cy.wait(1000);
    cy.get("input[name='userName']").click();
    cy.get("input[name='userName']").type("wrongUsername");
    cy.get("input[name='password']").click();
    cy.get("input[name='password']").type("wrongPassword");
    cy.get("input[name='submit']").click();
    //cy.get("h3").should("be.visible").and("have.text", "Login Successfully");
    cy.get("span")
      .should("be.visible")
      .should("contain.text", "Enter your userName and password correct");
  });
});
