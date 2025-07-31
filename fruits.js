const fruits=[
              {
                name:"apple",
                color: "red",
                calories:95
              },
              {
                name:"orange",
                color: "orange",
                calories:45
            },
           
              {
                name:"banana",
                color: "yellow",
                calories:105
            },
              {
                name:"coconut",
                color: "white",
                calories:159
            },
              {
                name:"pineapple",
                color: "yellow",
                calories:37
            }

]

fruits.push(
            {
                name:"avocado",
                color: "yellow",
                calories:180
            },
            {
                name:"lemon",
                color: "green",
                calories:39
            },

            {
                name:"berries",
                color: "purple",
                calories:120
            }
        
)
//fruits.forEach(matunda => console.log(matunda.name))


//const fruitNames= fruits.map(matunda => matunda.name)
//const fruitColors = fruits.map(matunda=>matunda.color)
//const fruitCalories = fruits.map(matunda=>matunda.calories)



//const lowCal=fruits.filter(matunda =>matunda.calories <100)
//const fruitsIsYellow = fruits.filter(matunda=>matunda.color==="yellow")
//const fruitsIsRed = fruits.filter(matunda =>matunda.color=== "red")
const highCalories= fruits.filter(matunda=>matunda.calories>110)
//console.log(fruitsIsRed)
console.log(highCalories)
//console.log(lowCal)
//console.log(fruitNames)
//console.log(fruitColors)
//console.log(fruitCalories)