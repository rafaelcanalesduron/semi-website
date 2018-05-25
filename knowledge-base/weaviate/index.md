---
layout: article-overview
show-topic: Weaviate
---

<!-- THIS PAGE CONTAINS THE INDEX FOR THIS FOLDER -->

# {{ page.show-topic }}

Learn more on how to get started with SeMI's main technologies, Weaviate.

## More detailed information
<ul class="list-bullet">
    <li>Overall architecture: <a href="https://github.com/creativesoftwarefdn/weaviate">Github</a>.</li>
    <li>General questions: <a href="https://stackoverflow.com/questions/tagged/weaviate">Stackoverflow.com</a>.</li>
    <li>Issues: <a href="https://github.com/creativesoftwarefdn/weaviate/issues">Github Issues</a>.</li>
    <li>Commercial use: <a href="mailto:hello@semi.network?subject=Commercial use of Weaviate">hello@semi.network</a>.</li>
</ul>

<ul class="article-overview">
    <li>
        {% for subpage in site.pages %}
            {% if subpage.topic == page.show-topic %}
                <ol>
                    <li><h3><a href="{{ subpage.url }}">{{ subpage.date | date: '%B %d, %Y' }} {{ subpage.title }}</a></h3>
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