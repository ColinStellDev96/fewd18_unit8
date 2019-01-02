const directory = document.getElementById('directory');

fetch('https://randomuser.me/api/?results=12&inc=name,location,email,phone,picture,dob')
    .then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        const html = data.forEach(function (emp) {
            `
            <div class="employee-card">
            <img src="${emp.picture.thumbnail}" alt="${emp.name.first}">
                <div class="employee-info">
                    <div class="name">Employee Name</div>
                    <div class="email">Email</div>
                    <div class="city">City</div>
                </div>
            </div>
            `
        })
        directory.innerHTML = html;
    }).catch(err => {
        console.log('Looks Like There Was A Problem')
    });