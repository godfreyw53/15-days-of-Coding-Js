class product{
    constructor(name,price, yearOfManufacture){
        this.name = name
        this.price = price
        this.yearOfManufacture = yearOfManufacture
    }
    displayProduct(){
        console.log(`Name of the Product: ${this.name}`)
        console.log(`The Price is: $${this.price.toFixed(2)}`)
        console.log(`Year of Manfacture: ${this.yearOfManufacture}`)
    }
    calculateTotal(salesTax){
        return this.price + (this.price + salesTax)
    }
}
const salesTax = 0.05
const product1 = new product("Underwear", 76.5, 2015)
const product2 =new product("Shirt", 59 , 2023)
const product3 = new product("Trouser", 45 ,2026)

product1.displayProduct();
const total = product1.calculateTotal(salesTax)
console.log(`Total Price (with tax): $${total}`)
product2.displayProduct()
const Total = product2.calculateTotal(salesTax)
console.log(`Total Price (with tax): $${total}`)
product3.displayProduct()
const Totals = product3.calculateTotal(salesTax)
console.log(`Total Price (with tax): $${total.toFixed(2)}`)
