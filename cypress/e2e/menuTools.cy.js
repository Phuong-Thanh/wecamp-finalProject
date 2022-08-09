import { dataCar } from "../pages/newCar";

describe("Verify menu tools functionality", () => {
  it("Successfully sorted by descending", () => {
    cy.goToWeb();
    cy.wait(3000);
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get('[data-value="desc"]').click();
    cy.get('[data-testid="ArrowDownwardIcon"] > path').should("be.visible");
  });

  it("Successfully sorted by ascending", () => {
    cy.goToWeb();
    cy.wait(3000);
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get('[data-value="asc"]').click();
    cy.get('[data-testid="ArrowUpwardIcon"] > path').should("be.visible");
  });

  it("Successfully filtered with valid input", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(4)").click();
    dataCar.selectColumn("Size");
    dataCar.selectOperator("starts with");
    dataCar.typeValue("Midsize");
    cy.get(".MuiDataGrid-root").should("contain", "Chrysler");
  });

  it("Successfully filtered with valid input - lowercase", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(4)").click();
    dataCar.selectColumn("Size");
    dataCar.selectOperator("starts with");
    dataCar.typeValue("midsize");
    cy.get(".MuiDataGrid-root").should("contain", "Chrysler");
  });

  it("Successfully filtered with valid input and spare character for selected field", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(4)").click();
    dataCar.selectColumn("Size");
    dataCar.selectOperator("contains");
    dataCar.typeValue("midsize ");
    cy.wait(1000);
    cy.get(".MuiDataGrid-root").should("contain", "Chrysler");
  });

  it("Successfully filtered with minimum character for input Name field", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(4)").click();
    dataCar.selectColumn("Name");
    dataCar.selectOperator("contains");
    dataCar.typeValue("24");
    cy.wait(1000);
    cy.get(".MuiDataGrid-root").should("contain", "FIAT 124 Spider");
  });

  it("Successfully filtered with minimum character for input Price field", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(4)").click();
    dataCar.selectColumn("Price");
    dataCar.selectOperator("contains");
    dataCar.typeValue("51");
    cy.wait(1000);
    cy.get(".MuiDataGrid-root").should("contain", "51050");
  });

  it("Verify message when filter with invalid input", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(4)").click();
    dataCar.selectColumn("Size");
    dataCar.selectOperator("starts with");
    dataCar.typeValue("Mini");
    cy.get(".MuiDataGrid-root").should("contain", "No results found.");
  });

  it("Verify message No results when filtered with empty field", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(4)").click();
    dataCar.selectColumn("Size");
    dataCar.selectOperator("is empty");
    cy.get(".MuiDataGrid-root").should("contain", "No results found.");
  });

  it("Successfully hide column", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(5)").click();
    cy.wait(2000);
    cy.get("button[id=':r13:']").should("not.exist");
  });

  it("Successfully show column", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(5)").click();
    cy.wait(1000);
    cy.get("button[id=':rt:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(6)").click();
    cy.get("input[name='price']").check();
    cy.get('[data-field="price"]').should("exist");
  });

  it("Successfully hide all and Show all column", () => {
    cy.goToWeb();
    cy.get("button[id=':r13:']").click({ force: true });
    cy.get("div[role='tooltip'] li:nth-child(6)").click();
    cy.get(".MuiDataGrid-panelFooter > :nth-child(1)").click();
    cy.wait(1000);
    cy.get(".MuiDataGrid-panelFooter > :nth-child(2)").click();
    cy.get('[data-field="name"]').should("be.exist");
  });

  it("Successfully switch page by button", () => {
    cy.goToWeb();
    cy.wait(1000);
    cy.xpath(`//button[contains(.,'3')]`).click({ force: true });
    cy.get(
      ".css-1q9zbch-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected"
    ).should("have.css", "background-color", "rgb(0, 171, 85)");
  });

  it("Successfully switch page by arrow", () => {
    cy.goToWeb();
    cy.wait(1000);
    cy.get('[data-testid="NavigateNextIcon"]')
      .should("be.visible")
      .click({ force: true });
    cy.wait(1000);
    cy.get("[aria-label='page 2']").should(
      "have.css",
      "background-color",
      "rgb(0, 171, 85)"
    );
  });
});
