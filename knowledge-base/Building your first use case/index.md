---
layout: article-overview
show-topic: Building your first use case
page-heading: I am excited, I can’t wait to build my first use case
section-intro-text: If you are ready to build your first use case, read these articles to get a flying start.
---

<!-- THIS PAGE CONTAINS THE INDEX FOR THIS FOLDER -->

> # {{ page.page-heading }}

{{ page.section-intro-text }}

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
                            <dt><i>Tags</i></dt>
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