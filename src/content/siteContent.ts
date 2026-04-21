export const siteMeta = {
  name: "Bilal Ahmad",
  role: "Data Engineer • Analytics • Data Scientist",
  intro:
    "I build thoughtful software and data products that connect raw data from diverse systems, business logic, and machine learning into something teams can actually use.",
  location: "Based in Germany",
  email: "bilal.ahmad@fau.de",
  upwork: "https://www.upwork.com/freelancers/~01fc012915a03313b3",
  linkedin: "https://linkedin.com/in/bilaalahmad",
};

export const portfolioImages = {
  workspace: {
    src: "https://images.pexels.com/photos/18935831/pexels-photo-18935831.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Software engineer working at a coding workstation with multiple screens.",
    photographer: "pexels",
   
  },
  analytics: {
    src: "https://images.pexels.com/photos/7947997/pexels-photo-7947997.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Laptop screen showing an analytics chart in a natural workspace.",
    photographer: "pexels",
  
  },
  infrastructure: {
    src: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?_gl=1*2gyb33*_ga*NjI4ODYxMTU2LjE3NzU3NTcyNTQ.*_ga_8JE65Q40S6*czE3NzYzNzY5NDAkbzMkZzEkdDE3NzYzNzcwNTgkajM5JGwwJGgw?auto=compress&cs=tinysrgb&w=1600",
    alt: "Samsung S.LSI.",
    photographer: "pexels",
    
  },
  solarFarm: {
    src: "https://images.pexels.com/photos/18316987/pexels-photo-18316987.jpeg?_gl=1*7ji7v2*_ga*NjI4ODYxMTU2LjE3NzU3NTcyNTQ.*_ga_8JE65Q40S6*czE3NzYzNzY5NDAkbzMkZzEkdDE3NzYzNzcxMzgkajMxJGwwJGgw?auto=compress&cs=tinysrgb&w=1600",
    alt: "Aerial view of solar panels on a green hillside.",
    photographer: "pexels",
   
  },
  
};

export const salesFunnelProject = {
  title: "Sales Funnel Analytics Dashboard",
  subtitle: "Snowflake · dbt · Streamlit",
  context: "Renewable Energy — Freelance",
  tagline:
    "End-to-end funnel visibility from CRM data to stakeholder-ready dashboards.",
  overview:
    "Built an end-to-end analytics pipeline to track and optimize a solar energy company's sales funnel—from lead creation through conversion—using a modern data stack. The goal was to give business stakeholders clear visibility into conversion performance, timing, and channel effectiveness.",
  problem:
    'The business lacked a unified view of how leads moved through the funnel and how long conversions took. There was no "lead lost" flag, making it impossible to know when data was complete and safe to report on.',
  approach: [
    {
      title: "Modeled and transformed CRM data with dbt",
      body: "Designed staging and mart layers to clean, unify, and document funnel data in a reproducible, testable way.",
    },
    {
      title: "Built a unified analytical table in Snowflake",
      body: "Combined all the tables and funnel stages into a One Big Table — a single queryable structure for downstream analysis.",
    },
    {
      title: "Delivered an interactive Streamlit dashboard",
      body: "Built a business-facing dashboard with global filters, KPI cards, and cohort-level drill-downs for stakeholders.",
    },
  ],
  features: [
    {
      title: "Funnel Conversion Tracking",
      body: "Visualized progression from Lead → Sales Call 1 → Sales Call 2 → Conversion using KPI cards and funnel charts.",
    },
    {
      title: "Marketing Channel Performance",
      body: "Enabled filtering and side-by-side comparison of conversion rates across all acquisition channels.",
    },
    {
      title: "Cohort Analysis",
      body: "Built a cohort heatmap showing conversion timing by lead creation month — the core insight for understanding typical sales cycles.",
    },
    {
      title: "Time-to-Conversion Analysis",
      body: "Calculated distribution of days between lead creation and conversion to define a realistic and defensible reporting window.",
    },
    {
      title: "Global Filtering & Interactivity",
      body: "Dashboard-wide filters (e.g., marketing channel, date range) allow dynamic exploration without technical knowledge.",
    },
  ],
  techStack: [
    "Snowflake",
    "dbt",
    "Streamlit",
    "Plotly",
    "Python",
    "Pandas",
    "SQL",
  ],
  insights: [
    "Most conversions occur within ~30–60 days, enabling a defensible safe reporting window",
    "Certain marketing channels drive measurably higher-quality leads with better conversion rates",
    "Funnel drop-offs are most significant between specific stages — Call 1 → Call 2",
    "Cohort analysis reveals seasonality in lead quality and conversion timing and some channels perform better in certain timeframes",
  ],
  impact: [
    {
      value: "Safe window",
      label: "Reporting confidence",
      detail:
        "Stakeholders could confidently define when funnel data was complete enough to report on.",
    },
    {
      value: "Channel ROI",
      label: "Marketing clarity",
      detail:
        "Improved decision-making around marketing spend and lead source prioritization.",
    },
    {
      value: "Scalable",
      label: "Analytics foundation",
      detail:
        "dbt + Snowflake architecture is extensible for new metrics and reporting layers.",
    },
  ],
};

export const aquaPulseProject = {
  title: "AquaPulse Performance Dashboard",
  subtitle: "Power Query · Power BI · CSV-based Marketing Analytics",
  context: "Marketing Analytics Case Study",
  tagline:
    "Unified Google Ads, Facebook Ads, and LinkedIn Ads CSV data into a cross-channel performance dashboard for brand, country, date, and channel analysis.",
  overview:
    "Built a marketing analytics dashboard for AquaPulse, a watercooler manufacturer with the AquaPulse and CoolPool brands. The project focused on combining advertising data from multiple platforms into one consistent reporting layer so campaign performance could be tracked across brands, countries, dates, and channels.",
  problem:
    "Ad platform exports came in separate CSV files with different metric structures and naming conventions, making it difficult to compare campaign performance across Google Ads, Facebook Ads, and LinkedIn Ads. The business needed one coherent view of spend, clicks, conversions, and cost efficiency.",
  approach: [
    {
      title: "Unified cross-platform CSV inputs in Power Query",
      body: "Used Power Query as the ETL layer to ingest CSV exports, standardize columns, align schemas, and append the platform datasets into one analysis-ready table.",
    },
    {
      title: "Handled metric gaps and logic edge cases",
      body: "Normalized platform differences, introduced placeholder values where metrics were unavailable, and resolved inconsistencies such as zero-click or zero-conversion edge cases before reporting.",
    },
    {
      title: "Modeled KPI measures in Power BI",
      body: "Built dynamic measures for click-through rate, conversion rate, cost per click, cost per conversion, and overall spend so decision-makers could compare channels consistently.",
    },
  ],
  features: [
    {
      title: "Cross-channel performance dashboard",
      body: "Created a single dashboard experience to compare Google Ads, Facebook Ads, and LinkedIn Ads side by side instead of reviewing isolated exports.",
    },
    {
      title: "Power Query ETL pipeline",
      body: "Cleaned raw CSV files, standardized column names, replaced nulls, and aligned the datasets into one flat model suitable for fast reporting.",
    },
    {
      title: "Interactive business filters",
      body: "Enabled filtering by brand, country, date, and channel so stakeholders could move from high-level trends to focused campaign analysis.",
    },
    {
      title: "Cost-efficiency and conversion KPIs",
      body: "Tracked clicks, impressions, conversions, click-through rate, conversion rate, cost per click, and cost per conversion using reusable Power BI measures.",
    },
    {
      title: "Data quality and anomaly handling",
      body: "Addressed platform-specific metric gaps and logical inconsistencies before visualization, which improved trust in the reported numbers.",
    },
  ],
  techStack: [
    "Power Query",
    "Power BI",
    "CSV",
    "Google Ads",
    "Facebook Ads",
    "LinkedIn Ads",
  ],
  metrics: [
    {
      value: "537K EUR",
      label: "Total spend",
      detail:
        "Unified spend across the advertising channels in the reporting window.",
    },
    {
      value: "26M",
      label: "Total impressions",
      detail:
        "Campaign reach across platforms after combining the source files.",
    },
    {
      value: "269K",
      label: "Total clicks",
      detail: "Cross-channel click volume made comparable in one dashboard.",
    },
    {
      value: "17K",
      label: "Total conversions",
      detail: "Conversion outcomes tracked in the unified performance layer.",
    },
  ],
  insights: [
    "A unified model made it possible to compare channel efficiency instead of judging each ad platform in isolation.",
    "Standardized KPI definitions improved trust in click, cost, and conversion reporting across brands and countries.",
    "Interactive slicing by date, brand, country, and channel turned raw export files into a practical decision-making dashboard.",
  ],
  dataChallenges: [
    "Different ad platforms exported different metric shapes and naming conventions, so schema alignment was required before any meaningful comparison.",
    "Some metrics were unavailable or inconsistent across sources, which required defaults and careful handling during transformation.",
    "Edge cases such as undefined cost per conversion and logically inconsistent rows had to be corrected before visualization.",
  ],
  impact: [
    {
      value: "Unified view",
      label: "Cross-platform clarity",
      detail:
        "Brought separate CSV exports into one dependable dashboard for marketing performance analysis.",
    },
    {
      value: "KPI trust",
      label: "Cleaner reporting",
      detail:
        "Improved confidence in spend, click, and conversion metrics through ETL cleanup and metric standardization.",
    },
    {
      value: "Faster insight",
      label: "Business usability",
      detail:
        "Made it easier for stakeholders to filter performance by brand, country, date, and channel without manual spreadsheet work.",
    },
  ],
};

export const impactStats = [
  {
    value: "20+",
    label: "Software projects shipped",
    detail:
      "Full-stack applications built across web platforms, internal tooling, and enterprise products — each owned and delivered end-to-end.",
    category: "Software Engineering",
  },
  {
    value: "5+",
    label: "Data pipelines built end-to-end",
    detail:
      "Complete ownership from raw source to governed analytics layer — ETL design, data modeling, and production-ready dashboards.",
    category: "Data Engineering & BI",
  },
  {
    value: "3",
    label: "ML systems implemented",
    detail:
      "Transformer-based forecasting, computer vision classification, and applied ML experiments developed with full research rigor.",
    category: "Machine Learning & AI",
  },
  {
    value: "10+",
    label: "Structured courses completed",
    detail:
      "Project-oriented courses and certifications across data engineering, business intelligence, process mining, and deep learning.",
    category: "Continuous Learning",
  },
];

export const focusAreas = [
  {
    title: "Data Engineering",
    description:
      "Designing ETL and ELT pipelines, data models, validation layers, and governed analytics foundations across enterprise systems.",
    points: [
      "ERP integrations",
      "Structured analytics layers",
      "Data quality and documentation",
    ],
  },
  {
    title: "Analytics & BI",
    description:
      "Turning operational data into KPIs, dashboards, and root-cause analysis frameworks that help teams move faster with confidence.",
    points: [
      "Power BI and Tableau",
      "SQL performance tuning",
      "KPI standardization",
    ],
  },
  {
    title: "Applied AI",
    description:
      "Using machine learning, PyTorch, and transformer-based architectures to model time series and uncover meaningful signal behavior.",
    points: [
      "Time-series forecasting",
      "Transformer experiments",
      "Predictive analytics",
    ],
  },
];

export const experienceTimeline = [
  {
    period: "Apr 2025 – Oct 2025",
    role: "Data Scientist, Master’s Thesis",
    company: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    summary:
      "Researched and fine-tuned transformer-based models for time-series forecasting in chaotic dynamical systems.",
  },
  {
    period: "Nov 2023 – Nov 2025",
    role: "Data Engineer / Analytics",
    company: "Samsung Semiconductor Europe GmbH",
    summary:
      "Built automated pipelines, KPI frameworks, and analytics layers that improved complaint handling speed and reporting efficiency.",
  },
  {
    period: "May 2022 – Jun 2023",
    role: "Advanced Data Analytics",
    company: "Qualcomm CDMA Technologies GmbH - RF360",
    summary:
      "Optimized SQL-driven dashboards and made sensor-heavy production data easier to query, analyze, and operationalize.",
  },
  {
    period: "Nov 2021 – May 2022",
    role: "Software Engineer",
    company: "Siemens AG",
    summary:
      "Developed internal Django and Flask applications that supported security testing workflows and improved usability.",
  },
  {
    period: "Nov 2018 – Apr 2021",
    role: "Software Engineer, Top Rated Freelancer",
    company: "Upwork",
    summary:
      "Delivered web applications, dashboards, and analytics-led improvements for SMEs and SaaS clients.",
  },
];

export const caseStudies = [
  {
    title: "Transformer Forecasting for Chaotic Systems",
    context: "Master’s thesis in Data Science",
    challenge:
      "Explore whether transformer-inspired architectures can model complex temporal dependencies beyond standard forecasting baselines.",
    work: "Reviewed 40+ papers, fine-tuned transformer-based models, and analyzed attention behavior using SVD, eigenvalue decomposition, and cosine similarity.",
    impact:
      "Combined research depth with experimentation to connect theory, interpretability, and predictive performance in time-series analysis.",
    tags: ["PyTorch", "Transformers", "Forecasting", "Research"],
  },
  {
    title: "Complaint Intelligence & KPI Pipeline",
    context: "Samsung Semiconductor Europe GmbH",
    challenge:
      "Business teams needed a reliable way to combine SAP ERP data and operational data signals into a faster complaint-handling workflow.",
    work: "Designed end-to-end ETL and ELT pipelines, built analytics layers, and created KPI structures for root-cause analysis and corrective action tracking.",
    impact:
      "Reduced complaint handling time by 30 minutes per case and €10,000 in annual savings through better process visibility.",
    tags: ["ETL / ELT", "SAP ERP", "Analytics Engineering", "Data Quality"],
  },
  {
    title: "Manufacturing Analytics for Sensor-Rich Production",
    context: "Qualcomm CDMA Technologies GmbH - RF360",
    challenge:
      "High-volume FDC, R2R, and SPC datasets were difficult to query efficiently and slow to turn into actionable insight.",
    work: "Built SQL-driven dashboards, optimized complex queries, and transformed IoT-heavy operational data into usable manufacturing analytics.",
    impact:
      "Improved data retrieval performance and supported process optimization initiatives with clearer, faster operational reporting.",
    tags: ["SQL", "Dashboards", "Manufacturing Data", "IoT Analytics"],
  },
  {
    title: "Internal Security Tooling Interfaces",
    context: "Siemens AG",
    challenge:
      "Security testing tools needed supporting interfaces that were easier to use, maintain, and extend internally.",
    work: "Designed and developed internal web applications using Python Django framework to support vulnerability detection workflows in security testing tools.",
    impact:
      "Improved system usability and created a stronger bridge between engineering tools and day-to-day internal operations.",
    tags: ["Python", "Django", "Bootstrap", "Internal Tools"],
  },
];

export const skillGroups = [
  {
    title: "Core Languages",
    items: ["Python","SQL", "TypeScript", "JavaScript", "React"],
  },
  {
    title: "Data & AI",
    items: [
      "Machine Learning",
      "Predictive Analytics",
      "Time Series Forecasting",
      "MLOps",
      "PyTorch",
      "Scikit-Learn",
    ],
  },
  {
    title: "Analytics Stack",
    items: ["Power BI", "Tableau", "dbt", "Pandas", "Matplotlib", "Plotly", "Streamlit"],
  },
  {
    title: "Platforms & Warehousing",
    items: [
      "MS Fabric",
      "Snowflake",
      "AWS EC2",
      "AWS S3",
      "AWS Glue",
      "AWS Redshift",
      "REST APIs",
    ],
  },
  {
    title: "Delivery & Governance",
    items: [
      "Data Modeling",
      "Data Warehousing",
      "Data Quality",
      "Data Governance",
      "Git",
      "GitHub",
      "CI/CD",
    ],
  },
];

export const education = [
  {
    school: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    degree: "M.Sc. Data Science",
    detail:
      "Statistics, Artificial Intelligence, Business Intelligence, Machine Learning, Deep Learning",
    
  },
  {
    school: "National University of Sciences and Technology",
    degree: "B.Eng. Software Engineering / Computer Science",
    detail:
      "Strong software engineering foundations with applied systems thinking",
    
  },
];

export const certifications = [
  "IBM - Python for Data Science and AI",
  "IBM - Data Analytics with Python",
  "LinkedIn - Decision Intelligence",
  "Exploratory Data Analysis with Seaborn",
  "Machine Learning - NLP: Basic Sentiment Analysis with TensorFlow",
];

export const samsungCQCProject = {
  title: "Customer Quality Complaints Platform",
  subtitle: "React · Node.js · PostgreSQL · Claude API",
  context: "Samsung Semiconductor S.LSI",
  tagline:
    "Full-stack enterprise platform managing the end-to-end complaint lifecycle across Post-Sale, Pre-Sale, and CIP divisions.",
  overview:
    "Built a demo-ready enterprise internal web application for Samsung Semiconductor's S.LSI division to manage customer quality complaints from intake through resolution. The platform covers three distinct business areas — Post-Sale, Pre-Sale (PPAP), and Continuous Improvement (CIP) — with a shared authentication layer, analytics dashboards, and an AI-powered assistant.",
  modules: [
    {
      title: "Post-Sale",
      description:
        "Full complaint lifecycle management — intake, 8D milestone tracking, root cause analysis, and analytics dashboards with 20+ charts.",
    },
    {
      title: "Pre-Sale / PPAP",
      description:
        "Detailed PPAP approval tracking, process capability (Cp/Cpk) metrics, and OEM-level quality reporting for pre-production sign-offs.",
    },
    {
      title: "CIP",
      description:
        "Continuous improvement tracking with OEE trends, yield analysis, and cost-per-wafer metrics to analyse and surface process efficiency gains.",
    },
  ],
  features: [
    {
      title: "Multi-area entry portal",
      body: "Business area selector with JWT auto-authentication, graceful offline fallback, and role-based routing to the correct module.",
    },
    {
      title: "Complaint management",
      body: "Full CRUD with advanced filtering, column sorting, pagination, CSV/Excel export, and bulk file import.",
    },
    {
      title: "8D milestone tracker",
      body: "D3–D8 completion dates, TAT calculation, and on/off-target status badges for each discipline step.",
    },
    {
      title: "Auto-seeding system",
      body: "Backend checks the database on every startup and seeds recent complaints if empty — preventing blank-state demos.",
    },
    {
      title: "Real-time dashboard sync",
      body: "Zustand store propagates new complaints to the analytics dashboard instantly without a page refresh.",
    },
    {
      title: "AI chatbot assistant",
      body: "Sliding drawer powered by Claude claude-sonnet-4-5 with streaming, live DB context injection, and markdown rendering.",
    },
  ],
  analytics: [
    "YoY complaint trend comparison",
    "Severity stacked bar chart",
    "Resolution rate with target annotation",
    "Pareto root cause analysis with cumulative %",
    "Complaint aging donut",
    "8D pipeline funnel",
    "PPM vs deliveries combo chart",
    "Claim type breakdown",
    "OEM / customer distribution",
    "Quality Health Score — animated SVG ring gauge (0–100)",
    "Smart Insights Panel — auto-generated contextual cards",
    "Performance Scorecard — all KPIs vs targets with YoY delta",
  ],
  techStack: [
    "Snowflake",
    "dbt",
    "React 19",
    "TypeScript",
    "Vite",
    "Tailwind CSS v4",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma ORM",
    "ApexCharts",
    "Zustand",
    "JWT",
    "Claude API",
  ],
  scope:
    "Designed and developed as a end-end enterprise platform for Samsung Semiconductor S.LSI Quality.",
};

export const ommaxProject = {
  title: "Paid Advertisement Performance Dashboard",
  subtitle: "Power Query · Power BI",
  context: "OMMAX Digital Growth — Case Study",
  tagline:
    "Cross-channel ad performance analytics across Google, Facebook, and LinkedIn in a single Power BI dashboard.",
  overview:
    "Built an end-to-end advertising analytics solution for a digital growth consultancy case study. Raw performance data from three ad platforms was ingested as CSV exports, cleaned and unified with Power Query, and surfaced in an interactive Power BI dashboard that lets stakeholders compare channel efficiency and optimize budget allocation.",
  problem:
    "Three separate ad platforms — Google Ads, Facebook Ads, and LinkedIn Ads — produced siloed CSV exports with inconsistent schemas and metrics. There was no unified view to compare channel performance or identify where ad spend was generating the highest return.",
  etlSteps: [
    {
      title: "CSV ingestion & schema alignment",
      body: "Loaded all three platform exports into Power Query and standardized column names, data types, and date formats across sources.",
    },
    {
      title: "Data cleaning & enrichment",
      body: "Handled missing values, removed duplicates, and calculated derived metrics (CTR, CPC, CPM, ROAS) as reusable query steps.",
    },
    {
      title: "Unified data model",
      body: "Merged all platform tables into a single analytical model with a shared channel dimension for cross-platform filtering.",
    },
  ],
  features: [
    {
      title: "Cross-channel overview",
      body: "Single-view KPI cards comparing total spend, clicks, impressions, and conversions across Google, Facebook, and LinkedIn.",
    },
    {
      title: "Channel efficiency comparison",
      body: "Side-by-side CTR, CPC, and ROAS breakdowns to identify which platforms deliver the highest-quality traffic per euro spent.",
    },
    {
      title: "Campaign-level drill-down",
      body: "Interactive filtering by platform, campaign, and date range for granular performance investigation.",
    },
    {
      title: "Budget allocation insights",
      body: "Visual comparison of spend distribution vs. performance contribution to support re-allocation recommendations.",
    },
    {
      title: "Trend analysis",
      body: "Time-series views of key metrics to identify seasonality, campaign timing effects, and performance trajectory.",
    },
  ],
  techStack: [
    "Power BI",
    "Power Query",
    "DAX",
    "Excel",
    "Google Ads",
    "Facebook Ads",
    "LinkedIn Ads",
  ],
  insights: [
    "Identified the highest-ROAS channel, enabling a data-backed budget shift recommendation",
    "Surfaced CTR and CPC gaps between platforms that were invisible in siloed platform views",
    "Unified schema reduced future reporting prep time significantly vs. manual per-platform exports",
  ],
};

export const collaborationAreas = [
  "Data platform and Analytics engineering",
  "AI, Machine learning, and Deep learning projects",
  "Software engineering for internal tools and data products",
  "Cross-functional projects that need clear technical solutions",
];
