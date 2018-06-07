---
bodyclass: page--knowledge-base
layout: article-overview
show-topic: Optimize your use cases
page-heading: Loving it, I want to expand my use case portfolio
section-intro-text: If you want to optimize or expand your use cases, read these articles to accelerate.
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