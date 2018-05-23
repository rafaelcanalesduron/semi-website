---
layout: article-overview
show-topic: Weaviate
---

<!-- THIS PAGE CONTAINS THE INDEX FOR THIS FOLDER -->

# {{ page.show-topic }}

Learn more on how to get started with SeMI's main technologies, Weaviate.

More detailed information;<br>
- Overall architecture: [Github](https://github.com/creativesoftwarefdn/weaviate)
- General questions: [Stackoverflow.com](https://stackoverflow.com/questions/tagged/weaviate).
- Issues: [Github Issues](https://github.com/creativesoftwarefdn/weaviate/issues).
- Commercial use: [hello@semi.network](mailto:hello@semi.network).

<ul class="article-overview">
    <li>
        {% for subpage in site.pages %}
            {% if subpage.topic == page.show-topic %}
                <ol>
                    <li><h4><a href="{{ subpage.url }}">{{ subpage.date | date: '%B %d, %Y' }} {{ subpage.title }}</a></h4>
                        <p>
                            {{ subpage.description }}
                        </p>
                        <dl class="tags">
                            <dt>Tags</dt>
                            <dd>
                                <ul class="tags">
                        			{% for tag in subpage.tags %}
                    					<li>{{ tag }}</li>
                    				{% endfor %}
                    			</ul>
                            </dd>
                        </dl>
                    </li>
                </ol>
            {% endif %}
        {% endfor %}
    </li>
</ul>