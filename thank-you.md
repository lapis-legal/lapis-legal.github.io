---
layout: default
title: Thank You
permalink: /thank-you/
custom_color:
custom_font: 
scroll_top_btn:
  enable: true

# Header / Hero Section
hero:
  title: "Thank You!"
  subtitle: "Your message has been sent successfully."
  bg_image: /assets/img/photos/bg3.jpg
  overlay: true
  overlay_color: "bg-overlay-400"
  breadcrumb:
    enable: true
    items:
      - label: "Home"
        url: "/"
      - label: "Thank You"
        url: "#"
        active: true
---

<div class="content-wrapper">
<header class="wrapper bg-soft-primary">
{% include components/navbar/navbar.html 
    classList= "center-nav transparent position-absolute navbar-dark"
    logoBoth= true
    otherClassList= "w-100 d-flex ms-auto"
    otherLanguageSelect= true
    otherBtn= true
    otherBtnClassList= "btn btn-sm btn-white rounded-pill"
    otherBtnText= "Contact"
    otherBtnLink= "/contact"
%}
</header>
<!-- /header -->

<section class="wrapper bg-dark text-white">
  <div class="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h1 class="display-1 mb-3 text-white">{{ page.hero.title }}</h1>
        <nav class="d-inline-block" aria-label="breadcrumb">
          <ol class="breadcrumb text-white">
            {% for item in page.hero.breadcrumb.items %}
            <li class="breadcrumb-item{% if item.active %} active{% endif %}">
              {% if item.active %}
                {{ item.label }}
              {% else %}
                <a href="{{ item.url }}" class="text-white-50">{{ item.label }}</a>
              {% endif %}
            </li>
            {% endfor %}
          </ol>
        </nav>
        <!-- /nav -->
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</section>
<!-- /section -->

<section class="wrapper bg-light">
  <div class="container py-14 py-md-16">
    <div class="row">
      <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
        <i class="uil uil-check-circle text-primary fs-96 mb-6"></i>
        <h2 class="display-4 mb-3">{{ page.hero.subtitle }}</h2>
        <p class="lead mb-7">Thank you for contacting Lapis Legal AI. We've received your message and one of our team members will get back to you within 24 hours.</p>
        <p class="mb-7">In the meantime, feel free to explore our features and see how Lapis Legal AI can transform your legal practice.</p>
        <div class="d-flex justify-content-center gap-3">
          <a href="/features/" class="btn btn-primary rounded-pill">Explore Features</a>
          <a href="/" class="btn btn-soft-primary rounded-pill">Back to Home</a>
        </div>
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</section>
<!-- /section -->

{% include components/footer/footer.html 
  style= "default"
  bg_color= "bg-dark"
  text_color= "text-inverse"
%}
</div>