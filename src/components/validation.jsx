const validation = (data) => {
  let error = {};
  if (!data.fullname) {
    error.fullname = "Name Is Required";
  }
  if (!data.email) {
    error.email = "Email Is Required";
  }
  if (!data.password) {
    error.password = "PassWord Is Required";
  } else if (data.password.length < 5) {
    error.password = "Password must be 6 character";
  }
  return error;
};

export default validation;
