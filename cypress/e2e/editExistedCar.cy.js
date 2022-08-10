import { dataCar } from "../pages/newCar";

describe("Verify edit button functionality", () => {
  it("Verify edit message when successfully edit existed car with valid input", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row:nth-child(3) .MuiButtonBase-root:nth-child(1) path"
    ).click();
    dataCar.typeCarName(" New");
    dataCar.typeCarModel(" New");
    cy.selectTypeAutoManual();
    cy.selectSizeLarge();
    dataCar.typeCarStyle(" New");
    cy.get("[id=':r1p:']").clear();
    dataCar.typeCarYear("2022");
    cy.wait(2000);
    cy.get(".MuiDialogActions-root > :nth-child(2)").click();
    cy.get('[id="success-dialog-description"]').should(
      "have.text",
      "Edit car succesfully"
    );
  });

  it("Verify error message when edit existed car with with empty Make input", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row:nth-child(3) .MuiButtonBase-root:nth-child(1) path"
    ).click();
    cy.get("input[name='make']").clear();
    cy.createData();
    cy.get('[id=":r1j:-helper-text"]').should(
      "have.text",
      '"make" is not allowed to be empty'
    );
  });
  it("Verify error message when edit existed car with empty Model field", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row:nth-child(3) .MuiButtonBase-root:nth-child(1) path"
    ).click();
    cy.get("input[name='model']").clear();
    cy.createData();
    cy.get('[id=":r1l:-helper-text"]').should(
      "have.text",
      '"model" is not allowed to be empty'
    );
  });

  it("Verify error message when edit existed car with empty Style field", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row:nth-child(3) .MuiButtonBase-root:nth-child(1) path"
    ).click();
    cy.get("input[name='style']").clear();
    cy.createData();
    cy.get('[id=":r1n:-helper-text"]').should(
      "have.text",
      '"style" is not allowed to be empty'
    );
  });

  it("Verify error message when edit existed car with empty Release_date field", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row:nth-child(3) .MuiButtonBase-root:nth-child(1) path"
    ).click();
    cy.get("[id=':r1p:']").clear();
    cy.createData();
    cy.get('[id=":r1p:-helper-text"]').should(
      "have.text",
      '"release_date" must be a number'
    );
  });

  it("Verify error message when edit existed car with empty Price field", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row:nth-child(3) .MuiButtonBase-root:nth-child(1) path"
    ).click();
    cy.get("input[name='price']").clear();
    cy.createData();
    cy.get('[id=":r1r:-helper-text"]').should(
      "have.text",
      '"price" must be a number'
    );
  });

  it("Verify warning message when edit data with past year input", () => {
    cy.editCar();
    cy.get("[id=':r1p:']").clear();
    dataCar.typeCarYear("1800");
    cy.createData();
    cy.get('[id=":r1p:-helper-text"]').should(
      "have.text",
      '"release_date" must be greater than or equal to 1900'
    );
  });

  it("Verify warning message when edit data with future year input", () => {
    cy.editCar();
    cy.get("[id=':r1p:']").clear();
    dataCar.typeCarYear("2050");
    cy.createData();
    cy.get('[id=":r1p:-helper-text"]').should(
      "have.text",
      '"release_date" must be less than or equal to 2022'
    );
  });

  it("Verify warning message when users edit data with min price number", () => {
    cy.editCar();
    cy.get("input[name='price']").clear();
    dataCar.typeCarPrice("89");
    cy.createData();
    cy.get('[id=":r1r:-helper-text"]').should(
      "have.text",
      '"price" must be greater than or equal to 1000'
    );
  });

  it("Verify warning message when users edit data with max price number", () => {
    cy.editCar();
    cy.get("input[name='price']").clear().type("99999999999999999999");
    cy.createData();
    cy.get('[id=":r1r:-helper-text"]').should(
      "have.text",
      '"price" must be a safe number'
    );
  });

  it("Verify warning message when users edit data with non-integer price number", () => {
    cy.editCar();
    cy.get("input[name='price']").clear().type("03333.5555444");
    cy.createData();
    cy.get('[id=":r1r:-helper-text"]').should(
      "have.text",
      '"price" must be an integer'
    );
  });
});
