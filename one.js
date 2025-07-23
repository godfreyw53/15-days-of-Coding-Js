function createCalculator(initialValue =0){
    return{
        result :initialValue,
        divide(num){
            this.result /= num
            console.log(this.result)
        },
        multiply(num){
            this.result *=num
            console.log(this.result)
        },
        add(num){
            this.result +=num
            console.log(this.result)
        },
        subtract(num){
            this.result -=num
            console.log(this.result)
        }

    }
}
const calculator =createCalculator(1500)
calculator.divide(50)
calculator.multiply(30)
calculator.add(1000)
calculator.subtract(700)