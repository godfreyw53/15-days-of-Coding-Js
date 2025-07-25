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
console.log("...............................................")

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
fruits.pop(fruits)

fruits.slice()

console.log(fruits)