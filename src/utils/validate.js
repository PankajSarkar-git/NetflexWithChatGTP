export const checkValidData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const emailResult = emailRegex.test(email);
  console.log("Email valid:", emailResult);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
  const passwordValid = passwordRegex.test(password);
  console.log("Password valid", passwordValid);
  if (!passwordValid) {
    return "Password not valid";
  }
  if (!emailResult) {
    return "Email not valid";
  }

  return null;
};
