---
layout: article-overview
---

<!-- THIS PAGE CONTAINS THE COMPLETE INDEX -->

# Knowledge base

This is the SeMI knowledge base; it contains all information about our products, how we work and more. In case you have any questions, feel free to reach out to us on [hello@semi.network](mailto:hello@semi.network).

## Filter articles
Since our knowledge base is quite diverse, you can select your role and we will filter the information relevant to you.

<section>
<label for="select-role">My role within my organisation is…</label>
<select name="select-role" id="select-role">
    <option value="">Business owner</option>
    <option value="">Technology buyer</option>
    <option value="">Techie</option>
</select>
</section>


{% assign items_grouped = site.pages | group_by: 'topic' | sort: 'topic' %}
<ul class="article-overview">
    {% for group in items_grouped %}
        <li>
            <section>
            <h3><a href="{{ group.name }}">{{ group.name }}</a></h3>
                <ol>
    	            {% for page in site.pages %}
    	                {% if page.topic == group.name %}
    	                    <li>
                                <h4><a href="{{ page.url }}">{{ page.date | date: '%B %d, %Y' }}{{ page.title }}</a></h4>
    	                        <p>
    	                            {{ page.description }}
    	                        </p>
    	                        <dl class="tags">
                                    <dt>Tags</dt>
                                    <dd>
            	                        <ul class="tags">
                                            {% for tag in page.tags %}
            	                                <li>{{ tag }}</li>
                                            {% endfor %}
            	                        </ul>
                                    </dd>
                                </dl>
    	                    </li>
    	                {% endif %}
    	            {% endfor %}
    	        </ol>
            </section>
        </li>
    {% endfor %}
</ul>