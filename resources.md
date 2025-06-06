---
layout: page
title: "Legal AI Resources"
description: "Comprehensive resources for legal professionals exploring AI technology, including ROI calculators, guides, and best practices."
permalink: /resources/
custom_color: navy
custom_font: urbanist

# Hero Section
hero:
  title: "Legal AI Resources"
  subtitle: "Everything you need to understand and implement AI in your legal practice"
  bg_color: "bg-navy"

# Resources Overview
resources_overview:
  title: "Comprehensive Legal AI Knowledge Center"
  subtitle: "Expert Resources"
  description: "Access our complete library of tools, guides, and insights to help you successfully implement AI technology in your legal practice."

# Resource Categories
resource_categories:
  - name: "ROI & Planning Tools"
    description: "Calculate potential savings and plan your AI implementation"
    icon: "calculator"
    resources:
      - name: "ROI Calculator"
        description: "Calculate your potential time and cost savings with personalized analysis based on your practice."
        type: "Interactive Tool"
        link: "/resources/roi-calculator/"
        featured: true
      - name: "Implementation Planning Guide"
        description: "Step-by-step guide for planning and executing AI implementation in your firm."
        type: "Planning Guide"
        link: "#"
        coming_soon: true
      - name: "Budget Planning Worksheet"
        description: "Comprehensive worksheet for budgeting your legal AI investment."
        type: "Worksheet"
        link: "#"
        coming_soon: true

  - name: "Legal AI Guides"
    description: "In-depth guides on legal AI technology and best practices"
    icon: "book-open"
    resources:
      - name: "Legal AI Buyer's Guide"
        description: "Complete guide to evaluating and selecting AI technology for legal practice."
        type: "Guide"
        link: "#"
        coming_soon: true
      - name: "Ethics & AI in Legal Practice"
        description: "Navigate ethical considerations when implementing AI in legal work."
        type: "Ethics Guide"
        link: "#"
        coming_soon: true
      - name: "Security & Compliance Guide"
        description: "Ensure your AI implementation meets legal industry security standards."
        type: "Security Guide"
        link: "#"
        coming_soon: true

  - name: "Industry Insights"
    description: "Research reports and industry analysis on legal AI trends"
    icon: "chart-line"
    resources:
      - name: "2024 Legal AI Benchmark Report"
        description: "Comprehensive analysis of AI adoption and ROI across the legal industry."
        type: "Research Report"
        link: "#"
        coming_soon: true
      - name: "Practice Area AI Guide"
        description: "Specialized AI applications for different legal practice areas."
        type: "Practice Guide"
        link: "#"
        coming_soon: true
      - name: "Legal Technology Trends"
        description: "Annual analysis of technology trends shaping the legal industry."
        type: "Trend Report"
        link: "#"
        coming_soon: true

  - name: "Case Studies & Success Stories"
    description: "Real-world examples of successful AI implementation"
    icon: "trophy"
    resources:
      - name: "Litigation Success Stories"
        description: "How litigation firms achieved breakthrough results with AI technology."
        type: "Case Studies"
        link: "#"
        coming_soon: true
      - name: "Corporate Legal Transformations"
        description: "Corporate legal departments that revolutionized operations with AI."
        type: "Case Studies"
        link: "#"
        coming_soon: true
      - name: "Small Firm AI Adoption"
        description: "How small and solo firms compete with AI technology."
        type: "Case Studies"
        link: "#"
        coming_soon: true

# Featured Resource
featured_resource:
  title: "ROI Calculator"
  subtitle: "Most Popular Resource"
  description: "Calculate your potential savings with Lapis Legal AI. See exact time and cost savings based on your practice size and case volume."
  benefits:
    - "Personalized ROI analysis"
    - "Real data from 500+ law firms"
    - "Detailed savings breakdown"
    - "Implementation timeline"
  cta_text: "Calculate Your ROI"
  cta_link: "/resources/roi-calculator/"
  image: "/assets/img/illustrations/3d8.png"

# Resource Stats
resource_stats:
  title: "Trusted by Legal Professionals"
  stats:
    - count: "500+"
      label: "Law Firms Using Our Platform"
    - count: "2500+"
      label: "Legal Professionals Trained"
    - count: "50,000+"
      label: "Cases Analyzed"
    - count: "80%"
      label: "Average Time Savings"

# Newsletter Signup
newsletter:
  title: "Stay Updated on Legal AI"
  subtitle: "Get the latest insights, guides, and resources delivered to your inbox"
  description: "Join 1,000+ legal professionals who receive our monthly newsletter with AI insights, case studies, and industry updates."
  placeholder: "Enter your email address"
  button_text: "Subscribe"

# Support Options
support:
  title: "Need Personalized Help?"
  subtitle: "Expert Support Options"
  options:
    - name: "Implementation Consultation"
      description: "One-on-one consultation to plan your AI implementation strategy."
      duration: "60 minutes"
      price: "Free"
      link: "/contact/"
      icon: "users"
    - name: "Technical Demo"
      description: "Personalized demonstration of Lapis Legal AI features for your practice."
      duration: "30 minutes"
      price: "Free"
      link: "/contact/"
      icon: "monitor"
    - name: "ROI Analysis"
      description: "Detailed ROI analysis with custom scenarios for your specific practice."
      duration: "45 minutes"
      price: "Free"
      link: "/contact/"
      icon: "calculator"

# Call to Action
cta:
  title: "Ready to Transform Your Practice?"
  subtitle: "Start with our most popular resource"
  primary_button:
    text: "Calculate ROI"
    link: "/resources/roi-calculator/"
  secondary_button:
    text: "Request Demo"
    link: "/contact/#demo"
---

<div class="content-wrapper">
  <!-- Header -->
  <header class="wrapper bg-navy">
    {% include components/navbar/navbar.html 
        wrapperClass="bg-transparent"
        classList="center-nav transparent navbar-dark"
        logoBoth=true
        logoAlt="logo-light"
    %}
    
    <!-- Hero Section -->
    <section class="wrapper bg-navy">
      <div class="container pt-10 pb-19 pt-md-14 pb-md-20 text-center">
        <div class="row">
          <div class="col-md-10 col-xl-8 mx-auto">
            <div class="post-header">
              <h1 class="display-1 mb-4 text-white">{{ page.hero.title }}</h1>
              <p class="lead fs-lg text-white">{{ page.hero.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>

  <!-- Resources Overview -->
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-primary mb-3">{{ page.resources_overview.subtitle }}</h2>
          <h3 class="display-4 mb-10 px-xxl-15">{{ page.resources_overview.title }}</h3>
          <p class="lead fs-lg mb-10 px-xxl-10">{{ page.resources_overview.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Resource -->
  <section class="wrapper bg-gray">
    <div class="container py-14 py-md-16">
      <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div class="col-lg-6">
          <h2 class="fs-15 text-uppercase text-primary mb-3">{{ page.featured_resource.subtitle }}</h2>
          <h3 class="display-4 mb-5">{{ page.featured_resource.title }}</h3>
          <p class="lead fs-lg mb-6">{{ page.featured_resource.description }}</p>
          <ul class="icon-list bullet-bg bullet-soft-primary mb-6">
            {% for benefit in page.featured_resource.benefits %}
            <li><span><i class="uil uil-check"></i></span><span>{{ benefit }}</span></li>
            {% endfor %}
          </ul>
          <a href="{{ page.featured_resource.cta_link }}" class="btn btn-primary rounded-pill">{{ page.featured_resource.cta_text }}</a>
        </div>
        <div class="col-lg-6">
          <figure><img class="w-auto" src="{{ page.featured_resource.image }}" alt="" /></figure>
        </div>
      </div>
    </div>
  </section>

  <!-- Resource Categories -->
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      {% for category in page.resource_categories %}
      <div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16">
        <div class="col-lg-4">
          <div class="d-flex flex-row">
            <div>
              <span class="icon btn btn-block btn-lg btn-soft-primary pe-none me-4">
                <span class="uil uil-{{ category.icon }}"></span>
              </span>
            </div>
            <div>
              <h4 class="mb-1">{{ category.name }}</h4>
              <p class="mb-0">{{ category.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="row gx-lg-8 gx-xl-12 gy-6">
            {% for resource in category.resources %}
            <div class="col-md-6">
              <div class="card h-100 {% if resource.featured %}bg-soft-primary{% endif %}">
                <div class="card-body p-6">
                  <div class="d-flex justify-content-between align-items-start mb-2">
                    <h5 class="mb-0">{{ resource.name }}</h5>
                    {% if resource.featured %}
                    <span class="badge bg-primary rounded-pill">Featured</span>
                    {% elsif resource.coming_soon %}
                    <span class="badge bg-secondary rounded-pill">Coming Soon</span>
                    {% endif %}
                  </div>
                  <span class="badge bg-soft-primary text-primary rounded-pill mb-3">{{ resource.type }}</span>
                  <p class="mb-3">{{ resource.description }}</p>
                  {% if resource.coming_soon %}
                  <span class="text-muted">Available Soon</span>
                  {% else %}
                  <a href="{{ resource.link }}" class="more hover link-primary">Access Resource</a>
                  {% endif %}
                </div>
              </div>
            </div>
            {% endfor %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <!-- Resource Stats -->
  <section class="wrapper bg-soft-primary">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <h3 class="display-4 mb-10 px-xxl-15">{{ page.resource_stats.title }}</h3>
        </div>
      </div>
      <div class="row gx-lg-8 gx-xl-12 gy-6 text-center">
        {% for stat in page.resource_stats.stats %}
        <div class="col-md-6 col-lg-3">
          <div class="counter counter-lg">
            <h3 class="text-primary">{{ stat.count }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- Support Options -->
  <section class="wrapper bg-gray">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-primary mb-3">{{ page.support.subtitle }}</h2>
          <h3 class="display-4 mb-10 px-xxl-15">{{ page.support.title }}</h3>
        </div>
      </div>
      <div class="row gx-lg-8 gx-xl-12 gy-6">
        {% for option in page.support.options %}
        <div class="col-lg-4">
          <div class="card h-100">
            <div class="card-body p-6 text-center">
              <span class="icon btn btn-block btn-lg btn-soft-primary pe-none mb-4">
                <span class="uil uil-{{ option.icon }}"></span>
              </span>
              <h5 class="mb-2">{{ option.name }}</h5>
              <p class="mb-3">{{ option.description }}</p>
              <div class="mb-4">
                <span class="badge bg-soft-primary text-primary rounded-pill">{{ option.duration }}</span>
                <span class="badge bg-success rounded-pill">{{ option.price }}</span>
              </div>
              <a href="{{ option.link }}" class="btn btn-primary rounded-pill">Schedule Now</a>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- Newsletter Signup -->
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h3 class="display-4 mb-3">{{ page.newsletter.title }}</h3>
          <p class="lead fs-lg mb-6">{{ page.newsletter.subtitle }}</p>
          <p class="mb-6">{{ page.newsletter.description }}</p>
          <div class="newsletter-wrapper">
            <div class="row">
              <div class="col-md-8 mx-auto">
                <div class="input-group">
                  <input type="email" class="form-control" placeholder="{{ page.newsletter.placeholder }}">
                  <button class="btn btn-primary" type="button">{{ page.newsletter.button_text }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="wrapper bg-primary text-white">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <h2 class="display-4 mb-3 text-white">{{ page.cta.title }}</h2>
          <p class="lead fs-lg mb-6 text-white">{{ page.cta.subtitle }}</p>
          <div class="d-flex justify-content-center">
            <span><a href="{{ page.cta.primary_button.link }}" class="btn btn-white rounded-pill mx-1">{{ page.cta.primary_button.text }}</a></span>
            <span><a href="{{ page.cta.secondary_button.link }}" class="btn btn-outline-white rounded-pill mx-1">{{ page.cta.secondary_button.text }}</a></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  {% include components/footer/footer.html 
    style="default"
    bg_color="bg-dark"
    text_color="text-inverse"
  %}
</div>