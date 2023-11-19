---
title: "Abstracting the terminal from the OS"
date: 2023-09-04T07:00:00+01:00
tags: ["software", "cli", "tips", "desktop"]
description: "How I use tmux to make my work environment portable between operating systems and desktop environments."
---

## Background

I care about stability of my workflow when I'm working. It's not necessarily about keeping the work environment the same
over time, rather than having an environment that is consistent and acts the same wherever I take it.

This has been an issue for me even way back when I was deep into producing electronic music (even profesionally, for a short bit);
every audio workstation has different keyboard shortcuts for essentially doing the same thing and, on top of that,
the shortcuts layout varies between Linux, MacOS and Windows.

That experience has been pretty frustrating.

## Progression

Since then, a lot has changed. I have switched job fields, hobbies, operating systems, desktop environments, window managers
and text editors as technical demands changed and my needs for a stable workflow have increased.

I generally wasn't concerned with switching between different applications - even the
worst operating systems in terms of UX (like MS Windows) handle this _pretty_ well.

Switching between many windows of the same applicatioin (like one does with many terminal windows), however, still largerly remained a pain
even using a window manager like [Sway](https://swaywm.org/) that is purposefully built from the ground up to tackle the
_window switching problem_.<sup>[1]</sup>

## Adopting tmux

### Benefits of tmux for work over SSH

I've used `tmux` long before I've adopted it in my personal workflow, when working on long tasks remotely over SSH.

One of the primary benefits of `tmux` for remote work is that it's a server process running on the remote machine that you only `attach` to,
rather than create a new shell session with every SSH connection.

This means you can, at any time:

- close your terminal window (intentionally or by accident)
- loose connection
- turn your computer off
- ~~throw your computer out of the window~~

When you get your local machine back to a working state, all you have to do is SSH back to the machine and attach to the running `tmux`
session:

```sh
ssh user@example.com
tmux a -t 0
```

You can also attach from a different computer than the one that started the `tmux` session, as long as you can establish an SSH connection!

### Integrating tmux into my local workflow

At this point in time, I am already a happy user of [`nvim`](https://neovim.io/), to the point where it's actually close to a mental challenge for me
to use a different, "normal" editor such as Visual Studio Code<sup>[3]</sup>. Tie that together with the fact I work as an Infrastructure Engineer,
you can imagine I spend quite a bit of my day in the terminal.

At the time of writing, I have 53 concurrent `tmux` panes open (each pane can be thought of as an individual shell session). These include
remote sessions, `nvim` instances, long-running dev processes etc.

That would've been a lot of windows to manage on the operating system level! Instead, **all of these are now running in a single OS window**.

### tmux fundamentals

There are three fundamental "types" of objects in tmux. Let's go over these before continuing with the rest of the blog post.

The object types are:

- sessions
- windows
- panes

Let's go with a "browser" analogy to explain the concepts:

- You can think of _sessions_ as "browser windows" - maybe you have two browser windows, side-by-side, right now!
- You can think of _windows_ as "browser tabs" - each tab contains a web page or a web application.
- You can think of _panes_ as "~~page components?~~" -- well, my analogy breaks here, however panes are individual shell sessions within a window, divided visually.

Here is an example of three _panes_ in a robinopletal.com _window_, running in a vim-personal _session_.

![panes in a tmux window](/images/abstracting-terminal-from-os/panes.png)

### Keyboard shortcuts

`tmux` is a terrific piece of software, but it's default keyboard shortcuts didn't suit me at all - so, I changed them!

I will not go in-depth into how one configures these in the `~/.tmux.conf` file - feel free to reference my config on
[Github](https://github.com/fourstepper/dotfiles/tree/main/.tmux.conf).

The one thing I will mention right off the bat to avoid confusion is that `tmux` has a concept of a `<leader>` sequence.
By default, this is `Ctrl+b`, however I've changed mine to `Ctrl+a`. I will reference to this whole sequence simply by saying `<leader>`.

Essentially, here is my core workflow:

- I use `<leader> + c` to open a new window
- I use `<leader> + v` to create a pane in a vertical split
- I use `<leader> + w` to create a pane in a horizontal split
- I use `Alt/Option + [hjkl]` to switch between panes (left, down, up, right, as standard for `vi`/`vim`/`neovim`)
  - Thanks to some extra keybindings and the [christoomey/vim-tmux-navigator](https://github.com/christoomey/vim-tmux-navigator) plugin,
    I can do this seamlessly between tmux _panes_ and my editor.
- I use `Alt/Option + [1-9]` to switch between _windows_ within a _session_
- I use `<leader> + <Ctrl+[jk]>` to switch between _sessions_
  - the above monstrosity, in practice, means hold `Ctrl`, press `a`, press `k`, let go of `Ctrl` to go to the previous session, for example
  - I have three sessions; vim-personal (for personal projects), vim (for work-related projects) and shell (for general purpose shell, SSHs etc.)

This basically means that as long as I am able to get to a single terminal window on any operating system
and any desktop environment, I am in familiar territory with the same keybindings that I am already used to.
That's pretty useful considering I currently enjoy using GNOME desktop environment on my Fedora Linux desktop
installation and MacOS on my Mac laptop. `tmux` simply **behaves exactly the same, everywhere**

That's, however, not where the benefits end.

### Additional features

- You can use unstable terminal applications
  - If the terminal window crashes, no worries - just start it again and attach to one of the underlying running sessions
- You can use unstable desktop environments and operating systems
  - You can use the [`tmux-continuum`](https://github.com/tmux-plugins/tmux-continuum) and [`tmux-resurrect`](https://github.com/tmux-plugins/tmux-resurrect) plugins
    to save and restore all of your _sessions_, _windows_ and _panes_
- You can fully script `tmux`
  - It's possible to write scripts that automate any action in the `tmux` environment - your imagination is the limit!
- And more! The internet is a sea of `tmux`-related resources!

## Closing words

My goal today was to introduce you to `tmux` and do a little marketing for it at the same time -- I hope I managed to do that! I encourage you
to give `tmux` a try if you haven't already.

If you have any questions about `tmux` or my workflow in general, don't hesitate to [contact](/contact) me.

<br />

---

<sub>
[1]: That's not to say that I think Sway does something wrong - it's window management style (i3-like) just didn't fit my needs, which is OK. <br />
[2]: For now... <br />
[3]: There is nothing wrong using Visual Studio Code - it's a terrific piece of software. Don't worry, I can imagine that you are also running
			<s>50.000</s> <i>a couple</i> long-running processes as well, right? If the answer is yes, this post is still for you.
</sub>
