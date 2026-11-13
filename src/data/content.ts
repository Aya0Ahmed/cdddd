import heroBoardroomImg from '../assets/images/hero_boardroom_nile_1794562734507.jpg';
import legalContractsImg from '../assets/images/legal_contracts_advisory_1794562717929.jpg';
import financialResearchImg from '../assets/images/financial_audit_research_1794562718440.jpg';
import executiveLoungeImg from '../assets/images/executive_lounge_clean_1794562733965.jpg';
import cairoSkylineImg from '../assets/images/cairo_skyline_architecture_1794563295603.jpg';
import corporateLicensingImg from '../assets/images/corporate_licensing_permits_1794563295569.jpg';
import familyEstateImg from '../assets/images/family_estate_counsel_1794563295749.jpg';
import maBoardroomImg from '../assets/images/ma_boardroom_deal_1794563296777.jpg';
import securityClearanceImg from '../assets/images/security_clearance_egypt_1794563298022.jpg';
import executiveTeamImg from '../assets/images/executive_team_editorial_1794563297126.jpg';

import type {
  CreatorProfile,
  DisciplineId,
  LocalizedText,
  ServiceItem,
  SpecialistRole,
} from '../types';

export const ASSETS = {
  logo: '/assets/aistudio/WhatsApp_Image_2026-11-10_at_12.21.13_PM_f3acc9e4.jpeg',
  heroBoardroom: heroBoardroomImg,
  legalContracts: legalContractsImg,
  financialResearch: financialResearchImg,
  executiveLounge: executiveLoungeImg,
  cairoSkyline: cairoSkylineImg,
  corporateLicensing: corporateLicensingImg,
  familyEstate: familyEstateImg,
  maBoardroom: maBoardroomImg,
  securityClearance: securityClearanceImg,
  executiveTeam: executiveTeamImg,
} as const;

export const DISCIPLINE_LABELS: Record<DisciplineId | 'all', LocalizedText> = {
  all: { ar: 'جميع التخصصات', en: 'All Disciplines' },
  legal: { ar: 'الخدمات القانونية', en: 'Legal Counsel' },
  accounting: { ar: 'الخدمات المحاسبية', en: 'Accounting & Audit' },
  research: { ar: 'الأبحاث والتراخيص', en: 'Research & Regulatory' },
};

export interface EnrichedSpecialistRole extends SpecialistRole {
  image: string;
  imageAlt: LocalizedText;
}

export const SPECIALIST_ROLES: EnrichedSpecialistRole[] = [
  {
    id: 'legal',
    title: { ar: 'محامون متخصصون', en: 'Lawyers' },
    pluralTitle: { ar: 'اطلب محامياً', en: 'Request Lawyers' },
    subtitle: {
      ar: 'صياغة العقود · الفيديك · التراخيص · قانون الأسرة · الدمج والاستحواذ',
      en: 'Contracts · FIDIC · Licensing · Family Law · M&A Advisory',
    },
    description: {
      ar: 'فريق قانوني متكامل يغطي صياغة ومراجعة عقود المقاولات والفيديك، نقل الملكية العقارية، العقود الإدارية، قضايا الأسرة والميراث، وصفقات الاستحواذ والاندماج.',
      en: 'Dedicated legal counsel handling construction & FIDIC contracts, real estate title transfers, administrative agreements, family & estate matters, and corporate M&A transactions.',
    },
    image: legalContractsImg,
    imageAlt: {
      ar: 'عقود الفيديك والصياغة القانونية المتخصصة',
      en: 'FIDIC legal contract documentation and engineering blueprints',
    },
    capabilities: [
      { ar: 'صياغة العقود الهندسية والعقارية والإدارية باللغتين', en: 'Bilingual drafting of construction, real estate & administrative contracts' },
      { ar: 'التمثيل القانوني أمام الجهات الإدارية وهيئات الاستثمار', en: 'Legal representation before regulatory & investment authorities' },
      { ar: 'إدارة ملفات المواريث، الوصايا، والأحوال الشخصية', en: 'Estate settlement, wills, and personal status proceedings' },
    ],
    typicalDeliverables: [
      { ar: 'مسودة عقد محكمة الصياغة', en: 'Enforceable Contract Draft' },
      { ar: 'مذكرة فحص قانوني نافي للجهالة', en: 'Legal Due Diligence Memo' },
      { ar: 'توثيق وشهر عقاري رسمي', en: 'Official Notarization & Registration' },
    ],
  },
  {
    id: 'accounting',
    title: { ar: 'محاسبون ومراجعون', en: 'Accountants' },
    pluralTitle: { ar: 'اطلب محاسباً', en: 'Request Accountants' },
    subtitle: {
      ar: 'القوائم المالية · إعادة الهيكلة المالية · التقييم والضرائب',
      en: 'Financial Statements · Restructuring · Valuation & Tax',
    },
    description: {
      ar: 'محاسبون قانونيون وخبراء ماليون لإعداد القوائم المالية المعتمدة، تقييم الشركات قبل الاستحواذ والاندماج، وإعادة هيكلة الأداء المالي وفق المعايير المصرية والدولية.',
      en: 'Certified public accountants preparing compliant financial statements, M&A corporate valuations, and financial performance restructuring under EAS and IFRS.',
    },
    image: financialResearchImg,
    imageAlt: {
      ar: 'مكتب إعداد القوائم المالية والمراجعة المحاسبية',
      en: 'Corporate financial statements and accounting advisory workspace',
    },
    capabilities: [
      { ar: 'إعداد واعتماد القوائم المالية السنوية والدورية', en: 'Preparation of annual and interim financial statements' },
      { ar: 'الفحص المالي النافي للجهالة وإعادة الهيكلة', en: 'Financial due diligence and turnaround restructuring' },
      { ar: 'تخطيط الهياكل الضريبية والتدفقات النقدية للشركات', en: 'Corporate tax structuring and cash-flow architecture' },
    ],
    typicalDeliverables: [
      { ar: 'ميزانية عمومية وقائمة دخل معتمدة', en: 'Certified Balance Sheet & Income Statement' },
      { ar: 'تقرير تقييم مالي وهيكلة', en: 'Valuation & Restructuring Report' },
      { ar: 'خطة توافق ضريبي ومحاسبي', en: 'Tax & Accounting Compliance Plan' },
    ],
  },
  {
    id: 'research',
    title: { ar: 'باحثون وخبراء إجرائيون', en: 'Researchers' },
    pluralTitle: { ar: 'اطلب باحثاً', en: 'Request Researchers' },
    subtitle: {
      ar: 'الموافقات الأمنية · التعامل مع الهيئات · دراسات التراخيص والجدوى',
      en: 'Security Clearances · Authority Liaison · Regulatory Research',
    },
    description: {
      ar: 'باحثون ميدانيون وتنظيميون لإعداد ملفات التراخيص للمباني والشركات، متابعة الإجراءات مع الهيئات الحكومية، واستيفاء الموافقات الأمنية للأنشطة في مصر بدقة وسرعة.',
      en: 'Regulatory and field researchers preparing corporate & building permit dossiers, coordinating directly with Egyptian authorities, and securing business activity security clearances.',
    },
    image: securityClearanceImg,
    imageAlt: {
      ar: 'مجمع الهيئات الإدارية والتنظيمية في مصر',
      en: 'Contemporary Egyptian regulatory authority facade in New Cairo',
    },
    capabilities: [
      { ar: 'البحث التنظيمي وتحديد الاشتراطات لكل نشاط اقتصادي', en: 'Regulatory mapping and licensing requirements per activity' },
      { ar: 'إعداد ومتابعة ملفات الموافقات الأمنية داخل مصر', en: 'Security clearance dossier preparation and tracking in Egypt' },
      { ar: 'دراسات السوق والجدوى التنظيمية للمشروعات الجديدة', en: 'Market feasibility and regulatory risk intelligence' },
    ],
    typicalDeliverables: [
      { ar: 'خارطة التراخيص والموافقات المطلوبة', en: 'Licensing & Clearance Roadmap' },
      { ar: 'ملف استيفاء أمني متكامل', en: 'Complete Security Vetting Dossier' },
      { ar: 'تقرير بحثي وتشريعي مخصص', en: 'Custom Regulatory & Market Brief' },
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'contract-drafting',
    slug: 'contract-drafting',
    indexNumber: '01',
    discipline: 'legal',
    secondaryDisciplines: ['research'],
    title: {
      ar: 'صياغة العقود والاتفاقيات المتخصصة',
      en: 'Specialized Contract Drafting & Review',
    },
    shortTagline: {
      ar: 'المقاولات · نقل الملكية العقارية · تسليم الميراث · الفيديك · العقود الإدارية',
      en: 'Construction · Real Estate Transfer · Inheritance · FIDIC · Administrative',
    },
    summary: {
      ar: 'صياغة ومراجعة محكمة لكافة العقود المدنية والإنشائية والإدارية لحماية الحقوق وتقليل مخاطر النزاعات والتحكيم.',
      en: 'Precision drafting and negotiation of civil, construction, real estate, and administrative contracts engineered to prevent disputes.',
    },
    detailedExplanation: {
      ar: 'في سي دي للاستشارات، نتعامل مع العقد بوصفه وثيقة هندسية ومالية وقانونية متكاملة. يتولى فريق المحامين والباحثين لدينا دراسة طبيعة المشروع أو التصرف العقاري أو التعاقد الحكومي، وصياغة بنود واضحة تضمن التوازن التعاقدي وآليات التسوية وحماية الأصول في مصر والمنطقة.',
      en: 'At CD Consulting, every contract is structured as a unified legal, financial, and operational instrument. Our lawyers and regulatory researchers analyze each construction project, property transfer, or public tender to craft enforceable clauses protecting assets and timelines.',
    },
    image: legalContractsImg,
    imageAlt: {
      ar: 'وثائق ومخططات عقود الفيديك وصياغة العقود القانونية',
      en: 'FIDIC contract binders and architectural blueprints on a dark stone desk',
    },
    subScopes: [
      {
        id: 'construction',
        title: { ar: 'عقود المقاولات والإنشاءات', en: 'Construction & Contracting Agreements' },
        description: {
          ar: 'تنظيم التزامات المالك والمقاول العام ومقاولي الباطن، الجداول الزمنية، غرامات التأخير، وشروط الاستلام الابتدائي والنهائي.',
          en: 'Structuring employer, main contractor, and subcontractor obligations, milestones, liquidated damages, and handover protocols.',
        },
      },
      {
        id: 'real-estate-transfer',
        title: { ar: 'عقود نقل الملكية على العقار', en: 'Real Estate Title Transfer Contracts' },
        description: {
          ar: 'فحص تسلسل الملكية، مراجعة التراخيص والرسوم، وصياغة عقود البيع الابتدائية والنهائية وإجراءات الشهر العقاري.',
          en: 'Chain-of-title verification, lien clearance, and drafting preliminary/final sale deeds through official notarization.',
        },
      },
      {
        id: 'inheritance-delivery',
        title: { ar: 'عقود تسليم وقسمة الميراث', en: 'Inheritance Delivery & Partition Deeds' },
        description: {
          ar: 'تحرير عقود القسمة الرضائية وتسليم الحصص الميراثية العقارية والمالية وتوثيقها بما يمنع النزاعات المستقبلية بين الورثة.',
          en: 'Drafting amicable estate partition and asset delivery agreements among heirs with binding registration.',
        },
      },
      {
        id: 'fidic',
        title: { ar: 'عقود الفيديك (FIDIC)', en: 'FIDIC Standard Construction Contracts' },
        description: {
          ar: 'إعداد وتعديل الشروط الخاصة لعقود الفيديك (الكتاب الأحمر والأصفر والفضي) وإدارة المطالبات الهندسية وأوامر التغيير.',
          en: 'Tailoring Particular Conditions for Red, Yellow, and Silver Books, variation orders, Engineer determinations, and DAB claims.',
        },
      },
      {
        id: 'administrative',
        title: { ar: 'العقود الإدارية والتوريدات الحكومية', en: 'Administrative & Public Procurement Contracts' },
        description: {
          ar: 'توافق كامل مع قانون التعاقدات العامة، مراجعة كراسات الشروط، الضمانات البنكية، وحقوق التوازن المالي للعقد الإداري.',
          en: 'Full compliance with public procurement law, tender terms review, bank guarantees, and administrative equilibrium protections.',
        },
      },
    ],
    deliverables: [
      { ar: 'نسخ تعاقدية ثنائية اللغة (عربي / إنجليزي)', en: 'Bilingual Execution-Ready Contract Editions' },
      { ar: 'مذكرة تقييم المخاطر والبنود الحاكمة', en: 'Risk Matrix & Key Clause Memorandum' },
      { ar: 'دعم جلسات التفاوض والتوثيق الرسمي', en: 'Negotiation Support & Official Notarization' },
    ],
    assignedSpecialists: ['legal', 'research'],
    estimatedTimeline: { ar: '3 إلى 10 أيام عمل حسب نطاق العقد', en: '3–10 business days depending on scope' },
    jurisdictionNote: { ar: 'القانون المدني والتجاري المصري · معايير FIDIC الدولية', en: 'Egyptian Civil & Commercial Law · International FIDIC' },
  },
  {
    id: 'corporate-building-licensing',
    slug: 'corporate-building-licensing',
    indexNumber: '02',
    discipline: 'research',
    secondaryDisciplines: ['legal'],
    title: {
      ar: 'التراخيص للشركات والمباني والتعامل مع الهيئات',
      en: 'Corporate & Building Licensing & Authority Liaison',
    },
    shortTagline: {
      ar: 'تراخيص الأنشطة التجارية والصناعية · تراخيص البناء · التمثيل أمام الهيئات',
      en: 'Commercial & Industrial Permits · Building Licenses · Authority Representation',
    },
    summary: {
      ar: 'تأسيس واستخراج كافة التراخيص التشغيلية للشركات والمباني وإدارة التعامل المباشر مع الهيئات والوزارات المختصة.',
      en: 'End-to-end corporate activity licensing, building permit acquisition, and direct coordination with Egyptian regulatory authorities.',
    },
    detailedExplanation: {
      ar: 'تمثل التعقيدات الإجرائية أمام الهيئات الحكومية أحد أكبر تحديات الاستثمار والتوسع. يتولى الباحثون والمستشارون القانونيون في سي دي للاستشارات تجهيز الملفات الفنية والقانونية، استيفاء الموافقات المسبقة، ومتابعة الإصدار الفعلي للتراخيص نيابة عن العميل.',
      en: 'Navigating multi-agency licensing delays capital deployment. Our researchers and legal counsel manage technical dossier compilation, authority submissions, and on-ground follow-ups until final permit issuance.',
    },
    image: corporateLicensingImg,
    imageAlt: {
      ar: 'مخططات هندسية وملفات تراخيص المباني والشركات',
      en: 'Architectural blueprints and official corporate permit files on walnut table',
    },
    subScopes: [
      {
        id: 'company-licensing',
        title: { ar: 'تراخيص مزاولة النشاط للشركات', en: 'Corporate Operating & Industrial Licenses' },
        description: {
          ar: 'استخراج التراخيص من الهيئة العامة للاستثمار، هيئة التنمية الصناعية، السجل التجاري، والجهات القطاعية.',
          en: 'Permits via GAFI, Industrial Development Authority (IDA), Commercial Registry, and sector regulators.',
        },
      },
      {
        id: 'building-permits',
        title: { ar: 'تراخيص المباني والمنشآت', en: 'Building & Facility Construction Permits' },
        description: {
          ar: 'استيفاء الاشتراطات البنائية، موافقات الأحياء وهيئة المجتمعات العمرانية، والحماية المدنية والبيئة.',
          en: 'Building code approvals, NUCA/municipality permits, civil defense, and environmental clearance coordination.',
        },
      },
      {
        id: 'authority-liaison',
        title: { ar: 'التعامل المباشر مع الهيئات الحكومية', en: 'Direct Regulatory & Ministry Liaison' },
        description: {
          ar: 'متابعة التظلمات الإدارية، تجديد السجلات والموافقات الدورية، وتخليص المعاملات أمام الوزارات المختصة.',
          en: 'Handling regulatory filings, periodic renewals, administrative petitions, and ministerial coordination.',
        },
      },
    ],
    deliverables: [
      { ar: 'ملف اشتراطات وفحص مسبق للموقع أو النشاط', en: 'Pre-Filing Compliance & Site Audit' },
      { ar: 'إدارة كاملة للمعاملات والتوكيلات الرسمية', en: 'Full Representation & Filing Management' },
      { ar: 'تسليم الرخصة النهائية وسجل التجديدات', en: 'Final Permit Delivery & Renewal Calendar' },
    ],
    assignedSpecialists: ['research', 'legal'],
    estimatedTimeline: { ar: 'وفق الجدول التنظيمي لكل هيئة (متابعة أسبوعية)', en: 'Per authority SLA with weekly progress reports' },
    jurisdictionNote: { ar: 'هيئة الاستثمار · التنمية الصناعية · المجتمعات العمرانية', en: 'GAFI · IDA · NUCA & Local Municipalities' },
  },
  {
    id: 'family-law',
    slug: 'family-law',
    indexNumber: '03',
    discipline: 'legal',
    title: {
      ar: 'قانون الأسرة والأحوال الشخصية',
      en: 'Family Law, Estates & Personal Status',
    },
    shortTagline: {
      ar: 'عقود الزواج · قضايا الطلاق والتسويات · الميراث · تحرير الوصايا',
      en: 'Marriage Contracts · Divorce & Settlements · Inheritance · Wills',
    },
    summary: {
      ar: 'استشارات وتمثيل قانوني يحفظ الخصوصية الأسرية في ملفات الزواج، الطلاق، حصر وتوزيع الميراث، وصياغة الوصايا الشرعية والقانونية.',
      en: 'Discreet, structured legal counsel for marriage documentation, divorce settlements, inheritance administration, and legally binding wills.',
    },
    detailedExplanation: {
      ar: 'تحتاج قضايا الأسرة والمواريث إلى حساسية خاصة ودقة قانونية تمنع النزاعات الممتدة. نقدم معالجة متكاملة لعقود الزواج (بما يشمل زواج الأجانب)، التسويات الودية أو القضائية للطلاق، إعلامات الوراثة وقسمة التركات المعقدة، وتوثيق الوصايا وفق القانون المصري.',
      en: 'Family and estate matters require confidentiality alongside strict legal precision. We handle domestic and cross-border marriage contracts, amicable or contested divorce settlements, succession certificates, estate distribution, and notarized wills.',
    },
    image: familyEstateImg,
    imageAlt: {
      ar: 'مكتبة قانونية خاصة بوثائق الأحوال الشخصية والمواريث والوصايا',
      en: 'Warm private legal library for family law, estate deeds, and wills',
    },
    subScopes: [
      {
        id: 'marriage',
        title: { ar: 'عقود الزواج وتوثيق زواج الأجانب', en: 'Marriage Contracts & Foreigner Registration' },
        description: {
          ar: 'صياغة الشروط الخاصة بعقود الزواج واستيفاء إجراءات توثيق زواج غير المصريين بوزارة العدل.',
          en: 'Pre-nuptial/marriage terms drafting and Ministry of Justice legalization for international couples.',
        },
      },
      {
        id: 'divorce',
        title: { ar: 'الطلاق والتسويات الودية والحقوق المالية', en: 'Divorce, Settlements & Financial Rights' },
        description: {
          ar: 'صياغة اتفاقيات الإبراء والنفقة والحضانة والتمثيل أمام محاكم الأسرة بأقصى درجات السرية.',
          en: 'Structuring settlement agreements, alimony, custody arrangements, and discreet court representation.',
        },
      },
      {
        id: 'inheritance-wills',
        title: { ar: 'حصر الميراث وتنفيذ الوصايا', en: 'Inheritance Administration & Wills' },
        description: {
          ar: 'استخراج إعلام الوراثة، جرد الأصول والتركات، تنفيذ الوصايا ضمن الحدود القانونية، وتوزيع الأنصبة.',
          en: 'Succession certificates, asset inventory, statutory will drafting, and equitable distribution among heirs.',
        },
      },
    ],
    deliverables: [
      { ar: 'تقدير وضع قانوني سري وشامل للأسرة', en: 'Confidential Family Legal Assessment' },
      { ar: 'وثائق موثقة وشهادات رسمية معتمدة', en: 'Notarized Contracts & Official Certificates' },
      { ar: 'تمثيل كامل أمام مكاتب التوثيق والمحاكم', en: 'Full Representation in Courts & Notaries' },
    ],
    assignedSpecialists: ['legal'],
    estimatedTimeline: { ar: 'أسبوع إلى 6 أسابيع حسب الإجراء والتوثيق', en: '1–6 weeks depending on registration path' },
    jurisdictionNote: { ar: 'محاكم الأسرة المصرية · مصلحة الشهر العقاري والتوثيق', en: 'Egyptian Family Courts · Ministry of Justice' },
  },
  {
    id: 'ma-restructuring',
    slug: 'ma-restructuring',
    indexNumber: '04',
    discipline: 'accounting',
    secondaryDisciplines: ['legal', 'research'],
    title: {
      ar: 'الاستحواذ والاندماج وإعادة هيكلة الشركات',
      en: 'Mergers, Acquisitions & Corporate Restructuring',
    },
    shortTagline: {
      ar: 'الفحص النافي للجهالة · هيكلة الصفقات · تقييم الأصول · رفع كفاءة الأداء',
      en: 'Due Diligence · Deal Structuring · Valuation · Turnaround Performance',
    },
    summary: {
      ar: 'إدارة متكاملة لصفقات الدمج والاستحواذ وإعادة الهيكلة القانونية والمالية والتشغيلية لتعظيم قيمة الشركات.',
      en: 'Integrated legal, financial, and operational advisory for M&A transactions and corporate performance turnaround.',
    },
    detailedExplanation: {
      ar: 'هذا المسار يجسد تكامل سي دي للاستشارات بين المحامي والمحاسب والباحث. نقوم بإجراء الفحص المالي والقانوني النافي للجهالة، تقييم الشركة المستهدفة، صياغة اتفاقيات المساهمين وشراء الحصص، ثم تنفيذ خطط إعادة الهيكلة المالية والإدارية لضمان استدامة الربحية.',
      en: 'This practice unites our lawyers, accountants, and researchers in one transaction team. We execute financial and legal due diligence, value target entities, draft Share Purchase Agreements (SPAs), and implement post-merger or turnaround restructuring plans.',
    },
    image: maBoardroomImg,
    imageAlt: {
      ar: 'قاعة استراتيجية لصفقات الاستحواذ والاندماج وإعادة الهيكلة',
      en: 'Corporate M&A negotiation boardroom with valuation binders',
    },
    subScopes: [
      {
        id: 'ma-due-diligence',
        title: { ar: 'الفحص القانوني والمالي النافي للجهالة', en: 'Legal & Financial Due Diligence' },
        description: {
          ar: 'كشف الالتزامات الخفية، العقود الجوهرية، الموقف الضريبي والقضائي قبل إتمام الصفقة.',
          en: 'Uncovering hidden liabilities, material contracts, tax exposure, and litigation risks pre-closing.',
        },
      },
      {
        id: 'deal-execution',
        title: { ar: 'هيكلة وتنفيذ صفقات الاستحواذ والاندماج', en: 'M&A Structuring & Closing Execution' },
        description: {
          ar: 'إعداد مذكرات التفاهم، عقود نقل الحصص، وموافقات جهاز حماية المنافسة وهيئة الاستثمار.',
          en: 'Term sheets, SPAs, shareholder agreements, ECA competition clearances, and GAFI share transfers.',
        },
      },
      {
        id: 'corporate-restructuring',
        title: { ar: 'إعادة هيكلة أداء الشركات والحوكمة', en: 'Corporate Performance & Governance Restructuring' },
        description: {
          ar: 'إعادة جدولة الالتزامات، إصلاح هيكل التكاليف والربحية، وتحديث مصفوفة الصلاحيات واللوائح الداخلية.',
          en: 'Debt and cost-base restructuring, margin recovery plans, and corporate governance bylaws.',
        },
      },
    ],
    deliverables: [
      { ar: 'تقرير فحص نافي للجهالة متكامل (قانوني + مالي)', en: 'Integrated Legal & Financial DD Report' },
      { ar: 'اتفاقيات الاستحواذ ونقل الملكية والدمج', en: 'SPA, Merger Plan & Shareholder Agreements' },
      { ar: 'خارطة إعادة هيكلة ربع سنوية قابلة للقياس', en: 'Measurable Quarterly Restructuring Roadmap' },
    ],
    assignedSpecialists: ['accounting', 'legal', 'research'],
    estimatedTimeline: { ar: '4 إلى 12 أسبوعاً حسب حجم الصفقة', en: '4–12 weeks depending on transaction complexity' },
    jurisdictionNote: { ar: 'قانون الشركات والاستثمار · جهاز حماية المنافسة', en: 'Egyptian Corporate Law · Competition Authority (ECA)' },
  },
  {
    id: 'financial-statements',
    slug: 'financial-statements',
    indexNumber: '05',
    discipline: 'accounting',
    title: {
      ar: 'إعداد القوائم المالية والتقارير المحاسبية',
      en: 'Financial Statements Preparation & Reporting',
    },
    shortTagline: {
      ar: 'المركز المالي · قائمة الدخل · التدفقات النقدية · التوافق الضريبي والمعياري',
      en: 'Balance Sheet · Income Statement · Cash Flows · EAS & IFRS Alignment',
    },
    summary: {
      ar: 'إعداد دقيق للقوائم المالية الدورية والسنوية وفق معايير المحاسبة المصرية والدولية لدعم القرار الإداري والتمويل البنكي والالتزام الضريبي.',
      en: 'Rigorous preparation of periodic and annual financial statements aligned with Egyptian Accounting Standards (EAS) and IFRS.',
    },
    detailedExplanation: {
      ar: 'القوائم المالية الدقيقة هي لغة الثقة أمام البنوك والمستثمرين ومصلحة الضرائب. يعمل محاسبونا على مراجعة القيود وموازين المراجعة، معالجة الإهلاك والمخصصات، وإصدار قوائم المركز المالي والدخل والتدفقات النقدية والإيضاحات المتممة جاهزة للمراجعة والاعتماد.',
      en: 'Reliable financial reporting underpins bank credit, investor confidence, and tax compliance. Our accountants reconcile trial balances, verify accruals and depreciation schedules, and compile complete financial statement packages ready for statutory audit.',
    },
    image: financialResearchImg,
    imageAlt: {
      ar: 'بيئة عمل محاسبية لإعداد القوائم المالية والتقارير التحليلية',
      en: 'Modern corporate accounting workspace with bound financial statement books',
    },
    subScopes: [
      {
        id: 'statutory-statements',
        title: { ar: 'إعداد القوائم المالية الختامية', en: 'Annual Statutory Financial Statements' },
        description: {
          ar: 'قائمة المركز المالي، الدخل الشامل، التغير في حقوق الملكية، التدفقات النقدية، والإيضاحات المتممة.',
          en: 'Balance sheet, comprehensive income, equity changes, cash flow statement, and full disclosure notes.',
        },
      },
      {
        id: 'interim-management',
        title: { ar: 'التقارير المالية الإدارية والربع سنوية', en: 'Quarterly & Management Financial Packs' },
        description: {
          ar: 'تحليل مؤشرات السيولة والربحية ورأس المال العامل لمساعدة مجالس الإدارة على اتخاذ القرار.',
          en: 'Liquidity, margin, and working-capital analysis packs tailored for executive board decisions.',
        },
      },
      {
        id: 'eas-ifrs-alignment',
        title: { ar: 'التوافق مع المعايير المصرية و IFRS', en: 'EAS & IFRS Standards Reconciliation' },
        description: {
          ar: 'تسوية الفروق المحاسبية وتحويل القوائم لتناسب متطلبات التمويل أو الشركاء الدوليين.',
          en: 'Accounting policy alignment and conversions for international partners and banking facilities.',
        },
      },
    ],
    deliverables: [
      { ar: 'حزمة قوائم مالية كاملة باللغتين العربية والإنجليزية', en: 'Complete Bilingual Financial Statement Pack' },
      { ar: 'ملف إقفال وتسويات ميزان المراجعة', en: 'Reconciled Trial Balance & Closing File' },
      { ar: 'ملخص تنفيذي للأداء المالي والنسب الحرجة', en: 'Executive Financial Ratios & Health Summary' },
    ],
    assignedSpecialists: ['accounting'],
    estimatedTimeline: { ar: '5 إلى 15 يوم عمل حسب حجم القيود', en: '5–15 business days based on ledger volume' },
    jurisdictionNote: { ar: 'معايير المحاسبة المصرية (EAS) · المعايير الدولية (IFRS)', en: 'Egyptian Accounting Standards (EAS) · IFRS' },
  },
  {
    id: 'security-clearances',
    slug: 'security-clearances',
    indexNumber: '06',
    discipline: 'research',
    secondaryDisciplines: ['legal'],
    title: {
      ar: 'الحصول على الموافقات الأمنية للأنشطة في مصر',
      en: 'Security Clearances for Business Activities in Egypt',
    },
    shortTagline: {
      ar: 'تراخيص الأنشطة الحساسة · الشركاء الأجانب · الموافقات التشغيلية والسيادية',
      en: 'Regulated Activities · Foreign Partners · Operational Security Approvals',
    },
    summary: {
      ar: 'إعداد متكامل لملفات الفحص الأمني واستيفاء المستندات ومتابعة إصدار الموافقات الأمنية المطلوبة للأنشطة والشركات والأفراد في مصر.',
      en: 'End-to-end preparation, compliance verification, and follow-up for statutory security approvals required for regulated entities and foreign investors in Egypt.',
    },
    detailedExplanation: {
      ar: 'تتطلب عدة قطاعات وأنشطة استثمارية وشركات ذات مساهمين أو مديرين أجانب استيفاء موافقات أمنية مسبقة أو لاحقة في مصر. يقوم فريق الباحثين والمستشارين القانونيين لدينا بفحص المستندات الثبوتية، تنسيق الاستمارات الرسمية بدقة، ومتابعة المسار الإجرائي حتى صدور الموافقة النهائية دون تعطيل لنشاط الشركة.',
      en: 'Specific commercial sectors, strategic facilities, and companies with foreign shareholders or directors require statutory security clearances in Egypt. Our specialized researchers and legal team verify documentation, structure official applications accurately, and track approvals through completion.',
    },
    image: securityClearanceImg,
    imageAlt: {
      ar: 'واجهة مجمع الهيئات الحكومية واستيفاء الموافقات الأمنية في مصر',
      en: 'Egyptian regulatory and investment authority complex at sunrise',
    },
    subScopes: [
      {
        id: 'foreign-shareholders',
        title: { ar: 'موافقات الشركاء والمديرين الأجانب', en: 'Foreign Shareholder & Director Clearances' },
        description: {
          ar: 'تجهيز ملفات الاستعلام الأمني للشركاء والمستثمرين غير المصريين أثناء التأسيس أو تعديل هيكل الملكية.',
          en: 'Security vetting files for foreign founders, board members, and shareholders during incorporation or share transfers.',
        },
      },
      {
        id: 'regulated-activities',
        title: { ar: 'الموافقات الأمنية للأنشطة المقيدة والتخصصية', en: 'Sector-Specific Security Approvals' },
        description: {
          ar: 'أنشطة الاتصالات، الأمن والحراسة، السياحة، الطيران، الطاقة، والمشروعات ذات الطبيعة الاستراتيجية.',
          en: 'Approvals for telecommunications, tourism, logistics, energy, security services, and regulated sectors.',
        },
      },
      {
        id: 'site-operational-vetting',
        title: { ar: 'فحص المقرات والمناطق ذات الطبيعة الخاصة', en: 'Facility & Special-Zone Clearances' },
        description: {
          ar: 'استيفاء الموافقات اللازمة للمواقع في المناطق الحدودية أو الساحلية أو المناطق الحرة.',
          en: 'Approvals required for facilities located in free zones, coastal zones, or regulated governorates.',
        },
      },
    ],
    deliverables: [
      { ar: 'قائمة تدقيق فورية للمستندات المطلوبة دون نواقص', en: 'Zero-Gap Documentation Verification Checklist' },
      { ar: 'تقديم ومتابعة رسمية موثقة لملف الموافقة', en: 'Official Filing & Milestone Tracking' },
      { ar: 'تسليم الموافقة الأمنية وربطها بملف التأسيس أو الترخيص', en: 'Clearance Issuance & Integration with Licensing' },
    ],
    assignedSpecialists: ['research', 'legal'],
    estimatedTimeline: { ar: 'وفق الإجراءات السيادية والجهة المعنية مع تقارير متابعة', en: 'Per statutory authority schedule with continuous tracking' },
    jurisdictionNote: { ar: 'الجهات المختصة في جمهورية مصر العربية · الهيئة العامة للاستثمار', en: 'Competent Egyptian Authorities · GAFI' },
  },
];

export const CREATORS: CreatorProfile[] = [
  {
    id: 'creator-1',
    name: { ar: 'المستشار كريم الدسوقي', en: 'Counsel Karim El-Desouky' },
    role: { ar: 'الشريك المؤسس ورئيس قطاع العقود والتشريعات', en: 'Founding Partner & Head of Contracts' },
    division: 'legal',
    divisionLabel: { ar: 'القيادة القانونية · Coast & Desert', en: 'Legal Practice · Coast & Desert' },
    experienceYears: '16+',
    initials: 'KD',
    bio: {
      ar: 'متخصص في صياغة عقود الفيديك والمقاولات الكبرى والعقود الإدارية وصفقات نقل الملكية العقارية وهيكلة التركات في مصر والخليج.',
      en: 'Specializes in FIDIC construction agreements, administrative procurement contracts, high-value real estate transfers, and estate structuring.',
    },
    specialties: [
      { ar: 'عقود الفيديك والمقاولات', en: 'FIDIC & Construction' },
      { ar: 'العقود الإدارية ونقل الملكية', en: 'Administrative & Real Estate' },
      { ar: 'صفقات الاستحواذ وقانون الأسرة', en: 'M&A & Estate Law' },
    ],
  },
  {
    id: 'creator-2',
    name: { ar: 'أ. سلمى المنشاوي', en: 'Salma El-Menshawy, CPA' },
    role: { ar: 'الشريك المؤسس ورئيس قطاع المحاسبة وإعادة الهيكلة', en: 'Founding Partner & Head of Accounting' },
    division: 'accounting',
    divisionLabel: { ar: 'القيادة المالية · Coast & Desert', en: 'Financial Practice · Coast & Desert' },
    experienceYears: '14+',
    initials: 'SM',
    bio: {
      ar: 'محاسب قانوني معتمد تقود فرق إعداد القوائم المالية، الفحص المالي النافي للجهالة، وإعادة هيكلة أداء الشركات المتعثرة والنامية.',
      en: 'Certified Public Accountant leading statutory financial statement engagements, financial due diligence, and corporate turnaround programs.',
    },
    specialties: [
      { ar: 'القوائم المالية (EAS / IFRS)', en: 'Financial Statements (EAS / IFRS)' },
      { ar: 'إعادة هيكلة الشركات', en: 'Corporate Restructuring' },
      { ar: 'تقييم صفقات الدمج والاستحواذ', en: 'M&A Valuation' },
    ],
  },
  {
    id: 'creator-3',
    name: { ar: 'د. طارق عبد الحليم', en: 'Dr. Tarek Abdelhalim' },
    role: { ar: 'الشريك المؤسس ورئيس قطاع الأبحاث والتراخيص', en: 'Founding Partner & Head of Research' },
    division: 'research',
    divisionLabel: { ar: 'الأبحاث والهيئات · Coast & Desert', en: 'Research & Authorities · Coast & Desert' },
    experienceYears: '15+',
    initials: 'TA',
    bio: {
      ar: 'يقود منظومة البحث التنظيمي والاتصال المؤسسي مع الهيئات المصرية، مع خبرة مركزة في تراخيص الشركات والمباني والموافقات الأمنية.',
      en: 'Directs regulatory research and institutional liaison across Egyptian authorities, specializing in corporate/building permits and security clearances.',
    },
    specialties: [
      { ar: 'الموافقات الأمنية في مصر', en: 'Egyptian Security Clearances' },
      { ar: 'تراخيص الشركات والمباني', en: 'Corporate & Building Permits' },
      { ar: 'التمثيل أمام الهيئات', en: 'Authority Liaison' },
    ],
  },
  {
    id: 'creator-4',
    name: { ar: 'أ. نورهان الشاذلي', en: 'Nourhan El-Shazly' },
    role: { ar: 'مدير وحدة الأحوال الشخصية والتمثيل الأسري', en: 'Director of Family & Private Client Advisory' },
    division: 'legal',
    divisionLabel: { ar: 'قانون الأسرة والمواريث', en: 'Family & Estate Unit' },
    experienceYears: '11+',
    initials: 'NS',
    bio: {
      ar: 'تدير ملفات الزواج وتوثيق زواج الأجانب، تسويات الطلاق، قسمة الميراث، وتحرير الوصايا وفق أعلى معايير السرية والحماية الأسرية.',
      en: 'Leads private client files covering marriage documentation, divorce settlements, inheritance partition, and wills with strict confidentiality.',
    },
    specialties: [
      { ar: 'الزواج وتوثيق الأجانب', en: 'Marriage & Legalization' },
      { ar: 'الطلاق والتسويات الأسرية', en: 'Divorce & Settlements' },
      { ar: 'الميراث والوصايا', en: 'Inheritance & Wills' },
    ],
  },
];

export const UI_COPY = {
  brandShort: 'CD Consulting',
  holdingName: {
    ar: 'مجموعة كوست أند ديزرت القابضة',
    en: 'Coast & Desert Holding Group',
  },
  nav: {
    home: { ar: 'الرئيسية', en: 'Home' },
    vision: { ar: 'الرؤية والرسالة', en: 'Vision & Mission' },
    services: { ar: 'الخدمات', en: 'Services' },
    creators: { ar: 'المؤسسون والخبراء', en: 'Creators' },
    requestCta: { ar: 'اطلب خدمة', en: 'Request Service' },
  },
  hero: {
    kicker: {
      ar: 'مجموعة كوست أند ديزرت القابضة · القاهرة، مصر',
      en: 'Coast & Desert Holding Group · Cairo, Egypt',
    },
    headline: {
      ar: 'استشارات قانونية ومحاسبية وبحثية تحت سقف واحد.',
      en: 'Integrated legal, accounting, and research counsel under one roof.',
    },
    subheadline: {
      ar: 'في سي دي للاستشارات، لا نكتفي بالدور القانوني التقليدي؛ ندمج المحامين والمحاسبين والباحثين لإنجاز العقود، التراخيص، القوائم المالية، صفقات الاستحواذ، والموافقات الأمنية في مصر بدقة تنفيذية.',
      en: 'At CD Consulting, we unite lawyers, accountants, and regulatory researchers to execute complex contracts, corporate permits, financial statements, M&A restructurings, and security clearances in Egypt.',
    },
    primaryCta: { ar: 'اطلب خدمة أو خبيراً الآن', en: 'Request a Service or Specialist' },
    secondaryCta: { ar: 'استكشف الخدمات الست', en: 'Explore All 6 Services' },
  },
  pillars: {
    heading: { ar: 'ثلاثة تخصصات مترابطة.. فريق واحد لملفك', en: 'Three Integrated Disciplines. One Accountable Team.' },
    subheading: {
      ar: 'اطلب محامياً، محاسباً، أو باحثاً بشكل منفرد — أو اجمعهم معاً لمشاريع الشركات المعقدة.',
      en: 'Commission dedicated lawyers, accountants, or researchers individually—or deploy an integrated task force.',
    },
    requestRoleBtn: { ar: 'اطلب هذا التخصص', en: 'Request Specialist' },
  },
  homeServices: {
    heading: { ar: 'منظومة خدماتنا الأساسية', en: 'Core Practice Areas' },
    subheading: {
      ar: 'اضغط على أي خدمة لعرض تفاصيلها الكاملة، المستندات، النطاقات الفرعية، وتقديم طلب فوري.',
      en: 'Select any practice area to inspect full scope, deliverables, sub-contracts, and direct request routing.',
    },
    viewAll: { ar: 'عرض دليل الخدمات الكامل', en: 'View Full Services Directory' },
    inspectService: { ar: 'تفاصيل الخدمة', en: 'View Details' },
  },
  visionPage: {
    pageTitle: { ar: 'الرؤية والرسالة والمنهجية', en: 'Vision, Mission & Methodology' },
    pageIntro: {
      ar: 'انبثقت سي دي للاستشارات من مجموعة كوست أند ديزرت القابضة لتسد الفجوة بين المكاتب القانونية التقليدية ومكاتب المحاسبة ومراكز الأبحاث التنظيمية.',
      en: 'Born out of Coast & Desert Holding Group, CD Consulting bridges the gap between isolated law firms, accounting practices, and regulatory research desks.',
    },
    visionTitle: { ar: 'رؤيتنا (Vision)', en: 'Our Vision' },
    visionBody: {
      ar: 'أن نكون المرجع الاستشاري متعدد التخصصات الأول للشركات والمستثمرين والأفراد في مصر والمنطقة، عبر تحويل التعقيد القانوني والمالي والإجرائي إلى مسارات عمل واضحة وآمنة وقابلة للنمو.',
      en: 'To be the premier multidisciplinary advisory house for enterprises, investors, and private clients in Egypt and the region—turning legal, financial, and regulatory complexity into clear, secure execution.',
    },
    missionTitle: { ar: 'رسالتنا (Mission)', en: 'Our Mission' },
    missionBody: {
      ar: 'تمكين عملائنا من الحصول على خدمات محامين ومحاسبين وباحثين تحت مظلة قيادية واحدة؛ تضمن صياغة عقود محكمة، قوائم مالية شفافة، تراخيص سريعة، وموافقات أمنية وإدارية منجزة بأعلى معايير السرية والانضباط.',
      en: 'To deliver unified access to seasoned lawyers, certified accountants, and regulatory researchers under single-point accountability—ensuring airtight contracts, transparent financial statements, rapid licensing, and compliant security approvals.',
    },
    pillarsTitle: { ar: 'ركائز العمل المؤسسي', en: 'Operating Principles' },
    principles: [
      {
        num: '01',
        title: { ar: 'التكامل ثلاثي الأبعاد', en: 'Tri-Disciplinary Integration' },
        desc: {
          ar: 'كل صفقة استحواذ أو مشروع عقاري يُفحص قانونياً ومالياً وبحثياً في وقت متزامن لمنع التضارب.',
          en: 'Every acquisition, construction contract, or licensing project is reviewed legally, financially, and regulatorily in parallel.',
        },
      },
      {
        num: '02',
        title: { ar: 'الوضوح الإجرائي في مصر', en: 'On-Ground Egyptian Execution' },
        desc: {
          ar: 'معرفة دقيقة بمتطلبات الهيئات الحكومية، الشهر العقاري، هيئة الاستثمار، ومسارات الموافقات الأمنية.',
          en: 'Deep operational mastery of Egyptian ministries, GAFI, IDA, real estate notarization, and statutory security vetting.',
        },
      },
      {
        num: '03',
        title: { ar: 'السرية والحوكمة', en: 'Discretion & Governance' },
        desc: {
          ar: 'انضباط صارم في ملفات الأسرة والمواريث والبيانات المالية للشركات دون أي تسريب أو تشتت.',
          en: 'Strict confidentiality protocols across family estate matters, corporate financials, and strategic M&A dossiers.',
        },
      },
      {
        num: '04',
        title: { ar: 'الشفافية في المخرجات', en: 'Measurable Deliverables' },
        desc: {
          ar: 'يعرف العميل منذ اليوم الأول ما هي المستندات المطلوبة، من هو الخبير المسؤول، وما هو الجدول المتوقع.',
          en: 'Clients know from day one what deliverables are produced, which specialists are assigned, and expected milestones.',
        },
      },
    ],
  },
  creatorsPage: {
    pageTitle: { ar: 'المؤسسون وهيكل الخبراء', en: 'Creators & Multidisciplinary Leadership' },
    pageIntro: {
      ar: 'يقود سي دي للاستشارات (مجموعة كوست أند ديزرت القابضة) شركاء مؤسسون يجمعون بين الخبرة القانونية، المحاسبة المعتمدة، والبحث التنظيمي في مصر.',
      en: 'CD Consulting is led by founding partners of Coast & Desert Holding Group, uniting senior legal counsel, certified public accountants, and regulatory researchers.',
    },
    teamHeading: { ar: 'الشركاء المؤسسون ومديرو القطاعات', en: 'Founding Partners & Practice Directors' },
    divisionsHeading: { ar: 'اطلب خبيراً حسب التخصص', en: 'Commission Specialists by Discipline' },
    yearsLabel: { ar: 'سنة خبرة', en: 'Years Exp.' },
    consultBtn: { ar: 'اطلب استشارة مع هذا القطاع', en: 'Consult This Division' },
  },
  servicesPage: {
    pageTitle: { ar: 'دليل الخدمات الاستشارية', en: 'Advisory Services Directory' },
    pageIntro: {
      ar: 'ست منظومات خدمات متكاملة تغطي العقود، التراخيص، قانون الأسرة، الاستحواذ وإعادة الهيكلة، القوائم المالية، والموافقات الأمنية.',
      en: 'Six comprehensive practice areas spanning contract drafting, licensing, family law, M&A restructuring, financial statements, and security clearances.',
    },
    subScopesCount: { ar: 'نطاقات فرعية', en: 'sub-scopes' },
    exploreBtn: { ar: 'استكشف التفاصيل والنطاق', en: 'Explore Scope & Details' },
    requestThisBtn: { ar: 'اطلب هذه الخدمة', en: 'Request Service' },
  },
  serviceDetail: {
    backToServices: { ar: 'العودة إلى جميع الخدمات', en: 'Back to All Services' },
    scopeHeading: { ar: 'ما نقدمه بالتفصيل داخل هذه الخدمة', en: 'Detailed Practice Scopes' },
    deliverablesHeading: { ar: 'المخرجات والوثائق المسلمة', en: 'Key Deliverables' },
    specialistsHeading: { ar: 'التخصصات المشاركة في التنفيذ', en: 'Assigned Specialist Teams' },
    timelineLabel: { ar: 'المدة التقديرية للتنفيذ', en: 'Estimated Timeline' },
    jurisdictionLabel: { ar: 'الإطار القانوني والمرجعي', en: 'Regulatory Framework' },
    ctaHeading: { ar: 'هل تحتاج هذه الخدمة لشركتك أو ملفك الشخصي؟', en: 'Ready to initiate this mandate?' },
    ctaBtn: { ar: 'تقديم طلب لهذه الخدمة', en: 'Request This Service Now' },
  },
  requestPage: {
    pageTitle: { ar: 'تقديم طلب خدمة أو استدعاء خبير', en: 'Request a Service or Specialist' },
    pageIntro: {
      ar: 'اختر الخدمة المطلوبة من خدماتنا الست أو حدد التخصص الذي تحتاجه (محامي · محاسب · باحث)، وسيتواصل معك الفريق المختص بجدول التنفيذ والمستندات.',
      en: 'Select a specific service from our six practice areas or request a dedicated lawyer, accountant, or researcher directly.',
    },
    modeService: { ar: 'طلب خدمة محددة', en: 'Request a Specific Service' },
    modeSpecialist: { ar: 'طلب خبير (محامي / محاسب / باحث)', en: 'Request Specialist Talent' },
    labels: {
      clientName: { ar: 'الاسم الكامل', en: 'Full Name' },
      organization: { ar: 'اسم الشركة أو الجهة (اختياري للأفراد)', en: 'Company / Organization (Optional for individuals)' },
      phone: { ar: 'رقم الهاتف / واتساب', en: 'Phone / WhatsApp Number' },
      email: { ar: 'البريد الإلكتروني', en: 'Email Address' },
      selectService: { ar: 'اختر الخدمة الأساسية', en: 'Select Primary Service' },
      selectSubScopes: { ar: 'حدد البنود أو العقود الفرعية المطلوبة', en: 'Select Specific Sub-Scopes' },
      selectSpecialist: { ar: 'اختر التخصص المطلوب', en: 'Select Required Specialist' },
      integratedTeam: { ar: 'فريق متكامل (محامي + محاسب + باحث)', en: 'Integrated Task Force (Lawyer + Accountant + Researcher)' },
      urgency: { ar: 'أولوية التنفيذ', en: 'Engagement Priority' },
      urgencyStandard: { ar: 'قياسي (3–5 أيام للمراجعة الأولية)', en: 'Standard (3–5 days initial review)' },
      urgencyPriority: { ar: 'أولوية متقدمة (خلال 48 ساعة)', en: 'Priority (Within 48 hours)' },
      urgencyUrgent: { ar: 'عاجل (تواصل فوري في نفس اليوم)', en: 'Urgent (Same-day response)' },
      notes: { ar: 'تفاصيل الملف أو الاستفسار', en: 'Case / Project Brief & Notes' },
      submit: { ar: 'إرسال الطلب إلى CD Consulting', en: 'Submit Request to CD Consulting' },
    },
    validation: {
      nameRequired: { ar: 'يرجى إدخال الاسم الكامل', en: 'Please enter your full name' },
      phoneRequired: { ar: 'يرجى إدخال رقم هاتف صحيح', en: 'Please enter a valid phone number' },
      emailInvalid: { ar: 'يرجى إدخال بريد إلكتروني صحيح', en: 'Please enter a valid email address' },
      notesRequired: { ar: 'يرجى كتابة نبذة مختصرة عن المطلوب', en: 'Please provide a brief summary of your request' },
    },
    successTitle: { ar: 'تم استلام طلبك بنجاح', en: 'Your Request Has Been Registered' },
    successDesc: {
      ar: 'تم توجيه الملف إلى القسم المختص في CD Consulting. احتفظ برقم المرجع للمتابعة.',
      en: 'Your mandate has been routed to the relevant practice division at CD Consulting. Keep your reference number below.',
    },
    refLabel: { ar: 'رقم المرجع', en: 'Reference ID' },
    newRequestBtn: { ar: 'تقديم طلب آخر', en: 'Submit Another Request' },
    recentHeading: { ar: 'الطلبات المقدمة في هذه الجلسة', en: 'Requests Submitted in This Session' },
  },
  footer: {
    rights: {
      ar: '© 2026 CD Consulting — إحدى شركات مجموعة كوست أند ديزرت القابضة. جميع الحقوق محفوظة.',
      en: '© 2026 CD Consulting — Coast & Desert Holding Group. All rights reserved.',
    },
    tagline: {
      ar: 'القانون · المحاسبة · الأبحاث التنظيمية — القاهرة، جمهورية مصر العربية',
      en: 'Legal · Accounting · Regulatory Research — Cairo, Egypt',
    },
  },
} as const;
