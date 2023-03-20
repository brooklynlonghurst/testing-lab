const functions = require('./functions.js')


test('two is two', () => {
    expect(functions.returnTwo()).toBe(2)
})

test('this should be a greeting', () => {
    expect(functions.greeting('Jack')).toBe('Hello Jack.')
})

test('Jill should be there', () => {
    expect(functions.greeting('Jill')).toBe('Hello Jill.')
})

test('this should add', () => {
    expect(functions.add(1, 2)).toBe(3)
})

test('math will work', () => {
    expect(functions.add(5, 9)).toBe(14)
})