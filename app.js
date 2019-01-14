const directory = document.getElementById('directory');
const modalUp = document.getElementById('employee-card');
const input = document.getElementById('modal__trigger');
console.log(input);

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
            const caps = function (attr) {
                return attr.charAt(0).toUpperCase() + attr.slice(1);
            };
            const firstName = employee.name.first;
            const lastName = employee.name.last;
            const city = employee.location.city;
            const html = `
            <div class="modal">
            <input id="modal__trigger" type="checkbox">
            <label for="modal__trigger">
                <div id="employee-card">
                    <img src="${employee.picture.large}" alt="employee_image">
                    <div class="employee-info">
                        <div class="name">${caps(firstName) + ' ' + caps(lastName)}</div>
                        <div class="email">${employee.email}</div>
                        <div class="city">${caps(city)}</div>
                    </div>
                </div>
            </label>
            <div class="modal__overlay">
                <div class="modal__wrap">
                    <label for="modal__trigger">&#10006;</label>
                    <img src="${employee.picture.large}" alt="employee_image">
                    <div class="name">${caps(firstName) + ' ' + caps(lastName)}</div>
                    <div class="email">${employee.email}</div>
                    <div class="city">${caps(city)}</div>
                    <hr>
                    <div class="phone">${employee.phone}</div>
                    <div class="address">${employee.location.street + ',' + ' ' + employee.location.state + ' ' + employee.location.postcode}</div>
                    <div class="dob">Birthday: ${employee.dob.date}</div>
                </div>
            </div>
        </div>
            `;
            directory.innerHTML += html;
        });
    });