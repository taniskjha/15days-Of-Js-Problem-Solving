// Get Sum of People's Budget


// Create the function that takes an array with objects and returns the sum of people's budgets.


function getBudgets(arr) {
	return arr.map(e => e.budget).reduce((a,b) => a+b);
}


   getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]) 

 