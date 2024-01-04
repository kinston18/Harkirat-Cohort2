function greetPerson(firstName, lastName) {
    // Check if both first name and last name are provided
    if (firstName && lastName) {
    console.log(`Hello, ${firstName} ${lastName}!`);
    } else {
      // If one or both names are missing
    console.log('Please provide both first name and last name.');
    }
  }
  
  greetPerson('Prajjwal', 'Goswami');
  