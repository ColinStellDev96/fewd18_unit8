const directory = document.getElementById('directory');

fetch('https://randomuser.me/api/?results=12&inc=name,location,email,phone,picture,dob')
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log('Looks Like There Was A Problem')
    })
    .then(data => {
        console.log(data);
        data.results.forEach(function (employee) {
            console.log(employee);
            const html =
                `
            <div class="employee-card">
            <img src="${employee.picture.large}" alt="employee_image">
                <div class="employee-info">
                    <div class="name">Employee Name</div>
                    <div class="email">Email</div>
                    <div class="city">City</div>
                </div>
            </div>
            `;
            return directory.innerHTML = html;
        });

    })