import { dataCar } from "../pages/newCar";

describe("Negative cases", () => {
  it("Create new data with empty input", () => {
    cy.newButton();
    cy.createData();
    cy.get('[id=":r1f:-helper-text"]').should(
      "have.text",
      '"make" is not allowed to be empty'
    );
    cy.get('[id=":r1h:-helper-text"]').should(
      "have.text",
      '"model" is not allowed to be empty'
    );
    cy.xpath("//div[3]/p").should(
      "have.text",
      '"transmission_type" is not allowed to be empty'
    );
    cy.xpath("//div[4]/p").should(
      "have.text",
      '"size" is not allowed to be empty'
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
      '"price" must be greater than or equal to 1000'
    );
  });

  it.only("Create new data with invalid input", () => {
    cy.newButton();
    dataCar.typeCarName("********");
    dataCar.typeCarModel("*&& aaadddd444555");
    dataCar.typeCarStyle("////////////");
    cy.get("[id=':r1l:']").type("99");
    cy.createData();
    cy.get('[id=":r1l:-helper-text"]').should(
      "have.text",
      '"release_date" must be greater than or equal to 1900'
    );
    cy.get("input[name='price']").type("89");
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be greater than or equal to 1000'
    );
  });

  it("Invalid year input", () => {
    cy.newButton();
    cy.get("[id=':r1l:']").type("ss");
    cy.createData();
    cy.get('[id=":r1l:-helper-text"]').should(
      "have.text",
      '"release_date" must be a number'
    );
  });

  it("Invalid price input", () => {
    cy.newButton();
    cy.get("input[name='price']").type("aaa");
    cy.createData();
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be greater than or equal to 1000'
    );
    cy.get("input[name='price']").clear();
    cy.createData();
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be a number'
    );
    cy.get("input[name='price']").type("03333.5555444");
    cy.createData();
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be an integer'
    );
    cy.get("input[name='price']").type("99999999999999999999");
    cy.createData();
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"price" must be a safe number'
    );
  });
});
