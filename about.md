---
layout: default
title: "About Lapis Legal AI"
permalink: /about/
custom_color:
custom_font: 
scroll_top_btn:
  enable: true

# Header / Hero Section
hero:
  title: "Pioneering Legal AI Innovation"
  subtitle: "Transforming legal practice with cutting-edge artificial intelligence."
  bg_image: /assets/img/photos/bg12.jpg
  bg_color: "bg-gray"

# Who We Are Section
who_we_are:
  title: "Who We Are"
  subtitle: "Lapis Legal AI is the leading provider of artificial intelligence solutions specifically designed for the legal industry."
  text: "Founded in 2022 by a team of Stanford AI researchers and veteran litigators, Lapis Legal AI was born from a simple observation: legal professionals spend up to 80% of their time on document review instead of strategic work. Our founders combined their expertise in natural language processing, machine learning, and legal practice to create the first truly intelligent legal assistant. Today, we're proud to serve over 500 law firms, from solo practitioners to AmLaw 100 firms, helping them win more cases with less effort."
  icon: "briefcase-2"
  list_items:
    - "AI-powered document analysis reducing review time by 80%"
    - "Comprehensive case intelligence with predictive insights"
    - "SOC 2 Type II certified with enterprise-grade security"
    - "Trusted by 500+ law firms across multiple practice areas"
  images:
    - src: /assets/img/photos/about2.jpg
      src2x: /assets/img/photos/about2@2x.jpg
    - src: /assets/img/photos/about3.jpg
      src2x: /assets/img/photos/about3@2x.jpg

# How It Works Section
how_it_works:
  title: "Our Approach to Legal AI"
  subtitle: "Discover how we've revolutionized legal technology with purpose-built artificial intelligence."
  text: "What sets Lapis Legal AI apart is our deep understanding of legal workflows. We didn't just apply generic AI to legal documents - we built specialized models trained on millions of legal documents, court decisions, and case outcomes. Our AI understands legal terminology, recognizes document types, and can distinguish between critical facts and routine information.\n\nWe maintain the highest standards of accuracy through continuous learning and attorney feedback. Every insight is traceable to source documents, ensuring complete transparency and trust. Our platform adapts to your practice area, learning from your document patterns to deliver increasingly personalized insights."
  button:
    label: "Explore Features"
    url: "/features/"
  steps:
    - number: "01"
      title: "Upload Documents"
      text: "Securely upload case documents through our web interface or API integration."
    - number: "02" 
      title: "AI Analysis"
      text: "Our AI processes documents using 9 extraction types for comprehensive analysis."
    - number: "03"
      title: "Strategic Insights"
      text: "Review AI-generated insights, contradictions, and strategic recommendations."

# Testimonials Section
testimonials:
  bg_color: "bg-soft-primary"
  image: /assets/img/photos/co1.png
  image2x: /assets/img/photos/co1@2x.png
  
# Team Section
team:
  title: "Built by legal experts for legal professionals."
  subtitle: "Leadership Team"
  members:
    - name: "Dr. Sarah Chen"
      role: "Co-Founder & CEO"
      bio: "Former Stanford AI researcher with 15 years in NLP. Published 30+ papers on legal AI applications."
      image: "/assets/img/avatars/te1.jpg"
    - name: "Michael Rodriguez, Esq."
      role: "Co-Founder & Chief Legal Officer"
      bio: "20+ years litigation experience. Former partner at Morrison & Foerster. JD from Harvard Law."
      image: "/assets/img/avatars/te2.jpg"
    - name: "Dr. Alex Kumar"
      role: "Chief Technology Officer"
      bio: "PhD in Machine Learning from MIT. Previously led AI teams at Google and Microsoft."
      image: "/assets/img/avatars/te3.jpg"
    - name: "Jennifer Park"
      role: "VP of Customer Success"
      bio: "Former legal technology consultant. Helped 200+ firms modernize their practice management."
      image: "/assets/img/avatars/te4.jpg"
  bg_color: "bg-light"
  
# Stats Section
stats:
  bg_color: "bg-soft-primary"
  items:
    - icon: check
      count: 500
      label: "Law Firms Trust Us"
    - icon: user
      count: 2500
      label: "Legal Professionals"
    - icon: briefcase-2
      count: 50000
      label: "Cases Analyzed"
    - icon: award-2
      count: 80
      label: "% Time Savings"

# Contact Section
contact:
  title: "Ready to transform your legal practice with AI?"
  icon: "briefcase-2"
  image: /assets/img/photos/about4.jpg
  image2x: /assets/img/photos/about4@2x.jpg
  info:
    - icon: "location-pin-alt"
      title: "Headquarters"
      text: "548 Market Street, Suite 35000<br>San Francisco, CA 94104"
    - icon: "phone-volume"
      title: "Sales"
      text: "+1 (415) 555-0123<br>Mon-Fri 9am-6pm PT"
    - icon: "envelope"
      title: "E-mail"
      text: "info@lapislegai.ai"
      link: "mailto:info@lapislegai.ai"
---
<div class="content-wrapper">
<header class="wrapper bg-gray">
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

{% include components/sections/about/hero.html %}
{% include components/sections/about/who-we-are.html %}
{% include components/sections/about/testimonials.html %}
{% include components/sections/about/team.html %}
{% include components/sections/about/stats.html %}
{% include components/sections/about/contact.html %}

{% include components/footer/footer.html 
  style="default"
  container_padding="pt-16 pt-md-18 pb-13 pb-md-15"
  bg_color="bg-dark"
  text_color="text-inverse"
%}
</div>
