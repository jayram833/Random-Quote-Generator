"use strict";

const quotes = [
  {
    quote:
      "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " - Life",
  },
  {
    quote:
      "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    author: "- John Kenneth Galbraith",
  },
  {
    quote: "God save me from my friends. I can protect myself from my enemies.",
    author: "- Claude Louis Hector de Villars ",
  },
  {
    quote: "The price of anything is the amount of life you exchange for it.",
    author: "- David Thoreau",
  },
  {
    quote:
      "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "- Charles Lindbergh",
  },
  {
    quote:
      "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: "- Tyne Daly",
  },
  {
    quote:
      "The only way to learn a new programming language is by writing programs in it.",
    author: "- Dennis Ritchie",
  },
  {
    quote:
      "Sometimes it's better to leave something alone, to pause, and that's very true of programming.",
    author: "- Joyce Wheeler",
  },
  {
    quote:
      "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    author: "- Andrew Hunt",
  },
  {
    quote: "Testing leads to failure, and failure leads to understanding.",
    author: "- Burt Rutan",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: " - Thomas Fuchs",
  },
  {
    quote:
      "“The most damaging phrase in the language is.. it's always been done this way",
    author: " - Grace Hopper",
  },
];

const btnGenerate = document.querySelector(".btn-generate");
btnGenerate.addEventListener("click", function () {
  const rand = Math.trunc(Math.random() * quotes.length);
  let cont = quotes[rand].quote;
  let auth = quotes[rand].author;
  document.querySelector(".quote").textContent = cont;
  document.querySelector("#text-writer").textContent = auth;
});
