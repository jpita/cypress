describe("emissions-api.org api testing", () => {
  let product;
  let firstTimeRange;
  let lastTimeRange;
  let baseUrl = "https://api.v2.emissions-api.org/api/v2/";
  it("check that all values of statistics endpoint are numbers", () => {
    // get all products
    cy.request(baseUrl + "products.json").as("productsRequest");
    cy.get("@productsRequest").then((products) => {
      expect(products.status).to.eq(200);
      // get the random position product item and save it to a variable
      const randomNumber = Math.floor(Math.random() * products.body.length);
      product = products.body[randomNumber].product_variable;
      // get the data range of the product
      cy.request(baseUrl + product.split("_", 1) + "/data-range.json").as(
        "dataRangeRequest"
      );
      cy.get("@dataRangeRequest").then((dataRange) => {
        expect(dataRange.status).to.eq(200);
        firstTimeRange = dataRange.body.first;
        lastTimeRange = dataRange.body.last;
        // get the statistics of the product limited to 2 so that the call doesn't take too long
        cy.request(
          baseUrl +
            product.split("_", 1) +
            "/statistics.json?country=PRT&interval=day&begin=" +
            firstTimeRange +
            "&end=" +
            lastTimeRange +
            "&limit=2"
        ).as("statisticsRequest");
        cy.get("@statisticsRequest").then((statistics) => {
          expect(statistics.status).to.eq(200);
          const data = statistics.body;
          // check that all values of statistics endpoint are numbers
          data.forEach((item) => {
            const value = item.value;
            Object.values(value).forEach((property) => {
              expect(typeof property).to.equal("number");
            });
          });
        });
      });
    });
  });
});
