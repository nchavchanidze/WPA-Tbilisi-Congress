import axios from "axios";

const API_URL = "https://wpatbilisicongress.com/Server/API/Auth/";

const register = (
  username,
  email,
  password,
  firstname,
  lastname,
  middlename,
  phone,
  gender,
  salutation,
  profession,
  addressType,
  institution,
  department,
  country,
  city
) => {
  return axios
    .post(API_URL + "SignUp", {
      username,
      email,
      password,
      firstname,
      lastname,
      middlename,
      phone,
      gender,
      salutation,
      profession,
      addressType,
      institution,
      department,
      country,
      city,
    })
    .then((response) => {
      if (response.data.msg) {
        console.log(response.data);
        return response.data;
      }
    })
    .catch((err) => {
      console.error(err.response.data);
    });
};

const login = (email, pass) => {
  return axios
    .post(API_URL + "Login", {
      email,
      pass,
    })
    .then((response) => {
      if (response.data.msg) {
        if (response.data.error === false) {
          console.log(response.data.userData[0].salutation);
          localStorage.setItem("user", response.data.msg);
          localStorage.setItem(
            "userdata",
            JSON.stringify({
              firstname: response.data.userData[0].firstname,
              salutation: response.data.userData[0].salutation,
              email: response.data.userData[0].email,
            })
          );
        }
      }
      console.log(response.data.userData[0].firstname);
      return response.data;
    });
};

const logout = () => {
  return axios.post(API_URL + "Logout", { 
    email: JSON.parse(localStorage.getItem("userdata")).email,
    token: localStorage.getItem("user")
  }).then((response) => {
    localStorage.removeItem("user");
    localStorage.removeItem("userdata");
    return response.data
  }).catch((err) => {
    console.error(err.response.data)
  })
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const exportedServices = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default exportedServices;
