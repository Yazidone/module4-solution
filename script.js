


const names = ['John', 'Jane', 'Jerry', 'Michael', 'Alice'];

names.forEach(name => {
  // Check if the name starts with 'J' or 'j'
  if (name.charAt(0).toLowerCase() === 'j') {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
});


