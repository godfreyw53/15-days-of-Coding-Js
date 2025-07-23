const car ={
brand: "Toyota",

model: "Corolla",

year: 2015,

color: "blue"
}
car.engine={
    type:"V8",
    horsepower: 250
}
let{brand,model, year, color, engine:{type, horsepower}}=car
console.log(`This ${brand} of ${model} from the ${year} which is ${color} has the best engine of ${type} with horsepower of ${horsepower}`)