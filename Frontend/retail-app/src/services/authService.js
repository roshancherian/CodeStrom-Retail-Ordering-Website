// 📝 Signup
export const registerUser = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.password !== data.confirmPassword) {
        reject("Passwords do not match");
      } else {
        // save user in localStorage
        localStorage.setItem("user", JSON.stringify(data));

        resolve({ message: "Signup Successful" });
      }
    }, 1000);
  });
};

// 🔐 Login
export const loginUser = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        resolve({ message: "Login Successful" });
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
};