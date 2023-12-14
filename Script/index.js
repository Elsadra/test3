let box_product = [
  { id: 1, model: "باراتا", img: "./Image/barata.png" },
  { id: 2, model: "پشت تور", img: "./Image/behind-the-net.png" },
  { id: 3, model: "بافتنی", img: "./Image/woven.png" },
  { id: 4, model: "بیسبال ", img: "./Image/baseball.png" },
];

let box_Proposal = [
  {
    id: 1,
    model: "باراتا",
    img: "./Image/barata01.png",
    desc: "جهت تمیزی کلاه فقط با آب سرد و مایع نرم کننده و با دست شسته شود",
    price: 180,
  },
  {
    id: 2,
    model: "باراتا",
    img: "./Image/barata02.png",
    desc: "جهت تمیزی کلاه فقط با آب سرد و مایع نرم کننده و با دست شسته شود",
    price: 180,
  },
  {
    id: 3,
    model: "باراتا",
    img: "./Image/barata03.png",
    desc: "جهت تمیزی کلاه فقط با آب سرد و مایع نرم کننده و با دست شسته شود",
    price: 180,
  },
  {
    id: 4,
    model: "باراتا",
    img: "./Image/barata04.png",
    desc: "جهت تمیزی کلاه فقط با آب سرد و مایع نرم کننده و با دست شسته شود",
    price: 180,
  },
  {
    id: 5,
    model: "بیسبال ",
    img: "./Image/baseball01.png",
    desc: "مدل: بیسبالی   جنس پارچه: کتان   کیفیت بسیار عالی   مناسب برای استفاده روزمره ، اسپرت و خاص   مناسب برای آقایان و بانوان ، جوانان و نوجوانان",
    price: 180,
  },
  {
    id: 6,
    model: "بیسبال ",
    img: "./Image/baseball02.png",
    desc: "مدل: بیسبالی   جنس پارچه: کتان   کیفیت بسیار عالی   مناسب برای استفاده روزمره ، اسپرت و خاص   مناسب برای آقایان و بانوان ، جوانان و نوجوانان",
    price: 180,
  },
  {
    id: 7,
    model: "بیسبال ",
    img: "./Image/baseball03.png",
    desc: "مدل: بیسبالی   جنس پارچه: کتان   کیفیت بسیار عالی   مناسب برای استفاده روزمره ، اسپرت و خاص   مناسب برای آقایان و بانوان ، جوانان و نوجوانان",
    price: 180,
  },
  {
    id: 8,
    model: "پشت تور",
    img: "./Image/behind-the-net01.png",
    desc: "جنس: کتان   مدل: پشت تور ( گورین )   کیفیت فوق العاده عالی ( های کپی درجه 1 )   مناسب برای استفاده روزمره و ورزشی   قسمت پشتی تور برای تهویه بهتر",
    price: 180,
  },
  {
    id: 9,
    model: "پشت تور",
    img: "./Image/behind-the-net02.png",
    desc: "جنس: کتان   مدل: پشت تور ( گورین )   کیفیت فوق العاده عالی ( های کپی درجه 1 )   مناسب برای استفاده روزمره و ورزشی   قسمت پشتی تور برای تهویه بهتر",
    price: 180,
  },
];

let carousel = document.querySelector(".carousel");
let aElem;
let containerBoxProduct = document.querySelector(".container-box-product");
let itemProfile = document.querySelectorAll(".item-profile");
let linkForm = document.querySelectorAll(".link-form");

box_product.forEach(function (item) {
  aElem = document.createElement("a");
  aElem.className = "link-box-product";
  aElem.innerHTML = `
  <div class="box-product">
  <div class="parent-img-box-product">
    <img
      class="img-box-product"
      src="${item.img}"
      width="100%"
      alt="hat"
    />
  </div>
  <p class="desc-box-product">${item.model}</p>
</div>
  `;
  containerBoxProduct.append(aElem);
});

let cardElem;
box_Proposal.forEach(function (Hat) {
  cardElem = document.createElement("div");
  cardElem.className = "card";
  cardElem.innerHTML = `
  <div class="card-image">
    <img src="${Hat.img}" class="card-img">
  </div>
  <p class="card-title">${Hat.model}</p>
  <p class="card-body">${Hat.desc}</p>
  <p class="footer">
    <span class="by-name">${Hat.price} تومان </span>
  </p>
  `;
  carousel.append(cardElem);
});

if (localStorage.getItem("userNameHatRose")) {
  linkForm.forEach(function (item) {
    console.log("href :");
    console.log(item.href);
    item.href = "./View/profile.html";
  });
} else {
  linkForm.forEach(function (item) {
    console.log("href :");
    console.log(item.href);
    item.href = "./View/form.html";
  });
}
