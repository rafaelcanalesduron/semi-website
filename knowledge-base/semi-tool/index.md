---
layout: article-overview
show-topic: SeMI tool
---

<!-- THIS PAGE CONTAINS THE INDEX FOR THIS FOLDER -->

# {{ page.show-topic }}

To learn how to onboard SeMI, these pages will help you get a better understanding of how we work. In case you have any questions, feel free to reach out to us on hello@semi.network.

<ul class="article-overview">
    <li>
        {% for subpage in site.pages %}
            {% if subpage.topic == page.show-topic %}
                <ul>
                    <li><a href="{{ subpage.url }}">{{ subpage.date | date: '%B %d, %Y' }} {{ subpage.title }}</a>
                    <br>
                    <i>
                        {{ subpage.description }}
                    </i>
                    </li>
                </ul>
            {% endif %}
        {% endfor %}
    </li>
</ul>