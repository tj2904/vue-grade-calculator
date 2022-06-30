/// <reference types="Cypress" />

describe("The Grade App on Load", () => {
  it("successfully loads", () => {
    cy.visit("/"); // change URL to match your dev URL in cypress.config.js
  });
  it("has correct title", () => {
    cy.contains("h1", "Grade Calculator");
  });
  it("prompts for grade input", () => {
    cy.contains("h4", "Add your grades below");
  });
  it("shows a module average as zero at start", () => {
    cy.contains('[data-test="AvgGrade"]', "0");
  });
});

// describe("input name in field", () => {
//   // it("has default placeholder at the start", () => {
//   //   cy.contains("#name","friend..." )
//   // })
//   it("adds name", () => {
//     cy.get("#name").type("TestUser{enter}");
//   });
//   it("name is added to localStorage", () => {
//     expect(localStorage.getItem("user_name")).to.eq("TestUser");
    
//   });
// });

describe("Adding grades for a First", () => {
  it("add first grade", () => {
    cy.get(".index--0 > td:nth-child(2) > input:nth-child(1)").type("80");
  });

  it("add second grade", () => {
    cy.get(".index--1 > td:nth-child(2) > input:nth-child(1)").type("80");
  });

  it("add third grade", () => {
    cy.get(".index--2 > td:nth-child(2) > input:nth-child(1)").type("80");
  });

  it("add fourth grade", () => {
    cy.get(".index--3 > td:nth-child(2) > input:nth-child(1)").type("80");
  });

  it("add fifth grade", () => {
    cy.get(".index--4 > td:nth-child(2) > input:nth-child(1)").type("80");
  });

  it("add sixth grade", () => {
    cy.get(".index--5 > td:nth-child(2) > input:nth-child(1)").type("80");
  });
  it("shows a module average of 80", () => {
    cy.contains(
      ".class > section:nth-child(4) > table:nth-child(1) > tr:nth-child(8) > td:nth-child(2)",
      "80"
    );
  });
  it("shows grade of 1st Class!", () => {
    cy.contains("h2", "1st Class!");
  });
});

describe("Adding grades for a 2:2", () => {
  it("add first grade", () => {
    cy.get(".index--0 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
  });

  it("add second grade", () => {
    cy.get(".index--1 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
  });

  it("add third grade", () => {
    cy.get(".index--2 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
  });

  it("add fourth grade", () => {
    cy.get(".index--3 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
  });

  it("add fifth grade", () => {
    cy.get(".index--4 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
  });

  it("add sixth grade", () => {
    cy.get(".index--5 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
  });
  it("shows a module average of 50", () => {
    cy.contains(
      ".class > section:nth-child(4) > table:nth-child(1) > tr:nth-child(8) > td:nth-child(2)",
      "50"
    );
  });
  it("shows grade of 2:2", () => {
    cy.contains("h2", "2nd Class (2:2)");
  });
});

describe("Adding grades for a Third", () => {
  it("add first grade", () => {
    cy.get(".index--0 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
  });

  it("add second grade", () => {
    cy.get(".index--1 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
  });

  it("add third grade", () => {
    cy.get(".index--2 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
  });

  it("add fourth grade", () => {
    cy.get(".index--3 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
  });

  it("add fifth grade", () => {
    cy.get(".index--4 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
  });

  it("add sixth grade", () => {
    cy.get(".index--5 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
  });
  it("shows a module average of 40", () => {
    cy.contains(
      ".class > section:nth-child(4) > table:nth-child(1) > tr:nth-child(8) > td:nth-child(2)",
      "40"
    );
  });
  it("shows grade of third", () => {
    cy.contains("h2", "3rd Class");
  });

  describe("Link to Github exists", () => {
    it("checks github links", () => {
      cy.get("a")
        .should("have.attr", "href")
        .and("include", "github.com/tj2904");
      cy.get("a").should("be.visible");
      cy.get(".fa").should("have.class", "fa fa-github");
    });
  });
});
