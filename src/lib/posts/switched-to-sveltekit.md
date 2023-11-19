---
title: "Switched to SvelteKit"
date: 2023-10-09T18:29:29+01:00
tags: ["software", "blog", "svelte", "sveltekit"]
description: "Why switch when the old thing worked just fine?"
---

_Why switch when the old thing worked just fine?_

<!--more-->

I mean, that's definitely a good question.

Ever since I have been at least
a little serious about my personal website and blog, I've used a combination
of [Hugo](https://gohugo.io) and the
[hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod/) theme to get
the job done. And the job done they got. But somehow, it didn't feel good enough.

You see, even though no one probably reads this blog, I still take pride in this
website. And every time I browsed the internet and visited a different blog
that looked exactly like mine
(based on [hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod/)), I would
loose a bit of that pride.

Every time I wanted to slightly adjust the footer or tried adding other new cool
things to the blog, I either couldn't due to it's fully-static nature, or the
result didn't look visually satisfactory.

Eventually, I got frustrated enough to say
_enough_ and went on to rebuild my website from scratch.

## Why SvelteKit?

Three reasons:

1. It's **fast**
   - That doesn't include just page reloads during development that feel at
     least 5x faster than NextJS, but everything else as well.
2. It's **simple**
   - Everything looks and feels like the basic building blocks of the web - HTML is
     HTML, CSS is CSS and Javascript feels like Javascript.
3. It's **sexy**
   - A small but good example is that I can [define CSS per component
     ](https://github.com/fourstepper/robinopletal.com/tree/main/src/lib/components/Footer.svelte#L22-L60)
     instead of having to do
     [everything globally](https://github.com/fourstepper/robinopletal.com/tree/main/src/app.scss).
     This basically eliminates the need for something like Tailwind CSS and
     made me appreciate CSS over Tailwind (which I initially thought was just way better).
   - I am no frontend genius, but I wanted some _nice_ transition animations on my site.
     It took me less than 30 minutes to implement this from the moment I started looking at the documentation.
     [Here](https://github.com/fourstepper/robinopletal.com/tree/main/src/routes/+layout.svelte#L9-L17)
     is the full [implementation](https://github.com/fourstepper/robinopletal.com/tree/main/src/routes/+layout.svelte#L61).

## What's next?

Right now, the new site has all the functionality my old site had, and that's great.

I've checked off all checkboxes that I had created for this migration in Joplin
except for writing and posting this blog post, which I am doing right now.

<picture>
  <source srcset="/images/switched-to-sveltekit/joplin-note-dark.png" media="(prefers-color-scheme: dark)">
  <img alt="Joplin checklist for the website rewrite" src="/images/switched-to-sveltekit/joplin-note-light.png">
</picture>

I have some additional notes below the ones I've just shared with plans of what I want
to potentially add to my site over time.

I don't want to spoil the whole list, but here are a couple ideas:

- Create a `/changelog` page that would simply reflect things changed/added to the blog
  - Not sure if this holds much value as the entire
    [git commit history is public](https://github.com/fourstepper/robinopletal.com).
- Add a little "Reactions" section.
  - The idea here is to have a little self-made comment section, together with some
    simple, emoji-based reactions together with a reaction counter per-post. I got this
    idea from [Vadmin Kravcenko's
    site](https://vadimkravcenko.com/shorts/bullshit-jobs/#reactions-new).
- Display a _fancy_, automatically-fetched list of my projects from Codeberg and Github on a
  `/projects` page.
- Create a `/recent-activities` page that would pull my Garmin activities data
  and display them in the form of some
  [nice graphs](https://www.chartjs.org/), inclusive of stats and other niceties.
- Add a contact form to the [contact](/contact) page.

## Future future?

Will I ever move on from SvelteKit? I mean, most likely?

This is software that we
are talking about here; what do I know what will the _standard demands on a personal
website_ look like in the age of [Apple Vision Pros](https://www.apple.com/apple-vision-pro/)
and the [Metaverses](https://about.meta.com/what-is-the-metaverse/)?

For now, however, I am really happy with it and I intend to build anything-web with Svelte
and SvelteKit going forward.
