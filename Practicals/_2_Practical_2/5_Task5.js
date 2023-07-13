const fs = require('fs');
const readline = require('readline');

// Create a readline interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for employee information
rl.question('Enter employee name: ', (name) => {
  rl.question('Enter employee ID: ', (id) => {
    rl.question('Enter employee position: ', (position) => {
      // Create an employee object
      const employee = {
        name: name,
        id: id,
        position: position
      };

      // Convert the employee object to JSON
      const employeeData = JSON.stringify(employee, null, 2);

      // Write the employee data to the file
      fs.writeFile('employee-data.json', employeeData, 'utf8', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          rl.close();
          return;
        }
        console.log('Employee data has been written to employee-data.json');
        rl.close();
      });
    });
  });
});
