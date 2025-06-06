---
layout: default
title: "Legal AI Services"
permalink: /services/
custom_color:
custom_font: 
scroll_top_btn:
  enable: true

# Header / Hero Section
hero:
  title: "Legal AI Services"
  subtitle: "Comprehensive artificial intelligence solutions designed specifically for legal professionals and law firms."
  bg_color: "bg-soft-primary"

# Stats Section
stats:
  image: /assets/img/photos/about5.jpg
  image2x: /assets/img/photos/about5@2x.jpg
  card_bg_image: /assets/img/photos/bg3.jpg
  items:
    - count: 500
      label: "Law Firms"
    - count: 2500
      label: "Legal Professionals"
    - count: 80
      label: "% Time Savings"
    - count: 50000
      label: "Cases Analyzed"

# What We Do Section
what_we_do:
  title: "What We Do"
  subtitle: "Comprehensive AI services designed specifically for legal practice areas and workflows."
  services:
    - icon: "search"
      title: "Document Analysis"
      text: "AI-powered document review with 80% time savings and comprehensive fact extraction."
    - icon: "dashboard"
      title: "Case Intelligence"
      text: "Data-driven case assessment with strategic insights and outcome prediction."
    - icon: "users"
      title: "Deposition Management"
      text: "AI-generated questions and real-time assistance for comprehensive depositions."
    - icon: "shield-check"
      title: "Enterprise Security"
      text: "SOC 2 Type II certified with end-to-end encryption for legal data protection."
  images:
    - src: /assets/img/photos/g1.jpg
      src2x: /assets/img/photos/g1@2x.jpg
      class: "col-md-4 offset-md-2 align-self-end"
    - src: /assets/img/photos/g2.jpg
      src2x: /assets/img/photos/g2@2x.jpg
      class: "col-md-6 align-self-end"
    - src: /assets/img/photos/g3.jpg
      src2x: /assets/img/photos/g3@2x.jpg
      class: "col-md-6 offset-md-1"
    - src: /assets/img/photos/g4.jpg
      src2x: /assets/img/photos/g4@2x.jpg
      class: "col-md-4 align-self-start"

# Process Section
process:
  title: "How We Do It?"
  subtitle: "Our proven 4-step process delivers measurable results for your legal practice."
  steps:
    - number: "01"
      title: "Upload Documents"
      text: "Securely upload case files, depositions, and discovery documents to our SOC 2 certified platform."
      active: false
    - number: "02"
      title: "AI Analysis"
      text: "Our LLMs analyze documents, extract key facts, identify contradictions, and surface critical insights."
      active: true
    - number: "03"
      title: "Strategic Review"
      text: "Review AI-generated insights, timeline analysis, and case strength assessments in our intuitive dashboard."
      active: false
    - number: "04"
      title: "Take Action"
      text: "Export reports, generate deposition questions, and leverage insights to build stronger cases."
      active: false

# Video Section
video:
  bg_image: /assets/img/photos/bg1.jpg
  video_url: "https://www.youtube.com/watch?v=26TbMXXOe0I"
  title: "See how Lapis Legal AI transforms document review and case analysis in minutes, not hours."

# Pricing Section
pricing:
  title: "Our Pricing"
  subtitle: "Transparent pricing designed for law firms of all sizes."
  text: "Start with a free 14-day trial. No credit card required. Cancel anytime."
  button:
    label: "View Full Pricing"
    url: "/pricing/"
  plans:
    - name: "Professional"
      price_monthly: 299
      price_yearly: 2999
      currency: "$"
      features:
        - highlight: true
          text: "Up to <strong>10</strong> Active Cases"
        - highlight: true
          text: "<strong>500</strong> Documents/Month"
        - highlight: true
          text: "<strong>5GB</strong> Secure Storage"
        - highlight: true
          text: "AI Case <strong>Analysis</strong>"
        - highlight: false
          text: "Priority <strong>Support</strong>"
      button:
        label: "Start Free Trial"
        url: "/contact/#demo"
      popular: false
    - name: "Enterprise"
      price_monthly: 599
      price_yearly: 5999
      currency: "$"
      features:
        - highlight: true
          text: "<strong>Unlimited</strong> Active Cases"
        - highlight: true
          text: "<strong>5,000</strong> Documents/Month"
        - highlight: true
          text: "<strong>50GB</strong> Secure Storage"
        - highlight: true
          text: "Advanced <strong>Analytics</strong>"
        - highlight: true
          text: "24/7 Priority <strong>Support</strong>"
      button:
        label: "Start Free Trial"
        url: "/contact/#demo"
      popular: true

# Let's Talk Section
lets_talk:
  title: "Let's Transform Your Practice"
  subtitle: "Join over 500+ law firms using Lapis Legal AI to win more cases with less effort."
  text: "Our AI technology has helped legal professionals save thousands of hours on document review, uncover critical case insights, and build stronger arguments. Experience the difference that purpose-built legal AI can make for your practice."
  button:
    label: "Schedule Demo"
    url: "/contact/#demo"
  counter:
    value: "80%"
    label: "Time Saved on Document Review"
  images:
    - src: /assets/img/photos/g5.jpg
      src2x: /assets/img/photos/g5@2x.jpg
    - src: /assets/img/photos/g6.jpg
      src2x: /assets/img/photos/g6@2x.jpg
     
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

{% include components/sections/services/hero.html %}
{% include components/sections/services/stats.html %}
{% include components/sections/services/what-we-do.html %}
{% include components/sections/services/video.html %}
{% include components/sections/services/pricing.html %}
{% include components/sections/services/lets-talk.html %}

{% include components/footer/footer.html 
  style="default"
  bg_color="bg-dark"
  text_color="text-inverse"
%}
</div>
