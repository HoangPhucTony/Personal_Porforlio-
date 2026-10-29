// All personal content lives here, in English (en) and Vietnamese (vi).
// Edit this file — no component changes needed. Empty strings hide optional links/images.
import type { L } from "../i18n";

export type Role = "da" | "ba";

export type Project = {
  slug: string; // URL: /projects/<slug>
  role: Role;
  featured?: boolean;
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
  linkedin: "https://www.linkedin.com/in/do-hoang-phuc-303b53322/",
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
