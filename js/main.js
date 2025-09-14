const forms = document.querySelectorAll("#mainForm, #modalForm");

function mainForm(el) {
  const mail = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const name = document.getElementById("name").value;

  let error = "";

  if (mail == "" || name == "" || phone == "") {
    error = "Заполните все поля!";
  } else if (mail.length <= 5 || phone.length <= 5) {
    error = "Данные должны быть больше 5 символов!";
  }

  if (error != "") {
    error.classList.add("error");
  } else {
    alert("Ваша заявка успешно отправлена!");
  }

  return false;
}

function modalForm(item) {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");

  if (name == "" || phone == "") {
    error = "Заполните все поля!";
  } else if (phone.length <= 5) {
    error = "Номер телефона должен быть больше 5 символов!";
  }

  if (error != "") {
    error.classList.add("error");
  } else {
    alert("Ваша заявка успешно отправлена!");
  }
}

forms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    location.reload();
  });
});

const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");

closeModal.addEventListener("click", function () {
  modal.classList.remove("is-open");
});

openModal.addEventListener("click", function () {
  modal.classList.add("is-open");
});
