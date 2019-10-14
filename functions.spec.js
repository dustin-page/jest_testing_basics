const functions = require('./functions');

/* LIFECYCLE METHODS */

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// const initDatabase = () => {
//     console.log('Database initialized...');
// }

// const closeDatabase = () => {
//     console.log('Database closed...');
// }

const nameCheck = () => {
    console.log('Checking Name...')
}

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff')
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen')
    });
});

/* MATCHERS */

// toBe 
test('should add 2+2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

// not.toBe
test('should add 2+2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

// toBeNull
test('should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test('should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
})

// toEqual - use for testing objects and arrays
test('user should be Dustin Page object ', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Dustin', lastName: 'Page' })
})

// less than and greater than
test('should be less than 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

test('should be less than or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})


test('should be greater than 1600', () => {
    const load1 = 800;
    const load2 = 900;
    expect(load1 + load2).toBeGreaterThan(1600);
})

test('should be greater than or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeGreaterThanOrEqual(1600);
})

// Regex
test('there is no "i" in team', () => {
    expect('team').not.toMatch(/I/i);
});

//Arrays
test('"admin" should be in userNames', () => {
    const userNames = ['john', 'karen', 'admin'];
    expect(userNames).toContain('admin');
});

/* WORKING WITH ASYNC DATA */

// Promise

test('promise - user fetched name should be "Ervin Howell"', () => {

    // assertions method needs to be used when working with async data
    //verifies that a certain number of assertions is called; in this case 1
    expect.assertions(1);

    //return the promise
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Ervin Howell');
        })
});

// Async Await

test('async function - user fetched name should be "Ervin Howell"', async () => {

    // assertions method needs to be used when working with async data
    //verifies that a certain number of assertions is called; in this case 1
    expect.assertions(1);

    //return the promise
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Ervin Howell');
});