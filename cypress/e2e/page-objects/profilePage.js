export class ProfilePage {
  getFirstBookTitle() {
    return cy.get(".rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)");
  }
  getDeleteButton() {
    return cy.get("#delete-record-undefined");
  }
  getOKButton() {
    return cy.get("#closeSmallModal-ok");
  }
}
