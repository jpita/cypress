import { BookStorePage } from "../page-objects/bookStorePage";
import { BookPage } from "../page-objects/bookPage";
import { ProfilePage } from "../page-objects/profilePage";

const bookStorePage = new BookStorePage();
const bookPage = new BookPage();
const profilePage = new ProfilePage();

describe("book store spec", () => {
  beforeEach(() => {
    cy.login("ivf", "Demoqa@12");
  });

  it("user can add a book to his profile", () => {
    bookStorePage.getSearchBox().type("O'Reilly Media");
    bookStorePage.getSearchButton().click();
    bookStorePage.getBookListTableResults().eq(3).click();
    bookPage.getBookPublisher().should("have.text", "O'Reilly Media");
    bookPage.getBookTitle().then(($title) => {
      bookPage.getAddToCollectionButton().click();
      cy.contains("Profile").click();
      profilePage.getFirstBookTitle().should("contain.text", $title.text());
    });
  });

  it("user can delete a book from his collection", () => {
    cy.contains("Profile").click();
    profilePage.getDeleteButton().click();
    profilePage.getOKButton().click();
    cy.contains("No rows found").should("be.visible");
  });
});
