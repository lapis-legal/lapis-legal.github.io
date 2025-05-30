---
layout: page
title: "Blog | Lapis Legal AI"
description: "Insights, thought leadership, and updates from the legal AI experts at Lapis Legal"
permalink: /blog/
---

# Lapis Legal AI Blog

![Lapis Legal AI Blog](../assets/images/blog-banner.png)

Stay up-to-date with the latest insights, trends, and best practices in legal technology and AI. Our blog features thought leadership articles, case studies, and practical tips to help legal professionals leverage AI for better outcomes.

<div class="blog-grid">
  {% for post in site.posts %}
    <div class="blog-card">
      {% if post.image %}
        <div class="blog-image">
          <img src="{{ post.image }}" alt="{{ post.title }}">
        </div>
      {% endif %}
      <div class="blog-content">
        <span class="blog-date">{{ post.date | date: "%B %d, %Y" }}</span>
        <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
        {% if post.categories %}
          <div class="blog-categories">
            {% for category in post.categories %}
              <span class="category-badge">{{ category }}</span>
            {% endfor %}
          </div>
        {% endif %}
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
      </div>
    </div>
  {% endfor %}
</div>

## Subscribe to Our Newsletter

Stay informed about the latest developments in legal AI and get exclusive content delivered directly to your inbox.

<div class="newsletter-form">
  <form action="/subscribe" method="POST" id="newsletter-form">
    <div class="form-group">
      <input type="email" id="email" name="email" placeholder="Your email address" required>
      <button type="submit" class="btn btn-primary">Subscribe</button>
    </div>
  </form>
</div>

## Popular Topics

<div class="topic-tags">
  <a href="/blog/category/ai-trends" class="topic-tag">AI Trends</a>
  <a href="/blog/category/case-studies" class="topic-tag">Case Studies</a>
  <a href="/blog/category/best-practices" class="topic-tag">Best Practices</a>
  <a href="/blog/category/legal-tech" class="topic-tag">Legal Tech</a>
  <a href="/blog/category/product-updates" class="topic-tag">Product Updates</a>
  <a href="/blog/category/industry-insights" class="topic-tag">Industry Insights</a>
</div>