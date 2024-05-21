# Website generator
This is the website generator for making tier lists, or any other documentation we care about.

To edit/create documents, you'll be writing Markdown format in the "static" directory. When it gets pushed to github, there's a task that will build the website from that. Styles are in static/scss/main.scss. Don't edit anything else, for technical reasons.

The processed website ends up at: https://night-vision-discord.github.io/website/

Images go in the src/images directory. Use the example.md to see how to refer to everything.

If you're just editing the pages, you can stop reading now.

## Getting access
Create a github account, and give the username to rik/a moderator to have you added to the team.

## Giving access
Click "Settings", "Collaborators and teams" and then click "Add people". Add the user there.

## Technical details
It's built with eleventy.js, and GitHub Pages, using GitHub Actions to run the generator.
There's a pair of shortcodes for TierTable and TierTableRow, for making tier lists.
