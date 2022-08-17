const axios = require("axios");
const cheerio = require("cheerio");

async function main() {
    const resp = await axios.get(
        'https://www.udemy.com/course/javascript-zw/learn/lecture/30290130#notes'
    );

    const $ = cheerio.load(resp.data);
    const elements = $("#ct-sidebar-scroll-container > div > div > div:nth-child(6) > div.panel--content-wrapper--1g5eE > div > ul > li.curriculum-item-link--curriculum-item--KX9MD.curriculum-item-link--is-current--31BPo > div > div.curriculum-item-link--item-container--1ptOz > div.udlite-text-sm.udlite-focus-visible-target > div > span > span");
    elements.each((idx, el) => {
        console.log($(el).text());
    });
}

main();