{# templates/base.volt #}
<!DOCTYPE html>
<html>
    <head>
        {% include "partials/header.volt" %}
    </head>

    <body>
        <div id="nav"><div class="container">
            {% include "partials/nav.volt" %}
        </div></div>

        <?php if(isset($search) || isset($home)) { ?>
        <div id="search"><div class="container">
            {% include "partials/search.volt" %}
        </div></div>

        <div id="subnav"><div class="container">
                {% include "partials/subnav.volt" %}
        </div></div>
        <?php } ?>

        <div id="content"><div class="container">
                {% block content %}{% endblock %}
        </div></div>

        <div id="footer"><div class="container">
            {% include "partials/footer.volt" %}
        </div></div>
    </body>
</html>