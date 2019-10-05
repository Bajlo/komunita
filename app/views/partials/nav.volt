
<div class="u-pull-left">
    <ul>
        <li class="logo"><a href="/"><img src="/img/logo.svg" width="150px" /></a></li>
       
        {% if (session.has('logged')) %}
        <li>{{ linkTo( url(['for':'posts.my']) ,'My') }}</li>
        <li>{{ linkTo( url(['for':'posts.add']) ,'+ Add') }}</li>
        {% endif %}
    </ul>
</div>

<div class="u-pull-right">
    {% if (session.has('logged')) %}
        
        <a href="/u/{{ auth['name'] }}">{{ auth['name'] }}</a>,
        ({{ linkTo( url(['for':'logout']) ,'Log out') }})
    {% else %}
        {{ linkTo( url(['for':'login']) ,'Login') }}
    {% endif %}
    
</div>