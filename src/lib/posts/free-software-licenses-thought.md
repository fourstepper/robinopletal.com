---
title: "Free software licenses; A longer-term thought"
date: 2023-12-02T12:11:21+02:00
tags: ["open-source", "free software", "thoughts"]
description: "What does Free actually mean, and to whom?"
---

## Introduction

Hi and welcome to _Yet Another Internet Ramble_ ( _YAIR™_ ) of mine.

What I aim to write down today aren't novel ideas; rather a distillation of my thoughts on
some of the major Free software licenses, what freedoms each of these licenses carries out, how
I have viewed these licenses in the past and how and why some of those views have shifted in me,
over time.

Before we start, I would like to mention that I am not a lawyer. Do not take any part of this
article as legal advice.

## Licenses in scope

I have boiled down my own choices of open-source licenses to these:

- MIT
- Apache 2
- GPLv3
- AGPLv3

If you would like to know more about any of the above licenses, feel free to make use of the licenses
summary available below:

<details><summary>
<strong><u>Licenses summary</u></strong>
</summary>

---

#### [MIT](https://mit-license.org/)

Simple, concise and **permissive** license. Offers just enough _lawyer-speak_ to be valid as a
license for use in any company while giving all permissions to the party obtaining such
licensed software.

From [tldrlegal.com](https://www.tldrlegal.com/license/mit-license):

> A short, permissive software license. Basically, you can do whatever you want as long as you include
> the original copyright and license notice in any copy of the software/source.

#### [Apache 2](https://www.apache.org/licenses/LICENSE-2.0.html)

Similarly to the MIT license, the Apache 2 license is a **permissive** license. The main
difference between the two licenses is that the Apache 2 contains an explicit Patent Grant.

From [opensource.com](https://opensource.com/article/18/2/apache-2-patent-license):

> In essence, when a software developer contributes code to a project (i.e., the Work under the license),
> he or she becomes a Contributor. Under the above term, Contributors are granting permission to use any
> of their patents that may read on their contribution. This provides peace of mind to users since the
> Contributor would likely be prevented from pursuing patent royalties from any users of the software
> covering that contribution to the project.

#### [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)

In simple terms: any software that is GPLv3 licensed must be, upon modification, also made available
under the GPLv3 license.

This guarantees that software once written and licensed under the GPLv3 licnese stays Free software.

From [tldrlegal.com](https://www.tldrlegal.com/license/gnu-general-public-license-v3-gpl-3):

> You may copy, distribute and modify the software as long as you track changes/dates in source files.
> Any modifications to or software including (via compiler) GPL-licensed code must also be made available
> under the GPL along with build & install instructions.

#### [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html)

I won't add any additional text of mine here.

The description from
[tldrlegal.com](https://www.tldrlegal.com/license/gnu-affero-general-public-license-v3-agpl-3-0) below
is perfect:

> The AGPL license differs from the other GNU licenses in that it was built for network software. You
> can distribute modified versions if you keep track of the changes and the date you made them. As per
> usual with GNU licenses, you must license derivatives under AGPL. It provides the same restrictions
> and freedoms as the GPLv3 but with an additional clause which makes it so that source code must be
> distributed along with web publication. Since web sites and services are never distributed in the
> traditional sense, the AGPL is the GPL of the web.

<strong><u>Summary end</u></strong>

---

</details>

## A common (A)GPLv3 freak

I will admit. For quite some time, I have been a pretty heavy copyleft license freak. I've genuinly
felt that licenses that are too permissive (i.e. MIT and Apache 2) give way too much freedom to
those _evil corporations_ that only want to take software that we love and go full-on
[Embrace, extend, and extinguish](https://en.wikipedia.org/wiki/Embrace%2C_extend%2C_and_extinguish) on it.

I've also heavily preferred licensing my own projects under one of the above licenses.

In my mind back then, in an ideal world, all software would be licensed under a copyleft license
and market competitors would have to win out customers on different terms than proprietary technology. And
don't get me wrong... a part of me _still feels like this would be incredible_ for users of software
in general.

The problem is that we don't live in an ideal world:

- Most people just do not care about the license of the software that they are using, and that's fine.
  Not caring is a choice in and of itself.
- Alternative licenses and patents exist and (in countries I am aware of) _can and will_ be used by companies to
  gain a competitive advantage.
- Companies should be able to, to a reasonable extent, _own knowledge_, in my opinion. Furthermore, this
  company's possibility of _owning knowledge_ can in turn be beneficial to Free software.

From the above, I think my last point specifically would be the most controversial one in a discussion with
someone who is heavily copyleft leaning (_LOL, this is starting to sound almost political_), so I will expand
on my point right away.

## The case for permissive licenses

Take [37signals](https://37signals.com/), their product [Basecamp](https://basecamp.com/) and
[Ruby on Rails](https://rubyonrails.org/), the Free software framework they've built for Basecamp in it's early
days, as an example.

Let's look at free software project that came out of the above equation,
Ruby on Rails, which is published under an MIT license. There are two different licensing possibilities we
could entertain as alternatives to the chosen MIT license for Ruby on Rails, so let's do just that and look
at the possible consequences of such decision, specifically for Ruby on Rails:

1. **Ruby on Rails isn't released as free software and doesn't make it's source available**
   - RoR is used as the framework internally at 37signals for Basecamp and nowhere else. This can be considered
     a net loss for everyone, as not even 37signals can benefit from other people potentially using RoR and
     contributing back. Remember, 37signals aren't selling RoR - they are selling Basecamp, built on top of RoR.
2. **Ruby on Rails is released under the AGPLv3 license**
   - Ok, caught me. This is literally an impossible scenario, as RoR was released before the AGPLv3 license.
     Not taking that into account.
   - Now all companies (like Shopify) that would like to just slightly adjust the code would have to release the
     source code under the AGPLv3, imposing a burden on said company trying out new things, testing performance
     improvements in production etc.
   - **Instead of choosing Rails, companies would instead choose something that leaves them more freedom**.

The MIT license works so well for Ruby on Rails, because companies that use Ruby on Rails DO NOT SELL and
aren't planning on selling Ruby on Rails itself.

They instead all use Rails as a common baseline that propels
_everyone_ forward and all contribute back to their common baseline.

## The case for copyleft licenses

The above story with the Ruby on Rails framework is a wonderful, long-term success story of free software.
The common ground of all contributing companies and individuals is that none of them are trying to sell Rails
directly.

But what if that's your goal? What if you want to write software, make it open-source and sell it directly or
over the network as SaaS? I believe this is where the copyleft licenses have an edge over fully permissive licenses.

A good success story is [Grafana Labs](https://grafana.com/), the company. As one of their main products they offer
[Grafana](https://grafana.com/grafana/), a data visualization tool, both in a managed, cloud SaaS version and an
installable and supported version for the enterprise called the
[Grafana Enterprise Stack](https://grafana.com/products/enterprise/). Obviously, you can also install Grafana
yourself from binaries made available by Grafana or compile and install Grafana yourself.

Grafana Labs are **experts** in building Grafana and feel confident that they offering is the strongest on
the market. If a competitor, for example AWS, wanted to offer Grafana in their cloud environment and make some
features special for AWS, they too would have to release the source code for their modifications, as Grafana is
AGPLv3 licensed. Such setup incentivizes Amazon to instead try collaborating with Grafana to give their shared
customers the best experience together, instead of blatantly taking the source code without contributing to the
everyone's stable baseline.

AGPLv3 works really well for Grafana, as their open-source project is directly their product.

## Beyond the open-source licenses micro-war

I think if we increase the scope from permissive and copy-left to open-source and closed-source, we can
agree that open-source licenses are a net win for the society.

Instead of focusing on the minor differences between open-source licenses, we could focus on some
bigger issues:

1. Where closed-source software is used, where open-source would REALLY benefit the society
   (public healthcare and public institutions in general, for example).
2. Detecting if open-source software is used as marketing for a technological project or a company in it's early
   days, with plans to pull the rug in the future if the company fails to deliver financial results to it's
   investors (like Hashicorp and their switch to the
   [BSL](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license)).
3. I don't know, [a large portion of the planet's population not having access to clean water](https://www.who.int/news/item/18-06-2019-1-in-3-people-globally-do-not-have-access-to-safe-drinking-water-unicef-who)...?

As mentioned, some people make a choice not to care and use closed-source software. Others will choose to
only use software that is Free software by definition.

I myself am currently paid by a company that creates primarily closed-source, proprietary software. If I have
the freedom to choose software to use for any given task, I will heavily prefer to use tools that
are licensed under an open-source license and/or work with defined open standards. I will also happily
try helping anyone around me find a suitable open-source alternative to software they are currently using.

What I will stop doing is criticizing other people around me for software choices they are
making for themselves. I definitely am guilty of doing this in the past.

I definitely would also like to be more thankful for the software gifts I receive from strangers
on the internet going into the future.

To all people giving others gifts in the form of Free software;
THANK YOU!
