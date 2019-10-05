<h1>Sections</h1>

<div class="row">
    
  <div class="three columns">
    <div class="box">
        Something
      </div>
  </div>

  <div class="nine columns">
    
    {% if page.total_pages > 1 %}
    Total posts: {{ page.total_items }} ({{ page.current }} of {{ page.total_pages }} pages)
    {% else %}
    Total posts: {{ page.total_items }}
    {% endif %}


    <ul class="posts">
    {% for post in page.items %}
      <li>
        <div class="title"><a href="{{ post.getUrl() }}" {% if post.url %}rel="nofollow"{% endif %}>{{ post.title }}</a></div>
        {% set Locations = post.getLocations() %}
        <div class="info"><span class="section">{{ post.getTypeUrl() }}</span> | {{ post.getDate() }} | {{ Locations ? Locations.place : '-'  }} | <a href="">{{ post.domain }}</a></div>
        <div class="text">{{ post.description }}</div>
        
      </li>
    {% endfor %}
    </ul>

    {% if page.total_pages > 1 %}
    <a href="{{ url("posts") }}">First</a>
    <a href="{{ url("posts") }}?page={{ page.before }}">Previous</a>
    <a href="{{ url("posts") }}?page={{ page.next }}">Next</a>
    <a href="{{ url("posts") }}?page={{ page.last }}">Last</a>
    {% endif %}

  </div>

</div>