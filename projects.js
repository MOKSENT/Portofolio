/* ===== Nawaf portfolio — shared data + logic ===== */
var CATS = [
  {id:"powerbi", ar:"لوحات Power BI والداشبورد", en:"Power BI & Dashboards"},
  {id:"excel",   ar:"أنظمة Excel وVBA",          en:"Excel & VBA Systems"},
  {id:"finance", ar:"النماذج المالية ودراسات الجدوى", en:"Financial Models & Feasibility"},
  {id:"reports", ar:"التقارير والعروض التنفيذية", en:"Executive Reports & Decks"},
  {id:"products",ar:"المنتجات الرقمية",           en:"Digital Products"},
  {id:"content", ar:"المحتوى والكتب",             en:"Content & Books"}
];

function R(k,v){return [k,v];}
var PROJECTS = [
  {id:"powerbi-branches",cat:"powerbi",highlight:true,img:"powerbi.jpg",
   sector:{ar:"تجارة / مشتريات",en:"Retail / Procurement"},
   title:{ar:"لوحة Power BI للمبيعات والفروع",en:"Power BI Sales & Branches Dashboard"},
   tags:["Power BI","KPI"],
   short:{ar:"لوحة تفاعلية تجمع مبيعات كل الفروع والمنتجات في شاشة واحدة.",en:"An interactive board uniting all branches and products in one screen."},
   rows:{ar:[R("السياق","جهة تجزئة بفروع موزّعة، كل فرع يرسل أرقامه على حدة فتتأخر القراءة الكلية."),R("الاختناق","أي منتج الأكثر مبيعًا؟ أي فرع يتفوّق؟ أين يتركّز المخزون؟ إجابات مبعثرة."),R("النظام","لوحة Power BI تجمع المبيعات والكميات والمخزون عبر الفروع، مع توزيع جغرافي وأهم المنتجات، قابلة للتصفية حسب الربع أو الفرع."),R("النتيجة","الإدارة تقرأ أداء كل الفروع في شاشة واحدة وتقارن لحظيًا، فتتحوّل المراجعة من تجميع إلى قرار.")],
         en:[R("Context","A retailer with distributed branches, each reporting separately — the overall read was slow."),R("Bottleneck","Which product sells most? Which branch leads? Where is stock concentrated?"),R("System","A Power BI board uniting sales, quantities and stock across branches, with a geographic split, filterable by quarter or branch."),R("Result","Management reads every branch in one screen and decides instead of assembling.")]}},

  {id:"hr-workforce",cat:"powerbi",highlight:true,img:"hr.jpg",
   sector:{ar:"موارد بشرية",en:"Human Resources"},
   title:{ar:"لوحة مراقبة الموظفين والإقامات",en:"Workforce & Residency Dashboard"},
   tags:["Power BI","HR"],
   short:{ar:"لوحة تجمع القوى العاملة والإقامات والتكاليف في عرض واحد.",en:"A board uniting workforce, residencies and costs in one view."},
   rows:{ar:[R("السياق","جهة بعدد كبير من الموظفين تحتاج متابعة القوى العاملة والإقامات والتكاليف."),R("الاختناق","بيانات الموظفين والجنسيات والمهن والإقامات موزّعة بلا لوحة تجمعها."),R("النظام","لوحة تجمع إجمالي الموظفين، التوزيع حسب المهنة والجنسية والجنس، الإقامات المنتهية والقادمة، ومقارنة تكاليف التجديد."),R("النتيجة","الإدارة تقرأ حالة القوى العاملة والإقامات بلمحة وتخطّط التجديدات مبكرًا.")],
         en:[R("Context","A large-workforce organization tracking headcount, residencies and costs."),R("Bottleneck","Employee, nationality, profession and residency data scattered."),R("System","A board with total headcount, distribution by profession/nationality/gender, expiring residencies and renewal-cost comparison."),R("Result","Workforce and residency status read at a glance; renewals planned early.")]},
   note:{ar:"أُخفيت هوية الجهة والشعار حفاظًا على السرية.",en:"Client identity and logo hidden for confidentiality."}},

  {id:"sales-system",cat:"excel",highlight:true,img:"sales.jpg",
   sector:{ar:"عقاري",en:"Real Estate"},
   title:{ar:"نظام مبيعات ومتابعة أداء",en:"Sales & Performance System"},
   tags:["Excel","VBA"],
   short:{ar:"نظام يربط الصفقات بالأهداف ويُظهر أداء كل موظف لحظيًا.",en:"Links deals to targets and shows each rep's performance live."},
   rows:{ar:[R("السياق","فريق مبيعات يتابع الصفقات والأهداف وأداء الموظفين على جداول متفرقة."),R("الاختناق","لا رؤية لحظية للأداء مقابل الهدف ولا لأفضل/أضعف موظف."),R("النظام","نظام Excel يربط الصفقات بالأهداف، ويُظهر إجمالي المبيعات ونسبة الإنجاز ومؤشر حالة البيع وأداء كل موظف."),R("النتيجة","الإدارة ترى أداء المبيعات والفريق لحظيًا وتتخذ قرار المتابعة أسرع.")],
         en:[R("Context","A sales team tracking deals, targets and staff across scattered sheets."),R("Bottleneck","No live view of performance vs target or of top/bottom reps."),R("System","An Excel system linking deals to targets, showing total sales, completion rate, a deal-status indicator and per-rep performance."),R("Result","Sales and team performance seen live; follow-up decisions made faster.")]}},

  {id:"inventory-health",cat:"excel",highlight:true,img:"inventory.jpg",
   sector:{ar:"رعاية صحية",en:"Healthcare"},
   title:{ar:"نظام إدارة مخزون بلوحة KPI",en:"Inventory System with KPI Board"},
   tags:["Excel","KPI"],
   short:{ar:"نظام متعدد الأبواب بتنبيهات نفاد ولوحة مؤشرات كاملة.",en:"A multi-module system with low-stock alerts and a full KPI board."},
   rows:{ar:[R("السياق","مراكز رعاية صحية بمئات الأصناف تُدار يدويًا."),R("الاختناق","الجرد اليدوي بطيء ويُنتج أخطاء نفاد."),R("النظام","نظام بلوحة KPI: حالة الكميات، أكثر/أقل الأصناف حركة، حركة الإدخال والإخراج والإتلاف، وواجهات إدخال كاملة."),R("النتيجة","جرد أدق، تنبيهات استباقية، ووقت أقل في الإدارة.")],
         en:[R("Context","Healthcare centers with hundreds of items managed manually."),R("Bottleneck","Manual stock-taking was slow and caused stockouts."),R("System","A KPI board: quantity status, top/least moving items, inbound/outbound/disposal movement, and full input interfaces."),R("Result","More accurate counts, proactive alerts, less admin time.")]}},

  {id:"production",cat:"excel",highlight:false,img:"production.jpg",
   sector:{ar:"قطاع صناعي / إنتاج",en:"Industrial / Production"},
   title:{ar:"داشبورد إنتاج (نفط وماء)",en:"Production Dashboard (Oil & Water)"},
   tags:["Excel","Dashboard"],
   short:{ar:"لوحة تتبّع إنتاج يومية بمؤشرات أهداف ومعدلات.",en:"A daily production tracker with targets and rate gauges."},
   rows:{ar:[R("السياق","عملية إنتاج تحتاج متابعة يومية للأهداف والمعدلات."),R("النظام","داشبورد Excel لتتبّع إنتاج النفط وحقن الماء: الهدف الشهري، أعلى إنتاج يومي، ومعدل الشهر بمؤشرات بصرية."),R("النتيجة","متابعة يومية واضحة للأداء مقابل الهدف في شاشة واحدة.")],
         en:[R("Context","A production operation needing daily tracking of targets and rates."),R("System","An Excel dashboard for oil production and water injection: monthly target, highest daily output, and MTD average with visual gauges."),R("Result","Clear daily tracking of performance against target in one screen.")]}},

  {id:"callcenter",cat:"excel",highlight:false,img:null,ph:"CC",
   sector:{ar:"مراكز اتصال",en:"Call Centers"},
   title:{ar:"نظام تقارير مركز اتصال",en:"Call Center Reporting System"},
   tags:["Excel"],
   short:{ar:"يحوّل بيانات المكالمات إلى تقرير أداء دوري جاهز.",en:"Turns call data into a ready periodic performance report."},
   rows:{ar:[R("السياق","مركز اتصال يُنتج بيانات مكالمات يومية دون تقرير موحّد."),R("الاختناق","قياس أداء الموظفين وزمن الاستجابة يتم يدويًا ويتأخر."),R("النظام","نظام Excel يستقبل بيانات المكالمات ويُخرج تقرير أداء دوري جاهزًا، بنسختين عربية وإنجليزية."),R("النتيجة","تقرير جاهز في دقائق بدل ساعات، وقرار أوضح حول الفريق.")],
         en:[R("Context","A call center producing daily call data with no unified report."),R("Bottleneck","Measuring agent performance and response time was manual and late."),R("System","An Excel system that ingests call data and outputs a ready periodic report, in Arabic and English."),R("Result","A ready report in minutes instead of hours.")]}},

  {id:"accounting",cat:"excel",highlight:false,img:null,ph:"ACC",
   sector:{ar:"خدمات",en:"Services"},
   title:{ar:"نظام محاسبي متكامل",en:"Integrated Accounting System"},
   tags:["Excel","VBA"],
   short:{ar:"نظام يدير القيود والحسابات والتقارير المالية في مكان واحد.",en:"Manages entries, accounts and financial reports in one place."},
   rows:{ar:[R("السياق","نشاط يحتاج ضبط الحسابات والتقارير المالية بدل السجلات المتفرقة."),R("النظام","نظام محاسبي متعدد الأبواب: قيود، حسابات، وتقارير مالية دورية."),R("النتيجة","سجلّ مالي منظّم وتقارير جاهزة تدعم القرار.")],
         en:[R("Context","A business needing organized accounts and financial reports."),R("System","A multi-module accounting system: entries, accounts and periodic reports."),R("Result","Organized financial records and ready decision-support reports.")]}},

  {id:"admin-systems",cat:"excel",highlight:false,img:null,ph:"ADM",
   sector:{ar:"خدمات",en:"Services"},
   title:{ar:"أنظمة إدارية (تصاريح وتسكين ومخزون)",en:"Admin Systems (Permits, Housing, Stock)"},
   tags:["Excel","VBA"],
   short:{ar:"حزمة أنظمة إدارية لإدارة العمليات المتكررة في منشأة.",en:"A pack of admin systems for a facility's recurring operations."},
   rows:{ar:[R("السياق","منشأة بعمليات إدارية متكررة تُدار يدويًا (تصاريح، تسكين، تنقّل، مخزون)."),R("النظام","حزمة أنظمة Excel/VBA لكل عملية بواجهات إدخال وتقارير."),R("النتيجة","تشغيل أسرع وأدق للعمليات الإدارية اليومية.")],
         en:[R("Context","A facility with recurring admin operations handled manually."),R("System","An Excel/VBA pack per operation with input interfaces and reports."),R("Result","Faster, more accurate daily administrative operations.")]}},

  {id:"attendance",cat:"excel",highlight:false,img:null,ph:"ATT",
   sector:{ar:"تعليم",en:"Education"},
   title:{ar:"نظام حضور وانصراف طلاب",en:"Student Attendance System"},
   tags:["Excel"],
   short:{ar:"نظام لتسجيل حضور الطلاب حسب الفصل والحصة.",en:"Records student attendance by class and period."},
   rows:{ar:[R("السياق","جهة تعليمية تحتاج ضبط الحضور اليدوي المتعب."),R("النظام","نظام Excel لتسجيل الحضور حسب الفصل والحصة مع تقارير."),R("النتيجة","حضور منظّم وتقارير سريعة بدل الأوراق.")],
         en:[R("Context","An educational body needing to organize manual attendance."),R("System","An Excel system recording attendance by class and period with reports."),R("Result","Organized attendance and quick reports instead of paper.")]}},

  {id:"finance-dashboard",cat:"finance",highlight:false,img:"finance.jpg",
   sector:{ar:"مالي",en:"Financial"},
   title:{ar:"داشبورد الدخل والمصروفات",en:"Income & Expense Dashboard"},
   tags:["Excel","KPI"],
   short:{ar:"لوحة تحلّل الدخل والمصروفات والتدفق النقدي شهريًا.",en:"Analyzes income, expenses and cash flow monthly."},
   rows:{ar:[R("السياق","حاجة لقراءة مالية واضحة للدخل والمصروفات والتدفق النقدي."),R("النظام","داشبورد Excel: إجمالي الدخل والمصروفات، التدفق النقدي، وتحليل شهري بالرسوم."),R("النتيجة","صورة مالية فورية تدعم قرارات الإنفاق والادخار.")],
         en:[R("Context","A need for a clear financial read of income, expenses and cash flow."),R("System","An Excel dashboard: total income/expenses, cash flow, and a monthly visual analysis."),R("Result","An instant financial picture supporting spend/save decisions.")]}},

  {id:"feasibility",cat:"finance",highlight:true,img:"feasibility.jpg",
   sector:{ar:"عقاري / ضيافة",en:"Real Estate / Hospitality"},
   title:{ar:"دراسات الجدوى والنماذج المالية",en:"Feasibility Studies & Financial Models"},
   tags:["Feasibility","NPV/IRR"],
   short:{ar:"دراسة جدوى ثنائية اللغة بنموذج مالي ومؤشرات عائد.",en:"A bilingual feasibility study with a financial model and return metrics."},
   rows:{ar:[R("السياق","قرار استثماري يحتاج قراءة مالية واضحة للجدوى قبل الالتزام."),R("الاختناق","غياب نموذج مالي يقيس العائد والمخاطر والسيناريوهات."),R("النظام","دراسة جدوى ثنائية اللغة بنموذج مالي، مؤشرات عائد (NPV/IRR) وسيناريوهات، مربوطة بعرض تنفيذي."),R("النتيجة","قرار استثماري مسنود بأرقام ومسار مرحلي واضح بدل الحدس.")],
         en:[R("Context","An investment decision needing a clear financial read before committing."),R("Bottleneck","No financial model measuring return, risk and scenarios."),R("System","A bilingual feasibility study with a financial model, NPV/IRR metrics and scenarios, tied to an executive deck."),R("Result","A number-backed decision with a clear phased path.")]},
   note:{ar:"الغلاف نموذج تعريفي لأسلوب دراسات الجدوى؛ لقطات مشاريع فعلية متاحة عند الطلب (بعد إخفاء هوية العميل).",en:"The cover illustrates the feasibility style; actual project shots are available on request (client hidden)."}},

  {id:"budget",cat:"finance",highlight:false,img:null,ph:"FIN",
   sector:{ar:"تعليم",en:"Education"},
   title:{ar:"موازنة وعروض مالية تنفيذية",en:"Budget & Executive Financial Decks"},
   tags:["Finance","Reporting"],
   short:{ar:"إعداد موازنة وملخصات مالية وعروض مجلس إدارة.",en:"Budget, financial summaries and board-meeting decks."},
   rows:{ar:[R("السياق","جهة بحجم كبير تحتاج موازنة سنوية وعروضًا مالية للإدارة."),R("النظام","إعداد الموازنة، ملخصات مالية دورية، وعروض تنفيذية لمجلس الإدارة."),R("النتيجة","صورة مالية تنفيذية واضحة تدعم قرارات الإدارة العليا.")],
         en:[R("Context","A large organization needing an annual budget and executive financials."),R("System","Budget preparation, periodic financial summaries, and board-meeting decks."),R("Result","A clear executive financial picture supporting top-management decisions.")]},
   note:{ar:"أُخفيت الأرقام واسم الجهة؛ يُعرض التصميم والأسلوب فقط.",en:"Figures and client name hidden; only the design and approach are shown."}},

  {id:"proc-dept",cat:"reports",highlight:false,img:"procurement.jpg",
   sector:{ar:"مشتريات / حكومي",en:"Procurement / Government"},
   title:{ar:"مقترح تصميم قسم مشتريات",en:"Procurement Department Design Proposal"},
   tags:["Org design","KPI"],
   short:{ar:"مقترح تنظيمي لإنشاء قسم مشتريات بمؤشرات أداء.",en:"An organizational proposal to build a procurement department with KPIs."},
   rows:{ar:[R("السياق","جهة تحتاج تأسيس قسم مشتريات بهيكل ومؤشرات واضحة."),R("النظام","مقترح تنظيمي: الهيكل، الأدوار، العمليات، ومؤشرات الأداء (KPI)، معروض تنفيذيًا."),R("النتيجة","خارطة واضحة لبناء القسم وقياس أدائه.")],
         en:[R("Context","An entity needing to establish a procurement department with clear structure and KPIs."),R("System","An organizational proposal: structure, roles, processes and KPIs, presented executively."),R("Result","A clear roadmap to build and measure the department.")]},
   note:{ar:"أُخفي اسم الجهة.",en:"Client name hidden."}},

  {id:"identity-deck",cat:"reports",highlight:false,img:"identity.jpg",
   sector:{ar:"عرض تنفيذي",en:"Executive Deck"},
   title:{ar:"عرض مبادرة الهوية السعودية",en:"Saudi Identity Initiative Deck"},
   tags:["Deck","Design"],
   short:{ar:"عرض أعمال احترافي لمبادرة بهوية بصرية متكاملة.",en:"A professional business deck with a full visual identity."},
   rows:{ar:[R("السياق","مبادرة تحتاج عرضًا تنفيذيًا احترافيًا يقدّم فكرتها بوضوح."),R("النظام","تصميم عرض أعمال متكامل: سرد، هوية بصرية، وشرائح تنفيذية."),R("النتيجة","عرض مقنع يقدّم المبادرة بشكل احترافي — أشاد به العميل.")],
         en:[R("Context","An initiative needing a professional executive deck to present its idea clearly."),R("System","A full business-deck design: narrative, visual identity, and executive slides."),R("Result","A convincing deck the client praised as \"a model to follow.\"")]}},

  {id:"profit-ribhi",cat:"products",highlight:true,img:"profit.jpg",
   sector:{ar:"منتج رقمي",en:"Digital Product"},
   title:{ar:"«ربحي» — نظام التكاليف والتسعير",en:"\"Ribhi\" — Costing & Pricing System"},
   tags:["Excel","Product"],
   short:{ar:"نظام Excel ذكي لإدارة التكاليف وتسعير المنتجات وحساب الربح.",en:"A smart Excel system for costs, product pricing and profit."},
   rows:{ar:[R("الفكرة","منتج جاهز يساعد أصحاب الأعمال على تسعير منتجاتهم وحساب أرباحهم بثقة."),R("المكوّنات","أبواب: التكاليف، المنتجات، التسعير، محاكاة الربح، ونقطة التعادل."),R("القيمة","قرار تسعير مبني على أرقام بدل الحدس — منتج قابل للبيع مباشرة.")],
         en:[R("Idea","A ready product helping business owners price products and compute profit with confidence."),R("Modules","Costs, Products, Pricing, Profit Simulation, and Break-even."),R("Value","A number-based pricing decision instead of guessing — a directly sellable product.")]}},

  {id:"templates-pack",cat:"products",highlight:false,img:null,ph:"XLS",
   sector:{ar:"منتجات رقمية",en:"Digital Products"},
   title:{ar:"قوالب Excel جاهزة",en:"Ready-Made Excel Templates"},
   tags:["Excel","Templates"],
   short:{ar:"قوالب عملية: مُسدّد، مدير المهام، الدخل والمصروفات، طلبات واتساب.",en:"Practical templates: payments, task manager, income/expense, WhatsApp orders."},
   rows:{ar:[R("الفكرة","قوالب Excel جاهزة تحلّ مهام متكررة لأصحاب الأعمال الصغار."),R("المكوّنات","مُسدّد للمدفوعات، مدير المهام، متتبّع الدخل والمصروفات، ونظام طلبات واتساب."),R("القيمة","حلول فورية منخفضة السعر، قابلة للبيع كأصول رقمية متكررة.")],
         en:[R("Idea","Ready Excel templates solving recurring tasks for small businesses."),R("Modules","A payments tracker, task manager, income/expense tracker, and a WhatsApp-orders system."),R("Value","Instant low-price solutions, sellable as recurring digital assets.")]}},

  {id:"finance-book",cat:"content",highlight:false,img:null,ph:"BOOK",
   sector:{ar:"كتاب",en:"Book"},
   title:{ar:"كتاب «أين يذهب مالك؟»",en:"Book: \"Where Does Your Money Go?\""},
   tags:["Book","Finance"],
   short:{ar:"كتاب مالي مكتمل يبسّط الوعي المالي الشخصي.",en:"A completed financial book simplifying personal money awareness."},
   rows:{ar:[R("الفكرة","كتاب يبسّط الوعي المالي الشخصي بأسلوب عملي."),R("العمل","تأليف وتحرير وتجهيز كامل للكتاب حتى الإخراج النهائي."),R("القيمة","محتوى تعليمي مكتمل يعكس قدرة على تحويل المعرفة إلى منتج.")],
         en:[R("Idea","A book simplifying personal financial awareness in a practical style."),R("Work","Full authoring, editing and production to final output."),R("Value","A completed educational product showing the ability to turn knowledge into an asset.")]}},

  {id:"ecommerce-guide",cat:"content",highlight:false,img:null,ph:"GUIDE",
   sector:{ar:"محتوى تعليمي",en:"Educational Content"},
   title:{ar:"كتيب التجارة الإلكترونية",en:"E-commerce Guide"},
   tags:["Guide","E-commerce"],
   short:{ar:"دليل عملي حول عوامل نجاح التجارة الإلكترونية في السعودية.",en:"A practical guide on e-commerce success factors in Saudi Arabia."},
   rows:{ar:[R("الفكرة","دليل عملي يشرح عوامل نجاح المتاجر الإلكترونية محليًا."),R("العمل","إعداد المحتوى وتنظيمه في كتيب قابل للاستخدام."),R("القيمة","مادة مرجعية تعكس فهمًا للسوق والتجارة الرقمية.")],
         en:[R("Idea","A practical guide on e-commerce success factors locally."),R("Work","Content preparation and organization into a usable guide."),R("Value","A reference reflecting market and digital-commerce understanding.")]}}
];

/* ===== shared helpers ===== */
(function(){
  var WA="https://wa.me/966548767480?text="+encodeURIComponent("السلام عليكم نواف، حاب أستفسر عن خدماتك.");
  function T(o){return (window.__lang==="en")?o.en:o.ar;}
  window.__T=T;

  function getLang(){try{return localStorage.getItem("lang")||"ar";}catch(e){return "ar";}}
  window.__lang=getLang();
  function applyLang(){
    var ar=window.__lang==="ar";
    document.documentElement.lang=ar?"ar":"en";
    document.documentElement.dir=ar?"rtl":"ltr";
    document.querySelectorAll("[data-ar]").forEach(function(el){
      if(el.getAttribute("data-en")!==null){el.innerHTML=ar?el.getAttribute("data-ar"):el.getAttribute("data-en");}
    });
    var lb=document.getElementById("langBtn"); if(lb) lb.textContent=ar?"EN":"AR";
    if(window.__rerender) window.__rerender();
  }
  window.__applyLang=applyLang;

  function boot(){
    document.querySelectorAll("a.wa, #waNav").forEach(function(a){a.href=WA;});
    var lb=document.getElementById("langBtn");
    if(lb) lb.addEventListener("click",function(){window.__lang=(window.__lang==="ar")?"en":"ar";try{localStorage.setItem("lang",window.__lang);}catch(e){} applyLang();});
    if(window.__renderPage) window.__renderPage();
    applyLang();
    // reveal
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target);}});},{threshold:.12});
    document.querySelectorAll(".reveal").forEach(function(el){io.observe(el);});
    // count up
    function cu(el){var t=+el.getAttribute("data-count"),s=el.getAttribute("data-suffix")||"",a=null,d=1100;function st(ts){if(!a)a=ts;var p=Math.min((ts-a)/d,1);el.textContent=Math.floor(p*t)+(p===1?s:"");if(p<1)requestAnimationFrame(st);}requestAnimationFrame(st);}
    var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){cu(e.target);io2.unobserve(e.target);}});},{threshold:.5});
    document.querySelectorAll("[data-count]").forEach(function(el){io2.observe(el);});
  }
  if(document.readyState!=="loading") boot(); else document.addEventListener("DOMContentLoaded",boot);

  /* card builder */
  window.__coverHTML=function(p){
    if(p.img) return '<div class="cover"><img src="'+p.img+'" alt=""></div>';
    return '<div class="cover"><div class="ph"><span>'+(p.ph||"•")+'</span></div></div>';
  };
  window.__cardHTML=function(p){
    var T=window.__T;
    return '<a class="wcard reveal" href="project.html?id='+p.id+'">'+window.__coverHTML(p)+
      '<div class="body"><span class="sector">'+T(p.sector)+'</span><h4>'+T(p.title)+'</h4>'+
      '<p class="prob">'+T(p.short)+'</p><span class="read" data-ar="اقرأ القصة" data-en="Read the story">اقرأ القصة</span></div></a>';
  };
})();
