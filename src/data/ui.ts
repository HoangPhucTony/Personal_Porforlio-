// Interface labels in both languages. Personal content lives in profile.ts.
import type { L } from "../i18n";
import type { Role } from "./profile";

export const ui = {
  nav: {
    about: { en: "About", vi: "Giới thiệu" },
    toolkit: { en: "Toolkit", vi: "Kỹ năng" },
    experience: { en: "Experience", vi: "Kinh nghiệm" },
    projects: { en: "Projects", vi: "Dự án" },
    contact: { en: "Contact", vi: "Liên hệ" },
  } satisfies Record<string, L>,

  clickAnywhere: { en: "Click anywhere to enter", vi: "Nhấn vào bất kỳ đâu để vào" },
  enterShort: { en: "Enter", vi: "Vào" },
  scrollHint: { en: "or scroll to explore", vi: "hoặc cuộn để khám phá" },
  seeProjects: { en: "See projects", vi: "Xem dự án" },
  emailMe: { en: "Email me", vi: "Gửi email" },
  copyEmail: { en: "Copy email", vi: "Sao chép email" },
  copied: { en: "Copied", vi: "Đã sao chép" },
  downloadCv: { en: "Download {role} CV", vi: "Tải CV {role}" },
  cvFor: { en: "CV · {role}", vi: "CV · {role}" },
  language: { en: "Language", vi: "Ngôn ngữ" },
  menuOpen: { en: "Open menu", vi: "Mở menu" },
  menuClose: { en: "Close menu", vi: "Đóng menu" },

  about: { en: "About", vi: "Giới thiệu" },
  education: { en: "Education", vi: "Học vấn" },
  location: { en: "Location", vi: "Nơi ở" },
  currently: { en: "Currently", vi: "Hiện tại" },
  now: { en: "Now", vi: "Hiện tại" },
  certificate: { en: "Certificate", vi: "Chứng chỉ" },
  experienceCard: { en: "Experience", vi: "Kinh nghiệm" },
  careerPath: { en: "Career path", vi: "Lộ trình" },

  toolkitTitle: { en: "From question to decision", vi: "Từ câu hỏi đến quyết định" },
  toolkitFig: { en: "Fig. 1 · How I work", vi: "Hình 1 · Cách tôi làm việc" },
  toolkitNote: {
    en: "BA work frames the question and turns findings into something buildable. DA work finds the evidence in between.",
    vi: "BA đặt đúng câu hỏi và biến phát hiện thành thứ có thể xây dựng. DA tìm bằng chứng ở giữa.",
  },
  stage: { en: "Stage", vi: "Bước" },
  usedIn: { en: "Used in", vi: "Dùng trong" },

  experienceTitle: { en: "Experience & education", vi: "Kinh nghiệm & học vấn" },
  experienceFig: { en: "Fig. 1 · Timeline", vi: "Hình 1 · Dòng thời gian" },

  projectsTitle: { en: "Selected projects", vi: "Dự án tiêu biểu" },
  projectsCount: { en: "{n} projects", vi: "{n} dự án" },
  projectsSoon: { en: "Case studies are on the way — check back soon.", vi: "Các dự án đang được cập nhật — quay lại sau nhé." },
  featured: { en: "Featured", vi: "Nổi bật" },
  viewCase: { en: "View case study", vi: "Xem chi tiết" },
  viewDetails: { en: "View details", vi: "Xem chi tiết" },
  whatIDid: { en: "What I did", vi: "Công việc đã làm" },
  relatedCases: { en: "Case studies", vi: "Dự án liên quan" },

  caseStudy: { en: "Case study", vi: "Chi tiết dự án" },
  allProjects: { en: "All projects", vi: "Tất cả dự án" },
  myRole: { en: "My role", vi: "Vai trò" },
  timeline: { en: "Timeline", vi: "Thời gian" },
  tools: { en: "Tools", vi: "Công cụ" },
  context: { en: "Context", vi: "Bối cảnh" },
  process: { en: "Process", vi: "Quy trình" },
  gallery: { en: "Gallery", vi: "Hình ảnh" },
  outcome: { en: "Outcome", vi: "Kết quả" },
  learnings: { en: "What I learned", vi: "Bài học rút ra" },
  nextProject: { en: "Next project", vi: "Dự án tiếp theo" },
  source: { en: "Source", vi: "Mã nguồn" },
  demo: { da: { en: "Live dashboard", vi: "Xem dashboard" }, ba: { en: "Documents", vi: "Xem tài liệu" } } as Record<Role, L>,
  close: { en: "Close", vi: "Đóng" },
  notFound: { en: "This project doesn't exist.", vi: "Không tìm thấy dự án này." },

  roleLabel: { da: { en: "Data Analyst", vi: "Data Analyst" }, ba: { en: "Business Analyst", vi: "Business Analyst" } } as Record<Role, L>,
  roleHint: {
    da: { en: "Dashboards · SQL · Python", vi: "Dashboard · SQL · Python" },
    ba: { en: "Requirements · BPMN · UX", vi: "Yêu cầu · BPMN · UX" },
  } as Record<Role, L>,

  /** Labels for project.facts, in order. */
  factLabels: {
    da: [
      { en: "Question", vi: "Câu hỏi" },
      { en: "Data", vi: "Dữ liệu" },
      { en: "Insight", vi: "Phát hiện" },
      { en: "Impact", vi: "Tác động" },
    ],
    ba: [
      { en: "Problem", vi: "Vấn đề" },
      { en: "Stakeholders", vi: "Các bên liên quan" },
      { en: "Deliverables", vi: "Sản phẩm" },
      { en: "Outcome", vi: "Kết quả" },
    ],
  } as Record<Role, L[]>,

  intro: {
    sameStats: { en: "Same stats. Different shape.", vi: "Cùng thống kê. Khác hình dạng." },
    credit: { en: "Datasaurus Dozen · Matejka & Fitzmaurice, 2017", vi: "Datasaurus Dozen · Matejka & Fitzmaurice, 2017" },
    shapes: {
      dino: { en: "Dino", vi: "Khủng long" },
      star: { en: "Star", vi: "Ngôi sao" },
      bullseye: { en: "Bullseye", vi: "Hồng tâm" },
      x_shape: { en: "X", vi: "Chữ X" },
      h_lines: { en: "Lines", vi: "Đường ngang" },
      circle: { en: "Circle", vi: "Vòng tròn" },
    } as Record<string, L>,
    pickShape: { en: "Pick a shape", vi: "Chọn hình" },
  },

  footerBuilt: { en: "Built with React, Vite & Tailwind CSS", vi: "Xây dựng bằng React, Vite & Tailwind CSS" },
  photoCredits: { en: "Photos: Unsplash", vi: "Ảnh: Unsplash" },
};
