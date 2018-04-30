---
layout: article-overview
---

<ul class="article-overview">
{% for page in site.pages %}

    {% if page.layout == "article" %}

        <li>
        	<h2>{{ page.topic }}</h2>
        	<ul>
        		<li><a href="{{ page.url }}">{{ page.date | date: '%B %d, %Y' }} {{ page.title }}</a></li>
        	</ul>
        </li>

    {% endif %}

{% endfor %}
</ul>