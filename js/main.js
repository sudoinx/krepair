const form = document.getElementById("formMain");

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

form.addEventListener("submit", function (event) {
  event.preventDefault();
  location.reload();
});
