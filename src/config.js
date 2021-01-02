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
    menuName: "Panadería",
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
      description: "La leche al vapor y la salsa de moca se combinan con jarabe de toffeenut, luego se cubre con crema batida, salsa de caramelo y una mezcla de azúcar turbinado y sal marina. Un dulce aún más dulce con nuestro toque de sal",
      imgProduct: imgCaramel,
      price: 84.50
    },
    {
      productName: "Pumpkin Spice Coffee",
      category: "Frappuccino",
      description: "La leche al vapor se combina con una mezcla de calabaza y sabores tradicionales de especias de otoño. Disfrútelo terminado con crema batida y cobertura de especias de calabaza.",
      imgProduct: imgSpice,
      price: 98.42
    }, {
      productName: "Strawberry Frappuccino",
      category: "Frappuccino",
      description: "La baya favorita del verano es la estrella de esta deliciosa Bebida Mezclada Frappuccino®, una mezcla de hielo, leche y puré de fresa sobre un chorrito de puré de fresa y terminada con crema batida de vainilla.",
      imgProduct: imgStrawberry,
      price: 78.53
    }, {
      productName: "Pumpkin Cream Cold",
      category: "Cold Coffees",
      description: "Tomamos calabaza y sabores tradicionales de especias de otoño y los mezclamos con café, leche y hielo, luego lo completamos con crema batida y especias para pastel de calabaza. Es su café con leche de otoño favorito en una forma fresca mezclada de Frappuccino®",
      imgProduct: imgCold,
      price: 98.42
    },
    {
      productName: "Double Chocolaty Chip",
      category: "Frappuccino",
      description: "Leche al vapor y salsa moka cubierta con crema batida azucarada y una llovizna con sabor a chocolate. Un clásico atemporal creado para endulzar el ánimo.",
      imgProduct: imgChip,
      price: 46.72
    },
    {
      productName: "Matacha Green Tea Crème",
      category: "Iced Teas",
      description: "Esta mezcla de té verde matcha premium endulzado, leche y hielo, rematada con crema batida endulzada, inspira un delicioso impulso y buenas vibraciones verdes.",
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
  }, {
    productName: "Double Chocolaty Chip",
    category: "Frappuccino",
    imgProduct: imgChip,
    quantity: 2,
    price: 46.72
  }, ]
}
export default config;