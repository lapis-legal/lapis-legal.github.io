---
layout: default
title: Contact Us
permalink: /contact/
custom_color:
custom_font: 
scroll_top_btn:
  enable: true

# Header / Hero Section
hero:
  title: "Get in Touch"
  bg_image: /assets/img/photos/bg3.jpg
  overlay: true
  overlay_color: "bg-overlay-400"
  breadcrumb:
    enable: true
    items:
      - label: "Home"
        url: "/"
      - label: "Contact"
        url: "#"
        active: true

# Contact Card Section
contact_card:
  position: "mt-n19"
  map:
    enable: true
    embed_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25387.23478654725!2d-122.06115399490332!3d37.309248660190086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA%2C%20USA!5e0!3m2!1sen!2str!4v1645437305701!5m2!1sen!2str"
  contact_info:
    - icon: "location-pin-alt"
      title: "Address"
      content: "548 Market Street, Suite 35000 <br class='d-none d-md-block' />San Francisco, CA 94104"
    - icon: "phone-volume"
      title: "Phone"
      content: "+1 (415) 555-0123 <br />Mon-Fri 9am-6pm PT"
    - icon: "envelope"
      title: "E-mail"
      links:
        - label: "info@lapislegal.ai"
          url: "mailto:info@lapislegal.ai"
        - label: "support@lapislegal.ai"
          url: "mailto:support@lapislegal.ai"

# Contact Form Section
contact_form:
  title: "Drop Us a Line"
  subtitle: "Reach out to us from our contact form and we will get back to you shortly."
  fields:
    - id: "form_name"
      name: "name"
      label: "First Name *"
      type: "text"
      placeholder: "Jane"
      required: true
      col: "col-md-6"
    - id: "form_lastname"
      name: "surname"
      label: "Last Name *"
      type: "text"
      placeholder: "Doe"
      required: true
      col: "col-md-6"
    - id: "form_email"
      name: "email"
      label: "Email *"
      type: "email"
      placeholder: "jane.doe@example.com"
      required: true
      col: "col-md-6"
    - id: "form-select"
      name: "department"
      label: "Select a department"
      type: "select"
      required: true
      col: "col-md-6"
      options:
        - label: "Sales Inquiry"
          value: "Sales"
        - label: "Product Demo"
          value: "Demo"
        - label: "Technical Support"
          value: "Support"
        - label: "Partnership"
          value: "Partnership"
    - id: "form_message"
      name: "message"
      label: "Message *"
      type: "textarea"
      placeholder: "Your message"
      required: true
      col: "col-12"
      height: "150px"
  button:
    label: "Send message"
    class: "btn btn-primary rounded-pill btn-send mb-3"
  note: "<strong>*</strong> These fields are required."

# Clients Section
clients:
  bg_image: /assets/img/map.png
  title: "Trusted by over 500+ law firms. Join them and transform your practice."
  stats:
    - count: 500
      label: "Law Firms"
    - count: 2500
      label: "Legal Professionals"
    - count: 80
      label: "% Time Savings"
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

{% include components/sections/contact/hero.html %}

<section class="wrapper bg-light angled upper-end">
  <div class="container pb-11">
    <div class="row mb-14 mb-md-16">
      <div class="col-xl-10 mx-auto {{page.contact_card.position}}">
        {% include components/sections/contact/contact-card.html %}
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
    
    <div class="row">
      <div class="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
        {% include components/sections/contact/contact-form.html %}
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </div>
  <!-- /.container -->
</section>
<!-- /section -->

{% include components/sections/contact/clients.html %}

{% include components/footer/footer.html 
  style= "default"
  bg_color= "bg-dark"
  text_color= "text-inverse"
%}
</div>
