const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItSup = require('markdown-it-sup');
const markdownItSub = require('markdown-it-sub');

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

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './public/static/**/*.css',
    });

    const markdownLib = markdownIt(markdownItOptions)
        .use(markdownItAttrs)
        .use(markdownItFootnote)
        .use(markdownItSup)
        .use(markdownItSub);
    eleventyConfig.setLibrary('md', markdownLib);

    eleventyConfig.addPairedShortcode("TierTable", tierTable);
    eleventyConfig.addPairedShortcode("TierTableRow", tierTableRow);

    eleventyConfig.addPassthroughCopy("src/images");

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};