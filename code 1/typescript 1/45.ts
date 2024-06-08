// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Define a function to create a car object with optional options...

type car = {
    manufacture: string,
    model:string,
    [key: string]: any
}
function create_car(manufacture: string,model: string, optional: Record<string, any>): car{
    return{
        manufacture,
        model,
        ...optional
    }

}

const my_car: car =create_car("Toyata","Corolla",{color: "silver",year:"2024"})
console.log(my_car);