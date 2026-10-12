export type Citation = { label: string; url: string };

export type ServiceAdvice = {
  typicalCost: string;
  alternatives: { name: string; note: string; url: string }[];
  citations: Citation[];
};

const gstGov = "https://www.gst.gov.in";
const itGov = "https://www.incometax.gov.in";
const mca = "https://www.mca.gov.in";
const icai = "https://www.icai.org";
const udyam = "https://udyamregistration.gov.in";
const ipindia = "https://ipindia.gov.in";

export const serviceAdvice: Record<string, ServiceAdvice> = {
  "gst-filing": {
    typicalCost:
      "Indicative: ₹2,000–₹6,000 per monthly GSTR cycle for small traders; ₹8,000–₹25,000 per month on a retainer when we also reconcile 2B and notices. Final fees depend on invoice volume.",
    alternatives: [
      {
        name: "Self-file on the GST portal",
        note: "No professional fee, but you remain liable for mismatches, late fees and interest under the CGST Act.",
        url: gstGov,
      },
      {
        name: "Use only accounting software",
        note: "Tally or Zoho can prepare data; a CA still reviews ITC and signs annual filings where required.",
        url: gstGov,
      },
    ],
    citations: [
      { label: "GST portal (GSTN)", url: gstGov },
      { label: "Central Board of Indirect Taxes and Customs", url: "https://www.cbic.gov.in" },
    ],
  },
  "income-tax-filing": {
    typicalCost:
      "Indicative: ₹1,500–₹4,000 for a salaried ITR-1/2; ₹5,000–₹15,000 for business or capital-gains returns; company returns quoted after a books review.",
    alternatives: [
      {
        name: "e-File on the Income Tax portal",
        note: "Free for simple salary cases if AIS/26AS already match. Complex capital gains or notices are safer with a CA.",
        url: itGov,
      },
    ],
    citations: [
      { label: "Income Tax Department e-Filing", url: itGov },
      { label: "Income-tax Act resources (Income Tax India)", url: "https://incometaxindia.gov.in" },
    ],
  },
  "roc-compliance": {
    typicalCost:
      "Indicative: ₹8,000–₹20,000 for a standard private-company annual ROC pack (AOC-4 / MGT-7), excluding ROC statutory fees and audit.",
    alternatives: [
      {
        name: "File directly on MCA V3",
        note: "Directors can upload forms themselves; additional fees apply after due dates under the Companies Act, 2013.",
        url: mca,
      },
    ],
    citations: [
      { label: "Ministry of Corporate Affairs", url: mca },
      { label: "ICAI", url: icai },
    ],
  },
  "company-registration": {
    typicalCost:
      "Indicative professional fee ₹6,000–₹15,000 for a private limited or LLP, plus government SPICe+ / stamp duty which varies by state and capital.",
    alternatives: [
      {
        name: "SPICe+ on the MCA portal",
        note: "Founders can incorporate themselves if DSC and documents are ready. Most delays come from name or address defects.",
        url: mca,
      },
    ],
    citations: [{ label: "MCA — Incorporate a company", url: mca }],
  },
  "startup-advisory": {
    typicalCost:
      "Indicative: project retainers from ₹25,000 for a compliance diagnostic; ongoing startup CA desks from ₹15,000 per month.",
    alternatives: [
      {
        name: "In-house finance hire",
        note: "A full-time accountant costs more than a CA retainer at seed stage but may be better after a large Series A.",
        url: icai,
      },
    ],
    citations: [
      { label: "DPIIT / Startup India", url: "https://www.startupindia.gov.in" },
      { label: "ICAI", url: icai },
    ],
  },
  "virtual-cfo": {
    typicalCost:
      "Indicative monthly retainers ₹25,000–₹75,000 depending on entity count, MIS depth and board-pack frequency. Not a substitute for a statutory auditor.",
    alternatives: [
      {
        name: "Full-time CFO",
        note: "Typically ₹30 lakh+ CTC in metros. Better once finance is a daily operating function.",
        url: icai,
      },
    ],
    citations: [{ label: "ICAI", url: icai }],
  },
  "audit-assurance": {
    typicalCost:
      "Statutory audit fees are set after a risk assessment and must stay consistent with ICAI independence and fee guidelines. We quote after reviewing turnover and controls.",
    alternatives: [
      {
        name: "Another ICAI firm",
        note: "You may appoint any practicing CA firm. Rotation and independence rules still apply.",
        url: icai,
      },
    ],
    citations: [
      { label: "ICAI auditing standards", url: icai },
      { label: "MCA", url: mca },
    ],
  },
  "tax-planning": {
    typicalCost:
      "Indicative planning memos from ₹7,500; year-round retainers bundled with ITR from ₹12,000. We only use positions supportable under the Income-tax Act.",
    alternatives: [
      {
        name: "Self-assess on the Tax Department tools",
        note: "Regime calculators help salaried people; they do not replace advice on capital gains, DTAA or notices.",
        url: itGov,
      },
    ],
    citations: [
      { label: "Income Tax Department", url: itGov },
      { label: "ICAI", url: icai },
    ],
  },
  bookkeeping: {
    typicalCost:
      "Indicative ₹5,000–₹18,000 per month for SME books on Tally or Zoho, based on voucher volume.",
    alternatives: [
      {
        name: "In-house data entry",
        note: "Cheaper monthly cash cost; a CA still needs to review GST and year-end financials.",
        url: icai,
      },
    ],
    citations: [{ label: "ICAI", url: icai }],
  },
  "payroll-management": {
    typicalCost:
      "Indicative ₹150–₹400 per employee per month plus PF/ESI/PT filings. Statutory contributions are extra and go to the government.",
    alternatives: [
      {
        name: "EPFO / ESIC employer portals",
        note: "You can file challans yourself. Errors in wage definitions still attract interest and damages.",
        url: "https://www.epfindia.gov.in",
      },
    ],
    citations: [
      { label: "EPFO", url: "https://www.epfindia.gov.in" },
      { label: "ESIC", url: "https://www.esic.gov.in" },
    ],
  },
  "msme-registration": {
    typicalCost:
      "Udyam registration itself is free on the government portal. Our advisory and documentation support is typically ₹1,500–₹4,000 when you want a checked filing.",
    alternatives: [
      {
        name: "Self-register on Udyam",
        note: "Aadhaar-based, no government fee. Classification still depends on investment and turnover rules.",
        url: udyam,
      },
    ],
    citations: [{ label: "Udyam Registration", url: udyam }],
  },
  "trademark-registration": {
    typicalCost:
      "Professional fee typically ₹4,000–₹10,000 per class plus government TM filing fees (higher for companies than individuals/startups).",
    alternatives: [
      {
        name: "File on IP India",
        note: "You can file Form TM-A yourself. Search quality and class selection drive most objections.",
        url: ipindia,
      },
    ],
    citations: [{ label: "Intellectual Property India", url: ipindia }],
  },
};

export function getServiceAdvice(slug: string): ServiceAdvice | undefined {
  return serviceAdvice[slug];
}
