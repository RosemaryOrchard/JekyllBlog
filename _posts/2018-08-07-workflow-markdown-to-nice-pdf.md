---
title: 'Workflow: Markdown To Nice PDF'
last_modified_at: 2021-10-10 00:00
date: 2018-08-07 08:00
type: post
published: true
layout: post
tags:
  - Markdown
  - PDF
  - Workflow
redirect_from:
  - "/2018/08/07/workflow-markdown-to-nice-pdf.html"
---
![alignright](https://resources.rosemaryorchard.com/images/blog/workflow-markdown-to-nice-pdf/workflow-markdown-to-nice-pdf.png)

<!--more-->

![aligncenter](https://resources.rosemaryorchard.com/images/blog/workflow-markdown-to-nice-pdf/example-without-formatting.jpeg)
Yes, that's Times New Roman. Not a font I usually use by choice. Thankfully however it's quite simple to fix this with my Workflow. This can be accomplished in a number of ways, I convert the rich text to HTML, replace the <code>&lt;body&gt;</code> tag with one containing a HTML inline style (<code>&lt;body style="font-family: Arial, Helvetica, sans-serif;"&gt;</code>), make rich text from that HTML, and then make the PDF. The body in HTML is where all of your content is, so this will then apply to all of your text. If you just wanted to change the first level of headings, you could replace the <code>&lt;h1&gt;</code> tags instead.  
![aligncenter](https://resources.rosemaryorchard.com/images/blog/workflow-markdown-to-nice-pdf/example-with-formatting.jpeg)
This is how the whole Workflow runs:  
<ul>
<li>![](https://resources.rosemaryorchard.com/images/workflow-icons/RichText.png)
<li>![](https://resources.rosemaryorchard.com/images/workflow-icons/RichText.png)
<li>![](https://resources.rosemaryorchard.com/images/workflow-icons/Text.png)
<li>![](https://resources.rosemaryorchard.com/images/workflow-icons/RichText.png)
<li>![](https://resources.rosemaryorchard.com/images/workflow-icons/PDF.png)
</ul>
Bonus: The PDF contains the text as well, so it's searchable and also accessible. All you need to do is to add an action at the end of the Workflow to make it do what you want with it, you could quick look it, share it, open it in another application or save it somewhere you choose!  
You can get the simplest workflow here: <a href="https://workflow.is/workflows/0f438f7dc4c34b43a3aa02fb108b08d3">Markdown To Nice PDF</a>  
It would also be possible to link a style sheet, such as the [Pure CSS] one, by adding the css link to the <code>&lt;head&gt;</code> tag, the caveat of this is most pre-built CSS files work best when you add classes to sections (e.g. <code>&lt;table&gt;</code> would be <code>&lt;table class="pure-table"&gt;</code>), which will require many more <code>Replace Text</code> actions if you want to account for all the possibilities.  
If you want the <a href="https://workflow.is/workflows/772806a60f4a4b968f273aa0f0c3eca3">Pure CSS version</a> is also available.  
