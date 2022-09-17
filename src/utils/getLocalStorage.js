// export const getLocalStorage = (keyname) => {
//   let list = localStorage.getItem(keyname);
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem(keyname)));
//   } else {
//     return [];
//   }
// };

export const getLocalStorageCart = (keyname) => {
  let cartItem = localStorage.getItem(keyname);
  if (cartItem) {
    return (cartItem = JSON.parse(localStorage.getItem(keyname)));
  } else {
    return [];
  }
};
