const forms = [
  document.getElementById("formModal"),
  document.getElementById("formMain"),
];

document.getElementById("formMain").addEventListener("submit", function () {
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const mail = document.getElementById("email");

  name.classList.remove("error");
  phone.classList.remove("error");
  mail.classList.remove("error");

  let error = false;

  if (name.value.trim() === "") {
    name.classList.add("error");
    error = true;
  }
  if (phone.value.trim() === "") {
    phone.classList.add("error");
    error = true;
  }
  if (mail.value.trim() === "") {
    mail.classList.add("error");
    error = true;
  }

  if (phone.value.trim().length > 0 && phone.value.trim().length < 5) {
    phone.classList.add("error");
    error = true;
  }
  if (mail.value.trim().length > 0 && mail.value.trim().length < 5) {
    mail.classList.add("error");
    error = true;
  }

  if (!error) {
    alert("Ваша заявка успешно отправлена!");
    return true;
  } else {
    return false;
  }
});

document.getElementById("formModal").addEventListener("submit", function () {
  const name_modal = document.getElementById("name-modal");
  const phone_modal = document.getElementById("phone-modal");
  const email_modal = document.getElementById("email-modal");

  name_modal.classList.remove("error");
  phone_modal.classList.remove("error");
  email_modal.classList.remove("error");

  let error = false;

  if (name_modal.value.trim() === "") {
    name_modal.classList.add("error");
    error = true;
  }

  if (phone_modal.value.trim() === "") {
    phone_modal.classList.add("error");
    error = true;
  }
  if (email_modal.value.trim() === "") {
    email_modal.classList.add("error");
    error = true;
  }

  if (
    phone_modal.value.trim().length > 0 &&
    phone_modal.value.trim().length < 5
  ) {
    phone_modal.classList.add("error");
    error = true;
  }
  if (
    email_modal.value.trim().length > 0 &&
    email_modal.value.trim().length < 5
  ) {
    email_modal.classList.add("error");
    error = true;
  }

  if (!error) {
    alert("Ваша заявка успешно отправлена!");
    return true;
  } else {
    return false;
  }
});

forms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "/404error.html";
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
