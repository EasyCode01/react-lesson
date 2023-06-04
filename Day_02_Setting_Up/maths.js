// arithmetic functions
// named and default export

export const addTwo = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const subtract = (a, b) => a - b;



export default doSomething = () => {
    return {
        addTwo,
        multiply,
        subtract
    }
}

doSomething();