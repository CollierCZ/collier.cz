---
title: Reduce, reuse, reward
description: How not to repeat yourself in your docs in Hugo.
heroImage: recycle
published: 2022-07-08
category: technology
tags:
  - documentation
  - content
---

I've written before about [reusing content](https://collier.cz/articles/reusing-content-with-variables-in-mdx/).
Since then, I've changed jobs and also documentation tools.

I'm now the Technical Education Manager at [Platform.sh](https://platform.sh/).
While we still do docs-as-code and have our [docs completely open source](https://github.com/platformsh/platformsh-docs),
I now work with [Hugo](https://gohugo.io/) to build the docs.

We have a lot of content and sometimes we want to reuse that content in various places.
Luckily, we can manage that.

This is based on a talk I gave for [Hugo Conf](https://hugoconf.io/).
See the [slides from the talk](https://presentations.collier.cz/slides/reduce-reuse-reward.html).

## What it's called

There are various name for this practice:

* Content reuse
* Single sourcing
* [Transclusion](https://en.wikipedia.org/wiki/Transclusion)

Whatever the name, it involves using bits of content more than once.

## Benefits to reuse

* Helps you avoid repetition ([DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)).
* You can update once and have it correct everywhere.

  If you regularly update documentation,
  you know what a pain it can be to track down everywhere that needs updating.
  Having content in one place helps with that.
* Helps with automation.

  You can use scripts to update a single file and have that data be used in various locations.
* You can also have the same content with different outputs.

  We don't do this, but you can publish content in different places
  and use variables to alter the content for each location.

## Examples

There are many cases where this could come in handy.

For example, when you have a project name that exists on many pages.
You might go through a rebranding and need it up to date.

Or you might have instructions on a page dedicated to part of the project
and also on a general tutorial for new users.
If your UI or CLI commands change, you don't want to have to change them multiple times.

We also have [guides for lots of different frameworks](https://docs.platform.sh/guides.html).
A lot of these guides share introductory information, such as why it's useful and other content.
When we have one place with the content that varies only with the name of the specific framework,
updates are much easier.

## Example repetition

So imagine you had two guides for integrations for Project X.
One for integrating with a Task Manager:

```markdown
To get the most out of your Task Manager,
integrate it with Project X.
This makes it faster, cleaner, and smarter.

To do so, follow these steps:

1. Set up your directory with the following command:
    project start.
2. Answer the questions.
3. Build it all by running project build.
```

And one for integrating with a Calendar:

```markdown
To get the most out of your Calendar,
integrate it with Project X.
This makes it faster, cleaner, and smarter.

To do so, follow these steps:

1. Set up your directory with the following command:
    project start.
2. Answer the questions.
3. Build it all by running project build.
```

The instructions are basically the same in two places.
You're also repeating your product name and how to use it.

## Resolve project name

To resolve the project name,you can create a [shortcode](https://gohugo.io/content-management/shortcodes/).
Then when you update that file, it changes in every place.

Create a `layouts/shortcodes/product-name.md` file:

```markdown
Project X
```

You could also use HTML, but we like sticking with Markdown where we can.

Then use that shortcode in your Task Manager file:

```markdown
To get the most out of your Task Manager,
integrate it with {{% product-name %}}.
This makes it faster, cleaner, and smarter.

To do so, follow these steps:

1. Set up your directory with the following command:
    project start.
2. Answer the questions.
3. Build it all by running project build.
```

And the Calendar file:

```markdown
To get the most out of your Calendar,
integrate it with {{% product-name %}}.
This makes it faster, cleaner, and smarter.

To do so, follow these steps:

1. Set up your directory with the following command:
    project start.
2. Answer the questions.
3. Build it all by running project build.
```

If you were using HTML, you'd replace the `%`s with `<` and `>`.

## Reuse instructions

The product name is nice and all, but the instructions are more of a pain to keep up to date.
Much less easy to do a global find and replace.
So we want to create a shortcode for those instructions.

Create a `layouts/shortcodes/setup-instructions.md` file:

```markdown
{{ $integration = .Get "integration"}}
To get the most out of your {{ $integration }},
integrate it with Project X.
This makes it faster, cleaner, and smarter.

To do so, follow these steps:

1. Set up your directory with the following command:
    project start.
2. Answer the questions.
3. Build it all by running project build.
```

Then use the shortcode while passing the name of the integration as a parameter:

```markdown
{{% setup-instructions integration="Task Manager"%}}
```

```markdown
{{% setup-instructions integration="Calendar"%}}
```

## Vary instructions

Even more than just repeating instructions, you can also vary how they work.
Saw your integration for your Task Manager has a different command than for the Calendar.

You just have to vary your instructions shortcode:

```markdown
{{ $integration = .Get "integration"}}
To get the most out of your {{ $integration }},
integrate it with Project X.
This makes it faster, cleaner, and smarter.

To do so, follow these steps:

1. Set up your directory with the following command:
    project
    {{if eq $integration "Task Manager"}}start{{else}}go{{end}}.
2. Answer the questions.
3. Build it all by running project build.
```

Note that you don't have to change either of the other files.
They get updated with the correct command automatically.

## Nested shortcodes

One issue is you can't use shortcodes inside other shortcodes.
That's why the instructions shortcodes don't use the project name shortcode.

To nest things, you could make the nested shortcode into a partial.
Then your top-level shortcode could look like:

```markdown
{{ $integration = .Get "integration"}}
To get the most out of your {{ $integration }},
integrate it with
{{ partial "product-name" (dict "integration" $integration) }}.
This makes it faster, cleaner, and smarter.

To do so, follow these steps:

1. Set up your directory with the following command:
    project start.
2. Answer the questions.
3. Build it all by running project build.
```

This adds complexity to your process.
This means it's harder to find the right content to update, which partially defeats the purpose of reuse.

## More sustainable organization

If you have a lot of reused content, it can be difficult to organize.
Especially if you have other shortcodes for actual layouts and such.

You can create a shortcode to transclude markdown files from a special directory just for them.
You then have separate files inside this, possibly organized into clear directories.

If your directory for the files was `snippets`,
your shortcode could look like this:

```markdown
{{ $file := .Get 0 }}
{{ printf "snippets/%s" $file | readFile | safeHTML }}
```

And you could invoke it like this (assuming the file to include is `example.md` in the `snippets` directory):

```markdown
{{% include "example.md" %}}
```

In this case, `safeHTML` ensures headings are included in Table of Contents.

## Drawbacks to `include` shortcode

This way isn't perfect either.
It doesn't process Hugo formatting (can't use variables or partials).
And if your snippets directory is outside content directory, updates don't refresh site on `hugo serve`.

So it's suitable for basic Markdown that's repeated, but not complex scenarios.

## Things to watch out for

Anna Gasparyan gave a great talk on potential pitfalls with content reuse called:
[Don't shoot yourself in the foot with content reuse](https://www.youtube.com/watch?v=dxEhvjz3eEY)

The main areas were:

* Content being reused when it's unnecessary.

  This puts content in a separate file for no real reason.
  Then reviews and such are more difficult.
* It's harder to find where to update (especially with nesting).

  You can spend a lot of time tracking down which file has the content you want to update.
* Complex nesting can break.

  If you're using nesting, make sure you spend time making sure any conditionals are resilient to changes.
* Reused content can hurt search results.

  Google and other search engines decrease the relevance of repeated content.
  It can also make it harder to find one specific page.

So remember that just because you _can_ reuse content doesn't mean you _should_.
You have to balance the DRY and [KISS](https://en.wikipedia.org/wiki/KISS_principle) principles.
