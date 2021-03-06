describe("Check payment flow (negative case if Card Number had shorter than 16 numbers)", () => {
  it("positive test", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php");
    cy.get("input[class='button special']").click();
    cy.get("input[name='card_nmuber']").type("1234567890");
    cy.get("select[name='month']").select("11");
    cy.get("select[name='year']").select("2026");
    cy.get("input[name='cvv_code']").type("766");
    cy.get("input[name='submit']").click();
    cy.on("window:alert", (popUp) => {
      expect(popUp).to.equal("Check card number is 16 digits!");
    });
  });
});
