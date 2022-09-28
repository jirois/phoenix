export const getLocalStorage = (keyname) => {
  let user = localStorage.getItem(keyname);
  if (user) {
    return (user = JSON.parse(localStorage.getItem(keyname)));
  } else {
    return null;
  }
};

// export const getLocalStorageCart = (keyname) => {
//   let cartItem = localStorage.getItem(keyname);
//   if (cartItem) {
//     return (cartItem = JSON.parse(localStorage.getItem(keyname)));
//   } else {
//     return [];
//   }
// };
