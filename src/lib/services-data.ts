export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  icon: string;
  relatedSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "gst-filing",
    title: "GST Filing & Compliance",
    shortDescription:
      "Timely GST returns, reconciliation, and advisory to keep your business fully compliant.",
    description:
      "Our GST practice covers registration, monthly/quarterly returns, annual reconciliation, e-invoicing, and notice management. We help you claim ITC accurately, avoid penalties, and align with the latest CBIC circulars.",
    benefits: [
      "Zero-penalty filing discipline",
      "ITC optimization & reconciliation",
      "E-invoice & e-way bill support",
      "Dedicated GST desk for notices",
    ],
    process: [
      { step: 1, title: "Data Collection", description: "Secure upload of sales, purchase, and bank data." },
      { step: 2, title: "Reconciliation", description: "GSTR-2B matching and variance resolution." },
      { step: 3, title: "Filing", description: "GSTR-1, 3B, and annual returns filed on schedule." },
      { step: 4, title: "Advisory", description: "Monthly compliance summary and planning inputs." },
    ],
    faqs: [
      { question: "Which GST return frequency applies to me?", answer: "It depends on turnover and scheme—our team assesses this during onboarding." },
      { question: "Can you handle GST notices?", answer: "Yes. We draft replies, represent before authorities, and manage assessments." },
    ],
    icon: "Receipt",
    relatedSlugs: ["income-tax-filing", "bookkeeping", "tax-planning"],
  },
  {
    slug: "income-tax-filing",
    title: "Income Tax Filing",
    shortDescription:
      "Accurate ITR preparation for individuals, firms, and companies with proactive tax planning.",
    description:
      "From salary and business income to capital gains and foreign assets, we prepare and file returns with documentation that stands up to scrutiny. Advance tax, TDS, and scrutiny support included.",
    benefits: [
      "Optimized deductions & exemptions",
      "Advance tax calendar management",
      "Scrutiny & reassessment support",
      "NRI & expat tax expertise",
    ],
    process: [
      { step: 1, title: "Document Review", description: "Form 16, 26AS, AIS, and investment proofs." },
      { step: 2, title: "Computation", description: "Tax computation with planning scenarios." },
      { step: 3, title: "Filing", description: "E-verified ITR filing within deadlines." },
      { step: 4, title: "Post-Filing", description: "Refund tracking and notice handling." },
    ],
    faqs: [
      { question: "Do you file for startups and LLPs?", answer: "Yes—all entity types including proprietorships, partnerships, LLPs, and companies." },
    ],
    icon: "Landmark",
    relatedSlugs: ["tax-planning", "gst-filing", "audit-assurance"],
  },
  {
    slug: "roc-compliance",
    title: "ROC Compliance",
    shortDescription:
      "End-to-end MCA filings, board resolutions, and annual compliance for private and public companies.",
    description:
      "Stay on top of AOC-4, MGT-7, DIR-3 KYC, charge registrations, and event-based filings. We maintain your compliance calendar and director obligations.",
    benefits: [
      "Automated compliance calendar",
      "Director KYC & DIN management",
      "Event-based filing support",
      "Penalty prevention framework",
    ],
    process: [
      { step: 1, title: "Health Check", description: "Review past filings and pending defaults." },
      { step: 2, title: "Documentation", description: "Financials, board minutes, and registers." },
      { step: 3, title: "Filing", description: "Timely MCA submissions with acknowledgments." },
      { step: 4, title: "Monitoring", description: "Ongoing tracker for upcoming due dates." },
    ],
    faqs: [
      { question: "What if we missed annual filings?", answer: "We assess additional fees/penalties and plan a remediation roadmap." },
    ],
    icon: "Building2",
    relatedSlugs: ["company-registration", "audit-assurance", "virtual-cfo"],
  },
  {
    slug: "company-registration",
    title: "Company Registration",
    shortDescription:
      "Incorporate Private Limited, LLP, or OPC with name approval, MOA/AOA, and bank-ready documentation.",
    description:
      "We handle SPICe+, DIN, DSC, PAN/TAN, GST registration, and post-incorporation compliance setup so you can focus on building the business.",
    benefits: [
      "7–10 day incorporation track",
      "Founder-friendly cap table advice",
      "Bank account opening support",
      "Post-incorporation compliance kit",
    ],
    process: [
      { step: 1, title: "Structure Advisory", description: "Choose the right entity for your goals." },
      { step: 2, title: "Name & DSC", description: "RUN approval and digital signatures." },
      { step: 3, title: "Incorporation", description: "SPICe+ filing and certificate issuance." },
      { step: 4, title: "Activation", description: "PAN, TAN, GST, and compliance onboarding." },
    ],
    faqs: [
      { question: "Private Limited vs LLP?", answer: "We recommend based on funding plans, liability, and tax efficiency." },
    ],
    icon: "FileCheck",
    relatedSlugs: ["startup-advisory", "roc-compliance", "msme-registration"],
  },
  {
    slug: "startup-advisory",
    title: "Startup Advisory",
    shortDescription:
      "Cap table, ESOP, funding readiness, and compliance for high-growth startups from seed to Series B.",
    description:
      "Partner with CAs who understand venture dynamics—409A-style valuations support, investor due diligence, SAFE/convertible note accounting, and DPIIT recognition.",
    benefits: [
      "Investor-ready financials",
      "ESOP & cap table structuring",
      "DPIIT & tax holiday guidance",
      "Due diligence support",
    ],
    process: [
      { step: 1, title: "Diagnostic", description: "Review legal, tax, and finance stack." },
      { step: 2, title: "Roadmap", description: "12-month compliance and reporting plan." },
      { step: 3, title: "Execution", description: "Implement systems and documentation." },
      { step: 4, title: "Fundraise Support", description: "Data room and investor queries." },
    ],
    faqs: [
      { question: "Do you work with YC-style startups?", answer: "Yes—we support SaaS, D2C, fintech, and deep-tech startups across India." },
    ],
    icon: "Rocket",
    relatedSlugs: ["virtual-cfo", "company-registration", "tax-planning"],
  },
  {
    slug: "virtual-cfo",
    title: "Virtual CFO",
    shortDescription:
      "Strategic finance leadership—budgets, MIS, cash flow, and board reporting without full-time hire cost.",
    description:
      "Get monthly MIS, KPI dashboards, fundraising models, and board-ready narratives. Ideal for SMEs and startups scaling past founder-led finance.",
    benefits: [
      "Monthly MIS & dashboards",
      "Cash flow forecasting",
      "Board & investor reporting",
      "Cost optimization insights",
    ],
    process: [
      { step: 1, title: "Discovery", description: "Understand business model and metrics." },
      { step: 2, title: "Systems", description: "Chart of accounts and reporting cadence." },
      { step: 3, title: "Delivery", description: "Monthly close and management reports." },
      { step: 4, title: "Strategy", description: "Quarterly planning and scenario analysis." },
    ],
    faqs: [
      { question: "How is Virtual CFO priced?", answer: "Tiered monthly retainers based on transaction volume and complexity." },
    ],
    icon: "LineChart",
    relatedSlugs: ["bookkeeping", "startup-advisory", "audit-assurance"],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    shortDescription:
      "Statutory, tax, and internal audits conducted with independence, rigor, and ICAI standards.",
    description:
      "Our audit practice delivers clear findings, actionable recommendations, and smooth coordination with banks, investors, and regulators.",
    benefits: [
      "ICAI-compliant audit approach",
      "Risk-based testing methodology",
      "Clear management letter",
      "Investor & lender confidence",
    ],
    process: [
      { step: 1, title: "Planning", description: "Scope, materiality, and control assessment." },
      { step: 2, title: "Fieldwork", description: "Substantive testing and walkthroughs." },
      { step: 3, title: "Reporting", description: "Draft findings and management responses." },
      { step: 4, title: "Sign-off", description: "Final audit report and filings." },
    ],
    faqs: [
      { question: "Do you audit Section 8 companies?", answer: "Yes, along with private, public, and LLP entities subject to applicability." },
    ],
    icon: "ShieldCheck",
    relatedSlugs: ["roc-compliance", "income-tax-filing", "virtual-cfo"],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    shortDescription:
      "Proactive strategies to legally optimize tax across corporate, personal, and cross-border structures.",
    description:
      "We model scenarios for salary restructuring, capital gains, mergers, and international tax—including DTAA and transfer pricing basics for growing businesses.",
    benefits: [
      "Year-round planning vs year-end rush",
      "Entity structure optimization",
      "Capital gains & ESOP planning",
      "Litigation risk minimization",
    ],
    process: [
      { step: 1, title: "Assessment", description: "Current tax position and goals." },
      { step: 2, title: "Modeling", description: "Scenario comparison with projections." },
      { step: 3, title: "Implementation", description: "Execute approved strategies." },
      { step: 4, title: "Review", description: "Quarterly check-ins and adjustments." },
    ],
    faqs: [
      { question: "Is tax planning legal?", answer: "Yes—we only advise on legitimate exemptions and structures within the Income Tax Act." },
    ],
    icon: "Calculator",
    relatedSlugs: ["income-tax-filing", "gst-filing", "startup-advisory"],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping & Accounting",
    shortDescription:
      "Accurate books on Tally, Zoho, or QuickBooks with monthly closes and audit-ready records.",
    description:
      "Outsource your entire accounting function—voucher entry, bank reconciliation, receivables/payables, and financial statement preparation.",
    benefits: [
      "Cloud accounting setup",
      "Monthly bank reconciliation",
      "Audit-ready financials",
      "Dedicated account manager",
    ],
    process: [
      { step: 1, title: "Onboarding", description: "Chart of accounts and opening balances." },
      { step: 2, title: "Processing", description: "Daily/weekly voucher processing." },
      { step: 3, title: "Close", description: "Monthly P&L and balance sheet." },
      { step: 4, title: "Reporting", description: "Management reports and insights." },
    ],
    faqs: [
      { question: "Which software do you support?", answer: "Tally Prime, Zoho Books, QuickBooks, and custom ERP integrations." },
    ],
    icon: "BookOpen",
    relatedSlugs: ["payroll-management", "virtual-cfo", "gst-filing"],
  },
  {
    slug: "payroll-management",
    title: "Payroll Management",
    shortDescription:
      "End-to-end payroll processing, PF/ESI, TDS on salary, and employee compliance.",
    description:
      "From salary structuring to payslips, Form 16, and labour law registers—we ensure your team is paid accurately and compliantly.",
    benefits: [
      "Statutory deduction accuracy",
      "Employee self-service portal ready",
      "PF/ESI/PT filing support",
      "Scalable for 5–500 employees",
    ],
    process: [
      { step: 1, title: "Setup", description: "Employee master and salary structures." },
      { step: 2, title: "Processing", description: "Monthly payroll run and approvals." },
      { step: 3, title: "Statutory", description: "Challans and returns filed on time." },
      { step: 4, title: "Year-End", description: "Form 16 and full-and-final settlements." },
    ],
    faqs: [
      { question: "Can you integrate with HRMS?", answer: "Yes—API integrations with popular HR platforms available." },
    ],
    icon: "Users",
    relatedSlugs: ["bookkeeping", "income-tax-filing", "roc-compliance"],
  },
  {
    slug: "msme-registration",
    title: "MSME / Udyam Registration",
    shortDescription:
      "Udyam registration and benefits advisory for micro, small, and medium enterprises.",
    description:
      "Register under Udyam for priority lending, tender preferences, and subsidy eligibility. We handle documentation and renewal.",
    benefits: [
      "Fast Udyam certificate",
      "Subsidy & scheme guidance",
      "Tender eligibility support",
      "Bank liaison documentation",
    ],
    process: [
      { step: 1, title: "Eligibility", description: "Investment and turnover assessment." },
      { step: 2, title: "Application", description: "Aadhaar-linked Udyam filing." },
      { step: 3, title: "Certificate", description: "Download and verification." },
      { step: 4, title: "Advisory", description: "Leverage schemes and credit guarantees." },
    ],
    faqs: [
      { question: "Is Udyam mandatory?", answer: "Voluntary but strongly recommended for MSME benefits and government tenders." },
    ],
    icon: "Factory",
    relatedSlugs: ["company-registration", "gst-filing", "startup-advisory"],
  },
  {
    slug: "trademark-registration",
    title: "Trademark Registration",
    shortDescription:
      "Protect your brand with trademark search, filing, and opposition monitoring across India.",
    description:
      "We conduct comprehensive searches, file applications with the IP Office, respond to objections, and monitor for infringements.",
    benefits: [
      "Comprehensive TM search",
      "Class selection advisory",
      "Objection & hearing support",
      "Renewal reminders",
    ],
    process: [
      { step: 1, title: "Search", description: "Knock-out and comprehensive availability search." },
      { step: 2, title: "Filing", description: "Application with correct class and description." },
      { step: 3, title: "Examination", description: "Reply to examination reports." },
      { step: 4, title: "Registration", description: "Certificate and renewal tracking." },
    ],
    faqs: [
      { question: "How long does registration take?", answer: "Typically 12–18 months barring objections; provisional protection from filing date." },
    ],
    icon: "BadgeCheck",
    relatedSlugs: ["company-registration", "startup-advisory", "msme-registration"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
