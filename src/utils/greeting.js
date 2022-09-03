export const greeting = () => {
  const time = new Date().getHours();
  return time < 12
    ? "Good Morning"
    : time < 18
    ? "Good Afternoon"
    : "Good Evening";
};
