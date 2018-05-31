---
layout: knowledge-base
---

<!-- THIS PAGE CONTAINS THE COMPLETE INDEX -->

# Knowledge base

This our knowledge base; it contains information about our products, the way we work, and more. If you have any questions, feel free to reach out to us on [hello@semi.network](mailto:hello@semi.network).

<section class="form-inline">
    <form action="/search.html?query=" class="search">
    	<section class="search-meta">
        	<label for="search-knowledgebase">Search our knowledge base</label>
        	<input autosave="save-search-knowledgebase" id="search-knowledgebase" name="search" results="15" type="search" />
        	<input class="button" type="submit" value="Search" />
    	</section>
    </form>
</section>

{% assign items_grouped = site.pages | group_by: 'topic' | sort: 'topic' %}
<ul class="article-overview">
    {% for group in items_grouped %}
        <li>
            <section>
            <h2>{{ group.name }}</h2>
            <small>Recent articles in <em><a href="{{ group.name }}">{{ group.name }}</a></em>:</small>
                <ol>
    	            {% for page in site.pages %}
    	                {% if page.topic == group.name %}
    	                    <li>
                                <h3><a href="{{ page.url }}">{{ page.date | date: '%B %d, %Y' }}{{ page.title }}</a></h3>
    	                        <p>
    	                            {{ page.description }}
    	                        </p>
    	                        <dl class="tags">
                                    <dt><i>Tags</i></dt>
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
    	        <p><a class="view-more" href="{{ group.name }}">All articles in <em>{{ group.name }}</em> <span class="arrow">→</span></a></p>
            </section>
        </li>
    {% endfor %}
</ul>