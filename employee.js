// Fetch and display the employee list when the page loads
window.onload = function() {
    fetchEmployees();
};

// Function to fetch employees from the server
function fetchEmployees() {
    fetch('fetch_employees.php')
        .then(response => response.json())
        .then(data => {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';

            data.forEach(employee => {
                const employeeDiv = document.createElement('div');
                employeeDiv.classList.add('employee-item');
                employeeDiv.innerHTML = `
                    <strong>${employee.first_name} ${employee.last_name}</strong> | ${employee.position} | $${employee.salary} | ${employee.department}
                    <button onclick="deleteEmployee(${employee.id})">Delete</button>
                `;
                employeeList.appendChild(employeeDiv);
            });
        })
        .catch(error => console.error('Error fetching employees:', error));
}

// Function to delete an employee
function deleteEmployee(id) {
    fetch('delete_employee.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        fetchEmployees(); // Refresh the employee list
    })
    .catch(error => console.error('Error deleting employee:', error));
}
