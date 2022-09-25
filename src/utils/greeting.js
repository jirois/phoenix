export const greeting = () => {
  const time = new Date().getHours();
  return time < 12
    ? "Good Morning"
    : time < 18
    ? "Good Afternoon"
    : "Good Evening";
};

export const getFirstName = ({ name }) => {
  let nameArr = name.split(" ");
  let firstName = nameArr.length > 0 ? nameArr[0] : nameArr[0];
  return firstName;
};
