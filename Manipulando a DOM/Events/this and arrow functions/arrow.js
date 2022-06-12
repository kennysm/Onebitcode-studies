testingArrow = {
  name: "Escola javascript",
  normalFunction: function () {
    console.log(this.name)
  },
  arrowFunction: () => {
    console.log(this.name)
  }
}

testingArrow.arrowFunction()
