import { dataCar } from "../pages/newCar";

describe("Verify delete button functionality", () => {
  it("Delete car", () => {
    cy.generateNewCar();
    cy.get(".MuiButton-root").click();
    cy.get(
      ".MuiDataGrid-row:nth-child(1) .MuiButtonBase-root:nth-child(2) path"
    ).click();
    cy.get(".MuiDialogActions-root > :nth-child(2)").click();
    cy.get("#delete-success-dialog-title").should(
      "have.text",
      "DELETE SUCCESS"
    );
    cy.get("#delete-success-dialog-description").should(
      "contain",
      "2021 Hyundai Santa Fei"
    );
  });
});
