---
layout: "base.njk"
title: 'Something Else'
permalink: {{ title | slugify | log}}
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
