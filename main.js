const data = [
  {
    id: 0,
    img: "images/oppo-reno6-z-5g-aurora-1-600x600.jpg",
    name: "Oppo reno6 Z 5G",
    price: 12000000,
    save: 500000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 1,
    img: "images/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg",
    name: "Iphone 12 Pro Max 128GB",
    price: 29900000,
    save: 2000000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 2,
    img: "images/realme_5_pro_0e39693587174ff2b75084ae6df59622_grande.jpg",
    name: "Realme 5 Pro",
    price: 4990000,
    save: 1000000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 3,
    img: "images/xiaomi-redmi-note-10-5g-xanh-bong-dem-1-600x600.jpg",
    name: "Xiaomi redmi note 10 5g",
    price: 6490000,
    save: 1100000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 4,
    img: "images/samsung-galaxy-a22-den-2-600x600.jpg",
    name: "Samsung galaxy A22 đen",
    price: 5900000,
    save: 4000000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 5,
    img: "images/samsung-galaxy-a52-8gb-256gb-thumb-violet-600x600-600x600.jpg",
    name: "Samsung galaxy A52 đen",
    price: 6900000,
    save: 500000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 6,
    img: "images/samsung-galaxy-s21-tim-600x600.jpg",
    name: "Samsung galaxy S21 Tím",
    price: 4900000,
    save: 990000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 7,
    img: "images/samsung-galaxy-tab-s7-fe-green-600x600.jpg",
    name: "Samsung galaxy Tab S7 Xanh",
    price: 7100000,
    save: 100000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 8,
    img: "images/realme-8-5g-blue-1-600x600.jpg",
    name: "Realme 8 5G Blue",
    price: 3900000,
    save: 500000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 9,
    img: "images/realme-c21y-black-600x600.jpg",
    name: "Realme c21y Black",
    price: 4900000,
    save: 0,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 10,
    img: "images/realme c3i 2GB32GB.jpg",
    name: "Realme c3i 2GB/32GB",
    price: 8990000,
    save: 100000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 11,
    img: "images/realme-q2-mhm_eab8963df79049e792076a2f93cf4605_1024x1024.jpg",
    name: "Realme Q2",
    price: 6790000,
    save: 500000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 12,
    img: "images/oppo-10049096-dien-thoai-oppo-a54-4gb-128gb-xanh-1.jpg",
    name: "Oppo A54 4GB Xanh",
    price: 3890000,
    save: 900000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 13,
    img: "images/oppo-a74-blue-9-600x600.jpg",
    name: "Oppo A74 Blue",
    price: 8900000,
    save: 500000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 14,
    img: "images/oppo-a37.png",
    name: "Oppo A37",
    price: 11900000,
    save: 4900000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 15,
    img: "images/oppo-a53-4gb.jpg",
    name: "Oppo S53 4GB",
    price: 9900000,
    save: 500000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 16,
    img: "images/iphone-11-pro-max-green-200x200.jpg",
    name: "Iphone 11 Pro Max 128GB",
    price: 24900000,
    save: 5500000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 17,
    img: "images/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg",
    name: "Iphone 12 Pro Max 128GB",
    price: 29900000,
    save: 200000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 18,
    img: "images/iphone-12-xanh-duong-600x600.jpg",
    name: "Iphone 12 Pro Max 256GB",
    price: 23000000,
    save: 555000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
  {
    id: 19,
    img: "images/iphone-6-32gb-gold-hh-600x600-600x600-200x200.jpg",
    name: "Iphone 6 Plus 32GB",
    price: 5900000,
    save: 200000,
    delivery: "3 - 4 ngay",
    itemInCart: false,
  },
];
let cartList = [];

var i;
var detail = document.getElementsByClassName("card-item");
var detailsImg = document.getElementById("detail-img");
var detailTitle = document.getElementById("detail-title");
var detailPrice = document.getElementById("detail-price");
var youSave = document.getElementById("save");
var detailsPage = document.getElementById("detail-page");
var back = document.getElementById("back");
var addToCarts = document.querySelectorAll("#add-to-cart");
var cart = document.getElementById("cart");
var carts = document.getElementById("carts");
var home = document.getElementById("logo");

back.addEventListener("click", refreshPage);
cart.addEventListener("click", displayCart); // display cartpage
carts.addEventListener("click", () => addToCart(getId));
home.addEventListener("click", hideCart);

document.addEventListener("click", function (e) {
  if (e.target.id == "remove") {
    var itemId = e.target.parentNode.id;
    removeFromCart(itemId);
  }
});

for (i = 0; i < data.length; i++) {
  detail[i].addEventListener("click", handleDetail);
}
var getId;
addToCarts.forEach((val) =>
  val.addEventListener("click", () => addToCart(val.parentNode.id))
);

function handleDetail(e) {
  detailsPage.style.display = "block";
  getId = this.parentNode.id;
  detailsImg.src = data[getId].img;
  detailTitle.innerHTML = data[getId].name;
  detailPrice.innerHTML = "Giá : " + data[getId].price + "vnd";
  youSave.innerHTML = "Tiết kiệm : (" + data[getId].save + ") vnd";
}

function addToCart(id) {
  if (!data[id].itemInCart) {
    cartList = [...cartList, data[id]];
    addItem();

    alert("item added to your cart");
  } else {
    alert("your item is already there");
  }
  data[id].itemInCart = true;
}

function refreshPage() {
  detailsPage.style.display = "none";
}

function hideCart() {
  document.getElementById("main").style.display = "block";
  document.getElementById("cart-container").style.display = "none";
}

function displayCart() {
  document.getElementById("main").style.display = "none";
  document.getElementById("detail-page").style.display = "none";
  document.getElementById("cart-container").style.display = "block";
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  } else {
    document.getElementById("empty-cart").style.display = "none";
    document.getElementById("cart-with-items").style.display = "block";
  }
}

var totalAmount;
var totalItems;
var totalSaving;

function addItem() {
  totalAmount = 0;
  totalItems = 0;
  totalSaving = 0;
  var clrNode = document.getElementById("item-body");
  clrNode.innerHTML = "";
  console.log(clrNode.childNodes);
  cartList.map((cart) => {
    var cartCont = document.getElementById("item-body");
    totalAmount = totalAmount + cart.price;
    totalSaving = totalSaving + cart.save;
    totalItems = totalItems + 1;

    var tempCart = document.createElement("div");
    tempCart.setAttribute("class", "cart-list");
    tempCart.setAttribute("id", cart.id);

    var listImg = document.createElement("img");
    listImg.setAttribute("id", "list-img");
    listImg.src = cart.img;
    tempCart.appendChild(listImg);

    var listName = document.createElement("h3");
    listName.setAttribute("class", "list-name");
    listName.innerHTML = cart.name;
    tempCart.appendChild(listName);

    var listPay = document.createElement("h3");
    listPay.setAttribute("class", "pay");
    listPay.innerHTML = cart.price;
    tempCart.appendChild(listPay);

    var listQuantity = document.createElement("h3");
    listQuantity.setAttribute("class", "quantity");
    listQuantity.innerHTML = "1";
    tempCart.appendChild(listQuantity);
    var listTrash = document.createElement("i");
    listTrash.setAttribute("class", "fa fa-trash ");
    listTrash.setAttribute("id", "remove");
    tempCart.appendChild(listTrash);

    cartCont.appendChild(tempCart);
  });
  document.getElementById("total-amount").innerHTML =
    "Giá : " + totalAmount + "  vnd";
  document.getElementById("total-items").innerHTML = "Số lượng : " + totalItems;
  document.getElementById("you-saved").innerHTML =
    "Tiết kiệm : " + totalSaving + "  vnd";
  document.getElementById("total").style.display = "block";
}
function removeFromCart(itemId) {
  data[itemId].itemInCart = false;
  cartList = cartList.filter((list) => list.id != itemId);
  addItem();
  if (cartList.length == 0) {
    document.getElementById("cart-with-items").style.display = "none";
    document.getElementById("empty-cart").style.display = "block";
  }
}
//-----------filter : loi roi---------------
// const btns = document.querySelectorAll(".btn");
// const storeProducts = document.querySelectorAll(".store-product");
// for (i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", (e) => {
//     e.preventDefault();

//     const filter = e.target.dataset.filter;
//     console.log(filter);

//     storeProducts.forEach((product) => {
//       if (filter === "all") {
//         product.style.display = "block";
//       } else {
//         if (product.classList.contains(filter)) {
//           product.style.display = "block";
//         } else {
//           product.style.display = "none";
//         }
//       }
//     });
//   });
// }

// ---------------------------------------
function changeProductList(type) {
  document.getElementById(type).style.display = "block";

  switch (type) {
    case "new":
      document.getElementById("iphone").style.display = "none";
      document.getElementById("samsung").style.display = "none";
      document.getElementById("oppo").style.display = "none";
      document.getElementById("realme").style.display = "none";
      document.getElementById("vivo").style.display = "none";
      document.getElementById("vmart").style.display = "none";
      break;
    case "iphone":
      document.getElementById("new").style.display = "none";
      document.getElementById("samsung").style.display = "none";
      document.getElementById("oppo").style.display = "none";
      document.getElementById("realme").style.display = "none";
      document.getElementById("vivo").style.display = "none";
      document.getElementById("vmart").style.display = "none";
      break;
    case "samsung":
      document.getElementById("new").style.display = "none";
      document.getElementById("iphone").style.display = "none";
      document.getElementById("oppo").style.display = "none";
      document.getElementById("realme").style.display = "none";
      document.getElementById("vivo").style.display = "none";
      document.getElementById("vmart").style.display = "none";
      break;
    case "oppo":
      document.getElementById("new").style.display = "none";
      document.getElementById("iphone").style.display = "none";
      document.getElementById("samsung").style.display = "none";
      document.getElementById("realme").style.display = "none";
      document.getElementById("vivo").style.display = "none";
      document.getElementById("vmart").style.display = "none";
      break;
    case "vivo":
      document.getElementById("new").style.display = "none";
      document.getElementById("iphone").style.display = "none";
      document.getElementById("samsung").style.display = "none";
      document.getElementById("realme").style.display = "none";
      document.getElementById("oppo").style.display = "none";
      document.getElementById("vmart").style.display = "none";
      break;
    case "vmart":
      document.getElementById("new").style.display = "none";
      document.getElementById("iphone").style.display = "none";
      document.getElementById("samsung").style.display = "none";
      document.getElementById("realme").style.display = "none";
      document.getElementById("oppo").style.display = "none";
      document.getElementById("vivo").style.display = "none";
      break;
    case "realme":
      document.getElementById("new").style.display = "none";
      document.getElementById("iphone").style.display = "none";
      document.getElementById("samsung").style.display = "none";
      document.getElementById("vmart").style.display = "none";
      document.getElementById("oppo").style.display = "none";
      document.getElementById("vivo").style.display = "none";
      break;
  }
}

//-----------search---------------
const search = document.getElementById("search");
const productName = document.querySelectorAll(".card-item p");
search.addEventListener("keyup", filterProducts);

function filterProducts(e) {
  const text = e.target.value.toLowerCase();
  // console.log(productName[0]);
  productName.forEach(function (product) {
    const item = product.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      product.parentElement.parentElement.style.display = "block";
    } else {
      product.parentElement.parentElement.style.display = "none";
    }
  });
}

// const search = document.getElementsByClassName("search");
// const btn = document.querySelector(".btn-search");
// const input = document.querySelector(".input");

// btn.addEventListener("click", () => {
//   search.classList.toggle("active");
//   input.focus();
// });
