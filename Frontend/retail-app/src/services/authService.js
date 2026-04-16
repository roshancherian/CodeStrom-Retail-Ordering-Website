// 📩 Send OTP
export const sendOtp = async (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (savedUser && savedUser.email === email) {
        const generatedOtp = "123456";

        localStorage.setItem("otp", generatedOtp);
        localStorage.setItem("resetEmail", email);

        console.log("OTP:", generatedOtp);
        resolve(true);
      } else {
        reject("Email not found");
      }
    }, 1000);
  });
};

// 🔐 Verify OTP
export const verifyOtp = async (otp) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedOtp = localStorage.getItem("otp");

      if (otp === savedOtp) {
        localStorage.removeItem("otp"); // clear OTP
        resolve(true);
      } else {
        reject("Invalid OTP");
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

// 📝 Signup
export const registerUser = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.password !== data.confirmPassword) {
        reject("Passwords do not match");
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        resolve({ message: "Signup Successful" });
      }
    }, 1000);
  });
};

// 🔁 Reset Password
export const resetPassword = async ({ password, confirmPassword }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password !== confirmPassword) {
        reject("Passwords do not match");
        return;
      }

      const user = JSON.parse(localStorage.getItem("user"));
      const email = localStorage.getItem("resetEmail");

      if (!user || user.email !== email) {
        reject("User not found");
        return;
      }

      user.password = password;
      localStorage.setItem("user", JSON.stringify(user));

      localStorage.removeItem("resetEmail");

      resolve(true);
    }, 1000);
  });
};