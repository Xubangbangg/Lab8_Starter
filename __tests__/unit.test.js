// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber 4 tests
test('isPhoneNumber True1', () => {
    res = functions.isPhoneNumber('858-349-3948');
    expect(res).toBe(true);
});

test('isPhoneNumber True2', () => {
    res = functions.isPhoneNumber('(858)349-3948');
    expect(res).toBe(true);
});

test('isPhoneNumber False1', () => {
    res = functions.isPhoneNumber('858-349-394');
    expect(res).toBe(false);
});

test('isPhoneNumber False2', () => {
    res = functions.isPhoneNumber('8583493948');
    expect(res).toBe(false);
});

//isemail 4 tests
test('isEmail True1', () => {
    res = functions.isEmail('mix006@ucsd.edu');
    expect(res).toBe(true);
});

test('isEmail True2', () => {
    res = functions.isEmail('mix006__@ucsd.edu');
    expect(res).toBe(true);
});

test('isEmail False1', () => {
    res = functions.isEmail('mix006@ucsd');
    expect(res).toBe(false);
});

test('isEmail False2', () => {
    res = functions.isEmail('mix006djaihfoa');
    expect(res).toBe(false);
});

//isStrongPassword 4 tests
test('isStrongPassword True1', () => {
    res = functions.isStrongPassword('lolol');
    expect(res).toBe(true);
});

test('isStrongPassword True2', () => {
    res = functions.isStrongPassword('lolol123');
    expect(res).toBe(true);
});

test('isStrongPassword False1', () => {
    res = functions.isStrongPassword('hh');
    expect(res).toBe(false);
});

test('isStrongPassword False2', () => {
    res = functions.isStrongPassword('1234');
    expect(res).toBe(false);
});

//isDate 4 tests
test('isDate True1', () => {
    res = functions.isDate('1/1/2000');
    expect(res).toBe(true);
});

test('isDate True2', () => {
    res = functions.isDate('11/11/2021');
    expect(res).toBe(true);
});

test('isDate False1', () => {
    res = functions.isDate('11/11/21');
    expect(res).toBe(false);
});


test('isDate False2', () => {
    res = functions.isDate('11/111/21');
    expect(res).toBe(false);
});

//isHexColor 4 tests
test('isHexColor True1', () => {
    res = functions.isHexColor('#AA5533');
    expect(res).toBe(true);
});

test('isHexColor True2', () => {
    res = functions.isHexColor('#AF1233');
    expect(res).toBe(true);
});

test('isHexColor False1', () => {
    res = functions.isHexColor('#');
    expect(res).toBe(false);
});

test('isHexColor False2', () => {
    res = functions.isHexColor('#1');
    expect(res).toBe(false);
});