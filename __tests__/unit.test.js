// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test isPhoneNumber
test('valid format with dashes', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
})

test('Valid format with parentheses', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
})

test('Letters instead of numbers', () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
})

test('Too short', () => {
  expect(isPhoneNumber("123-456")).toBe(false);
})


// Test isEmail
test('valid email', () => {
  expect(isEmail("hello@gmail.com")).toBe(true);
})

test('valid email with underscore', () => {
  expect(isEmail("hello_world@mail.co")).toBe(true);
})

test('missing @ symbol', () => {
  expect(isEmail("hellogmail.com")).toBe(false);
})

test('missing domain', () => {
  expect(isEmail("hello@")).toBe(false);
})


// Test isStrongPassword
test('valid password', () => {
  expect(isStrongPassword("Hello123")).toBe(true);
})

test('valid password with underscore', () => {
  expect(isStrongPassword("a_valid_one")).toBe(true);
})

test('starts with number', () => {
  expect(isStrongPassword("1invalid")).toBe(false);
})

test('too short', () => {
  expect(isStrongPassword("abc")).toBe(false);
})


// Test isDate
test('valid date 2 digits', () => {
  expect(isDate("12/31/2023")).toBe(true);
})

test('valid date 1 digit', () => {
  expect(isDate("1/1/2023")).toBe(true);
})

test('year too short', () => {
  expect(isDate("12/31/23")).toBe(false);
})

test('letters instead of numbers', () => {
  expect(isDate("ab/cd/efgh")).toBe(false);
})


// Test isHexColor
test('valid 6 char with #', () => {
  expect(isHexColor("#FF5733")).toBe(true);
})

test('valid 3 char without #', () => {
  expect(isHexColor("A1B")).toBe(true);
})

test('invalid character', () => {
  expect(isHexColor("#GGG111")).toBe(false);
})

test('too long', () => {
  expect(isHexColor("#FF57331")).toBe(false);
})