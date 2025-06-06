---
layout: default
title: "Pricing Plans"
permalink: /pricing/
custom_color:
custom_font: 
scroll_top_btn:
  enable: true

# Header / Hero Section
hero:
  title: "Simple, Transparent Pricing"
  subtitle: "Choose the perfect plan for your legal practice. All plans include our core AI features."
  bg_color: "bg-soft-primary"

# Pricing Plans
pricing:
  title: "Choose Your Plan"
  subtitle: "All plans include a 14-day free trial. No credit card required."
  currency: "$"
  monthly_label: "Monthly"
  yearly_label: "Yearly"
  yearly_discount: "Save 20%"
  plans:
    - name: "Solo Attorney"
      description: "Perfect for individual practitioners"
      price_monthly: 149
      price_yearly: 1429
      highlight: false
      button:
        label: "Start Free Trial"
        url: "/contact/#demo"
        class: "btn btn-primary rounded-pill"
      features:
        - text: "Up to <strong>5</strong> Active Cases"
        - text: "<strong>250</strong> Documents/Month"
        - text: "<strong>2GB</strong> Secure Storage"
        - text: "AI Document Analysis"
        - text: "Case Timeline Generation"
        - text: "Email Support"
        - text: "-"
        - text: "-"

    - name: "Professional"
      description: "Most popular for small to mid-size firms"
      price_monthly: 299
      price_yearly: 2869
      highlight: true
      ribbon: "Most Popular"
      button:
        label: "Start Free Trial"
        url: "/contact/#demo"
        class: "btn btn-primary rounded-pill"
      features:
        - text: "Up to <strong>10</strong> Active Cases"
        - text: "<strong>500</strong> Documents/Month"
        - text: "<strong>5GB</strong> Secure Storage"
        - text: "AI Document Analysis"
        - text: "Case Timeline Generation"
        - text: "Deposition Preparation"
        - text: "Priority Email Support"
        - text: "-"

    - name: "Enterprise"
      description: "For large firms with complex needs"
      price_monthly: 599
      price_yearly: 5749
      highlight: false
      button:
        label: "Start Free Trial"
        url: "/contact/#demo"
        class: "btn btn-primary rounded-pill"
      features:
        - text: "<strong>Unlimited</strong> Active Cases"
        - text: "<strong>5,000</strong> Documents/Month"
        - text: "<strong>50GB</strong> Secure Storage"
        - text: "AI Document Analysis"
        - text: "Case Timeline Generation"
        - text: "Deposition Preparation"
        - text: "24/7 Priority Support"
        - text: "Custom Integrations"

    - name: "Custom"
      description: "Tailored solutions for unique requirements"
      price_monthly: "Contact"
      price_yearly: "Contact"
      highlight: false
      button:
        label: "Contact Sales"
        url: "/contact/"
        class: "btn btn-soft-primary rounded-pill"
      features:
        - text: "<strong>Unlimited</strong> Everything"
        - text: "Custom Document Limits"
        - text: "Unlimited Storage"
        - text: "All AI Features"
        - text: "White-Label Options"
        - text: "API Access"
        - text: "Dedicated Account Manager"
        - text: "On-Premise Deployment"

# Features Comparison
features_comparison:
  title: "Compare Features"
  subtitle: "See what's included in each plan"
  categories:
    - name: "Core Features"
      features:
        - name: "AI Document Analysis"
          solo: true
          professional: true
          enterprise: true
          custom: true
        - name: "Fact Extraction"
          solo: true
          professional: true
          enterprise: true
          custom: true
        - name: "Timeline Generation"
          solo: true
          professional: true
          enterprise: true
          custom: true
        - name: "Contradiction Detection"
          solo: false
          professional: true
          enterprise: true
          custom: true
    
    - name: "Advanced Features"
      features:
        - name: "Deposition Preparation"
          solo: false
          professional: true
          enterprise: true
          custom: true
        - name: "Case Strategy Analysis"
          solo: false
          professional: true
          enterprise: true
          custom: true
        - name: "Multi-Matter Support"
          solo: false
          professional: false
          enterprise: true
          custom: true
        - name: "API Access"
          solo: false
          professional: false
          enterprise: false
          custom: true

    - name: "Security & Compliance"
      features:
        - name: "SOC 2 Type II Certified"
          solo: true
          professional: true
          enterprise: true
          custom: true
        - name: "End-to-End Encryption"
          solo: true
          professional: true
          enterprise: true
          custom: true
        - name: "HIPAA Compliant"
          solo: false
          professional: false
          enterprise: true
          custom: true
        - name: "Custom Data Retention"
          solo: false
          professional: false
          enterprise: true
          custom: true

# FAQ Section
faq:
  title: "Frequently Asked Questions"
  questions:
    - question: "Can I change plans anytime?"
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle."
    
    - question: "What happens if I exceed my document limit?"
      answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional document credits."
    
    - question: "Is there a setup fee?"
      answer: "No, there are no setup fees for any plan. You can start using Lapis Legal AI immediately after signing up."
    
    - question: "Do you offer discounts for annual billing?"
      answer: "Yes, all plans include a 20% discount when billed annually instead of monthly."
    
    - question: "Can I cancel my subscription?"
      answer: "Yes, you can cancel anytime. Your access continues until the end of your current billing period."
    
    - question: "Is my data secure?"
      answer: "Absolutely. We're SOC 2 Type II certified and use end-to-end encryption for all data. Your client information is protected with bank-level security."

# CTA Section
cta:
  title: "Ready to Transform Your Practice?"
  subtitle: "Join 500+ law firms already using Lapis Legal AI"
  button:
    label: "Start Your Free Trial"
    url: "/contact/#demo"
  features:
    - "14-day free trial"
    - "No credit card required"
    - "Cancel anytime"
---

<div class="content-wrapper">
<header class="wrapper bg-soft-primary">
{% include components/navbar/navbar.html 
    classList="center-nav transparent navbar-light"
    otherClassList="w-100 d-flex ms-auto"
    otherLanguageSelect=true
    otherBtn=true
    otherBtnClassList="btn btn-sm btn-primary rounded-pill"
    otherBtnText="Contact"
    otherBtnLink="/contact"
%}
</header>
<!-- /header -->

<section class="wrapper bg-soft-primary">
  <div class="container pt-10 pb-12 pt-md-14 pb-md-16 text-center">
    <div class="row">
      <div class="col-md-9 col-lg-7 col-xl-6 mx-auto">
        <h1 class="display-1 mb-3">{{ page.hero.title }}</h1>
        <p class="lead px-xxl-10">{{ page.hero.subtitle }}</p>
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
    <h2 class="display-4 mb-3 text-center">{{ page.pricing.title }}</h2>
    <p class="text-center mb-10">{{ page.pricing.subtitle }}</p>
    
    <div class="pricing-wrapper">
      <div class="row gy-6">
        {% for plan in page.pricing.plans %}
        <div class="col-md-6 col-lg-3">
          <div class="pricing card h-100">
            {% if plan.ribbon %}
            <div class="card-body pb-12">
              <div class="prices text-dark">
                <div class="price price-show justify-content-start">
                  <span class="price-currency">{{ page.pricing.currency }}</span>
                  <span class="price-value">{{ plan.price_monthly }}</span>
                  <span class="price-duration">mo</span>
                </div>
                <div class="price price-hide price-hidden justify-content-start">
                  <span class="price-currency">{{ page.pricing.currency }}</span>
                  <span class="price-value">{{ plan.price_yearly }}</span>
                  <span class="price-duration">yr</span>
                </div>
              </div>
              <h4 class="card-title mt-2">{{ plan.name }}</h4>
              <p class="text-muted">{{ plan.description }}</p>
              <ul class="icon-list bullet-primary mt-7 mb-8">
                {% for feature in plan.features %}
                <li>
                  {% if feature.text == "-" %}
                    <span class="text-muted">-</span>
                  {% else %}
                    <i class="uil uil-check fs-21"></i>
                    <span>{{ feature.text }}</span>
                  {% endif %}
                </li>
                {% endfor %}
              </ul>
              <a href="{{ plan.button.url }}" class="{{ plan.button.class }} w-100">{{ plan.button.label }}</a>
            </div>
            <div class="ribbon ribbon-top ribbon-primary">
              <span>{{ plan.ribbon }}</span>
            </div>
          </div>
          {% else %}
          <div class="pricing card h-100">
            <div class="card-body">
              <div class="prices text-dark">
                {% if plan.price_monthly == "Contact" %}
                <div class="price justify-content-start">
                  <span class="price-value fs-40">{{ plan.price_monthly }}</span>
                </div>
                {% else %}
                <div class="price price-show justify-content-start">
                  <span class="price-currency">{{ page.pricing.currency }}</span>
                  <span class="price-value">{{ plan.price_monthly }}</span>
                  <span class="price-duration">mo</span>
                </div>
                <div class="price price-hide price-hidden justify-content-start">
                  <span class="price-currency">{{ page.pricing.currency }}</span>
                  <span class="price-value">{{ plan.price_yearly }}</span>
                  <span class="price-duration">yr</span>
                </div>
                {% endif %}
              </div>
              <h4 class="card-title mt-2">{{ plan.name }}</h4>
              <p class="text-muted">{{ plan.description }}</p>
              <ul class="icon-list bullet-primary mt-7 mb-8">
                {% for feature in plan.features %}
                <li>
                  {% if feature.text == "-" %}
                    <span class="text-muted">-</span>
                  {% else %}
                    <i class="uil uil-check fs-21"></i>
                    <span>{{ feature.text }}</span>
                  {% endif %}
                </li>
                {% endfor %}
              </ul>
              <a href="{{ plan.button.url }}" class="{{ plan.button.class }} w-100">{{ plan.button.label }}</a>
            </div>
          </div>
          {% endif %}
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="wrapper bg-light">
  <div class="container py-14 py-md-16">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h2 class="display-4 mb-3 text-center">{{ page.faq.title }}</h2>
        <div class="row gy-8 mt-10">
          <div class="col-12">
            <div class="accordion accordion-wrapper" id="accordionFAQ">
              {% for item in page.faq.questions %}
              <div class="card plain accordion-item">
                <div class="card-header" id="headingFAQ{{ forloop.index }}">
                  <button class="{% unless forloop.first %}collapsed {% endunless %}accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseFAQ{{ forloop.index }}" aria-expanded="{% if forloop.first %}true{% else %}false{% endif %}" aria-controls="collapseFAQ{{ forloop.index }}">
                    {{ item.question }}
                  </button>
                </div>
                <div id="collapseFAQ{{ forloop.index }}" class="accordion-collapse collapse {% if forloop.first %}show{% endif %}" aria-labelledby="headingFAQ{{ forloop.index }}" data-bs-parent="#accordionFAQ">
                  <div class="card-body">
                    <p>{{ item.answer }}</p>
                  </div>
                </div>
              </div>
              {% endfor %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="wrapper bg-soft-primary">
  <div class="container py-14 py-md-16">
    <div class="row">
      <div class="col-lg-8 mx-auto text-center">
        <h2 class="display-4 mb-3">{{ page.cta.title }}</h2>
        <p class="lead mb-8">{{ page.cta.subtitle }}</p>
        <a href="{{ page.cta.button.url }}" class="btn btn-primary btn-lg rounded-pill">{{ page.cta.button.label }}</a>
        <ul class="list-inline mt-5">
          {% for feature in page.cta.features %}
          <li class="list-inline-item mx-3"><i class="uil uil-check"></i> {{ feature }}</li>
          {% endfor %}
        </ul>
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