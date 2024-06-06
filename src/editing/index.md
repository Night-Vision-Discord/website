---
layout: "base.njk"
title: 'Starting Editing'
permalink: "/editing/"
---
## Overview
This website is build with a series of layers. Aside from how the content is written, you don't need to understand much of it, but feel free to delve deeper. The layers that you need to know exist are:
- Markdown
- Git
- GitHub

### Markdown
Markdown is a lightweight markup language that is used to write content. All the content under the `src` directory is written in Markdown. You can see the [test of everything](/test-everything/) page to see what the Markdown looks like, along with the special tags for extra functionality that have been added. Just copy markup from there, or review against the [Markdown-it documentation](https://github.com/markdown-it/markdown-it).

### Git
Git is a version control system. It stores the files, and all the changes that you make to them. This container of files is called a repository. A respository can track multuiple branches of work at the same time. These branches are important, because the one labelled `main` is the one that is used to deploy the website, and the one labelled `gh-pages` is where the output of the website generator is stored, and pushed into the hosting service.

> [!important]
> Do not edit things in the `main` or `gh-pages` branches. Not even if you clone the repository.

To work on the website, make a new branch with a useful name, make your changes, and commit them. Then make a pull request to merge your changes into the `main` branch. This will also trigger a review of your changes because someone other than you has to approve the merge. Once the review is complete, the changes will be merged into the `main` branch, and the website will be updated. You can make as many commits to your branch as you want, to avoid losing work for some reason while you're editing. Maybe you change your mind on some wording. Maybe you find a typo, or a new image to add. Since all version are saved forever, you can always pull an old version back out, too, so don't worry about losing anything, or even breaking things.

### GitHub
GitHub is a website that hosts git repositories. It's free. It hosts our git repository, the build process, and the website itself. It's a better experience to clone the repository, and work on a `clone` of the repository locally. The down side to this is that you need to keep your clone of the repository up to date by `pull`ing newer changes from the repository in GitHub. When you're done making changes locally, even if you don't want to merge them yet, you can `push` your branch up to Github. This allows for things like changing which machine you're working from - if you were starting an edit while you were at work on one machine, but it was time to leave and you want to carry on editing at home - or allows someone else to see your porposed changes, give feedback, or help with the editing, all without pushing the changes to the website.


## Okay, but, how do I actually work on the website?
The absolute minimum you need to work on the website, is just a web browser - you can do everything via the Github website. It is, however, a pain to do. The setup I use is to install [git](https://www.git-scm.com/downloads) and [Visual Studio Code](https://code.visualstudio.com/). This gives you all the tools to work locally, and without needing to do anything else. There's more tools that can make more things easier, but I'll explain why I recommend this.

First up, make a directory on your computer to store your `clone` of the repository. Open up a terminal (Command prompt or Powershell, or Terminal if you're on Mac), and go to that directory that you created. In your browser, go to the [GitHub Repository](https://github.com/Night-Vision-Discord/website), and pick the green button labelled "<> Code", and copy the URL in the "Clone" section. In your terminal run `git clone <url>`, where `<url>` is the URL you copied. This will download the repository to your computer. Go into the directory that was created, and run `code .` to open up Visual Studio Code in the current directory. It will ask you whether you trust the authors of the code, and you can say yes.

On the left, you'll see a list of files in the repository. At the bottom of the screen you'll see the word "main". That's the branch that you're currently working on. If you click on it, you can create a new branch to work on or select an existing branch. Go nuts. Make new documents under the `src` directory, using existing ones as a template. Overwrite existing files. It's all cool, we can back out changes we don't want, later. You can not permanently break it. If you want a limited preview of what your document will look like, you can hit `Control + K`, followed by `v`. this will open up a preview window to the right of the editor with a live preview. It's not great, and it has none of our custom parts, but it's a good way to see what your document will look like.

When you're done editing (or hit a stopping point, or just anywhere you want to save), you need to commit your changes to the respository. To do this, pick the "Source Control" tab on the left (or hit Control+Shift+G), add a commit message in the box, hit the `+` to stage all the changes that `git` has detected, and then hit the `Commit` button. Those changes are now saved to your local copy of the repository in the branch you're working on. You can then `push` your changes to the server, so that they are saved in the repository on GitHub by hitting the `Push` button.

Back at the GitHub website, go to the "Pull Requests" tab, and click the green button labelled "New pull request". This will open up a new window, where you can select the branch you want to merge into the `main` branch, and the branch you want to merge from. Hit the green button labelled "Create pull request", and fill in a few words about what you're doing, and hit the "Create pull request" button. The Pull request is what allows your branch to be merged into the `main` branch, and from there go onto the website.

## Local Preview
If you want to generate your own local previews to see what your branch actually looks like before submitting a pull request, you need to install `Node.js` and `npm`. You can find instructions for doing that [here](https://nodejs.org/en/download/). Use a prebuilt installer for the easiest install. If it's installed right you should be able to run `node -v` and `npm -v` in your terminal to see that it's working.

Once you have `npm` working, in the top level of the repository, run `npm install` to install the code that the website generator uses into a directory called `node_modules`. You can then run `npm watch:eleventy`, which will run a local server that will watch for changes to the files in the `src` directory, and automatically regenerate the website. You can open your browser to [http://localhost:8080](http://localhost:8080) to see the local preview. It should automatically refresh when you make changes to the files and hit save (separately to committing). The `node_modules` directory is not tracked by git, so you can safely delete it if you want to start over, and you don't need to worry about accidentally committing it and sending it to the server. The side note here is that what GitHub does is run an `command` to do a single build of the website, and then pushes the result to the `gh-pages` branch, which another process on GitHub will use to serve the website, so as long as the local preview works, it'll work when it builds the website.
