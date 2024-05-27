const well = require('./main.js')


describe('well', () => {
  test(`returns 'Fail!' because there are no 'good' strings present`, () => {
    expect(well(['bad', 'bad', 'bad'])).toBe('Fail!')
  } )

  test(`returns 'Publish!' because there is 1 'good' string present`, () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!')
  } )

  test(`returns 'I smell a series!' because there is more than 2 'good' strings present`, () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe('I smell a series!')
  } )
})


    // assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    // assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    // assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');



    // const sum = require('./sum');

    // test('adds 1 + 2 to equal 3', () => {
    //   expect(sum(1, 2)).toBe(3);
    // });