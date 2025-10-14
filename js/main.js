const forms = [
  document.getElementById("formModal"),
  document.getElementById("formMain"),
];

// Main Form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formMain");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    const name_form = document.getElementById("name");
    const phone_form = document.getElementById("phone");
    const email_form = document.getElementById("email");
    const textarea_form = document.getElementById("textarea-form");

    [name_form, phone_form, email_form, textarea_form].forEach((el) => {
      if (el) el.classList.remove("error");
    });

    let error = false;

    if (name_form && name_form.value.trim() === "") {
      name_form.classList.add("error");
      error = true;
    }

    if (email_form && email_form.value.trim() === "") {
      email_form.classList.add("error");
      error = true;
    }

    if (phone_form && phone_form.value.trim() === "") {
      phone_form.classList.add("error");
      error = true;
    }

    if (textarea_form && textarea_form.value.trim() === "") {
      textarea_form.classList.add("error");
      error = true;
    }

    if (
      phone_form &&
      phone_form.value.trim().length > 0 &&
      phone_form.value.trim().length < 5
    ) {
      phone_form.classList.add("error");
      error = true;
    }

    if (
      email_form &&
      email_form.value.trim().length > 0 &&
      email_form.value.trim().length < 5
    ) {
      email_form.classList.add("error");
      error = true;
    }

    if (error) {
      e.preventDefault();
      const firstErr = document.querySelector(".error");
      if (firstErr) firstErr.focus();
    } else {
    }
  });
});

// Modal Form

document.getElementById("formModal").addEventListener("submit", function () {
  const name_modal = document.getElementById("name-modal");
  const phone_modal = document.getElementById("phone-modal");
  const email_modal = document.getElementById("email-modal");
  const textarea_modal = document.getElementById("textarea");

  name_modal.classList.remove("error");
  phone_modal.classList.remove("error");
  email_modal.classList.remove("error");
  textarea_modal.classList.remove("error");

  let error = false;

  if (name_modal.value.trim() === "") {
    name_modal.classList.add("error");
    error = true;
  }

  if (email_modal.value.trim() === "") {
    email_modal.classList.add("error");
    error = true;
  }

  if (phone_modal.value.trim() === "") {
    phone_modal.classList.add("error");
    error = true;
  }

  if (textarea_modal.value.trim() === "") {
    textarea_modal.classList.add("error");
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

// Forms

forms.forEach((form) => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.target.reset();
  });
});

// Modal

const modalEvents = [
  {
    element: openModal,
    event: "click",
    handler: function () {
      modal.classList.add("is-open");
    },
  },

  {
    element: closeModal,
    event: "click",
    handler: function () {
      modal.classList.remove("is-open");
    },
  },

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.classList.remove("is-open");
    }
  }),
];

modalEvents.forEach(({ element, event, handler }) => {
  element.addEventListener(event, handler);
});
