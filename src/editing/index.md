---
layout: "base.njk"
title: 'Starting Editing'
permalink: "/editing/"
---

## Overview
This website generator works by taking Markdown files, and turning them into HTML, while also inserting them into a template. This section of the website contains the documentation for how this is put together. All of the website (and the generator) is stored in a `git` repository. Unfortunately, this means that you're going to have to understand the basics of how to use `git`.

### What is `git`?
[Git](https://git-scm.com/) is a version control system. You can create a branch from the `main` branch, edit and create files in the branch, and then use a pull request to have someone merge those changes into the `main` branch. Having someone else review the changes helps with the review process for catching typos and bad information. You can create new branches right on the github website, but you can also install `git` on your own computer and use it to clone the repository, pushing and pulling changes. This makes it much easier to work locally, rather than depending on a good internet connection all the time.

### Documentation Format
It's Markdown, processed by [Markdown-it](https://github.com/markdown-it/markdown-it), along with a couple of extras that has been added custom. You can see everything in the [test of everything](/test-everything/) page.

### Editors
I'm using [VS Code](https://code.visualstudio.com/) for editing the website. It is meant mostly for writing code, so it also has features for dealing with git, which makes our workflow easier. Live preview is a great geature to have, but if you want to install a couple of extra things, you can make a local preview, to see that everything is working as expected.

## Local Preview
If you want to generate your own local previews to test what you're working on, you need to install Node.js and npm. You can find instructions for doing that [here](https://nodejs.org/en/download/). Use a prebuilt installer for the easiest install. If it's installed right you should be able to run `node -v` and `npm -v` in your terminal to see that it's working.

Once you have `npm` working, in the top level of the repository, run `npm install` to install the code that the website generator uses into a directory called `node_modules`. You can then run `npm watch:eleventy`, which will run a local server that will watch for changes to the files in the `src` directory, and automatically regenerate the website. You can open your browser to [http://localhost:8080](http://localhost:8080) to see the local preview. It should automatically refresh when you make changes to the files. The `node_modules` directory is not tracked by git, so you can safely delete it if you want to start over, and you don't need to worry about accidentally committing it and sending it to the server. A side note is that you're just copying what the website build process does, so if it works for you, it'll work for the builder.
