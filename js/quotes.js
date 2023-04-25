const quotes = [
{
    quote: "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
},
{
    quote: "A great secret of success is to go through life as a man who never gets used up.",
    author: "Albert Schweitzer",
},
{
    quote: "A mind troubled by doubt cannot focus on the course to victory.",
    author: "Arthur Golden",
},
{
    quote: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupery",
},
{
    quote: "To follow, without halt, one aim: There's the secret of success.",
    author: "Anna Pavlova",
},
{
    quote: "There is only one success to be able to spend your life in your own way.",
    author: "Christopher Morley",
},
{
    quote: "We need men who can dream of things that never were.",
    author: "John F. Kennedy",
},
{
    quote: "The most wasted of all days is one without laughter.",
    author: "E. E. Cummings",
},
{
    quote: "You cannot be mad at somebody who makes you laugh - it's as simple as that.",
    author: "Jay Leno",
},
{
    quote: "Perpetual optimism is a force multiplier.",
    author: "Colin Powell",
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
