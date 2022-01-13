---
title: Changing a git commit message in a public repo
description: How to change a commit message when you've already pushed it to a public repository in 4 commands.
heroImage: change-coming
published: 2020-11-06
category: technology
tags:
  - git
  - conventional commits
---

In some of our docs projects, we enforce [Conventional Commits](https://www.conventionalcommits.org/).
This helps us keep out git history clear so we can track down when changes happen
and makes it easier to automate processes such as creating changelogs.

One of the ways this is enforced is through pre-commit git hooks with [husky](https://github.com/typicode/husky).
This works well when people are making changes locally and testing them and everything.
They can't commit anything without getting a notification about any badly phrased commit messages.

But sometimes people choose to use the UI of the repository manager (GitHub or GitLab) to make quick changes.
And they sometimes forget about conventional commits.

Our second way of enforcing Conventional Commits is a stage in the pipeline, which breaks if the standard isn't followed.
So sometimes pipelines break from commit messages. And there's no way to change the messages in the UI.

So how do you change the commit message for a branch you've already pushed?

It's just 4 steps using the command line.
In each step, be sure to replace the variables inside `<>` (in all caps) with the right values for your case.

## 1. Get the latest version of the repository

If you haven't already done so, you need to have the repository on your local machine:

```bash
git clone <LOCATION_OF_REPOSITORY>
```

If you already have the repo, make sure to update it with the latest changes:

```bash
git pull
```

## 2. Switch to the correct branch

Switch to the branch with the commit message you want to change:

```bash
git checkout <BRANCH_NAME>
```

## 3. Change the message

Assuming the commit with the message is the most recent commit,
change the message with the following command:

```bash
git commit --amend -m "<YOUR_NEW_COMMIT_MESSAGE>"
```

This takes the most recent commit
and [amends](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---amend) (changes) it.
By passing the `-m` flag, you edit the commit message directly in the terminal.

## 4. Force your changes

You now have the right message locally.
But it is essentially created as a new commit.

If you just pushed your changes, your upstream branch (on GitHub, GitLab, or wherever) would record two commits:
the old one with the wrong message and the new one. So the pipeline would break.

So you have to force push your changes.
This can be if you have other people working in the branch,
but shouldn't be a problem if you've just pushed a change and are amending it.

```bash
git push --force-with-lease
```

By using `--force-with-lease` (and not just `--force`),
the push will be rejected if anyone else has pushed changes.
This ensures you don't overwrite any changes someone else has made.

And that's it. Now your repository manager should show your branch with only the new message and your pipeline should pass.

Or at least, it shouldn't break from the commit message.
No guarantee there aren't other issues.
