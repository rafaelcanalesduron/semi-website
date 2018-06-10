---
bodyclass: page--knowledge-base knowledge-flow-start
layout: article-overview
show-topic: Getting started with SeMI
page-heading: I love to get started with SeMI, tell me more!
section-intro-text: If you are new to SeMI, read these articles first to understand why SeMI is valuable for your organization.
---

<!-- THIS PAGE CONTAINS THE INDEX FOR THIS FOLDER -->

> # {{ page.page-heading }}

{{ page.section-intro-text }}

<ul class="article-overview">
    <section>
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
    </section>
</ul>