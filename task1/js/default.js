// rules fullname
const FULLNAME_REGEX = /^[A-Za-z\s]+$/;
const fullNameRules = [
  {
    test: (v) => FULLNAME_REGEX.test(v),
    message: () => "Pastikan Hanya Huruf",
  },
];

// rules Email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailRules = [
  {
    test: (v) => EMAIL_REGEX.test(v),
    message: () => "Format email tidak valid",
  },
];

// rules password
const passwordRules = [
  {
    minLength: 8,
    test: (v, rule) => v.length >= rule.minLength,
    message: (rule) => `Password minimal ${rule.minLength} karakter`,
  },
];

// rules repeat password
const repeatPasswordRules = [
  {
    test: (v, password) => v == password,
    message: () => "Password tidak sesuai",
  },
];

//-----------------------------------------------------------------------//

function validate(value, rules, errorEl, extra) {
  for (const rule of rules) {
    if (!rule.test(value, extra ?? rule)) {
      errorEl.textContent = rule.message(rule);
      errorEl.classList.add("active");
      return false;
    }
  }

  errorEl.textContent = "";
  errorEl.classList.remove("active");
  return true;
}

// ----------------------------------------------------------------------//
const fullname = document.getElementById("name");
const fullnameError = document.getElementById("nameError");
fullname.addEventListener("input", (e) => {
  const v = e.target.value;

  for (const rule of fullNameRules) {
    if (!rule.test(v)) {
      fullnameError.textContent = rule.message();
      fullnameError.classList.add("active");
      return;
    }
  }

  fullnameError.textContent = "";
  fullnameError.classList.remove("active");
});

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
email.addEventListener("input", (e) => {
  const v = e.target.value;

  for (const rule of emailRules) {
    if (!rule.test(v)) {
      emailError.textContent = rule.message();
      emailError.classList.add("active");
      return;
    }
  }

  emailError.textContent = "";
  emailError.classList.remove("active");
});

const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
password.addEventListener("input", (e) => {
  const v = e.target.value;

  for (const rule of passwordRules) {
    if (!rule.test(v, rule)) {
      passwordError.textContent = rule.message(rule);
      passwordError.classList.add("active");
      return;
    }
  }

  passwordError.textContent = "";
  passwordError.classList.remove("active");
});

const repeatPassword = document.getElementById("repeat-password");
const repeatPasswordError = document.getElementById("repeatPasswordError");
repeatPassword.addEventListener("input", (e) => {
  const v = e.target.value;
  const p = password.value;
  for (const rule of repeatPasswordRules) {
    if (!rule.test(v, p)) {
      repeatPasswordError.textContent = rule.message();
      repeatPasswordError.classList.add("active");
      return;
    }
  }

  repeatPasswordError.textContent = "";
  repeatPasswordError.classList.remove("active");
});

const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // WAJIB

  const isFullnameValid = validate(
    fullname.value,
    fullNameRules,
    fullnameError
  );

  const isEmailValid = validate(email.value, emailRules, emailError);

  const isPasswordValid = validate(
    password.value,
    passwordRules,
    passwordError
  );

  const isRepeatValid = validate(
    repeatPassword.value,
    repeatPasswordRules,
    repeatPasswordError,
    password.value
  );
  console.log(isEmailValid,isFullnameValid, isPasswordValid, isRepeatValid)
  if (!isFullnameValid || !isEmailValid || !isPasswordValid || !isRepeatValid) {
    alert("pastikan semua data dengan terisi benar");
    return; // STOP SUBMIT
  }

  // ===============================
  // FORM VALID → LANJUT PROSES
  // ===============================
  const payload = {
    email: email.value,
    password: password.value,
  };

  console.log("SUBMIT PAYLOAD:", payload);
  alert(`Selamat ${fullname.value} Pendaftaran Sudah diterima`)
});
