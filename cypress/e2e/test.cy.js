/// <reference types= "cypress" />

describe("Verify that the list of books is displayed correctly", () => {
  it("display book", () => {
    cy.visit("https://bookcart.azurewebsites.net/");
    cy.get(".mat-mdc-card", { timeout: 10000 })
      .should("be.visible")
      .should("have.length.greaterThan", 0);

    cy.wait(3000);
  });
});

describe("Verify that a user can add a book to the cart", () => {
  it("add to cart successfully", () => {
    cy.visit("https://bookcart.azurewebsites.net/");

    cy.get(
      ":nth-child(3) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();

    cy.get(
      ":nth-child(7) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();

    cy.get(
      ":nth-child(33) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();

    cy.wait(3000);
  });
});

describe("Verify that the cart updates correctly when a book is added", () => {
  it("count correctly", () => {
    cy.visit("https://bookcart.azurewebsites.net/");

    cy.get(
      ":nth-child(2) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();
    cy.get(
      ":nth-child(9) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();
    cy.get(
      ":nth-child(13) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();
    cy.get(
      ":nth-child(23) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();
    cy.get(
      ":nth-child(30) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();
    cy.get(
      ":nth-child(41) > app-book-card > .mat-mdc-card > .mat-mdc-card-content > app-addtocart > .mdc-button > .mdc-button__label"
    ).click();

    cy.wait(4000);
    cy.get(".mat-badge-active").should("contain.text", "6");
  });
});

describe("Verify that the user can proceed to checkout from the cart", () => {
  it("checkout successfully", () => {
    cy.visit("https://bookcart.azurewebsites.net/");

    cy.contains(".mat-mdc-card", "Harry Potter and the Goblet of Fire").find(".mdc-button__label").click();
    cy.contains(".mat-mdc-card", "City of Girls").find(".mdc-button__label").click();

    cy.get(".mdc-icon-button > .mat-mdc-button-touch-target").click();
    cy.get(":nth-child(3) > :nth-child(6)").click();
    cy.get("#mat-input-0").type("Ghydaa7");
    cy.get("#mat-input-1").type("Ghydaa1999$");
    cy.get(".mat-mdc-card-actions > .mdc-button > .mdc-button__label").click();

    cy.get("#mat-input-2").type("Ghydaa");
    cy.get("#mat-input-3").type("Amman");
    cy.get("#mat-input-4").type("Khilda");
    cy.get("#mat-input-5").type("330177");
    cy.get("#mat-input-6").type("Jordan");
    cy.get(".mat-mdc-card-actions > .mat-primary > .mdc-button__label").click();
    cy.get(".mat-mdc-menu-trigger > .mdc-button__label > span").click();
    cy.wait(2000);
    cy.get(":nth-child(2) > .mat-mdc-menu-item-text").click();


  
    

  });
});
