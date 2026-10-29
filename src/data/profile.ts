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
        en: "Instead of one number going up or down, management could see how much came from patient volume, how much from prices and how much from order rates — and which specialties to talk to next.",
        vi: "Thay vì chỉ thấy một con số tăng hay giảm, ban lãnh đạo thấy được bao nhiêu đến từ lượng bệnh nhân, bao nhiêu từ đơn giá, bao nhiêu từ tỷ lệ chỉ định — và nên trao đổi tiếp với chuyên khoa nào.",
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
        en: "A report that answers the question its reader actually has, built on hypotheses agreed with the people closest to the work.",
        vi: "Một báo cáo trả lời đúng câu hỏi người đọc thực sự cần, dựa trên các giả thuyết đã thống nhất với những người trực tiếp làm việc.",
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
          en: "One shared view for the board and each department: what's overdue, who owns it, and what to do first.",
          vi: "Một góc nhìn chung cho ban giám đốc và từng phòng ban: việc gì quá hạn, ai phụ trách, việc nào làm trước.",
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
        en: "The board gets a one-screen answer to “where is the money”, and each department gets its own prioritised to-do list from the same data.",
        vi: "Ban giám đốc có câu trả lời trên một màn hình cho câu hỏi “tiền đang ở đâu”, còn mỗi phòng ban có danh sách việc cần làm theo thứ tự ưu tiên — từ cùng một nguồn dữ liệu.",
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
        en: "A dashboard that answers who, when and what to do: support programmes timed for April–May and October, a sleep-hygiene campaign for students sleeping under six hours, social activation for the most isolated, and a watch list of the 50 students who had a severe day. Every finding is a correlation in observational data, not a cause.",
        vi: "Một dashboard trả lời được ai, khi nào và làm gì: chương trình hỗ trợ tâm lý vào tháng 4–5 và tháng 10, chiến dịch ngủ đúng giờ cho nhóm ngủ dưới 6 giờ, hoạt động kết nối cho nhóm ít giao tiếp nhất, và danh sách theo dõi 50 sinh viên từng có ngày ở mức nặng. Mọi phát hiện đều là tương quan trên dữ liệu quan sát, không phải nhân quả.",
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
          en: "One purchase request carries the whole flow, from a store falling below its minimum to approval, supplier order, QC and restock, with budget control and exceptions built in.",
          vi: "Một phiếu yêu cầu mua hàng đi xuyên suốt cả luồng, từ lúc cửa hàng xuống dưới mức tồn tối thiểu đến phê duyệt, đặt hàng NCC, QC và bổ sung hàng, có sẵn kiểm soát ngân sách và xử lý ngoại lệ.",
        },
      ],
      stack: ["Stakeholder interviews", "BPMN", "Fit-gap analysis", "Odoo 19", "Python", "PostgreSQL"],
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
        en: "A working end-to-end prototype with a live demo. Three roles work on one purchase request with clear states instead of email and spreadsheets, and all nine fit-gap areas are covered: by configuration where Odoo fits, by custom modules where it doesn't.",
        vi: "Một prototype chạy được end-to-end, có demo trực tuyến. Ba vai trò làm việc trên cùng một phiếu yêu cầu với trạng thái rõ ràng thay cho e-mail và bảng tính, và cả 9 hạng mục fit-gap đều được đáp ứng: bằng cấu hình khi Odoo có sẵn, bằng module tự viết khi còn thiếu.",
      },
      learnings: {
        en: "The happy path is the easy part. Most of the work is in the exceptions: shortages, damaged goods, near-expiry stock and budget overruns.",
        vi: "Luồng chuẩn là phần dễ. Phần lớn công sức nằm ở ngoại lệ: thiếu hàng, hàng hỏng, hàng cận date và vượt ngân sách.",
      },
      source: "https://github.com/HoangPhucTony/Mis_Purchasing_OdooProject",
      demo: "https://huggingface.co/spaces/IceMisha/OdooProject",
      demoLabel: { en: "Live demo", vi: "Xem demo" },
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
