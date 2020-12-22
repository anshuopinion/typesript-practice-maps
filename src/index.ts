import { Company } from "./Company";
import { User } from "./User";

// const user = new User();
// const company = new Company();
// console.log(user);
// console.log(company);
import { Map } from "./Map";
const user = new User();
const company = new Company();
const map = new Map("map");
map.addMarker(user);
map.addMarker(company);
