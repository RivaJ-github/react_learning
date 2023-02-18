import { FaStar } from "react-icons/fa";

export default function Star({ selcted = false }) {
  return (
    <>
      <h1>Great Star</h1>
      <FaStar color={selcted ? "red" : "grey"} id="star" />
    </>
  );
}
