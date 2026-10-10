import type { SeoPage } from "@/lib/programmatic-seo";
import { siteConfig } from "@/lib/site-config";

/** High-intent keyword landing pages (best CA Delhi, India, near me). */
export const keywordLandingPages: SeoPage[] = [
  {
    slug: "best-ca-in-delhi",
    type: "keyword-landing",
    title: "Best CA in Delhi",
    metaTitle: "Best CA in Delhi | Chartered Accountant Pitampura & NCR",
    metaDescription: `Looking for the best CA in Delhi? ${siteConfig.name} — ICAI partners in Pitampura (NSP). GST, ITR, ROC, audit & Virtual CFO. 4.9★ rated. Book a free consultation.`,
    h1: "Best Chartered Accountant (CA) in Delhi",
    intro: `${siteConfig.name} is among Delhi's most trusted ICAI-registered CA firms for SMEs, startups, and growing companies. From our Pitampura office at Netaji Subhash Place, ${siteConfig.partners[0].name} and ${siteConfig.partners[1].name} lead GST filing, income tax, ROC compliance, and Virtual CFO services across Delhi NCR and India.`,
    keywords: [
      "best CA in Delhi",
      "best chartered accountant in Delhi",
      "top CA firm Delhi",
      "CA in Pitampura",
      "chartered accountant Delhi NCR",
      "best tax consultant Delhi",
      "GST CA Delhi",
      "CA near me Delhi",
    ],
    faqs: [
      {
        question: "Who is the best CA in Delhi for startups?",
        answer: `${siteConfig.name} supports startups with incorporation, GST registration, ROC filings, cap-table friendly accounting, and investor-ready MIS—led by partners with deep startup and audit experience.`,
      },
      {
        question: "Where is your Delhi office?",
        answer: `We are at ${siteConfig.address.full}. In-person meetings at Pitampura; video consults for clients across Delhi, Gurgaon, Noida, and pan-India.`,
      },
      {
        question: "What makes a CA firm the “best” choice in Delhi?",
        answer:
          "Look for ICAI registration, partner-led review, clear timelines, proactive compliance calendars, and responsive support on WhatsApp/email. We publish filing reminders and maintain a secure client portal for documents.",
      },
      {
        question: "Do you handle GST and income tax both?",
        answer:
          "Yes—GSTR-1/3B, annual returns, reconciliation, income tax returns (salary, business, capital gains), TDS, and notices under one relationship manager.",
      },
    ],
    sections: [
      {
        heading: "Why Delhi businesses choose us",
        content:
          "Partner-led practice since 1998, 500+ active clients, structured compliance desk, and transparent pricing for GST, tax, ROC, and audit engagements.",
      },
      {
        heading: "Areas we serve in Delhi NCR",
        content:
          "Pitampura, Rohini, Dwarka, Karol Bagh, Connaught Place, and nearby NCR cities—Noida, Gurgaon—with the same quality standards as our head office.",
      },
    ],
  },
  {
    slug: "best-chartered-accountant-india",
    type: "keyword-landing",
    title: "Best Chartered Accountant in India",
    metaTitle: "Best Chartered Accountant in India | Pan-India CA Services",
    metaDescription: `Best chartered accountant in India for GST, income tax, ROC & Virtual CFO. ${siteConfig.name} — Delhi HQ, remote clients nationwide. ICAI registered. Book consultation.`,
    h1: "Best Chartered Accountant in India",
    intro: `Businesses across India work with ${siteConfig.name} for reliable tax and compliance. While our head office is in Delhi (Pitampura), we serve Mumbai, Bangalore, Pune, Hyderabad, Chennai, Ahmedabad, Jaipur, and remote clients via secure portal, video calls, and structured document workflows—ideal when you want a best-in-class CA team without limiting yourself to one city.`,
    keywords: [
      "best CA in India",
      "best chartered accountant in India",
      "top CA firm India",
      "chartered accountant India online",
      "pan India CA services",
      "GST consultant India",
      "Virtual CFO India",
    ],
    faqs: [
      {
        question: "Can I hire your CA firm if I am outside Delhi?",
        answer:
          "Yes. Most deliverables—GST, ITR, ROC, payroll, MIS—are handled digitally. We schedule video reviews and use our client portal for secure file exchange.",
      },
      {
        question: "Which industries do you serve across India?",
        answer:
          "Trading, manufacturing, SaaS, D2C, professional services, and family businesses. We tailor compliance calendars to your entity type and state registrations.",
      },
      {
        question: "How do you compare to large national CA networks?",
        answer:
          "You get direct partner oversight, faster turnaround on queries, and a single desk for tax + ROC + advisory—without rotating junior-only teams.",
      },
    ],
    sections: [
      {
        heading: "Pan-India services",
        content:
          "GST filing, income tax, TDS, company/LLP registration, ROC/MCA annual filings, statutory audit support, internal controls, and Virtual CFO reporting.",
      },
      {
        heading: "Delhi headquarters, India reach",
        content: `Our ICAI-registered partners operate from ${siteConfig.address.city} with standardized processes for clients in every major metro and tier-2 city.`,
      },
    ],
  },
  {
    slug: "chartered-accountant-near-me",
    type: "keyword-landing",
    title: "Chartered Accountant Near Me",
    metaTitle: "CA Near Me | Chartered Accountant Pitampura Delhi",
    metaDescription: `CA near me in Delhi? ${siteConfig.name} at PP Trade Centre, Pitampura (NSP). Walk-in & video consults. GST, ITR, ROC. Call ${siteConfig.phoneDisplay}.`,
    h1: "Chartered Accountant Near Me — Pitampura, Delhi",
    intro: `Searching “CA near me” in Delhi NCR? Our office is at ${siteConfig.address.line1}, ${siteConfig.address.line2}—minutes from Netaji Subhash Place metro. ${siteConfig.name} offers same-week consultations for GST, tax returns, company compliance, and audit support, with evening slots on request.`,
    keywords: [
      "CA near me",
      "chartered accountant near me",
      "CA near me Delhi",
      "tax consultant near me",
      "GST consultant near Pitampura",
      "CA office near Netaji Subhash Place",
      "chartered accountant near Rohini",
      "CA near me Pitampura",
      "CA near me NSP",
      "ITR filing near me",
    ],
    faqs: [
      {
        question: "How do I find a CA near me in Pitampura or Rohini?",
        answer: `Visit us at ${siteConfig.address.full} or WhatsApp ${siteConfig.phoneDisplay} to book. We serve Pitampura, Rohini, Shalimar Bagh, and wider Delhi NCR.`,
      },
      {
        question: "Do you offer home or office visits?",
        answer:
          "For select engagements in Delhi NCR, partner visits can be arranged. Most clients prefer our office or video meetings for efficiency.",
      },
      {
        question: "What should I bring to a first meeting?",
        answer:
          "PAN, GSTIN (if any), last filed returns, bank statements, and incorporation documents. We will share a tailored checklist after booking.",
      },
    ],
    sections: [
      {
        heading: "Local office, national expertise",
        content:
          "Neighbourhood accessibility with the depth of a full-service CA practice—GST, direct tax, ROC, payroll, and startup advisory.",
      },
      {
        heading: "Get directions",
        content: `Open Google Maps for PP Trade Centre, Netaji Subhash Place, or call ${siteConfig.phoneDisplay} for landmark directions.`,
      },
    ],
  },
  {
    slug: "ca-in-pitampura",
    type: "keyword-landing",
    title: "CA in Pitampura",
    metaTitle: "CA in Pitampura | Chartered Accountant Near NSP Metro",
    metaDescription: `CA in Pitampura, Delhi? ${siteConfig.name} at PP Trade Centre, Netaji Subhash Place. ITR, GST, ROC & audit. Walk-in or video consult. Call ${siteConfig.phoneDisplay}.`,
    h1: "Chartered Accountant in Pitampura, Delhi",
    intro: `Looking for a CA in Pitampura? ${siteConfig.name} is an ICAI-registered firm at ${siteConfig.address.line1}, Netaji Subhash Place—inside Pitampura’s main commercial hub. ${siteConfig.partners[0].name} and ${siteConfig.partners[1].name} handle ITR filing, GST, company compliance, and bookkeeping for residents, shop owners, and companies around Pitampura, Kohat Enclave, and NSP.`,
    keywords: [
      "CA in Pitampura",
      "CA Pitampura",
      "chartered accountant Pitampura",
      "best CA in Pitampura",
      "CA firm Pitampura",
      "CA office Pitampura",
      "tax CA Pitampura",
      "CA near Pitampura metro",
      "chartered accountant in Pitampura Delhi",
    ],
    faqs: [
      {
        question: "Where can I find a CA in Pitampura?",
        answer: `Our office is at ${siteConfig.address.full}, a short walk from Netaji Subhash Place metro. WhatsApp ${siteConfig.phoneDisplay} to book a same-week slot.`,
      },
      {
        question: "What CA services do you offer in Pitampura?",
        answer:
          "Income tax / ITR filing, GST registration and returns, TDS, company and LLP registration, ROC annual filings, bookkeeping, payroll, and audit support.",
      },
      {
        question: "Do you take walk-in clients from Pitampura and Kohat Enclave?",
        answer:
          "Yes. Call or WhatsApp first so a partner can keep time for you. Many Pitampura clients also prefer evening video reviews.",
      },
    ],
    sections: [
      {
        heading: "A Pitampura CA office you can actually visit",
        content:
          "We work from PP Trade Centre in Pitampura—not a virtual address. Bring Form 16, GST invoices, or company papers and leave with a clear filing plan the same day.",
      },
      {
        heading: "Who we help in Pitampura",
        content:
          "Salaried professionals in Pitampura and Rohini, traders at NSP, Pvt Ltd / LLP companies in North-West Delhi, and family businesses that want one CA for ITR, GST, and ROC.",
      },
    ],
  },
  {
    slug: "ca-in-netaji-subhash-place",
    type: "keyword-landing",
    title: "CA in Netaji Subhash Place (NSP)",
    metaTitle: "CA in NSP | Chartered Accountant Netaji Subhash Place Delhi",
    metaDescription: `CA in NSP / Netaji Subhash Place? ${siteConfig.name} is in PP Trade Centre, Pitampura. ITR, GST, ROC. Minutes from NSP metro. Call ${siteConfig.phoneDisplay}.`,
    h1: "CA in Netaji Subhash Place (NSP), Delhi",
    intro: `Searching for a CA in NSP or a chartered accountant in Netaji Subhash Place? Our head office is inside PP Trade Centre—one of the main commercial buildings at NSP, Pitampura. ${siteConfig.name} files ITR and GST, registers companies, and manages ROC for businesses around the NSP metro, D Mall, and Pitampura ring road.`,
    keywords: [
      "CA in NSP",
      "CA in Netaji Subhash Place",
      "CA NSP Delhi",
      "chartered accountant NSP",
      "CA near NSP metro",
      "CA office Netaji Subhash Place",
      "CA PP Trade Centre",
      "chartered accountant Netaji Subhash Place",
      "best CA in NSP",
    ],
    faqs: [
      {
        question: "Is there a CA office at Netaji Subhash Place?",
        answer: `Yes. ${siteConfig.name} is at ${siteConfig.address.full}. Use NSP (Red Line / Pink Line) metro and walk to PP Trade Centre.`,
      },
      {
        question: "What does CA in NSP usually mean people need?",
        answer:
          "Most NSP searches are for ITR filing, GST returns, company incorporation, or a local accountant for monthly books. We cover all of those under one partner-led team.",
      },
      {
        question: "How do I reach your CA office from NSP metro?",
        answer:
          "Exit Netaji Subhash Place metro towards PP Trade Centre / District Centre. We are on the 7th floor (706). Call us if you need a landmark pin.",
      },
    ],
    sections: [
      {
        heading: "Why businesses at NSP choose a local CA",
        content:
          "NSP is a trading and office hub. Having a CA a few minutes from your shop or office means faster document drop-offs, quicker GST queries, and in-person ITR reviews before the deadline.",
      },
      {
        heading: "Services from our NSP office",
        content:
          "ITR-1 to ITR-4 and company returns, GSTR-1/3B, GST registration, TDS returns, private limited and LLP registration, MCA annual filings, and Virtual CFO reporting.",
      },
    ],
  },
  {
    slug: "accountant-near-me",
    type: "keyword-landing",
    title: "Accountant Near Me",
    metaTitle: "Accountant Near Me | CA Accountant Pitampura & Delhi",
    metaDescription: `Accountant near me in Delhi? ICAI CAs at Pitampura (NSP) for bookkeeping, ITR, GST and payroll. ${siteConfig.name}. Call ${siteConfig.phoneDisplay}.`,
    h1: "Accountant Near Me — Pitampura, NSP & Delhi",
    intro: `Need an accountant near me who can also sign as a CA? ${siteConfig.name} in Pitampura (Netaji Subhash Place) combines day-to-day bookkeeping with ITR filing, GST, TDS, and payroll. You get a qualified chartered accountant—not only a data-entry accountant—so numbers stay filing-ready.`,
    keywords: [
      "accountant near me",
      "accountant in Pitampura",
      "accountant in Delhi",
      "tax accountant near me",
      "accountant NSP",
      "bookkeeper near me",
      "CA accountant near me",
      "accountant near Netaji Subhash Place",
      "small business accountant Delhi",
    ],
    faqs: [
      {
        question: "What is the difference between an accountant and a CA?",
        answer:
          "An accountant maintains books. A chartered accountant can also file ITR/GST, represent you on notices, and certify financials. Our team does both from the Pitampura office.",
      },
      {
        question: "Do you offer monthly accounting for small businesses?",
        answer:
          "Yes. We set up books, bank reconciliation, GST-ready sales/purchase registers, and a monthly MIS. Pricing depends on invoice volume.",
      },
      {
        question: "Can an accountant near me also file my ITR?",
        answer:
          "Yes. The same desk that keeps your books prepares and e-verifies your income tax return, so AIS/26AS mismatches are fixed before filing.",
      },
    ],
    sections: [
      {
        heading: "Accounting services from Pitampura",
        content:
          "Bookkeeping, bank and GST reconciliation, payroll processing, TDS working, and year-end financial statements for proprietors, LLPs, and private limited companies.",
      },
      {
        heading: "Who this page is for",
        content:
          "Shop owners at NSP, professionals in Pitampura and Rohini, and Delhi founders who searched “accountant near me” and want a CA-supervised accounts team.",
      },
    ],
  },
  {
    slug: "itr-filing-near-me",
    type: "keyword-landing",
    title: "ITR Filing Near Me",
    metaTitle: "ITR Filing Near Me | Income Tax Return CA Pitampura Delhi",
    metaDescription: `ITR filing near me in Delhi? File ITR-1 to ITR-3 with CAs in Pitampura (NSP). Salary, business, capital gains. ${siteConfig.name}. Call ${siteConfig.phoneDisplay}.`,
    h1: "ITR Filing Near Me — Pitampura, NSP & Delhi",
    intro: `Searching ITR filing near me or income tax return filing near me? ${siteConfig.name} files salary, business, capital-gains, and NRI returns from our Pitampura office at Netaji Subhash Place. Bring Form 16, AIS, and investment proofs—or upload them to our portal—and we compute tax, claim eligible deductions, and e-verify the ITR.`,
    keywords: [
      "ITR filing near me",
      "income tax return filing near me",
      "ITR filing Pitampura",
      "ITR filing Delhi",
      "ITR filing NSP",
      "file ITR near me",
      "CA for ITR filing",
      "income tax filing near me",
      "ITR filing in Pitampura",
      "income tax return CA near me",
    ],
    faqs: [
      {
        question: "How do I file ITR near me in Pitampura?",
        answer: `Book a slot at ${siteConfig.address.full} or WhatsApp documents to ${siteConfig.phoneDisplay}. We map you to the correct ITR form and file after you approve the computation.`,
      },
      {
        question: "Which ITR forms do you file?",
        answer:
          "ITR-1 (Sahaj) and ITR-2 for salaried and capital-gains cases; ITR-3 and ITR-4 for business and presumptive income; company and firm returns as applicable.",
      },
      {
        question: "How fast is ITR filing near NSP?",
        answer:
          "Complete salary cases are often filed the same week. Business and capital-gains returns depend on broker statements and books being ready.",
      },
      {
        question: "Do you handle ITR notices after filing?",
        answer:
          "Yes. We reconcile AIS/26AS, respond to defective-return and scrutiny notices, and track refunds.",
      },
    ],
    sections: [
      {
        heading: "What to bring for ITR filing",
        content:
          "PAN, Form 16, Form 26AS and AIS download, bank interest certificates, capital-gains statements, home-loan interest certificate, rent receipts, and last year’s ITR if any.",
      },
      {
        heading: "ITR filing for Delhi residents and businesses",
        content:
          "We file for Pitampura, Rohini, Shalimar Bagh, and NSP clients in person, and for the rest of Delhi NCR and India over video plus our secure document portal.",
      },
    ],
  },
  {
    slug: "tax-consultant-near-me",
    type: "keyword-landing",
    title: "Tax Consultant Near Me",
    metaTitle: "Tax Consultant Near Me | Income Tax CA Pitampura Delhi",
    metaDescription: `Tax consultant near me in Delhi? ICAI CAs in Pitampura (NSP) for ITR, tax planning, TDS and notices. ${siteConfig.name}. Call ${siteConfig.phoneDisplay}.`,
    h1: "Tax Consultant Near Me in Delhi (Pitampura & NSP)",
    intro: `Need a tax consultant near me for ITR, advance tax, or a notice? ${siteConfig.name} is an ICAI firm at Netaji Subhash Place, Pitampura. We plan old vs new regime, compute advance tax, file TDS, and reply to income-tax notices—so you are not guessing at year-end.`,
    keywords: [
      "tax consultant near me",
      "tax consultant Pitampura",
      "tax consultant NSP",
      "income tax consultant near me",
      "tax advisor near me",
      "tax consultant Delhi",
      "best tax consultant Pitampura",
    ],
    faqs: [
      {
        question: "When should I hire a tax consultant near me?",
        answer:
          "Before the ITR due date, when you have capital gains or a second property, when you receive a notice, or when you start a business and need GST plus income tax together.",
      },
      {
        question: "Do you only file returns or also plan tax?",
        answer:
          "Both. We compare regimes, schedule advance tax, review HRA/80C/80D claims, and structure proprietor vs company income where it is legitimate.",
      },
    ],
    sections: [
      {
        heading: "Tax consulting from our Pitampura desk",
        content:
          "Income-tax computation, ITR filing, TDS returns, Form 15CA/CB support, notice replies, and tax planning reviews for salaried families and SMEs around NSP.",
      },
      {
        heading: "Related searches we cover",
        content:
          "Income tax consultant near me, tax advisor in Pitampura, CA for tax filing in Delhi, and tax consultant near NSP metro.",
      },
    ],
  },
  {
    slug: "gst-filing-near-me",
    type: "keyword-landing",
    title: "GST Filing Near Me",
    metaTitle: "GST Filing Near Me | GST Consultant Pitampura & NSP",
    metaDescription: `GST filing near me in Delhi? GSTR-1, GSTR-3B, registration and notices from CAs in Pitampura (NSP). ${siteConfig.name}. Call ${siteConfig.phoneDisplay}.`,
    h1: "GST Filing Near Me — Pitampura & Netaji Subhash Place",
    intro: `Looking for GST filing near me or a GST consultant near NSP? ${siteConfig.name} files GSTR-1 and GSTR-3B, matches GSTR-2B, registers new GSTINs, and replies to GST notices from our Pitampura office. Traders and service firms around Netaji Subhash Place use us as their monthly GST desk.`,
    keywords: [
      "GST filing near me",
      "GST consultant near me",
      "GST registration near me",
      "GST return filing Pitampura",
      "GST consultant NSP",
      "GST filing Delhi",
      "GSTR-1 GSTR-3B filing near me",
    ],
    faqs: [
      {
        question: "Can I get GST registration near me in Pitampura?",
        answer:
          "Yes. We prepare the application, documents, and follow-up with the GST portal. Most straightforward cases complete once documents are in order.",
      },
      {
        question: "Do you file monthly and quarterly GST returns?",
        answer:
          "Yes—regular monthly filers and QRMP quarterly filers. We set a calendar so GSTR-1/3B are not missed.",
      },
    ],
    sections: [
      {
        heading: "GST work we handle locally",
        content:
          "New GST registration, GSTR-1/3B, annual GSTR-9/9C support, e-invoicing queries, ITC reconciliation, and notice replies for Delhi GSTINs.",
      },
      {
        heading: "Why file GST with a CA at NSP",
        content:
          "NSP businesses often have high invoice volume. A nearby CA team can pick up data, fix 2B mismatches quickly, and keep ITC claims defensible.",
      },
    ],
  },
  {
    slug: "best-ca-in-pitampura",
    type: "keyword-landing",
    title: "Best CA in Pitampura",
    metaTitle: "Best CA in Pitampura | Top Chartered Accountant NSP Delhi",
    metaDescription: `Best CA in Pitampura? ${siteConfig.name} — ICAI partners at PP Trade Centre, NSP. ITR, GST, ROC, audit. 4.9★. Book a consultation at ${siteConfig.phoneDisplay}.`,
    h1: "Best CA in Pitampura, Delhi",
    intro: `If you are comparing the best CA in Pitampura, look for ICAI registration, a real office at NSP, and partner review on filings—not only a low ITR fee. ${siteConfig.name} has served Pitampura and Netaji Subhash Place clients since ${siteConfig.founded} with GST, income tax, ROC, and audit under ${siteConfig.partners[0].name} and ${siteConfig.partners[1].name}.`,
    keywords: [
      "best CA in Pitampura",
      "top CA Pitampura",
      "best chartered accountant Pitampura",
      "best CA NSP",
      "best CA near Pitampura",
      "top CA firm Pitampura Delhi",
    ],
    faqs: [
      {
        question: "How do I choose the best CA in Pitampura?",
        answer:
          "Check ICAI membership, whether partners review your return, office address you can visit, response time on WhatsApp, and whether GST, ITR, and ROC sit with one team.",
      },
      {
        question: "Are you only for Pitampura or all of North-West Delhi?",
        answer:
          "Pitampura is our base. We also work with clients in Rohini, Shalimar Bagh, Ashok Vihar, and the rest of Delhi NCR.",
      },
    ],
    sections: [
      {
        heading: "What “best CA” means in practice",
        content:
          "On-time GSTR and ITR, clean books, a named partner, and a compliance calendar. That is the standard we run from PP Trade Centre, Pitampura.",
      },
      {
        heading: "Visit before you appoint",
        content: `Come to ${siteConfig.address.full} or start on a video call. We will scope ITR, GST, or company work and share a clear fee—not a surprise bill after filing.`,
      },
    ],
  },
  {
    slug: "ca-in-rohini",
    type: "keyword-landing",
    title: "CA in Rohini",
    metaTitle: "CA in Rohini | Chartered Accountant Near Pitampura & NSP",
    metaDescription: `CA in Rohini, Delhi? Nearby ICAI office at Pitampura (NSP). ITR, GST, ROC. Easy from Rohini sectors. ${siteConfig.name}. Call ${siteConfig.phoneDisplay}.`,
    h1: "Chartered Accountant in Rohini, Delhi",
    intro: `Looking for a CA in Rohini? ${siteConfig.name} is a short drive from Rohini at PP Trade Centre, Netaji Subhash Place, Pitampura. Rohini residents and businesses use us for ITR filing, GST, company registration, and monthly accounts—with metro and road access via NSP and Outer Ring Road.`,
    keywords: [
      "CA in Rohini",
      "chartered accountant Rohini",
      "CA near Rohini",
      "CA Rohini Delhi",
      "CA in Rohini Sector",
      "ITR filing Rohini",
      "GST consultant Rohini",
    ],
    faqs: [
      {
        question: "Do you have clients from Rohini?",
        answer:
          "Yes. Many Rohini clients visit our Pitampura / NSP office or send documents on WhatsApp and the client portal.",
      },
      {
        question: "How far is your CA office from Rohini?",
        answer:
          "We are at Netaji Subhash Place, next to Pitampura—typically 10–20 minutes from most Rohini sectors depending on traffic.",
      },
    ],
    sections: [
      {
        heading: "CA services for Rohini",
        content:
          "Salary and business ITR, GST returns, TDS, startup company registration, and ROC annual compliance for Rohini-based professionals and SMEs.",
      },
      {
        heading: "Easy from Rohini sectors",
        content:
          "Reach us via NSP metro or Outer Ring Road. If you cannot travel, we complete most ITR and GST work remotely after a short video onboarding.",
      },
    ],
  },
  {
    slug: "ca-for-itr-filing",
    type: "keyword-landing",
    title: "CA for ITR Filing",
    metaTitle: "CA for ITR Filing | Hire Chartered Accountant Delhi",
    metaDescription: `Hire a CA for ITR filing in Delhi. Salary, business, capital gains, NRI. Pitampura (NSP) office. ${siteConfig.name}. Call ${siteConfig.phoneDisplay}.`,
    h1: "CA for ITR Filing in Delhi",
    intro: `Hire a CA for ITR filing when your return is more than a simple Form 16—capital gains, house property, business income, or a notice. ${siteConfig.name} prepares the computation, files the correct ITR form, and e-verifies it. Meet us in Pitampura (NSP) or share documents online.`,
    keywords: [
      "CA for ITR filing",
      "ITR CA near me",
      "hire CA for income tax return",
      "ITR filing CA Delhi",
      "chartered accountant for ITR",
      "CA to file income tax return",
    ],
    faqs: [
      {
        question: "Should I hire a CA to file ITR or use a portal myself?",
        answer:
          "Simple salary + one Form 16 can be self-filed. Use a CA if you have multiple employers, stocks, property, a business, foreign income, or last year’s mismatch.",
      },
      {
        question: "What does a CA check before filing ITR?",
        answer:
          "AIS vs 26AS vs books, correct ITR form, old vs new regime, eligible deductions, and carry-forward losses so you do not trigger a defective-return notice.",
      },
    ],
    sections: [
      {
        heading: "ITR cases we file as your CA",
        content:
          "Salaried ITR-1/2, business ITR-3/4, capital gains from shares and property, director and partner returns, and revised or belated returns.",
      },
      {
        heading: "How engagement works",
        content:
          "Share documents → we send a computation → you approve → we file and share the acknowledgment. Notices, if any, come back to the same CA desk.",
      },
    ],
  },
  {
    slug: "company-registration-near-me",
    type: "keyword-landing",
    title: "Company Registration Near Me",
    metaTitle: "Company Registration Near Me | Pvt Ltd & LLP Delhi",
    metaDescription: `Company registration near me in Delhi? Private limited and LLP from CAs in Pitampura (NSP). DSC, SPICe+, GST. ${siteConfig.name}. Call ${siteConfig.phoneDisplay}.`,
    h1: "Company Registration Near Me in Delhi",
    intro: `Searching company registration near me? ${siteConfig.name} incorporates private limited companies and LLPs from our Pitampura / NSP office. We handle DSC, DIN, name approval, SPICe+ filing, and the first GST and bank-account steps after incorporation.`,
    keywords: [
      "company registration near me",
      "private limited registration Delhi",
      "LLP registration near me",
      "company registration Pitampura",
      "company registration NSP",
      "Pvt Ltd registration near me",
      "startup company registration Delhi",
    ],
    faqs: [
      {
        question: "How long does company registration take in Delhi?",
        answer:
          "Name approval plus SPICe+ often completes in several working days once DSC, address proof, and director KYC are ready. MCA timelines vary.",
      },
      {
        question: "Do you also register GST after incorporation?",
        answer:
          "Yes. Most founders ask us to add GST registration, current-account paperwork, and a basic ROC calendar in the same engagement.",
      },
    ],
    sections: [
      {
        heading: "What we register",
        content:
          "Private limited companies, LLPs, and conversions where eligible. We also advise when a proprietorship or partnership is enough.",
      },
      {
        heading: "Meet in Pitampura or start online",
        content:
          "Directors in Delhi can visit PP Trade Centre, NSP. Outstation founders complete KYC on video and sign digitally.",
      },
    ],
  },
];
