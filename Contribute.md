-[Setting Up Your GitHub Account](#setting-up-your-github-account)

-[Signing Up](#signing-up)

-[Getting the Hang of Git Basics](#getting-the-hang-of-git-basics)

-[Git Repositories](#git-repositories)

-[How to Fork a Repository](#how-to-fork-a-repository)

-[Fork the Repository](fork-the-repositary)

-[Clone Your Fork Locally](#clone-your-fork-locally)

-[Git Branches](#git-branches)

-[Making Changes](#making-changes)

-[Pull Requests on GitHub](#pull-requests-on-github)



## Setting Up Your GitHub Account

Let's get you started with a GitHub account. It's free and not too hard to set up. Here's how to make your account look good and professional:

## Signing Up
```sh
i.Head over to github.com and hit Sign up at the top right.
ii. Pick a username that looks professional. Using your real name or a mix of your first and last names is a good idea.
iii. Enter your email and pick a strong password.
iv. Check your email for a confirmation from GitHub and click the link to prove it's really you.
```

## Getting the Hang of Git Basics


Git is a tool you'll use a lot when you're helping out with projects on GitHub. Let's go over some basic stuff you should know about Git:

## Git Repositories

Think of a Git repository (or repo) as a big folder for your project. It keeps all your project's files and the history of changes. You can have these repos on your own computer or online on GitHub.
To grab a copy of a project from GitHub to work on,
```sh
 type git clone <repo URL> in your command line.
You now have your own local version of the project.
```

## How to Fork a Repository

Forking and cloning repositories are your first steps into contributing to open source projects on GitHub. Let's break it down:

## Fork the Repository
```sh
Go to the GitHub page of the project you're interested in.
Click the "Fork" button at the top right. This makes a copy of the project under your GitHub account.
```
## Clone Your Fork Locally
```sh
i. Head to your version of the repository on GitHub.
ii. Press the "Code" button and copy the web address.
iii. Open your command line tool and go to where you want the project to be on your computer.
iv. Type git clone, then paste the web address you copied:
git clone https://github.com/YOUR-USERNAME/YOUR-FORKED-REPO
v. Hit Enter. This makes a copy of the project on your computer.
```

## Git Branches

Branches are like parallel worlds for your project. They let you work on different stuff at the same time without messing up the main project.
The main branch is like the project's backbone.
To start working on something new, make a new branch with git branch <branch name>.
Jump into your new branch with:
```sh
 git checkout <branch name>
 ```
When you're done, you can bring your changes back to the main project.

## Making Changes

Here's a simple way to think about making changes to a project:
```sh
i. Start a new branch
ii. Change or add code and make sure it works
iii. Get your changes ready with git add <files>
iv. Save your changes with a note using git commit -m "<message>"
v. Send your changes up to GitHub with git push
```

## Pull Requests on GitHub

A pull request is how you tell others, "Hey, I've got some changes I think we should add." Here's how it goes:
```sh
On GitHub, you can start a pull request from your branch to the main branch.
Other people will look at your changes and might give suggestions.
If you need to, add more changes by making more commits to your branch.
```
Once everyone's happy, your changes get added to the project!
With these simple steps, you're ready to start helping out with projects by using Git.

