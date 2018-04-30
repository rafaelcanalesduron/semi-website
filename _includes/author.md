<!-- Contains all authors -->

<!-- Author: Bob van Luijt -->
{% if page.author == "BVL" %}

    Author: Bob van Luijt<br>
    <img src="/img/authors/bob.jpg" alt="Bob van Luijt" style="width:75px"><br>
    <a href="mailto:bob@semi.network">email</a>

<!-- Author: Laura Ham -->
{% if page.author == "LH" %}

    Author: Laura Ham<br>
    <img src="/img/authors/laura.jpg" alt="Laura Ham" style="width:75px"><br>
    <a href="mailto:laura@semi.network">email</a>

<!-- Author unknown -->
{% else %}

Author: <i>unknown</i>

{% endif %}

{% endif %}