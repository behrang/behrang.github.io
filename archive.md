---
layout: page
title: بایگانی
permalink: archive/
---

{% for post in site.posts %}
  * <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date_to_string }}</time> - [{{ post.title }}]({{ site.baseurl }}{{ post.url | remove_first: '/' }})
{% endfor %}
