// All personal content lives here, in English (en) and Vietnamese (vi).
// Edit this file — no component changes needed. Empty strings hide optional links/images.
// Style: English in plain, common words (about IELTS 6.0) with correct DA/BA terms; Vietnamese formal and professional.
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

  status: { en: "Open to Intern / Fresher roles", vi: "Đang tìm kiếm vị trí Thực tập sinh / Fresher" } as L,
  location: { en: "Ho Chi Minh City", vi: "TP. Hồ Chí Minh" } as L,
  locationNote: { en: "Open to on-site, hybrid or remote work", vi: "Sẵn sàng làm việc onsite, hybrid hoặc remote" } as L,

  intro: {
    // "\n" splits the two lines; the second line is highlighted
    question: { en: "What story are\nyour numbers telling?", vi: "Những con số của bạn\nđang kể câu chuyện gì?" } as L,
    blurb: {
      en: "The points on the right keep exactly the same mean, spread and correlation while only their shape changes. Summary statistics can hide the real story, so I look beyond them to find it and turn it into decisions that teams can act on.",
      vi: "Các điểm dữ liệu bên cạnh luôn có cùng giá trị trung bình, độ lệch chuẩn và hệ số tương quan; chỉ có hình dạng thay đổi. Các chỉ số tổng hợp có thể che khuất câu chuyện thực sự. Tôi tìm ra câu chuyện đó và chuyển hóa thành những quyết định mà đội ngũ có thể triển khai.",
    } as L,
  },

  about: {
    // three lines; the middle one is muted
    headline: {
      en: "Hi, I'm Phuc.\nI find the numbers —\nand the needs behind them.",
      vi: "Xin chào, tôi là Phúc.\nTôi tìm hiểu những con số —\nvà nhu cầu đằng sau chúng.",
    } as L,
    // [[da:…]] / [[ba:…]] highlight a phrase in that role's colour
    paragraphs: [
      {
        en: "I approach every problem from two angles: [[da:what the data shows]] and [[ba:what the business actually needs]]. I clean, model and visualise data, then translate my findings into clear requirements, processes and decisions.",
        vi: "Tôi tiếp cận mỗi vấn đề từ hai góc độ: [[da:dữ liệu cho thấy điều gì]] và [[ba:doanh nghiệp thực sự cần gì]]. Tôi làm sạch, mô hình hóa và trực quan hóa dữ liệu, sau đó chuyển các phát hiện thành yêu cầu nghiệp vụ, quy trình và quyết định.",
      },
      {
        en: "I am currently seeking an Intern or Fresher position as a Data Analyst or Business Analyst, where I can work closely with real stakeholders and real data. I am eager to learn, comfortable starting with small tasks, and ready to support the team wherever I can add value.",
        vi: "Tôi đang tìm kiếm vị trí Data Analyst hoặc Business Analyst ở cấp độ Thực tập sinh hoặc Fresher, nơi tôi có thể làm việc trực tiếp với dữ liệu và người dùng thực tế. Tôi sẵn sàng bắt đầu từ những công việc nhỏ, chủ động học hỏi và hỗ trợ đội ngũ ở bất kỳ vị trí nào cần thiết.",
      },
    ] as L[],
    education: {
      school: { en: "University of Transport Ho Chi Minh City (UTH)", vi: "Trường Đại học Giao thông Vận tải TP.HCM (UTH)" } as L,
      short: { en: "University of Transport HCMC", vi: "ĐH Giao thông Vận tải TP.HCM" } as L,
      photoCaption: "UTH · HCMC",
      detail: { en: "Management Information Systems · Expected graduation: 2027", vi: "Hệ thống thông tin quản lý · Dự kiến tốt nghiệp năm 2027" } as L,
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
        stage: { en: "Looking for", vi: "Đang tìm kiếm" },
        title: { en: "DA / BA Intern or Fresher", vi: "Thực tập sinh hoặc Fresher DA / BA" },
        note: {
          en: "Available to start as an intern or fresher · on-site, hybrid or remote",
          vi: "Sẵn sàng bắt đầu ở vị trí Thực tập sinh hoặc Fresher · làm việc onsite, hybrid hoặc remote",
        },
      },
      {
        stage: { en: "Next", vi: "Tiếp theo" },
        title: { en: "Data / Business Analyst", vi: "Data / Business Analyst" },
        note: { en: "Take ownership of analysis and requirements end to end", vi: "Chủ động đảm nhận phân tích và yêu cầu nghiệp vụ từ đầu đến cuối" },
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
      name: { en: "Ask", vi: "Đặt câu hỏi" },
      desc: { en: "Clarify the business question with stakeholders before touching any data.", vi: "Cùng các bên liên quan xác định đúng câu hỏi kinh doanh trước khi làm việc với dữ liệu." },
      role: "ba" as Role,
      icon: "ask",
      tools: ["Stakeholder interviews", "Workshops", "User stories"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Collect", vi: "Thu thập" },
      desc: { en: "Query, join and extract the data needed to answer it.", vi: "Truy vấn, kết hợp và trích xuất dữ liệu cần thiết để trả lời câu hỏi." },
      role: "da" as Role,
      icon: "collect",
      tools: ["SQL", "Excel", "APIs"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Clean & model", vi: "Làm sạch & mô hình hóa" },
      desc: { en: "Resolve data types, missing values and duplicates, then build a data model that people can rely on.", vi: "Xử lý kiểu dữ liệu, giá trị thiếu và dữ liệu trùng lặp; xây dựng mô hình dữ liệu đáng tin cậy." },
      role: "da" as Role,
      icon: "clean",
      tools: ["Power Query", "Pandas", "Star schema"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Analyze", vi: "Phân tích" },
      desc: { en: "Explore, segment and test, looking at the whole distribution rather than just the average.", vi: "Khám phá, phân khúc và kiểm định — xem xét toàn bộ phân phối, không chỉ giá trị trung bình." },
      role: "da" as Role,
      icon: "analyze",
      tools: ["Python", "Statistics", "Segmentation"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Visualize", vi: "Trực quan hóa" },
      desc: { en: "Build dashboards that clearly answer the original question.", vi: "Xây dựng dashboard trả lời rõ ràng câu hỏi ban đầu." },
      role: "da" as Role,
      icon: "visualize",
      tools: ["Power BI", "Tableau", "DAX"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Specify & decide", vi: "Đặc tả & ra quyết định" },
      desc: { en: "Model the process and document requirements that the development team can build from.", vi: "Mô hình hóa quy trình và xây dựng tài liệu yêu cầu để đội phát triển triển khai." },
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
        en: "Data and business analysis for a private hospital group, ranging from framing questions with stakeholders to building dashboards for the board.",
        vi: "Phân tích dữ liệu và nghiệp vụ cho một bệnh viện tư nhân, từ việc cùng các bên liên quan xác định vấn đề đến xây dựng dashboard cho Ban Giám đốc.",
      },
      highlights: [
        {
          en: "Hypothesis-driven promotion analysis: defined the question and the target readers, interviewed the teams involved to structure their pain points into a MECE issue tree, then tested each hypothesis with SQL and presented the findings in a Google Sheets dashboard.",
          vi: "Phân tích chương trình khuyến mãi theo hướng giả thuyết: xác định câu hỏi và đối tượng đọc báo cáo, phỏng vấn các bộ phận liên quan để phân tách vấn đề thành cây vấn đề theo nguyên tắc MECE, sau đó kiểm chứng từng giả thuyết bằng SQL và trình bày kết quả trên dashboard Google Sheets.",
        },
        {
          en: "Revenue driver analysis for consultations, imaging and lab tests: broke net revenue down into visits × price × order rate and quantified how much each factor contributed to the change, down to specialty and doctor level.",
          vi: "Phân tích nguyên nhân sụt giảm doanh thu khám bệnh, cận lâm sàng (CLS) và xét nghiệm: tách doanh thu thành lượt khám × đơn giá × tỷ lệ chỉ định, đo lường mức ảnh hưởng của từng yếu tố đến cấp chuyên khoa và bác sĩ.",
        },
        {
          en: "An end-to-end corporate health-check dashboard for the CEO, developed with AI-assisted coding: an Apps Script web app with email-based access that tracks every contract from signing to payment across Sales, medical secretaries, doctors and Accounting, featuring overdue alerts, stage ageing and a cash-flow waterfall.",
          vi: "Xây dựng dashboard Khám sức khỏe doanh nghiệp end-to-end cho CEO với sự hỗ trợ của công cụ AI: web app Apps Script phân quyền theo email, theo dõi từng hợp đồng từ khi ký kết đến khi thanh toán qua các bộ phận Kinh doanh, Thư ký y khoa, Bác sĩ và Kế toán; có cảnh báo quá hạn, thời gian tồn đọng tại từng khâu và biểu đồ dòng tiền.",
        },
        {
          en: "Automation and reporting: an Apps Script tool that extracts data from PDFs into the data-entry sheet, a Looker Studio report on surgery and inpatient activity, and weekly contract updates for the management report.",
          vi: "Tự động hóa và báo cáo: công cụ Apps Script trích xuất dữ liệu từ PDF vào bảng nhập liệu, báo cáo Phẫu thuật – Nội trú trên Looker Studio và cập nhật số liệu hợp đồng AMC hằng tuần cho báo cáo quản trị.",
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
      desc: {
        en: "Lead Business Analyst and Project Manager for Ho Chi Minh City's citizen bus card issuance system (from multi-channel application intake to batch Excel export for card printing), directing a 40-member team and collaborating directly with MCPT leadership.",
        vi: "Lead Business Analyst kiêm Quản lý dự án cho hệ thống cấp phát thẻ xe buýt cho người dân TP.HCM (từ tiếp nhận hồ sơ đa kênh đến xuất file Excel cho đơn vị in thẻ), trực tiếp điều phối đội ngũ 40 thành viên và làm việc chặt chẽ với Ban Lãnh đạo MCPT.",
      },
      highlights: [
        {
          en: "Managed a 40-member cross-functional team divided into 4 squads (BA, Frontend/Mobile, Backend, QA), working directly with squad leaders to break down tasks, track milestones, and ensure deliverable quality.",
          vi: "Quản trị và điều phối đội ngũ 40 thành viên chia thành 4 nhóm (BA, Frontend/Mobile, Backend, QA), làm việc trực tiếp với các trưởng nhóm để phân rã nhiệm vụ, theo dõi tiến độ và kiểm soát chất lượng bàn giao.",
        },
        {
          en: "Served as the primary bridge between the student project team and MCPT leadership: gathered initial business requirements, designed on-site interview questionnaires to uncover operational pain points, and modeled BPMN AS-IS to TO-BE workflows.",
          vi: "Làm cầu nối giữa nhóm dự án sinh viên và Ban Lãnh đạo MCPT: tiếp nhận yêu cầu nghiệp vụ ban đầu, soạn bộ câu hỏi phỏng vấn khảo sát thực tế để xác định pain point, và mô hình hóa quy trình nghiệp vụ BPMN từ AS-IS sang TO-BE.",
        },
        {
          en: "Facilitated the initial client demo with MCPT leadership, defining the project baseline and aligning deliverables by establishing clear boundaries between in-scope and out-of-scope features.",
          vi: "Chủ trì xây dựng nội dung và điều phối buổi demo đầu tiên với Ban Lãnh đạo MCPT nhằm thống nhất phạm vi dự án, xác định rõ các tính năng bàn giao (in-scope) và ngoài phạm vi (out-of-scope).",
        },
        {
          en: "Collaborated with a co-lead BA to review and refine SRS and PRD specifications; contributed directly to database and data model design for citizen identity verification and card pool management.",
          vi: "Cùng một BA leader rà soát và hoàn thiện tài liệu SRS, PRD; trực tiếp tham gia một phần thiết kế cơ sở dữ liệu và mô hình dữ liệu (data model) phục vụ xác thực thông tin công dân và quản lý kho số thẻ.",
        },
        {
          en: "Held full ownership of the project documentation suite (SRS, PRD, Data Dictionary, UML diagrams, Use Cases, User Stories, interview guides, and UAT test scripts), managing project workflows and stakeholder communications across all phases without writing code.",
          vi: "Chịu trách nhiệm toàn diện bộ tài liệu dự án (SRS, PRD, Data Dictionary, sơ đồ UML, Use Case, User Story, câu hỏi phỏng vấn, kịch bản UAT test), quản lý dự án và duy trì kết nối giữa các bên liên quan xuyên suốt các giai đoạn mà không trực tiếp can thiệp code.",
        },
      ] as L[],
      tags: ["Business Analysis", "Project Management", "BPMN", "SRS", "PRD", "UML", "UAT", "Public transport"],
      logo: "/images/work/mcpt-logo.png",
      photo: "/images/work/mcpt-cover.webp",
    },
    {
      title: { en: "Data Analytics Certificate · VTI Academy", vi: "Chứng chỉ Data Analytics · VTI Academy" } as L,
      short: "VTI Academy",
      cardTitle: { en: "Data Analytics · VTI Academy", vi: "Data Analytics · VTI Academy" },
      period: { en: "10/2024", vi: "10/2024" } as L,
      desc: {
        en: "Completed the Data Analytics training course at VTI Academy.",
        vi: "Hoàn thành khóa đào tạo Data Analytics tại VTI Academy.",
      } as L,
      tags: ["Data Analytics"],
      logo: "/images/work/vti-logo.png",
      photo: "/images/certs/vti-data-analytics.webp",
      photoSoft: true,
      link: { href: "/images/certs/vti-data-analytics.webp", label: { en: "View certificate", vi: "Xem chứng chỉ" } as L },
    },
    {
      title: { en: "University of Transport HCMC · Management Information Systems", vi: "Trường ĐH Giao thông Vận tải TP.HCM · Hệ thống thông tin quản lý" } as L,
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
      title: { en: "What really drives imaging and lab revenue", vi: "Yếu tố nào thực sự quyết định doanh thu CLS và xét nghiệm" },
      summary: {
        en: "A variance analysis that breaks hospital revenue down into its drivers, so that a single total no longer hides what actually changed.",
        vi: "Phân tích chênh lệch, tách doanh thu bệnh viện thành các yếu tố cấu thành, giúp con số tổng không còn che khuất những thay đổi thực sự.",
      },
      cover: "/images/projects/sig-revenue-drivers.webp",
      facts: [
        {
          en: "When consultation, imaging and lab revenue changes, which factor is actually responsible?",
          vi: "Khi doanh thu khám bệnh, CLS và xét nghiệm biến động, yếu tố nào thực sự tạo ra biến động đó?",
        },
        {
          en: "Monthly revenue by branch, customer group, specialty and doctor, compared between two periods.",
          vi: "Doanh thu theo tháng, chi nhánh, nhóm khách hàng, chuyên khoa và bác sĩ, so sánh giữa hai kỳ.",
        },
        {
          en: "Growth in one driver can mask a decline in another, so the total on its own told a misleading story.",
          vi: "Một yếu tố tăng có thể che lấp yếu tố khác đang giảm; nếu chỉ nhìn con số tổng sẽ dẫn đến kết luận sai.",
        },
        {
          en: "Shifted the discussion from patient volume to order rates, broken down by specialty and doctor.",
          vi: "Chuyển trọng tâm thảo luận từ số lượng bệnh nhân sang tỷ lệ chỉ định, chi tiết theo chuyên khoa và bác sĩ.",
        },
      ],
      stack: ["Google Sheets", "Variance analysis", "Pivot tables", "Waterfall chart"],
      period: { en: "2026 · SIG internship", vi: "2026 · Thực tập tại SIG" },
      myRole: { en: "Data analyst intern: modelling, analysis and dashboard", vi: "Thực tập sinh phân tích dữ liệu — xây dựng mô hình, phân tích và dashboard" },
      metrics: [
        { value: "6", label: { en: "revenue drivers modelled", vi: "yếu tố doanh thu được mô hình hóa" } },
        { value: "3", label: { en: "levels of drill-down: hospital, specialty, doctor", vi: "cấp độ phân tích: toàn viện, chuyên khoa, bác sĩ" } },
        { value: "2", label: { en: "periods compared side by side", vi: "kỳ được so sánh song song" } },
      ],
      context: {
        en: "Saigon International General Hospital operates several branches, and management needed to understand what was behind the movement in consultation, imaging (CLS) and lab test (XN) revenue. Since a headline total cannot answer that question, the task was to identify which driver had actually changed.",
        vi: "Bệnh viện Đa khoa Quốc tế Sài Gòn có nhiều chi nhánh. Ban lãnh đạo cần hiểu nguyên nhân đằng sau biến động doanh thu khám bệnh, cận lâm sàng (CLS) và xét nghiệm (XN). Con số tổng không thể trả lời câu hỏi này; nhiệm vụ đặt ra là xác định yếu tố nào thực sự thay đổi.",
      },
      process: [
        {
          title: { en: "Write revenue as a formula", vi: "Biểu diễn doanh thu bằng công thức" },
          body: {
            en: "Net revenue = visits × (consultation price + imaging order rate × imaging price + lab order rate × lab price). This produces six drivers, each of which the hospital can directly influence.",
            vi: "Doanh thu NET = Lượt khám × (Đơn giá khám + Tỷ lệ chỉ định CLS × Đơn giá CLS + Tỷ lệ chỉ định XN × Đơn giá XN). Công thức gồm sáu yếu tố, và bệnh viện đều có thể tác động đến từng yếu tố.",
          },
        },
        {
          title: { en: "Prepare one flexible table", vi: "Chuẩn bị một bảng dữ liệu linh hoạt" },
          body: {
            en: "Kept the raw data in a single long table and drove every view from filters (period, branch, B2B/B2C and service group), so that any comparison is just one change away.",
            vi: "Lưu dữ liệu gốc trong một bảng dạng dài và xây dựng mọi góc nhìn bằng bộ lọc (kỳ, chi nhánh, B2B/B2C, nhóm dịch vụ), nhờ đó có thể thay đổi phép so sánh chỉ với một thao tác.",
          },
        },
        {
          title: { en: "Quantify each driver's contribution", vi: "Đo lường tác động của từng yếu tố" },
          body: {
            en: "Applied variance analysis using chain substitution, swapping in one driver at a time from the base period to the comparison period and visualising each step in a waterfall chart.",
            vi: "Áp dụng phương pháp thay thế liên hoàn: lần lượt thay từng yếu tố từ kỳ gốc sang kỳ so sánh, sau đó thể hiện từng bước bằng biểu đồ thác nước (waterfall).",
          },
        },
        {
          title: { en: "Go deeper where it matters", vi: "Phân tích sâu tại các điểm trọng yếu" },
          body: {
            en: "Repeated the breakdown by specialty and by doctor, placing visits, prices and order rates side by side to pinpoint exactly where each change was concentrated.",
            vi: "Lặp lại phân tích theo chuyên khoa và theo bác sĩ, đặt lượt khám, đơn giá và tỷ lệ chỉ định cạnh nhau để xác định chính xác nơi tập trung từng thay đổi.",
          },
        },
        {
          title: { en: "Present it for decision-making", vi: "Trình bày phục vụ ra quyết định" },
          body: {
            en: "A single dashboard sheet with ▲▼ change markers and the formula displayed on the page, allowing readers to follow the logic without opening the underlying data.",
            vi: "Một trang dashboard có ký hiệu ▲▼ thể hiện biến động và ghi rõ công thức ngay trên trang, giúp người đọc nắm được logic mà không cần mở dữ liệu gốc.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/sig-revenue-drivers.webp",
          caption: { en: "The analysis sheet, with figures blurred for confidentiality.", vi: "Trang phân tích — số liệu đã được làm mờ để bảo mật." },
        },
      ],
      outcome: {
        en: "While the total only showed that revenue had fallen, the breakdown explained why. Patient volume alone could not account for the decline: imaging and lab order rates had also shifted, and the change was concentrated in a handful of specialties and doctors rather than spread across the hospital. As a result, the next step was not a campaign to attract more patients, but a shortlist of specialties to review ordering patterns with, together with a formula the team can rerun every month to see which driver has moved.",
        vi: "Con số tổng chỉ cho thấy doanh thu giảm; việc phân tách yếu tố mới làm rõ nguyên nhân. Lượng bệnh nhân không giải thích được toàn bộ mức giảm: tỷ lệ chỉ định CLS và xét nghiệm cũng thay đổi, và thay đổi này tập trung ở một số chuyên khoa và bác sĩ thay vì trải đều toàn viện. Do đó, bước tiếp theo không phải là chiến dịch thu hút thêm bệnh nhân, mà là danh sách các chuyên khoa cần rà soát hoạt động chỉ định, cùng một công thức để đội ngũ cập nhật hằng tháng nhằm xác định yếu tố nào đã thay đổi.",
      },
      learnings: {
        en: "A flat total can conceal two forces pulling in opposite directions, so it is worth decomposing the number before drawing any conclusion.",
        vi: "Một con số tổng đi ngang có thể che giấu hai xu hướng ngược chiều. Cần phân tách trước khi đưa ra kết luận.",
      },
    },
    {
      slug: "sig-promotion-analysis",
      role: "da",
      title: { en: "Promotion analysis, starting with hypotheses", vi: "Phân tích khuyến mãi: bắt đầu từ giả thuyết" },
      cover: "/images/projects/sig-promotion-analysis.webp",
      summary: {
        en: "Before writing a single query: who is the report for, what decision do they need to make, and which hypotheses are actually worth testing?",
        vi: "Trước khi viết bất kỳ câu truy vấn nào: ai là người đọc báo cáo, họ cần đưa ra quyết định gì, và giả thuyết nào đáng được kiểm chứng?",
      },
      facts: [
        {
          en: "What is really driving promotion results, and what decision does the reader need to make?",
          vi: "Yếu tố nào thực sự quyết định hiệu quả khuyến mãi, và người đọc cần đưa ra quyết định gì?",
        },
        {
          en: "Promotion and revenue data explored with SQL, complemented by business context from interviews with the teams involved.",
          vi: "Dữ liệu khuyến mãi và doanh thu được khai thác bằng SQL; bối cảnh nghiệp vụ được thu thập qua phỏng vấn các bộ phận liên quan.",
        },
        {
          en: "A MECE issue tree narrowed a wide range of possible causes down to a few testable hypotheses before any analysis began.",
          vi: "Cây vấn đề MECE thu hẹp nhiều nguyên nhân tiềm năng thành một số giả thuyết có thể kiểm chứng trước khi bắt đầu phân tích.",
        },
        {
          en: "A Google Sheets dashboard tailored to its reader, with a level of detail that matches how comfortable they are with numbers.",
          vi: "Dashboard Google Sheets được thiết kế theo người đọc, với mức độ chi tiết phù hợp với cách họ tiếp nhận số liệu.",
        },
      ],
      stack: ["SQL", "Google Sheets", "XLOOKUP", "Pivot tables", "Issue tree"],
      period: { en: "2026 · SIG internship", vi: "2026 · Thực tập tại SIG" },
      myRole: { en: "Data analyst intern: scoping, analysis and dashboard", vi: "Thực tập sinh phân tích dữ liệu — xác định phạm vi, phân tích và xây dựng dashboard" },
      context: {
        en: "The hospital runs promotions across its services and wanted a clearer picture of their results. Rather than starting from the data, I adopted a structured, hypothesis-driven approach: frame the question, break it down, and then test only what matters.",
        vi: "Bệnh viện triển khai nhiều chương trình khuyến mãi cho các dịch vụ và cần đánh giá hiệu quả của chúng. Thay vì bắt đầu từ dữ liệu, tôi áp dụng phương pháp giải quyết vấn đề có cấu trúc theo hướng giả thuyết: xác định đúng câu hỏi, phân tách vấn đề, sau đó chỉ kiểm chứng những yếu tố thực sự quan trọng.",
      },
      process: [
        {
          title: { en: "Define the goal and the reader", vi: "Xác định mục tiêu và người đọc" },
          body: {
            en: "What is the topic, who will read the report, and how comfortable are they with numbers? The answers shaped the format of the output before any analysis took place.",
            vi: "Chủ đề là gì, ai sẽ đọc báo cáo và mức độ quen thuộc của họ với số liệu ra sao? Các câu trả lời này quyết định hình thức báo cáo trước khi bắt đầu phân tích.",
          },
        },
        {
          title: { en: "Break the problem down", vi: "Phân tách vấn đề" },
          body: {
            en: "Spoke directly with the teams involved to understand how promotions operate day to day, gathered their pain points and organised them into a MECE issue tree.",
            vi: "Trao đổi trực tiếp với các bộ phận liên quan để hiểu cách khuyến mãi vận hành trên thực tế, thu thập các vấn đề tồn đọng và sắp xếp thành cây vấn đề theo nguyên tắc MECE.",
          },
        },
        {
          title: { en: "Form hypotheses", vi: "Xây dựng giả thuyết" },
          body: {
            en: "Converted each branch of the tree into a specific, testable hypothesis, so that the analysis could go deep on a few questions instead of spreading thinly across everything.",
            vi: "Chuyển mỗi nhánh của cây vấn đề thành giả thuyết cụ thể, có thể kiểm chứng, giúp phân tích tập trung sâu vào một số câu hỏi thay vì dàn trải.",
          },
        },
        {
          title: { en: "Explore and test with SQL", vi: "Khai thác và kiểm chứng bằng SQL" },
          body: {
            en: "Queried the data first to understand its structure, and then to confirm or reject each hypothesis.",
            vi: "Truy vấn dữ liệu để nắm cấu trúc trước, sau đó xác nhận hoặc bác bỏ từng giả thuyết.",
          },
        },
        {
          title: { en: "Build the dashboard", vi: "Xây dựng dashboard" },
          body: {
            en: "Presented the findings in Google Sheets using SUMIFS, XLOOKUP, IFERROR and pivot tables, which are simple enough for the team to keep the report updated on their own.",
            vi: "Trình bày kết quả trên Google Sheets với SUMIFS, XLOOKUP, IFERROR và pivot table — các công cụ đơn giản để đội ngũ có thể tự cập nhật báo cáo.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/sig-promotion-analysis.webp",
          caption: { en: "Breaking the problem down by promotion policy and customer group, with figures blurred for confidentiality.", vi: "Phân tách vấn đề theo chính sách khuyến mãi và nhóm khách hàng — số liệu đã được làm mờ để bảo mật." },
        },
      ],
      outcome: {
        en: "Promotion cost was measured as a share of gross sales for every combination of policy and customer group, which reframed the question from “Are promotions working?” to “Which policy is discounting which customers, and by how much?”. Hypotheses that the data did not support were dropped before reaching the report, while those it confirmed became the headline of the dashboard, each one traceable to a pain point raised during the interviews.",
        vi: "Chi phí khuyến mãi được đo lường bằng tỷ lệ trên doanh thu gộp (KM / GrossSale) theo từng cặp chính sách × nhóm khách hàng. Nhờ đó, câu hỏi chuyển từ “Khuyến mãi có hiệu quả không?” thành “Chính sách nào đang giảm giá cho nhóm khách hàng nào, và ở mức bao nhiêu?”. Các giả thuyết không được dữ liệu ủng hộ đã được loại bỏ trước khi đưa vào báo cáo; các giả thuyết được xác nhận trở thành thông điệp chính của dashboard, mỗi giả thuyết gắn với một vấn đề mà các bộ phận đã nêu trong buổi phỏng vấn.",
      },
      learnings: {
        en: "The most valuable query is the one whose purpose you understand before you write it.",
        vi: "Câu truy vấn hữu ích nhất là câu truy vấn mà bạn hiểu rõ mục đích của nó.",
      },
    },
    {
      slug: "sig-kskdn-dashboard",
      role: "ba",
      featured: true,
      title: { en: "Corporate health checks, from contract to payment", vi: "Khám sức khỏe doanh nghiệp: từ hợp đồng đến dòng tiền" },
      cover: "/images/projects/sig-kskdn-overview.webp",
      note: {
        en: "All data on this page is fictional demo data that has been scrambled and blurred; these are not real reports.",
        vi: "Toàn bộ dữ liệu trên trang này là dữ liệu giả lập, đã được xáo trộn và làm mờ, không phải báo cáo thực tế.",
      },
      summary: {
        en: "Mapped a process spanning four departments, then built a web app that shows the CEO exactly where every contract, and every payment, is waiting.",
        vi: "Mô hình hóa quy trình đi qua bốn phòng ban, sau đó xây dựng web app giúp CEO nắm được mỗi hợp đồng và mỗi khoản thanh toán đang ở khâu nào.",
      },
      facts: [
        {
          en: "Each corporate health-check contract passes through four departments, yet nobody could see where it was stuck or how much money was outstanding.",
          vi: "Mỗi hợp đồng khám sức khỏe doanh nghiệp đi qua bốn phòng ban, nhưng không ai nắm được hợp đồng đang tắc ở đâu và bao nhiêu tiền đang chờ thu.",
        },
        {
          en: "CEO and board, Sales, medical secretaries and doctors, Accounting.",
          vi: "CEO và Ban Giám đốc, Kinh doanh, Thư ký y khoa và Bác sĩ, Kế toán.",
        },
        {
          en: "An end-to-end process map (5 stages) and an Apps Script web app with email-based access and four screens.",
          vi: "Bản đồ quy trình end-to-end (5 khâu) và web app Apps Script phân quyền theo email, gồm bốn màn hình.",
        },
        {
          en: "Overdue items are prioritised by amount × days late, so the largest sums at risk come first, for both the board and each department, from a single data source.",
          vi: "Các hạng mục quá hạn được xếp theo giá trị × số ngày trễ, giúp khoản tiền rủi ro lớn nhất luôn được ưu tiên — cho cả Ban Giám đốc và từng phòng ban, trên cùng một nguồn dữ liệu.",
        },
      ],
      stack: ["Google Apps Script", "Google Sheets", "JavaScript", "Process mapping", "AI-assisted coding"],
      period: { en: "2026 · SIG internship", vi: "2026 · Thực tập tại SIG" },
      myRole: { en: "Business analyst intern: process, requirements and build", vi: "Thực tập sinh BA — quy trình, yêu cầu nghiệp vụ và xây dựng sản phẩm" },
      metrics: [
        { value: "5", label: { en: "stages tracked end to end", vi: "khâu được theo dõi end-to-end" } },
        { value: "4", label: { en: "departments on one screen", vi: "phòng ban trên cùng một màn hình" } },
        { value: "11", label: { en: "automatic data-quality checks", vi: "nhóm kiểm tra chất lượng dữ liệu tự động" } },
      ],
      context: {
        en: "Corporate health checks (KSKDN) are a B2B service: a company signs an annual contract (AMC), its employees are examined, doctors finalise the medical conclusions, and Accounting sends the fee sheet, issues the invoice and collects payment. Progress was recorded in a shared tracking sheet that was difficult to read at a glance, particularly for the CEO.",
        vi: "Khám sức khỏe doanh nghiệp (KSKDN) là dịch vụ B2B: doanh nghiệp ký hợp đồng (AMC), nhân viên được khám, bác sĩ hoàn tất hồ sơ kết luận, Kế toán gửi bảng phí, xuất hóa đơn và thu tiền. Tiến độ được theo dõi trên một file dùng chung, khó nắm bắt nhanh, đặc biệt đối với CEO.",
      },
      process: [
        {
          title: { en: "Map the end-to-end process", vi: "Mô hình hóa quy trình end-to-end" },
          body: {
            en: "Exam done → medical conclusions (in parallel) → fee sheet → invoice → payment, with the owner and deadline of each stage agreed with Sales, the medical secretaries and Accounting.",
            vi: "Hoàn tất khám → hồ sơ kết luận (song song) → bảng phí → xuất hóa đơn → thu tiền; thống nhất người phụ trách và thời hạn của từng khâu với bộ phận Kinh doanh, Thư ký y khoa và Kế toán.",
          },
        },
        {
          title: { en: "Start from each user's question", vi: "Bắt đầu từ câu hỏi của từng người dùng" },
          body: {
            en: "CEO: Where is the money, and what is stuck? Department heads: What should come first, and who is overloaded? Staff: What is on my list today?",
            vi: "CEO: Dòng tiền đang ở đâu, khâu nào đang tắc nghẽn? Trưởng bộ phận: Việc nào cần ưu tiên, ai đang quá tải? Nhân viên: Hôm nay tôi cần xử lý những việc gì?",
          },
        },
        {
          title: { en: "Design four screens", vi: "Thiết kế bốn màn hình" },
          body: {
            en: "Overview (a summary line, contract status, a cash waterfall from quote to collected, 12-month trend); Actions (by department, priority = amount × days late, list / kanban / calendar / staff views, one-click reminder messages); Contract detail; and Settings for admins.",
            vi: "Tổng quan (câu kết luận, trạng thái hợp đồng, biểu đồ thác nước dòng tiền từ báo giá đến đã thu, xu hướng 12 tháng); Cần xử lý (theo phòng ban, mức ưu tiên = giá trị × số ngày trễ, hiển thị dạng danh sách / kanban / lịch / theo nhân viên, sao chép nhanh tin nhắn nhắc việc); Chi tiết hợp đồng; và Cài đặt dành cho quản trị viên.",
          },
        },
        {
          title: { en: "Build it with AI-assisted coding", vi: "Xây dựng với sự hỗ trợ của AI" },
          body: {
            en: "A Google Apps Script web app that reads the tracking sheet without ever writing to it, with admin and viewer access controlled by Google email. It was developed with AI-assisted coding and refined over several versions based on user feedback.",
            vi: "Web app Google Apps Script chỉ đọc dữ liệu từ file theo dõi, không ghi đè, phân quyền quản trị viên và người xem theo tài khoản Google. Sản phẩm được xây dựng với sự hỗ trợ của công cụ AI và cải tiến qua nhiều phiên bản dựa trên phản hồi người dùng.",
          },
        },
        {
          title: { en: "Make data quality visible", vi: "Minh bạch chất lượng dữ liệu" },
          body: {
            en: "Eleven checks flag issues such as missing due dates, duplicate contract IDs or contracts paid in full but not yet closed, so the sheet remains the single source of truth instead of being silently corrected.",
            vi: "Mười một nhóm kiểm tra tự động đánh dấu các lỗi như thiếu thời hạn, trùng mã hợp đồng, hoặc đã thu đủ tiền nhưng chưa đóng hợp đồng — giúp file gốc luôn là nguồn dữ liệu chuẩn duy nhất thay vì bị chỉnh sửa ngầm.",
          },
        },
        {
          title: { en: "Keep it up to date", vi: "Duy trì số liệu cập nhật" },
          body: {
            en: "Updated the AMC contract data every week so the management report was ready on time.",
            vi: "Cập nhật số liệu hợp đồng AMC hằng tuần để báo cáo cho Ban Giám đốc luôn đúng tiến độ.",
          },
        },
      ],
      // screenshots from the local harness with a scrambled demo dataset: contracts dropped, every amount randomised
      gallery: [
        {
          src: "/images/projects/sig-kskdn-overview.webp",
          caption: { en: "Overview: a one-line summary, cash collected in the last 12 weeks and four headline KPIs (fictional data, blurred).", vi: "Tổng quan: câu kết luận, dòng tiền thu về trong 12 tuần gần nhất và bốn chỉ số chính (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-charts.webp",
          caption: { en: "Revenue by month, the cash funnel from quote to collection, and each stage's performance against its deadline (fictional data, blurred).", vi: "Dòng tiền theo tháng, phễu dòng tiền từ báo giá đến đã thu, và hiệu suất từng khâu so với thời hạn (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-actions.webp",
          caption: { en: "Actions: what is overdue, what to prioritise and which stage is stuck (fictional data, blurred).", vi: "Cần xử lý: hạng mục quá hạn, việc cần ưu tiên và khâu đang tắc nghẽn (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-contract.webp",
          caption: { en: "The five stages of one contract, with the medical conclusions running in parallel.", vi: "Năm khâu của một hợp đồng, trong đó hồ sơ kết luận được xử lý song song." },
        },
        {
          src: "/images/projects/sig-kskdn-timeline.webp",
          caption: { en: "The same contract on a timeline: plan, delay and the lead-time target.", vi: "Cùng hợp đồng trên trục thời gian: kế hoạch, thời gian trễ và mục tiêu lead time." },
        },
      ],
      outcome: {
        en: "“Where is the money?” can now be answered stage by stage: the cash waterfall shows how much is still waiting at the fee sheet, invoice or payment stage, rather than a single outstanding total. Ranking by amount × days late ensures that one large overdue contract is handled before many small ones, a priority that a simple count of overdue items would hide. Meanwhile, the eleven data-quality checks expose errors at the source, such as missing due dates, duplicate IDs and contracts paid but never closed, instead of allowing them to distort the charts unnoticed.",
        vi: "Câu hỏi “Dòng tiền đang ở đâu?” nay đã có câu trả lời đến từng khâu: biểu đồ thác nước cho thấy số tiền còn tồn đọng tại khâu bảng phí, hóa đơn hay thanh toán, thay vì chỉ một con số tổng. Việc xếp ưu tiên theo giá trị × số ngày trễ giúp một hợp đồng giá trị lớn bị trễ được xử lý trước nhiều hợp đồng nhỏ — điều mà cách đếm số hạng mục quá hạn thông thường sẽ bỏ sót. Đồng thời, mười một nhóm kiểm tra chất lượng dữ liệu phát hiện lỗi ngay tại file gốc, như thiếu thời hạn, trùng mã hoặc đã thu đủ tiền nhưng chưa đóng hợp đồng, thay vì để các lỗi này làm sai lệch biểu đồ.",
      },
      learnings: {
        en: "A CEO dashboard is a process problem first: until every stage had an owner and a deadline, there was nothing meaningful to chart.",
        vi: "Dashboard cho CEO trước hết là bài toán quy trình: khi chưa có khâu nào được xác định người phụ trách và thời hạn, thì chưa có dữ liệu để trực quan hóa.",
      },
    },
    {
      slug: "uth-student-mental-health",
      role: "da",
      university: true,
      title: { en: "Student mental health, from sensor data to decisions", vi: "Sức khỏe tinh thần sinh viên: từ dữ liệu cảm biến đến quyết định" },
      summary: {
        en: "A data warehouse and a four-page Power BI dashboard that help a university counselling team identify who is at risk, when, and how to respond.",
        vi: "Kho dữ liệu và dashboard Power BI bốn trang giúp bộ phận tư vấn tâm lý của nhà trường xác định sinh viên nào có nguy cơ, vào thời điểm nào và cần can thiệp ra sao.",
      },
      cover: "/images/projects/uth-mental-health-overview.webp",
      facts: [
        {
          en: "How are students coping, which groups are at risk, and when should the university intervene?",
          vi: "Tình trạng tinh thần của sinh viên ra sao, nhóm nào có nguy cơ, và nhà trường nên can thiệp vào thời điểm nào?",
        },
        {
          en: "Dartmouth's public College Experience Dataset: smartphone sensing and mood surveys from 189 students over 8,809 observed days (2017–2022).",
          vi: "Bộ dữ liệu công khai College Experience Dataset của Đại học Dartmouth: dữ liệu cảm biến điện thoại và khảo sát tâm lý của 189 sinh viên trong 8.809 ngày quan sát (2017–2022).",
        },
        {
          en: "26.5% of students experienced at least one day of severe anxiety or depression. Risk peaks in May and October, and students sleeping under six hours score 18% higher on PHQ-4.",
          vi: "26,5% sinh viên có ít nhất một ngày lo âu hoặc trầm cảm ở mức nặng. Rủi ro cao nhất vào tháng 5 và tháng 10; nhóm ngủ dưới 6 giờ có điểm PHQ-4 cao hơn 18%.",
        },
        {
          en: "Every dashboard page ends with a recommendation: seasonally timed support, a sleep campaign, social engagement activities and an at-risk watch list.",
          vi: "Mỗi trang dashboard kết thúc bằng một đề xuất: hỗ trợ theo thời điểm, chiến dịch cải thiện giấc ngủ, hoạt động kết nối xã hội và danh sách theo dõi nhóm có nguy cơ.",
        },
      ],
      stack: ["Power BI", "DAX", "Star schema", "SQL Server", "SSIS", "SSAS"],
      period: { en: "11/2025 · UTH coursework (reviewed 10/2026)", vi: "11/2025 · Đồ án môn học tại UTH (rà soát lại 10/2026)" },
      myRole: {
        en: "Power BI developer in a team of 6: data model, DAX, dashboards and insights",
        vi: "Phụ trách Power BI trong nhóm 6 thành viên — mô hình dữ liệu, DAX, dashboard và phân tích insight",
      },
      metrics: [
        { value: "24", label: { en: "DAX measures, plus 11 calculated columns", vi: "measure DAX, cùng 11 calculated column" } },
        { value: "15", label: { en: "report pages: 4 dashboards and 11 tooltip, insight and recommendation pages", vi: "trang báo cáo: 4 dashboard và 11 trang tooltip, insight, đề xuất" } },
        { value: "6", label: { en: "data errors identified and fixed during my own quality review", vi: "lỗi số liệu được tự phát hiện và khắc phục trong quá trình rà soát" } },
      ],
      context: {
        en: "Students are particularly vulnerable to stress, anxiety and depression, yet universities rarely have a data-driven way to detect it early. For the Data Warehousing & Decision Support Systems course, our team of six built a data warehouse from five years of smartphone sensing and mood surveys. While my teammates handled the Python cleaning, the SSIS ETL and the SSAS cube, I built the Power BI layer that a counselling team would actually use.",
        vi: "Sinh viên là nhóm có nguy cơ cao về căng thẳng, lo âu và trầm cảm, nhưng nhà trường hiếm khi có công cụ dựa trên dữ liệu để phát hiện sớm. Trong học phần Kho dữ liệu và Hệ thống hỗ trợ ra quyết định, nhóm sáu thành viên đã xây dựng kho dữ liệu từ năm năm dữ liệu cảm biến điện thoại và khảo sát tâm lý. Các thành viên khác phụ trách làm sạch dữ liệu bằng Python, ETL bằng SSIS và xây dựng cube SSAS; tôi đảm nhận lớp Power BI — phần mà bộ phận tư vấn trực tiếp sử dụng.",
      },
      process: [
        {
          title: { en: "Build the model in Power BI", vi: "Xây dựng mô hình trong Power BI" },
          body: {
            en: "Imported seven tables from SQL Server into a star schema (one fact table, six dimensions and a date table) and organised the measures into four dedicated tables to keep the model easy to maintain.",
            vi: "Import bảy bảng từ SQL Server theo mô hình Star Schema (một bảng Fact, sáu bảng Dimension và bảng ngày), tách measure thành bốn bảng riêng để mô hình gọn gàng và dễ bảo trì.",
          },
        },
        {
          title: { en: "Calculate every average over the fact table", vi: "Tính mọi giá trị trung bình qua bảng Fact" },
          body: {
            en: "The dimension tables contain 172,797 rows, whereas only 8,809 days have a survey response. The measures therefore use AVERAGEX and RELATED over the fact table, preventing days without a survey from distorting the KPIs.",
            vi: "Các bảng Dimension có 172.797 dòng nhưng chỉ 8.809 ngày có khảo sát. Measure sử dụng AVERAGEX và RELATED qua bảng Fact để những ngày không có khảo sát không ảnh hưởng đến KPI.",
          },
        },
        {
          title: { en: "One page for each business question", vi: "Mỗi trang trả lời một câu hỏi nghiệp vụ" },
          body: {
            en: "Overview, Sleep & Affect, Device Location and Audio Social, with synced slicers, page navigation and a Documentation page that explains the PHQ-4, SSE-3 and stress scales.",
            vi: "Gồm các trang Overview, Sleep & Affect, Device Location và Audio Social, có slicer đồng bộ, thanh điều hướng và trang Documentation giải thích các thang đo PHQ-4, SSE-3 và Stress.",
          },
        },
        {
          title: { en: "From insight to recommendation", vi: "Từ insight đến đề xuất" },
          body: {
            en: "Eleven supporting pages follow a tooltip → insight → recommendation path, enabling non-technical readers to move from a chart to a decision.",
            vi: "Mười một trang bổ trợ đi theo trình tự tooltip → insight → đề xuất, giúp người đọc không có chuyên môn kỹ thuật đi từ biểu đồ đến quyết định.",
          },
        },
        {
          title: { en: "Check my own numbers", vi: "Tự kiểm chứng số liệu" },
          body: {
            en: "After the course, I re-examined the model with DAX queries and uncovered six errors, including a percentage displayed as 0.26, sleep counts inflated roughly 19-fold by the wrong grain, and a placeholder row that masked missing audio data. All of them were fixed, and any causal wording was revised to describe correlation.",
            vi: "Sau khi kết thúc học phần, tôi truy vấn lại mô hình bằng DAX và phát hiện sáu lỗi, trong đó có tỷ lệ phần trăm hiển thị thành 0.26, số đêm ngủ bị nhân lên khoảng 19 lần do sai độ chi tiết (grain), và một dòng giữ chỗ che khuất dữ liệu âm thanh bị thiếu. Toàn bộ lỗi đã được khắc phục, đồng thời các nhận định mang tính nhân quả được điều chỉnh thành tương quan.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-mental-health-overview.webp",
          caption: { en: "Overview: wellbeing, stress and activity by month, with shared filters on the right.", vi: "Overview: sức khỏe tinh thần, mức độ căng thẳng và vận động theo tháng, bộ lọc chung ở bên phải." },
        },
        {
          src: "/images/projects/uth-mental-health-sleep.webp",
          caption: { en: "Sleep & Affect: bedtimes and wellbeing by sleep duration.", vi: "Sleep & Affect: giờ đi ngủ và sức khỏe tinh thần theo thời lượng ngủ." },
        },
        {
          src: "/images/projects/uth-mental-health-location.webp",
          caption: { en: "Device Location: where students spend their time, by social level and day of the week.", vi: "Device Location: nơi sinh viên dành thời gian, theo mức độ giao tiếp xã hội và ngày trong tuần." },
        },
        {
          src: "/images/projects/uth-mental-health-audio.webp",
          caption: { en: "Audio Social: conversation time compared with anxiety and depression levels.", vi: "Audio Social: thời lượng hội thoại so với mức độ lo âu và trầm cảm." },
        },
        {
          src: "/images/projects/uth-mental-health-model.webp",
          caption: { en: "The Power BI model: one fact table, six dimensions and four measure tables.", vi: "Mô hình Power BI: một bảng Fact, sáu bảng Dimension và bốn bảng measure." },
        },
        {
          src: "/images/projects/uth-mental-health-bedtime.webp",
          caption: { en: "84.6% of nights begin after 11 pm, more than half of them between midnight and 2 am.", vi: "84,6% số đêm bắt đầu ngủ sau 23 giờ, trong đó hơn một nửa rơi vào khoảng 0–2 giờ sáng." },
        },
      ],
      outcome: {
        en: "Risk is concentrated rather than evenly spread. 26.5% of students had at least one severe day, and these days cluster in May and October, which suggests that support should be timed to those periods instead of being distributed evenly across the year. Sleep emerges as the clearest factor: 84.6% of nights begin after 11 pm, and students sleeping under six hours score 18% higher on PHQ-4. These findings translated into four actions: extra counselling capacity in April–May and October, a sleep campaign targeting students who sleep under six hours, social engagement for the most isolated students, and a watch list of the 50 students who had a severe day. All of these are correlations in observational data rather than causal effects.",
        vi: "Rủi ro không phân bố đồng đều. 26,5% sinh viên có ít nhất một ngày ở mức nặng, và những ngày này tập trung vào tháng 5 và tháng 10; do đó, các hoạt động hỗ trợ cần được triển khai đúng thời điểm thay vì dàn trải cả năm. Giấc ngủ là yếu tố rõ ràng nhất: 84,6% số đêm bắt đầu ngủ sau 23 giờ, và nhóm ngủ dưới 6 giờ có điểm PHQ-4 cao hơn 18%. Từ đó, bốn hành động được đề xuất: tăng cường tư vấn vào tháng 4–5 và tháng 10, chiến dịch cải thiện giấc ngủ cho nhóm ngủ dưới 6 giờ, hoạt động kết nối cho nhóm ít giao tiếp nhất, và danh sách theo dõi 50 sinh viên từng có ngày ở mức nặng. Tất cả các phát hiện đều là tương quan trên dữ liệu quan sát, không phải quan hệ nhân quả.",
      },
      learnings: {
        en: "A dashboard is only as accurate as its grain, so it is essential to check which table a number is calculated over before trusting it.",
        vi: "Dashboard chỉ chính xác khi độ chi tiết (grain) được xác định đúng. Cần kiểm tra mỗi con số được tính trên bảng nào trước khi tin tưởng vào nó.",
      },
    },
    {
      slug: "uth-mis-purchasing",
      role: "ba",
      university: true,
      title: { en: "Retail purchasing, from store shortage to supplier order", vi: "Quy trình mua hàng bán lẻ: từ cửa hàng thiếu hàng đến đơn đặt hàng nhà cung cấp" },
      summary: {
        en: "Interviewed a multi-store retailer to identify where purchasing breaks down, then produced BPMN models, a fit-gap analysis and three custom Odoo 19 modules with a live demo.",
        vi: "Phỏng vấn trực tiếp một chuỗi bán lẻ để xác định điểm nghẽn trong quy trình mua hàng, sau đó xây dựng mô hình BPMN, phân tích fit-gap và phát triển ba module Odoo 19 có bản demo trực tuyến.",
      },
      cover: "/images/projects/uth-purchasing-pr-fulfillment-options.webp",
      note: {
        en: "Academic prototype. The process analysis is based on a study of purchasing at Central Retail Vietnam; the project is not affiliated with or endorsed by Central Retail. Screenshots use sample data.",
        vi: "Sản phẩm mẫu phục vụ mục đích học thuật. Phần phân tích quy trình dựa trên khảo sát quy trình mua hàng tại Central Retail Vietnam; dự án không liên kết hay được bảo trợ bởi Central Retail. Ảnh chụp màn hình sử dụng dữ liệu mẫu.",
      },
      facts: [
        {
          en: "Stores, merchandising, the warehouse and suppliers coordinated through email and spreadsheets, which left data out of sync, gave no early warning for low or near-expiry stock, and meant budgets were only checked after purchases were made.",
          vi: "Cửa hàng, bộ phận Merchandise, kho và nhà cung cấp trao đổi qua email và bảng tính: dữ liệu không đồng bộ, không có cảnh báo sớm khi thiếu hàng hoặc hàng cận hạn sử dụng, và ngân sách chỉ được kiểm tra sau khi đã mua.",
        },
        {
          en: "Store staff, the merchandising team, warehouse QC and suppliers, three of whom work inside the system on the same purchase request.",
          vi: "Nhân viên cửa hàng, bộ phận Merchandise, bộ phận QC kho và nhà cung cấp; trong đó ba vai trò làm việc trực tiếp trên cùng một phiếu yêu cầu mua hàng.",
        },
        {
          en: "Interview guide and pain-point list, BPMN AS-IS / TO-BE models, a fit-gap table against standard Odoo, business rules, and three custom modules deployed to a live demo.",
          vi: "Bộ câu hỏi phỏng vấn và danh sách vấn đề, mô hình BPMN AS-IS / TO-BE, bảng fit-gap so với Odoo tiêu chuẩn, bộ quy tắc nghiệp vụ và ba module tự phát triển đã triển khai trên bản demo trực tuyến.",
        },
        {
          en: "Budget control shifted from after spending to before approval, and a single purchase request replaces lengthy email chains between three roles.",
          vi: "Việc kiểm tra ngân sách được chuyển từ sau khi chi sang trước khi phê duyệt, và một phiếu yêu cầu mua hàng thay thế chuỗi email giữa ba vai trò.",
        },
      ],
      stack: ["Stakeholder interviews", "BPMN", "Fit-gap analysis", "ERP", "Odoo 19", "Python", "PostgreSQL"],
      period: { en: "04–05/2026 · UTH coursework (made public 10/2026)", vi: "04–05/2026 · Đồ án môn học tại UTH (công bố 10/2026)" },
      myRole: {
        en: "Business analyst and lead developer in a team of 6: business interviews, pain points and requirements, followed by about 70% of the code and the deployment",
        vi: "Business Analyst kiêm lập trình viên chính trong nhóm 6 thành viên — phỏng vấn doanh nghiệp, xác định vấn đề và yêu cầu, sau đó phát triển khoảng 70% mã nguồn và triển khai hệ thống",
      },
      metrics: [
        { value: "9", label: { en: "fit-gap areas covered: configured where Odoo fits, built where it does not", vi: "hạng mục fit-gap được đáp ứng: cấu hình khi Odoo có sẵn, tự phát triển khi còn thiếu" } },
        { value: "3", label: { en: "custom modules extending 14 standard Odoo models instead of modifying the core", vi: "module tự phát triển, mở rộng 14 model tiêu chuẩn của Odoo mà không chỉnh sửa mã lõi" } },
        { value: "~70%", label: { en: "of about 13,700 lines of code written by me", vi: "trong tổng số khoảng 13.700 dòng mã do tôi viết" } },
      ],
      context: {
        en: "Multi-store retail chains replenish stock from two sources: the central warehouse and external suppliers. For the MIS Practical Project course, I prepared an interview guide and interviewed staff at a large retailer about how purchasing actually works in practice. The pain points were clear: requests were raised manually over email, there was no early warning for low or near-expiry stock, and budgets were only checked after the money had been spent. Standard Odoo covers purchasing and inventory, but not the end-to-end flow from store to merchandising to supplier.",
        vi: "Chuỗi bán lẻ nhiều cửa hàng bổ sung hàng hóa từ hai nguồn: kho tổng và nhà cung cấp bên ngoài. Trong học phần Đồ án thực tế Hệ thống thông tin quản lý, tôi xây dựng bộ câu hỏi và trực tiếp phỏng vấn nhân sự của một nhà bán lẻ lớn về quy trình mua hàng thực tế. Các vấn đề được xác định rõ: phiếu yêu cầu được lập thủ công qua email, không có cảnh báo sớm khi thiếu hàng hoặc hàng cận hạn sử dụng, và ngân sách chỉ được kiểm tra sau khi đã chi. Odoo tiêu chuẩn đã hỗ trợ mua hàng và quản lý kho, nhưng chưa đáp ứng luồng cửa hàng → Merchandise → nguồn cung.",
      },
      process: [
        {
          title: { en: "Interview the business", vi: "Phỏng vấn doanh nghiệp" },
          body: {
            en: "Drafted an interview guide, then met the retailer's staff in person to learn how a store request actually travels to merchandising, the warehouse and suppliers. Their answers formed the requirements and the pain-point list: manual requests, email threads, unsynchronised data and late budget checks.",
            vi: "Xây dựng bộ câu hỏi phỏng vấn, sau đó gặp trực tiếp nhân sự doanh nghiệp để tìm hiểu cách một yêu cầu từ cửa hàng được chuyển đến bộ phận Merchandise, kho và nhà cung cấp. Kết quả phỏng vấn được tổng hợp thành danh sách yêu cầu và vấn đề: lập phiếu thủ công, trao đổi qua email, dữ liệu không đồng bộ và kiểm tra ngân sách quá muộn.",
          },
        },
        {
          title: { en: "Map the AS-IS process", vi: "Mô hình hóa quy trình AS-IS" },
          body: {
            en: "Modelled the current process in BPMN from the interview notes, highlighting where each pain point occurs and who owns it.",
            vi: "Mô hình hóa quy trình hiện tại bằng BPMN dựa trên ghi chép phỏng vấn, đánh dấu vị trí phát sinh từng vấn đề và bộ phận chịu trách nhiệm.",
          },
        },
        {
          title: { en: "Design the TO-BE process in BPMN", vi: "Thiết kế quy trình TO-BE bằng BPMN" },
          body: {
            en: "Positioned a single purchase request as the central document linking store demand, the merchandising decision, purchase orders or internal transfers, QC and restocking, so that every department sees the same status.",
            vi: "Xác định phiếu yêu cầu mua hàng (PR) là chứng từ trung tâm, kết nối nhu cầu cửa hàng, quyết định của bộ phận Merchandise, đơn mua hàng hoặc điều chuyển nội bộ, QC và bổ sung hàng, giúp mọi bộ phận theo dõi cùng một trạng thái.",
          },
        },
        {
          title: { en: "Run a fit-gap analysis against standard Odoo", vi: "Phân tích fit-gap với Odoo tiêu chuẩn" },
          body: {
            en: "Compared nine areas of the TO-BE process with Odoo's standard capabilities: configure what fits, extend what partially fits, and build only the genuine gaps.",
            vi: "Đối chiếu chín hạng mục của quy trình TO-BE với các chức năng sẵn có của Odoo: cấu hình phần đã phù hợp, mở rộng phần đáp ứng một phần, và chỉ tự phát triển những phần thực sự còn thiếu.",
          },
        },
        {
          title: { en: "Turn rules into requirements", vi: "Chuyển quy tắc nghiệp vụ thành yêu cầu" },
          body: {
            en: "No duplicate requests for the same product and store, no approval over the category budget, three supply options for each line, a required reason for every QC rejection, and automatic promotions for near-expiry stock.",
            vi: "Không cho phép tạo PR trùng cho cùng sản phẩm và cửa hàng, chặn phê duyệt khi vượt ngân sách ngành hàng, ba phương án cung ứng cho mỗi dòng, bắt buộc ghi lý do khi QC từ chối, và tự động tạo khuyến mãi cho hàng cận hạn sử dụng.",
          },
        },
        {
          title: { en: "Build and deploy", vi: "Phát triển và triển khai" },
          body: {
            en: "Three custom Odoo 19 modules that extend standard models rather than modifying the core, role-based access for stores, merchandising and warehouse QC, and a Docker plus GitHub Actions pipeline that deploys automatically to a live demo.",
            vi: "Ba module Odoo 19 mở rộng model tiêu chuẩn mà không chỉnh sửa mã lõi, phân quyền theo vai trò cho cửa hàng, bộ phận Merchandise và QC kho, cùng Docker và GitHub Actions tự động triển khai lên bản demo trực tuyến.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-purchasing-store-replenishment.webp",
          caption: { en: "Store view: min/max stock levels and a suggested restock quantity, with the purchase request created in one click.", vi: "Cửa hàng: mức tồn kho tối thiểu/tối đa và số lượng đề xuất bổ sung; chỉ cần một thao tác để tạo phiếu yêu cầu mua hàng." },
        },
        {
          src: "/images/projects/uth-purchasing-pr-fulfillment-options.webp",
          caption: { en: "Merchandising chooses a supply option for each line: central warehouse, supplier to warehouse, or supplier direct to store.", vi: "Bộ phận Merchandise chọn nguồn cung cho từng dòng: kho tổng, nhà cung cấp giao về kho tổng, hoặc nhà cung cấp giao thẳng đến cửa hàng." },
        },
        {
          src: "/images/projects/uth-purchasing-purchase-budget.webp",
          caption: { en: "Purchase budget by category, showing spent, committed and remaining amounts; over-budget requests are blocked from approval.", vi: "Ngân sách mua hàng theo ngành hàng: đã chi, đã cam kết và còn lại; phiếu vượt ngân sách sẽ bị chặn phê duyệt." },
        },
        {
          src: "/images/projects/uth-purchasing-stock-by-lot-expiry.webp",
          caption: { en: "Stock by lot and expiry date, preserved throughout the transfer from warehouse to store.", vi: "Tồn kho theo lô và hạn sử dụng, được duy trì xuyên suốt luồng điều chuyển từ kho tổng đến cửa hàng." },
        },
        {
          src: "/images/projects/uth-purchasing-expiry-promotion.webp",
          caption: { en: "A scheduled daily job identifies near-expiry lots and generates promotions automatically.", vi: "Tác vụ chạy hằng ngày tự động xác định các lô sắp hết hạn và tạo chương trình khuyến mãi." },
        },
        {
          src: "/images/projects/uth-purchasing-store-sale-promo-price.webp",
          caption: { en: "A store sale with the promotional price applied automatically.", vi: "Đơn bán hàng tại cửa hàng tự động áp dụng giá khuyến mãi." },
        },
      ],
      outcome: {
        en: "The fit-gap analysis revealed that the problem was not a lack of purchasing features, since standard Odoo already provides them, but the handoffs between store, merchandising, warehouse and supplier. The custom work therefore focused solely on those handoffs: a single purchase request that carries the entire process, a budget check moved from after the purchase to before approval, a supply option selected for each line (central warehouse, supplier to warehouse, or supplier direct to store), and near-expiry lots converted into promotions automatically rather than being written off. Everything else was handled through configuration, which kept the build to three modules extending 14 standard models, now running on a live demo.",
        vi: "Kết quả phân tích fit-gap cho thấy vấn đề không nằm ở việc thiếu chức năng mua hàng — Odoo tiêu chuẩn đã đáp ứng — mà nằm ở các điểm bàn giao giữa cửa hàng, bộ phận Merchandise, kho và nhà cung cấp. Vì vậy, phần phát triển riêng chỉ tập trung vào các điểm này: một phiếu yêu cầu xuyên suốt toàn bộ quy trình, kiểm tra ngân sách được chuyển từ sau khi mua sang trước khi phê duyệt, lựa chọn nguồn cung cho từng dòng (kho tổng, nhà cung cấp giao về kho, hoặc giao thẳng đến cửa hàng), và lô hàng cận hạn được tự động chuyển thành khuyến mãi thay vì phải tiêu hủy. Các phần còn lại được đáp ứng bằng cấu hình, nhờ đó hệ thống chỉ cần ba module mở rộng 14 model tiêu chuẩn và đang vận hành trên bản demo trực tuyến.",
      },
      learnings: {
        en: "The standard flow is the easy part; most of the effort goes into the exceptions, such as shortages, damaged goods, near-expiry stock and budget overruns.",
        vi: "Luồng xử lý tiêu chuẩn là phần đơn giản; phần lớn công sức nằm ở các trường hợp ngoại lệ: thiếu hàng, hàng hư hỏng, hàng cận hạn sử dụng và vượt ngân sách.",
      },
      source: "https://github.com/HoangPhucTony/Mis_Purchasing_OdooProject",
      demo: "https://huggingface.co/spaces/IceMisha/OdooProject",
      demoLabel: { en: "Live demo", vi: "Xem demo" },
    },
    {
      slug: "uth-aqi-anomaly",
      role: "da",
      university: true,
      title: { en: "Air quality in 8 cities, checked every hour", vi: "Giám sát chất lượng không khí 8 thành phố theo từng giờ" },
      summary: {
        en: "An automated pipeline scrapes AQI data every hour, detects anomalies using Z-score and Isolation Forest, and feeds a Power BI dashboard directly from GitHub. I was responsible for the dashboard and the alerting system.",
        vi: "Pipeline tự động thu thập dữ liệu AQI mỗi giờ, phát hiện bất thường bằng Z-score và Isolation Forest, sau đó cung cấp dữ liệu trực tiếp từ GitHub cho dashboard Power BI. Tôi phụ trách dashboard và hệ thống cảnh báo.",
      },
      cover: "/images/projects/uth-aqi-unhealthy-hours.webp",
      facts: [
        {
          en: "Which cities and hours are really polluted, and when should a reading trigger an alert?",
          vi: "Thành phố nào, khung giờ nào thực sự ô nhiễm, và khi nào một chỉ số đo được cần phát cảnh báo?",
        },
        {
          en: "67,450 hourly AQI and weather records for 8 Vietnamese cities (01/2025 – 03/2026), scraped from IQAir by a GitHub Actions pipeline.",
          vi: "67.450 bản ghi AQI và thời tiết theo giờ của 8 thành phố Việt Nam (01/2025 – 03/2026), được thu thập từ IQAir thông qua GitHub Actions.",
        },
        {
          en: "Hanoi exceeds AQI 100 in 48.8% of hours, yet Z-score flagged its AQI only 13 times: once pollution becomes the norm, “unusual” and “dangerous” are no longer the same thing.",
          vi: "Hà Nội có AQI trên 100 trong 48,8% số giờ, nhưng Z-score chỉ gắn cờ AQI 13 lần. Khi ô nhiễm trở thành trạng thái thường xuyên, “bất thường” và “nguy hiểm” không còn đồng nghĩa.",
        },
        {
          en: "Alerts should combine an absolute AQI threshold with a one-sided z > 3, and warnings should be issued at 7–9 am, when all 8 cities reach their peak.",
          vi: "Cảnh báo nên kết hợp ngưỡng AQI tuyệt đối với Z-score một phía (z > 3), và nên được phát vào 7–9 giờ sáng — thời điểm cả 8 thành phố cùng đạt mức ô nhiễm cao nhất.",
        },
      ],
      stack: ["Power BI", "DAX", "Power Query", "Python", "Isolation Forest", "GitHub Actions"],
      period: { en: "2025 · UTH coursework, Artificial Intelligence", vi: "2025 · Đồ án học phần Trí tuệ nhân tạo tại UTH" },
      myRole: {
        en: "Power BI and alerting in a team of 4: live data connection, data model, DAX and the automated alert workflow",
        vi: "Phụ trách Power BI và hệ thống cảnh báo trong nhóm 4 thành viên — kết nối dữ liệu trực tiếp, mô hình dữ liệu, DAX và workflow cảnh báo tự động",
      },
      metrics: [
        { value: "67,450", label: { en: "hourly records from 8 cities", vi: "bản ghi theo giờ của 8 thành phố" } },
        { value: "24", label: { en: "CSV files read live by Power Query from GitHub, with no gateway", vi: "file CSV được Power Query đọc trực tiếp từ GitHub, không cần gateway" } },
        { value: "90%", label: { en: "of Z-score flags also detected by Isolation Forest", vi: "điểm bất thường của Z-score cũng được Isolation Forest phát hiện" } },
      ],
      context: {
        en: "Public AQI websites only display the current reading; they neither store the history, compare cities, nor warn users when a reading breaks the usual pattern. For the Artificial Intelligence course, our team of four built a pipeline that runs entirely on GitHub Actions at zero cost. While my teammates developed the Playwright crawler, the cleaning step and the two detection notebooks, I built the Power BI dashboard and the alerting that notifies people when something looks wrong.",
        vi: "Các trang AQI công khai chỉ hiển thị chỉ số hiện tại: không lưu trữ lịch sử, không so sánh giữa các thành phố và không cảnh báo khi số liệu lệch khỏi quy luật thông thường. Trong học phần Trí tuệ nhân tạo, nhóm bốn thành viên đã xây dựng pipeline vận hành hoàn toàn trên GitHub Actions, không phát sinh chi phí. Các thành viên khác phụ trách crawler Playwright, bước làm sạch dữ liệu và hai notebook phát hiện bất thường; tôi đảm nhận dashboard Power BI và hệ thống cảnh báo khi phát hiện bất thường.",
      },
      process: [
        {
          title: { en: "Use the repository as a data lake", vi: "Sử dụng repository làm kho dữ liệu" },
          body: {
            en: "Each workflow commits its output to the repository and triggers the next step: scrape every hour → clean and resample to one row per hour → detect anomalies → analyse, with no server or database required.",
            vi: "Mỗi workflow lưu kết quả vào repository và kích hoạt bước tiếp theo: thu thập mỗi giờ → làm sạch, chuẩn hóa về một dòng mỗi giờ → phát hiện bất thường → phân tích. Hệ thống không cần máy chủ hay cơ sở dữ liệu.",
          },
        },
        {
          title: { en: "Connect Power BI to live files", vi: "Kết nối Power BI với dữ liệu trực tiếp" },
          body: {
            en: "Power Query reads 24 CSV files (8 cities × 3 result types) from GitHub with Web.Contents and combines them into three fact tables, so a single Refresh pulls in the latest hour.",
            vi: "Power Query đọc 24 file CSV (8 thành phố × 3 loại kết quả) từ GitHub bằng Web.Contents và hợp nhất thành ba bảng fact; chỉ cần Refresh là cập nhật được số liệu mới nhất.",
          },
        },
        {
          title: { en: "Build the model for comparison", vi: "Xây dựng mô hình phục vụ so sánh" },
          body: {
            en: "An hourly date-time table, a city table, the six US EPA AQI levels and a method selector that lets readers switch between Z-score and Isolation Forest, with anomaly counts and rates updating dynamically.",
            vi: "Bảng thời gian theo giờ, bảng thành phố, sáu mức AQI theo tiêu chuẩn US EPA, và bộ chọn phương pháp cho phép người xem chuyển đổi giữa Z-score và Isolation Forest; số lượng và tỷ lệ bất thường thay đổi theo lựa chọn.",
          },
        },
        {
          title: { en: "Alert without spamming", vi: "Cảnh báo mà không gây phiền nhiễu" },
          body: {
            en: "A script reads every anomaly file and detects column names automatically, making it compatible with both methods; it keeps only the latest hour in Vietnam time and merges duplicate alerts. The workflow then updates a single “Live feed” GitHub Issue and sends an email, rather than opening a new issue each time.",
            vi: "Script đọc toàn bộ file kết quả bất thường, tự nhận diện tên cột nên áp dụng được cho cả hai phương pháp, chỉ lấy mốc thời gian mới nhất theo giờ Việt Nam và gộp các cảnh báo trùng lặp. Workflow cập nhật một Issue “Live feed” duy nhất và gửi email, thay vì tạo issue mới mỗi lần.",
          },
        },
        {
          title: { en: "Interpret the results critically", vi: "Đánh giá kết quả với tư duy phản biện" },
          body: {
            en: "Compared the two methods city by city and examined where their flags disagreed, which is how the gap between “unusual” and “dangerous” came to light.",
            vi: "So sánh hai phương pháp theo từng thành phố và kiểm tra những điểm gắn cờ khác nhau; từ đó làm rõ khoảng cách giữa “bất thường” và “nguy hiểm”.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-aqi-unhealthy-hours.webp",
          caption: { en: "Share of hours with AQI above 100: 48.8% in Hanoi, none in Nha Trang.", vi: "Tỷ lệ số giờ có AQI trên 100: Hà Nội 48,8%, Nha Trang chưa ghi nhận lần nào." },
        },
        {
          src: "/images/projects/uth-aqi-anomaly-methods.webp",
          caption: { en: "Z-score flags 2.3% of hours, while Isolation Forest flags 8.6%, covering 90% of the Z-score flags.", vi: "Z-score gắn cờ 2,3% số giờ, Isolation Forest gắn cờ 8,6% và bao trùm 90% điểm bất thường của Z-score." },
        },
      ],
      outcome: {
        en: "Three findings changed how the alerts should be designed. First, a statistical outlier is not the same as a dangerous reading. Because Hanoi is polluted almost half the time, its data is so widely spread that only AQI above roughly 231 appears unusual, which means an absolute threshold (for example AQI > 150) is needed alongside anomaly detection. Second, a two-sided Z-score also flags unusually clean air: 186 of Nha Trang's 189 AQI flags were low readings, so pollution alerts should rely on z > 3 only. Third, the timing is predictable: all 8 cities peak at 7–9 am, and all 8 recorded their cleanest month in the rainy season, July–September. Since no labelled data was available, the number of Isolation Forest flags depends largely on its contamination parameter, so Z-score served as a reference point rather than ground truth.",
        vi: "Ba phát hiện chính đã thay đổi cách thiết kế hệ thống cảnh báo. Thứ nhất, bất thường về mặt thống kê không đồng nghĩa với nguy hiểm: Hà Nội ô nhiễm gần một nửa thời gian nên độ phân tán dữ liệu rất lớn, chỉ AQI trên khoảng 231 mới được xem là bất thường — do đó cần bổ sung ngưỡng tuyệt đối (ví dụ AQI > 150) bên cạnh phát hiện bất thường. Thứ hai, Z-score hai phía còn gắn cờ cả những thời điểm không khí sạch bất thường: 186/189 cờ AQI tại Nha Trang là các giờ có AQI thấp, vì vậy cảnh báo ô nhiễm chỉ nên sử dụng ngưỡng một phía z > 3. Thứ ba, thời điểm ô nhiễm có thể dự đoán: cả 8 thành phố đạt đỉnh vào 7–9 giờ sáng, và đều có tháng sạch nhất rơi vào mùa mưa (tháng 7–9). Do không có dữ liệu gán nhãn, số điểm bất thường của Isolation Forest phụ thuộc chủ yếu vào tham số contamination; vì vậy Z-score được sử dụng làm mốc tham chiếu chứ không phải đáp án chuẩn.",
      },
      learnings: {
        en: "An anomaly detection model answers “Is this unusual?” rather than “Is this dangerous?”, and an effective alert needs to address both questions.",
        vi: "Mô hình phát hiện bất thường trả lời câu hỏi “Điều này có bất thường không?”, chứ không trả lời “Điều này có nguy hiểm không?”. Một hệ thống cảnh báo hiệu quả cần trả lời được cả hai.",
      },
      source: "https://github.com/heydaisyilu/Automatic-Anomaly-Detection-System",
    },
    {
      slug: "uth-timeseries-forecasting",
      role: "da",
      university: true,
      title: { en: "Seven forecasting models, one fair comparison", vi: "Bảy mô hình dự báo, một phép so sánh công bằng" },
      summary: {
        en: "From ARIMA to LSTM across five real-world datasets, followed by an audit that uncovered four evaluation errors, including a “perfect” RMSE of 0 caused by data leakage.",
        vi: "Từ ARIMA đến LSTM trên năm bộ dữ liệu thực tế, kèm theo quá trình rà soát phát hiện bốn lỗi đánh giá — trong đó có RMSE “hoàn hảo” bằng 0 do rò rỉ dữ liệu (data leakage).",
      },
      cover: "/images/projects/uth-timeseries-results.webp",
      facts: [
        {
          en: "For each type of time series, which model fits best, and can the test scores be trusted?",
          vi: "Với từng loại chuỗi thời gian, mô hình nào phù hợp nhất, và kết quả trên tập kiểm tra có đáng tin cậy không?",
        },
        {
          en: "Five public datasets: monthly retail sales and air passengers, daily temperature, hourly electricity load (~143,000 hours) and load with weather (8,779 hours).",
          vi: "Năm bộ dữ liệu công khai: doanh số bán lẻ và lượng hành khách hàng không theo tháng, nhiệt độ theo ngày, phụ tải điện theo giờ (~143.000 giờ) và phụ tải điện kèm dữ liệu thời tiết (8.779 giờ).",
        },
        {
          en: "No single model wins everywhere: SARIMA cut error by 58–67% on seasonal monthly data, Linear Regression outperformed XGBoost on hourly lags, and LSTM's 30,113 parameters delivered only a ~2% gain over VAR.",
          vi: "Không có mô hình nào tốt nhất trong mọi trường hợp: SARIMA giảm 58–67% sai số trên dữ liệu tháng có tính mùa vụ, Linear Regression vượt XGBoost trên dữ liệu lag theo giờ, còn LSTM với 30.113 tham số chỉ tốt hơn VAR khoảng 2%.",
        },
        {
          en: "Re-running every notebook exposed four methodological errors, and fixing the data leakage reversed the conclusion of one comparison.",
          vi: "Việc chạy lại toàn bộ mã nguồn phát hiện bốn lỗi phương pháp; khắc phục lỗi rò rỉ dữ liệu đã làm đảo ngược kết luận của một phép so sánh.",
        },
      ],
      stack: ["Python", "statsmodels", "scikit-learn", "XGBoost", "TensorFlow / Keras", "pandas"],
      period: { en: "2026 · UTH coursework, Time Series Analysis (audited 10/2026)", vi: "2026 · Đồ án học phần Phân tích chuỗi thời gian tại UTH (rà soát lại 10/2026)" },
      myRole: { en: "Individual project: every model, the evaluation and the audit", vi: "Dự án cá nhân — toàn bộ mô hình, đánh giá và rà soát kết quả" },
      metrics: [
        { value: "7", label: { en: "models benchmarked on 5 datasets", vi: "mô hình được so sánh trên 5 bộ dữ liệu" } },
        { value: "1.84%", label: { en: "MAPE when forecasting hourly electricity load with XGBoost", vi: "MAPE khi dự báo phụ tải điện theo giờ bằng XGBoost" } },
        { value: "4", label: { en: "evaluation errors identified and fixed in my own re-run", vi: "lỗi đánh giá được tự phát hiện và khắc phục khi chạy lại mã nguồn" } },
      ],
      context: {
        en: "Most forecasting exercises run a single model and report a single number. This course project tackled a harder question: for each type of data, which model fits and why? Every answer was validated on held-out test data in chronological order rather than judged by eye from a chart.",
        vi: "Phần lớn bài tập dự báo chỉ chạy một mô hình và báo cáo một con số. Đồ án này đặt ra câu hỏi khó hơn: với từng loại dữ liệu, mô hình nào phù hợp và vì sao? Câu trả lời được kiểm chứng trên tập kiểm tra theo đúng trình tự thời gian, thay vì đánh giá cảm tính qua biểu đồ.",
      },
      process: [
        {
          title: { en: "Understand the data first", vi: "Tìm hiểu dữ liệu trước khi mô hình hóa" },
          body: {
            en: "STL decomposition, ACF/PACF compared against a white-noise baseline, and treatment of missing values and outliers, in order to identify trend and seasonality before choosing a model.",
            vi: "Phân rã STL, phân tích ACF/PACF so với chuỗi nhiễu trắng, xử lý giá trị thiếu và giá trị ngoại lai nhằm nhận diện xu hướng và tính mùa vụ trước khi lựa chọn mô hình.",
          },
        },
        {
          title: { en: "Box–Jenkins, not only p-values", vi: "Áp dụng Box–Jenkins, không chỉ dựa vào p-value" },
          body: {
            en: "Although second-order differencing passed the ADF test (p ≈ 3.5e-18), it distorted the ACF/PACF, a typical sign of over-differencing, so I chose d = 1 with seasonal D = 1 instead.",
            vi: "Sai phân bậc 2 vượt qua kiểm định ADF (p ≈ 3.5e-18) nhưng làm ACF/PACF biến dạng bất thường — dấu hiệu của sai phân quá mức (over-differencing). Do đó, tôi lựa chọn d = 1 kết hợp sai phân mùa vụ D = 1.",
          },
        },
        {
          title: { en: "Turn forecasting into regression", vi: "Chuyển bài toán dự báo thành hồi quy" },
          body: {
            en: "Engineered lag and rolling features for roughly 143,000 hours of electricity load and tuned the models with TimeSeriesSplit. The previous hour accounted for 95% of the feature importance, and the error nearly tripled as the horizon extended from 1 to 3 hours.",
            vi: "Xây dựng đặc trưng lag và rolling cho khoảng 143.000 giờ dữ liệu phụ tải điện, tinh chỉnh mô hình bằng TimeSeriesSplit. Giờ liền trước chiếm 95% mức độ quan trọng, và sai số tăng gần gấp ba khi dự báo xa từ 1 lên 3 giờ.",
          },
        },
        {
          title: { en: "Use one process for every model", vi: "Áp dụng một quy trình chung cho mọi mô hình" },
          body: {
            en: "VAR, XGBoost (99 features) and a stacked LSTM share the same 70/15/15 split, a scaler fitted on the training data only, and a 1,317-step walk-forward test, ensuring a fair comparison.",
            vi: "VAR, XGBoost (99 đặc trưng) và LSTM nhiều lớp sử dụng chung cách chia dữ liệu 70/15/15, một scaler chỉ fit trên tập huấn luyện, và kiểm định walk-forward 1.317 bước.",
          },
        },
        {
          title: { en: "Audit my own numbers", vi: "Tự rà soát số liệu" },
          body: {
            en: "Identified four errors: a rolling feature that contained the target value (RMSE = 0), LSTM inverse scaling applied to the year column instead of load, VAR undifferenced from the wrong reference point, and models compared on different test sets. All four were corrected and re-run.",
            vi: "Phát hiện bốn lỗi: đặc trưng rolling chứa chính giá trị cần dự báo (RMSE = 0), LSTM đảo chuẩn hóa nhầm cột năm thay vì cột phụ tải, VAR đảo sai phân từ sai mốc, và các mô hình được so sánh trên các tập kiểm tra khác nhau. Cả bốn lỗi đã được khắc phục và chạy lại.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-timeseries-results.webp",
          caption: { en: "Test RMSE across four problems, with a different best model (blue) each time.", vi: "RMSE trên tập kiểm tra qua bốn bài toán — mô hình tốt nhất (màu xanh) khác nhau ở mỗi bài." },
        },
        {
          src: "/images/projects/uth-timeseries-arima.webp",
          caption: { en: "ARIMA(1,1,1) only follows the trend.", vi: "ARIMA(1,1,1) chỉ nắm bắt được xu hướng." },
        },
        {
          src: "/images/projects/uth-timeseries-sarima.webp",
          caption: { en: "SARIMA(1,1,1)(1,1,1,12) also captures the 12-month seasonal pattern.", vi: "SARIMA(1,1,1)(1,1,1,12) nắm bắt được cả tính mùa vụ 12 tháng." },
        },
        {
          src: "/images/projects/uth-timeseries-horizon.webp",
          caption: { en: "Error nearly triples as the forecast horizon extends from 1 to 3 hours.", vi: "Sai số tăng gần gấp ba khi dự báo xa từ 1 lên 3 giờ." },
        },
        {
          src: "/images/projects/uth-timeseries-lstm.webp",
          caption: { en: "LSTM: actual vs forecast over 1,317 walk-forward hours.", vi: "LSTM: giá trị thực tế và dự báo trên 1.317 giờ kiểm định walk-forward." },
        },
      ],
      outcome: {
        en: "The choice of model should be driven by the data, not by the model's reputation. SARIMA performed best on monthly seasonal data (RMSE 4.62 → 1.95 for retail, 97.50 → 31.79 for passengers) because it captures the 12-month cycle. On hourly electricity load, a simple Linear Regression (118 MW) outperformed a tuned XGBoost (137 MW), as the features consisted only of recent past values. Once weather data was added, LSTM achieved the lowest error at 7.30 MW, yet it was only about 2% better than VAR, a gain that hardly justifies 30,113 parameters when the model must be explained. The audit proved to be the most important step: fixing the leakage reversed the result between Linear Regression and XGBoost, meaning the first version would have reported the wrong winner.",
        vi: "Dữ liệu mới là yếu tố quyết định lựa chọn mô hình, không phải độ phổ biến của mô hình. SARIMA cho kết quả tốt nhất trên dữ liệu tháng có tính mùa vụ (RMSE giảm từ 4,62 xuống 1,95 với doanh số bán lẻ, từ 97,50 xuống 31,79 với lượng hành khách) nhờ mô hình hóa được chu kỳ 12 tháng. Với phụ tải điện theo giờ, Linear Regression đơn giản (118 MW) vượt XGBoost đã tinh chỉnh (137 MW), do các đặc trưng chỉ là giá trị gần nhất trong quá khứ. Khi bổ sung dữ liệu thời tiết, LSTM đạt kết quả tốt nhất với 7,30 MW nhưng chỉ hơn VAR khoảng 2% — không tương xứng với 30.113 tham số nếu mô hình cần được giải thích. Quá trình rà soát là phần quan trọng nhất: việc khắc phục lỗi rò rỉ dữ liệu đã đảo ngược kết quả giữa Linear Regression và XGBoost, nghĩa là phiên bản đầu tiên đã xác định sai mô hình tốt nhất.",
      },
      learnings: {
        en: "A result that looks too good to be true usually points to a bug: RMSE = 0 did not indicate an excellent model, but rather that the answer had leaked into the features.",
        vi: "Kết quả tốt bất thường thường là dấu hiệu của lỗi. RMSE = 0 không phản ánh một mô hình xuất sắc, mà cho thấy đáp án đã bị rò rỉ vào tập đặc trưng.",
      },
      source: "https://github.com/HoangPhucTony/Mis_TimeSeries_Lesson",
    },
    {
      slug: "uth-badminton-odoo",
      role: "ba",
      university: true,
      title: { en: "Badminton club management, from court booking to POS", vi: "Quản lý sân cầu lông: từ đặt sân đến thanh toán POS" },
      summary: {
        en: "Surveyed how a badminton court business operates, translated its rules into requirements, then single-handedly designed and built a three-module ERP on Odoo 19.",
        vi: "Tự khảo sát quy trình vận hành của một doanh nghiệp sân cầu lông, chuyển các quy tắc kinh doanh thành yêu cầu nghiệp vụ, sau đó tự thiết kế và phát triển hệ thống ERP gồm ba module trên Odoo 19.",
      },
      facts: [
        {
          en: "A court business sells time slots that must never overlap, priced by court type, peak hours and student status, while court fees are settled together with drinks, shuttlecocks and racket rental at the counter.",
          vi: "Doanh nghiệp sân cầu lông kinh doanh các khung giờ không được phép trùng lặp; giá thay đổi theo loại sân, giờ cao điểm và đối tượng học sinh – sinh viên, và tiền sân được thanh toán cùng nước uống, cầu và dịch vụ thuê vợt tại quầy.",
        },
        {
          en: "Players, counter (POS) staff and the club manager, each with a dedicated module and access rights.",
          vi: "Người chơi, nhân viên quầy POS và quản lý sân; mỗi vai trò có module và quyền truy cập riêng.",
        },
        {
          en: "Business survey, booking lifecycle and rules, a fit-gap analysis against standard Odoo, three custom modules, plus PayPal payment and a Power BI data export.",
          vi: "Khảo sát nghiệp vụ, vòng đời đặt sân và quy tắc nghiệp vụ, phân tích fit-gap với Odoo tiêu chuẩn, ba module tự phát triển cùng tích hợp thanh toán PayPal và xuất dữ liệu cho Power BI.",
        },
        {
          en: "Double booking is prevented at the database level, and multiple courts and hours can be combined into one booking order settled with a single POS order.",
          vi: "Tình trạng đặt trùng sân được ngăn chặn ngay ở tầng cơ sở dữ liệu, và nhiều sân, nhiều khung giờ được gộp vào một phiếu đặt, thanh toán bằng một đơn POS duy nhất.",
        },
      ],
      stack: ["Business survey", "Requirements", "Fit-gap analysis", "ERP", "Odoo 19", "Python", "OWL", "PostgreSQL"],
      period: { en: "06–07/2026 · UTH coursework", vi: "06–07/2026 · Đồ án môn học tại UTH" },
      myRole: { en: "Individual project: business survey, requirements, design and the entire build", vi: "Dự án cá nhân — khảo sát doanh nghiệp, phân tích yêu cầu, thiết kế và phát triển toàn bộ hệ thống" },
      metrics: [
        { value: "6", label: { en: "booking states, from new request to paid", vi: "trạng thái đặt sân, từ yêu cầu mới đến đã thanh toán" } },
        { value: "3 + 1", label: { en: "custom modules, plus a PayPal payment add-on", vi: "module tự phát triển, cùng module thanh toán PayPal" } },
        { value: "~23,000", label: { en: "lines of Python, JavaScript and XML, written independently", vi: "dòng mã Python, JavaScript và XML do tôi tự phát triển" } },
      ],
      context: {
        en: "A badminton club revolves around its schedule: each court-hour can only be sold once, prices vary by court and time of day, and most visits end at the counter with drinks or shuttlecocks on the same bill. I surveyed how a court business handles bookings, walk-in customers, pricing and counter sales, then built the entire system on Odoo 19. Rather than relying on Odoo's Appointments or Website Booking apps, which are not designed for selling by court and time slot, the system uses its own booking models and a visual schedule grid.",
        vi: "Hoạt động của sân cầu lông phụ thuộc vào lịch đặt sân: mỗi giờ sân chỉ được bán một lần, giá thay đổi theo loại sân và khung giờ, và phần lớn lượt chơi kết thúc tại quầy với nước uống, cầu trên cùng một hóa đơn. Tôi đã khảo sát cách một doanh nghiệp sân cầu lông xử lý việc đặt sân, khách vãng lai, bảng giá và bán hàng tại quầy, sau đó xây dựng toàn bộ hệ thống trên Odoo 19. Thay vì sử dụng ứng dụng Appointments hay Website Booking của Odoo, hệ thống sử dụng model đặt sân riêng và lưới lịch trực quan, do các ứng dụng sẵn có không phù hợp với mô hình kinh doanh theo sân và khung giờ.",
      },
      process: [
        {
          title: { en: "Survey the business", vi: "Khảo sát doanh nghiệp" },
          body: {
            en: "Traced how a booking actually happens: whether it is made in advance or on arrival, who confirms it, how no-shows are handled, how peak and student pricing applies, and what else is sold at the counter.",
            vi: "Tìm hiểu quy trình đặt sân thực tế: đặt trước hay đến trực tiếp, ai là người xác nhận, xử lý thế nào khi khách không đến, cách áp dụng giá giờ cao điểm và giá học sinh – sinh viên, cũng như các sản phẩm khác được bán tại quầy.",
          },
        },
        {
          title: { en: "Define roles and the booking lifecycle", vi: "Xác định vai trò và vòng đời đặt sân" },
          body: {
            en: "New request → confirmed → checked in, no-show or cancelled → paid, with walk-in customers entering directly at checked in. Each role can only access its own scope, so players have no visibility of POS, revenue or price rules.",
            vi: "Yêu cầu mới → đã xác nhận → đã check-in, không đến hoặc đã hủy → đã thanh toán; khách vãng lai được chuyển thẳng đến bước check-in. Mỗi vai trò chỉ truy cập phần dữ liệu liên quan: người chơi không xem được POS, doanh thu hay bảng giá.",
          },
        },
        {
          title: { en: "Turn rules into requirements", vi: "Chuyển quy tắc thành yêu cầu nghiệp vụ" },
          body: {
            en: "One court, one time, one customer; bookings only during opening hours; prices by court type (standard / VIP) and peak hours; a configurable student discount (10% by default); and consecutive slots on the same court merged into a single booking.",
            vi: "Một sân, một khung giờ, một khách hàng; chỉ cho phép đặt sân trong giờ hoạt động; giá theo loại sân (thường / VIP) và giờ cao điểm; mức giảm giá học sinh – sinh viên có thể cấu hình (mặc định 10%); các khung giờ liên tiếp trên cùng một sân được gộp thành một lượt đặt.",
          },
        },
        {
          title: { en: "Fit-gap analysis against standard Odoo", vi: "Phân tích fit-gap với Odoo tiêu chuẩn" },
          body: {
            en: "Reused POS, Inventory and Contacts for counter sales and stock, and built only what was missing: courts, price rules, bookings, booking orders and a schedule grid.",
            vi: "Tận dụng các ứng dụng POS, Inventory và Contacts cho bán hàng tại quầy và quản lý tồn kho; chỉ tự phát triển các phần còn thiếu: sân, bảng giá, lượt đặt sân, phiếu đặt sân và lưới lịch.",
          },
        },
        {
          title: { en: "Build the system", vi: "Phát triển hệ thống" },
          body: {
            en: "A core manager module with an OWL schedule grid (30/60/90/120-minute slots), a staff module for check-in and walk-ins, and a player module with a multi-court cart. Overlaps are checked and the relevant database rows are locked, so when two people select the same slot simultaneously, only one booking can succeed. I also added multi-branch staff accounts, PayPal payment and a CSV export package for Power BI.",
            vi: "Module quản lý lõi với lưới lịch OWL (khung 30/60/90/120 phút), module nhân viên phục vụ check-in và khách vãng lai, và module người chơi với giỏ chọn nhiều sân. Hệ thống kiểm tra trùng lịch và khóa dòng dữ liệu, đảm bảo khi hai người cùng chọn một khung giờ tại cùng thời điểm thì chỉ một lượt đặt thành công. Ngoài ra, hệ thống được bổ sung tài khoản nhân viên theo chi nhánh, thanh toán PayPal và gói xuất dữ liệu CSV cho Power BI.",
          },
        },
      ],
      gallery: [],
      outcome: {
        en: "The core rule, “one court, one time, one customer”, holds even when two bookings arrive at the same moment, because it is enforced by a database row lock rather than a form check alone. Players can select several courts and hours in a single cart, which becomes one booking order paid with one POS order, so staff no longer need to split a group's bill by court. The manager can monitor players on court, unpaid bookings and peak hours, and export bookings, payments and POS lines to Power BI. One known limitation remains: the student discount is displayed on the booking but still has to be applied manually in POS.",
        vi: "Quy tắc cốt lõi “một sân, một khung giờ, một khách hàng” vẫn được đảm bảo ngay cả khi hai lượt đặt phát sinh cùng lúc, nhờ cơ chế khóa dòng ở tầng cơ sở dữ liệu thay vì chỉ kiểm tra trên biểu mẫu. Người chơi có thể chọn nhiều sân, nhiều khung giờ trong một giỏ; toàn bộ được gộp thành một phiếu đặt và thanh toán bằng một đơn POS, giúp nhân viên không phải tách hóa đơn của một nhóm theo từng sân. Quản lý theo dõi được khách đang chơi, các lượt đặt chưa thanh toán và khung giờ cao điểm, đồng thời có thể xuất dữ liệu đặt sân, thanh toán và chi tiết đơn POS sang Power BI. Hạn chế còn tồn tại: mức giảm giá học sinh – sinh viên được hiển thị trên phiếu đặt nhưng nhân viên vẫn phải áp dụng thủ công trong POS.",
      },
      learnings: {
        en: "A booking rule is only reliable if it holds when two people click at the same moment, so requirements should cover concurrent cases, not just the input form.",
        vi: "Một quy tắc đặt sân chỉ thực sự có hiệu lực khi vẫn đúng trong trường hợp hai người thao tác cùng lúc. Yêu cầu nghiệp vụ cần tính đến các tình huống tranh chấp, không chỉ dừng lại ở biểu mẫu nhập liệu.",
      },
      source: "https://github.com/HoangPhucTony/Mis_Badminton_OdooProject",
    },
  ] as Project[],

  contact: {
    headline: { en: "Hiring a DA or BA intern or fresher? Let's talk.", vi: "Bạn đang tuyển dụng Thực tập sinh hoặc Fresher DA / BA? Hãy liên hệ với tôi." } as L,
    note: {
      en: "Email is the quickest way to reach me, and I would be glad to walk you through any dashboard or requirements document in detail.",
      vi: "Email là kênh liên hệ nhanh nhất. Tôi sẵn sàng trình bày chi tiết về bất kỳ dashboard hay tài liệu yêu cầu nào.",
    } as L,
    backdrop: "/images/backdrop-landmark.webp",
  },
};

export const projectsByRole = (role: Role) => profile.projects.filter((p) => p.role === role);
export const projectBySlug = (slug: string) => profile.projects.find((p) => p.slug === slug);
