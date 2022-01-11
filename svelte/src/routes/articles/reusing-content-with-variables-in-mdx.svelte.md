---
title: Reusing content (with variables) in MDX
description: How I learned to reuse content in a docs-as-code workflow in MDX.
published: 2021-01-20
category: technology
tags:
  - documentation
  - content
---

In the extraordinarily helpful [Write the Docs Slack](https://www.writethedocs.org/slack/) group,
I've seen a lot of questions from people involved in maintaining [docs-as-code](https://www.docslikecode.com/)
about how to reuse content in such workflows.
I learned that the use of documents inside other documents has a fancy name: [transclusion](https://en.wikipedia.org/wiki/Transclusion).

Traditional documentation management systems (such as systems based around [DITA](https://en.wikipedia.org/wiki/Darwin_Information_Typing_Architecture))
are built around the possibility of reusing content.
You can create small topics and reuse the content in various places,
including with different content for various outputs (like displaying a different variable name on a website and in a PDF).

The idea is that if something changes (the name of a step, a piece of the UI, or anything),
you can update it in one place and have it automatically correct everywhere.
You don't have to spend time hunting through your docs for references to something outdated.

Some people have pointed to Asciidoc and its native [support for including other files](https://asciidoc.org/userguide.html#_system_macros) as the answer.
The objection is that this is another syntax to learn and another barrier to overcome, while developers are already used to writing in Markdown.

For our [Orbit design system](https://orbit.kiwi/),
we're transitioning our docs to a system based on [Gatsby](https://gatsbyjs.com/) with the content in [MDX](https://mdxjs.com/).
Our components are already in React, so the ability to use [JSX](https://reactjs.org/docs/introducing-jsx.html) in Markdown is a real benefit for us.
So we don't want to switch to Asciidoc or any other language.

So we want the benefit of content reuse within the syntax that we're familiar with.
I asked myself whether it was possible.
It was!

## How MDX helps

MDX allows you to use JSX in Markdown.
This includes the ability to import components and use them in Markdown files.
This is great for showing off our React components inside our docs.

This import syntax means it can import other things, too.
Many use it for things like importing [YAML](https://en.wikipedia.org/wiki/YAML) files with data
and then rendering them into interesting charts or tables.

This freedom means you can also import other MDX files and they'll render just the same as if they were written there.
This allows you to write once and reuse wherever you want.

## Life before reuse

To see how content reuse can be helpful, imagine you have documentation for two different components:
an [alert](https://orbit.kiwi/components/alert-message/) and a [toast message](https://orbit.kiwi/components/toast/).
In both cases, you want make sure that people using the components use text and other signals
to communicate a message and not just color (to ensure the message is accessible to everyone, even those who won't see the colors).

So you might have an `alert.mdx` file like so:

```markdown
---
title: Alert
---

Alerts are useful when you want to interrupt a user's flow to deliver an important message.

### Use more than just color

To maximize accessibility, make sure the message is clear from the content.
Icons can also support the message.

Color alone does not always distinguish different alert types.
```

And a `toast.mdx` file like so:

```markdown
---
title: Toast
---

Toast messages are useful for temporary messages without any permanent effects.

### Use more than just color

To maximize accessibility, make sure the message is clear from the content.
Icons can also support the message.

Color alone does not always distinguish different toast types.
```

As you can see, you're writing a lot of the same text twice.
And changing it (to add a link to [your accessibility advice](https://orbit.kiwi/accessibility/accessibility/), for example)
would be something of a pain.

## Basic reuse

To reduce the amount you have to repeat yourself, take advantage of MDX import capabilities.

First, you want to create a snippet that can be shared among files.

(Before you create such a file, you'll want to give some thought to where your snippets will live in your repo, how you'll reference them,
what kind of structure/naming convention you'll want to use, and more.
That depends a lot on your situation, so it's more than can be answered here.)

For now, create a `more-than-color.mdx` file inside a `snippets` folder:

```markdown
### Use more than just color

To maximize accessibility, make sure the message is clear from the content.
Icons can also support the message.
```

Then use the import syntax in `alert.mdx`:

```markdown
---
title: Alert
---

import ColorSnippet from "snippets/more-than-color.mdx"

Alerts are useful when you want to interrupt a user's flow to deliver an important message.

<ColorSnippet />

Color alone does not always distinguish different alert types.
```

and `toast.mdx`:

```markdown
---
title: Toast
---

import ColorSnippet from "snippets/more-than-color.mdx"

Toast messages are useful for temporary messages without any permanent effects.

<ColorSnippet />

Color alone does not always distinguish different toast types.
```

Now your rendered file will look the same, but you only have to update the text in one place to have it propagate to both docs.

## Advanced reuse with variables

This was all well and good and before I looked into it, I thought this was as far as it went.

It's very nice in terms of not repeating myself (a [key concept](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) in software development),
but without all the features of more complex docs systems.
For example, you can see the last sentence in each doc is almost the same, just with a change in the name of the component.
It'd be nice to be able to include that.

And it turns out, you can.

(Disclaimer: This is [part of MDX v2](https://github.com/mdx-js/mdx/issues/628), though available now,
and so the syntax or behavior may change and it isn't fully documented yet, so the following syntax may go out of date.
The principle should remain, though.)

MDX imports the other MDX file as if it were a JSX component.
This means you can treat it like a component and add props to it.

So `alert.mdx`, instead of using `<ColorSnippet />`, can be:

```markdown
---
title: Alert
---

import ColorSnippet from "snippets/more-than-color.mdx"

Alerts are useful when you want to interrupt a user's flow to deliver an important message.

<ColorSnippet component="alert" />
```

And `toast.mdx` can be:

```markdown
---
title: Toast
---

import ColorSnippet from "snippets/more-than-color.mdx"

Toast messages are useful for temporary messages without any permanent effects.

<ColorSnippet component="toast" />
```

Then you can change your snippet to use this prop:

```markdown
### Use more than just color

To maximize accessibility, make sure the message is clear from the content.
Icons can also support the message.

<p>Color alone does not always distinguish different {props.component} types.</p>
```

Note that this syntax requires the use of JSX tags at the start and end of the section so that it will recognize that there may be a prop coming.

It's possible to use tags like `<></>`, but we're using components in the [MDXProvider](https://mdxjs.com/getting-started#working-with-components)
to render our docs with Orbit components.
Using blank tags makes those components not render properly.
Using basic HTML tags keeps our styling consistent.
It does mean writing things like `<ul><li>Text {props.component}</li></ul>`, which isn't as nice looking as a Markdown list.
But it works.

So now our docs can reuse content, and even display the content differently depending on the context.

It's all still a work in progress, but you can see our progress in [our GitHub repo](https://github.com/kiwicom/orbit/tree/master/docs).
Our eventual plan is to release a docs theme for Gatsby, so let us know at GitHub if there's anything you'd like to see there.
