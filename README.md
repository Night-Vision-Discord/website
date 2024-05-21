# Website generator
This is the website generator for making tier lists, or any other documentation we care about.

To edit/create documents, you'll be writing Markdown format in the "static" directory. When it gets pushed to github, there's a task that will build the website from that. Styles are in static/scss/main.scss. Don't edit anything else, for technical reasons.

The processed website ends up at: https://night-vision-discord.github.io/website/

Images go in the src/images directory. Use the example.md to see how to refer to everything.

## What software should I use for editing?
You can edit directly in the web view on the Github website. You can clone the repository to your local machine, create a branch and edit in the branch, using whatever editor you want. Rik uses Visual Studio Code.

# What the hell are `git` and `github`?
`Git` is a version control system. It stores all old versions of what you're editing, and allows you to work on different versions on things, roll back to old versions, and merge changes if you have conflicts.
This also allows you to collaborate with other people. The way this works is by having a central repository on Github that users are allowed to write changes (called commits) to the repository. Git allows you to have "branches" of the repository to allow people to work on separate things at once without affecting "the current version" (known as the `head` of the repository, which is the most recent commit to the `main` branch). In this setup we create a branch, make our changes in the branch, and then submit a `pull request` to have another user review the changes before they go in to the `main` branch and be built in to the website.

Isn't it annoying to deal with working with a repository on a website somewhere? Yeah. That's why we basically don't. We `clone` the website locally, work on it locally, and `push` the changes to the remote repository, and `pull` changes from it to keep our local one up to date.

For more information, please read the link to a "making your first changes" guide document that I'll put a link to here once I get it from a friend.

If you're just editing the pages, you can stop reading now.

## Getting access
Create a github account, and give the username to rik/a moderator to have you added to the team.

## Giving access
Click "Settings", "Collaborators and teams" and then click "Add people". Add the user there.

## Technical details
It's built with eleventy.js, and GitHub Pages, using GitHub Actions to run the generator.
There's a pair of shortcodes for TierTable and TierTableRow, for making tier lists.
