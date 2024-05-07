const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
}

function tierTable(content){
 return '<table class="tierTable">' + content + '</table>';
}

function tierTableRow(content, rowType){
    if (!['s', 'a', 'b', 'c', 'd', 'f'].includes(rowType)){
        return "ERROR - Bad rowType - not one of s, a, b, c, d, f";
    }
    return '<tr><td class="tier-' + rowType + '">' + rowType + "</td><td>" + content + '</td></tr>'
}

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: './public/static/**/*.css',
    });

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
    eleventyConfig.setLibrary('md', markdownLib);

    eleventyConfig.addPairedShortcode("TierTable", tierTable);
    eleventyConfig.addPairedShortcode("TierTableRow", tierTableRow);

    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};