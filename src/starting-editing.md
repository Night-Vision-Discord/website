---
layout: "base.njk"
title: 'Starting Editing'
permalink: "/{{ title | slugify }}/"
---
# Overview
This repository contains a website generator, and content that the generator runs on to make the website. When the website is generated it is hosted on Github Pages.

## What is GitHub?
GitHub is a website that allows you to host your own respositories, for collaborative work. It provides several useful functions that can interact with these repositories, some of which are important for this project. When the repository is updated, an Action builds the website, and pushes it to Github Pages, which hosts the website.

## What is a Git repository?
A respository is a collections of files, and their changes. The repository can store several branches, and never throws away information. If you want to go back to an old version it's easy enough to grab it from the repository and use it again.

## How is the content stored?
All of the content is stored in .md files. They contain both Markdown, and a a few extra tags that Rik made for custom functionality. They exist in the `src` directory. These are what we create/edit to make the content. The Markdown is processed by the [Markdown-it library](https://markdown-it.github.io/), and the extra tags are processed by the eleventy library.

## How do I get access to the repository?
Start by creating an account on GitHub, then give your username to rik/a moderator to have you added to the team.

# Workflow
The overview of the workflow is as follows:
- Create a branch
- Make changes to the branch
- Submit a pull request
- Merge the changes

## Creating a branch
When you want to make changes to the website, you'll need to create a branch. This is a copy of the main branch, and you can make changes to it without affecting the main branch. You can create a branch by clicking the "Branch" button in the top right of the Github website, and then typing in a name for the branch.

## Making changes
Once you've created a branch, you can make changes to it. You can edit the .md files in the `src` directory, and then push the changes to the remote repository.

## Submitting a pull request
When you're ready to submit your changes, you can submit a pull request. A pull request is a request to merge your changes into the main branch. You can submit a pull request by clicking the "New pull request" button in the top right of the Github website, and then clicking the "Create pull request" button.

## Marging the changes
Once you've submitted a pull request, another person will review your changes. When they're satisfied with the changes, they can merge the changes into the main branch. This will cause the actions to run, and the website to be built.

# Okay, that's a lot of words. How do I actually do it?
One way is to use the Github website, and the instructions above. Another way is to clone the repository to your local machine, and make the changes there. You would need to remember to pull the changes from the remote repository before starting to work, and push the changes to the remote repository when you're done. Since you're editing on your local machine you can use any text editor that you like - markdown is just plain text - but choosing one that can give you a preview of what you're writing is a good idea. Rik is a nerd, and uses [VS Code](https://code.visualstudio.com/). That said, he also deals with the rest of the code in the repository that builds the website.

Copy the parts of the file from the top of one of the existing files, and paste them into a new file, updating the `title`. It'll generate the permalink from the title, so that it doesn't have to be manually updated. Use the Markdown reference to do the layout that you want.

If you need changes to the page template, speak to Rik.

## Installing Git
If you don't already have Git installed on your computer, you can download it from [here](https://git-scm.com/downloads). Once you've downloaded it, you can install it by running the installer.

## Cloning the repository
To clone the repository, you can use the following command:
```
git clone https://github.com/Night-Vision-Discord/website.git
```
This will create a new directory called `website` in your current directory, and then clone the repository into that directory.

## Making a branch
Use:
```
git checkout -b <branch-name>
```
to create a new branch. You can then make changes to the files in the `src` directory, and then commit them to the branch with the following command:
```
git commit -m "Your commit message"
```

## Pushing the changes in the new branch to the remote repository
Use:
```
git push origin <branch-name>
```
to push the changes to the remote repository. Use the gitHub website to submit a pull request to have the changes merged into the main branch.

## Pulling the most recent changes from the remote repository to your local machine
Use:
```
git pull
```
to pull the changes from the remote repository.

## Where can I read more about git?
[The official git documentation](https://git-scm.com/docs/git-tutorial), and [GitHub's documentation on git](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git).