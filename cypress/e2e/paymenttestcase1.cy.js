describe("Check payment flow (positive case)", () => {
  it("positive test", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php");
    cy.get("select[name='quantity']").select("4");
    cy.get("input[class='button special']").click();
    cy.get("font").should("contain.text", "$80.00");
    cy.get("input[name='submit'").should("have.value", "Pay $80.00");
    cy.get("input[name='card_nmuber']").type("1234567890123456");
    cy.get("select[name='month']").select("11");
    cy.get("select[name='year']").select("2026");
    cy.get("input[name='cvv_code']").type("766");
    cy.get("input[name='submit']").click();
    cy.get("h2").should("be.visible").and("have.text", "Payment successfull!");
  });
});
