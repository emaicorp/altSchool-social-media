# Contributing to Social Media API

Thank you for considering contributing to [Project Name]! We welcome all kinds of contributions, including bug reports, feature requests, and code improvements.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Features](#suggesting-features)
  - [Code Contributions](#code-contributions)
    - [Development Workflow](#development-workflow)
      - [Branch Naming Rules](#branch-naming-rules)
      - [Commit Message Rules](#commit-message-rules)
    - [Submitting Pull Requests](#submitting-pull-requests)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Getting Started

1. Fork the repository.
2. Clone your forked repository:
   ```sh
   git clone https://github.com/emaicorp/altSchool-social-media.git
   ```
3. Navigate to the project directory:
   ```sh
   cd <Altschool Social Media>
   ```
4. Install dependencies:
   ```sh
   pnpm
   ```
5. Start the local server to preview and interact with the app:
   ```sh
   pnpm dev
   ```

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue on [GitHub Issues](https://github.com/emaicorp/altSchool-social-media/issues) and include as much detail as possible. Provide steps to reproduce, expected and actual behavior, and any relevant logs.

### Suggesting Features

If you have an idea for a new feature, please open an issue on [GitHub Issues](https://github.com/emaicorp/altSchool-social-media/issues) and describe your proposal. Explain why the feature would be useful and how it should work.

### Code Contributions

> Please make sure to have created a fork of the original repository. This is where you will work in when contibuting.

#### Development Workflow

1. Create a new branch for your work:

    Note: <> is note part of the git commands.
    For the sake of this lesson, always use your name as the created branch e.g `chiwetalu-henry` and the change we made `bug-fix`.
   ```sh
   <git branch `your-name`>
   Creates a branch so named
   ```  
   ```sh
   <git checkout `your-name`>
   switches to the newly created branch.
   ```
   
   ##### Branch Naming Rules
   - You will likely work on features, bug fixes, refactors (restructuring code without changing functionality), chores on the repo (routine tasks such as updating dependencies or changing configurations), or documentation. For each of the type of updates, always use your name as the branch name.
   - For any of these updates, you will likely use a ticket or an issue. The ticket number, e.g. your_name-1234 or issue number should also be included in your branch name
   - Finally, a short description for your update should follow suit. This is often taken from the ticket title
   - All of this (except the ticket number acronym, `HNG`) should be written in lowercase
     > Thus, a typical branch should look like `/your_name-1234` or like `your_name` if your update has no corresponding ticket or issue (unlikely)
2. Make your changes, and commit them with descriptive messages:

   ```sh
   git add .
   git commit -m "bug fix"
   commits the change made to the current branch.
   ```

   ##### Commit Message Rules

   Commit messages also follow a pattern about the changes done. However, there is no need to add ticket number since they can be easily tracked given the branch name. Instead, use a colon, `:`, after the type of change (`new feat`, `fix bug`, etc.), a whitespace, then your commit message. In cases where you are required to add the ticket number, you may use a the parenthesis after the type of change, like `new feat: your commit message`

   > Another example: `fix login issue: use a single state for formData` or `bug fix: use a single state for formData`

> Please notice how both branch names and commit messages use the imperative tense. The imperative tense is a command or request, which makes it clear what the commit does. i.e., "fix login issue", NOT "I fixed login issue", and NOT "fixed login issue"

3. Push your branch to your forked repository:
   ```sh
   git push origin <bug-fix>
   ```

#### Submitting Pull Requests

1. Ensure your branch is up to date with your remote repository:
   ```sh
   git checkout main
   git pull origin main
   git checkout <name>
   git rebase main
   ```
   > You should regularly update your remote repository with changes from the [default branch of the] upstream repository
2. Run tests and ensure all tests pass:
   ```sh
   pnpm test
   ```
   > Make it a habit to run tests before creating pull requests.
3. Submit a pull request from your branch to the upstream repository.
4. In your pull request description, explain what changes you made and why.

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). By participating, you are expected to uphold this code. Please report unacceptable behavior to [email@example.com].

## License
