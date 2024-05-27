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

> [!important]
> This is a warning.

> [!tip]
> This is a tip.

> [!info]
> This is an informational message.

> [!danger]
> This is a dangerous message.

> [!warning]
> This is a warning message.

> [!success]
> This is a success message.

> [!bug]
> This is a bug message.

> [!quote]
> This is a quote.

> [!example]
> This is an example.

> [!note]
> This is a note.

> [!abstract]
> This is an abstract.

> [!checklist]
> - [ ] This is a checklist item.
> - [ ] This is another checklist item.
> - [ ] This is yet another checklist item. 

## Let's test the callout thingy

{% Callout "info" %}
This is an informational message.
{% endCallout %}

{% Callout "tip" %}
This is a tip.
{% endCallout %}

{% Callout "warning" %}
This is a warning.
{% endCallout %}

{% Callout "danger" %}
This is a dangerous message.
{% endCallout %}

{% Callout "success" %}
This is a success message.
{% endCallout %}

{% Callout "bug" %}
This is a bug message.
{% endCallout %}

{% Callout "quote" %}
This is a quote.
{% endCallout %}

{% Callout "example" %}
This is an example.
{% endCallout %}

{% Callout "note" %}
This is a note.
{% endCallout %}

{% Callout "abstract" %}
This is an abstract.
{% endCallout %}

{% Callout "checklist" %}
- [ ] This is a checklist item.
- [ ] This is another checklist item.
- [ ] This is yet another checklist item.   
{% endCallout %}
