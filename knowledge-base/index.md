---
layout: article-overview
---

<!-- THIS PAGE CONTAINS THE COMPLETE INDEX -->

# Knowledge base

This is the SeMI knowledge base; it contains all information about our products, how we work and more. In case you have any questions, feel free to reach out to us on [hello@semi.network](mailto:hello@semi.network).

{% assign items_grouped = site.pages | group_by: 'topic' | sort: 'topic' %}
<ul class="article-overview">
    {% for group in items_grouped %}
        <li>
            <section>
            <h2><a href="{{ group.name }}">{{ group.name }}</a></h2>
                <ol>
    	            {% for page in site.pages %}
    	                {% if page.topic == group.name %}
    	                    <li>
                                <h3><a href="{{ page.url }}">{{ page.date | date: '%B %d, %Y' }}{{ page.title }}</a></h3>
    	                        <p>
    	                            {{ page.description }}
    	                        </p>
    	                        <ul class="tags">
                                    {% for tag in page.tags %}
    	                                <li>{{ tag }}</li>
                                    {% endfor %}
    	                        </ul>
    	                    </li>
    	                {% endif %}
    	            {% endfor %}
    	        </ol>
            </section>
        </li>
    {% endfor %}
</ul>