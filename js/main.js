const forms = [
  document.getElementById("form-modal"),
  document.getElementById("formMain"),
];

function mainForm(event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const mail = document.getElementById("email");

  name.classList.remove("error");
  phone.classList.remove("error");
  mail.classList.remove("error");

  if (
    name.value.trim() === "" ||
    phone.value.trim() === "" ||
    mail.value.trim() === ""
  ) {
    if (name.value.trim() === "") name.classList.add("error");
    if (phone.value.trim() === "") phone.classList.add("error");
    if (mail.value.trim() === "") mail.classList.add("error");
    alert("Заполните все поля!");
    return false;
  }

  if (phone.value.trim().length <= 5) {
    phone.classList.add("error");
    alert("Номер телефона должен быть больше 5 символов!");
    return false;
  }

  if (mail.value.trim().length <= 5) {
    mail.classList.add("error");
    alert("Email должен быть больше 5 символов!");
    return false;
  }

  alert("Ваша заявка успешно отправлена!");
  return true;
}

function mainForm() {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const mail = document.getElementById("email");

  // Убираем старые ошибки
  name.classList.remove("error");
  phone.classList.remove("error");
  mail.classList.remove("error");

  if (
    name.value.trim() === "" ||
    mail.value.trim() === "" ||
    phone.value.trim() === ""
  ) {
    if (name.value.trim() === "") name.classList.add("error");
    if (phone.value.trim() === "") phone.classList.add("error");
    if (mail.value.trim() === "") mail.classList.add("error");
    alert("Заполните все поля!");
    return false;
  }

  if (phone.value.trim().length <= 5) {
    phone.classList.add("error");
    alert("Номер телефона должен быть больше 5 символов!");
    return false;
  }

  if (mail.value.trim().length <= 5) {
    mail.classList.add("error");
    alert("Email должен быть больше 5 символов!");
    return false;
  }

  alert("Ваша заявка успешно отправлена!");
  return true;
}

function modalForm() {
  const name_modal = document.getElementById("name-modal");
  const phone_modal = document.getElementById("phone-modal");

  let error = "";

  name_modal.classList.remove("error");
  phone_modal.classList.remove("error");

  if (name_modal.value === "" || phone_modal.value === "") {
    error = "Заполните все поля!";
    if (name_modal.value === "") name_modal.classList.add("error");
    if (phone_modal.value === "") phone_modal.classList.add("error");
  } else if (phone_modal.value.length <= 5) {
    error = "Номер телефона должен быть больше 5 символов!";
    phone_modal.classList.add("error");
  }

  if (error !== "") {
    alert(error);
    return false;
  } else {
    alert("Ваша заявка успешно отправлена!");
    return true;
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
