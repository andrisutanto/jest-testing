const { expect } = require('expect');
const {add, mul, div, sub, palindrome} =  require('./arith');

test('penambahan 2 + 3', () => {
    expect(add(2,3)).toBe(5);
});

test('penambahan 5 + 7', () => {
    expect(add(5,7)).toBe(12);
});

test('penambahan 9 + 1000', () => {
    expect(add(9,1000)).toBe(1009);
});

test('pembagian 10 / 5', () => {
    expect(div(10,5)).toBe(2);
});

test('pengurangan 9 - 3', () => {
    expect(sub(9,3)).toBe(6);
});

test('perkalian 4 * 5', () => {
    expect(mul(4,5)).toBe(20);
});

test('cek palindrome: hannah', () => {
    const strCheck = "hannah";
    const result = palindrome(strCheck);
    expect(result).toBe(true);
});

test('cek palindrome: makan', () => {
    expect(palindrome("makan")).toBe(false);
});