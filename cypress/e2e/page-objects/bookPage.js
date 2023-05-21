export class BookPage {
  getBookPublisher() {
    return cy.get("#publisher-wrapper #userName-value");
  }
  getBookTitle() {
    return cy.get("#title-wrapper > .col-md-9 > #userName-value");
  }
  getAddToCollectionButton() {
    return cy.get(".text-right > #addNewRecordButton");
  }
}
