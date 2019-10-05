<div class="search_results">
  {% if page.total_pages > 1 %}
  <h1>{{ meta['title'] }}</h1>: <div>{{ page.total_items }} (strana {{ page.current }} / {{ page.total_pages }})</div>
  {% else %}
  <h1>{{ meta['title'] }}</h1>: <div>{{ page.total_items }}</div>
  {% endif %}
</div>

<div class="row">

  <div class="nine columns">

    <ul class="posts">
    {% for post in page.items %}
      <li>
        <div class="title"><a href="{{ post.getUrl() }}" {% if post.url %}rel="nofollow"{% endif %}>{{ post.title }}</a></div>
        

        {% if post.section == 2 %}
        <div class="info">{{ post.address }}, {{ post.location.postal }} {{ post.location.place }}</div>
        {% else %}
        <div class="info">{{ post.getDate() }} | {{ post.location ? post.location.place : '-'  }} | <a href="/u/{{ post.user.username }}">@{{ post.user.name }}</a></div>
        {% endif %}

        <div class="text">{{ post.description }}</div>
        
      </li>
    {% else %}
      <li>Empty</li>
    {% endfor %}
    </ul>

    {% if page.total_pages > 1 %}
    <a href="{{ url("posts") }}">First</a>
    <a href="{{ url("posts") }}?page={{ page.before }}">Previous</a>
    <a href="{{ url("posts") }}?page={{ page.next }}">Next</a>
<a href="{{ url("posts") }}?page={{ page.last }}">Last</a>
    {% endif %}

  </div>


  <div class="three columns">
    <div class="box">
        Something
      </div>
  </div>

</div>