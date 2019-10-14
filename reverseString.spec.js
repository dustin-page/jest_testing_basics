const reverseString = require('./reverseString');

test('reverseString function should exist', () => {
    expect(reverseString).toBeDefined();
});

test('string reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('string reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});