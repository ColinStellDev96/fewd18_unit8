const directory = document.getElementById("directory");
let employeeCard;

const caps = function(attr) {
    return attr.charAt(0).toUpperCase() + attr.slice(1);
  };

fetch(
  "https://randomuser.me/api/?results=12&inc=name,location,email,phone,picture,dob"
)
  .catch(err => {
    console.log("Error-No Data For You");
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.results.forEach(function(employee, i) {
      console.log(employee);

      let photo = employee.picture.large;
      let firstName = employee.name.first;
      let lastName = employee.name.last;
      let name = caps(firstName) + " " + caps(lastName);
      let city = caps(employee.location.city);
      let email = employee.email;
      let phone = employee.phone;
      let address =
        caps(employee.location.street) +
        "," +
        " " +
        caps(employee.location.state) +
        " " +
        employee.location.postcode;
      let birthday = employee.dob.date;

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
    });

    employeeCard = document.getElementsByClassName("employee-card");
    closeModal = document.querySelector(".close-modal");
    console.log(employeeCard);

    for (let i = 0; i < employeeCard.length; i++) {
      employeeCard[i].addEventListener("click", function() {
        modal.classList.add("show-modal");
        modalInfo(data.results, data.results[i], i);
      });
    }
  }); // END FETCH DATA

// Create Modal Content Div
const modalContent = document.createElement("div");
modalContent.className = "modal-content";

const modal = document.querySelector(".modal");
let closeModal;

const modalInfo = (employees, employee, index) => {
    let photo = employee.picture.large;
    let firstName = employee.name.first;
    let lastName = employee.name.last;
    let name = caps(firstName) + " " + caps(lastName);
    let city = caps(employee.location.city);
    let email = employee.email;
    let phone = employee.phone;
    let address =
      caps(employee.location.street) +
      "," +
      " " +
      caps(employee.location.state) +
      " " +
      employee.location.postcode;
    let birthday = employee.dob.date;

  let modalInternal = `
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
  modalContent.innerHTML = modalInternal;

  modal.append(modalContent);

  closeModal = document.querySelector('.close-modal');
  
  closeModal.addEventListener("click", function() { 
    modal.classList.remove("show-modal");
  });
};
