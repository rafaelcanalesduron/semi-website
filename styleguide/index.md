---
layout: layout-default
title: SeMI, Collaborative Knowledge Network
---

<article>
	
<h1>Styleguide</h1>

<p>
    SeMI's Styleguide.
</p>


{% for styleguide in site.pages %}
    {% if styleguide.dir contains "styleguide/" and styleguide.name != "index.md" %}

<section><a href="{{ styleguide.url }}">{{ styleguide.name }}</a></section>

    {% endif %}
{% endfor %}

</article>