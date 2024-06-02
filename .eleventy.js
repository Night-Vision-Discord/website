const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItSup = require('markdown-it-sup');
const markdownItSub = require('markdown-it-sub');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const tocPlugin = require("@uncenter/eleventy-plugin-toc");
const anchor = require("markdown-it-anchor");
const { parse } = require("node-html-parser");

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
        .use(anchor)
        .use(function (md) {
          //https://github.com/DCsunset/markdown-it-mermaid-plugin
          const origFenceRule =
            md.renderer.rules.fence ||
            function (tokens, idx, options, env, self) {
              return self.renderToken(tokens, idx, options, env, self);
            };
          md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
            const token = tokens[idx];
            if (token.info === "mermaid") {
              const code = token.content.trim();
              return `<pre class="mermaid">${code}</pre>`;
            }
            if (token.info === "transclusion") {
              const code = token.content.trim();
              return `<div class="transclusion">${md.render(code)}</div>`;
            }
            if (token.info.startsWith("ad-")) {
              const code = token.content.trim();
              const parts = code.split("\n")
              let titleLine;
              let collapse;
              let collapsible = false
              let collapsed = true
              let icon;
              let color;
              let nbLinesToSkip = 0
              for (let i = 0; i < 4; i++) {
                if (parts[i] && parts[i].trim()) {
                  let line = parts[i] && parts[i].trim().toLowerCase()
                  if (line.startsWith("title:")) {
                    titleLine = line.substring(6);
                    nbLinesToSkip++;
                  } else if (line.startsWith("icon:")) {
                    icon = line.substring(5);
                    nbLinesToSkip++;
                  } else if (line.startsWith("collapse:")) {
                    collapsible = true
                    collapse = line.substring(9);
                    if (collapse && collapse.trim().toLowerCase() == 'open') {
                      collapsed = false
                    }
                    nbLinesToSkip++;
                  } else if (line.startsWith("color:")) {
                    color = line.substring(6);
                    nbLinesToSkip++;
                  }
                }
              }
              const foldDiv = collapsible ? `<div class="callout-fold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down">
                  <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              </div>` : "";
              const titleDiv = titleLine
                ? `<div class="callout-title"><div class="callout-title-inner">${titleLine}</div>${foldDiv}</div>`
                : "";
              let collapseClasses = titleLine && collapsible ? 'is-collapsible' : ''
              if (collapsible && collapsed) {
                collapseClasses += " is-collapsed"
              }
    
              let res = `<div data-callout-metadata class="callout ${collapseClasses}" data-callout="${token.info.substring(3)
                }">${titleDiv}\n<div class="callout-content">${md.render(
                  parts.slice(nbLinesToSkip).join("\n")
                )}</div></div>`;
              return res
            }
    
            // Other languages
            return origFenceRule(tokens, idx, options, env, slf);
          }
        });
    eleventyConfig.setLibrary('md', markdownLib);

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPlugin(tocPlugin, { ul: true });

    eleventyConfig.addPairedShortcode("TierTable", tierTable);
    eleventyConfig.addPairedShortcode("TierTableRow", tierTableRow);
    eleventyConfig.addPairedShortcode("TierItem", TierItem);

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/css");

    eleventyConfig.addTransform("callout-block", function (str) {
      const parsed = parse(str);
  
      const transformCalloutBlocks = (
        blockquotes = parsed.querySelectorAll("blockquote")
      ) => {
        for (const blockquote of blockquotes) {
          transformCalloutBlocks(blockquote.querySelectorAll("blockquote"));
  
          let content = blockquote.innerHTML;
  
          let titleDiv = "";
          let calloutType = "";
          let calloutMetaData = "";
          let isCollapsable;
          let isCollapsed;
          const calloutMeta = /\[!([\w-]*)\|?(\s?.*)\](\+|\-){0,1}(\s?.*)/;
          if (!content.match(calloutMeta)) {
            continue;
          }
  
          content = content.replace(
            calloutMeta,
            function (metaInfoMatch, callout, metaData, collapse, title) {
              isCollapsable = Boolean(collapse);
              isCollapsed = collapse === "-";
              const titleText = title.replace(/(<\/{0,1}\w+>)/, "")
                ? title
                : `${callout.charAt(0).toUpperCase()}${callout
                  .substring(1)
                  .toLowerCase()}`;
              const fold = isCollapsable
                ? `<div class="callout-fold"><i icon-name="chevron-down"></i></div>`
                : ``;
  
              calloutType = callout;
              calloutMetaData = metaData;
              titleDiv = `<div class="callout-title"><div class="callout-title-inner">${titleText}</div>${fold}</div>`;
              return "";
            }
          );
  
          blockquote.tagName = "div";
          blockquote.classList.add("callout");
          blockquote.classList.add(isCollapsable ? "is-collapsible" : "");
          blockquote.classList.add(isCollapsed ? "is-collapsed" : "");
          blockquote.setAttribute("data-callout", calloutType.toLowerCase());
          calloutMetaData && blockquote.setAttribute("data-callout-metadata", calloutMetaData);
          blockquote.innerHTML = `${titleDiv}\n<div class="callout-content">${content}</div>`;
        }
      };
  
      transformCalloutBlocks();
  
      return str && parsed.innerHTML;
    });
  

    return {
        pathPrefix: "/website",
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};