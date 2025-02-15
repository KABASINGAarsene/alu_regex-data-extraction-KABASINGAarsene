#!/usr/bin/node
// testCases.js
const assert = require('assert');
const { extractData } = require('./dataExtractor');

function runTests() {
  // Test 1: Emails
  const emailTest = "Valid: user@domain.com, invalid: user@.com";
  assert.deepStrictEqual(
    extractData(emailTest).emails,
    ["user@domain.com"],
    "Email test failed"
  );

  // Test 2: URLs
  const urlTest = "Valid: https://example.com, invalid: ftp://example.org";
  assert.deepStrictEqual(
    extractData(urlTest).urls,
    ["https://example.com"],
    "URL test failed"
  );

  // Test 3: Phones
  const phoneTest = "Valid: (123) 456-7890, 123-456-7890, invalid: 123-456";
  assert.deepStrictEqual(
    extractData(phoneTest).phones,
    ["(123) 456-7890", "123-456-7890"],
    "Phone test failed"
  );

  // Test 4: Currency
  const currencyTest = "Valid: $1,234.56, invalid: $1234";
  assert.deepStrictEqual(
    extractData(currencyTest).currency,
    ["$1,234.56"],
    "Currency test failed"
  );

  // Test 5: Time (added for 5 data types)
  const timeTest = "Valid: 2:30 PM, 14:30, invalid: 25:61";
  assert.deepStrictEqual(
    extractData(timeTest).time,
    ["2:30 PM", "14:30"],
    "Time test failed"
  );

  console.log("All 5 tests passed!");
}

runTests();
