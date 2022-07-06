describe("Check payment flow (negative case if leaves Expiration Month not selected)", () => {
  it("positive test", () => {
    cy.visit("https://demo.guru99.com/payment-gateway/index.php");
    cy.get("input[class='button special']").click();
    cy.get("input[name='submit']").click();
    cy.get("select[name='month']").then(($input) => {
      expect($input[0].validationMessage).to.eq(
        "Please select an item in the list."
      );
    });
  });
});
