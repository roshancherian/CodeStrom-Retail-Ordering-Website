let generatedOtp = null;

// 📩 Send OTP
export const sendOtp = async (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (savedUser && savedUser.email === email) {
        generatedOtp = "123456"; // dummy OTP
        console.log("OTP:", generatedOtp); // simulate sending email
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
      if (otp === generatedOtp) {
        resolve(true);
      } else {
        reject("Invalid OTP");
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
      } else {
        const user = JSON.parse(localStorage.getItem("user"));
        user.password = password;
        localStorage.setItem("user", JSON.stringify(user));

        resolve(true);
      }
    }, 1000);
  });
};