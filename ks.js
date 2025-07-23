const smartphone = {
  brand: "Samsung",
  specs: {
    storage: "128GB",
    camera: {
      front: "12MP",
      back: "50MP"
    }
  }
}
let{ brand, specs:{storage,camera:{front:frontCamera,back:rearCamera}}}=smartphone
console.log(`Buy me ${brand} of the following specs storage should be ${storage} and the specification of front should be ${frontCamera} and back should be ${rearCamera}`)