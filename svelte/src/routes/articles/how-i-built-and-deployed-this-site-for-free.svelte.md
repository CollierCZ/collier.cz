---
title: How I built and deployed this site
description: How I built a modern static site at no cost using Gatsby and Kentico Kontent for Content as a Service.
published: 2019-06-03
category: technology
tags:
  -  website
  - static site
  - content as a service
---

I'm not the most technical kind of person, but I've been posting to the internet since the 90s. I believe I built at least one website on [GeoCities](https://en.wikipedia.org/wiki/Yahoo!_GeoCities) that has been (I hope) lost into the ether. To help me practice my skills, I wanted to build a more modern website, but I wanted a modern editing system, not handcoding `<p>` tags or fiddling with Markdown. And I had to stay within my budget, which was just above $0. So how did I do it?

## To get fast, get static

Although sites on GeoCities and the like had a lot of disadvantages (those that were like mine were real eye-sores), they did have one key advantage. Because they were mostly plain HTML, it was very fast to load the page itself (let's set aside whether you were adding huge images on a dial-up modem). Instead of taking ages for the browser to load JavaScript before it can even begin to see any content like many sites today, it started with the content right away.

This advantage comes from having the site being built in advance, instead of being built in your browser every time you visit a site. These kinds of sites are called static sites.

Once high speed internet connections became common, everyone rushed to add more dynamic content to their websites. We do get some awesome apps that way, but it can be harder to get simple sites looking that way without a lot of knowledge about how to use the latest technologies.

So the idea was to find something that used modern technologies to produce something clean, simple, and fast. Enter [Gatsby](https://www.gatsbyjs.org/).

Gatsby is based on React, a JavaScript framework developed by Facebook, so it has all the capabilities of a modern website. But it is all built into a static site that deploys and loads quickly (unlike, say, Facebook, which is constantly slowed down by looking for new content).

Gatsby is also open source, so I had a foundation to build a site. Now I just needed to know what it would look like.

## I feel pretty, oh so pretty

One of the great benefits of working with open source tools is that it enables so many different people to contribute and offer different perspectives. In this case, that means lots of different possible templates to choose from.

If you're interested in creating a website from someone else's design, you can look at all of the different [Gatsby templates](https://www.gatsbyjs.org/starters/) (known as starters) available. They're also open source, so as long as you credit the author, you can take it and adopt it to fit whatever you'd like. I drew visual inspiration from the [Casper starter](https://github.com/haysclark/gatsby-starter-casper) and technical inspiration from the [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter).

The idea is to pick something you like and see a little about how it fits together. Then you can change things to fit your current mood. You can also make use of React and the wide variety of components you can add in to make your site look awesome.

The main problem with these templates if you're like me is that the content is all in markdown and it's hard to remember exactly what needs to be where and how it should be formatted. You want an easy editor.

## Patterns in the sand

If you want to create content for a site that has specific places for the content to go (basically, to fit content into a template), you're going to want to structure your content. This means things like making sure you can't publish an article without everything that it needs (a title, the body, an author, tags, etc.). It can be hard to manage all that in a GitHub project.

Luckily, I work at [Kentico Kontent](https://kontent.ai/), which offers content as a service so I can edit my content in a structured way with a modern editing interface. It's completely separate from my site's code, so I can write the content without worrying about how it looks.

I chose the Starter plan for Kentico Kontent, so I don't need to pay a thing for the content for my website.

To connect Kentico Kontent, you just need to change a few things about where your site is pulling content from. I wrote about [how to get content from Kentico Kontent](https://www.gatsbyjs.org/docs/sourcing-from-kentico-kontent/) for the Gatsby docs. It's just a matter of making sure your content types in Kentico Kontent match the data you want in your Gatsby project.

Once you've got a Gatsby project with content from Kentico Kontent, you just need to build it and send it out to the internet.

## Deploying for fun and no profit

There are a variety of services you can use to deploy your website, such as Surge, GitHub Pages, and Netlify. Many of these services offer free tiers.

I went with Netlify because #1 it's free and offers a CDN, so my static pages sit as close to website visitors as possible. It also offers the chance to automatically trigger rebuilds.

What does that mean for me? For one, any time I change the code behind the website and pull the code into the GitHub repository, Netlify will rebuild the website and it will be updated automatically.

For another, I can make use of [webhooks from Kentico Kontent](https://docs.kontent.ai/tutorials/develop-apps/integrate/using-webhooks-for-automatic-updates) to automatically trigger a rebuild anytime my published content changes. So this means my site is static, but it will be up to date with the latest content whenever I add anything.

## He got feet down below his knee

So now I have a website, with content pulled as a service from Kentico Kontent and put into a Gatsby project that is rebuilt automatically and deployed by Netlify.

Now, I did cheat a little. The free tier of Netlify allows you to deploy the site to a subdomain of netlify.com, but I'm a little vain, so I splurged on a vanity URL. If you want to keep it all free, you can certainly do so. Otherwise, it's just a few dollars a year to choose any open domain name.

If you have any questions about how the site was put together, take a look at the [GitHub repository](https://github.com/CollierCZ/CollierCZ) and feel free to open an issue with any questions.
