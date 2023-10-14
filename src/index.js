// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));

import "./styles/style.css";

// СТВОРИ СПИСОК ЗАМІТОК НА ДЕНЬ:
// 1)ПОЛУЧИТИ ДОСТУП ДО ЕЛЕМЕНТІВ ФОРМИ, ПРИ НАТИСКАННЯ НА КНОПОЧКУ ADD

// 2)НА ОСНОВІ ДАНИХ ЯКІ МИ ВЗЯЛИ З ФОРМИ ВІДМАЛЮВАТИ
// ЕЛЕМЕНТИ СПИСКУ НА ЕКРАН

// 3)ДОДАЙ ЦЕЙ СПИСОК ДО ЛОКАЛ СТОРЕДЖ

// 4)ДОДАЙ ДОДАТКОВИЙ ФУНКЦІОНАЛ, ЩОБ ПРИ ОНОВЛЕННІ СТОРІНКИ СПИСОК НЕ ВИДАЛЯВСЯ

// 5)СТВОРЮЄМО КНОПОЧКУ, ПРИ ЯКОМУ БУДЕ ОЧИЩАВСЯ ЛОКАЛ СТОРЕДЖ

// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const list = document.querySelector(".js-list");
// const clearBtn = document.querySelector(".clearBtn");
//
// form.addEventListener("submit", inputValue);
//
// function inputValue(evt) {
//   evt.preventDefault();
//
//   let value = input.value;
//   const liElem = document.createElement("li");
//
//   liElem.textContent = value;
//   list.appendChild(liElem);
//
//   const localStorageParsed = JSON.parse(localStorage.getItem("liElem")) || [];
//   localStorageParsed.push(value);
//   updateLocalStorage(localStorageParsed);
//
//   input.value = "";
// }
//
// function updateLocalStorage(liElem) {
//   localStorage.setItem("liElem", JSON.stringify(liElem));
// }
//
// function savedValue() {
//   const savedItems = localStorage.getItem("liElem");
//   if (savedItems) {
// const newParsed = JSON.parse(savedItems);
// for (const element of newParsed) {
//   const liElem = document.createElement("li");
//   liElem.textContent = element;
//   list.appendChild(liElem);
// }
//   }
// }
// savedValue();
//
// clearBtn.addEventListener("click", storageClear);
//
// function storageClear() {
//   localStorage.removeItem("liElem");
//   list.innerHTML = "";
// }
// ---------------------------
import baseUp from "./template/base.hbs";
import { base, list, frameworks, libs } from "./data/hbsData.js";
import listUp from "./template/list.hbs";
import frameworksUp from "./template/frameworks.hbs";
import libsUp from "./template/libs.hbs";
const libsEl = libsUp(libs);
const markup = baseUp(base);
const markupList = listUp(list);
console.log(markup);
const root = document.querySelector("#root");
root.insertAdjacentHTML("beforeend", markup);
root.insertAdjacentHTML("beforeend", markupList);
const frameworksEl = frameworksUp(frameworks);
root.insertAdjacentHTML("beforeend", frameworksEl);
root.insertAdjacentHTML("beforeend", libsEl);
