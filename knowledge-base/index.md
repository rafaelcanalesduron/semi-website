---
layout: article-overview
---

OVERVIEW!

<ul>
{% for page in site.pages %}

    <h2> {{ page.topic }} </h2>

    {% if page.layout == "article" %}

        <li><a href="{{ page.url }}">{{ page.date | date: '%B %d, %Y' }} - {{ page.title }}</a></li>

    {% endif %}

{% endfor %}
</ul>