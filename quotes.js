const quotes = [
    {
        quote: "ll our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "The Secret of Getting Ahead Is Getting Started",
        author: "Rosie"
    },
    {
        quote: "It’s hard to beat a person who never gives up.",
        author: "Babe Ruth"
    },
    {
        quote: "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.",
        author: "Leah Busque"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "It’s no use going back to yesterday, because I was a different person then.",
        author: "Lewis Carroll"
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama XIV"
    },
    {
        quote: "Whatever you are, be a good one.",
        author: "Abraham Lincoln"
    },
    {
        quote: "If we have the attitude that it’s going to be a great day it usually is.",
        author: "Catherine Pulsifier"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;