// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
  
    for (let i = 0; i < contacts.length; i++) {
  
     if (name == contacts[i].firstName && contacts[i].hasOwnProperty(prop) == false) {
        console.log("No such property");
        return "No such property";
  
  
      }  else if (name == contacts[i].firstName && contacts[i].hasOwnProperty(prop) == true) {
  
        console.log(contacts[i][prop])
        return contacts[i][prop];
        
  
      }
  
    }
  
  return "No such contact";
  
    // Only change code above this line
  
  }
  
  lookUpProfile("Harry", "likes");