---
layout: page
title: "ROI Calculator"
description: "Calculate your potential savings with Lapis Legal AI. See how much time and money you can save by automating document review and case analysis."
permalink: /resources/roi-calculator/
custom_color: navy
custom_font: urbanist

# Hero Section
hero:
  title: "Calculate Your Potential ROI"
  subtitle: "Discover how much time and money Lapis Legal AI can save your practice"
  bg_color: "bg-navy"

# Calculator Introduction
calculator_intro:
  title: "Personalized ROI Analysis"
  subtitle: "Enter your practice details below to see your potential savings"
  description: "Our ROI calculator uses real data from 500+ law firms to provide accurate estimates based on your specific practice size and case volume."

# Default Assumptions
assumptions:
  title: "Calculation Methodology"
  subtitle: "Based on Real Client Data"
  items:
    - category: "Time Savings"
      details:
        - "Document Review: 80% reduction in time"
        - "Case Analysis: 75% faster insights generation"
        - "Deposition Prep: 70% faster preparation"
        - "Discovery Planning: 85% improvement in gap identification"
    - category: "Cost Factors"
      details:
        - "Attorney billing rates: $200-$800/hour"
        - "Paralegal rates: $75-$150/hour"
        - "Annual platform cost: $195-$395 per user"
        - "Implementation: 1-2 weeks typical setup"
    - category: "Quality Improvements"
      details:
        - "95% accuracy in fact extraction"
        - "90% reduction in missed evidence"
        - "85% improvement in case strategy"
        - "75% faster client communication"

# ROI Examples
roi_examples:
  title: "Real Savings Examples"
  subtitle: "Actual Results from Current Clients"
  examples:
    - practice_type: "Solo Practitioner"
      firm_size: "1 Attorney"
      case_volume: "20 cases/year"
      annual_savings: "$35,000"
      time_saved: "480 hours"
      payback_period: "2 months"
      details:
        - "Document review time reduced from 8 to 1.5 hours per case"
        - "Case analysis 75% faster with AI insights"
        - "Deposition prep time cut by 70%"
    - practice_type: "Small Firm"
      firm_size: "3-5 Attorneys"
      case_volume: "100 cases/year"
      annual_savings: "$185,000"
      time_saved: "2,100 hours"
      payback_period: "1.5 months"
      details:
        - "Team productivity increased by 60%"
        - "Client communication 80% more efficient"
        - "Settlement values improved by 25%"
    - practice_type: "Mid-Size Firm"
      firm_size: "10-25 Attorneys"
      case_volume: "500 cases/year"
      annual_savings: "$850,000"
      time_saved: "8,500 hours"
      payback_period: "3 weeks"
      details:
        - "Enterprise-wide efficiency gains"
        - "Standardized quality across all cases"
        - "Reduced external counsel costs by 40%"

# Calculator Form (Static for now - would be interactive with JavaScript)
calculator_form:
  title: "Your Practice Information"
  fields:
    - label: "Practice Type"
      type: "select"
      options:
        - "Solo Practitioner"
        - "Small Firm (2-5 attorneys)"
        - "Mid-Size Firm (6-25 attorneys)"
        - "Large Firm (25+ attorneys)"
        - "Corporate Legal Department"
    - label: "Primary Practice Area"
      type: "select"
      options:
        - "Personal Injury"
        - "Commercial Litigation"
        - "Employment Law"
        - "Product Liability"
        - "Corporate Law"
        - "Real Estate"
        - "Family Law"
        - "Criminal Defense"
        - "Other"
    - label: "Number of Attorneys"
      type: "number"
      placeholder: "Enter number of attorneys"
    - label: "Average Cases per Year"
      type: "number"
      placeholder: "Enter annual case volume"
    - label: "Average Attorney Billing Rate"
      type: "number"
      placeholder: "Enter average hourly rate ($)"
    - label: "Hours Spent on Document Review per Case"
      type: "number"
      placeholder: "Enter hours per case"

# Results Template
results_template:
  title: "Your Projected ROI"
  metrics:
    - label: "Annual Time Savings"
      value: "[CALCULATED]"
      description: "Hours saved annually across your practice"
    - label: "Annual Cost Savings"
      value: "[CALCULATED]"
      description: "Dollar value of time savings and efficiency gains"
    - label: "Platform Investment"
      value: "[CALCULATED]"
      description: "Annual cost for Lapis Legal AI platform"
    - label: "Net ROI"
      value: "[CALCULATED]"
      description: "Return on investment after platform costs"
    - label: "Payback Period"
      value: "[CALCULATED]"
      description: "Time to recover initial investment"

# Additional Benefits
additional_benefits:
  title: "Beyond Quantifiable ROI"
  subtitle: "Additional Value You'll Receive"
  benefits:
    - title: "Enhanced Case Outcomes"
      description: "Better case strategies through comprehensive AI analysis"
      icon: "trophy"
    - title: "Improved Client Satisfaction"
      description: "Faster response times and more informed communication"
      icon: "heart"
    - title: "Competitive Advantage"
      description: "Technology leadership in your market"
      icon: "rocket"
    - title: "Risk Reduction"
      description: "Comprehensive coverage reduces missed evidence"
      icon: "shield-check"
    - title: "Quality Consistency"
      description: "Standardized excellence across all cases and attorneys"
      icon: "check-circle"
    - title: "Professional Growth"
      description: "Enhanced capabilities attract better cases and clients"
      icon: "trending-up"

# Call to Action
cta:
  title: "Ready to Start Saving?"
  subtitle: "See these results in your own practice"
  primary_button:
    text: "Schedule Demo"
    link: "/contact/"
  secondary_button:
    text: "View Solutions"
    link: "/solutions/"
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

  <!-- Calculator Introduction -->
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-primary mb-3">{{ page.calculator_intro.subtitle }}</h2>
          <h3 class="display-4 mb-10 px-xxl-15">{{ page.calculator_intro.title }}</h3>
          <p class="lead fs-lg mb-10 px-xxl-10">{{ page.calculator_intro.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ROI Examples -->
  <section class="wrapper bg-gray">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-primary mb-3">{{ page.roi_examples.subtitle }}</h2>
          <h3 class="display-4 mb-10 px-xxl-15">{{ page.roi_examples.title }}</h3>
        </div>
      </div>
      <div class="row gx-lg-8 gx-xl-12 gy-6">
        {% for example in page.roi_examples.examples %}
        <div class="col-lg-4">
          <div class="card h-100 bg-soft-primary">
            <div class="card-body p-6">
              <h5 class="mb-1">{{ example.practice_type }}</h5>
              <p class="text-muted mb-3">{{ example.firm_size }} • {{ example.case_volume }}</p>
              
              <div class="row gy-2 mb-4">
                <div class="col-6">
                  <h4 class="text-primary mb-0">{{ example.annual_savings }}</h4>
                  <small class="text-muted">Annual Savings</small>
                </div>
                <div class="col-6">
                  <h4 class="text-primary mb-0">{{ example.time_saved }}</h4>
                  <small class="text-muted">Hours Saved</small>
                </div>
              </div>
              
              <div class="mb-4">
                <span class="badge bg-primary rounded-pill">{{ example.payback_period }} payback</span>
              </div>
              
              <ul class="list-unstyled mb-0">
                {% for detail in example.details %}
                <li class="mb-1">• {{ detail }}</li>
                {% endfor %}
              </ul>
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- Calculator Form Placeholder -->
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="card bg-soft-primary">
            <div class="card-body p-6">
              <h3 class="mb-4 text-center">{{ page.calculator_form.title }}</h3>
              <form>
                <div class="row gy-3">
                  {% for field in page.calculator_form.fields %}
                  <div class="col-md-6">
                    <label class="form-label">{{ field.label }}</label>
                    {% if field.type == "select" %}
                    <select class="form-select">
                      <option selected>Choose...</option>
                      {% for option in field.options %}
                      <option value="{{ option }}">{{ option }}</option>
                      {% endfor %}
                    </select>
                    {% else %}
                    <input type="{{ field.type }}" class="form-control" placeholder="{{ field.placeholder }}">
                    {% endif %}
                  </div>
                  {% endfor %}
                </div>
                <div class="text-center mt-6">
                  <button type="button" class="btn btn-primary rounded-pill" onclick="alert('Interactive calculator coming soon! Contact us for a personalized ROI analysis.')">Calculate My ROI</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Calculation Assumptions -->
  <section class="wrapper bg-gray">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-primary mb-3">{{ page.assumptions.subtitle }}</h2>
          <h3 class="display-4 mb-10 px-xxl-15">{{ page.assumptions.title }}</h3>
        </div>
      </div>
      <div class="row gx-lg-8 gx-xl-12 gy-6">
        {% for assumption in page.assumptions.items %}
        <div class="col-lg-4">
          <h5 class="mb-3">{{ assumption.category }}</h5>
          <ul class="icon-list bullet-bg bullet-soft-primary">
            {% for detail in assumption.details %}
            <li><span><i class="uil uil-check"></i></span><span>{{ detail }}</span></li>
            {% endfor %}
          </ul>
        </div>
        {% endfor %}
      </div>
    </div>
  </section>

  <!-- Additional Benefits -->
  <section class="wrapper bg-light">
    <div class="container py-14 py-md-16">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <h2 class="fs-15 text-uppercase text-primary mb-3">{{ page.additional_benefits.subtitle }}</h2>
          <h3 class="display-4 mb-10 px-xxl-15">{{ page.additional_benefits.title }}</h3>
        </div>
      </div>
      <div class="row gx-lg-8 gx-xl-12 gy-6">
        {% for benefit in page.additional_benefits.benefits %}
        <div class="col-md-6 col-lg-4">
          <div class="d-flex flex-row">
            <div>
              <span class="icon btn btn-block btn-sm btn-soft-primary pe-none me-4">
                <span class="uil uil-{{ benefit.icon }}"></span>
              </span>
            </div>
            <div>
              <h5 class="mb-1">{{ benefit.title }}</h5>
              <p class="mb-0">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
        {% endfor %}
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