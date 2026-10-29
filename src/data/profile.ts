// All personal content lives here, in English (en) and Vietnamese (vi).
// Edit this file — no component changes needed. Empty strings hide optional links/images.
import type { L } from "../i18n";

export type Role = "da" | "ba";

export type Project = {
  slug: string; // URL: /projects/<slug>
  role: Role;
  featured?: boolean;
  university?: boolean; // coursework: tagged "University Project" and listed in its own group under the role tab
  title: L;
  summary: L;
  /** Four short facts, matching ui.factLabels[role] (Question/Data/Insight/Impact or Problem/Stakeholders/Deliverables/Outcome). */
  facts: [L, L, L, L];
  stack: string[];
  period: L;
  myRole: L;
  cover?: string; // e.g. "/images/projects/sales-cover.webp" — a generated figure is shown when empty
  metrics?: { value: string; label: L }[];
  context: L;
  process: { title: L; body: L }[];
  gallery: { src: string; caption: L }[];
  outcome: L;
  learnings?: L;
  note?: L; // disclaimer shown above the cover, e.g. that screenshots use fake data
  source?: string;
  demo?: string;
  demoLabel?: L; // overrides the role's default demo button text, e.g. "Live demo" for a running app
};

export type Experience = {
  title: L;
  org?: L;
  short?: string; // short org name for the About cards, e.g. "SIG"
  cardTitle?: L; // shorter title for the About card
  period: L; // empty strings hide the date
  desc: L;
  highlights?: L[]; // shown in the "View details" pop-up
  caseStudies?: string[]; // project slugs linked from the pop-up
  tags: string[];
  current?: boolean; // highlighted with a "Now" badge
  logo?: string;
  photo?: string;
  photoSoft?: boolean; // show the photo blurred and faded (e.g. a certificate)
  link?: { href: string; label: L };
};

export const profile = {
  name: { en: "Do Hoang Phuc", vi: "Đỗ Hoàng Phúc" } as L,
  initials: "HP",
  photo: "/images/avatar.webp", // initials are shown when empty
  email: "dhp06062005@gmail.com",
  linkedin: "https://www.linkedin.com/in/dohoangphuc0606/",
  github: "https://github.com/HoangPhucTony",
  // CV download buttons stay hidden until the PDF is in public/cv/ and its path is set here,
  // e.g. "/cv/CV_DoHoangPhuc_DA.pdf" (a missing file would download the site's HTML instead).
  cv: {
    da: "",
    ba: "",
  } as Record<Role, string>,

  status: { en: "Open to Intern / Fresher roles", vi: "Đang tìm việc Intern / Fresher" } as L,
  location: { en: "Ho Chi Minh City", vi: "TP. Hồ Chí Minh" } as L,
  locationNote: { en: "Open to on-site, hybrid or remote", vi: "Sẵn sàng onsite, hybrid hoặc remote" } as L,

  intro: {
    // "\n" splits the two lines; the second line is highlighted
    question: { en: "What story are\nyour numbers telling?", vi: "Những con số của bạn\nđang kể câu chuyện gì?" } as L,
    blurb: {
      en: "The points on the right keep the same mean, spread and correlation — only the shape changes. Summary numbers can hide the story. I find it, then turn it into decisions teams can act on.",
      vi: "Các điểm bên cạnh luôn giữ nguyên trung bình, độ lệch chuẩn và tương quan — chỉ hình dạng thay đổi. Con số tổng hợp có thể che mất câu chuyện. Tôi tìm ra nó, rồi biến nó thành quyết định để đội ngũ hành động.",
    } as L,
  },

  about: {
    // three lines; the middle one is muted
    headline: {
      en: "Hi, I'm Phuc.\nI find the numbers —\nand the needs behind them.",
      vi: "Xin chào, tôi là Phúc.\nTôi tìm ra những con số —\nvà nhu cầu đằng sau chúng.",
    } as L,
    // [[da:…]] / [[ba:…]] highlight a phrase in that role's colour
    paragraphs: [
      {
        en: "I enjoy both sides of the same question: [[da:what does the data say]], and [[ba:what does the business actually need]]? I clean, model and visualise data, then translate findings into requirements, processes and decisions.",
        vi: "Tôi thích cả hai mặt của cùng một câu hỏi: [[da:dữ liệu nói gì]], và [[ba:doanh nghiệp thực sự cần gì]]? Tôi làm sạch, mô hình hoá và trực quan hoá dữ liệu, rồi chuyển phát hiện thành yêu cầu, quy trình và quyết định.",
      },
      {
        en: "I'm looking for a Data Analyst or Business Analyst role at Intern or Fresher level, where I can work close to real stakeholders and real data. I'm happy to start small, learn fast and take on whatever the team needs.",
        vi: "Tôi đang tìm vị trí Data Analyst hoặc Business Analyst ở cấp Intern hoặc Fresher, để được làm việc sát với dữ liệu thật và người dùng thật. Tôi sẵn sàng bắt đầu từ việc nhỏ, học nhanh và nhận bất kỳ việc gì đội cần.",
      },
    ] as L[],
    education: {
      school: { en: "University of Transport Ho Chi Minh City (UTH)", vi: "Đại học Giao thông Vận tải TP.HCM (UTH)" } as L,
      short: { en: "University of Transport HCMC", vi: "ĐH Giao thông Vận tải TP.HCM" } as L,
      photoCaption: "UTH · HCMC",
      detail: { en: "Management Information Systems · Expected 2027", vi: "Hệ thống thông tin quản lý · Dự kiến tốt nghiệp 2027" } as L,
      gpa: "3.64 / 4.0",
      logo: "/images/uth-logo.png",
      photo: "/images/uth-campus.webp",
    },
    locationPhoto: "/images/tile-skyline.webp",
    // state "now" pulses, "open" is the role I'm applying for; the rest are later goals
    careerPath: [
      {
        state: "now",
        stage: { en: "Now", vi: "Hiện tại" },
        title: { en: "Business Analyst Intern", vi: "Thực tập sinh Business Analyst" },
        note: { en: "SIG & MCPT · since 08/2026", vi: "SIG & MCPT · từ 08/2026" },
      },
      {
        state: "open",
        stage: { en: "Looking for", vi: "Đang tìm" },
        title: { en: "DA / BA Intern or Fresher", vi: "Intern hoặc Fresher DA / BA" },
        note: {
          en: "Willing to start as an intern or a fresher · on-site, hybrid or remote",
          vi: "Sẵn sàng bắt đầu ở vị trí Intern hoặc Fresher · onsite, hybrid hoặc remote",
        },
      },
      {
        stage: { en: "Next", vi: "Tiếp theo" },
        title: { en: "Data / Business Analyst", vi: "Data / Business Analyst" },
        note: { en: "Own analyses and requirements end to end", vi: "Tự đảm nhận phân tích và yêu cầu từ đầu đến cuối" },
      },
      {
        stage: { en: "Long term", vi: "Dài hạn" },
        title: { en: "Product / Analytics Lead", vi: "Product / Analytics Lead" },
      },
    ] as { state?: "now" | "open"; stage: L; title: L; note?: L }[],
  },

  // The question → decision pipeline (sections/Toolkit.tsx, not shown on the home page right now)
  pipeline: [
    {
      name: { en: "Ask", vi: "Hỏi" },
      desc: { en: "Frame the business question with stakeholders before touching any data.", vi: "Cùng các bên liên quan xác định đúng câu hỏi kinh doanh trước khi đụng tới dữ liệu." },
      role: "ba" as Role,
      icon: "ask",
      tools: ["Stakeholder interviews", "Workshops", "User stories"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Collect", vi: "Thu thập" },
      desc: { en: "Query, join and extract the data that can answer it.", vi: "Truy vấn, kết nối và trích xuất dữ liệu có thể trả lời câu hỏi." },
      role: "da" as Role,
      icon: "collect",
      tools: ["SQL", "Excel", "APIs"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Clean & model", vi: "Làm sạch & mô hình" },
      desc: { en: "Fix types, gaps and duplicates; build a model people can trust.", vi: "Xử lý kiểu dữ liệu, giá trị thiếu, trùng lặp; xây mô hình dữ liệu đáng tin cậy." },
      role: "da" as Role,
      icon: "clean",
      tools: ["Power Query", "Pandas", "Star schema"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Analyze", vi: "Phân tích" },
      desc: { en: "Explore, segment and test — look at the shape, not just the average.", vi: "Khám phá, phân nhóm và kiểm định — nhìn vào hình dạng, không chỉ con số trung bình." },
      role: "da" as Role,
      icon: "analyze",
      tools: ["Python", "Statistics", "Segmentation"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Visualize", vi: "Trực quan hoá" },
      desc: { en: "Tell the story with dashboards that answer the original question.", vi: "Kể câu chuyện bằng dashboard trả lời đúng câu hỏi ban đầu." },
      role: "da" as Role,
      icon: "visualize",
      tools: ["Power BI", "Tableau", "DAX"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Specify & decide", vi: "Đặc tả & quyết định" },
      desc: { en: "Model the process and write requirements the team can build.", vi: "Mô hình hoá quy trình và viết yêu cầu để đội phát triển xây dựng." },
      role: "ba" as Role,
      icon: "specify",
      tools: ["BRD / SRS", "BPMN", "Use cases", "Figma", "Jira"],
      usedIn: [] as string[],
    },
  ],

  experience: [
    {
      title: { en: "Business Analyst Intern", vi: "Thực tập sinh Business Analyst" },
      org: { en: "Saigon International General Hospital (SIG)", vi: "Bệnh viện Đa khoa Quốc tế Sài Gòn (SIG)" },
      short: "SIG",
      period: { en: "Aug – Nov 2026", vi: "T8 – T11/2026" },
      current: true,
      desc: {
        en: "Data and business analysis for a private hospital group: from framing the question with stakeholders to dashboards the board uses.",
        vi: "Phân tích dữ liệu và nghiệp vụ cho bệnh viện tư nhân: từ việc cùng các bên liên quan đặt đúng câu hỏi đến dashboard cho ban giám đốc.",
      },
      highlights: [
        {
          en: "Promotion analysis, hypothesis-driven: defined the question and who would read the report, interviewed the teams involved to map pain points into a MECE issue tree, then tested each hypothesis with SQL and presented the answer in a Google Sheets dashboard.",
          vi: "Phân tích khuyến mãi theo hướng giả thuyết: xác định câu hỏi và người đọc báo cáo, trao đổi trực tiếp với các team liên quan để bóc tách pain point thành cây vấn đề (MECE), rồi kiểm chứng từng giả thuyết bằng SQL và trình bày kết quả trên dashboard Google Sheets.",
        },
        {
          en: "Revenue driver analysis for consultations, imaging and lab tests: split net revenue into visits × price × order rates and measured how much each driver moved the total, down to specialty and doctor level.",
          vi: "Phân tích nguyên nhân giảm của khám bệnh, CLS và xét nghiệm: tách doanh thu thành lượt khám × đơn giá × tỷ lệ chỉ định, đo mức ảnh hưởng của từng yếu tố, chi tiết đến chuyên khoa và bác sĩ.",
        },
        {
          en: "End-to-end corporate health-check dashboard for the CEO, built with AI-assisted coding: an Apps Script web app with email-based access that tracks every contract from signing to payment across Sales, medical secretaries, doctors and Accounting — overdue alerts, stage ageing and a cash waterfall.",
          vi: "Dashboard Khám sức khỏe doanh nghiệp end-to-end cho CEO, xây dựng với sự hỗ trợ của AI: web app Apps Script phân quyền đăng nhập theo email, theo dõi từng hợp đồng từ ký AMC đến thanh toán qua Kinh doanh, Thư ký y khoa, Bác sĩ và Kế toán — cảnh báo quá hạn, tuổi tồn từng khâu và dòng tiền.",
        },
        {
          en: "Automation and reporting: an Apps Script tool that reads PDFs straight into the data-entry sheet, a Looker Studio report on surgery and inpatient activity, and weekly contract updates for the management report.",
          vi: "Tự động hoá và báo cáo: công cụ Apps Script đọc nhanh PDF để điền vào sheet nhập liệu, báo cáo Phẫu thuật – Nội trú trên Looker Studio, và cập nhật số liệu hợp đồng AMC cho báo cáo tuần.",
        },
      ] as L[],
      caseStudies: ["sig-revenue-drivers", "sig-promotion-analysis", "sig-kskdn-dashboard"],
      tags: ["SQL", "Google Sheets", "Apps Script", "Looker Studio", "Business Analysis", "Healthcare"],
      logo: "/images/work/sig-logo.png",
      photo: "/images/work/sig-lobby.webp",
    },
    {
      title: { en: "Business Analyst Intern", vi: "Thực tập sinh Business Analyst" },
      org: { en: "Public Transport Management Center (MCPT)", vi: "Trung tâm Quản lý Giao thông Công cộng (MCPT)" },
      short: "MCPT",
      period: { en: "Aug – Nov 2026", vi: "T8 – T11/2026" },
      current: true,
      desc: { en: "Business analysis internship in the public transport sector.", vi: "Thực tập Business Analyst trong lĩnh vực giao thông công cộng." },
      tags: ["Business Analysis", "Public transport"],
      logo: "/images/work/mcpt-logo.png",
      photo: "/images/work/mcpt-cover.webp",
    },
    {
      title: { en: "Data Analytics Certificate · VTI Academy", vi: "Chứng chỉ Data Analytics · VTI Academy" } as L,
      short: "VTI Academy",
      cardTitle: { en: "Data Analytics · VTI Academy", vi: "Data Analytics · VTI Academy" },
      period: { en: "10/2024", vi: "10/2024" } as L,
      desc: {
        en: "Completed VTI Academy's Data Analytics training course.",
        vi: "Hoàn thành khoá đào tạo Data Analytics tại VTI Academy.",
      } as L,
      tags: ["Data Analytics"],
      logo: "/images/work/vti-logo.png",
      photo: "/images/certs/vti-data-analytics.webp",
      photoSoft: true,
      link: { href: "/images/certs/vti-data-analytics.webp", label: { en: "View certificate", vi: "Xem chứng chỉ" } as L },
    },
    {
      title: { en: "University of Transport HCMC · Management Information Systems", vi: "ĐH Giao thông Vận tải TP.HCM · Hệ thống thông tin quản lý" } as L,
      period: { en: "2023 – 2027", vi: "2023 – 2027" } as L,
      desc: { en: "GPA 3.64 / 4.0.", vi: "GPA 3.64 / 4.0." } as L,
      tags: ["Statistics", "Databases", "Systems analysis"],
      logo: "/images/uth-logo.png",
      photo: "/images/uth-campus.webp",
    },
  ] as Experience[],

  // Real projects go here — see README ("Thêm dự án") for the fields.
  // SIG work: no hospital revenue amounts are published, only rates and counts.
  projects: [
    {
      slug: "sig-revenue-drivers",
      role: "da",
      featured: true,
      title: { en: "What really moves imaging and lab revenue", vi: "Điều gì thực sự quyết định doanh thu CLS và xét nghiệm" },
      summary: {
        en: "A variance analysis that splits hospital revenue into the drivers behind it — so a single total stops hiding what changed.",
        vi: "Phân tích chênh lệch tách doanh thu bệnh viện thành các yếu tố tạo nên nó — để một con số tổng không còn che đi điều thực sự thay đổi.",
      },
      cover: "/images/projects/sig-revenue-drivers.webp",
      facts: [
        {
          en: "When consultation, imaging and lab revenue change, which lever actually moved it?",
          vi: "Khi doanh thu khám, CLS và xét nghiệm thay đổi, yếu tố nào thực sự tạo ra thay đổi đó?",
        },
        {
          en: "Monthly revenue by branch, customer group, specialty and doctor, compared across two periods.",
          vi: "Doanh thu theo tháng, chi nhánh, nhóm khách hàng, chuyên khoa và bác sĩ, so sánh giữa hai kỳ.",
        },
        {
          en: "Growth in one driver can mask a decline in another — the total alone told the wrong story.",
          vi: "Một yếu tố tăng có thể che đi yếu tố khác đang giảm — chỉ nhìn con số tổng sẽ kể sai câu chuyện.",
        },
        {
          en: "Moved the discussion from patient volume to order rates, broken down by specialty and doctor.",
          vi: "Chuyển trọng tâm thảo luận từ số lượng bệnh nhân sang tỷ lệ chỉ định, chi tiết theo chuyên khoa và bác sĩ.",
        },
      ],
      stack: ["Google Sheets", "Variance analysis", "Pivot tables", "Waterfall chart"],
      period: { en: "2026 · SIG internship", vi: "2026 · Thực tập tại SIG" },
      myRole: { en: "Data analyst intern — model, analysis and dashboard", vi: "Thực tập sinh phân tích — mô hình, phân tích và dashboard" },
      metrics: [
        { value: "6", label: { en: "revenue drivers modelled", vi: "yếu tố doanh thu được mô hình hoá" } },
        { value: "3", label: { en: "levels of drill-down: hospital, specialty, doctor", vi: "cấp phân tích: toàn viện, chuyên khoa, bác sĩ" } },
        { value: "2", label: { en: "periods compared side by side", vi: "kỳ được so sánh song song" } },
      ],
      context: {
        en: "Saigon International General Hospital runs several branches. Management wanted to understand what was behind the movement in consultation, imaging (CLS) and lab test (XN) revenue. A headline total can't answer that: the job was to find which lever actually moved.",
        vi: "Bệnh viện Đa khoa Quốc tế Sài Gòn có nhiều chi nhánh. Ban lãnh đạo cần hiểu điều gì đứng sau biến động doanh thu khám, cận lâm sàng (CLS) và xét nghiệm (XN). Con số tổng không trả lời được: việc cần làm là tìm ra yếu tố nào thực sự thay đổi.",
      },
      process: [
        {
          title: { en: "Write revenue as a formula", vi: "Viết doanh thu thành công thức" },
          body: {
            en: "Net revenue = visits × (consultation price + imaging order rate × imaging price + lab order rate × lab price). Six drivers, each one something the hospital can act on.",
            vi: "Doanh thu NET = Lượt khám × (Đơn giá khám + Tỷ lệ chỉ định CLS × Đơn giá CLS + Tỷ lệ chỉ định XN × Đơn giá XN). Sáu yếu tố, yếu tố nào cũng là thứ bệnh viện có thể tác động.",
          },
        },
        {
          title: { en: "Prepare one flexible table", vi: "Chuẩn bị một bảng dữ liệu linh hoạt" },
          body: {
            en: "Kept the raw data in one long table and drove every view from filters — period, branch, B2B/B2C and service group — so any comparison is one change away.",
            vi: "Giữ dữ liệu gốc trong một bảng dài, mọi góc nhìn chạy từ bộ lọc — kỳ, chi nhánh, B2B/B2C, nhóm dịch vụ — để đổi phép so sánh chỉ bằng một thao tác.",
          },
        },
        {
          title: { en: "Measure each driver's share", vi: "Đo phần đóng góp của từng yếu tố" },
          body: {
            en: "Variance analysis by chain substitution: swap in one driver at a time from the base period to the comparison period, and show the steps as a waterfall chart.",
            vi: "Phân tích chênh lệch bằng phương pháp thay thế liên hoàn: lần lượt thay từng yếu tố từ kỳ gốc sang kỳ so sánh, rồi thể hiện các bước bằng biểu đồ thác nước (waterfall).",
          },
        },
        {
          title: { en: "Drill down where it matters", vi: "Đào sâu vào chỗ quan trọng" },
          body: {
            en: "Repeated the breakdown by specialty and by doctor — visits, prices and order rates side by side — to see exactly where each change was concentrated.",
            vi: "Lặp lại phân tích theo chuyên khoa và theo bác sĩ — lượt khám, đơn giá, tỷ lệ chỉ định đặt cạnh nhau — để thấy chính xác từng thay đổi tập trung ở đâu.",
          },
        },
        {
          title: { en: "Present it for decisions", vi: "Trình bày để ra quyết định" },
          body: {
            en: "One dashboard sheet with ▲▼ change markers and the formula written on the page, so readers can follow the logic without opening the data.",
            vi: "Một trang dashboard có mũi tên ▲▼ cho biến động và ghi rõ công thức ngay trên trang, để người đọc theo được logic mà không cần mở dữ liệu.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/sig-revenue-drivers.webp",
          caption: { en: "The analysis sheet — figures blurred for confidentiality.", vi: "Trang phân tích — số liệu đã được làm mờ để bảo mật." },
        },
      ],
      outcome: {
        en: "The total said revenue fell; the breakdown said why. Patient volume alone did not explain the drop: imaging and lab order rates moved too, and the change sat in a few specialties and doctors rather than across the whole hospital. So the next step was not a campaign to bring in more patients, but a short list of specialties to review ordering with, plus a formula the team can re-run each month to see which lever moved.",
        vi: "Con số tổng chỉ nói doanh thu giảm; phần tách yếu tố mới nói vì sao. Lượng bệnh nhân không giải thích hết mức giảm: tỷ lệ chỉ định CLS và xét nghiệm cũng thay đổi, và thay đổi tập trung ở một vài chuyên khoa, bác sĩ chứ không dàn đều toàn viện. Vì vậy bước tiếp theo không phải là chiến dịch kéo thêm bệnh nhân, mà là danh sách chuyên khoa cần rà soát cách chỉ định, cùng một công thức để team chạy lại hằng tháng xem yếu tố nào đã thay đổi.",
      },
      learnings: {
        en: "A flat total can hide two forces pulling in opposite directions. Decompose before you conclude.",
        vi: "Một con số tổng đi ngang có thể che hai lực kéo ngược chiều nhau. Hãy tách ra trước khi kết luận.",
      },
    },
    {
      slug: "sig-promotion-analysis",
      role: "da",
      title: { en: "Promotion analysis, hypothesis first", vi: "Phân tích khuyến mãi: bắt đầu từ giả thuyết" },
      cover: "/images/projects/sig-promotion-analysis.webp",
      summary: {
        en: "Before writing a single query: who reads this, what do they need to decide, and which hypotheses are worth testing?",
        vi: "Trước khi viết câu truy vấn nào: ai đọc báo cáo, họ cần quyết định gì, và giả thuyết nào đáng để kiểm chứng?",
      },
      facts: [
        {
          en: "What is really driving the promotion results — and what does the reader need to decide?",
          vi: "Điều gì thực sự quyết định kết quả khuyến mãi — và người đọc cần quyết định điều gì?",
        },
        {
          en: "Promotion and revenue data explored with SQL; business context from interviews with the teams involved.",
          vi: "Dữ liệu khuyến mãi và doanh thu được khai phá bằng SQL; bối cảnh nghiệp vụ từ trao đổi trực tiếp với các team liên quan.",
        },
        {
          en: "A MECE issue tree narrowed many possible causes to a few testable hypotheses before any analysis began.",
          vi: "Cây vấn đề MECE thu hẹp nhiều nguyên nhân có thể thành vài giả thuyết kiểm chứng được trước khi bắt đầu phân tích.",
        },
        {
          en: "A Google Sheets dashboard shaped around its reader, with the level of detail matched to how they read numbers.",
          vi: "Dashboard Google Sheets thiết kế theo người đọc, mức độ chi tiết phù hợp với cách họ tiếp nhận số liệu.",
        },
      ],
      stack: ["SQL", "Google Sheets", "XLOOKUP", "Pivot tables", "Issue tree"],
      period: { en: "2026 · SIG internship", vi: "2026 · Thực tập tại SIG" },
      myRole: { en: "Data analyst intern — scoping, analysis and dashboard", vi: "Thực tập sinh phân tích — xác định phạm vi, phân tích và dashboard" },
      context: {
        en: "The hospital runs promotions across its services and wanted to understand their results. Rather than start from the data, I used a structured, hypothesis-driven approach: frame the question, break it down, then test only what matters.",
        vi: "Bệnh viện triển khai nhiều chương trình khuyến mãi và cần hiểu rõ hiệu quả của chúng. Thay vì bắt đầu từ dữ liệu, tôi áp dụng cách giải quyết vấn đề có cấu trúc theo hướng giả thuyết: đặt đúng câu hỏi, bóc tách vấn đề, rồi chỉ kiểm chứng những gì thực sự quan trọng.",
      },
      process: [
        {
          title: { en: "Define the goal and the reader", vi: "Xác định mục tiêu và người đọc" },
          body: {
            en: "What is the topic, who will read the report, and how comfortable are they with numbers? The answers set the shape of the output before any analysis.",
            vi: "Đề tài là gì, ai sẽ đọc báo cáo, họ có nhạy với số liệu không? Câu trả lời quyết định hình thức đầu ra trước khi bắt tay vào phân tích.",
          },
        },
        {
          title: { en: "Break the problem down", vi: "Bóc tách vấn đề" },
          body: {
            en: "Talked directly with the teams involved to understand how promotions really work day to day, collected their pain points, and organised them into a MECE issue tree.",
            vi: "Trao đổi trực tiếp với các team liên quan để hiểu cách khuyến mãi vận hành thực tế, thu thập pain point và sắp xếp chúng thành cây vấn đề theo nguyên tắc MECE.",
          },
        },
        {
          title: { en: "Form hypotheses", vi: "Đặt giả thuyết" },
          body: {
            en: "Turned the branches of the tree into specific, testable hypotheses, so the analysis went deep on a few questions instead of wide on everything.",
            vi: "Biến các nhánh của cây vấn đề thành giả thuyết cụ thể, kiểm chứng được, để phân tích đi sâu vào vài câu hỏi thay vì dàn trải mọi thứ.",
          },
        },
        {
          title: { en: "Explore and test with SQL", vi: "Khai phá và kiểm chứng bằng SQL" },
          body: {
            en: "Queried the data to understand its structure first, then to confirm or reject each hypothesis.",
            vi: "Truy vấn dữ liệu để hiểu cấu trúc trước, sau đó xác nhận hoặc bác bỏ từng giả thuyết.",
          },
        },
        {
          title: { en: "Build the dashboard", vi: "Dựng dashboard" },
          body: {
            en: "Presented the answer in Google Sheets with SUMIFS, XLOOKUP, IFERROR and pivot tables — simple tools the team can keep updating themselves.",
            vi: "Trình bày kết quả trên Google Sheets với SUMIFS, XLOOKUP, IFERROR và pivot table — công cụ đơn giản để team tự cập nhật tiếp.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/sig-promotion-analysis.webp",
          caption: { en: "Breaking the problem down by promotion and customer group — figures blurred for confidentiality.", vi: "Bóc tách vấn đề theo chính sách khuyến mãi và nhóm khách hàng — số liệu đã được làm mờ để bảo mật." },
        },
      ],
      outcome: {
        en: "Promotion cost was measured as a share of gross sales for every policy × customer group, which changed the question from “are promotions working?” to “which policy discounts which customers, and by how much?”. Hypotheses the data did not support were dropped before they reached the report; the ones it did support became the dashboard's headline, each tied back to a pain point a team raised in the interviews.",
        vi: "Chi phí khuyến mãi được đo bằng tỷ lệ trên doanh thu gộp (KM / GrossSale) cho từng cặp chính sách × nhóm khách hàng, nhờ đó câu hỏi đổi từ “khuyến mãi có hiệu quả không?” thành “chính sách nào đang giảm giá cho nhóm khách nào, và bao nhiêu?”. Giả thuyết nào dữ liệu không ủng hộ thì bị loại trước khi vào báo cáo; giả thuyết được xác nhận trở thành nội dung chính của dashboard, mỗi cái gắn với một pain point mà các team đã nêu khi phỏng vấn.",
      },
      learnings: {
        en: "The most useful query is the one you know why you're writing.",
        vi: "Câu truy vấn hữu ích nhất là câu mà bạn biết rõ vì sao mình viết nó.",
      },
    },
    {
      slug: "sig-kskdn-dashboard",
      role: "ba",
      featured: true,
      title: { en: "Corporate health checks, from contract to cash", vi: "Khám sức khỏe doanh nghiệp: từ hợp đồng đến dòng tiền" },
      cover: "/images/projects/sig-kskdn-overview.webp",
      note: {
        en: "All data shown on this page is fake demo data — scrambled and blurred. These are not real reports.",
        vi: "Toàn bộ dữ liệu được trình bày trên đây là dữ liệu giả lập, đã được xáo trộn và làm mờ — không phải báo cáo thật.",
      },
      summary: {
        en: "Mapped a process that runs through four departments, then built the CEO a web app that shows where every contract — and every payment — is waiting.",
        vi: "Mô hình hoá quy trình đi qua bốn phòng ban, rồi xây cho CEO một web app cho thấy mỗi hợp đồng — và mỗi khoản tiền — đang nằm ở đâu.",
      },
      facts: [
        {
          en: "Each corporate health-check contract passes through four departments; no one could see where it was stuck or how much money was waiting.",
          vi: "Mỗi hợp đồng khám sức khỏe doanh nghiệp đi qua bốn phòng ban; không ai thấy được nó đang kẹt ở đâu và bao nhiêu tiền đang chờ.",
        },
        {
          en: "CEO and board, Sales, medical secretaries and doctors, Accounting.",
          vi: "CEO và ban giám đốc, Kinh doanh, Thư ký y khoa và Bác sĩ, Kế toán.",
        },
        {
          en: "End-to-end process map (5 stages) and an Apps Script web app with email-based access and four screens.",
          vi: "Bản đồ quy trình end-to-end (5 khâu) và web app Apps Script phân quyền theo email, gồm bốn màn hình.",
        },
        {
          en: "Overdue items ranked by amount × days late, so the biggest money at risk comes first — for the board and for each department, from the same data.",
          vi: "Việc quá hạn được xếp theo giá trị × số ngày trễ, để khoản tiền rủi ro lớn nhất luôn lên đầu — cho ban giám đốc và từng phòng ban, từ cùng một nguồn dữ liệu.",
        },
      ],
      stack: ["Google Apps Script", "Google Sheets", "JavaScript", "Process mapping", "AI-assisted coding"],
      period: { en: "2026 · SIG internship", vi: "2026 · Thực tập tại SIG" },
      myRole: { en: "Business analyst intern — process, requirements and build", vi: "Thực tập sinh BA — quy trình, yêu cầu và xây dựng" },
      metrics: [
        { value: "5", label: { en: "stages tracked end to end", vi: "khâu được theo dõi end-to-end" } },
        { value: "4", label: { en: "departments on one screen", vi: "phòng ban trên cùng một màn hình" } },
        { value: "11", label: { en: "automatic data-quality checks", vi: "nhóm kiểm tra chất lượng dữ liệu tự động" } },
      ],
      context: {
        en: "Corporate health checks (KSKDN) are a B2B service: a company signs an annual contract (AMC), its staff are examined, doctors conclude the records, and Accounting sends the fee sheet, invoices and collects payment. Progress lived in a shared tracking sheet that was hard to read at a glance — especially for the CEO.",
        vi: "Khám sức khỏe doanh nghiệp (KSKDN) là dịch vụ B2B: doanh nghiệp ký hợp đồng (AMC), nhân viên được khám, bác sĩ kết luận hồ sơ, Kế toán gửi bảng phí, xuất hoá đơn và thu tiền. Tiến độ nằm trong một file theo dõi chung, khó nắm bắt nhanh — nhất là với CEO.",
      },
      process: [
        {
          title: { en: "Map the end-to-end process", vi: "Mô hình hoá quy trình end-to-end" },
          body: {
            en: "Exam done → conclusion records (in parallel) → fee sheet → invoice → payment, with the owner and deadline of each stage agreed with Sales, the medical secretaries and Accounting.",
            vi: "Khám xong → hồ sơ kết luận (chạy song song) → bảng phí → xuất hoá đơn → thu tiền, thống nhất người phụ trách và hạn của từng khâu với Kinh doanh, Thư ký y khoa và Kế toán.",
          },
        },
        {
          title: { en: "Start from each user's question", vi: "Bắt đầu từ câu hỏi của từng người dùng" },
          body: {
            en: "CEO: where is the money and what is stuck? Department heads: what comes first and who is overloaded? Staff: what is on my list today?",
            vi: "CEO: tiền đang ở đâu, chỗ nào đang nghẽn? Trưởng bộ phận: việc nào làm trước, ai đang quá tải? Nhân viên: hôm nay tôi cần làm gì?",
          },
        },
        {
          title: { en: "Design four screens", vi: "Thiết kế bốn màn hình" },
          body: {
            en: "Overview (headline, contract positions, a cash waterfall from quote to collected, 12-month trend); Actions (by department, priority = amount × days late, list / kanban / calendar / staff views, one-click reminder messages); Contract detail; and admin Settings.",
            vi: "Tổng quan (câu kết luận, vị trí hợp đồng, biểu đồ thác nước dòng tiền từ trình giá đến đã thu, xu hướng 12 tháng); Cần xử lý (theo phòng ban, ưu tiên = giá trị × số ngày trễ, xem dạng danh sách / kanban / lịch / theo nhân viên, sao chép tin nhắn nhắc việc); Chi tiết hợp đồng; và Cài đặt cho quản trị.",
          },
        },
        {
          title: { en: "Build it with AI as a pair", vi: "Xây dựng cùng AI" },
          body: {
            en: "A Google Apps Script web app that reads the tracking sheet without ever writing to it, with admin and viewer access by Google email. Built with AI-assisted coding and improved over several versions from user feedback.",
            vi: "Web app Google Apps Script chỉ đọc file theo dõi, không bao giờ ghi đè, phân quyền quản trị và người xem theo email Google. Xây dựng với sự hỗ trợ của AI và cải tiến qua nhiều phiên bản theo góp ý người dùng.",
          },
        },
        {
          title: { en: "Make data quality visible", vi: "Làm lộ ra chất lượng dữ liệu" },
          body: {
            en: "Eleven checks flag missing due dates, duplicate contract IDs, or contracts paid in full but not closed — so the sheet stays the single source of truth instead of being silently fixed.",
            vi: "Mười một nhóm kiểm tra đánh dấu thiếu hạn, trùng mã hợp đồng, hay đã thu đủ tiền nhưng chưa đóng — để file gốc vẫn là nguồn sự thật duy nhất thay vì bị sửa ngầm.",
          },
        },
        {
          title: { en: "Keep it current", vi: "Giữ số liệu luôn mới" },
          body: {
            en: "Updated AMC contract data each week so the management report was ready on time.",
            vi: "Cập nhật số liệu hợp đồng AMC hằng tuần để báo cáo cho ban giám đốc kịp tiến độ.",
          },
        },
      ],
      // screenshots from the local harness with a scrambled demo dataset: contracts dropped, every amount randomised
      gallery: [
        {
          src: "/images/projects/sig-kskdn-overview.webp",
          caption: { en: "Overview: a one-line conclusion, cash collected in the last 12 weeks and four headline KPIs (fake data, blurred).", vi: "Tổng quan: câu kết luận, tiền về 12 tuần qua và bốn chỉ số chính (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-charts.webp",
          caption: { en: "Money by month, the cash funnel from quote to collected, and how each stage performs against its deadline (fake data, blurred).", vi: "Tiền theo tháng, phễu tiền từ trình giá đến đã thu, và từng khâu so với hạn (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-actions.webp",
          caption: { en: "Actions: what is overdue, what to do first and which stage is stuck (fake data, blurred).", vi: "Cần xử lý: việc quá hạn, việc nên làm trước và khâu đang kẹt (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-contract.webp",
          caption: { en: "One contract's five stages, with the conclusion records running in parallel.", vi: "Năm khâu của một hợp đồng, hồ sơ kết luận chạy song song." },
        },
        {
          src: "/images/projects/sig-kskdn-timeline.webp",
          caption: { en: "The same contract on a time ruler: plan, delay and the lead-time target.", vi: "Cùng hợp đồng đó trên thước thời gian: kế hoạch, phần trễ và mục tiêu leadtime." },
        },
      ],
      outcome: {
        en: "“Where is the money?” now has a stage-level answer: the cash waterfall shows how much is still waiting at fee sheet, invoice or payment, not just one outstanding total. Ranking by amount × days late means one large late contract outranks many small ones, which a plain overdue count would hide. And the eleven data-quality checks surface errors at the source — missing due dates, duplicate IDs, contracts paid but never closed — instead of letting them quietly distort the charts.",
        vi: "Câu hỏi “tiền đang ở đâu?” giờ có câu trả lời đến từng khâu: biểu đồ thác nước cho thấy bao nhiêu tiền còn kẹt ở bảng phí, hoá đơn hay thanh toán, thay vì chỉ một con số tồn đọng. Xếp ưu tiên theo giá trị × số ngày trễ giúp một hợp đồng lớn bị trễ được xử lý trước nhiều hợp đồng nhỏ — điều mà chỉ đếm số việc quá hạn sẽ che mất. Còn mười một nhóm kiểm tra chất lượng dữ liệu làm lộ lỗi ngay tại file gốc — thiếu hạn, trùng mã, đã thu đủ tiền nhưng chưa đóng — thay vì để chúng âm thầm làm sai biểu đồ.",
      },
      learnings: {
        en: "A dashboard for a CEO is a process problem first: until every stage had an owner and a deadline, there was nothing to chart.",
        vi: "Dashboard cho CEO trước hết là bài toán quy trình: khi chưa khâu nào có người phụ trách và hạn chót, thì chưa có gì để vẽ biểu đồ.",
      },
    },
    {
      slug: "uth-student-mental-health",
      role: "da",
      university: true,
      title: { en: "Student mental health, from sensor data to decisions", vi: "Sức khỏe tinh thần sinh viên: từ dữ liệu cảm biến đến quyết định" },
      summary: {
        en: "A data warehouse and a four-page Power BI dashboard that show a university counselling team who is at risk, when, and what to do about it.",
        vi: "Kho dữ liệu và dashboard Power BI 4 trang giúp bộ phận tư vấn tâm lý của trường thấy ai đang có nguy cơ, vào lúc nào, và nên làm gì.",
      },
      cover: "/images/projects/uth-mental-health-overview.webp",
      facts: [
        {
          en: "How are students doing, which groups are at risk, and when should the school step in?",
          vi: "Sinh viên đang ra sao, nhóm nào có nguy cơ, và nhà trường nên can thiệp vào lúc nào?",
        },
        {
          en: "Dartmouth's public College Experience Dataset: phone sensing and mood surveys for 189 students over 8,809 observed days (2017–2022).",
          vi: "College Experience Dataset công khai của Dartmouth: dữ liệu cảm biến điện thoại và khảo sát tâm lý của 189 sinh viên, 8.809 ngày quan sát (2017–2022).",
        },
        {
          en: "26.5% of students had at least one day of severe anxiety or depression. Risk peaks in May and October, and students sleeping under six hours score 18% higher on PHQ-4.",
          vi: "26,5% sinh viên có ít nhất một ngày lo âu hoặc trầm cảm ở mức nặng. Rủi ro đạt đỉnh tháng 5 và tháng 10, nhóm ngủ dưới 6 giờ có PHQ-4 cao hơn 18%.",
        },
        {
          en: "Each dashboard page ends in a recommendation: seasonal support, a sleep campaign, social activation and an at-risk watch list.",
          vi: "Mỗi trang dashboard kết thúc bằng một đề xuất: hỗ trợ theo mùa, chiến dịch ngủ sớm, kết nối xã hội và danh sách theo dõi nhóm nguy cơ.",
        },
      ],
      stack: ["Power BI", "DAX", "Star schema", "SQL Server", "SSIS", "SSAS"],
      period: { en: "11/2025 · UTH coursework (QA 10/2026)", vi: "11/2025 · Đồ án môn học tại UTH (rà soát 10/2026)" },
      myRole: {
        en: "Power BI developer in a team of 6 — data model, DAX, dashboards and insights",
        vi: "Phụ trách Power BI trong nhóm 6 người — mô hình dữ liệu, DAX, dashboard và insight",
      },
      metrics: [
        { value: "24", label: { en: "DAX measures, plus 11 calculated columns", vi: "measure DAX, cùng 11 calculated column" } },
        { value: "15", label: { en: "report pages: 4 dashboards and 11 tooltip, insight and recommendation pages", vi: "trang báo cáo: 4 dashboard và 11 trang tooltip, insight, đề xuất" } },
        { value: "6", label: { en: "data errors found and fixed in my own QA pass", vi: "lỗi số liệu tự phát hiện và sửa khi rà soát lại" } },
      ],
      context: {
        en: "Students are a high-risk group for stress, anxiety and depression, yet universities rarely have a data-driven way to notice it. For the Data Warehousing & Decision Support Systems course, our team of six built a warehouse from five years of phone sensing and mood surveys. Teammates handled the Python cleaning, SSIS ETL and the SSAS cube; I built the Power BI layer that a counselling team would actually use.",
        vi: "Sinh viên là nhóm có nguy cơ cao về stress, lo âu và trầm cảm, nhưng nhà trường hiếm khi có công cụ dựa trên dữ liệu để phát hiện sớm. Trong môn Kho dữ liệu và Hệ thống hỗ trợ ra quyết định, nhóm 6 người xây kho dữ liệu từ 5 năm dữ liệu cảm biến điện thoại và khảo sát tâm lý. Các bạn trong nhóm phụ trách làm sạch bằng Python, ETL bằng SSIS và cube SSAS; tôi xây lớp Power BI mà bộ phận tư vấn sẽ trực tiếp sử dụng.",
      },
      process: [
        {
          title: { en: "Model the warehouse in Power BI", vi: "Dựng mô hình trong Power BI" },
          body: {
            en: "Imported seven tables from SQL Server into a star schema (one fact, six dimensions and a date table) and split the measures into four tables so the model stays easy to maintain.",
            vi: "Import 7 bảng từ SQL Server thành Star Schema (1 bảng Fact, 6 Dimension và bảng ngày), tách measure thành 4 bảng riêng để mô hình gọn và dễ bảo trì.",
          },
        },
        {
          title: { en: "Count every average over the fact table", vi: "Tính mọi trung bình qua bảng Fact" },
          body: {
            en: "The dimension tables hold 172,797 rows, but only 8,809 days have a survey. Measures use AVERAGEX and RELATED over the fact table, so days without a survey never leak into the KPIs.",
            vi: "Các bảng Dimension có 172.797 dòng nhưng chỉ 8.809 ngày có khảo sát. Measure dùng AVERAGEX và RELATED qua bảng Fact để những ngày không có khảo sát không lẫn vào KPI.",
          },
        },
        {
          title: { en: "One page per business question", vi: "Mỗi trang trả lời một câu hỏi nghiệp vụ" },
          body: {
            en: "Overview, Sleep & Affect, Device Location and Audio Social, with synced slicers, page navigation and a Documentation page that explains the PHQ-4, SSE-3 and stress scales.",
            vi: "Overview, Sleep & Affect, Device Location và Audio Social, có slicer đồng bộ, thanh điều hướng và trang Documentation giải thích thang đo PHQ-4, SSE-3 và Stress.",
          },
        },
        {
          title: { en: "From insight to recommendation", vi: "Từ insight đến đề xuất" },
          body: {
            en: "Eleven supporting pages follow a tooltip → insight → recommendation path, so a reader without a technical background can go from a chart to a decision.",
            vi: "11 trang phụ đi theo mạch tooltip → insight → đề xuất, để người đọc không chuyên kỹ thuật đi được từ biểu đồ đến quyết định.",
          },
        },
        {
          title: { en: "Check my own numbers", vi: "Tự kiểm chứng số liệu" },
          body: {
            en: "After the course I queried the model with DAX and found six errors, including a percentage shown as 0.26, sleep counts inflated about 19× by the wrong grain, and a placeholder row that hid missing audio data. All fixed, and causal wording was changed to correlation.",
            vi: "Sau khi kết thúc môn, tôi truy vấn lại mô hình bằng DAX và phát hiện 6 lỗi, trong đó có tỷ lệ % hiển thị thành 0.26, số đêm ngủ bị nhân lên khoảng 19 lần do sai độ chi tiết (grain), và một dòng giữ chỗ che mất dữ liệu âm thanh bị thiếu. Tất cả đã được sửa, các câu mang nghĩa nhân quả được đổi thành tương quan.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-mental-health-overview.webp",
          caption: { en: "Overview: wellbeing, stress and activity by month, with shared filters on the right.", vi: "Overview: sức khỏe tinh thần, stress và vận động theo tháng, bộ lọc chung ở bên phải." },
        },
        {
          src: "/images/projects/uth-mental-health-sleep.webp",
          caption: { en: "Sleep & Affect: bedtimes and wellbeing by sleep duration.", vi: "Sleep & Affect: giờ đi ngủ và sức khỏe tinh thần theo thời lượng ngủ." },
        },
        {
          src: "/images/projects/uth-mental-health-location.webp",
          caption: { en: "Device Location: where students spend their time, by social level and weekday.", vi: "Device Location: sinh viên dành thời gian ở đâu, theo mức độ xã hội và ngày trong tuần." },
        },
        {
          src: "/images/projects/uth-mental-health-audio.webp",
          caption: { en: "Audio Social: conversation time against anxiety and depression level.", vi: "Audio Social: thời lượng hội thoại theo mức lo âu và trầm cảm." },
        },
        {
          src: "/images/projects/uth-mental-health-model.webp",
          caption: { en: "The Power BI model: one fact table, six dimensions and four measure tables.", vi: "Mô hình Power BI: 1 bảng Fact, 6 Dimension và 4 bảng measure." },
        },
        {
          src: "/images/projects/uth-mental-health-bedtime.webp",
          caption: { en: "84.6% of nights start after 11 pm, more than half of them between midnight and 2 am.", vi: "84,6% số đêm bắt đầu ngủ sau 23h, hơn một nửa trong số đó rơi vào 0–2h sáng." },
        },
      ],
      outcome: {
        en: "Risk is concentrated, not spread evenly. 26.5% of students had at least one severe day, and those days cluster in May and October, so support should be timed rather than year-round. Sleep is the clearest lever: 84.6% of nights start after 11 pm, and students sleeping under six hours score 18% higher on PHQ-4. That became four actions: counselling capacity in April–May and October, a sleep campaign for the under-six-hours group, social activation for the most isolated, and a watch list of the 50 students who had a severe day. All of these are correlations in observational data, not causes.",
        vi: "Rủi ro tập trung chứ không dàn đều. 26,5% sinh viên có ít nhất một ngày ở mức nặng, và những ngày đó dồn vào tháng 5 và tháng 10 — nên hỗ trợ cần đúng thời điểm thay vì rải đều cả năm. Giấc ngủ là đòn bẩy rõ nhất: 84,6% số đêm bắt đầu ngủ sau 23h, nhóm ngủ dưới 6 giờ có PHQ-4 cao hơn 18%. Từ đó ra bốn hành động: tăng tư vấn vào tháng 4–5 và tháng 10, chiến dịch ngủ sớm cho nhóm dưới 6 giờ, hoạt động kết nối cho nhóm ít giao tiếp nhất, và danh sách theo dõi 50 sinh viên từng có ngày ở mức nặng. Tất cả là tương quan trên dữ liệu quan sát, không phải nhân quả.",
      },
      learnings: {
        en: "A dashboard is only as right as its grain. Check what every number is counted over before you trust it.",
        vi: "Dashboard chỉ đúng khi đếm đúng độ chi tiết. Hãy kiểm tra mỗi con số được đếm trên bảng nào trước khi tin nó.",
      },
    },
    {
      slug: "uth-mis-purchasing",
      role: "ba",
      university: true,
      title: { en: "Retail purchasing, from store shortage to supplier order", vi: "Mua hàng bán lẻ: từ cửa hàng thiếu hàng đến đơn nhà cung cấp" },
      summary: {
        en: "Interviews with a multi-store retailer to find where purchasing breaks down, then BPMN, fit-gap and three custom Odoo 19 modules with a live demo.",
        vi: "Phỏng vấn trực tiếp một chuỗi bán lẻ để tìm chỗ tắc trong quy trình mua hàng, rồi BPMN, fit-gap và 3 module Odoo 19 có demo trực tuyến.",
      },
      cover: "/images/projects/uth-purchasing-pr-fulfillment-options.webp",
      note: {
        en: "Academic prototype. The process analysis is based on a survey of Central Retail Vietnam's purchasing; the project is not affiliated with or endorsed by Central Retail. Screenshots use sample data.",
        vi: "Prototype học thuật. Phần phân tích quy trình dựa trên khảo sát quy trình mua hàng tại Central Retail Vietnam; dự án không liên kết hay được bảo trợ bởi Central Retail. Ảnh chụp dùng dữ liệu mẫu.",
      },
      facts: [
        {
          en: "Stores, merchandising, the warehouse and suppliers worked through email and spreadsheets: data out of sync, no early warning for shortages or near-expiry stock, and budgets checked only after buying.",
          vi: "Cửa hàng, Merchandise, kho và nhà cung cấp trao đổi qua e-mail và bảng tính: dữ liệu không đồng bộ, không có cảnh báo sớm hết hàng hay hàng cận date, ngân sách chỉ được kiểm tra sau khi đã mua.",
        },
        {
          en: "Store staff, the merchandising team, warehouse QC and suppliers. Three of them work inside the system on the same purchase request.",
          vi: "Nhân viên cửa hàng, bộ phận Merchandise, QC kho và nhà cung cấp. Ba vai trò trong số đó làm việc trực tiếp trên cùng một phiếu yêu cầu mua hàng.",
        },
        {
          en: "Interview guide and pain-point list, BPMN AS-IS / TO-BE models, a fit-gap table against standard Odoo, business rules, and three custom modules deployed to a live demo.",
          vi: "Bộ câu hỏi phỏng vấn và danh sách pain point, mô hình BPMN AS-IS / TO-BE, bảng fit-gap so với Odoo chuẩn, bộ quy tắc nghiệp vụ, và 3 module tự viết đã triển khai lên demo trực tuyến.",
        },
        {
          en: "The budget check moved from after the spend to before approval, and one purchase request replaces the email chain between three roles.",
          vi: "Kiểm tra ngân sách chuyển từ sau khi chi sang trước khi duyệt, và một phiếu yêu cầu mua hàng thay cho chuỗi e-mail giữa ba vai trò.",
        },
      ],
      stack: ["Stakeholder interviews", "BPMN", "Fit-gap analysis", "ERP", "Odoo 19", "Python", "PostgreSQL"],
      period: { en: "04–05/2026 · UTH coursework (public release 10/2026)", vi: "04–05/2026 · Đồ án môn học tại UTH (hoàn thiện public 10/2026)" },
      myRole: {
        en: "Business analyst & lead developer in a team of 6 — business interviews, pain points and requirements, then about 70% of the code and the deployment",
        vi: "BA kiêm lập trình chính trong nhóm 6 người — phỏng vấn doanh nghiệp, xác định pain point và yêu cầu, rồi viết khoảng 70% mã nguồn và triển khai",
      },
      metrics: [
        { value: "9", label: { en: "fit-gap areas covered: configured where Odoo fits, built where it doesn't", vi: "hạng mục fit-gap được đáp ứng: cấu hình khi Odoo có sẵn, tự xây khi còn thiếu" } },
        { value: "3", label: { en: "custom modules, extending 14 standard Odoo models instead of forking", vi: "module tự viết, mở rộng 14 model chuẩn của Odoo thay vì sửa lõi" } },
        { value: "~70%", label: { en: "of about 13,700 lines of code written by me", vi: "trong khoảng 13.700 dòng code do tôi viết" } },
      ],
      context: {
        en: "Multi-store retail chains restock from two sources: the central warehouse and outside suppliers. For the MIS Practical Project course, I prepared the interview questions and interviewed people at a large retailer directly about how their purchasing really works. The pain points were clear: requests made by hand over email, no early warning for shortages or near-expiry stock, and budgets checked only after the money was spent. Standard Odoo covers purchasing and inventory, but not the store → merchandising → supplier flow.",
        vi: "Chuỗi bán lẻ nhiều cửa hàng bổ sung hàng từ hai nguồn: kho tổng và nhà cung cấp bên ngoài. Trong môn Đồ án thực tế Hệ thống thông tin quản lý, tôi soạn bộ câu hỏi và trực tiếp phỏng vấn nhân sự của một nhà bán lẻ lớn về cách họ thực sự mua hàng. Pain point lộ rõ: phiếu yêu cầu lập thủ công qua e-mail, không có cảnh báo sớm hết hàng hay hàng cận date, ngân sách chỉ được kiểm tra sau khi đã chi. Odoo chuẩn có sẵn mua hàng và kho, nhưng không có luồng cửa hàng → Merchandise → nguồn cung.",
      },
      process: [
        {
          title: { en: "Interview the business", vi: "Phỏng vấn doanh nghiệp" },
          body: {
            en: "Wrote an interview guide, then met the retailer's staff in person to hear how a store's request really travels to merchandising, the warehouse and suppliers. Their answers became the requirements and the list of pain points: manual requests, email threads, out-of-sync data and late budget checks.",
            vi: "Soạn bộ câu hỏi phỏng vấn, rồi gặp trực tiếp nhân sự doanh nghiệp để nghe một yêu cầu từ cửa hàng thực sự đi qua Merchandise, kho và nhà cung cấp như thế nào. Câu trả lời của họ trở thành danh sách yêu cầu và pain point: lập phiếu thủ công, trao đổi qua e-mail, dữ liệu lệch nhau, kiểm tra ngân sách quá muộn.",
          },
        },
        {
          title: { en: "Map the AS-IS process", vi: "Mô hình hoá quy trình AS-IS" },
          body: {
            en: "Drew the current flow in BPMN from the interview notes, marking where each pain point happens and who owns it.",
            vi: "Vẽ quy trình hiện tại bằng BPMN từ ghi chép phỏng vấn, đánh dấu pain point xảy ra ở bước nào và thuộc về ai.",
          },
        },
        {
          title: { en: "Design the TO-BE in BPMN", vi: "Thiết kế quy trình TO-BE bằng BPMN" },
          body: {
            en: "Made one purchase request the central document that links store demand, merchandising's decision, purchase orders or internal transfers, QC and restock, so every department sees the same status.",
            vi: "Đặt phiếu yêu cầu mua hàng (PR) làm chứng từ trung tâm nối nhu cầu cửa hàng, quyết định của Merchandise, đơn mua hoặc điều chuyển nội bộ, QC và bổ sung hàng, để mọi bộ phận nhìn cùng một trạng thái.",
          },
        },
        {
          title: { en: "Run a fit-gap against standard Odoo", vi: "Phân tích fit-gap với Odoo chuẩn" },
          body: {
            en: "Compared nine areas of the TO-BE process with what Odoo already does: configure what fits, extend what is partial, build only the real gaps.",
            vi: "Đối chiếu 9 hạng mục của quy trình TO-BE với những gì Odoo đã có: phần phù hợp thì cấu hình, phần đáp ứng một phần thì mở rộng, chỉ tự xây những khoảng trống thật sự.",
          },
        },
        {
          title: { en: "Turn the rules into requirements", vi: "Biến quy tắc nghiệp vụ thành yêu cầu" },
          body: {
            en: "No duplicate requests for the same product and store, no approval over the category budget, three supply routes per line, a mandatory reason for every QC rejection, and automatic promotions for near-expiry stock.",
            vi: "Không cho tạo PR trùng cho cùng sản phẩm và cửa hàng, chặn duyệt khi vượt ngân sách ngành hàng, 3 phương án cung ứng cho mỗi dòng, QC từ chối bắt buộc ghi lý do, và tự tạo khuyến mãi cho hàng cận date.",
          },
        },
        {
          title: { en: "Build and ship it", vi: "Xây dựng và triển khai" },
          body: {
            en: "Three custom Odoo 19 modules that extend standard models instead of forking them, role-based access for stores, merchandising and warehouse QC, and Docker with GitHub Actions deploying automatically to a live demo.",
            vi: "3 module Odoo 19 mở rộng model chuẩn thay vì sửa lõi, phân quyền theo vai trò cho cửa hàng, Merchandise và QC kho, cùng Docker và GitHub Actions tự động triển khai lên bản demo trực tuyến.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-purchasing-store-replenishment.webp",
          caption: { en: "Store: min/max levels and a suggested restock quantity. One click creates the purchase request.", vi: "Cửa hàng: mức tồn min/max và số lượng đề xuất bổ sung. Một click là tạo phiếu yêu cầu mua hàng." },
        },
        {
          src: "/images/projects/uth-purchasing-pr-fulfillment-options.webp",
          caption: { en: "Merchandising picks a supply route per line: central warehouse, supplier to warehouse, or supplier direct to store.", vi: "Merchandise chọn nguồn cung cho từng dòng: kho tổng, NCC giao về kho tổng, hoặc NCC giao thẳng cửa hàng." },
        },
        {
          src: "/images/projects/uth-purchasing-purchase-budget.webp",
          caption: { en: "Purchase budget by category: spent, committed and remaining. Approval is blocked when a request goes over.", vi: "Ngân sách mua theo ngành hàng: đã chi, đã cam kết, còn lại. Phiếu vượt ngân sách sẽ bị chặn duyệt." },
        },
        {
          src: "/images/projects/uth-purchasing-stock-by-lot-expiry.webp",
          caption: { en: "Stock by lot and expiry date, carried through the warehouse-to-store transfer.", vi: "Tồn kho theo lô và hạn sử dụng, giữ nguyên xuyên suốt luồng kho tổng → cửa hàng." },
        },
        {
          src: "/images/projects/uth-purchasing-expiry-promotion.webp",
          caption: { en: "A daily job finds near-expiry lots and creates promotions automatically.", vi: "Job chạy hằng ngày tìm lô sắp hết hạn và tự tạo khuyến mãi." },
        },
        {
          src: "/images/projects/uth-purchasing-store-sale-promo-price.webp",
          caption: { en: "A store sale with the promotional price applied automatically.", vi: "Đơn bán tại cửa hàng tự áp giá khuyến mãi." },
        },
      ],
      outcome: {
        en: "The fit-gap showed the problem was not missing purchasing features — standard Odoo already has them — but the handoffs between store, merchandising, warehouse and supplier. So the custom work went only there: one purchase request that carries the flow end to end, a budget check moved from after the purchase to before approval, a supply route chosen per line (central warehouse, supplier to warehouse, or supplier direct to store), and near-expiry lots turned into promotions automatically instead of being written off. Everything else was configuration, which kept the build to three modules extending 14 standard models, running on a live demo.",
        vi: "Fit-gap cho thấy vấn đề không nằm ở việc thiếu chức năng mua hàng — Odoo chuẩn đã có — mà ở các điểm bàn giao giữa cửa hàng, Merchandise, kho và nhà cung cấp. Vì vậy phần tự xây chỉ tập trung vào đó: một phiếu yêu cầu đi xuyên suốt cả luồng, kiểm tra ngân sách chuyển từ sau khi mua sang trước khi duyệt, chọn nguồn cung cho từng dòng (kho tổng, NCC giao về kho, hoặc NCC giao thẳng cửa hàng), và lô cận date tự chuyển thành khuyến mãi thay vì phải huỷ bỏ. Phần còn lại là cấu hình, nhờ đó chỉ cần 3 module mở rộng 14 model chuẩn, chạy trên bản demo trực tuyến.",
      },
      learnings: {
        en: "The happy path is the easy part. Most of the work is in the exceptions: shortages, damaged goods, near-expiry stock and budget overruns.",
        vi: "Luồng chuẩn là phần dễ. Phần lớn công sức nằm ở ngoại lệ: thiếu hàng, hàng hỏng, hàng cận date và vượt ngân sách.",
      },
      source: "https://github.com/HoangPhucTony/Mis_Purchasing_OdooProject",
      demo: "https://huggingface.co/spaces/IceMisha/OdooProject",
      demoLabel: { en: "Live demo", vi: "Xem demo" },
    },
    {
      slug: "uth-aqi-anomaly",
      role: "da",
      university: true,
      title: { en: "Air quality in 8 cities, checked every hour", vi: "Chất lượng không khí 8 thành phố, theo dõi từng giờ" },
      summary: {
        en: "A serverless pipeline scrapes AQI every hour, flags anomalies with Z-score and Isolation Forest, and feeds a Power BI dashboard straight from GitHub. I built the dashboard and the alerts.",
        vi: "Pipeline serverless cào AQI mỗi giờ, phát hiện bất thường bằng Z-score và Isolation Forest, rồi đổ thẳng vào dashboard Power BI từ GitHub. Tôi phụ trách dashboard và hệ thống cảnh báo.",
      },
      cover: "/images/projects/uth-aqi-unhealthy-hours.webp",
      facts: [
        {
          en: "Which cities and hours are really polluted, and when does a reading deserve an alert?",
          vi: "Thành phố nào, giờ nào thực sự ô nhiễm, và khi nào một số đo đáng để cảnh báo?",
        },
        {
          en: "67,450 hourly AQI and weather records for 8 Vietnamese cities (01/2025 – 03/2026), scraped from IQAir by GitHub Actions.",
          vi: "67.450 bản ghi AQI và thời tiết theo giờ của 8 thành phố Việt Nam (01/2025 – 03/2026), cào từ IQAir bằng GitHub Actions.",
        },
        {
          en: "Hanoi is above AQI 100 for 48.8% of hours, yet Z-score flagged its AQI only 13 times: when pollution is normal, “unusual” and “dangerous” stop meaning the same thing.",
          vi: "Hà Nội có AQI > 100 trong 48,8% số giờ, nhưng Z-score chỉ gắn cờ AQI 13 lần: khi ô nhiễm là chuyện thường ngày, “bất thường” và “nguy hiểm” không còn là một.",
        },
        {
          en: "Alerts should pair an absolute threshold with a one-sided z > 3, and warnings belong at 7–9 am, when all 8 cities peak.",
          vi: "Cảnh báo nên kết hợp ngưỡng tuyệt đối với Z-score một phía (z > 3), và nên phát lúc 7–9 giờ sáng — khi cả 8 thành phố cùng đạt đỉnh.",
        },
      ],
      stack: ["Power BI", "DAX", "Power Query", "Python", "Isolation Forest", "GitHub Actions"],
      period: { en: "2025 · UTH coursework, Artificial Intelligence", vi: "2025 · Đồ án môn Trí tuệ nhân tạo tại UTH" },
      myRole: {
        en: "Power BI and alerting in a team of 4 — live data connection, model, DAX and the automatic alert workflow",
        vi: "Phụ trách Power BI và cảnh báo trong nhóm 4 người — kết nối dữ liệu trực tiếp, mô hình, DAX và workflow cảnh báo tự động",
      },
      metrics: [
        { value: "67,450", label: { en: "hourly records across 8 cities", vi: "bản ghi theo giờ của 8 thành phố" } },
        { value: "24", label: { en: "CSV files read live by Power Query from GitHub, no gateway", vi: "file CSV được Power Query đọc trực tiếp từ GitHub, không cần gateway" } },
        { value: "90%", label: { en: "of Z-score flags also caught by Isolation Forest", vi: "điểm Z-score cũng được Isolation Forest phát hiện" } },
      ],
      context: {
        en: "Public AQI sites only show “right now”: nothing keeps the history, compares cities or raises a flag when a reading breaks the usual pattern. For the Artificial Intelligence course, our team of four built a pipeline that runs entirely on GitHub Actions at zero cost. Teammates built the Playwright crawler, the cleaning step and the two detection notebooks; I built the Power BI dashboard and the alerting that tells people when something is off.",
        vi: "Các trang AQI công khai chỉ cho biết “bây giờ”: không lưu lịch sử, không so sánh giữa các thành phố, không báo khi số liệu lệch khỏi quy luật. Trong môn Trí tuệ nhân tạo, nhóm 4 người xây pipeline chạy hoàn toàn trên GitHub Actions với chi phí 0 đồng. Các bạn phụ trách crawler Playwright, bước làm sạch và hai notebook phát hiện bất thường; tôi xây dashboard Power BI và hệ thống cảnh báo khi có điều bất thường.",
      },
      process: [
        {
          title: { en: "Use the repo as the data lake", vi: "Dùng chính repo làm kho dữ liệu" },
          body: {
            en: "Each workflow commits its output and triggers the next: scrape every hour → clean and resample to one row per hour → detect anomalies → analyse. No server, no database.",
            vi: "Mỗi workflow commit kết quả rồi kích hoạt bước tiếp theo: cào mỗi giờ → làm sạch, resample về 1 dòng mỗi giờ → phát hiện bất thường → phân tích. Không máy chủ, không database.",
          },
        },
        {
          title: { en: "Connect Power BI to live files", vi: "Kết nối Power BI với dữ liệu sống" },
          body: {
            en: "Power Query reads 24 CSV files (8 cities × 3 result types) from GitHub with Web.Contents and combines them into three fact tables, so one Refresh brings in the latest hour.",
            vi: "Power Query đọc 24 file CSV (8 thành phố × 3 loại kết quả) từ GitHub bằng Web.Contents và gộp thành 3 bảng fact, chỉ cần bấm Refresh là có số liệu giờ mới nhất.",
          },
        },
        {
          title: { en: "Model it for comparison", vi: "Dựng mô hình để so sánh" },
          body: {
            en: "An hourly date-time table, a city table, the six US EPA AQI levels, and a method selector so readers can switch between Z-score and Isolation Forest; anomaly counts and rates follow the selection.",
            vi: "Bảng thời gian theo giờ, bảng thành phố, 6 mức AQI theo chuẩn US EPA, và bộ chọn phương pháp để người xem chuyển giữa Z-score và Isolation Forest; số và tỷ lệ bất thường thay đổi theo lựa chọn.",
          },
        },
        {
          title: { en: "Alert without spamming", vi: "Cảnh báo mà không gây spam" },
          body: {
            en: "A script reads every anomaly file, detects column names on its own so it works for both methods, keeps only the latest hour in Vietnam time and merges duplicates. The workflow updates one “Live feed” GitHub Issue and sends an email, instead of opening a new issue each time.",
            vi: "Script đọc mọi file bất thường, tự nhận diện tên cột nên chạy được cho cả hai phương pháp, chỉ lấy mốc giờ mới nhất theo giờ Việt Nam và gộp cảnh báo trùng. Workflow cập nhật một Issue “Live feed” duy nhất và gửi email, thay vì mở issue mới mỗi lần.",
          },
        },
        {
          title: { en: "Read the results critically", vi: "Đọc kết quả một cách phản biện" },
          body: {
            en: "Compared the two methods city by city and checked where their flags disagreed — which is how the gap between “unusual” and “dangerous” showed up.",
            vi: "So sánh hai phương pháp theo từng thành phố và kiểm tra chỗ chúng gắn cờ khác nhau — chính từ đây lộ ra khoảng cách giữa “bất thường” và “nguy hiểm”.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-aqi-unhealthy-hours.webp",
          caption: { en: "Share of hours with AQI above 100: Hanoi 48.8%, Nha Trang never.", vi: "Tỷ lệ số giờ có AQI > 100: Hà Nội 48,8%, Nha Trang chưa lần nào." },
        },
        {
          src: "/images/projects/uth-aqi-anomaly-methods.webp",
          caption: { en: "Z-score flags 2.3% of hours, Isolation Forest 8.6%, covering 90% of the Z-score flags.", vi: "Z-score gắn cờ 2,3% số giờ, Isolation Forest 8,6% và bao trùm 90% điểm của Z-score." },
        },
      ],
      outcome: {
        en: "Three findings changed how the alerts should work. First, statistical outliers are not the same as danger: Hanoi is polluted almost half the time, so its spread is so wide that only AQI above about 231 looks unusual — an absolute threshold (e.g. AQI > 150) has to sit next to anomaly detection. Second, a two-sided Z-score also flags unusually clean air: 186 of Nha Trang's 189 AQI flags were low readings, so pollution alerts should use z > 3 only. Third, timing is predictable: all 8 cities peak at 7–9 am, and all 8 had their cleanest month in the rainy season, July–September. With no labelled data, Isolation Forest's flag count is set mostly by its contamination parameter, so Z-score served as the reference rather than the truth.",
        vi: "Ba phát hiện làm thay đổi cách cảnh báo nên hoạt động. Một, bất thường thống kê không đồng nghĩa với nguy hiểm: Hà Nội ô nhiễm gần nửa thời gian nên độ phân tán lớn đến mức chỉ AQI trên khoảng 231 mới bị coi là lạ — cần đặt một ngưỡng tuyệt đối (ví dụ AQI > 150) bên cạnh phát hiện bất thường. Hai, Z-score hai phía còn gắn cờ cả không khí sạch bất thường: 186/189 cờ AQI ở Nha Trang là giờ AQI thấp, nên cảnh báo ô nhiễm chỉ nên dùng z > 3. Ba, thời điểm có thể đoán trước: cả 8 thành phố đạt đỉnh lúc 7–9 giờ sáng, và cả 8 đều có tháng sạch nhất rơi vào mùa mưa tháng 7–9. Vì không có nhãn, số cờ của Isolation Forest phụ thuộc chủ yếu vào tham số contamination, nên Z-score được dùng làm mốc tham chiếu chứ không phải đáp án đúng.",
      },
      learnings: {
        en: "An anomaly detector answers “is this unusual?”, not “is this dangerous?”. A useful alert needs both questions.",
        vi: "Mô hình phát hiện bất thường trả lời “có lạ không?”, chứ không trả lời “có nguy hiểm không?”. Cảnh báo hữu ích cần cả hai câu hỏi.",
      },
      source: "https://github.com/heydaisyilu/Automatic-Anomaly-Detection-System",
    },
    {
      slug: "uth-timeseries-forecasting",
      role: "da",
      university: true,
      title: { en: "Seven forecasting models, one fair comparison", vi: "7 mô hình dự báo, một phép so sánh công bằng" },
      summary: {
        en: "ARIMA to LSTM on five real datasets, and an audit that caught four evaluation errors — including a “perfect” RMSE of 0 caused by data leakage.",
        vi: "Từ ARIMA đến LSTM trên 5 bộ dữ liệu thực tế, cùng một lần rà soát phát hiện 4 lỗi đánh giá — trong đó có RMSE “hoàn hảo” bằng 0 do rò rỉ dữ liệu.",
      },
      cover: "/images/projects/uth-timeseries-results.webp",
      facts: [
        {
          en: "For each kind of time series, which model actually fits — and can the test scores be trusted?",
          vi: "Với từng loại chuỗi thời gian, mô hình nào thực sự phù hợp — và có tin được điểm số trên tập test không?",
        },
        {
          en: "Five public datasets: monthly retail sales and air passengers, daily temperature, hourly electricity load (~143,000 hours) and load with weather (8,779 hours).",
          vi: "5 bộ dữ liệu công khai: doanh số bán lẻ và hành khách hàng không theo tháng, nhiệt độ theo ngày, điện năng theo giờ (~143.000 giờ) và điện năng kèm thời tiết (8.779 giờ).",
        },
        {
          en: "No model wins everywhere: SARIMA cut error 58–67% on seasonal monthly data, Linear Regression beat XGBoost on hourly lags, and LSTM's 30,113 parameters bought only ~2% over VAR.",
          vi: "Không có mô hình thắng mọi bài: SARIMA giảm 58–67% sai số trên dữ liệu tháng có mùa vụ, Linear Regression thắng XGBoost trên lag theo giờ, còn LSTM với 30.113 tham số chỉ hơn VAR khoảng 2%.",
        },
        {
          en: "Re-running every notebook exposed four methodology errors; fixing the leakage reversed the conclusion of one comparison.",
          vi: "Chạy lại toàn bộ code phát hiện 4 lỗi phương pháp; sửa lỗi rò rỉ dữ liệu làm đảo ngược kết luận của một phép so sánh.",
        },
      ],
      stack: ["Python", "statsmodels", "scikit-learn", "XGBoost", "TensorFlow / Keras", "pandas"],
      period: { en: "2026 · UTH coursework, Time Series Analysis (audited 10/2026)", vi: "2026 · Đồ án môn Phân tích chuỗi thời gian tại UTH (rà soát 10/2026)" },
      myRole: { en: "Individual project — every model, the evaluation and the audit", vi: "Dự án cá nhân — toàn bộ mô hình, đánh giá và rà soát" },
      metrics: [
        { value: "7", label: { en: "models benchmarked on 5 datasets", vi: "mô hình được so sánh trên 5 bộ dữ liệu" } },
        { value: "1.84%", label: { en: "MAPE forecasting hourly electricity with XGBoost", vi: "MAPE khi dự báo điện năng theo giờ bằng XGBoost" } },
        { value: "4", label: { en: "evaluation errors found and fixed in my own re-run", vi: "lỗi đánh giá tự phát hiện và sửa khi chạy lại" } },
      ],
      context: {
        en: "Most forecasting exercises run one model and report one number. This course project asked a harder question: for each kind of data, which model fits and why — checked against held-out test data in time order, not by eye on a chart.",
        vi: "Phần lớn bài tập dự báo chỉ chạy một mô hình và báo một con số. Đồ án này đặt câu hỏi khó hơn: với từng loại dữ liệu, mô hình nào phù hợp và vì sao — kiểm chứng trên tập test theo đúng thứ tự thời gian, không nhìn bằng mắt trên biểu đồ.",
      },
      process: [
        {
          title: { en: "Understand the series first", vi: "Hiểu chuỗi dữ liệu trước" },
          body: {
            en: "STL decomposition, ACF/PACF against a white-noise baseline, missing-value and outlier handling — to see trend and seasonality before choosing a model.",
            vi: "Phân rã STL, ACF/PACF so với chuỗi nhiễu trắng, xử lý giá trị thiếu và ngoại lai — để thấy xu hướng và mùa vụ trước khi chọn mô hình.",
          },
        },
        {
          title: { en: "Box–Jenkins, not p-values alone", vi: "Box–Jenkins, không chỉ nhìn p-value" },
          body: {
            en: "Second-order differencing passed the ADF test (p ≈ 3.5e-18) but distorted the ACF/PACF — a sign of over-differencing. Chose d = 1 with seasonal D = 1 instead.",
            vi: "Sai phân bậc 2 qua kiểm định ADF (p ≈ 3.5e-18) nhưng làm ACF/PACF méo bất thường — dấu hiệu over-differencing. Chọn d = 1 kết hợp sai phân mùa vụ D = 1.",
          },
        },
        {
          title: { en: "Forecasting as regression", vi: "Biến dự báo thành hồi quy" },
          body: {
            en: "Lag and rolling features for ~143,000 hours of load, tuned with TimeSeriesSplit. The previous hour carried 95% of the importance, and error nearly tripled from 1 to 3 hours ahead.",
            vi: "Đặc trưng lag và rolling cho ~143.000 giờ điện năng, tune bằng TimeSeriesSplit. Giờ liền trước chiếm 95% mức quan trọng, và sai số tăng gần gấp 3 khi dự báo xa từ 1 lên 3 giờ.",
          },
        },
        {
          title: { en: "One pipeline for every model", vi: "Một quy trình chung cho mọi mô hình" },
          body: {
            en: "VAR, XGBoost (99 features) and a stacked LSTM share one 70/15/15 split, one scaler fitted on train only, and a 1,317-step walk-forward test.",
            vi: "VAR, XGBoost (99 đặc trưng) và LSTM xếp chồng dùng chung một cách chia 70/15/15, một scaler chỉ fit trên tập train, và walk-forward 1.317 bước.",
          },
        },
        {
          title: { en: "Audit my own numbers", vi: "Tự rà soát số liệu" },
          body: {
            en: "A rolling feature that contained the target (RMSE = 0), LSTM inverse scaling on the year column instead of load, VAR undifferenced from the wrong point, and models compared on different test sets. All four fixed and re-run.",
            vi: "Đặc trưng rolling chứa chính giá trị cần dự báo (RMSE = 0), LSTM đảo chuẩn hoá nhầm cột năm thay vì cột tải, VAR đảo sai phân từ sai mốc, và các mô hình được so trên những tập test khác nhau. Cả 4 lỗi đã được sửa và chạy lại.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-timeseries-results.webp",
          caption: { en: "Test RMSE across four problems — the best model (blue) is different every time.", vi: "RMSE trên tập test qua 4 bài toán — mô hình tốt nhất (màu xanh) khác nhau ở mỗi bài." },
        },
        {
          src: "/images/projects/uth-timeseries-arima.webp",
          caption: { en: "ARIMA(1,1,1) only follows the trend.", vi: "ARIMA(1,1,1) chỉ bắt được xu hướng." },
        },
        {
          src: "/images/projects/uth-timeseries-sarima.webp",
          caption: { en: "SARIMA(1,1,1)(1,1,1,12) also captures the 12-month season.", vi: "SARIMA(1,1,1)(1,1,1,12) bắt được cả mùa vụ 12 tháng." },
        },
        {
          src: "/images/projects/uth-timeseries-horizon.webp",
          caption: { en: "Error nearly triples as the forecast moves from 1 to 3 hours ahead.", vi: "Sai số tăng gần gấp 3 khi dự báo xa từ 1 lên 3 giờ." },
        },
        {
          src: "/images/projects/uth-timeseries-lstm.webp",
          caption: { en: "LSTM, actual vs forecast over 1,317 walk-forward hours.", vi: "LSTM, thực tế và dự báo trên 1.317 giờ walk-forward." },
        },
      ],
      outcome: {
        en: "The data decides the model, not the model's reputation. SARIMA won on monthly seasonal data (RMSE 4.62 → 1.95 on retail, 97.50 → 31.79 on passengers) because it models the 12-month cycle. On hourly load, plain Linear Regression (118 MW) beat tuned XGBoost (137 MW), because the features were just recent past values. With weather added, LSTM was best at 7.30 MW, but only ~2% ahead of VAR — not worth 30,113 parameters if a simpler model has to be explained. The audit mattered most: the leakage fix flipped the Linear Regression vs XGBoost result, so the first version would have reported the wrong winner.",
        vi: "Dữ liệu quyết định mô hình, không phải danh tiếng của mô hình. SARIMA thắng trên dữ liệu tháng có mùa vụ (RMSE 4,62 → 1,95 với bán lẻ, 97,50 → 31,79 với hành khách) vì mô hình hoá được chu kỳ 12 tháng. Với điện năng theo giờ, Linear Regression đơn giản (118 MW) thắng XGBoost đã tune (137 MW), vì đặc trưng chỉ là giá trị gần nhất trong quá khứ. Khi thêm thời tiết, LSTM tốt nhất với 7,30 MW nhưng chỉ hơn VAR khoảng 2% — không đáng 30.113 tham số nếu cần giải thích mô hình. Quan trọng nhất là lần rà soát: sửa lỗi rò rỉ dữ liệu làm đảo kết quả Linear Regression và XGBoost, nghĩa là bản đầu tiên đã chọn sai mô hình thắng.",
      },
      learnings: {
        en: "A result that looks too good is a bug report. RMSE = 0 wasn't a great model; it was the answer leaking into the features.",
        vi: "Kết quả đẹp quá mức là một báo lỗi. RMSE = 0 không phải mô hình xuất sắc, mà là đáp án đã lọt vào đặc trưng.",
      },
      source: "https://github.com/HoangPhucTony/Mis_TimeSeries_Lesson",
    },
    {
      slug: "uth-badminton-odoo",
      role: "ba",
      university: true,
      title: { en: "Running a badminton club, from court booking to POS", vi: "Vận hành sân cầu lông: từ đặt sân đến thanh toán POS" },
      summary: {
        en: "Surveyed how a badminton court business runs, turned its rules into requirements, then designed and built a three-module Odoo 19 ERP on my own.",
        vi: "Tự khảo sát cách một doanh nghiệp sân cầu lông vận hành, chuyển quy tắc kinh doanh thành yêu cầu, rồi tự thiết kế và xây dựng hệ thống ERP 3 module trên Odoo 19.",
      },
      facts: [
        {
          en: "A court business sells time that can't overlap, priced by court type, peak hours and student status, and settles court fees together with drinks, shuttles and rentals at the counter.",
          vi: "Sân cầu lông bán thời gian không được phép trùng, giá thay đổi theo loại sân, giờ cao điểm và đối tượng HSSV, và tiền sân được thu chung với nước, cầu, thuê vợt tại quầy.",
        },
        {
          en: "Players, counter (POS) staff and the club manager — each with their own module and access rules.",
          vi: "Người chơi, nhân viên quầy POS và quản lý sân — mỗi vai trò có module và quyền truy cập riêng.",
        },
        {
          en: "Business survey, booking lifecycle and rules, fit-gap against standard Odoo, three custom modules plus PayPal payment and a Power BI export.",
          vi: "Khảo sát nghiệp vụ, vòng đời booking và quy tắc nghiệp vụ, fit-gap với Odoo chuẩn, 3 module tự viết cùng thanh toán PayPal và xuất dữ liệu cho Power BI.",
        },
        {
          en: "Double booking is blocked at the database level, and several courts and hours go into one booking order paid with a single POS order.",
          vi: "Đặt trùng sân bị chặn ngay ở tầng database, và nhiều sân, nhiều giờ được gộp vào một phiếu đặt, thanh toán bằng một đơn POS duy nhất.",
        },
      ],
      stack: ["Business survey", "Requirements", "Fit-gap analysis", "ERP", "Odoo 19", "Python", "OWL", "PostgreSQL"],
      period: { en: "06–07/2026 · UTH coursework", vi: "06–07/2026 · Đồ án môn học tại UTH" },
      myRole: { en: "Solo — business survey, requirements, design and the whole build", vi: "Cá nhân — khảo sát doanh nghiệp, yêu cầu, thiết kế và toàn bộ phần xây dựng" },
      metrics: [
        { value: "6", label: { en: "booking states, from request to paid", vi: "trạng thái booking, từ yêu cầu đến đã thanh toán" } },
        { value: "3 + 1", label: { en: "custom modules, plus a PayPal payment add-on", vi: "module tự viết, cùng module thanh toán PayPal" } },
        { value: "~23,000", label: { en: "lines of Python, JavaScript and XML, written solo", vi: "dòng Python, JavaScript và XML, tự viết" } },
      ],
      context: {
        en: "A badminton club lives on its schedule: every court-hour is sold once, prices change with the court and the time of day, and most visits end at the counter with drinks or shuttles on the same bill. I surveyed how a court business handles bookings, walk-ins, pricing and counter sales, then built the system end to end on Odoo 19. Instead of Odoo's Appointments or Website Booking, it uses its own booking models and a visual schedule grid, because those apps don't fit court-and-slot selling.",
        vi: "Sân cầu lông sống nhờ lịch đặt: mỗi giờ sân chỉ bán được một lần, giá thay đổi theo loại sân và khung giờ, và hầu hết lượt chơi kết thúc ở quầy với nước, cầu trên cùng hoá đơn. Tôi tự khảo sát cách một doanh nghiệp sân xử lý đặt sân, khách vãng lai, bảng giá và bán hàng tại quầy, rồi xây toàn bộ hệ thống trên Odoo 19. Thay vì dùng Appointments hay Website Booking của Odoo, hệ thống dùng model đặt sân riêng và lưới lịch trực quan, vì các app đó không hợp với kiểu bán theo sân và khung giờ.",
      },
      process: [
        {
          title: { en: "Survey the business", vi: "Khảo sát doanh nghiệp" },
          body: {
            en: "Followed how a booking really happens: booked ahead or walk-in, who confirms it, what happens on a no-show, how peak and student prices apply, and what else gets sold at the counter.",
            vi: "Tìm hiểu một lượt đặt sân thực sự diễn ra thế nào: đặt trước hay đến trực tiếp, ai xác nhận, xử lý khách không đến ra sao, giá giờ cao điểm và giá HSSV áp dụng thế nào, và quầy còn bán thêm gì.",
          },
        },
        {
          title: { en: "Define roles and the booking lifecycle", vi: "Xác định vai trò và vòng đời booking" },
          body: {
            en: "Request → confirmed → checked in, no-show or cancelled → paid, with walk-ins entering straight at checked in. Each role sees only its own part: players can't read POS, revenue or price rules.",
            vi: "Yêu cầu mới → đã xác nhận → check-in, không đến hoặc huỷ → đã thanh toán; khách vãng lai vào thẳng bước check-in. Mỗi vai trò chỉ thấy phần của mình: người chơi không đọc được POS, doanh thu hay bảng giá.",
          },
        },
        {
          title: { en: "Turn the rules into requirements", vi: "Biến quy tắc thành yêu cầu" },
          body: {
            en: "One court, one time, one customer; bookings only within opening hours; price by court type (standard / VIP) and peak hours; a configurable student discount (10% by default); consecutive slots on the same court merged into one booking.",
            vi: "Một sân, một khung giờ, một khách; chỉ đặt trong giờ mở cửa; giá theo loại sân (thường / VIP) và giờ cao điểm; giảm giá HSSV cấu hình được (mặc định 10%); các ô liên tiếp cùng sân được gộp thành một booking.",
          },
        },
        {
          title: { en: "Fit-gap against standard Odoo", vi: "Fit-gap với Odoo chuẩn" },
          body: {
            en: "Reused POS, Inventory and Contacts for counter sales and stock; built only what was missing — courts, price rules, bookings, booking orders and a schedule grid.",
            vi: "Tận dụng POS, Inventory và Contacts cho bán hàng tại quầy và tồn kho; chỉ tự xây phần còn thiếu — sân, bảng giá, booking, phiếu đặt sân và lưới lịch.",
          },
        },
        {
          title: { en: "Build it", vi: "Xây dựng" },
          body: {
            en: "A core manager module with an OWL schedule grid (30/60/90/120-minute slots), a staff module for check-in and walk-ins, and a player module with a multi-court cart. Overlaps are checked and the rows locked, so two people clicking the same slot at once can't both succeed. Added multi-branch staff accounts, PayPal payment and a CSV export package for Power BI.",
            vi: "Module quản lý lõi có lưới lịch OWL (ô 30/60/90/120 phút), module nhân viên cho check-in và khách vãng lai, và module người chơi với giỏ chọn nhiều sân. Trùng lịch được kiểm tra và khoá dòng dữ liệu, nên hai người bấm cùng một ô cùng lúc không thể cùng đặt thành công. Bổ sung tài khoản nhân viên theo chi nhánh, thanh toán PayPal và gói xuất CSV cho Power BI.",
          },
        },
      ],
      gallery: [],
      outcome: {
        en: "The central rule — one court, one time, one customer — holds even when two bookings arrive at the same moment, because it is enforced with a database row lock rather than only a form check. Players can pick several courts and hours in one cart, which becomes one booking order paid with one POS order, so the counter no longer splits a group's bill by court. The manager sees players on court, unpaid bookings and the busiest hours, and can export bookings, payments and POS lines for Power BI. One known gap is left: the student discount is shown on the booking but still applied by hand in POS.",
        vi: "Quy tắc cốt lõi — một sân, một khung giờ, một khách — vẫn đúng kể cả khi hai lượt đặt đến cùng lúc, vì được đảm bảo bằng khoá dòng ở database chứ không chỉ kiểm tra trên form. Người chơi chọn nhiều sân, nhiều giờ trong một giỏ, gộp thành một phiếu đặt và thanh toán bằng một đơn POS, nên quầy không phải tách hoá đơn của một nhóm theo từng sân. Quản lý thấy khách đang chơi, booking chưa thanh toán và khung giờ đông khách, và có thể xuất booking, thanh toán, dòng POS sang Power BI. Còn một điểm chưa xong: giảm giá HSSV hiển thị trên booking nhưng vẫn phải áp thủ công trong POS.",
      },
      learnings: {
        en: "A booking rule is only real if it holds when two people click at the same time. Write the requirement for the race, not just the form.",
        vi: "Quy tắc đặt sân chỉ có ý nghĩa khi vẫn đúng lúc hai người bấm cùng lúc. Hãy viết yêu cầu cho tình huống tranh chấp, không chỉ cho form nhập liệu.",
      },
      source: "https://github.com/HoangPhucTony/Mis_Badminton_OdooProject",
    },
  ] as Project[],

  contact: {
    headline: { en: "Hiring a DA or BA intern or fresher? Let's talk.", vi: "Bạn đang tuyển Intern hoặc Fresher DA / BA? Hãy trò chuyện nhé." } as L,
    note: {
      en: "Email is the fastest way to reach me. Happy to walk through any dashboard or requirements doc.",
      vi: "Email là cách nhanh nhất để liên hệ. Tôi sẵn sàng trình bày chi tiết bất kỳ dashboard hay tài liệu yêu cầu nào.",
    } as L,
    backdrop: "/images/backdrop-landmark.webp",
  },
};

export const projectsByRole = (role: Role) => profile.projects.filter((p) => p.role === role);
export const projectBySlug = (slug: string) => profile.projects.find((p) => p.slug === slug);
