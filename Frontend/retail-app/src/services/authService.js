// 🔐 Login API (dummy)
export const loginUser = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "1234") {
        resolve({
          message: "Login Successful",
          user: { email },
        });
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
};

// 📝 Signup API (dummy)
export const registerUser = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.password !== data.confirmPassword) {
        reject("Passwords do not match");
      } else {
        resolve({
          message: "User Registered Successfully",
          user: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
          },
        });
      }
    }, 1000);
  });
};