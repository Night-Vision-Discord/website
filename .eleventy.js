const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItSup = require('markdown-it-sup');
const markdownItSub = require('markdown-it-sub');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const tocPlugin = require("@uncenter/eleventy-plugin-toc");
const anchor = require("markdown-it-anchor");

const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
}

function tierTable(content){
 return '<table class="tier-table">' + content + '</table>';
}

function tierTableRow(content, rowType){
    if (!['s', 'a', 'b', 'c', 'd', 'f'].includes(rowType)){
        return "ERROR - Bad rowType - not one of s, a, b, c, d, f";
    }
    return '<tr class="tier-table-row"><td class="label-container tier-' + rowType + '">' + rowType + '</td><td class="content">' + content + '</td></tr>'
}

function TierItem(content, itemName){
    let value='<span id="tier-item-' + itemName + '">';
    if (content !== undefined && content !== null){
        value += content;
    }
    value += '</span>';
    return value;
}

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './public/static/**/*.css',
    });

    const markdownLib = markdownIt(markdownItOptions)
        .use(markdownItAttrs)
        .use(markdownItFootnote)
        .use(markdownItSup)
        .use(markdownItSub)
        .use(anchor);
    eleventyConfig.setLibrary('md', markdownLib);

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(tocPlugin, { ul: true });

    eleventyConfig.addPairedShortcode("TierTable", tierTable);
    eleventyConfig.addPairedShortcode("TierTableRow", tierTableRow);
    eleventyConfig.addPairedShortcode("TierItem", TierItem);

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        pathPrefix: "/website",
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};