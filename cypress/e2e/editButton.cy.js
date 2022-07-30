import { dataCar } from "../pages/newCar";

describe("Negative cases Edit Button", () => {
  it("Edit existed car with empty input", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row--lastVisible > .MuiDataGrid-cell--withRenderer > .css-w4z10b-MuiStack-root > :nth-child(1)"
    ).click();
    cy.get("input[name='make']").clear();
    cy.get("input[name='model']").clear();
    cy.get("input[name='style']").clear();
    cy.get("[id=':r1l:']").clear();
    cy.get("input[name='price']").clear();
    cy.createData();
    cy.get('[id=":r1f:-helper-text"]').should(
      "have.text",
      '"make" is not allowed to be empty'
    );
    cy.get('[id=":r1h:-helper-text"]').should(
      "have.text",
      '"model" is not allowed to be empty'
    );
    cy.get('[id=":r1j:-helper-text"]').should(
      "have.text",
      '"style" is not allowed to be empty'
    );
    cy.get('[id=":r1l:-helper-text"]').should(
      "have.text",
      '"release_date" must be a number'
    );
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be a number'
    );
  });

  it.only("Edit data with invalid input", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row--lastVisible > .MuiDataGrid-cell--withRenderer > .css-w4z10b-MuiStack-root > :nth-child(1)"
    ).click();
    cy.get("[id=':r1l:']").clear();
    cy.get("input[name='price']").clear();
    dataCar.typeCarYear("1800");
    dataCar.typeCarPrice("89");
    cy.createData();
    cy.get('[id=":r1l:-helper-text"]').should(
      "have.text",
      '"release_date" must be greater than or equal to 1900'
    );
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be greater than or equal to 1000'
    );
    cy.get("input[name='price']").clear().type("03333.5555444");
    cy.createData();
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be an integer'
    );
    cy.get("input[name='price']").clear().type("99999999999999999999");
    cy.createData();
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be a safe number'
    );
  });
});
