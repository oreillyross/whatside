import * as React from "react";

test("Number of items is above 2", () => {
  expect(1).toBeLessThanOrEqual(1);
});

const data1 = [{ title: "React is Cool!" }];

const data2 = ["React Native", "React"];

//Arrays testing

test("list of courses", () => {
  expect(["React Native", "Meteor", "React"]).toEqual(
    expect.arrayContaining(data2)
  );
});

// Objects testing

test("The first course to have property title", () => {
  expect(data1[0]).toHaveProperty('title')
});
