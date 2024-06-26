---
layout: "base.njk"
permalink: /test-everything/
title: 'Night Vision Discord'
---

# Do a thing
Have some new content

## Tier List
{% TierTable %}
{% TierTableRow "s" %} Something {% endTierTableRow %}
{% TierTableRow "a" %} Something {% endTierTableRow %}
{% TierTableRow "b" %} Something {% endTierTableRow %}
{% TierTableRow "c" %} Something {% endTierTableRow %}
{% TierTableRow "d" %} Something {% endTierTableRow %}
{% TierTableRow "f" %} Something {% endTierTableRow %}
{% endTierTable %}

So, that's the a table.

**bold**
*italic*
~~strikethrough~~

## Lists
+ Unordered List
+ Second Item
  - Sub list
  - Second sublist Item
+ Back to the first

1. Ordered list
1. Second item in the list
1. Just keep going, it'll number for you

### And...

42. Or just start somewhere else, by specifying the start
1. And it'll keep going for you.

```
Monospaced, code type blocks
```

## Footnotes
Footnote 1 link[^first]

[^first]: Footnotes can also **have markup**

## Tables
| Heading 1 | Heading 2 |
|-----------|-----------|
| First     | Thing |
| Second | Thing |

Aligning the columns
| Heading | Heading | Another heading |
|--------:|:-------:|:----------------|
| Blahblahblah | thingy | blahblah |
| different | long words go here | see how this affects the alignment |


## Links
[Words to see in the link](http://www.google.com/)
[A link to the another page](/something-else/)

## Images
![Stormtroopocat](https://night-vision-discord.github.io/website/images/stormtroopocat.jpg)

## Callouts
> [!important] Important Note!
> This is important.

> [!tip] Tip
> This is a tip.

> [!info] Info
> This is an informational message.

> [!danger] Danger
> This is a dangerous message.

> [!warning] Warning
> This is a warning message.

> [!success] Success
> This is a success message.

> [!bug] Bug
> This is a bug message.

> [!quote] Quote
> This is a quote.

> [!example] Example
> This is an example.

> [!note] Note
> This is a note.

> [!abstract] Abstract
> This is an abstract.

## Superscript/Subscript
- 19 ^th^
- H~2~O