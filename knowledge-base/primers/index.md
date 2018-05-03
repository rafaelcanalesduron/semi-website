---
layout: article-overview
show-topic: Primers
---

<!-- THIS PAGE CONTAINS THE INDEX FOR THIS FOLDER -->

# {{ page.show-topic }}

To learn how to onboard SeMI, these pages will help you get a better understanding of how we work. In case you have any questions, feel free to reach out to us on hello@semi.network.

<ul class="article-overview">
    <li>
        {% for subpage in site.pages %}
            {% if subpage.topic == page.show-topic %}
                <ol>
                    <li><h3><a href="{{ subpage.url }}">{{ subpage.date | date: '%B %d, %Y' }} {{ subpage.title }}</a></h3>
                    <p>
                        {{ subpage.description }}
                    </p>
                    <ul class="tags">
            			{% for tag in subpage.tags %}
        					<li>{{ tag }}</li>
        				{% endfor %}
        			</ul>
                    </li>
                </ol>
            {% endif %}
        {% endfor %}
    </li>
</ul>