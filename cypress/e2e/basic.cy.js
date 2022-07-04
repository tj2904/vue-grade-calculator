/// <reference types="Cypress" />

describe("The Grade App on Load", () => {
  it("successfully loads with title & prompts", () => {
    cy.visit("/"); // change URL to match your dev URL in cypress.config.js
    cy.contains("h1", "Grade Calculator");
    cy.contains("h4", "Add your grades below");
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
  it("add 80 for each grade", () => {
    cy.get(".index--0 > td:nth-child(2) > input:nth-child(1)").type("80");
    cy.get(".index--1 > td:nth-child(2) > input:nth-child(1)").type("80");
    cy.get(".index--2 > td:nth-child(2) > input:nth-child(1)").type("80");
    cy.get(".index--3 > td:nth-child(2) > input:nth-child(1)").type("80");
    cy.get(".index--4 > td:nth-child(2) > input:nth-child(1)").type("80");
    cy.get(".index--5 > td:nth-child(2) > input:nth-child(1)").type("80");
  });
  it("shows a module average of 80 & correct grade", () => {
    cy.contains('[data-test="AvgGrade"]', "80 %");
    cy.contains("h2", "1st Class!");
  });
});

describe("Adding grades for a 2:2", () => {
  it("add 50 for each grade", () => {
    cy.get(".index--0 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
    cy.get(".index--1 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
    cy.get(".index--2 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
    cy.get(".index--3 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
    cy.get(".index--4 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
    cy.get(".index--5 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}50"
    );
  });
  it("shows a module average of 50 & correct grade", () => {
    cy.contains('[data-test="AvgGrade"]', "50 %");
    cy.contains("h2", "2nd Class (2:2)");
  });
});

describe("Adding grades for a Third", () => {
  it("add 40 for each grade", () => {
    cy.get(".index--0 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
    cy.get(".index--1 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
    cy.get(".index--2 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
    cy.get(".index--3 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
    cy.get(".index--4 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
    cy.get(".index--5 > td:nth-child(2) > input:nth-child(1)").type(
      "{backspace}{backspace}40"
    );
  });
  it("shows a module average of 40 and correct grade", () => {
    cy.contains('[data-test="AvgGrade"]', "40 %");
    cy.contains("h2", "3rd Class");
  });
});

describe("Link to Github exists", () => {
  it("is visible", () => {
    cy.get("a")
      .should("have.attr", "href")
      .and("include", "github.com/tj2904");
    cy.get("a").should("be.visible");
    cy.get(".fa").should("have.class", "fa fa-github");
  });
});
