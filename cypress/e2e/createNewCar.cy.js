import { dataCar } from "../pages/newCar";

describe("Verify new button functionality", () => {
  it("Verify amount of row showed when successfully load page", () => {
    cy.goToWeb();
    cy.get(".MuiDataGrid-row").should("have.length", "10");
  });

  it("Verify able to create new data with valid input", () => {
    cy.newButton();
    cy.generateNewCar();
    cy.get("[id='success-dialog-title']").should("have.text", "CREATE SUCCESS");
    cy.deleteCar();
  });

  it("Verify able to create new data with special character for input field", () => {
    cy.newButton();
    dataCar.typeCarName("********");
    dataCar.typeCarModel("*&& aaadddd444555");
    cy.selectTypeAutoManual();
    cy.selectSizeLarge();
    dataCar.typeCarStyle("////////////");
    dataCar.typeCarYear("2021");
    dataCar.typeCarPrice("125000");
    cy.createData();
    cy.wait(2000);
    cy.get("[id='success-dialog-title']").should("have.text", "CREATE SUCCESS");
    cy.deleteCar();
  });

  it("Verify selection content of Transmission type field", () => {
    cy.newButton();
    cy.get("#mui-component-select-transmission_type").click();
    cy.wait(2000);
    cy.get('[data-value="MANUAL"]').should("contain", "MANUAL");
    cy.get('[data-value="AUTOMATIC"]').should("contain", "AUTOMATIC");
    cy.get('[data-value="AUTOMATED_MANUAL"]').should(
      "contain",
      "AUTOMATED_MANUAL"
    );
    cy.get('[data-value="DIRECT_DRIVE"]').should("contain", "DIRECT_DRIVE");
    cy.get('[data-value="UNKNOWN"]').should("contain", "UNKNOWN");
  });

  it("Verify selection content of Size field", () => {
    cy.newButton();
    cy.get("#mui-component-select-size").click();
    cy.wait(2000);
    cy.get('[data-value="Compact"]').should("contain", "Compact");
    cy.get('[data-value="Midsize"]').should("contain", "Midsize");
    cy.get('[data-value="Large"]').should("contain", "Large");
  });

  it("Verify warning message when create new data with empty input", () => {
    cy.newButton();
    cy.get("input[name='price']").clear();
    cy.createData();
    cy.get('[id=":r1j:-helper-text"]').should(
      "have.text",
      '"make" is not allowed to be empty'
    );
    cy.get('[id=":r1l:-helper-text"]').should(
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
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"style" is not allowed to be empty'
    );
    cy.get('[id=":r1p:-helper-text"]').should(
      "have.text",
      '"release_date" must be a number'
    );
    cy.get('[id=":r1r:-helper-text"]').should(
      "have.text",
      '"price" must be a number'
    );
  });

  it("Verify warning message when create with future year input", () => {
    cy.newButton();
    dataCar.typeCarYear("2029");
    cy.createData();
    cy.wait(1000);
    cy.get('[id=":r1p:-helper-text"]').should(
      "have.text",
      '"release_date" must be less than or equal to 2022'
    );
  });

  it("Verify warning message when create new data with year 1000", () => {
    cy.newButton();
    dataCar.typeCarYear("1000");
    cy.createData();
    cy.wait(1000);
    cy.get('[id=":r1p:-helper-text"]').should(
      "have.text",
      '"release_date" must be greater than or equal to 1900'
    );
  });
  it("Verify warning message when create new data with year string", () => {
    cy.newButton();
    dataCar.typeCarYear("hhh");
    cy.createData();
    cy.wait(1000);
    cy.get('[id=":r1p:-helper-text"]').should(
      "have.text",
      '"release_date" must be a number'
    );
  });

  it("Verify warning message when create new data with min year input", () => {
    cy.newButton();
    dataCar.typeCarPrice("89");
    cy.createData();
    cy.wait(1000);
    cy.get('[id=":r1r:-helper-text"]').should(
      "have.text",
      '"price" must be greater than or equal to 1000'
    );
  });

  it("Verify warning message when create new data with max price input", () => {
    cy.newButton();
    dataCar.typeCarPrice("10000000000000000000000000000000000000");
    cy.createData();
    cy.wait(1000);
    cy.get('[id=":r1r:-helper-text"]').should(
      "have.text",
      '"price" must be a safe number'
    );
  });
  it("Verify warning message when create new data with non-integer number", () => {
    cy.newButton();
    dataCar.typeCarPrice("1000.9009");
    cy.createData();
    cy.wait(1000);
    cy.get('[id=":r1r:-helper-text"]').should(
      "have.text",
      '"price" must be an integer'
    );
  });
});
