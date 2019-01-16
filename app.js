const directory = document.getElementById('directory');
const employeeCard = document.getElementsByClassName('employee-card')[0];
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

fetch('https://randomuser.me/api/?results=12&inc=name,location,email,phone,picture,dob')
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log('Error-No Data For You')
    })
    .then(data => {
        console.log(data);
        data.results.forEach(function (employee) {
            console.log(employee);
            const caps = function (attr) {
                return attr.charAt(0).toUpperCase() + attr.slice(1);
            };

            const photo = employee.picture.large;
            const firstName = employee.name.first;
            const lastName = employee.name.last;
            const city = employee.location.city;
            const email = employee.email;

            const card = document.createElement('div')
            card.className = 'employee-card';
            card.innerHTML = `
            <img src="${photo}" alt="employee_image">
            <div class="employee-info">
                <div class="name">${caps(firstName) + ' ' + caps(lastName)}</div>
                <div class="email">${email}</div>
                <div class="city">${caps(city)}</div>
            </div>
            `;
            directory.append(card);
        });

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        modal.append(modalContent);


        `
        <div class="modal-content">
            <span class="close-modal">&#10006;</span>
            <img src="https://via.placeholder.com/150" alt="employee_image">
            <div class="name">First Last</div>
            <div class="email">email</div>
            <div class="city">city</div>
            <hr>
            <div class="phone">phone</div>
            <div class="address">adress</div>
            <div class="dob">Birthday: 00/00/0000</div>
        </div>
        `

    }); // END FETCH DATA

employeeCard.addEventListener('click', function () {
    modal.classList.add('show-modal');
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('show-modal');
});