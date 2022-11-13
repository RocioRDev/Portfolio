/* Constant where the form is being stored */
const $form = document.querySelector("#contact-form");

/* Listen to the form submit event */
$form.addEventListener("submit", handleSubmit);

/* Function for handle the submit, checking if every form field has the correct format, size and if it is empty */
function handleSubmit(event) {
  /* Cancels the event if it is cancelable */
  event.preventDefault();

  /* Constants for getting by ID the name, surname, telephone, password, confirmation password , email, genre, birth place, country of residence and birth date. */
  const names = document.getElementById("name").value;
  const surnames = document.getElementById("surname").value;
  const ntelephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  const error = document.getElementById("errorName");

  /* Constants for storing the regex rules and also for storing the new Date and the ages and months that have passed since the birth date and the current date. */
  /* name and surname: can only contain letters */
  const nameformat = /^[a-zA-ZÀ-ÿ\s]+$/;
  /* telephone: can only contain numbers */
  const ntelephoneformat = /^\d+$/;
  /* email: can only contain letters, numbers, dots, hyphens and underscores and must contain an @ and .<whatever> */
  const emailformat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  /* surname: must have a length of 2 letters at least, mustn't be empty and must match with the nameformat */
  if (surnames === "") {
    error.textContent = "Surname is empty!";
    return;
  } else if (surnames.length < 2) {
    error.textContent = "Surname is must have at least 2 letters!";
    return;
  } else if (!surnames.match(nameformat)) {
    error.textContent = "Surname must only contain letters!";
    return;
  }

  /* name: must have a length between 3 and 15 letters at least, mustn't be empty and must match with the nameformat */
  if (names === "") {
    error.textContent = "Name is empty!";
    return;
  } else if (names.length < 3 || names.length > 15) {
    error.textContent = "Name must have between 3 and 15 letters!";
    return;
  } else if (!names.match(nameformat)) {
    error.textContent = "Name must only contain letters!";
    return;
  }

  /* telephone: mustn't be empty and must match the telephone format */
  if (ntelephone === "") {
    error.textContent = "Please enter a Phone number!";
    return;
  } else if (ntelephone.length < 9 || ntelephone.length > 9) {
    error.textContent = "Phone number must have 9 digits!";
    return;
  } else if (!ntelephone.match(ntelephoneformat)) {
    error.textContent = "Phone number must only contain numbers!";
    return;
  }

  /* email: mustn't be empty and must match the email format */
  if (email === "") {
    error.textContent = "Email address is empty!";
    return;
  } else if (!email.match(emailformat)) {
    error.textContent = "Have u written an email address?";
    return;
  }

  /* Send the form */
  $form.submit();
}
