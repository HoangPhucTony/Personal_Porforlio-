# Do Hoang Phuc — Data & Business Analyst Portfolio

React + Vite + TypeScript + Tailwind CSS + Framer Motion + React Router + Lenis (smooth scroll).

## Chạy
```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Sửa nội dung (song ngữ EN / VI)
- `src/data/profile.ts`: thông tin cá nhân, pipeline, kinh nghiệm, **dự án**. Mỗi chuỗi có dạng `{ en: "...", vi: "..." }`.
- `src/data/ui.ts`: nhãn giao diện (menu, nút…).
- Ảnh đại diện: đặt `public/images/avatar.webp`, điền `photo: "/images/avatar.webp"`.
- CV: đặt `public/cv/CV_DoHoangPhuc_DA.pdf` và `public/cv/CV_DoHoangPhuc_BA.pdf`.

### Thêm dự án
Thêm một object vào `profile.projects` với `slug` (dùng làm URL `/projects/<slug>`), `role: "da" | "ba"`, `facts` (4 dòng), `process`, `gallery`…
Ảnh demo đặt trong `public/images/projects/` (nên dùng WebP). Hiện có 3 case study từ SIG (2 DA, 1 BA); tab nào chưa có dự án sẽ tự hiện dòng "đang cập nhật". Không đưa số tiền doanh thu thật của SIG lên web.

## Link gửi nhà tuyển dụng
- DA: `https://<domain>/?role=da&lang=en#projects`
- BA: `https://<domain>/?role=ba&lang=vi#projects`
- Một dự án: `https://<domain>/projects/sales-dashboard`

## Ghi công
- Datasaurus Dozen — Matejka & Fitzmaurice (2017), dữ liệu từ gói R `datasauRus` (MIT).
- Ảnh (Unsplash License): CreateTravel.tv (intro, `dtu842bEZuw`), Duc Nguyen (skyline, `JWsTkxzrh48`), Tron Le (Landmark 81, `eilpDNi_pV4`).

## Deploy
Đẩy lên GitHub → import vào Vercel (framework: Vite). `vercel.json` đã cấu hình để các URL `/projects/...` hoạt động.
