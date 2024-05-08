# Website generator
This is the website generator for making tier lists, or any other documentation we care about.

To edit/create documents, you'll be writing Markdown format in the "static" directory. When it gets pushed to github, there's a task that will build the website from that. Styles are in static/scss/main.scss. Don't edit anything else, for technical reasons.

Images go in the src/images directory. Use the example.md to see how to refer to everything.

If you're just editing the pages, you can stop reading now.

## Technical details
It's built with eleventy.js, and GitHub Pages, using GitHub Actions to run the generator.
There's a pair of shortcodes for TierTable and TierTableRow, for making tier lists.