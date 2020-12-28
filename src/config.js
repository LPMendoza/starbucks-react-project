import imgDrinks from "./assets/img/menu/coffe-hot.jpg";
import imgLunch from "./assets/img/menu/lunch.jpg";
import imgBakery from "./assets/img/menu/bakery.jpg";
import imgSnacks from "./assets/img/menu/snacks.jpg";
import imgYogurt from "./assets/img/menu/yogurt.jpg";
import imgWhole from "./assets/img/menu/whole.jpg";

import imgCaramel from "./assets/img/products/drinks/caramel-blended.png";
import imgChip from "./assets/img/products/drinks/java-chip.png";
import imgGreen from "./assets/img/products/drinks/matacha-green.png";
import imgCold from "./assets/img/products/drinks/pumpkin-cold.png";
import imgSpice from "./assets/img/products/drinks/pumpkin-spice.png";
import imgStrawberry from "./assets/img/products/drinks/strawberry.png";

let config = {
  basePath: "/starbucks-page",
  menuItems: [{
    menuName: "Bebidas",
    imgMenu: imgDrinks
  }, {
    menuName: "Desayunos",
    imgMenu: imgLunch
  }, {
    menuName: "Panaderia",
    imgMenu: imgBakery
  }, {
    menuName: "Snacks & Sweets",
    imgMenu: imgSnacks
  }, {
    menuName: "Yogurt & Custard",
    imgMenu: imgYogurt
  }, {
    menuName: "Whole Bean",
    imgMenu: imgWhole
  }],
  productItems: [{
      productName: "Salted Caramel Mocha",
      category: "Frappuccino",
      imgProduct: imgCaramel,
      price: 84.50
    },
    {
      productName: "Pumpkin Spice Coffee",
      category: "Frappuccino",
      imgProduct: imgSpice,
      price: 98.42
    }, {
      productName: "Strawberry Frappuccino",
      category: "Frappuccino",
      imgProduct: imgStrawberry,
      price: 78.53
    }, {
      productName: "Pumpkin Cream Cold",
      category: "Cold Coffees",
      imgProduct: imgCold,
      price: 98.42
    },
    {
      productName: "Double Chocolaty Chip",
      category: "Frappuccino",
      imgProduct: imgChip,
      price: 46.72
    },
    {
      productName: "Matacha Green Tea Crème",
      category: "Iced Teas",
      imgProduct: imgGreen,
      price: 64.62
    }
  ],
  cartItems: [{
    productName: "Salted Caramel Mocha",
    category: "Frappuccino",
    imgProduct: imgCaramel,
    price: 84.50,
    quantity: 2,
  }, {
    productName: "Strawberry Frappuccino",
    category: "Frappuccino",
    imgProduct: imgStrawberry,
    price: 78.53,
    quantity: 1,
  }, {
    productName: "Pumpkin Spice Coffee",
    category: "Frappuccino",
    imgProduct: imgSpice,
    price: 98.42,
    quantity: 3,
  }, ]
}
export default config;