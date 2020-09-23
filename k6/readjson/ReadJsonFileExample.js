import { sleep } from "k6";

const data = JSON.parse(open("./data.json"));

export default function () {
  let user = data[__VU - 1];
  console.log(`${user.username}, ${user.password}`);
  sleep(3);
}