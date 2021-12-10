import axios from "axios";

export const sendNewCustomerData = (newCustomer) => {
  return () => {
    axios
      .post("http://localhost:5000/customer/add", {
        name: newCustomer.name,
        phone: newCustomer.phone,
        dob: newCustomer.dob,
        address: newCustomer.address,
      })
      .then((res) => console.log(res.data));
  };
};
