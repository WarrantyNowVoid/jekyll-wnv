---
layout: page
title: "Big time tag list aren't you proud"
published: false
---

{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign tags_list = site_tags | split:',' | sort %}

<ul class="entry-meta inline-list">
  {% for item in (0..site.tags.size) %}{% unless forloop.last %}
    {% capture this_word %}{{ tags_list[item] | strip_newlines }}{% endcapture %}
    <li><a href="{{ site.url }}/tag/{{ tags_list[item] | slugify }}" class="tag"><span class="term">{{ tags_list[item] }}</span></a> <span class="count">{{ site.tags[this_word].size }}</span></li>
  {% endunless %}{% endfor %}
</ul>