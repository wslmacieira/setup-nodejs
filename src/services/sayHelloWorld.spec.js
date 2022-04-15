const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello tests', () => {
    it('Should say Hello World', () => {
        const response = sayHelloWorld.sayHello();

        expect(response).toBe('Hello World!');
    });

    it('Should say Hello Wslmacieira', () => {
        const response = sayHelloWorld.sayHello('Wslmacieira');

        expect(response).toBe('Hello Wslmacieira!');
    })
});