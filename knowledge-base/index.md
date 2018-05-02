---
layout: article-overview
---

<!-- THIS PAGE CONTAINS THE COMPLETE INDEX -->

# Knowledge Base

This is the SeMI knowledge base; it contains all information about our products, how we work and more. In case you have any questions, feel free to reach out to us on hello@semi.network.

{% assign items_grouped = site.pages | group_by: 'topic' | sort: 'topic' %}

<ul class="article-overview">
    {% for group in items_grouped %}
        <li>
            <h2>{{ group.name }}</h2>
            {% for page in site.pages %}
                {% if page.topic == group.name %}
                    <ul>
                        <li><a href="{{ page.url }}">{{ page.date | date: '%B %d, %Y' }} {{ page.title }}</a>
                        ({% for tag in page.tags %}
                            {{ tag }}, 
                        {% endfor %})
                        <br>
                        <i>
                            {{ page.description }}
                        </i>
                        </li>
                    </ul>
                {% endif %}
            {% endfor %}
        </li>
    {% endfor %}
</ul>