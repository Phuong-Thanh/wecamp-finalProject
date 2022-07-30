import { dataCar } from "../pages/newCar";

describe("empty spec", () => {
  it("Create new data", () => {
    cy.newButton();
    dataCar.typeCarName("Hyundai");
    dataCar.typeCarModel("Santa Fei");
    cy.selectTypeAutoManual();
    cy.selectSizeLarge();
    dataCar.typeCarStyle("Sedan");
    cy.selectYear();
    dataCar.typeCarPrice("125000");
    cy.createData();
    cy.wait(2000);
    cy.get(".MuiDataGrid-root").should("contain", "Hyundai Santa Fei");
  });

  //from 2016 to 2020 //then
  it("Edit existed car", () => {
    cy.goToWeb();
    cy.get(
      ".MuiDataGrid-row:nth-child(3) .MuiButtonBase-root:nth-child(1) path"
    ).click();
    cy.get('[data-testid="CalendarIcon"]').click();
    cy.get(":nth-child(121) > .PrivatePickersYear-yearButton").click();
    cy.get(".MuiDialogActions-root > :nth-child(2)").click();
  });

  it("Delete car", () => {
    cy.goToWeb();
    cy.get(
      '[data-id="62cea2be1328190d7e22902f"] > .MuiDataGrid-cell--withRenderer > .css-w4z10b-MuiStack-root > :nth-child(2) > [data-testid="DeleteIcon"] > path'
    ).click();
    cy.get(".MuiDialogActions-root > :nth-child(2)").should(
      "have.text",
      "Confirm"
    );
  });

  it("Sorted by desc", () => {
    cy.goToWeb();
    cy.wait(3000);
    cy.get("button[id=':r15:']").click({ force: true });
    cy.get('[data-value="desc"]').click();
    cy.get('[data-testid="ArrowDownwardIcon"] > path').should("be.visible");
  });

  it("Sorted by asc", () => {
    cy.goToWeb();
    cy.wait(3000);
    cy.get("button[id=':r15:']").click({ force: true });
    cy.get('[data-value="asc"]').click();
    cy.get('[data-testid="ArrowUpwardIcon"] > path').should("be.visible");
  });

  it("Filtered with valid input", () => {
    cy.goToWeb();
    cy.get("button[id=':rj:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(4)").click();
    dataCar.selectColumn("Name");
    dataCar.selectOperator("starts with");
    dataCar.typeValue("Fiat");
    cy.get(".MuiDataGrid-root").should("contain", "FIAT");
  });

  it("Hide column", () => {
    cy.goToWeb();
    cy.get("button[id=':rd:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(5)").click();
    cy.wait(2000);
    cy.get("button[id=':rd:']").should("not.exist");
  });

  it("Show column", () => {
    cy.goToWeb();
    cy.get("button[id=':rd:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(5)").click();
    cy.wait(1000);
    cy.get("button[id=':rp:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(6)").click();
    cy.get("input[name='style']").check();
    cy.get('[data-field="style"]').should("exist");
  });

  it("Switch page by button", () => {
    cy.goToWeb();
    cy.wait(1000);
    //cy.get(":nth-child(3) > .MuiButtonBase-root").trigger();
    cy.xpath(`//button[contains(.,'3')]`).click();
    cy.get(
      ".css-1q9zbch-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected"
    ).should("have.css", "background-color", "rgb(0, 171, 85)");
  });

  it.only("Switch page by arrow", () => {
    cy.goToWeb();
    cy.wait(1000);
    cy.get('[data-testid="NavigateNextIcon"]')
      .should("be.visible")
      .click({ force: true });
    cy.get("[aria-label='page 2']").should(
      "have.css",
      "background-color",
      "rgb(0, 171, 85)"
    );
  });
});
