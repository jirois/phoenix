export const getLocalStorage = (keyname) => {
  let userInfo = localStorage.getItem(keyname);
  if (userInfo) {
    return (userInfo = JSON.parse(localStorage.getItem(keyname)));
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
