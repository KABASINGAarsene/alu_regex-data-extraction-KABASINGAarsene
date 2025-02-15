#!/usr/bin/node

// dataExtractor.js

function extractData(text) {
  const patterns = {
    emails: /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,7}\b/gi,
    urls: /https?:\/\/(?:www\.)?[\w-]+\.[a-z]{2,}(?:\/[\w\-\.?=]*)*/gi,
    phones: /(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}\b)/g,
    currency: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g,
    time: /\b(?:1[0-2]|0?[1-9]):[0-5]\d\s?(?:[AP]M)?\b|\b(?:[01]\d|2[0-3]):[0-5]\d\b/gi, // Added for 5 data types
  };

  const results = {};
  for (const [key, regex] of Object.entries(patterns)) {
    const matches = text.match(regex) || [];
    results[key] = matches;
  }
  return results;
}

// Export the function for testing
module.exports = { extractData };
