# Analytics Event Plan

Events to track:

- cta_hero_click: main hero CTA on important pages.
- cta_sticky_click: mobile sticky CTA.
- cta_midpage_click: mid-page CTA blocks.
- cta_footer_click: footer CTA links.
- portfolio_link_click: clicks to live proof examples.
- free_check_form_start: first focus inside the free check form.
- free_check_form_submit: form submit attempt.
- sample_report_click: clicks to the sample report page.
- examples_section_click: clicks to the examples page or section.
- scroll_50: reader reaches 50% page depth.
- scroll_90: reader reaches 90% page depth.
- contact_click: contact or check request links.
- email_click: email links if added later.

The included JavaScript pushes these to `window.dataLayer` when available and stores the last event in localStorage for quick checking. Add GA4/Plausible later if desired.
