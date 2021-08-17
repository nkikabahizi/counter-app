var numbers = document.getElementById("numbers")
console.log(numbers)


var count = 0
  function increment() {
      count = count + 1
    
      numbers.innerHTML = count
      
  }
function save() {
    console.log(count)
}
 