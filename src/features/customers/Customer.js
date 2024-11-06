import { useSelector, useStore } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  console.log(customer);

  return <h2>👋 Welcome, {customer.toUpperCase()}</h2>;
}

export default Customer;
