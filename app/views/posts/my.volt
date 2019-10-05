<div class="search_results">
  {% if page.total_pages > 1 %}
  <h1>{{ meta['title'] }}</h1>: <div>{{ page.total_items }} (strana {{ page.current }} / {{ page.total_pages }})</div>
  {% else %}
  <h1>{{ meta['title'] }}</h1>: <div>{{ page.total_items }}</div>
  {% endif %}
</div>

<div class="row">

  <div class="twelve columns">

    <ul class="posts">
    {% for index, post in page.items %}
      <li id="post-{{ post.id }}">
        <div class="title"><a href="{{ post.getUrl() }}" {% if post.url %}rel="nofollow"{% endif %}>{{ post.title }}</a></div>

        <div class="info">{{ post.getDate() }} | 
          {{ post.Type }} | 
          <a href="{{ url(['for':'posts.edit','id':post.id]) }}"><i class="fa fa-edit"></i></a> <a href="#" data-href="{{ url(['for':'posts.remove','id':post.id]) }}" data-id="{{ post.id }}" data-title="{{ post.title }}" class="remove-post"><i class="fa fa-trash-empty"></i></a>
        </div>
        
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

</div>