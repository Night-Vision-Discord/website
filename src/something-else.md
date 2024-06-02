---
layout: "base.njk"
title: 'Something Else'
permalink: "/{{ title | slugify }}/"
---

# Just another page
This is a page to demonstrate links. This one goes back to the [front page](/).

## Let's test the tier table thingy

{% TierTable %}
{% TierTableRow "s" %} {% TierItem "one" %}Initial Item{% endTierItem %} {% endTierTableRow %}
{% TierTableRow "a" %} {% TierItem "two" %}Initial Item{% endTierItem %} {% endTierTableRow %}
{% TierTableRow "b" %} {% TierItem "three" %}Initial Item{% endTierItem %} {% endTierTableRow %}
{% TierTableRow "c" %} {% TierItem "four" %}Initial Item{% endTierItem %} {% endTierTableRow %}
{% TierTableRow "d" %} {% TierItem "five" %}Initial Item{% endTierItem %} {% endTierTableRow %}
{% TierTableRow "f" %} {% TierItem "size" %}Initial Item{% endTierItem %} {% endTierTableRow %}
{% endTierTable %}

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