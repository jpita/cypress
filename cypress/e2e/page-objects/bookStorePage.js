export class BookStorePage {
  getSearchBox() {
    return cy.get("#searchBox");
  }
  getSearchButton() {
    return cy.get("#basic-addon2");
  }

  getUsernameLabel() {
    return cy.get("#userName-value");
  }

  getBookListTableResults() {
    return cy.get(".rt-table").find(".mr-2");
  }
}
