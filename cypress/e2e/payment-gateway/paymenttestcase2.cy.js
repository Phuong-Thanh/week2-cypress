describe("Check payment flow (negative case if Card Number had characters)", () => {
  it("positive test", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php");
    cy.get("input[class='button special']").click();
    cy.get("input[name='card_nmuber']").type("djsnkdj");
    cy.get("label[id='message1']").should(
      "have.text",
      "Characters are not allowed"
    );
  });
});
