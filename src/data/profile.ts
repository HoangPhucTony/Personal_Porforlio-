// All personal content lives here, in English (en) and Vietnamese (vi).
// Edit this file — no component changes needed. Empty strings hide optional links/images.
// Style: English in plain, common words (about IELTS 6.0, American spelling) with precise DA/BA terms;
// Vietnamese short, clear and professional, keeping the English terms the industry uses (dashboard, fit-gap, DAX…).
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
  stack: string[]; // software, shown as highlighted chips on the card and the page
  methods?: string[]; // methods and deliverables (BPMN, fit-gap, star schema…), shown next to the tools
  period: L;
  myRole: L; // short role title
  team?: L; // e.g. "Team of 6" / "Individual project"
  contributions?: L[]; // "What I did": 3–5 short bullets shown at the top of the case study
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

export type CoverLetter = {
  pdf: { en: string; vi: string };
  date: L;
  greeting: L;
  paragraphs: L[];
  closing: L;
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
  phone: "+84 768 854 220", // shown in the CV preview only
  zalo: "https://zalo.me/0768854220",
  linkedin: "https://www.linkedin.com/in/dohoangphuc0606/",
  github: "https://github.com/HoangPhucTony",
  // CV download buttons stay hidden until the PDF is in public/cv/ and its path is set here,
  // e.g. "/cv/CV_DoHoangPhuc_DA.pdf" (a missing file would download the site's HTML instead).
  cv: {
    da: "",
    ba: "/cv/CV_BA_DoHoangPhuc.pdf",
  } as Record<Role, string>,
  // page images for the CV preview (rendered from the PDF at 150 dpi)
  cvPreview: {
    da: [],
    ba: ["/cv/CV_BA_DoHoangPhuc-1.webp", "/cv/CV_BA_DoHoangPhuc-2.webp"],
  } as Record<Role, string[]>,
  // shown in the CV preview next to the CV; same text as public/cv/CoverLetter_DoHoangPhuc_{EN,VI}.pdf
  coverLetter: {
    ba: {
      pdf: { en: "/cv/CoverLetter_DoHoangPhuc_EN.pdf", vi: "/cv/CoverLetter_DoHoangPhuc_VI.pdf" },
      date: { en: "Ho Chi Minh City, 1 November 2026", vi: "TP. Hồ Chí Minh, ngày 01 tháng 11 năm 2026" },
      greeting: { en: "Dear Hiring Manager,", vi: "Kính gửi Anh/Chị phụ trách tuyển dụng," },
      paragraphs: [
        {
          en: "I am writing to apply for the Business Analyst position. I am a final-year Management Information Systems student at the University of Transport Ho Chi Minh City (GPA 3.64/4.0), and I am currently a Business Analyst intern at Saigon International General Hospital and the Public Transport Management Center (MCPT).",
          vi: "Em xin ứng tuyển vị trí Business Analyst. Em là sinh viên năm cuối ngành Hệ thống thông tin quản lý, Trường Đại học Giao thông Vận tải TP.HCM (GPA 3.64/4.0), hiện đang thực tập Business Analyst tại Bệnh viện Đa khoa Quốc tế Sài Gòn và Trung tâm Quản lý Giao thông Công cộng (MCPT).",
        },
        {
          en: "At MCPT, I led a 40-member student team to build a bus pass issuance system for citizens. I interviewed MCPT staff, modeled the processes in BPMN, wrote the SRS and user stories with acceptance criteria, and coordinated UAT before handover. At the hospital, I built the first dashboard for corporate health check contracts from scratch, so the CEO and the FP&A team can see where each contract and payment is waiting. These experiences taught me that a good Business Analyst listens carefully, asks the right questions and checks every detail.",
          vi: "Tại MCPT, em dẫn dắt nhóm 40 sinh viên xây dựng hệ thống cấp thẻ xe buýt cho người dân. Em trực tiếp phỏng vấn cán bộ MCPT, mô hình hóa quy trình bằng BPMN, viết SRS và user story kèm tiêu chí chấp nhận, rồi điều phối UAT trước khi bàn giao. Tại bệnh viện, em tự xây dựng từ đầu dashboard đầu tiên theo dõi hợp đồng khám sức khỏe doanh nghiệp, giúp CEO và bộ phận FP&A thấy từng hợp đồng, từng khoản thanh toán đang nằm ở khâu nào. Những trải nghiệm này giúp em hiểu rằng một Business Analyst tốt cần biết lắng nghe, đặt đúng câu hỏi và cẩn thận đến từng chi tiết.",
        },
        {
          en: "I know that I still have a lot to learn, and that is exactly why I am applying. I hope to learn from experienced analysts, work on real products and real problems, and grow step by step. I learn quickly, I am happy to start with small tasks, and I always try to finish what I start with care.",
          vi: "Em biết mình vẫn còn nhiều điều phải học, và đó cũng chính là lý do em ứng tuyển. Em mong được học hỏi từ các anh chị đi trước, được làm việc với sản phẩm và bài toán thực tế, và trưởng thành từng bước. Em học nhanh, sẵn sàng bắt đầu từ những việc nhỏ và luôn cố gắng hoàn thành chu đáo những gì mình đã nhận.",
        },
        {
          en: "If I am given the chance, I will do my very best to contribute to the team and to improve every day. My case studies are available at dohoangphuc.vercel.app. Thank you sincerely for your time and consideration. I would be grateful for the opportunity to talk with you.",
          vi: "Nếu có cơ hội, em sẽ cố gắng hết sức để đóng góp cho đội ngũ và tiến bộ mỗi ngày. Anh/Chị có thể xem chi tiết các dự án của em tại dohoangphuc.vercel.app. Em xin chân thành cảm ơn Anh/Chị đã dành thời gian đọc thư và rất mong có dịp được trao đổi thêm.",
        },
      ],
      closing: { en: "Sincerely,", vi: "Trân trọng," },
    },
  } as Partial<Record<Role, CoverLetter>>,

  status: { en: "Open to Intern / Fresher roles", vi: "Đang tìm vị trí Thực tập sinh / Fresher" } as L,
  location: { en: "Ho Chi Minh City", vi: "TP. Hồ Chí Minh" } as L,
  locationNote: { en: "Open to on-site, hybrid or remote work", vi: "Sẵn sàng làm việc onsite, hybrid hoặc remote" } as L,

  intro: {
    // "\n" splits the two lines; the second line is highlighted
    question: { en: "What story are\nyour numbers telling?", vi: "Những con số của bạn\nđang kể câu chuyện gì?" } as L,
    blurb: {
      en: "The points in this chart always keep the same mean, standard deviation and correlation. Only their shape changes. Summary statistics can hide the real story, so I look beyond them, find that story and turn it into decisions a team can act on.",
      vi: "Các điểm trong biểu đồ luôn giữ nguyên trung bình, độ lệch chuẩn và hệ số tương quan — chỉ có hình dạng thay đổi. Chỉ số tổng hợp có thể che khuất câu chuyện thật. Tôi nhìn sâu hơn để tìm ra câu chuyện đó và biến nó thành quyết định mà đội ngũ có thể triển khai.",
    } as L,
  },

  about: {
    // three lines; the middle one is muted
    headline: {
      en: "Hi, I'm Phuc.\nI find the numbers —\nand the needs behind them.",
      vi: "Xin chào, tôi là Phúc.\nTôi tìm ra ý nghĩa của con số —\nvà nhu cầu đằng sau chúng.",
    } as L,
    // [[da:…]] / [[ba:…]] highlight a phrase in that role's colour
    paragraphs: [
      {
        en: "I look at every problem from two angles: [[da:what the data shows]] and [[ba:what the business really needs]]. I clean, model and visualize data, then turn the findings into clear requirements, processes and decisions.",
        vi: "Tôi nhìn mỗi vấn đề từ hai góc độ: [[da:dữ liệu đang nói gì]] và [[ba:doanh nghiệp thực sự cần gì]]. Tôi làm sạch, mô hình hóa và trực quan hóa dữ liệu, rồi chuyển các phát hiện thành yêu cầu, quy trình và quyết định rõ ràng.",
      },
      {
        en: "I am looking for an Intern or Fresher role as a Data Analyst or Business Analyst, where I can work with real data and real stakeholders. I learn quickly, I am happy to start with small tasks, and I want to support the team wherever I can add value.",
        vi: "Tôi đang tìm vị trí Thực tập sinh hoặc Fresher Data Analyst / Business Analyst để được làm việc với dữ liệu thật và các bên liên quan thật. Tôi học nhanh, sẵn sàng bắt đầu từ việc nhỏ và luôn chủ động hỗ trợ đội ngũ ở những nơi tôi có thể đóng góp.",
      },
    ] as L[],
    education: {
      school: { en: "University of Transport Ho Chi Minh City (UTH)", vi: "Trường Đại học Giao thông Vận tải TP.HCM (UTH)" } as L,
      short: { en: "University of Transport HCMC", vi: "ĐH Giao thông Vận tải TP.HCM" } as L,
      photoCaption: "UTH · HCMC",
      detail: { en: "Management Information Systems · Expected graduation: 2027", vi: "Hệ thống thông tin quản lý · Dự kiến tốt nghiệp: 2027" } as L,
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
        title: { en: "DA / BA Intern or Fresher", vi: "Thực tập sinh / Fresher DA, BA" },
        note: {
          en: "Ready to start · on-site, hybrid or remote",
          vi: "Sẵn sàng nhận việc · onsite, hybrid hoặc remote",
        },
      },
      {
        stage: { en: "Next", vi: "Tiếp theo" },
        title: { en: "Data / Business Analyst", vi: "Data / Business Analyst" },
        note: { en: "Own analysis and requirements from start to finish", vi: "Tự chủ phân tích và yêu cầu nghiệp vụ từ đầu đến cuối" },
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
      desc: { en: "Agree on the business question with stakeholders before touching any data.", vi: "Thống nhất câu hỏi kinh doanh với các bên liên quan trước khi làm việc với dữ liệu." },
      role: "ba" as Role,
      icon: "ask",
      tools: ["Stakeholder interviews", "Workshops", "User stories"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Collect", vi: "Thu thập" },
      desc: { en: "Query, join and extract the data needed to answer it.", vi: "Truy vấn, nối bảng và trích xuất dữ liệu cần để trả lời câu hỏi." },
      role: "da" as Role,
      icon: "collect",
      tools: ["SQL", "Excel", "APIs"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Clean & model", vi: "Làm sạch & mô hình hóa" },
      desc: { en: "Fix data types, missing values and duplicates, then build a data model people can trust.", vi: "Xử lý kiểu dữ liệu, giá trị thiếu và bản ghi trùng; xây dựng mô hình dữ liệu đáng tin cậy." },
      role: "da" as Role,
      icon: "clean",
      tools: ["Power Query", "Pandas", "Star schema"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Analyze", vi: "Phân tích" },
      desc: { en: "Explore, segment and test, looking at the whole distribution, not just the average.", vi: "Khám phá, phân khúc và kiểm định; xem cả phân phối, không chỉ giá trị trung bình." },
      role: "da" as Role,
      icon: "analyze",
      tools: ["Python", "Statistics", "Segmentation"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Visualize", vi: "Trực quan hóa" },
      desc: { en: "Build dashboards that answer the original question clearly.", vi: "Xây dựng dashboard trả lời đúng và rõ câu hỏi ban đầu." },
      role: "da" as Role,
      icon: "visualize",
      tools: ["Power BI", "Tableau", "DAX"],
      usedIn: [] as string[],
    },
    {
      name: { en: "Specify & decide", vi: "Đặc tả & ra quyết định" },
      desc: { en: "Model the process and write requirements the development team can build from.", vi: "Mô hình hóa quy trình và viết tài liệu yêu cầu để đội phát triển triển khai." },
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
        en: "Data and business analysis for a private hospital with several branches, from framing questions with stakeholders to building dashboards for senior management.",
        vi: "Phân tích dữ liệu và nghiệp vụ cho một bệnh viện tư nhân nhiều chi nhánh: từ cùng các bên liên quan xác định vấn đề đến xây dựng dashboard cho Ban Giám đốc.",
      },
      highlights: [
        {
          en: "Promotion analysis (first task): explored the data with SQL, broke promotion spend down with a MECE issue tree to find where it is concentrated, and used ANOVA and regression to show only a weak link with revenue; presented in a Google Sheets dashboard.",
          vi: "Phân tích khuyến mãi (nhiệm vụ đầu tiên): khai phá dữ liệu bằng SQL, phân tách chi phí khuyến mãi bằng cây vấn đề MECE để tìm nơi chi phí tập trung nhiều nhất, và dùng ANOVA, hồi quy để kiểm định mối liên hệ với doanh thu (chỉ ở mức yếu); trình bày trên dashboard Google Sheets.",
        },
        {
          en: "Revenue driver analysis for consultations, imaging and lab tests: broke net revenue down into visits × price × order rate and measured how much each driver added to the change, down to specialty and doctor level.",
          vi: "Phân tích yếu tố tác động đến doanh thu khám bệnh, cận lâm sàng (CLS) và xét nghiệm: tách doanh thu thuần thành lượt khám × đơn giá × tỷ lệ chỉ định, đo mức đóng góp của từng yếu tố vào biến động, chi tiết đến cấp chuyên khoa và bác sĩ.",
        },
        {
          en: "Built the first corporate health check dashboard from scratch (none existed before) for the CEO and FP&A, with AI-assisted coding: an Apps Script web app with email-based access that tracks each contract from signing to payment across Sales, medical secretaries, doctors and Accounting, with overdue alerts, stage aging and a cash-flow waterfall.",
          vi: "Tự xây dựng từ đầu dashboard Khám sức khỏe doanh nghiệp đầu tiên (trước đó chưa có) cho CEO và FP&A, với sự hỗ trợ của AI: web app Apps Script phân quyền theo email, theo dõi từng hợp đồng từ lúc ký đến lúc thu tiền qua các bộ phận Kinh doanh, Thư ký y khoa, Bác sĩ và Kế toán; có cảnh báo quá hạn, thời gian tồn đọng ở từng khâu và biểu đồ thác nước dòng tiền.",
        },
        {
          en: "Automation and reporting: an Apps Script tool that extracts data from PDF files into the data-entry sheet, a Looker Studio report on surgery and inpatient activity, and weekly AMC contract updates for the management report.",
          vi: "Tự động hóa và báo cáo: công cụ Apps Script trích xuất dữ liệu từ file PDF vào bảng nhập liệu, báo cáo Phẫu thuật – Nội trú trên Looker Studio, và cập nhật số liệu hợp đồng AMC hằng tuần cho báo cáo quản trị.",
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
        en: "Lead Business Analyst and Project Manager for Ho Chi Minh City's bus card issuance system for citizens, from multi-channel application intake to batch Excel export for card printing. Led a 40-member team and worked directly with MCPT leadership.",
        vi: "Lead Business Analyst kiêm Quản lý dự án (PM) cho hệ thống cấp thẻ xe buýt cho người dân TP.HCM — từ tiếp nhận hồ sơ đa kênh đến xuất file Excel hàng loạt cho đơn vị in thẻ. Điều phối đội ngũ 40 thành viên và làm việc trực tiếp với Ban Lãnh đạo MCPT.",
      },
      highlights: [
        {
          en: "Managed a 40-member cross-functional team in 4 squads (BA, Frontend/Mobile, Backend, QA), working with squad leads to break down tasks, track milestones and ensure the quality of deliverables.",
          vi: "Quản lý đội ngũ 40 thành viên chia thành 4 nhóm (BA, Frontend/Mobile, Backend, QA); làm việc với các trưởng nhóm để chia nhỏ công việc, theo dõi các mốc tiến độ và kiểm soát chất lượng sản phẩm bàn giao.",
        },
        {
          en: "Acted as the main link between the student project team and MCPT leadership: gathered the initial business requirements, prepared on-site interview questions to find operational pain points, and modeled the AS-IS and TO-BE processes in BPMN.",
          vi: "Là đầu mối giữa nhóm dự án sinh viên và Ban Lãnh đạo MCPT: tiếp nhận yêu cầu nghiệp vụ ban đầu, soạn bộ câu hỏi phỏng vấn khảo sát thực tế để tìm điểm nghẽn vận hành, và mô hình hóa quy trình AS-IS, TO-BE bằng BPMN.",
        },
        {
          en: "Prepared and led the first demo with MCPT leadership to agree on the project baseline, drawing a clear line between in-scope and out-of-scope features.",
          vi: "Chuẩn bị nội dung và chủ trì buổi demo đầu tiên với Ban Lãnh đạo MCPT để chốt phạm vi dự án, phân định rõ tính năng trong phạm vi (in-scope) và ngoài phạm vi (out-of-scope).",
        },
        {
          en: "Reviewed and refined the SRS and PRD with a co-lead BA, and contributed to the database and data model design for citizen identity verification and card number pool management.",
          vi: "Cùng BA đồng phụ trách rà soát và hoàn thiện SRS, PRD; tham gia một phần thiết kế cơ sở dữ liệu và mô hình dữ liệu cho chức năng xác thực thông tin công dân và quản lý kho số thẻ.",
        },
        {
          en: "Owned the full project documentation set (SRS, PRD, data dictionary, UML diagrams, use cases, user stories, interview guides and UAT test scripts), and managed workflows and stakeholder communication in every phase, without writing code.",
          vi: "Chịu trách nhiệm toàn bộ bộ tài liệu dự án (SRS, PRD, Data Dictionary, sơ đồ UML, Use Case, User Story, bộ câu hỏi phỏng vấn, kịch bản kiểm thử UAT); quản lý tiến trình dự án và giao tiếp với các bên liên quan qua mọi giai đoạn, không trực tiếp viết code.",
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
        en: "Completed the Data Analytics training program at VTI Academy.",
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
        en: "A variance analysis that splits hospital revenue into its drivers, so one total no longer hides what really changed.",
        vi: "Phân tích biến động, tách doanh thu bệnh viện thành các yếu tố cấu thành để con số tổng không còn che khuất những thay đổi thực sự.",
      },
      cover: "/images/projects/sig-revenue-drivers.webp",
      facts: [
        {
          en: "When consultation, imaging and lab revenue changes, which driver is really responsible?",
          vi: "Khi doanh thu khám bệnh, CLS và xét nghiệm biến động, yếu tố nào thực sự gây ra?",
        },
        {
          en: "Monthly revenue by branch, customer group, specialty and doctor, compared across two periods.",
          vi: "Doanh thu theo tháng, chi nhánh, nhóm khách hàng, chuyên khoa và bác sĩ, so sánh giữa hai kỳ.",
        },
        {
          en: "Growth in one driver can hide a fall in another, so the total alone told a misleading story.",
          vi: "Yếu tố này tăng có thể che lấp yếu tố khác giảm; chỉ nhìn con số tổng rất dễ kết luận sai.",
        },
        {
          en: "Moved the discussion from patient volume to order rates, broken down by specialty and doctor.",
          vi: "Chuyển trọng tâm thảo luận từ lượng bệnh nhân sang tỷ lệ chỉ định, chi tiết theo chuyên khoa và bác sĩ.",
        },
      ],
      stack: ["Google Sheets", "Pivot tables", "Waterfall chart"],
      methods: ["Variance analysis", "Chain substitution method", "Drill-down analysis"],
      period: { en: "2026 · SIG internship", vi: "2026 · Thực tập tại SIG" },
      myRole: { en: "Business Analyst Intern", vi: "Thực tập sinh Business Analyst" },
      team: { en: "Individual work", vi: "Thực hiện độc lập" },
      contributions: [
        { en: "Wrote net revenue as a six-driver formula: visits, prices and order rates.", vi: "Biểu diễn doanh thu thuần thành công thức sáu yếu tố: lượt khám, đơn giá và tỷ lệ chỉ định." },
        { en: "Built one long-format table with filters for period, branch, B2B/B2C and service group.", vi: "Xây dựng một bảng dữ liệu dạng dài với bộ lọc kỳ, chi nhánh, B2B/B2C và nhóm dịch vụ." },
        { en: "Measured each driver's contribution with the chain substitution method and a waterfall chart.", vi: "Đo mức đóng góp của từng yếu tố bằng phương pháp thay thế liên hoàn và biểu đồ thác nước." },
        { en: "Drilled down to specialty and doctor level to find where the change was concentrated.", vi: "Phân tích sâu đến cấp chuyên khoa, bác sĩ để tìm nơi tập trung biến động." },
        { en: "Presented the whole logic on one dashboard sheet for management.", vi: "Trình bày toàn bộ logic trên một trang dashboard cho Ban Giám đốc." },
      ],
      metrics: [
        { value: "6", label: { en: "revenue drivers modeled", vi: "yếu tố doanh thu được mô hình hóa" } },
        { value: "3", label: { en: "drill-down levels: hospital, specialty, doctor", vi: "cấp phân tích: toàn viện, chuyên khoa, bác sĩ" } },
        { value: "2", label: { en: "periods compared side by side", vi: "kỳ được so sánh song song" } },
      ],
      context: {
        en: "Saigon International General Hospital has several branches. Management needed to know what was behind the changes in consultation, imaging (CLS) and lab test (XN) revenue. A headline total cannot answer that question, so the task was to find which driver had actually changed.",
        vi: "Bệnh viện Đa khoa Quốc tế Sài Gòn có nhiều chi nhánh. Ban Giám đốc cần biết nguyên nhân đằng sau biến động doanh thu khám bệnh, cận lâm sàng (CLS) và xét nghiệm (XN). Con số tổng không trả lời được câu hỏi này, vì vậy nhiệm vụ là xác định yếu tố nào thực sự thay đổi.",
      },
      process: [
        {
          title: { en: "Write revenue as a formula", vi: "Viết doanh thu thành công thức" },
          body: {
            en: "Net revenue = visits × (consultation price + imaging order rate × imaging price + lab order rate × lab price). This gives six drivers, and the hospital can act on each one of them.",
            vi: "Doanh thu thuần = Lượt khám × (Đơn giá khám + Tỷ lệ chỉ định CLS × Đơn giá CLS + Tỷ lệ chỉ định XN × Đơn giá XN). Công thức cho ra sáu yếu tố, và bệnh viện đều có thể tác động lên từng yếu tố.",
          },
        },
        {
          title: { en: "Prepare one flexible table", vi: "Chuẩn bị một bảng dữ liệu linh hoạt" },
          body: {
            en: "Kept the raw data in one long-format table and built every view from filters (period, branch, B2B/B2C, service group), so any new comparison takes just one change.",
            vi: "Lưu dữ liệu gốc trong một bảng dạng dài (long format), mọi góc nhìn đều dựng từ bộ lọc (kỳ, chi nhánh, B2B/B2C, nhóm dịch vụ), nên đổi phép so sánh chỉ cần một thao tác.",
          },
        },
        {
          title: { en: "Measure each driver's contribution", vi: "Đo mức đóng góp của từng yếu tố" },
          body: {
            en: "Used the chain substitution method: replaced one driver at a time, from its base-period value to its comparison-period value, and showed each step in a waterfall chart.",
            vi: "Dùng phương pháp thay thế liên hoàn: lần lượt thay từng yếu tố từ giá trị kỳ gốc sang kỳ so sánh và thể hiện từng bước trên biểu đồ thác nước (waterfall).",
          },
        },
        {
          title: { en: "Go deeper where it matters", vi: "Đào sâu ở những điểm quan trọng" },
          body: {
            en: "Repeated the breakdown by specialty and by doctor, with visits, prices and order rates side by side, to find exactly where each change was concentrated.",
            vi: "Lặp lại phân tích theo chuyên khoa và bác sĩ, đặt lượt khám, đơn giá và tỷ lệ chỉ định cạnh nhau để chỉ ra chính xác thay đổi tập trung ở đâu.",
          },
        },
        {
          title: { en: "Present it for decisions", vi: "Trình bày để ra quyết định" },
          body: {
            en: "One dashboard sheet with ▲▼ change markers and the formula shown on the page, so readers can follow the logic without opening the raw data.",
            vi: "Một trang dashboard với ký hiệu ▲▼ cho biến động và công thức ghi ngay trên trang, giúp người đọc theo được logic mà không cần mở dữ liệu gốc.",
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
        en: "The total only showed that revenue had fallen; the breakdown showed why. Patient volume alone could not explain the fall. Imaging and lab order rates had also changed, and the change was concentrated in a few specialties and doctors rather than spread across the hospital. So the next step was not a campaign to bring in more patients. It was a shortlist of specialties whose ordering patterns needed review, plus a formula the team can rerun every month to see which driver has moved.",
        vi: "Con số tổng chỉ cho thấy doanh thu giảm; phân tách yếu tố mới cho thấy vì sao. Lượng bệnh nhân không giải thích hết mức giảm: tỷ lệ chỉ định CLS và xét nghiệm cũng thay đổi, và thay đổi tập trung ở một số chuyên khoa, bác sĩ chứ không trải đều toàn viện. Vì vậy, bước tiếp theo không phải là chiến dịch thu hút thêm bệnh nhân, mà là danh sách chuyên khoa cần rà soát hoạt động chỉ định, kèm một công thức để đội ngũ chạy lại mỗi tháng và biết yếu tố nào vừa thay đổi.",
      },
      learnings: {
        en: "A flat total can hide two forces moving in opposite directions, so break the number down before drawing any conclusion.",
        vi: "Một con số tổng đi ngang có thể che giấu hai xu hướng ngược chiều. Hãy phân tách trước khi kết luận.",
      },
    },
    {
      slug: "sig-promotion-analysis",
      role: "da",
      title: { en: "Promotion analysis: where does the discount money go?", vi: "Phân tích khuyến mãi: tiền khuyến mãi đang chi về đâu?" },
      cover: "/images/projects/sig-promotion-analysis.webp",
      summary: {
        en: "My first task at SIG: explore the promotion data, find where most of the discount money goes, then test whether promotions really move revenue.",
        vi: "Nhiệm vụ đầu tiên tại SIG: khai phá dữ liệu khuyến mãi, tìm nơi tiền khuyến mãi chi ra nhiều nhất, rồi kiểm định xem khuyến mãi có thực sự tác động đến doanh thu.",
      },
      facts: [
        {
          en: "Which named promotion policies take the biggest share of promotion spend, and in which customer group and service?",
          vi: "Chính sách khuyến mãi nào chiếm tỷ trọng chi phí lớn nhất, và tập trung ở nhóm khách hàng, dịch vụ nào?",
        },
        {
          en: "Promotion and revenue records explored with SQL, plus business context from talks with the teams involved.",
          vi: "Dữ liệu khuyến mãi và doanh thu được khai phá bằng SQL; bối cảnh nghiệp vụ thu thập qua trao đổi với các bộ phận liên quan.",
        },
        {
          en: "Most promotion spend sits in one clear block, but ANOVA and regression showed only a weak relationship between promotions and revenue.",
          vi: "Phần lớn chi phí khuyến mãi dồn vào một khối rõ ràng, nhưng ANOVA và hồi quy cho thấy khuyến mãi và doanh thu chỉ liên quan yếu.",
        },
        {
          en: "Instead of changing the whole promotion program, the hospital only needs to review the few named policies that patients use most.",
          vi: "Thay vì thay đổi toàn bộ chương trình khuyến mãi, bệnh viện chỉ cần rà soát một số chính sách đang được bệnh nhân dùng nhiều nhất.",
        },
      ],
      stack: ["SQL", "Google Sheets", "Pivot tables"],
      methods: ["Exploratory data analysis", "MECE issue tree", "ANOVA", "Regression analysis"],
      period: { en: "2026 · SIG internship (first task)", vi: "2026 · Thực tập tại SIG (nhiệm vụ đầu tiên)" },
      myRole: { en: "Business Analyst Intern", vi: "Thực tập sinh Business Analyst" },
      team: { en: "Individual work", vi: "Thực hiện độc lập" },
      contributions: [
        { en: "Explored the promotion data with SQL to learn its structure and business meaning.", vi: "Khai phá dữ liệu khuyến mãi bằng SQL để nắm cấu trúc và ý nghĩa nghiệp vụ." },
        { en: "Built a MECE issue tree that breaks promotion spend down by policy, customer group and service.", vi: "Xây dựng cây vấn đề MECE, phân tách chi phí khuyến mãi theo chính sách, nhóm khách hàng và dịch vụ." },
        { en: "Measured each named policy's share of promotion spend to find the biggest block.", vi: "Tính tỷ trọng chi phí của từng chính sách khuyến mãi để tìm ra khối lớn nhất." },
        { en: "Tested the relationship between promotions and revenue with ANOVA and regression.", vi: "Kiểm định mối liên hệ giữa khuyến mãi và doanh thu bằng ANOVA và hồi quy." },
        { en: "Presented the findings in a Google Sheets dashboard that the team can update.", vi: "Trình bày kết quả trên dashboard Google Sheets mà đội ngũ có thể tự cập nhật." },
      ],
      // no figures can be published for this task, so the key results are the skills it built
      metrics: [
        { value: "SQL", label: { en: "first hands-on exploration of real hospital data", vi: "lần đầu khai phá dữ liệu thực tế của bệnh viện" } },
        { value: "MECE", label: { en: "issue tree that breaks promotion spend down by policy, customer group and service", vi: "cây vấn đề phân tách chi phí khuyến mãi theo chính sách, nhóm khách hàng và dịch vụ" } },
        { value: "ANOVA", label: { en: "and regression to test whether promotions really affect revenue", vi: "và hồi quy để kiểm định khuyến mãi có thực sự ảnh hưởng đến doanh thu" } },
      ],
      context: {
        en: "This was my first task at SIG, and its goal was to learn how to read and explore the hospital's data. The hospital runs many named promotion policies across its services. The question was simple: where does most of the promotion money go, and what share does each policy take? In other words, in which customer group and service do patients use promotions the most? Finding that biggest block first means the largest part of the problem can be solved first.",
        vi: "Đây là nhiệm vụ đầu tiên của tôi tại SIG, với mục tiêu học cách đọc hiểu và khai phá dữ liệu của bệnh viện. Bệnh viện áp dụng nhiều chính sách khuyến mãi có tên cho các dịch vụ. Câu hỏi đặt ra: tiền khuyến mãi đang được chi nhiều nhất ở đâu, và mỗi chính sách chiếm bao nhiêu phần trăm? Nói cách khác, bệnh nhân dùng khuyến mãi nhiều nhất ở nhóm khách hàng và dịch vụ nào? Tìm ra khối lớn nhất trước thì sẽ giải quyết được phần lớn vấn đề trước.",
      },
      process: [
        {
          title: { en: "Explore the data first", vi: "Khai phá dữ liệu trước" },
          body: {
            en: "Queried the promotion and revenue tables with SQL to understand the columns, the policy names and how each discount is recorded.",
            vi: "Truy vấn các bảng khuyến mãi và doanh thu bằng SQL để hiểu các cột dữ liệu, tên chính sách và cách ghi nhận từng khoản giảm giá.",
          },
        },
        {
          title: { en: "Break the problem down", vi: "Phân tách vấn đề" },
          body: {
            en: "Talked with the teams involved to learn how promotions work day to day, then built a MECE issue tree: promotion spend by policy, customer group (B2B / B2C) and service.",
            vi: "Trao đổi với các bộ phận liên quan để hiểu khuyến mãi vận hành thực tế, rồi xây dựng cây vấn đề MECE: chi phí khuyến mãi theo chính sách, nhóm khách hàng (B2B / B2C) và dịch vụ.",
          },
        },
        {
          title: { en: "Find the biggest block", vi: "Tìm khối lớn nhất" },
          body: {
            en: "Measured each policy's share of promotion spend (promotion cost as a percentage of gross sales) for every customer group and service. Most of the spend sat in one segment, where many patients use promotions, so a lot of money is discounted there.",
            vi: "Tính tỷ trọng chi phí khuyến mãi (tiền khuyến mãi / doanh thu gộp) của từng chính sách theo nhóm khách hàng và dịch vụ. Phần lớn chi phí dồn vào một phân khúc — nơi nhiều bệnh nhân dùng khuyến mãi nên số tiền giảm giá rất lớn.",
          },
        },
        {
          title: { en: "Test whether promotions move revenue", vi: "Kiểm định tác động đến doanh thu" },
          body: {
            en: "Focused on that segment, since the goal was to improve it, and used ANOVA and regression to check whether promotions really affect revenue. The relationship turned out to be weak.",
            vi: "Tập trung vào phân khúc đó vì mục tiêu là cải thiện nó, rồi dùng ANOVA và hồi quy để kiểm tra khuyến mãi có thực sự ảnh hưởng đến doanh thu. Kết quả: mối liên hệ giữa hai yếu tố này yếu.",
          },
        },
        {
          title: { en: "Build the dashboard", vi: "Xây dựng dashboard" },
          body: {
            en: "Presented the findings in Google Sheets with SUMIFS, XLOOKUP and pivot tables — simple enough for the team to update the report themselves.",
            vi: "Trình bày kết quả trên Google Sheets bằng SUMIFS, XLOOKUP và pivot table — đủ đơn giản để đội ngũ tự cập nhật báo cáo.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/sig-promotion-analysis.webp",
          caption: { en: "Promotion spend broken down by policy and customer group, with figures blurred for confidentiality.", vi: "Chi phí khuyến mãi phân tách theo chính sách và nhóm khách hàng — số liệu đã được làm mờ để bảo mật." },
        },
      ],
      outcome: {
        en: "The analysis showed where the biggest block is: most promotion spend sits in one segment, where many patients use named policies. However, ANOVA and regression found only a weak relationship between promotions and revenue, so more or bigger discounts are unlikely to bring in more revenue. The practical answer was therefore narrow: review and improve the few named policies that patients use most, instead of changing the whole promotion program. As my first task, it also taught me to explore the data and measure the size of a problem before trying to solve it.",
        vi: "Phân tích đã chỉ ra khối lớn nhất: phần lớn chi phí khuyến mãi dồn vào một phân khúc, nơi nhiều bệnh nhân sử dụng các chính sách có tên. Tuy nhiên, ANOVA và hồi quy cho thấy khuyến mãi và doanh thu chỉ liên quan yếu, nên tăng thêm khuyến mãi khó mang lại thêm doanh thu. Vì vậy, giải pháp được thu hẹp: chỉ cần rà soát và cải thiện một số chính sách đang được dùng nhiều nhất, thay vì thay đổi toàn bộ chương trình khuyến mãi. Là nhiệm vụ đầu tiên, dự án cũng giúp tôi học cách khai phá dữ liệu và đo độ lớn của vấn đề trước khi tìm cách giải quyết.",
      },
      learnings: {
        en: "My first lesson as an analyst: explore the data before answering, find the biggest block before solving anything, and test a relationship before assuming it.",
        vi: "Bài học đầu tiên khi làm phân tích: khai phá dữ liệu trước khi trả lời, tìm khối lớn nhất trước khi giải quyết, và kiểm định một mối liên hệ trước khi mặc định nó đúng.",
      },
    },
    {
      slug: "sig-kskdn-dashboard",
      role: "ba",
      featured: true,
      title: { en: "Corporate health checks, from contract to payment", vi: "Khám sức khỏe doanh nghiệp: từ hợp đồng đến dòng tiền" },
      cover: "/images/projects/sig-kskdn-overview.webp",
      note: {
        en: "All data on this page is fictional demo data, scrambled and blurred. These are not real reports.",
        vi: "Toàn bộ dữ liệu trên trang này là dữ liệu giả lập, đã được xáo trộn và làm mờ, không phải báo cáo thực tế.",
      },
      summary: {
        en: "Mapped a process that runs across four departments, then built its first dashboard from scratch: a web app that shows the CEO and FP&A where every contract, and every payment, is waiting.",
        vi: "Mô hình hóa quy trình đi qua bốn phòng ban, rồi tự xây dựng từ đầu dashboard đầu tiên cho quy trình này: web app cho CEO và FP&A thấy từng hợp đồng và từng khoản thanh toán đang nằm ở khâu nào.",
      },
      facts: [
        {
          en: "Each corporate health check contract passes through four departments, but there was no dashboard: nobody could see where a contract was stuck or how much money was still outstanding.",
          vi: "Mỗi hợp đồng khám sức khỏe doanh nghiệp đi qua bốn phòng ban nhưng chưa có dashboard nào: không ai biết hợp đồng đang tắc ở đâu và còn bao nhiêu tiền chưa thu.",
        },
        {
          en: "Sales, medical secretaries and doctors, Accounting (fee sheets, invoices, payments) and FP&A. The main readers are the CEO and FP&A.",
          vi: "Kinh doanh, Thư ký y khoa và Bác sĩ, Kế toán (bảng phí, hóa đơn, thanh toán) và FP&A. Người xem chính là CEO và FP&A.",
        },
        {
          en: "An end-to-end process map (5 stages) and an Apps Script web app with four screens and email-based access.",
          vi: "Bản đồ quy trình end-to-end (5 khâu) và web app Apps Script gồm bốn màn hình, phân quyền theo email.",
        },
        {
          en: "The first dashboard for this process: staff only enter the new data each week, and the CEO and FP&A see the update at once, with overdue items ranked by amount × days late.",
          vi: "Dashboard đầu tiên cho quy trình này: mỗi tuần nhân viên chỉ cần nhập số liệu mới, CEO và FP&A thấy ngay bản cập nhật, với hạng mục quá hạn được xếp theo giá trị × số ngày trễ.",
        },
      ],
      stack: ["Google Apps Script", "Google Sheets", "JavaScript"],
      methods: ["Process mapping", "Requirements elicitation", "Dashboard design", "AI-assisted coding"],
      period: { en: "2026 · SIG internship", vi: "2026 · Thực tập tại SIG" },
      myRole: { en: "Business Analyst Intern", vi: "Thực tập sinh Business Analyst" },
      team: { en: "Individual work", vi: "Thực hiện độc lập" },
      contributions: [
        { en: "Mapped the 5-stage process across Sales, medical secretaries, doctors and Accounting.", vi: "Mô hình hóa quy trình 5 khâu qua Kinh doanh, Thư ký y khoa, Bác sĩ và Kế toán." },
        { en: "Agreed on an owner and a deadline for each stage with every department.", vi: "Thống nhất người phụ trách và thời hạn từng khâu với các phòng ban." },
        { en: "Turned each user group's key question (CEO, FP&A, department heads, staff) into requirements for four screens.", vi: "Chuyển câu hỏi chính của từng nhóm người dùng (CEO, FP&A, trưởng bộ phận, nhân viên) thành yêu cầu cho bốn màn hình." },
        { en: "Built the first dashboard for this process from scratch: an Apps Script web app with AI-assisted coding and email-based access.", vi: "Tự xây dựng từ đầu dashboard đầu tiên cho quy trình này: web app Apps Script với sự hỗ trợ của AI, phân quyền theo email." },
        { en: "Set up 11 data-quality checks and a weekly data-entry routine that replaced manual counting.", vi: "Thiết lập 11 nhóm kiểm tra chất lượng dữ liệu và quy trình nhập số liệu hằng tuần thay cho thống kê thủ công." },
      ],
      metrics: [
        { value: "0 → 1", label: { en: "from no dashboard at all to the first one for this process, built from scratch", vi: "từ chưa có dashboard nào đến dashboard đầu tiên cho quy trình này, tự xây dựng từ đầu" } },
        { value: "5", label: { en: "stages tracked end to end", vi: "khâu được theo dõi end-to-end" } },
        { value: "4", label: { en: "departments on one screen", vi: "phòng ban trên cùng một màn hình" } },
        { value: "11", label: { en: "automated data-quality checks", vi: "nhóm kiểm tra chất lượng dữ liệu tự động" } },
      ],
      context: {
        en: "Corporate health checks (KSKDN) are a B2B service. A company signs an annual contract (AMC), its employees are examined, doctors complete the medical conclusions, and Accounting sends the fee sheet, issues the invoice and collects payment. Progress was only tracked by hand in a shared sheet. There was no dashboard, so any numbers for management had to be counted manually.",
        vi: "Khám sức khỏe doanh nghiệp (KSKDN) là dịch vụ B2B: doanh nghiệp ký hợp đồng hằng năm (AMC), nhân viên đi khám, bác sĩ hoàn tất hồ sơ kết luận, Kế toán gửi bảng phí, xuất hóa đơn và thu tiền. Tiến độ chỉ được theo dõi thủ công trên một file dùng chung. Chưa có dashboard nào, nên mọi số liệu báo cáo cho cấp quản lý đều phải thống kê bằng tay.",
      },
      process: [
        {
          title: { en: "Map the end-to-end process", vi: "Mô hình hóa quy trình end-to-end" },
          body: {
            en: "Exam completed → medical conclusions (in parallel) → fee sheet → invoice → payment. The owner and deadline of each stage were agreed with Sales, the medical secretaries and Accounting.",
            vi: "Hoàn tất khám → hồ sơ kết luận (song song) → bảng phí → xuất hóa đơn → thu tiền; thống nhất người phụ trách và thời hạn từng khâu với Kinh doanh, Thư ký y khoa và Kế toán.",
          },
        },
        {
          title: { en: "Start from each user's question", vi: "Bắt đầu từ câu hỏi của từng người dùng" },
          body: {
            en: "CEO and FP&A: Where is the money, and what is stuck? Department heads: What comes first, and who is overloaded? Staff: What is on my list today?",
            vi: "CEO và FP&A: Tiền đang nằm ở đâu, khâu nào đang tắc? Trưởng bộ phận: Việc nào cần ưu tiên, ai đang quá tải? Nhân viên: Hôm nay tôi cần xử lý gì?",
          },
        },
        {
          title: { en: "Design four screens", vi: "Thiết kế bốn màn hình" },
          body: {
            en: "Overview (a summary line, contract status, a cash waterfall from quote to collected, a 12-month trend); Actions (by department, priority = amount × days late, list / kanban / calendar / staff views, one-click copy of reminder messages); Contract detail; and Settings for admins.",
            vi: "Tổng quan (câu kết luận, trạng thái hợp đồng, biểu đồ thác nước dòng tiền từ báo giá đến đã thu, xu hướng 12 tháng); Cần xử lý (theo phòng ban, ưu tiên = giá trị × số ngày trễ, dạng danh sách / kanban / lịch / theo nhân viên, sao chép nhanh tin nhắn nhắc việc); Chi tiết hợp đồng; và Cài đặt cho quản trị viên.",
          },
        },
        {
          title: { en: "Build it with AI-assisted coding", vi: "Phát triển với sự hỗ trợ của AI" },
          body: {
            en: "A Google Apps Script web app that only reads the tracking sheet and never writes to it, with admin and viewer access controlled by Google account. It was built with AI-assisted coding and improved over several versions based on user feedback.",
            vi: "Web app Google Apps Script chỉ đọc file theo dõi, không ghi đè; phân quyền quản trị viên và người xem theo tài khoản Google. Sản phẩm được phát triển với sự hỗ trợ của AI và cải tiến qua nhiều phiên bản theo phản hồi người dùng.",
          },
        },
        {
          title: { en: "Make data quality visible", vi: "Minh bạch chất lượng dữ liệu" },
          body: {
            en: "Eleven checks flag problems such as missing due dates, duplicate contract IDs or contracts paid in full but not closed. The sheet stays the single source of truth instead of being fixed silently.",
            vi: "Mười một nhóm kiểm tra tự động đánh dấu lỗi như thiếu thời hạn, trùng mã hợp đồng, hoặc đã thu đủ tiền nhưng chưa đóng hợp đồng. Nhờ vậy, file gốc vẫn là nguồn dữ liệu chuẩn duy nhất (single source of truth) thay vì bị sửa ngầm.",
          },
        },
        {
          title: { en: "Keep it up to date", vi: "Duy trì số liệu cập nhật" },
          body: {
            en: "Each week, the AMC contract data is entered once and the dashboard updates itself, so the management report no longer needs manual counting.",
            vi: "Mỗi tuần chỉ cần nhập số liệu hợp đồng AMC một lần, dashboard tự cập nhật; báo cáo quản trị không còn phải thống kê thủ công.",
          },
        },
      ],
      // screenshots from the local harness with a scrambled demo dataset: contracts dropped, every amount randomised
      gallery: [
        {
          src: "/images/projects/sig-kskdn-overview.webp",
          caption: { en: "Overview: a one-line summary, cash collected over the last 12 weeks and four headline KPIs (fictional data, blurred).", vi: "Tổng quan: câu kết luận, dòng tiền thu về trong 12 tuần gần nhất và bốn chỉ số chính (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-charts.webp",
          caption: { en: "Invoiced and collected amounts by month, the cash funnel from quote to collection, and each stage's performance against its deadline (fictional data, blurred).", vi: "Tiền xuất hóa đơn và đã thu theo tháng, phễu dòng tiền từ báo giá đến đã thu, và hiệu suất từng khâu so với thời hạn (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-actions.webp",
          caption: { en: "Actions: what is overdue, what to prioritize and which stage is stuck (fictional data, blurred).", vi: "Cần xử lý: hạng mục quá hạn, việc cần ưu tiên và khâu đang tắc (dữ liệu giả lập, đã làm mờ)." },
        },
        {
          src: "/images/projects/sig-kskdn-contract.webp",
          caption: { en: "The five stages of one contract, with the medical conclusions running in parallel.", vi: "Năm khâu của một hợp đồng; khâu hồ sơ kết luận chạy song song." },
        },
        {
          src: "/images/projects/sig-kskdn-timeline.webp",
          caption: { en: "The same contract on a timeline: plan, delay and the lead-time target.", vi: "Cùng hợp đồng đó trên trục thời gian: kế hoạch, độ trễ và mục tiêu lead time." },
        },
      ],
      outcome: {
        en: "“Where is the money?” now has an answer for each stage. The cash waterfall shows how much is still waiting at the fee sheet, invoice or payment stage, instead of one outstanding total. Ranking by amount × days late makes sure that one large overdue contract is handled before many small ones — a priority that a simple count of overdue items would hide. The eleven data-quality checks also expose errors at the source, such as missing due dates, duplicate IDs and contracts paid but never closed, so they no longer distort the charts without anyone noticing. Most importantly, the process now has a dashboard for the first time: staff enter the new data each week, and the CEO and FP&A always see the latest picture without anyone counting by hand.",
        vi: "Câu hỏi “Tiền đang nằm ở đâu?” giờ đã có câu trả lời cho từng khâu: biểu đồ thác nước cho thấy bao nhiêu tiền còn chờ ở khâu bảng phí, hóa đơn hay thanh toán, thay vì chỉ một con số tổng. Xếp ưu tiên theo giá trị × số ngày trễ giúp một hợp đồng lớn bị trễ được xử lý trước nhiều hợp đồng nhỏ — điều mà cách đếm số hạng mục quá hạn sẽ bỏ sót. Mười một nhóm kiểm tra chất lượng dữ liệu cũng làm lộ lỗi ngay tại file gốc, như thiếu thời hạn, trùng mã hay đã thu đủ tiền nhưng chưa đóng hợp đồng, thay vì để chúng âm thầm làm sai lệch biểu đồ. Quan trọng nhất, quy trình này lần đầu tiên có dashboard: mỗi tuần nhân viên chỉ nhập số liệu mới, CEO và FP&A luôn thấy bức tranh cập nhật nhất mà không ai phải thống kê bằng tay.",
      },
      learnings: {
        en: "A CEO dashboard is a process problem first: until every stage had an owner and a deadline, there was nothing useful to chart.",
        vi: "Dashboard cho CEO trước hết là bài toán quy trình: khi chưa khâu nào có người phụ trách và thời hạn, thì chưa có gì để trực quan hóa.",
      },
    },
    {
      slug: "uth-student-mental-health",
      role: "da",
      university: true,
      title: { en: "Student mental health, from sensor data to decisions", vi: "Sức khỏe tinh thần sinh viên: từ dữ liệu cảm biến đến quyết định" },
      summary: {
        en: "A data warehouse and a four-page Power BI dashboard that help a university counseling team see who is at risk, when, and how to respond.",
        vi: "Kho dữ liệu và dashboard Power BI bốn trang giúp bộ phận tư vấn tâm lý của trường biết sinh viên nào có nguy cơ, vào lúc nào và nên hỗ trợ ra sao.",
      },
      cover: "/images/projects/uth-mental-health-overview.webp",
      facts: [
        {
          en: "How are students coping, which groups are at risk, and when should the university step in?",
          vi: "Sinh viên đang ổn đến đâu, nhóm nào có nguy cơ, và khi nào nhà trường nên can thiệp?",
        },
        {
          en: "Dartmouth's public College Experience Dataset: smartphone sensing data and mood surveys from 189 students over 8,809 observed days (2017–2022).",
          vi: "Bộ dữ liệu công khai College Experience Dataset của Đại học Dartmouth: dữ liệu cảm biến điện thoại và khảo sát tâm trạng của 189 sinh viên trong 8.809 ngày quan sát (2017–2022).",
        },
        {
          en: "26.5% of students had at least one day of severe anxiety or depression. Risk peaks in May and October, and students who sleep less than six hours score 18% higher on the PHQ-4.",
          vi: "26,5% sinh viên có ít nhất một ngày lo âu hoặc trầm cảm ở mức nặng. Rủi ro cao nhất vào tháng 5 và tháng 10; nhóm ngủ dưới 6 giờ có điểm PHQ-4 cao hơn 18%.",
        },
        {
          en: "Each dashboard page ends with a recommendation: support timed to the peak months, a sleep campaign, social activities and an at-risk watch list.",
          vi: "Mỗi trang dashboard kết thúc bằng một đề xuất: hỗ trợ đúng tháng cao điểm, chiến dịch cải thiện giấc ngủ, hoạt động kết nối xã hội và danh sách theo dõi nhóm có nguy cơ.",
        },
      ],
      stack: ["Power BI", "DAX", "SQL Server", "SSIS", "SSAS"],
      methods: ["Star schema", "Data warehousing", "Data storytelling"],
      period: { en: "11/2025 · UTH coursework (reviewed 10/2026)", vi: "11/2025 · Đồ án môn học tại UTH (rà soát lại 10/2026)" },
      myRole: { en: "Power BI developer", vi: "Phụ trách Power BI" },
      team: { en: "Team of 6", vi: "Nhóm 6 người" },
      contributions: [
        { en: "Built the Power BI star schema from seven SQL Server tables.", vi: "Xây dựng mô hình Star Schema trong Power BI từ bảy bảng SQL Server." },
        { en: "Wrote 24 DAX measures and 11 calculated columns.", vi: "Viết 24 measure DAX và 11 cột tính toán." },
        { en: "Designed 4 dashboard pages and 11 tooltip, insight and recommendation pages.", vi: "Thiết kế 4 trang dashboard và 11 trang tooltip, insight, đề xuất." },
        { en: "Audited my own model after the course and fixed 6 data errors.", vi: "Tự rà soát mô hình sau học phần và sửa 6 lỗi số liệu." },
      ],
      metrics: [
        { value: "24", label: { en: "DAX measures, plus 11 calculated columns", vi: "measure DAX, cùng 11 cột tính toán (calculated column)" } },
        { value: "15", label: { en: "report pages: 4 dashboards and 11 tooltip, insight and recommendation pages", vi: "trang báo cáo: 4 dashboard và 11 trang tooltip, insight, đề xuất" } },
        { value: "6", label: { en: "data errors found and fixed in my own quality review", vi: "lỗi số liệu tự phát hiện và sửa khi rà soát lại" } },
      ],
      context: {
        en: "Students are especially vulnerable to stress, anxiety and depression, but universities rarely have a data-based way to spot it early. For the Data Warehousing & Decision Support Systems course, our team of six built a data warehouse from five years of smartphone sensing data and mood surveys. My teammates handled data cleaning in Python, ETL in SSIS and the SSAS cube. I built the Power BI layer — the part a counseling team would actually use.",
        vi: "Sinh viên là nhóm dễ bị căng thẳng, lo âu và trầm cảm, nhưng nhà trường hiếm khi có công cụ dựa trên dữ liệu để phát hiện sớm. Trong học phần Kho dữ liệu và Hệ thống hỗ trợ ra quyết định, nhóm sáu người xây dựng kho dữ liệu từ năm năm dữ liệu cảm biến điện thoại và khảo sát tâm trạng. Các bạn trong nhóm phụ trách làm sạch dữ liệu bằng Python, ETL bằng SSIS và cube SSAS; tôi đảm nhận lớp Power BI — phần mà bộ phận tư vấn trực tiếp sử dụng.",
      },
      process: [
        {
          title: { en: "Build the model in Power BI", vi: "Xây dựng mô hình trong Power BI" },
          body: {
            en: "Imported seven tables from SQL Server into a star schema (one fact table and six dimension tables, including a date table) and grouped the measures into four measure tables to keep the model easy to maintain.",
            vi: "Import bảy bảng từ SQL Server theo mô hình Star Schema (một bảng Fact và sáu bảng Dimension, trong đó có bảng ngày), gom measure vào bốn bảng riêng để mô hình gọn và dễ bảo trì.",
          },
        },
        {
          title: { en: "Calculate every average over the fact table", vi: "Tính mọi giá trị trung bình trên bảng Fact" },
          body: {
            en: "The dimension tables have 172,797 rows, but only 8,809 days have a survey response. So the measures use AVERAGEX and RELATED over the fact table, and days without a survey do not distort the KPIs.",
            vi: "Các bảng Dimension có 172.797 dòng nhưng chỉ 8.809 ngày có khảo sát. Vì vậy, measure dùng AVERAGEX và RELATED trên bảng Fact để những ngày không có khảo sát không làm sai lệch KPI.",
          },
        },
        {
          title: { en: "One page per business question", vi: "Mỗi trang trả lời một câu hỏi nghiệp vụ" },
          body: {
            en: "Overview, Sleep & Affect, Device Location and Audio Social, with synced slicers, page navigation and a Documentation page that explains the PHQ-4, SSE-3 and stress scales.",
            vi: "Gồm các trang Overview, Sleep & Affect, Device Location và Audio Social; có slicer đồng bộ, thanh điều hướng và trang Documentation giải thích các thang đo PHQ-4, SSE-3 và Stress.",
          },
        },
        {
          title: { en: "From insight to recommendation", vi: "Từ insight đến đề xuất" },
          body: {
            en: "Eleven supporting pages follow a tooltip → insight → recommendation path, so non-technical readers can move from a chart to a decision.",
            vi: "Mười một trang bổ trợ đi theo trình tự tooltip → insight → đề xuất, giúp người đọc không chuyên kỹ thuật đi từ biểu đồ đến quyết định.",
          },
        },
        {
          title: { en: "Check my own numbers", vi: "Tự kiểm chứng số liệu" },
          body: {
            en: "After the course, I checked the model again with DAX queries and found six errors. They included a percentage shown as 0.26, sleep counts inflated about 19 times by the wrong grain, and a placeholder row that hid missing audio data. I fixed all of them and changed any causal wording to describe correlation.",
            vi: "Sau khi kết thúc học phần, tôi kiểm tra lại mô hình bằng truy vấn DAX và phát hiện sáu lỗi, trong đó có tỷ lệ phần trăm hiển thị thành 0.26, số đêm ngủ bị nhân lên khoảng 19 lần do sai mức chi tiết (grain), và một dòng giữ chỗ che mất dữ liệu âm thanh bị thiếu. Tôi đã sửa toàn bộ lỗi và điều chỉnh các nhận định nhân quả thành tương quan.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-mental-health-overview.webp",
          caption: { en: "Overview: wellbeing, stress and activity by month, with shared filters on the right.", vi: "Overview: sức khỏe tinh thần, mức căng thẳng và vận động theo tháng; bộ lọc chung ở bên phải." },
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
          caption: { en: "84.6% of nights start after 11 pm, and more than half of those start between midnight and 2 am.", vi: "84,6% số đêm bắt đầu ngủ sau 23 giờ; hơn một nửa trong số đó rơi vào 0–2 giờ sáng." },
        },
      ],
      outcome: {
        en: "Risk is concentrated, not evenly spread. 26.5% of students had at least one severe day, and these days cluster in May and October. Support should therefore be timed to those months rather than spread across the year. Sleep is the clearest factor: 84.6% of nights start after 11 pm, and students who sleep less than six hours score 18% higher on the PHQ-4. These findings led to four actions: more counseling capacity in April–May and October, a sleep campaign for students who sleep less than six hours, social activities for the most isolated students, and a watch list of the 50 students who had a severe day. All of these are correlations in observational data, not causal effects.",
        vi: "Rủi ro tập trung chứ không trải đều. 26,5% sinh viên có ít nhất một ngày ở mức nặng, và những ngày này dồn vào tháng 5 và tháng 10; vì vậy hoạt động hỗ trợ nên tập trung vào các tháng đó thay vì dàn trải cả năm. Giấc ngủ là yếu tố rõ nhất: 84,6% số đêm bắt đầu ngủ sau 23 giờ, và nhóm ngủ dưới 6 giờ có điểm PHQ-4 cao hơn 18%. Từ đó, nhóm đề xuất bốn hành động: tăng cường tư vấn vào tháng 4–5 và tháng 10, chiến dịch cải thiện giấc ngủ cho nhóm ngủ dưới 6 giờ, hoạt động kết nối cho nhóm ít giao tiếp nhất, và danh sách theo dõi 50 sinh viên từng có ngày ở mức nặng. Tất cả đều là tương quan trên dữ liệu quan sát, không phải quan hệ nhân quả.",
      },
      learnings: {
        en: "A dashboard is only as accurate as its grain: always check which table a number is calculated over before you trust it.",
        vi: "Dashboard chỉ chính xác khi mức chi tiết (grain) đúng. Luôn kiểm tra con số được tính trên bảng nào trước khi tin vào nó.",
      },
    },
    {
      slug: "uth-mis-purchasing",
      role: "ba",
      university: true,
      title: { en: "Retail purchasing, from store shortage to supplier order", vi: "Mua hàng chuỗi bán lẻ: từ cửa hàng thiếu hàng đến đơn mua nhà cung cấp" },
      summary: {
        en: "Interviewed a multi-store retailer to find where purchasing breaks down, then delivered BPMN models, a fit-gap analysis and three custom Odoo 19 modules with a live demo.",
        vi: "Phỏng vấn một chuỗi bán lẻ để tìm điểm nghẽn trong quy trình mua hàng, sau đó xây dựng mô hình BPMN, phân tích fit-gap và phát triển ba module Odoo 19 kèm bản demo trực tuyến.",
      },
      cover: "/images/projects/uth-purchasing-pr-fulfillment-options.webp",
      note: {
        en: "Academic prototype. The process analysis is based on a study of purchasing at Central Retail Vietnam. The project is not affiliated with or endorsed by Central Retail. Screenshots use sample data.",
        vi: "Sản phẩm mẫu phục vụ học tập. Phần phân tích quy trình dựa trên khảo sát quy trình mua hàng tại Central Retail Vietnam; dự án không liên kết và không được Central Retail bảo trợ. Ảnh chụp màn hình dùng dữ liệu mẫu.",
      },
      facts: [
        {
          en: "Stores, merchandising, the warehouse and suppliers worked through email and spreadsheets. Data was out of sync, there was no early warning for low or near-expiry stock, and budgets were only checked after purchases were made.",
          vi: "Cửa hàng, bộ phận Merchandise, kho và nhà cung cấp phối hợp qua email và bảng tính: dữ liệu không đồng bộ, không có cảnh báo sớm khi sắp hết hàng hay hàng cận hạn, và ngân sách chỉ được kiểm tra sau khi đã mua.",
        },
        {
          en: "Store staff, the merchandising team, warehouse QC and suppliers; three of these roles work in the system on the same purchase request.",
          vi: "Nhân viên cửa hàng, bộ phận Merchandise, QC kho và nhà cung cấp; ba vai trò trong số đó làm việc trực tiếp trên cùng một phiếu yêu cầu mua hàng.",
        },
        {
          en: "Interview guide and pain-point list, BPMN AS-IS / TO-BE models, a fit-gap table against standard Odoo, business rules, and three custom modules deployed to a live demo.",
          vi: "Bộ câu hỏi phỏng vấn và danh sách vấn đề, mô hình BPMN AS-IS / TO-BE, bảng fit-gap so với Odoo tiêu chuẩn, bộ quy tắc nghiệp vụ và ba module tự phát triển đã triển khai lên bản demo trực tuyến.",
        },
        {
          en: "Budget control moved from after spending to before approval, and one purchase request replaces long email chains between three roles.",
          vi: "Kiểm soát ngân sách chuyển từ sau khi chi sang trước khi phê duyệt; một phiếu yêu cầu mua hàng thay cho chuỗi email dài giữa ba vai trò.",
        },
      ],
      stack: ["Odoo 19", "Python", "PostgreSQL", "Docker", "GitHub Actions"],
      methods: ["Stakeholder interviews", "BPMN AS-IS / TO-BE", "Fit-gap analysis", "Business rules"],
      period: { en: "04–05/2026 · UTH coursework (made public 10/2026)", vi: "04–05/2026 · Đồ án môn học tại UTH (công khai 10/2026)" },
      myRole: { en: "Business Analyst & lead developer", vi: "Business Analyst kiêm lập trình viên chính" },
      team: { en: "Team of 6", vi: "Nhóm 6 người" },
      contributions: [
        { en: "Wrote the interview guide and interviewed the retailer's staff in person.", vi: "Soạn bộ câu hỏi và trực tiếp phỏng vấn nhân sự doanh nghiệp." },
        { en: "Modeled the AS-IS and TO-BE purchasing processes in BPMN.", vi: "Mô hình hóa quy trình mua hàng AS-IS và TO-BE bằng BPMN." },
        { en: "Ran a fit-gap analysis of 9 areas against standard Odoo.", vi: "Phân tích fit-gap 9 hạng mục so với Odoo tiêu chuẩn." },
        { en: "Turned business rules into requirements: budget control, QC and near-expiry stock.", vi: "Chuyển quy tắc nghiệp vụ thành yêu cầu: kiểm soát ngân sách, QC và hàng cận hạn." },
        { en: "Wrote about 70% of the code and set up the automated deployment.", vi: "Viết khoảng 70% mã nguồn và thiết lập triển khai tự động." },
      ],
      metrics: [
        { value: "9", label: { en: "fit-gap areas covered: configured where Odoo fits, built where it does not", vi: "hạng mục fit-gap: cấu hình khi Odoo đã đáp ứng, tự phát triển khi còn thiếu" } },
        { value: "3", label: { en: "custom modules that extend 14 standard Odoo models without changing the core", vi: "module tự phát triển, mở rộng 14 model chuẩn của Odoo mà không sửa mã lõi" } },
        { value: "~70%", label: { en: "of about 13,700 lines of code, written by me", vi: "trên tổng số khoảng 13.700 dòng mã do tôi viết" } },
      ],
      context: {
        en: "Multi-store retail chains restock from two sources: the central warehouse and external suppliers. For the MIS Practical Project course, I prepared an interview guide and interviewed staff at a large retailer about how purchasing really works. The pain points were clear: requests were made by hand over email, there was no early warning for low or near-expiry stock, and budgets were only checked after the money was spent. Standard Odoo covers purchasing and inventory, but not the full flow from store to merchandising to supplier.",
        vi: "Chuỗi bán lẻ nhiều cửa hàng bổ sung hàng từ hai nguồn: kho tổng và nhà cung cấp bên ngoài. Trong học phần Đồ án thực tế Hệ thống thông tin quản lý, tôi soạn bộ câu hỏi và trực tiếp phỏng vấn nhân sự của một nhà bán lẻ lớn về quy trình mua hàng thực tế. Vấn đề hiện rõ: phiếu yêu cầu lập thủ công qua email, không có cảnh báo sớm khi sắp hết hàng hay hàng cận hạn, và ngân sách chỉ được kiểm tra sau khi đã chi. Odoo tiêu chuẩn đã có mua hàng và quản lý kho, nhưng chưa đáp ứng trọn luồng cửa hàng → Merchandise → nguồn cung.",
      },
      process: [
        {
          title: { en: "Interview the business", vi: "Phỏng vấn doanh nghiệp" },
          body: {
            en: "Wrote an interview guide, then met the retailer's staff in person to learn how a store request moves to merchandising, the warehouse and suppliers. Their answers became the requirements and the pain-point list: manual requests, email threads, data out of sync and late budget checks.",
            vi: "Soạn bộ câu hỏi phỏng vấn, rồi gặp trực tiếp nhân sự doanh nghiệp để hiểu một yêu cầu từ cửa hàng được chuyển đến Merchandise, kho và nhà cung cấp như thế nào. Câu trả lời được tổng hợp thành danh sách yêu cầu và vấn đề: lập phiếu thủ công, trao đổi qua email, dữ liệu không đồng bộ và kiểm tra ngân sách quá muộn.",
          },
        },
        {
          title: { en: "Map the AS-IS process", vi: "Mô hình hóa quy trình AS-IS" },
          body: {
            en: "Modeled the current process in BPMN from the interview notes and marked where each pain point happens and who owns it.",
            vi: "Mô hình hóa quy trình hiện tại bằng BPMN từ ghi chép phỏng vấn, đánh dấu nơi phát sinh từng vấn đề và bộ phận chịu trách nhiệm.",
          },
        },
        {
          title: { en: "Design the TO-BE process in BPMN", vi: "Thiết kế quy trình TO-BE bằng BPMN" },
          body: {
            en: "Made one purchase request (PR) the central document that links store demand, the merchandising decision, purchase orders or internal transfers, QC and restocking, so every department sees the same status.",
            vi: "Lấy phiếu yêu cầu mua hàng (PR) làm chứng từ trung tâm, nối nhu cầu cửa hàng, quyết định của Merchandise, đơn mua hàng hoặc điều chuyển nội bộ, QC và bổ sung hàng — mọi bộ phận cùng thấy một trạng thái.",
          },
        },
        {
          title: { en: "Run a fit-gap analysis against standard Odoo", vi: "Phân tích fit-gap với Odoo tiêu chuẩn" },
          body: {
            en: "Compared nine areas of the TO-BE process with standard Odoo features: configure what fits, extend what fits partly, and build only the real gaps.",
            vi: "Đối chiếu chín hạng mục của quy trình TO-BE với chức năng sẵn có của Odoo: cấu hình phần đã phù hợp, mở rộng phần đáp ứng một phần, chỉ tự phát triển phần thực sự còn thiếu.",
          },
        },
        {
          title: { en: "Turn rules into requirements", vi: "Chuyển quy tắc nghiệp vụ thành yêu cầu" },
          body: {
            en: "No duplicate requests for the same product and store, no approval above the category budget, three supply options for each line, a required reason for every QC rejection, and automatic promotions for near-expiry stock.",
            vi: "Không cho tạo PR trùng cho cùng sản phẩm và cửa hàng, chặn phê duyệt khi vượt ngân sách ngành hàng, ba phương án cung ứng cho mỗi dòng, bắt buộc ghi lý do khi QC từ chối, và tự động tạo khuyến mãi cho hàng cận hạn.",
          },
        },
        {
          title: { en: "Build and deploy", vi: "Phát triển và triển khai" },
          body: {
            en: "Three custom Odoo 19 modules that extend standard models without changing the core, role-based access for stores, merchandising and warehouse QC, and an automated deployment pipeline with Docker and GitHub Actions that publishes a live demo.",
            vi: "Ba module Odoo 19 mở rộng model chuẩn mà không sửa mã lõi, phân quyền theo vai trò cho cửa hàng, Merchandise và QC kho, cùng pipeline triển khai tự động bằng Docker và GitHub Actions lên bản demo trực tuyến.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-purchasing-store-replenishment.webp",
          caption: { en: "Store view: min/max stock levels and a suggested restock quantity; the purchase request is created in one click.", vi: "Màn hình cửa hàng: tồn kho tối thiểu/tối đa và số lượng đề xuất bổ sung; tạo phiếu yêu cầu mua hàng chỉ với một thao tác." },
        },
        {
          src: "/images/projects/uth-purchasing-pr-fulfillment-options.webp",
          caption: { en: "Merchandising picks a supply option for each line: central warehouse, supplier to warehouse, or supplier direct to store.", vi: "Bộ phận Merchandise chọn nguồn cung cho từng dòng: kho tổng, nhà cung cấp giao về kho, hoặc nhà cung cấp giao thẳng đến cửa hàng." },
        },
        {
          src: "/images/projects/uth-purchasing-purchase-budget.webp",
          caption: { en: "Purchase budget by category, showing spent, committed and remaining amounts; over-budget requests cannot be approved.", vi: "Ngân sách mua hàng theo ngành hàng: đã chi, đã cam kết và còn lại; phiếu vượt ngân sách bị chặn phê duyệt." },
        },
        {
          src: "/images/projects/uth-purchasing-stock-by-lot-expiry.webp",
          caption: { en: "Stock by lot and expiry date, kept through the whole transfer from warehouse to store.", vi: "Tồn kho theo lô và hạn sử dụng, được giữ nguyên suốt quá trình điều chuyển từ kho tổng đến cửa hàng." },
        },
        {
          src: "/images/projects/uth-purchasing-expiry-promotion.webp",
          caption: { en: "A daily scheduled action finds near-expiry lots and creates promotions automatically.", vi: "Tác vụ định kỳ (scheduled action) chạy hằng ngày, tự tìm các lô cận hạn và tạo chương trình khuyến mãi." },
        },
        {
          src: "/images/projects/uth-purchasing-store-sale-promo-price.webp",
          caption: { en: "A store sale with the promotional price applied automatically.", vi: "Đơn bán tại cửa hàng tự động áp dụng giá khuyến mãi." },
        },
      ],
      outcome: {
        en: "The fit-gap analysis showed that the problem was not missing purchasing features — standard Odoo already has them — but the handoffs between store, merchandising, warehouse and supplier. So the custom work focused only on those handoffs: one purchase request that carries the whole process, a budget check moved from after the purchase to before approval, a supply option chosen for each line (central warehouse, supplier to warehouse, or supplier direct to store), and near-expiry lots turned into promotions automatically instead of being written off. Everything else was done through configuration. This kept the build to three modules that extend 14 standard models, now running on a live demo.",
        vi: "Phân tích fit-gap cho thấy vấn đề không nằm ở việc thiếu chức năng mua hàng — Odoo tiêu chuẩn đã có — mà ở các điểm bàn giao giữa cửa hàng, Merchandise, kho và nhà cung cấp. Vì vậy, phần tự phát triển chỉ tập trung vào các điểm này: một phiếu yêu cầu xuyên suốt quy trình, kiểm tra ngân sách chuyển từ sau khi mua sang trước khi phê duyệt, chọn nguồn cung cho từng dòng (kho tổng, nhà cung cấp giao về kho, hoặc giao thẳng đến cửa hàng), và lô cận hạn tự động chuyển thành khuyến mãi thay vì phải xuất hủy. Phần còn lại dùng cấu hình sẵn có, nên hệ thống chỉ cần ba module mở rộng 14 model chuẩn và đang chạy trên bản demo trực tuyến.",
      },
      learnings: {
        en: "The standard flow is the easy part. Most of the work is in the exceptions: shortages, damaged goods, near-expiry stock and budget overruns.",
        vi: "Luồng chuẩn là phần dễ; phần lớn công sức nằm ở các ngoại lệ: thiếu hàng, hàng hư hỏng, hàng cận hạn và vượt ngân sách.",
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
        en: "An automated pipeline collects AQI data every hour, detects anomalies with Z-score and Isolation Forest, and feeds a Power BI dashboard straight from GitHub. I was responsible for the dashboard and the alert system.",
        vi: "Pipeline tự động thu thập dữ liệu AQI mỗi giờ, phát hiện bất thường bằng Z-score và Isolation Forest, rồi cấp dữ liệu thẳng từ GitHub cho dashboard Power BI. Tôi phụ trách dashboard và hệ thống cảnh báo.",
      },
      cover: "/images/projects/uth-aqi-unhealthy-hours.webp",
      facts: [
        {
          en: "Which cities and hours are really polluted, and when should a reading trigger an alert?",
          vi: "Thành phố nào, giờ nào thực sự ô nhiễm, và khi nào một chỉ số đo được cần phát cảnh báo?",
        },
        {
          en: "67,450 hourly AQI and weather records for 8 Vietnamese cities (01/2025 – 03/2026), scraped from IQAir by a GitHub Actions pipeline.",
          vi: "67.450 bản ghi AQI và thời tiết theo giờ của 8 thành phố Việt Nam (01/2025 – 03/2026), thu thập từ IQAir bằng pipeline GitHub Actions.",
        },
        {
          en: "Hanoi is above AQI 100 in 48.8% of hours, yet Z-score flagged its AQI only 13 times. When pollution is the norm, “unusual” and “dangerous” no longer mean the same thing.",
          vi: "Hà Nội có AQI trên 100 trong 48,8% số giờ, nhưng Z-score chỉ gắn cờ AQI 13 lần. Khi ô nhiễm đã thành bình thường, “bất thường” và “nguy hiểm” không còn là một.",
        },
        {
          en: "Alerts should combine an absolute AQI threshold with a one-sided z > 3, and warnings should go out at 7–9 am, when all 8 cities reach their daily peak.",
          vi: "Cảnh báo nên kết hợp ngưỡng AQI tuyệt đối với Z-score một phía (z > 3), và nên phát vào 7–9 giờ sáng — lúc cả 8 thành phố cùng đạt đỉnh ô nhiễm trong ngày.",
        },
      ],
      stack: ["Power BI", "DAX", "Power Query", "Python", "GitHub Actions"],
      methods: ["Anomaly detection", "Z-score", "Isolation Forest"],
      period: { en: "2025 · UTH coursework, Artificial Intelligence", vi: "2025 · Đồ án học phần Trí tuệ nhân tạo tại UTH" },
      myRole: { en: "Power BI & alerts", vi: "Phụ trách Power BI và cảnh báo" },
      team: { en: "Team of 4", vi: "Nhóm 4 người" },
      contributions: [
        { en: "Connected Power BI to 24 live CSV files on GitHub with Power Query.", vi: "Kết nối Power BI với 24 file CSV trực tiếp trên GitHub bằng Power Query." },
        { en: "Built the data model: hourly time table, AQI categories and a method selector.", vi: "Xây dựng mô hình dữ liệu: bảng thời gian theo giờ, các mức AQI và bộ chọn phương pháp." },
        { en: "Wrote the DAX that compares Z-score and Isolation Forest city by city.", vi: "Viết DAX so sánh Z-score và Isolation Forest theo từng thành phố." },
        { en: "Built the alert workflow: one live GitHub Issue plus an email.", vi: "Xây dựng workflow cảnh báo: một Issue GitHub cập nhật liên tục kèm email." },
      ],
      metrics: [
        { value: "67,450", label: { en: "hourly records from 8 cities", vi: "bản ghi theo giờ của 8 thành phố" } },
        { value: "24", label: { en: "CSV files read live from GitHub by Power Query, with no data gateway", vi: "file CSV được Power Query đọc trực tiếp từ GitHub, không cần gateway" } },
        { value: "90%", label: { en: "of Z-score flags also caught by Isolation Forest", vi: "điểm bất thường của Z-score cũng được Isolation Forest phát hiện" } },
      ],
      context: {
        en: "Public AQI websites only show the current reading. They do not keep the history, compare cities or warn users when a reading breaks the usual pattern. For the Artificial Intelligence course, our team of four built a pipeline that runs fully on GitHub Actions at no cost. My teammates built the Playwright crawler, the cleaning step and the two detection notebooks. I built the Power BI dashboard and the alerts that tell people when something looks wrong.",
        vi: "Các trang AQI công khai chỉ hiển thị chỉ số hiện tại: không lưu lịch sử, không so sánh giữa các thành phố và không cảnh báo khi số liệu lệch khỏi quy luật thường thấy. Trong học phần Trí tuệ nhân tạo, nhóm bốn người xây dựng pipeline chạy hoàn toàn trên GitHub Actions, không tốn chi phí. Các bạn trong nhóm phụ trách crawler Playwright, bước làm sạch dữ liệu và hai notebook phát hiện bất thường; tôi đảm nhận dashboard Power BI và hệ thống cảnh báo khi có bất thường.",
      },
      process: [
        {
          title: { en: "Use the repository as data storage", vi: "Dùng repository làm nơi lưu dữ liệu" },
          body: {
            en: "Each workflow commits its output to the repository and triggers the next step: scrape every hour → clean and resample to one row per hour → detect anomalies → analyze. No server or database is needed.",
            vi: "Mỗi workflow commit kết quả vào repository và kích hoạt bước tiếp theo: thu thập mỗi giờ → làm sạch, gom về một dòng mỗi giờ (resample) → phát hiện bất thường → phân tích. Không cần máy chủ hay cơ sở dữ liệu.",
          },
        },
        {
          title: { en: "Connect Power BI to live files", vi: "Kết nối Power BI với dữ liệu trực tiếp" },
          body: {
            en: "Power Query reads 24 CSV files (8 cities × 3 result types) from GitHub with Web.Contents and combines them into three fact tables, so one Refresh brings in the latest hour.",
            vi: "Power Query đọc 24 file CSV (8 thành phố × 3 loại kết quả) từ GitHub bằng Web.Contents và gộp thành ba bảng fact; chỉ cần một lần Refresh là có số liệu giờ mới nhất.",
          },
        },
        {
          title: { en: "Build the model for comparison", vi: "Xây dựng mô hình để so sánh" },
          body: {
            en: "An hourly date-time table, a city table, the six US EPA AQI categories and a method selector that lets readers switch between Z-score and Isolation Forest; anomaly counts and rates update with the selection.",
            vi: "Bảng thời gian theo giờ, bảng thành phố, sáu mức AQI theo chuẩn US EPA và bộ chọn phương pháp để người xem chuyển giữa Z-score và Isolation Forest; số lượng và tỷ lệ bất thường thay đổi theo lựa chọn.",
          },
        },
        {
          title: { en: "Alert without spamming", vi: "Cảnh báo mà không gây phiền" },
          body: {
            en: "A script reads every anomaly file and detects the column names automatically, so it works with both methods. It keeps only the latest hour in Vietnam time and merges duplicate alerts. The workflow then updates one “Live feed” GitHub Issue and sends an email, instead of opening a new issue every time.",
            vi: "Script đọc toàn bộ file bất thường và tự nhận diện tên cột nên dùng được cho cả hai phương pháp; chỉ lấy mốc giờ mới nhất theo giờ Việt Nam và gộp cảnh báo trùng. Sau đó, workflow cập nhật một Issue “Live feed” duy nhất trên GitHub và gửi email, thay vì mở issue mới mỗi lần.",
          },
        },
        {
          title: { en: "Read the results critically", vi: "Đánh giá kết quả bằng tư duy phản biện" },
          body: {
            en: "Compared the two methods city by city and looked at where their flags disagreed. This is how the gap between “unusual” and “dangerous” became clear.",
            vi: "So sánh hai phương pháp theo từng thành phố và xem xét những chỗ hai bên gắn cờ khác nhau; từ đó làm rõ khoảng cách giữa “bất thường” và “nguy hiểm”.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-aqi-unhealthy-hours.webp",
          caption: { en: "Share of hours with AQI above 100: 48.8% in Hanoi, none in Nha Trang.", vi: "Tỷ lệ số giờ có AQI trên 100: Hà Nội 48,8%, Nha Trang chưa ghi nhận giờ nào." },
        },
        {
          src: "/images/projects/uth-aqi-anomaly-methods.webp",
          caption: { en: "Z-score flags 2.3% of hours and Isolation Forest flags 8.6%, which covers 90% of the Z-score flags.", vi: "Z-score gắn cờ 2,3% số giờ, Isolation Forest gắn cờ 8,6% và bao trùm 90% điểm Z-score đã gắn cờ." },
        },
      ],
      outcome: {
        en: "Three findings changed how the alerts should work. First, a statistical outlier is not the same as a dangerous reading. Hanoi is polluted almost half the time, so its data is very widely spread, and only AQI above about 231 looks unusual. This means an absolute threshold (for example, AQI > 150) is needed alongside anomaly detection. Second, a two-sided Z-score also flags unusually clean air: 186 of Nha Trang's 189 AQI flags were low readings, so pollution alerts should use z > 3 only. Third, the timing is predictable: all 8 cities peak at 7–9 am, and all 8 had their cleanest month in the rainy season, July–September. Because there was no labeled data, the number of Isolation Forest flags depends heavily on its contamination parameter, so Z-score was used as a reference point, not as ground truth.",
        vi: "Ba phát hiện đã thay đổi cách thiết kế cảnh báo. Thứ nhất, bất thường về thống kê không đồng nghĩa với nguy hiểm: Hà Nội ô nhiễm gần một nửa thời gian nên dữ liệu phân tán rất rộng, chỉ AQI trên khoảng 231 mới bị coi là bất thường — vì vậy cần thêm ngưỡng tuyệt đối (ví dụ AQI > 150) bên cạnh phát hiện bất thường. Thứ hai, Z-score hai phía còn gắn cờ cả những lúc không khí sạch bất thường: 186/189 cờ AQI tại Nha Trang là các giờ có AQI thấp, nên cảnh báo ô nhiễm chỉ nên dùng ngưỡng một phía z > 3. Thứ ba, thời điểm ô nhiễm có thể dự đoán: cả 8 thành phố đạt đỉnh lúc 7–9 giờ sáng và đều có tháng sạch nhất trong mùa mưa (tháng 7–9). Do không có dữ liệu gán nhãn, số điểm bất thường của Isolation Forest phụ thuộc nhiều vào tham số contamination; vì thế Z-score được dùng làm mốc tham chiếu, không phải đáp án chuẩn (ground truth).",
      },
      learnings: {
        en: "An anomaly detection model answers “Is this unusual?”, not “Is this dangerous?”. A good alert needs to answer both.",
        vi: "Mô hình phát hiện bất thường trả lời câu hỏi “Có bất thường không?”, chứ không trả lời “Có nguy hiểm không?”. Một cảnh báo tốt cần trả lời được cả hai.",
      },
      source: "https://github.com/heydaisyilu/Automatic-Anomaly-Detection-System",
    },
    {
      slug: "uth-timeseries-forecasting",
      role: "da",
      university: true,
      title: { en: "Time series forecasting: the right model for each type of data", vi: "Dự báo chuỗi thời gian: chọn đúng mô hình cho từng loại dữ liệu" },
      summary: {
        en: "From ARIMA to LSTM on five real datasets, plus an audit that found four evaluation errors — including a “perfect” RMSE of 0 caused by data leakage.",
        vi: "Từ ARIMA đến LSTM trên năm bộ dữ liệu thực tế, kèm một lần rà soát phát hiện bốn lỗi đánh giá — trong đó có RMSE “hoàn hảo” bằng 0 do rò rỉ dữ liệu (data leakage).",
      },
      cover: "/images/projects/uth-timeseries-results.webp",
      facts: [
        {
          en: "For each type of time series, which model fits best, and can the test scores be trusted?",
          vi: "Với từng loại chuỗi thời gian, mô hình nào phù hợp nhất, và điểm số trên tập kiểm tra có đáng tin không?",
        },
        {
          en: "Five public datasets: monthly retail sales and air passengers, daily temperature, hourly electricity load (~143,000 hours) and load with weather data (8,779 hours).",
          vi: "Năm bộ dữ liệu công khai: doanh số bán lẻ và lượng hành khách hàng không theo tháng, nhiệt độ theo ngày, phụ tải điện theo giờ (~143.000 giờ) và phụ tải điện kèm dữ liệu thời tiết (8.779 giờ).",
        },
        {
          en: "No model wins everywhere: SARIMA cut error by 58–67% on seasonal monthly data, Linear Regression beat XGBoost on hourly lag features, and LSTM's 30,113 parameters gave only a ~2% gain over VAR.",
          vi: "Không mô hình nào thắng ở mọi bài toán: SARIMA giảm 58–67% sai số trên dữ liệu tháng có tính mùa vụ, Linear Regression vượt XGBoost trên đặc trưng lag theo giờ, còn LSTM với 30.113 tham số chỉ tốt hơn VAR khoảng 2%.",
        },
        {
          en: "Re-running every notebook revealed four method errors, and fixing the data leakage reversed the result of one comparison.",
          vi: "Chạy lại toàn bộ notebook phát hiện bốn lỗi phương pháp; sửa lỗi rò rỉ dữ liệu đã đảo ngược kết quả của một phép so sánh.",
        },
      ],
      stack: ["Python", "pandas", "statsmodels", "scikit-learn", "XGBoost", "TensorFlow / Keras"],
      methods: ["Box–Jenkins", "Feature engineering", "Walk-forward validation"],
      period: { en: "2026 · UTH coursework, Time Series Analysis and Forecasting (audited 10/2026)", vi: "2026 · Đồ án học phần Phân tích chuỗi thời gian và dự báo tại UTH (rà soát lại 10/2026)" },
      myRole: { en: "Modeling, evaluation and audit", vi: "Mô hình hóa, đánh giá và rà soát" },
      team: { en: "Team project", vi: "Dự án nhóm" },
      contributions: [
        { en: "Explored five datasets with STL decomposition and ACF/PACF.", vi: "Khám phá năm bộ dữ liệu bằng phân rã STL và ACF/PACF." },
        { en: "Built and tuned 7 models, from ARIMA to LSTM.", vi: "Xây dựng và tinh chỉnh 7 mô hình, từ ARIMA đến LSTM." },
        { en: "Set up one fair evaluation: same split, same scaler, walk-forward test.", vi: "Thiết lập một quy trình đánh giá công bằng: cùng cách chia, cùng scaler, đánh giá walk-forward." },
        { en: "Audited the results and fixed 4 evaluation errors, including data leakage.", vi: "Rà soát kết quả và sửa 4 lỗi đánh giá, trong đó có rò rỉ dữ liệu." },
      ],
      metrics: [
        { value: "7", label: { en: "models compared on 5 datasets", vi: "mô hình được so sánh trên 5 bộ dữ liệu" } },
        { value: "1.84%", label: { en: "MAPE for hourly electricity load forecasting with XGBoost", vi: "MAPE khi dự báo phụ tải điện theo giờ bằng XGBoost" } },
        { value: "4", label: { en: "evaluation errors found and fixed when I re-ran the notebooks", vi: "lỗi đánh giá được phát hiện và sửa khi tôi chạy lại notebook" } },
      ],
      context: {
        en: "Most forecasting exercises run one model and report one number. This course project asked a harder question: for each type of data, which model fits, and why? Every answer was checked on held-out test data in time order, not judged by eye from a chart.",
        vi: "Phần lớn bài tập dự báo chỉ chạy một mô hình và báo cáo một con số. Đồ án này đặt câu hỏi khó hơn: với từng loại dữ liệu, mô hình nào phù hợp và vì sao? Mọi câu trả lời đều được kiểm chứng trên tập kiểm tra tách riêng, theo đúng thứ tự thời gian, thay vì nhìn biểu đồ rồi đánh giá cảm tính.",
      },
      process: [
        {
          title: { en: "Understand the data first", vi: "Hiểu dữ liệu trước khi mô hình hóa" },
          body: {
            en: "STL decomposition, ACF/PACF compared with a white-noise baseline, and handling of missing values and outliers, to find trend and seasonality before choosing a model.",
            vi: "Phân rã STL, so sánh ACF/PACF với chuỗi nhiễu trắng, xử lý giá trị thiếu và ngoại lai để nhận diện xu hướng, tính mùa vụ trước khi chọn mô hình.",
          },
        },
        {
          title: { en: "Box–Jenkins, not just p-values", vi: "Áp dụng Box–Jenkins, không chỉ nhìn p-value" },
          body: {
            en: "Second-order differencing passed the ADF test (p ≈ 3.5e-18), but it distorted the ACF/PACF — a typical sign of over-differencing. So I chose d = 1 with seasonal D = 1 instead.",
            vi: "Sai phân bậc 2 vượt qua kiểm định ADF (p ≈ 3.5e-18) nhưng làm ACF/PACF biến dạng — dấu hiệu điển hình của sai phân quá mức (over-differencing). Vì vậy, tôi chọn d = 1 kết hợp sai phân mùa vụ D = 1.",
          },
        },
        {
          title: { en: "Turn forecasting into regression", vi: "Chuyển bài toán dự báo thành hồi quy" },
          body: {
            en: "Created lag and rolling features for about 143,000 hours of electricity load and tuned the models with TimeSeriesSplit. The previous hour made up 95% of the feature importance, and the error almost tripled as the horizon grew from 1 to 3 hours.",
            vi: "Tạo đặc trưng lag và rolling cho khoảng 143.000 giờ dữ liệu phụ tải điện, tinh chỉnh mô hình bằng TimeSeriesSplit. Giờ liền trước chiếm 95% mức độ quan trọng của đặc trưng, và sai số tăng gần gấp ba khi tầm dự báo tăng từ 1 lên 3 giờ.",
          },
        },
        {
          title: { en: "Use one process for every model", vi: "Một quy trình chung cho mọi mô hình" },
          body: {
            en: "VAR, XGBoost (99 features) and a stacked LSTM use the same 70/15/15 split, a scaler fitted on the training data only, and a 1,317-step walk-forward test, so the comparison is fair.",
            vi: "VAR, XGBoost (99 đặc trưng) và LSTM nhiều lớp dùng chung cách chia 70/15/15, scaler chỉ fit trên tập huấn luyện và đánh giá walk-forward 1.317 bước — đảm bảo phép so sánh công bằng.",
          },
        },
        {
          title: { en: "Audit the results", vi: "Rà soát kết quả" },
          body: {
            en: "Found four errors: a rolling feature that included the target value (RMSE = 0), LSTM inverse scaling applied to the year column instead of the load column, VAR differencing inverted from the wrong starting value, and models compared on different test sets. All four were fixed and re-run.",
            vi: "Phát hiện bốn lỗi: đặc trưng rolling chứa chính giá trị mục tiêu (RMSE = 0), LSTM đảo ngược chuẩn hóa (inverse scaling) nhầm vào cột năm thay vì cột phụ tải, VAR khôi phục sai phân từ sai giá trị gốc, và các mô hình được so sánh trên những tập kiểm tra khác nhau. Cả bốn lỗi đã được sửa và chạy lại.",
          },
        },
      ],
      gallery: [
        {
          src: "/images/projects/uth-timeseries-results.webp",
          caption: { en: "Test RMSE across four problems, with a different best model (blue) each time.", vi: "RMSE trên tập kiểm tra của bốn bài toán — mỗi bài có một mô hình tốt nhất (màu xanh) khác nhau." },
        },
        {
          src: "/images/projects/uth-timeseries-arima.webp",
          caption: { en: "ARIMA(1,1,1) only follows the trend.", vi: "ARIMA(1,1,1) chỉ bám theo xu hướng." },
        },
        {
          src: "/images/projects/uth-timeseries-sarima.webp",
          caption: { en: "SARIMA(1,1,1)(1,1,1,12) also captures the 12-month seasonal pattern.", vi: "SARIMA(1,1,1)(1,1,1,12) nắm bắt thêm tính mùa vụ 12 tháng." },
        },
        {
          src: "/images/projects/uth-timeseries-horizon.webp",
          caption: { en: "Error almost triples as the forecast horizon grows from 1 to 3 hours.", vi: "Sai số tăng gần gấp ba khi tầm dự báo tăng từ 1 lên 3 giờ." },
        },
        {
          src: "/images/projects/uth-timeseries-lstm.webp",
          caption: { en: "LSTM: actual vs. forecast over 1,317 walk-forward hours.", vi: "LSTM: giá trị thực tế và dự báo trên 1.317 giờ đánh giá walk-forward." },
        },
      ],
      outcome: {
        en: "The data, not the model's reputation, should decide which model to use. SARIMA did best on monthly seasonal data (RMSE 4.62 → 1.95 for retail, 97.50 → 31.79 for passengers) because it models the 12-month cycle. On hourly electricity load, a simple Linear Regression (118 MW) beat a tuned XGBoost (137 MW), because the features were only recent past values. With weather data added, LSTM had the lowest error at 7.30 MW, but it was only about 2% better than VAR — a small gain for 30,113 parameters when the model has to be explained. The audit was the most important step: fixing the leakage reversed the result between Linear Regression and XGBoost, so the first version would have reported the wrong winner.",
        vi: "Dữ liệu, chứ không phải độ nổi tiếng của mô hình, mới quyết định nên dùng mô hình nào. SARIMA tốt nhất trên dữ liệu tháng có tính mùa vụ (RMSE giảm từ 4,62 xuống 1,95 với doanh số bán lẻ, từ 97,50 xuống 31,79 với lượng hành khách) vì mô hình hóa được chu kỳ 12 tháng. Với phụ tải điện theo giờ, Linear Regression đơn giản (118 MW) vượt XGBoost đã tinh chỉnh (137 MW), vì đặc trưng chỉ gồm các giá trị gần nhất trong quá khứ. Khi thêm dữ liệu thời tiết, LSTM có sai số thấp nhất (7,30 MW) nhưng chỉ hơn VAR khoảng 2% — mức cải thiện nhỏ so với 30.113 tham số khi mô hình cần được giải thích. Rà soát là bước quan trọng nhất: sửa lỗi rò rỉ dữ liệu đã đảo ngược kết quả giữa Linear Regression và XGBoost, nghĩa là phiên bản đầu tiên đã chọn sai mô hình tốt nhất.",
      },
      learnings: {
        en: "A result that looks too good to be true usually means a bug. RMSE = 0 did not mean an excellent model; it meant the answer had leaked into the features.",
        vi: "Kết quả đẹp bất thường thường là dấu hiệu có lỗi. RMSE = 0 không phải mô hình xuất sắc, mà là đáp án đã bị rò rỉ vào tập đặc trưng.",
      },
      source: "https://github.com/HoangPhucTony/Mis_TimeSeries_Lesson",
    },
    {
      slug: "uth-badminton-odoo",
      role: "ba",
      university: true,
      title: { en: "Badminton club management, from court booking to POS", vi: "Quản lý sân cầu lông: từ đặt sân đến thanh toán POS" },
      summary: {
        en: "Studied how a badminton court business runs, turned its rules into requirements, then designed and built a three-module ERP on Odoo 19 on my own.",
        vi: "Khảo sát cách một doanh nghiệp sân cầu lông vận hành, chuyển quy tắc kinh doanh thành yêu cầu nghiệp vụ, rồi tự thiết kế và phát triển hệ thống ERP ba module trên Odoo 19.",
      },
      facts: [
        {
          en: "A court business sells time slots that must never overlap. Prices depend on court type, peak hours and student status, and court fees are paid at the counter together with drinks, shuttlecocks and racket rental.",
          vi: "Sân cầu lông bán các khung giờ không được trùng nhau; giá thay đổi theo loại sân, giờ cao điểm và đối tượng học sinh – sinh viên; tiền sân được thanh toán tại quầy cùng nước uống, cầu và thuê vợt.",
        },
        {
          en: "Players, counter (POS) staff and the club manager, each with their own module and access rights.",
          vi: "Người chơi, nhân viên quầy (POS) và quản lý sân; mỗi vai trò có module và quyền truy cập riêng.",
        },
        {
          en: "Business survey, booking lifecycle and rules, a fit-gap analysis against standard Odoo, three custom modules, plus PayPal payment and a data export for Power BI.",
          vi: "Khảo sát nghiệp vụ, vòng đời đặt sân và quy tắc nghiệp vụ, phân tích fit-gap với Odoo tiêu chuẩn, ba module tự phát triển, cùng thanh toán PayPal và xuất dữ liệu cho Power BI.",
        },
        {
          en: "Double booking is blocked at the database level, and several courts and hours can be combined into one booking order, paid with a single POS order.",
          vi: "Đặt trùng sân bị chặn ngay ở tầng cơ sở dữ liệu; nhiều sân, nhiều khung giờ được gộp vào một phiếu đặt và thanh toán bằng một đơn POS duy nhất.",
        },
      ],
      stack: ["Odoo 19", "Python", "OWL", "PostgreSQL", "PayPal"],
      methods: ["Business survey", "Requirements", "Booking lifecycle", "Fit-gap analysis"],
      period: { en: "06–07/2026 · UTH coursework", vi: "06–07/2026 · Đồ án môn học tại UTH" },
      myRole: { en: "Business Analyst & developer", vi: "Business Analyst kiêm lập trình viên" },
      team: { en: "Individual project", vi: "Dự án cá nhân" },
      contributions: [
        { en: "Surveyed how a court business handles bookings, pricing and counter sales.", vi: "Khảo sát cách doanh nghiệp xử lý đặt sân, bảng giá và bán hàng tại quầy." },
        { en: "Defined 3 user roles and a 6-state booking lifecycle.", vi: "Xác định 3 vai trò người dùng và vòng đời đặt sân 6 trạng thái." },
        { en: "Turned pricing and booking rules into clear requirements.", vi: "Chuyển quy tắc giá và đặt sân thành yêu cầu nghiệp vụ rõ ràng." },
        { en: "Ran a fit-gap analysis and reused standard POS, Inventory and Contacts.", vi: "Phân tích fit-gap, tận dụng POS, Inventory và Contacts có sẵn." },
        { en: "Built 3 custom modules plus PayPal payment, about 23,000 lines of code.", vi: "Phát triển 3 module cùng thanh toán PayPal, khoảng 23.000 dòng mã." },
      ],
      metrics: [
        { value: "6", label: { en: "booking states, from new request to paid", vi: "trạng thái đặt sân, từ yêu cầu mới đến đã thanh toán" } },
        { value: "3 + 1", label: { en: "custom modules, plus a PayPal payment add-on", vi: "module tự phát triển, cùng module thanh toán PayPal" } },
        { value: "~23,000", label: { en: "lines of Python, JavaScript and XML, all written by me", vi: "dòng mã Python, JavaScript và XML do tôi tự viết" } },
      ],
      context: {
        en: "A badminton club runs on its schedule: each court-hour can be sold only once, prices change by court and time of day, and most visits end at the counter with drinks or shuttlecocks on the same bill. I studied how a court business handles bookings, walk-in customers, pricing and counter sales, then built the whole system on Odoo 19. Odoo's Appointments and Website Booking apps are not designed for selling by court and time slot, so the system uses its own booking models and a visual schedule grid.",
        vi: "Sân cầu lông vận hành xoay quanh lịch đặt: mỗi giờ sân chỉ bán được một lần, giá thay đổi theo loại sân và khung giờ, và phần lớn lượt chơi kết thúc tại quầy với nước uống, cầu trên cùng một hóa đơn. Tôi khảo sát cách một doanh nghiệp sân cầu lông xử lý đặt sân, khách vãng lai, bảng giá và bán hàng tại quầy, rồi xây dựng toàn bộ hệ thống trên Odoo 19. Ứng dụng Appointments và Website Booking của Odoo không được thiết kế để bán theo sân và khung giờ, nên hệ thống dùng model đặt sân riêng và lưới lịch trực quan.",
      },
      process: [
        {
          title: { en: "Survey the business", vi: "Khảo sát doanh nghiệp" },
          body: {
            en: "Traced how a booking really happens: made in advance or on arrival, who confirms it, how no-shows are handled, how peak and student prices apply, and what else is sold at the counter.",
            vi: "Tìm hiểu quy trình đặt sân thực tế: đặt trước hay đến trực tiếp, ai xác nhận, xử lý thế nào khi khách không đến, áp dụng giá giờ cao điểm và giá học sinh – sinh viên ra sao, và quầy còn bán những gì.",
          },
        },
        {
          title: { en: "Define roles and the booking lifecycle", vi: "Xác định vai trò và vòng đời đặt sân" },
          body: {
            en: "New request → confirmed → checked in, no-show or canceled → paid; walk-in customers start directly at checked in. Each role can only access its own scope, so players cannot see POS, revenue or price rules.",
            vi: "Yêu cầu mới → đã xác nhận → đã check-in, không đến hoặc đã hủy → đã thanh toán; khách vãng lai vào thẳng bước check-in. Mỗi vai trò chỉ truy cập phần dữ liệu của mình: người chơi không xem được POS, doanh thu hay bảng giá.",
          },
        },
        {
          title: { en: "Turn rules into requirements", vi: "Chuyển quy tắc thành yêu cầu nghiệp vụ" },
          body: {
            en: "One court, one time, one customer; bookings only during opening hours; prices by court type (standard / VIP) and peak hours; a configurable student discount (10% by default); and back-to-back slots on the same court merged into one booking.",
            vi: "Một sân, một khung giờ, một khách hàng; chỉ cho đặt trong giờ hoạt động; giá theo loại sân (thường / VIP) và giờ cao điểm; giảm giá học sinh – sinh viên có thể cấu hình (mặc định 10%); các khung giờ liên tiếp trên cùng một sân được gộp thành một lượt đặt.",
          },
        },
        {
          title: { en: "Fit-gap analysis against standard Odoo", vi: "Phân tích fit-gap với Odoo tiêu chuẩn" },
          body: {
            en: "Reused POS, Inventory and Contacts for counter sales and stock, and built only what was missing: courts, price rules, bookings, booking orders and a schedule grid.",
            vi: "Tận dụng POS, Inventory và Contacts cho bán hàng tại quầy và tồn kho; chỉ tự phát triển phần còn thiếu: sân, bảng giá, lượt đặt, phiếu đặt sân và lưới lịch.",
          },
        },
        {
          title: { en: "Build the system", vi: "Phát triển hệ thống" },
          body: {
            en: "A core manager module with an OWL schedule grid (30/60/90/120-minute slots), a staff module for check-in and walk-ins, and a player module with a multi-court cart. The system checks for overlaps and locks the related database rows, so if two people pick the same slot at the same moment, only one booking succeeds. I also added staff accounts per branch, PayPal payment and a CSV export package for Power BI.",
            vi: "Module quản lý lõi với lưới lịch OWL (khung 30/60/90/120 phút), module nhân viên cho check-in và khách vãng lai, và module người chơi với giỏ chọn nhiều sân. Hệ thống kiểm tra trùng lịch và khóa các dòng dữ liệu liên quan (row lock), nên khi hai người cùng chọn một khung giờ cùng lúc, chỉ một lượt đặt thành công. Tôi cũng bổ sung tài khoản nhân viên theo chi nhánh, thanh toán PayPal và gói xuất CSV cho Power BI.",
          },
        },
      ],
      gallery: [],
      outcome: {
        en: "The core rule, “one court, one time, one customer”, still holds when two bookings arrive at the same moment, because a database row lock enforces it, not just a form check. Players can pick several courts and hours in one cart. This becomes one booking order paid with one POS order, so staff no longer need to split a group's bill by court. The manager can see who is on court, which bookings are unpaid and when the peak hours are, and can export bookings, payments and POS lines to Power BI. One known limitation remains: the student discount is shown on the booking, but staff still have to apply it by hand in POS.",
        vi: "Quy tắc cốt lõi “một sân, một khung giờ, một khách hàng” vẫn đúng ngay cả khi hai lượt đặt đến cùng lúc, vì được đảm bảo bằng khóa dòng ở tầng cơ sở dữ liệu chứ không chỉ kiểm tra trên biểu mẫu. Người chơi chọn được nhiều sân, nhiều khung giờ trong một giỏ; tất cả gộp thành một phiếu đặt và thanh toán bằng một đơn POS, nhân viên không còn phải tách hóa đơn của nhóm theo từng sân. Quản lý theo dõi được ai đang chơi, lượt đặt nào chưa thanh toán và giờ nào cao điểm, đồng thời xuất được dữ liệu đặt sân, thanh toán và chi tiết đơn POS sang Power BI. Hạn chế còn lại: giảm giá học sinh – sinh viên đã hiển thị trên phiếu đặt nhưng nhân viên vẫn phải áp dụng thủ công trong POS.",
      },
      learnings: {
        en: "A booking rule is only reliable if it still holds when two people click at the same moment. Requirements should cover concurrency (race conditions), not just the input form.",
        vi: "Một quy tắc đặt sân chỉ đáng tin khi vẫn đúng lúc hai người bấm cùng một thời điểm. Yêu cầu nghiệp vụ cần tính đến tình huống truy cập đồng thời (race condition), không chỉ dừng ở biểu mẫu nhập liệu.",
      },
      source: "https://github.com/HoangPhucTony/Mis_Badminton_OdooProject",
    },
  ] as Project[],

  contact: {
    headline: { en: "Hiring a DA or BA intern or fresher? Let's talk.", vi: "Bạn đang tuyển Thực tập sinh / Fresher DA, BA? Hãy kết nối với tôi." } as L,
    note: {
      en: "Email is the fastest way to reach me. I am happy to walk you through any dashboard or requirements document in detail.",
      vi: "Email là cách nhanh nhất để liên hệ với tôi. Tôi sẵn lòng trình bày chi tiết bất kỳ dashboard hay tài liệu yêu cầu nào.",
    } as L,
    backdrop: "/images/backdrop-landmark.webp",
  },
};

export const projectsByRole = (role: Role) => profile.projects.filter((p) => p.role === role);
export const projectBySlug = (slug: string) => profile.projects.find((p) => p.slug === slug);
