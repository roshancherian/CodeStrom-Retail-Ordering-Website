export const loginUser = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "1234") {
        resolve({ message: "Login Successful", user: { email } });
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
};