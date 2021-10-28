import { v4 as id } from "uuid";
export function getId() {
  const ID = id()
    .split("")
    .filter((el) => Number.isInteger(+el))
    .slice(0, 5)
    .join("");
  return ID;
}
