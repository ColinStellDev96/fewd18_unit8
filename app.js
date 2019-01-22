const directory = document.getElementById("directory");
const modal = document.querySelector(".modal");
const employeeCard = document.getElementsByClassName("employee-card")[0];
const closeModal = document.querySelector(".close-modal");

const modalContent = document.createElement("div");
modalContent.className = "modal-content";


fetch(
  "https://randomuser.me/api/?results=12&inc=name,location,email,phone,picture,dob"
)
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.log("Error-No Data For You");
  })

  .then(data => {
    console.log(data);
    data.results.forEach(function(employee, i) {
      console.log(employee);

      const caps = function(attr) {
        return attr.charAt(0).toUpperCase() + attr.slice(1);
      };

      const photo = employee.picture.large;
      const firstName = employee.name.first;
      const lastName = employee.name.last;
      const name = caps(firstName) + " " + caps(lastName);
      const city = caps(employee.location.city);
      const email = employee.email;
      const phone = employee.phone;
      const address =
        caps(employee.location.street) +
        "," +
        " " +
        caps(employee.location.state) +
        " " +
        employee.location.postcode;
      const birthday = employee.dob;

      const card = document.createElement("div");
      card.className = "employee-card";
      card.innerHTML = `
            <img src="${photo}" alt="employee_image">
            <div class="employee-info">
                <div class="name">${name}</div>
                <div class="email">${email}</div>
                <div class="city">${city}</div>
            </div>
            `;
      directory.append(card);

      modalContent.innerHTML = `
                <span class="close-modal">&#10006;</span>
                <img src="${photo}" alt="employee_image">
                <div class="name">${name}</div>
                <div class="email">${email}</div>
                <div class="city">${city}</div>
                <hr>
                <div class="phone">${phone}</div>
                <div class="address">${address}</div>
                <div class="dob">Birthday: ${birthday}</div>
            `;
      modal.append(modalContent);
    });
  }); // END FETCH DATA

  employeeCard.addEventListener("click", function() {
    console.log("click");
    modal.classList.add("show-modal");
  });

  closeModal.addEventListener("click", function() {
    modal.classList.remove("show-modal");
  });