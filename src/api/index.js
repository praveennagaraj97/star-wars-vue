import Axios from "axios";

export default Axios.create({
  baseURL: "https://swapi.dev/api/",
});

export { getAllPeople, getIndividualDetails } from "./starWarendpoints";
