/* ============================================
   PDflow — i18n.js
   中英文切换 · 字典 + 替换逻辑
   ============================================ */
(function(){
'use strict';

var DICTS={
en:{
/* Meta */
'page.title':'PDflow — Visual Document Builder & PDF Conversion | Yinliu',
'page.desc':'Create documents visually. Convert PDFs with OCR. Export instantly. Local-first document platform for designers and teams.',
'og.title':'PDflow — Visual Document Builder & PDF Conversion',
'og.desc':'Create documents visually. Convert PDFs with OCR. Export instantly. Local-first.',

/* Nav */
'nav.product':'Product',
'nav.compare':'Compare',
'nav.cases':'Cases',
'nav.faq':'FAQ',
'nav.blog':'Blog',
'nav.download':'Download Free',
'lang.toggle':'中',

/* Hero */
'hero.badge':'v1.2 Now Available',
'hero.h1':'Create Documents<br>Like Designing.',
'hero.sub':'Visual document builder with PDF conversion, OCR, and professional export. No cloud. No signup.',
'hero.cta.primary':'Download Free',
'hero.cta.secondary':'See Product',
'hero.trust':'★★★★★ <span>Free forever · 10,000+ documents generated</span>',
'hero.float1':'PDF → Excel',
'hero.float2':'OCR Ready',
'hero.float3':'Export PDF',

/* S2 Demo */
's2.tag':'Product',
's2.h2':'See PDflow in Action',
's2.desc':'From import to export. Real-time preview, professional output.',
's2.tab1':'Invoice Template',
's2.tab2':'PDF → Excel',
's2.f1.num':'6+','s2.f1.t':'Templates','s2.f1.s':'Invoices, contracts, reports',
's2.f2.num':'10+','s2.f2.t':'PDF Tools','s2.f2.s':'Merge, split, compress, OCR',
's2.f3.num':'100%','s2.f3.t':'Local','s2.f3.s':'No cloud, no upload',
's2.f4.num':'<3s','s2.f4.t':'Export','s2.f4.s':'High-quality PDF',

/* S3 Gallery */
's3.tag':'Gallery',
's3.h2':'Built for real work',
's3.desc':'Professional template layout, PDF conversion, and full toolbox — all in one desktop app.',
's3.c1.t':'Template Editor','s3.c1.s':'Visual layout with live preview',
's3.c2.t':'PDF Conversion','s3.c2.s':'PDF → Excel with OCR',
's3.c3.t':'PDF Toolbox','s3.c3.s':'Merge, split, compress, watermark',

/* S4 Compare */
's4.tag':'Benchmark',
's4.h2':'Built differently',
's4.desc':'See how PDflow compares to online PDF tools.',
's4.th1':'Feature','s4.th2':'PDflow','s4.th3':'Online PDF Tools',
's4.r1':'100% Local Processing',
's4.r2':'No File Upload',
's4.r3':'OCR Conversion',
's4.r4':'Professional Templates',
's4.r5':'PDF Export Quality',
's4.r5.p1':'Vector','s4.r5.p2':'Raster',
's4.r6':'Free (No Subscription)',
's4.r7':'Works Offline',
's4.r8':'Privacy Guaranteed',
's4.note':'* Online tools often limit OCR to first 5 pages unless paid.',

/* S5 Cases */
's5.tag':'Real Cases',
's5.h2':'From busy to done',
's5.desc':'Real teams. Real documents. Real time saved.',
's5.c1.b':'Freelancer',
's5.c1.b1':'Before','s5.c1.b1t':'30 min manual layout',
's5.c1.a1':'After','s5.c1.a1t':'5 min — export done',
's5.c1.q':'"I generate invoices in minutes. Template system is a lifesaver."',
's5.c2.b':'Accounting',
's5.c2.b1':'Before','s5.c2.b1t':'Manual PDF → Excel typing',
's5.c2.a1':'After','s5.c2.a1t':'OCR auto-extracts tables',
's5.c2.q':'"99% accuracy on scanned invoices. No retyping needed."',
's5.c3.b':'Operations',
's5.c3.b1':'Before','s5.c3.b1t':'Multiple tools for each PDF task',
's5.c3.a1':'After','s5.c3.a1t':'One app for merge, split, OCR',
's5.c3.q':'"Merge, compress, OCR — all local. Our data never leaves."',
's5.c4.b':'Agency',
's5.c4.b1':'Before','s5.c4.b1t':'Client docs need reformatting',
's5.c4.a1':'After','s4.a1t':'Template + brand style = done',
's5.c4.a1t':'Template + brand style = done',
's5.c4.q':'"Brand templates with consistent formatting — clients love it."',

/* S6 FAQ */
's6.tag':'FAQ',
's6.h2':'Frequently asked<br>questions',
's6.search':'Search questions...',
's6.faq.placeholder':'',
's6.q1':'Is PDflow really free?',
's6.a1':'Yes. All features included. No hidden fees, no premium tiers, no ads. Built for the community.',
's6.q2':'What platforms are supported?',
's6.a2':'Windows 10/11 (64-bit). macOS and Linux on roadmap. Built with PySide6 Qt 6.',
's6.q3':'Is my data processed locally?',
's6.a3':'100%. All processing on your machine. No cloud upload, no tracking. Works fully offline.',
's6.q4':'How does PDF → Excel conversion work?',
's6.a4':'PyMuPDF + RapidOCR for scanned documents. Table structure preserved. Columns aligned globally. Images embedded directly into Excel cells.',
's6.q5':"What's the file size and version?",
's6.a5':'Current version is v1.2.0. About 78 MB installed. Works on Windows 10 and 11. SHA256 checksum available on the download page.',
's6.q6':'Can I use it commercially?',
's6.a6':'Absolutely. Generate invoices, contracts, and reports for your business or clients with no restrictions. Free for commercial use.',

/* S7 Download */
's7.h2':'Start Creating Better<br>Documents',
's7.p':'Free download. Local-first. No signup required.',
's7.cta.primary':'Download Free',
's7.cta.github':'GitHub Source',
's7.cta.changelog':'View Changelog →',
's7.i.version':'Version','s7.i.updated':'Updated','s7.i.platform':'Platform','s7.i.size':'Size','s7.i.sha':'SHA256',
's7.i.version.v':'1.2.0',
's7.i.updated.v':'Jun 2026',
's7.i.platform.v':'Windows 10/11',
's7.i.size.v':'215 MB',
's7.users':'Downloaded by <strong>1,200+</strong> users · Early Access',

/* Footer */
'f.tag':'Document Creation Platform.<br>Build. Convert. Export. All local.',
'f.h.download':'Download',
'f.d.windows':'Windows','f.d.notes':'Release Notes','f.d.changelog':'Changelog','f.d.sha':'SHA256 Checksums',
'f.h.product':'Product',
'f.p.excel':'PDF → Excel','f.p.tools':'PDF Tools','f.p.template':'Template Builder','f.p.demo':'Demo','f.p.compare':'Compare',
'f.h.resources':'Resources',
'f.r.blog':'Blog','f.r.faq':'FAQ','f.r.docs':'Documentation','f.r.api':'API','f.r.roadmap':'Roadmap',
'f.h.company':'Company',
'f.c.about':'About','f.c.privacy':'Privacy Policy','f.c.terms':'Terms of Service','f.c.support':'Support','f.c.github':'GitHub',
'f.bot.left':'&copy; 2026 YinliuPDflow. <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="mailto:support@yinliupdflow.com">Contact</a>',
'f.bot.right':'Built with PySide6 · RapidOCR · PyMuPDF · Last updated Jun 2026',

/* Blog index */
'blog.tag':'Blog',
'blog.h1':'PDF tips, guides<br>and product news',
'blog.sub':'Learn how to get the most out of PDflow — from PDF conversion to template design and document automation.',
'blog.read':'Read Article →',
'blog.cta':'Want to see PDflow in action?',
'blog.cta.btn':'Download Free',
'blog.tag.product':'Product','blog.tag.conv':'Conversion','blog.tag.priv':'Privacy','blog.tag.tpl':'Templates','blog.tag.tb':'Toolbox','blog.tag.ocr':'OCR','blog.tag.wf':'Workflow','blog.tag.cmp':'Comparison',
'blog.v12.title':'PDflow v1.2: What\'s New','blog.v12.meta':'Jun 23, 2026 · 5 min read','blog.v12.desc':'Brand-new template library, 50% faster PDF export, refreshed UI with a redesigned homepage, and a polished OCR engine. Everything stays local — no cloud, no signup, still 100% free.',
'blog.bp.title':'Best PDF to Excel Converter in 2026','blog.bp.meta':'Jun 12, 2026 · 6 min read','blog.bp.desc':'Comparing the top PDF-to-Excel tools. Why local OCR processing delivers better accuracy than cloud-based alternatives.',
'blog.ocr.title':'How to Convert PDF to Excel with OCR','blog.ocr.meta':'Jun 8, 2026 · 5 min read','blog.ocr.desc':'Step-by-step guide to converting scanned PDFs into editable Excel spreadsheets with OCR.',
'blog.priv.title':'Why Local PDF Tools Matter for Privacy','blog.priv.meta':'Jun 5, 2026 · 4 min read','blog.priv.desc':'Most online PDF tools upload your documents to third-party servers. Learn why local-first is the only way to guarantee privacy.',
'blog.free.title':'Document Automation for Freelancers','blog.free.meta':'Jun 1, 2026 · 7 min read','blog.free.desc':'How freelancers can save hours each week with automated invoice templates and professional PDF export.',
'blog.inv.title':'How to Design Professional Invoice Templates','blog.inv.meta':'May 28, 2026 · 6 min read','blog.inv.desc':'Design tips for creating invoices that impress clients. CJK typography, table layout, brand formatting.',
'blog.tb.title':'Complete Guide to PDF Tools: Merge, Split, Compress','blog.tb.meta':'May 24, 2026 · 8 min read','blog.tb.desc':'Everything about managing PDFs: merging, splitting, compressing, watermarking.',
'blog.rt.title':'RapidOCR vs Tesseract: Which OCR Engine Is Better?','blog.rt.meta':'May 20, 2026 · 5 min read','blog.rt.desc':'A comparison of OCR engines. Speed, accuracy, CJK support, and why RapidOCR wins for modern workflows.',
'blog.wf.title':'How to Build a Local Document Workflow','blog.wf.meta':'May 16, 2026 · 6 min read','blog.wf.desc':'From template creation to PDF export — design a workflow that keeps your data local.',
'blog.p2i.title':'PDF to Image: When and How to Convert','blog.p2i.meta':'May 12, 2026 · 4 min read','blog.p2i.desc':'Use cases for converting PDF pages to images. High-res export for presentations and print-ready assets.',
'blog.v11.title':'PDflow v1.1: What\'s New (Archive)','blog.v11.meta':'May 8, 2026 · 3 min read','blog.v11.desc':'Release notes for PDflow v1.1. Improved OCR, new templates, faster export. Superseded by v1.2.',
'blog.why.title':'Why We Built PDflow: A Local-First Document Platform','blog.why.meta':'May 2, 2026 · 5 min read','blog.why.desc':'The story behind PDflow. Why local processing and privacy-first design matter more than ever.',
'blog.vsp.title':'PDflow vs PDFgear: Which Tool Fits Your Workflow?','blog.vsp.meta':'Apr 28, 2026 · 7 min read','blog.vsp.desc':'Detailed comparison. Features, privacy, templates, OCR quality, and which tool is right for you.'
},
zh:{
/* Meta */
'page.title':'PDflow — 可视化文档生成与 PDF 转换 | 印流',
'page.desc':'可视化生成文档，PDF 转换含 OCR，本地优先，专业导出。为设计师和团队打造的一站式 PDF 平台。',
'og.title':'PDflow — 可视化文档生成与 PDF 转换',
'og.desc':'可视化生成文档，PDF 转换含 OCR，本地优先，专业导出。',

/* Nav */
'nav.product':'产品',
'nav.compare':'对比',
'nav.cases':'案例',
'nav.faq':'常见问题',
'nav.blog':'博客',
'nav.download':'免费下载',
'lang.toggle':'EN',

/* Hero */
'hero.badge':'v1.2 现已发布',
'hero.h1':'像设计一样<br>创建文档',
'hero.sub':'可视化文档生成工具，集成 PDF 转换、OCR 和专业导出。无需联网，无需注册。',
'hero.cta.primary':'免费下载',
'hero.cta.secondary':'查看产品',
'hero.trust':'★★★★★ <span>永久免费 · 已生成 10,000+ 份文档</span>',
'hero.float1':'PDF → Excel',
'hero.float2':'OCR 识别',
'hero.float3':'PDF 导出',

/* S2 Demo */
's2.tag':'产品演示',
's2.h2':'PDflow 实际效果',
's2.desc':'从导入到导出，实时预览，专业输出。',
's2.tab1':'发票模板',
's2.tab2':'PDF → Excel',
's2.f1.num':'6+','s2.f1.t':'模板库','s2.f1.s':'发票、合同、报告',
's2.f2.num':'10+','s2.f2.t':'PDF 工具','s2.f2.s':'合并、拆分、压缩、OCR',
's2.f3.num':'100%','s2.f3.t':'本地处理','s2.f3.s':'无需联网，无需上传',
's2.f4.num':'<3秒','s2.f4.t':'导出速度','s2.f4.s':'高质量 PDF',

/* S3 Gallery */
's3.tag':'应用截图',
's3.h2':'为真实工作打造',
's3.desc':'专业模板排版、PDF 转换、完整工具箱 —— 一个桌面应用全搞定。',
's3.c1.t':'模板编辑器','s3.c1.s':'可视化排版，实时预览',
's3.c2.t':'PDF 转换','s3.c2.s':'PDF → Excel 含 OCR',
's3.c3.t':'PDF 工具箱','s3.c3.s':'合并、拆分、压缩、水印',

/* S4 Compare */
's4.tag':'对比',
's4.h2':'不一样的设计',
's4.desc':'看看 PDflow 与在线 PDF 工具有何不同。',
's4.th1':'功能','s4.th2':'PDflow','s4.th3':'在线 PDF 工具',
's4.r1':'100% 本地处理',
's4.r2':'无需上传文件',
's4.r3':'OCR 转换',
's4.r4':'专业模板',
's4.r5':'PDF 导出质量',
's4.r5.p1':'矢量','s4.r5.p2':'位图',
's4.r6':'免费（无订阅）',
's4.r7':'离线可用',
's4.r8':'隐私保障',
's4.note':'* 在线工具的 OCR 通常限制前 5 页免费，超出需付费。',

/* S5 Cases */
's5.tag':'真实案例',
's5.h2':'从繁琐到高效',
's5.desc':'真实团队，真实文档，真实节省时间。',
's5.c1.b':'自由职业者',
's5.c1.b1':'之前','s5.c1.b1t':'30 分钟手动排版',
's5.c1.a1':'之后','s5.c1.a1t':'5 分钟完成导出',
's5.c1.q':'"我几分钟就能生成发票。模板系统是救命稻草。"',
's5.c2.b':'会计',
's5.c2.b1':'之前','s5.c2.b1t':'手动 PDF → Excel 输入',
's5.c2.a1':'之后','s5.c2.a1t':'OCR 自动提取表格',
's5.c2.q':'"扫描件发票 99% 准确率，无需重录。"',
's5.c3.b':'运营',
's5.c3.b1':'之前','s5.c3.b1t':'每个 PDF 任务用不同工具',
's5.c3.a1':'之后','s5.c3.a1t':'一个应用搞定合并、拆分、OCR',
's5.c3.q':'"合并、压缩、OCR 全部本地处理，数据零外泄。"',
's5.c4.b':'设计公司',
's5.c4.b1':'之前','s5.c4.b1t':'客户文档需重新排版',
's5.c4.a1':'之后','s5.c4.a1t':'模板 + 品牌风格 = 搞定',
's5.c4.q':'"品牌模板格式一致，客户非常喜欢。"',

/* S6 FAQ */
's6.tag':'常见问题',
's6.h2':'高频问题<br>集中解答',
's6.search':'搜索问题...',
's6.q1':'PDflow 真的免费吗？',
's6.a1':'是的。所有功能全开放，无隐藏费用，无付费层级，无广告。为社区而生。',
's6.q2':'支持哪些平台？',
's6.a2':'Windows 10/11（64 位）。macOS 和 Linux 在路线图中。基于 PySide6 Qt 6 开发。',
's6.q3':'数据在本地处理吗？',
's6.a3':'100% 本地。所有处理都在你的电脑上完成，无云端上传，无追踪，完全离线可用。',
's6.q4':'PDF → Excel 转换原理？',
's6.a4':'PyMuPDF + RapidOCR 识别扫描文档，保留表格结构，全局对齐列宽，图片直接嵌入 Excel 单元格。',
's6.q5':'文件大小和版本？',
's6.a5':'当前版本 v1.2.0，安装约 78 MB，支持 Windows 10/11。SHA256 校验和见下载页。',
's6.q6':'可以商用吗？',
's6.a6':'完全可以。为你的业务或客户生成发票、合同、报告，无任何限制。商用免费。',

/* S7 Download */
's7.h2':'开始创建更好的<br>文档',
's7.p':'免费下载，本地优先，无需注册。',
's7.cta.primary':'免费下载',
's7.cta.github':'GitHub 源码',
's7.cta.changelog':'查看更新日志 →',
's7.i.version':'版本','s7.i.updated':'更新','s7.i.platform':'平台','s7.i.size':'大小','s7.i.sha':'SHA256',
's7.i.version.v':'1.2.0',
's7.i.updated.v':'2026 年 6 月',
's7.i.platform.v':'Windows 10/11',
's7.i.size.v':'215 MB',
's7.users':'已被 <strong>1,200+</strong> 用户下载 · 抢先体验',

/* Footer */
'f.tag':'文档创建平台。<br>生成 · 转换 · 导出 · 全部本地。',
'f.h.download':'下载',
'f.d.windows':'Windows','f.d.notes':'发布说明','f.d.changelog':'更新日志','f.d.sha':'SHA256 校验',
'f.h.product':'产品',
'f.p.excel':'PDF → Excel','f.p.tools':'PDF 工具','f.p.template':'模板编辑器','f.p.demo':'产品演示','f.p.compare':'功能对比',
'f.h.resources':'资源',
'f.r.blog':'博客','f.r.faq':'常见问题','f.r.docs':'文档','f.r.api':'API','f.r.roadmap':'路线图',
'f.h.company':'公司',
'f.c.about':'关于','f.c.privacy':'隐私政策','f.c.terms':'服务条款','f.c.support':'技术支持','f.c.github':'GitHub',
'f.bot.left':'&copy; 2026 印流PDflow. <a href="#">隐私</a> · <a href="#">条款</a> · <a href="mailto:support@yinliupdflow.com">联系</a>',
'f.bot.right':'基于 PySide6 · RapidOCR · PyMuPDF · 最近更新 2026 年 6 月',

/* Blog index */
'blog.tag':'博客',
'blog.h1':'PDF 技巧、指南<br>与产品资讯',
'blog.sub':'学习如何用好 PDflow——从 PDF 转换到模板设计，再到文档自动化。',
'blog.read':'阅读全文 →',
'blog.cta':'想看 PDflow 实际效果？',
'blog.cta.btn':'免费下载',
'blog.tag.product':'产品','blog.tag.conv':'转换','blog.tag.priv':'隐私','blog.tag.tpl':'模板','blog.tag.tb':'工具箱','blog.tag.ocr':'OCR','blog.tag.wf':'工作流','blog.tag.cmp':'对比',
'blog.v12.title':'PDflow v1.2: 版本更新说明','blog.v12.meta':'2026 年 6 月 23 日 · 阅读约 5 分钟','blog.v12.desc':'全新模板库，PDF 导出速度提升 50%，重新设计的首页 UI，更完善的 OCR 引擎。一切本地处理——无云端、无注册，依然 100% 免费。',
'blog.bp.title':'2026 年最佳 PDF 转 Excel 工具','blog.bp.meta':'2026 年 6 月 12 日 · 阅读约 6 分钟','blog.bp.desc':'对比主流 PDF 转 Excel 工具，分析为什么本地 OCR 处理比云端方案更准确，以及 PDflow 如何处理扫描表格、保留图片、对齐列宽。',
'blog.ocr.title':'如何使用 OCR 将 PDF 转为 Excel','blog.ocr.meta':'2026 年 6 月 8 日 · 阅读约 5 分钟','blog.ocr.desc':'将扫描 PDF 转为可编辑 Excel 的完整步骤指南。涵盖 OCR 引擎选型、表格结构识别、嵌入图片保留技巧。',
'blog.priv.title':'为什么本地 PDF 工具关乎隐私','blog.priv.meta':'2026 年 6 月 5 日 · 阅读约 4 分钟','blog.priv.desc':'大多数在线 PDF 工具会把你的文档上传到第三方服务器。本地优先的文档处理才是数据隐私与安全的唯一保障。',
'blog.free.title':'自由职业者的文档自动化','blog.free.meta':'2026 年 6 月 1 日 · 阅读约 7 分钟','blog.free.desc':'如何用自动发票模板、合同生成、专业 PDF 导出每周省下数小时——完全无需云端订阅。',
'blog.inv.title':'如何设计专业发票模板','blog.inv.meta':'2026 年 5 月 28 日 · 阅读约 6 分钟','blog.inv.desc':'设计让客户眼前一亮的发票。涵盖 CJK 字体排版、表格布局最佳实践、品牌一致的格式。',
'blog.tb.title':'PDF 工具完整指南：合并、拆分、压缩','blog.tb.meta':'2026 年 5 月 24 日 · 阅读约 8 分钟','blog.tb.desc':'PDF 文件管理的方方面面：合并多文档、按页拆分、邮件压缩、添加水印。',
'blog.rt.title':'RapidOCR vs Tesseract：哪个 OCR 引擎更强？','blog.rt.meta':'2026 年 5 月 20 日 · 阅读约 5 分钟','blog.rt.desc':'OCR 引擎全方位对比：速度、准确率、CJK 语言支持，以及为什么 RapidOCR 是现代文档工作流的首选。',
'blog.wf.title':'如何搭建本地化文档工作流','blog.wf.meta':'2026 年 5 月 16 日 · 阅读约 6 分钟','blog.wf.desc':'从模板创建到 PDF 导出——设计一套数据本地化、流程高效、输出专业的工作流。',
'blog.p2i.title':'PDF 转图片：何时以及如何转换','blog.p2i.meta':'2026 年 5 月 12 日 · 阅读约 4 分钟','blog.p2i.desc':'PDF 转图片的应用场景。高分辨率导出用于演示、社交媒体预览、印刷级素材。',
'blog.v11.title':'PDflow v1.1: 版本更新说明（归档）','blog.v11.meta':'2026 年 5 月 8 日 · 阅读约 3 分钟','blog.v11.desc':'PDflow v1.1 发布说明。OCR 准确率提升、新增模板、导出引擎加速。已被 v1.2 替代。',
'blog.why.title':'我们为什么打造 PDflow：本地优先的文档平台','blog.why.meta':'2026 年 5 月 2 日 · 阅读约 5 分钟','blog.why.desc':'PDflow 背后的故事。为什么本地处理、隐私优先设计、专业模板在现代文档工作流中愈发重要。',
'blog.vsp.title':'PDflow vs PDFgear：哪款适合你的工作流？','blog.vsp.meta':'2026 年 4 月 28 日 · 阅读约 7 分钟','blog.vsp.desc':'PDflow 与 PDFgear 详细对比。功能、隐私、模板支持、OCR 质量，以及哪款工具更适合设计师与团队。'
}
};

var KEY='pdflow_lang';
var current='en';

function getLang(){
try{
var urlLang=new URLSearchParams(window.location.search).get('lang');
if(urlLang&&DICTS[urlLang]){localStorage.setItem(KEY,urlLang);return urlLang;}
var stored=localStorage.getItem(KEY);
if(stored&&DICTS[stored])return stored;
}catch(e){}
var nav=(navigator.language||'en').toLowerCase();
return nav.indexOf('zh')===0?'zh':'en';
}

function apply(lang){
if(!DICTS[lang])return;
current=lang;
try{localStorage.setItem(KEY,lang);}catch(e){}
/* Update all data-i18n nodes */
document.querySelectorAll('[data-i18n]').forEach(function(el){
var key=el.getAttribute('data-i18n');
var val=DICTS[lang][key];
if(val!==undefined){
var attr=el.getAttribute('data-i18n-attr');
if(attr){
/* Update specific attribute (e.g. placeholder) */
el.setAttribute(attr,val);
}else if(val.indexOf('<')!==-1){
/* Support innerHTML for keys with <br> or <span> */
el.innerHTML=val;
}else{
el.textContent=val;
}
}
});
/* Update lang attribute */
document.documentElement.setAttribute('lang',lang==='zh'?'zh-CN':'en');
/* Update meta tags */
var titleEl=document.querySelector('title[data-i18n]');
if(titleEl)titleEl.textContent=DICTS[lang]['page.title'];
var descEl=document.querySelector('meta[name="description"][data-i18n]');
if(descEl)descEl.setAttribute('content',DICTS[lang]['page.desc']);
var ogTitle=document.querySelector('meta[property="og:title"][data-i18n]');
if(ogTitle)ogTitle.setAttribute('content',DICTS[lang]['og.title']);
var ogDesc=document.querySelector('meta[property="og:description"][data-i18n]');
if(ogDesc)ogDesc.setAttribute('content',DICTS[lang]['og.desc']);
var ogLocale=document.querySelector('meta[property="og:locale"]');
if(ogLocale)ogLocale.setAttribute('content',lang==='zh'?'zh_CN':'en_US');
/* Update toggle button text */
var toggle=document.getElementById('langToggle');
if(toggle){
var span=toggle.querySelector('span[data-i18n="lang.toggle"]');
if(span)span.textContent=DICTS[lang]['lang.toggle'];
toggle.setAttribute('data-lang',lang);
}
}

function toggle(){
apply(current==='en'?'zh':'en');
}

function init(){
var initial=getLang();
apply(initial);
var btn=document.getElementById('langToggle');
if(btn)btn.addEventListener('click',toggle);
}

/* Expose for interaction.js to re-apply on DOM changes */
window.PDFlowI18n={apply:apply,toggle:toggle,get current(){return current;}};

if(document.readyState==='loading'){
document.addEventListener('DOMContentLoaded',init);
}else{
init();
}

})();
