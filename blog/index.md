---
layout: projects
title: Manzoni's Blog
permalink: /blog/
page_intro: Notes, updates, and reflections on research, software quality, and engineering practice.
---

<div class="blog-index-copy">
  <p>
    Let's discuss and explore the world and the Software Engineering community together.
  </p>
</div>

{% assign posts = site.blog_posts | sort: "date" | reverse %}

{% if posts.size > 0 %}
<div class="blog-post-grid">
  {% for post in posts %}
    <article class="blog-post-card{% if post.image %} has-image{% endif %}">
      <div class="blog-post-card-body">
        <div class="blog-post-card-meta">
          {% if post.date %}
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time>
          {% endif %}
          {% if post.category %}
            <span>{{ post.category }}</span>
          {% endif %}
          {% if post.reading_time %}
            <span>{{ post.reading_time }}</span>
          {% endif %}
        </div>

        <h2 class="blog-post-card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>

        {% if post.description %}
          <p class="blog-post-card-description">{{ post.description }}</p>
        {% endif %}

        <a class="blog-post-card-cta" href="{{ post.url | relative_url }}">Read the full post →</a>
      </div>

      {% if post.image %}
        <img class="blog-post-card-image" src="{{ post.image | relative_url }}" alt="{{ post.image_alt | default: post.title }}">
      {% endif %}
    </article>
  {% endfor %}
</div>
{% else %}
<div class="blog-post-empty">
  No posts published yet.
</div>
{% endif %}
