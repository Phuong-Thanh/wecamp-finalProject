export const dataCar = {
  txt_name: "input[name='make']",
  txt_model: "input[name='model']",
  txt_price: "input[name='price']",
  txt_style: 'input[name="style"]',
  txt_year: "[id=':r1l:']",
  btt_column: "[id=':r1i:']",
  btt_operator: "[id=':r1k:']",
  txt_value: "[id=':r1n:']",

  typeCarName(name) {
    cy.get(this.txt_name).type(name);
  },
  typeCarModel(model) {
    cy.get(this.txt_model).type(model);
  },
  typeCarPrice(price) {
    cy.get(this.txt_price).type(price);
  },
  typeCarStyle(style) {
    cy.get(this.txt_style).type(style);
  },
  typeCarYear(year) {
    cy.get(this.txt_year).type(year);
  },
  selectColumn(column) {
    cy.get(this.btt_column).select(column);
  },
  selectOperator(operator) {
    cy.get(this.btt_operator).select(operator);
  },
  typeValue(value) {
    cy.get(this.txt_value).type(value);
  },
};
