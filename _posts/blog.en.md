layout: post
title: 'Rosemary Orchard'
cache_enable: false
menu: Blog
template: blog
content:
    items:
        - '@self.children'
        - '@page': '/elsewhere'
        - '@page': '/links'
    limit: 10
    order:
        by: date
        dir: desc
    pagination: true
    url_taxonomy_filters: true
sitemap:
    changefreq: weekly
feed:
    description: "Rosemary Orchard's Blog Posts"
    limit: 100
pagination: true
---

# Blog
## Ramblings, usually somewhat geeky
