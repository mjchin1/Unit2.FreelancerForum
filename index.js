const heading = document.querySelector("h1"); 
heading.textContent = "Welcome to the Freelancer's Forum!";

const freelancerNames = ["Renee", "Miriam", "Layla", "Joe", "Ron", "Marshall", "Joan",];
const freelancerOccupations = ["Driver", "Cleaner", "Designer", "Artist", "Speaker", "Singer", "Bartender"];
const freelancerPrices = [20, 60, 90, 70, 25, 35, 45]
let maxFreelancers = 10

const initialFreelancers = [ 
    {
    name: "Alice", 
    occupation: "Writer",
    price: 30
    },

    {
    name: "Bob",
    occupation: "Teacher", 
    price: 50
    },
    {
    name: "Carol", 
    occupation: "Programmer", 
    price: 70
    }
]
let freelancers = [];
const subheading = document.querySelector("h3"); 
subheading.textContent = "Here are our current Freelancers:";  


render()

function render() {
    if (freelancers.length === 0) {
        freelancers = [...initialFreelancers];
    }
    const people = document.querySelector("ul");
    const personElements = [];
    for(i = 0; i < freelancers.length; i ++) {
        const personData = document.createElement("li");
        personElements.push(personData);
        personData.textContent = `${freelancers[i].name}, ${freelancers[i].occupation}, $${freelancers[i].price} per hour`
    }
    people.replaceChildren(...personElements);
    averagePrice(freelancers)
  
}

function addFreelancer(){
    const randomName =  freelancerNames[Math.floor(Math.random() * freelancerNames.length)];
    const randomOccupation =  freelancerOccupations[Math.floor(Math.random() * freelancerOccupations.length)];
    const randomPrice =  freelancerPrices[Math.floor(Math.random() * freelancerPrices.length)];
    freelancers.push({name: randomName, occupation: randomOccupation, price: randomPrice}); 
    render();
}
setInterval(addFreelancer, 3000)

function averagePrice(freelancers) {
    let priceSum = 0; 
    for (let i = 0; i < freelancers.length; i++) {
        let workPrice = freelancers[i].price; 
        priceSum = priceSum + workPrice
        
    } 
    let avPrice = priceSum /freelancers.length
    const aPrice = document.querySelector("h2"); 
    aPrice.textContent = `The average starting price for our current freelancers is $${avPrice} per hour.`;
}
