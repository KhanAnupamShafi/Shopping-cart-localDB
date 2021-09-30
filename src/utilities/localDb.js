//update to local
const addTodb = (id) => {
  const cartExist = getDb("shopping_cart");
  let shopping_cart = {};
  if (!cartExist) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(cartExist);
    if (shopping_cart[id]) {
      shopping_cart[id]++;
    } else shopping_cart[id] = 1;
  }
  updateCartdb(shopping_cart);
};

const getDb = (cart) => {
  return localStorage.getItem(cart);
};

const updateCartdb = (cart) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

//Get from Local

const getFromLocal = () => {
  const exists = getDb("shopping_cart");

  return exists ? JSON.parse(exists) : {};
};

//Remove from local

const removeFromDb = (id) => {
  const cartExist = getDb("shopping_cart");
  if (!cartExist) {
  } else {
    const shopping_cart = JSON.parse(cartExist);
    delete shopping_cart[id];
    updateCartdb(shopping_cart);
  }
};
const clearTheCart = () => {
  localStorage.removeItem("shopping_cart");
};

export { addTodb, removeFromDb, clearTheCart, getFromLocal };
