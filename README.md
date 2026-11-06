# Bộ Cấu Hình & Module Hợp Nhất Shadowrocket iOS: Locket Gold VIP & YouTube Premium - hungw.

Bộ cấu hình standalone (`shadowrocket_locket_youtube.conf`) và module tiện ích mở rộng (`shadowrocket_locket_youtube.sgmodule`) chuẩn hóa cho ứng dụng **Shadowrocket** trên iOS bởi **hungw.**, tích hợp trọn vẹn hai tính năng phổ biến nhất hiện nay: mở khóa bản quyền **Locket Gold VIP** vĩnh viễn (kèm **310+ Custom Captions** tổng hợp từ 10+ nguồn) và gói **YouTube Premium** không quảng cáo.

---

## 🌟 Tính Năng Nổi Bật

### 💛 1. Locket Gold VIP - hungw. Edition (Mở Khóa Toàn Diện)
- **Kích hoạt gói thuê bao Gold vĩnh viễn**: Bẻ khóa thông qua RevenueCat (`api.revenuecat.com` & `api.rc-backup.com`) với hạn dùng trọn đời đến năm 2099.
- **Mở khóa 360+ cấu hình Firebase Remote Config**:
  - Gỡ bỏ hoàn toàn giới hạn thời lượng quay video: kéo dài lên đến **60 giây** (so với mặc định 3s - 10s).
  - Tải ảnh chất lượng gốc siêu nét: kích thước tối đa **2560px - 4096px**, chất lượng 1.0 (Full HD+ / 2K).
  - Mở khóa toàn bộ bộ lọc máy ảnh (Looks, Costumes, Light & FX, Cute, Special), chủ đề máy ảnh (Camera Theme) và toàn bộ **Khung viền Widget cao cấp ngoài màn hình chính (Custom Widget Frames)**.
  - Tăng giới hạn số lượng bạn bè lên tới **999.999 bạn bè** (không giới hạn).
  - **Mega Pack 310+ Custom Captions (Chú thích tùy chỉnh) chia làm 11 danh mục**:
    1. `👑 Độc Quyền hungw.` (10 mẫu VIP mang thương hiệu `hungw.`)
    2. `🎨 Tính Năng Gốc Locket` (14 tính năng tương tác: Nhạc đang phát, Thời tiết, Vị trí, Giờ, Chuỗi, Cung hoàng đạo, Bình chọn Poll, Bảng màu, Đếm số Locket, Link, Trích dẫn Quote, Tin nóng Breaking News)
    3. `☑️ Chứng Nhận Của Locket` (18 mẫu huy hiệu tích xanh Apple SF Symbols `checkmark.seal.fill`, Vương miện `crown.fill`, Đang trực tiếp `circle.fill`, Quay 4K `record.circle.fill`)
    4. `💕 Tình Yêu & Cơm Chó` (32 mẫu thả thính & cặp đôi ngọt ngào)
    5. `💅 Gen Z Slay & Xéo Xắt` (42 mẫu slay, thần thái, visual đỉnh nóc)
    6. `🔥 Trend TikTok & Độc Lạ` (54 mẫu câu nói viral TikTok)
    7. `🤡 Meme & Hài Hước` (41 mẫu hài hước, hóng drama, check VAR)
    8. `🫠 Bất Ổn & Hết Cứu` (59 mẫu tâm trạng đêm khuya, overthinking)
    9. `☕ Daily, Chill & Đời Sống` (36 mẫu cà phê, trà sữa, Matcha, Mixue, đi biển, đi ngủ, pin 1%)
    10. `💸 Deadline & Tiền Bạc` (10 mẫu đi làm, học tập, độc lập tài chính)
    11. `🎄 Lễ Hội & Sự Kiện` (14 mẫu Tết Nguyên Đán, Valentine, 8/3, 2/9, Trung Thu, 20/10, Halloween, Giáng Sinh, Năm Mới - đã mở khóa giới hạn thời gian để dùng quanh năm 24/7).
  - Kích hoạt tính năng khôi phục chuỗi miễn phí (Free Streak Recovery) và chọn biểu tượng ứng dụng độc quyền (App Icon Picker).
- **Huy hiệu vàng trang cá nhân (Gold Badge)**: Duy trì huy hiệu xác minh màu vàng Gold VIP cố định và đồng bộ hóa trên mọi màn hình bạn bè, feed và hồ sơ cá nhân.
- **Xóa bộ nhớ đệm ETag**: Loại bỏ header `x-revenuecat-etag` ngăn chặn phản hồi `304 Not Modified`, đảm bảo tài khoản luôn nhận trạng thái Gold VIP mới nhất.

### 🔴 2. YouTube Premium (Trải Nghiệm Đỉnh Cao)
- **Chặn quảng cáo triệt để**:
  - Chặn đứng mọi video ad trước video (preroll), giữa video (midroll) và quảng cáo dạng đệm (bumper ads).
  - Loại bỏ hoàn toàn banner tài trợ trên trang chủ (Home), trang tìm kiếm (Search), luồng gợi ý video (Next) và thẻ mua sắm.
  - Tự động lọc bỏ các video quảng cáo xen kẽ trong luồng YouTube Shorts (`v1/reel/reel_watch_sequence`).
- **Phát trong nền (Background Playback)**: Thỏa sức nghe nhạc, podcast khi tắt màn hình khóa hoặc khi chuyển sang ứng dụng khác.
- **Hình trong hình (Picture-in-Picture - PiP)**: Thu nhỏ video thành một cửa sổ nổi tiện lợi trên màn hình chính khi bạn vuốt thoát ứng dụng.
- **Phụ đề song ngữ & dịch tự động Tiếng Việt**: Tự động chèn phụ đề tiếng Việt (`vi`) chất lượng cao cho các video nước ngoài.
- **Tối ưu hóa giao diện ứng dụng**: Ẩn nút Tạo/Đăng tải (+) và biểu tượng Immersive gây vướng víu ở thanh điều hướng dưới.
- **Cơ chế chống nghẽn mạng chuyên sâu**:
  - Tự động chặn giao thức QUIC (HTTP/3 qua UDP cổng 443) ở đầu danh sách Rule để ép YouTube chuyển sang HTTP/2 qua TCP, giúp công cụ MITM giải mã chính xác và không bỏ sót quảng cáo.
  - Loại trừ máy chủ phân phối luồng tải nặng `-redirector*.googlevideo.com` khỏi danh sách MITM nhằm tránh tình trạng đầy bộ nhớ VPN và ngăn ngừa lỗi văng ứng dụng (Jetsam crash) trên iOS.

---

## 📋 Danh Mục Tập Tin Trong Kho Lưu Trữ

| Tên tập tin | Định dạng | Mục đích sử dụng |
|---|---|---|
| `shadowrocket_locket_youtube.conf` | Configuration Profile | File cấu hình tổng thể độc lập (Standalone). Phù hợp cho người dùng muốn áp dụng trọn vẹn toàn bộ cấu hình mạng, DNS, quy tắc định tuyến cùng Locket Gold và YouTube. |
| `shadowrocket_locket_youtube.sgmodule` | Shadowrocket Module | Module mở rộng cắm và chạy. Phù hợp cho người dùng đang có sẵn cấu hình node proxy/VPN riêng (như 4G data, proxy cá nhân) và chỉ muốn bật thêm tính năng Locket & YouTube mà không làm thay đổi các thiết lập mạng hiện có. |
| `README.md` | Tài liệu Markdown | Hướng dẫn cài đặt, kích hoạt chứng chỉ CA Root, bật HTTPS Decryption và triển khai lên GitHub. |

---

## 🛠️ Hướng Dẫn Cài Đặt Chi Tiết Từng Bước Trên iOS

Để các tính năng giải mã và chỉnh sửa luồng dữ liệu (HTTPS Decryption / MITM) hoạt động được trên iPhone/iPad, bạn cần thực hiện tuần tự theo các bước chuẩn hóa dưới đây.

---

### Bước 1: Tạo & Cài Đặt Chứng Chỉ CA Root Vào Hệ Thống iOS

> ⚠️ **LƯU Ý QUAN TRỌNG**: Nếu bạn bỏ qua bước cài chứng chỉ và bật tin cậy, Shadowrocket sẽ không thể giải mã các yêu cầu bảo mật HTTPS từ Locket và YouTube, dẫn tới tính năng không có hiệu lực hoặc báo lỗi mất kết nối.

1. **Khởi tạo chứng chỉ CA trong Shadowrocket**:
   - Mở ứng dụng **Shadowrocket** trên iPhone/iPad.
   - Nhấn vào tab **Cài đặt (Settings)** (biểu tượng bánh răng ở góc dưới cùng bên phải).
   - Chọn mục **Chứng chỉ (Certificate)**.
   - Nhấn vào dòng **Tạo chứng chỉ CA mới (Generate a New CA)**.
   - Tiếp tục chọn **Cài đặt chứng chỉ vào hệ thống (Install CA to System)**.
   - Ứng dụng sẽ tự động mở trình duyệt Safari. Khi Safari hiển thị hộp thoại thông báo: *"Trang web này đang cố gắng tải về một hồ sơ cấu hình. Bạn có muốn cho phép không?"*, hãy chọn **Cho phép (Allow)**.
   - Khi có thông báo *Đã tải về hồ sơ (Profile Downloaded)*, chọn **Đóng (Close)**.

2. **Cài đặt hồ sơ cấu hình vào máy**:
   - Thoát ra màn hình chính, mở ứng dụng **Cài đặt (Settings)** mặc định của iOS.
   - Ngay phía dưới thông tin tài khoản Apple ID, bạn sẽ thấy dòng chữ **Đã tải về hồ sơ (Profile Downloaded)**. Nhấn vào mục này (hoặc vào *Cài đặt chung > Quản lý VPN & Thiết bị*).
   - Nhấn vào hồ sơ có tên **Shadowrocket...**
   - Nhấn nút **Cài đặt (Install)** ở góc trên bên phải màn hình.
   - Nhập mật khẩu mở khóa màn hình iPhone của bạn.
   - Tiếp tục nhấn **Cài đặt (Install)** ở bảng cảnh báo, sau đó nhấn xác nhận **Cài đặt (Install)** một lần nữa ở cuối màn hình.
   - Nhấn **Xong (Done)**.

---

### Bước 2: Bật Tin Cậy Hoàn Toàn Cho Chứng Thư Gốc (Root CA)

Hệ điều hành iOS yêu cầu người dùng phải xác nhận độ tin cậy thủ công đối với chứng chỉ tự tạo:

1. Trong ứng dụng **Cài đặt (Settings)** của iOS, chọn **Cài đặt chung (General)**.
2. Nhấn vào mục đầu tiên: **Giới thiệu (About)**.
3. Cuộn xuống dưới cùng của trang, chọn **Cài đặt tin cậy chứng nhận (Certificate Trust Settings)**.
4. Tại khu vực **"Bật tin cậy đầy đủ cho các chứng thư gốc" (ENABLE FULL TRUST FOR ROOT CERTIFICATES)**, bạn sẽ thấy tên chứng chỉ CA của Shadowrocket vừa cài đặt.
5. Gạt công tắc bên cạnh tên chứng chỉ sang trạng thái **BẬT (Màu xanh lục)**.
6. Khi hộp thoại cảnh báo của Apple xuất hiện với nội dung *"Việc bật chứng chỉ gốc sẽ cho phép bên thứ ba tin cậy bất kỳ chứng nhận nào do chứng thư gốc đó cấp..."*, hãy chọn **Tiếp tục (Continue)**.

---

### Bước 3: Kích Hoạt Tính Năng Giải Mã HTTPS (HTTPS Decryption) Trong Ứng Dụng

1. Mở lại ứng dụng **Shadowrocket**.
2. Chuyển sang tab **Cài đặt (Settings)** ở góc dưới bên phải.
3. Cuộn xuống tìm mục **Giải mã HTTPS (HTTPS Decryption)**.
4. Gạt công tắc **Giải mã HTTPS (HTTPS Decryption)** sang trạng thái **BẬT (Màu cam/xanh)**.
5. Đảm bảo mục **Tạo chứng chỉ CA (Generate CA)** hiển thị trạng thái đã cài đặt và có biểu tượng dấu tích xanh hợp lệ.

---

### Bước 4: Lựa Chọn Cài Đặt File Cấu Hình (.conf) Hoặc Module (.sgmodule)

Bạn chỉ cần chọn **MỘT TRONG HAI** phương pháp cài đặt phù hợp với nhu cầu của mình:

#### Lựa chọn A: Cài đặt qua File Cấu Hình (.conf) — Dành cho cấu hình độc lập

- **Cách 1: Tải trực tiếp qua liên kết Raw GitHub (Khuyên dùng)**:
  1. Trong Shadowrocket, nhấn vào tab **Cấu hình (Config)** ở thanh điều hướng dưới.
  2. Nhấn vào biểu tượng dấu cộng **(+)** ở góc trên cùng bên phải.
  3. Dán đường link Raw của file `.conf` vào khung **URL**:
     ```text
     https://raw.githubusercontent.com/<USERNAME>/<REPO_NAME>/main/shadowrocket_locket_youtube.conf
     ```
  4. Nhấn nút **Tải về (Download)**.
  5. Sau khi tải xong, bạn sẽ thấy file xuất hiện trong danh sách cấu hình. Hãy chạm vào tên file và chọn **Sử dụng cấu hình (Use Config)**. Tập tin có dấu chấm tròn màu cam/vàng bên cạnh chính là cấu hình đang hoạt động.

- **Cách 2: Nhập qua Tệp cục bộ (Local / iCloud Drive)**:
  1. Tải file `shadowrocket_locket_youtube.conf` về ứng dụng **Tệp (Files)** trên iPhone.
  2. Vào Shadowrocket > tab **Cấu hình (Config)** > chọn **Nhập từ Tệp (Import from Cloud / Files)**.
  3. Chọn file `.conf` vừa lưu. Nhấn vào file và chọn **Sử dụng cấu hình (Use Config)**.

---

#### Lựa chọn B: Cài đặt qua Module (.sgmodule) — Ghép vào cấu hình sẵn có

Nếu bạn đang dùng sẵn một gói cấu hình riêng (như proxy 4G, cấu hình chuyển vùng) và muốn giữ nguyên các node kết nối hiện tại:

1. Mở Shadowrocket, vào tab **Cấu hình (Config)**.
2. Cuộn màn hình xuống khu vực có tiêu đề **Modules**.
3. Nhấn vào biểu tượng dấu cộng **(+)** ở góc trên bên phải danh sách Modules.
4. Dán đường link Raw của file `.sgmodule` vào ô **URL**:
   ```text
   https://raw.githubusercontent.com/<USERNAME>/<REPO_NAME>/main/shadowrocket_locket_youtube.sgmodule
   ```
5. Nhấn **Tải về (Download)**.
6. Tìm module vừa tải trong danh sách Modules và gạt công tắc sang trạng thái **BẬT (Màu cam/xanh)**.

---

### Bước 5: Kích Hoạt Kết Nối VPN & Kiểm Tra Tính Năng

1. **Khởi động kết nối Shadowrocket**:
   - Về màn hình chính (tab **Home**) của Shadowrocket.
   - Gạt công tắc kết nối chính ở trên cùng sang **BẬT (Connected)**.
   - Nếu là lần đầu tiên sử dụng, iOS sẽ hỏi cấp quyền thêm cấu hình VPN. Hãy nhập Touch ID / Face ID / Mật mã màn hình để cho phép.

2. **Khởi động lại các ứng dụng Locket và YouTube (Bắt buộc)**:
   - Vuốt từ dưới đáy màn hình lên và dừng ở giữa để mở màn hình chuyển đổi ứng dụng đa nhiệm (App Switcher).
   - **Vuốt tắt hoàn toàn ứng dụng Locket và YouTube** để xóa bộ nhớ đệm cũ trong phiên làm việc trước.

3. **Kiểm tra tính năng Locket Gold VIP**:
   - Mở ứng dụng **Locket**.
   - Chuyển sang trang **Cá nhân (Profile)**: Bạn sẽ thấy **Huy hiệu vàng Locket Gold** xuất hiện rực rỡ bên cạnh tên người dùng.
   - Thử giữ nút quay phim: Giờ đây bạn có thể quay video liên tục lên đến **60 giây**.
   - Vào cài đặt tiện ích: Mở khóa toàn bộ các khung widget độc quyền và biểu tượng ứng dụng cao cấp.

4. **Kiểm tra tính năng YouTube Premium**:
   - Mở ứng dụng **YouTube**.
   - Chọn mở bất kỳ video nào thường có nhiều quảng cáo: Video sẽ phát ngay lập tức, hoàn toàn không có quảng cáo xuất hiện trước hay giữa video.
   - Đang xem video, vuốt màn hình để về màn hình chính (Home) của iPhone: Video sẽ tự động thu nhỏ về góc màn hình dưới dạng **Hình trong hình (PiP)**.
   - Khóa màn hình iPhone: Âm thanh của video vẫn tiếp tục phát liền mạch mà không bị ngắt.
   - Mở video tiếng nước ngoài (tiếng Anh, Hàn, Nhật,...): Phụ đề tiếng Việt (`vi`) sẽ tự động được dịch và hiển thị song song.

---

## 🚀 Hướng Dẫn Đẩy Lên GitHub & Lấy Link Raw Cho iPhone

Để lưu trữ các file cấu hình này lên kho lưu trữ GitHub cá nhân của bạn, giúp việc cập nhật và chia sẻ cho người thân hoặc thiết bị khác trở nên dễ dàng:

### 1. Chuẩn bị kho lưu trữ trên GitHub
1. Truy cập vào [GitHub.com](https://github.com) và đăng nhập vào tài khoản của bạn.
2. Nhấn nút **New repository** (Tạo kho lưu trữ mới).
3. Đặt tên kho lưu trữ (ví dụ: `Shadowrocket-VIP`), chọn chế độ **Public** (Công khai) để Shadowrocket trên điện thoại có thể truy cập tải file mà không cần mật khẩu.
4. Nhấn **Create repository**.

### 2. Thực hiện lệnh Git từ máy tính
Mở công cụ dòng lệnh (PowerShell hoặc Terminal) tại thư mục chứa dự án và nhập các lệnh sau:

```bash
# 1. Chuyển vào thư mục chứa các file cấu hình
cd "c:\Users\huong\Music\Edge"

# 2. Khởi tạo kho lưu trữ git cục bộ (nếu chưa khởi tạo)
git init

# 3. Thêm các file cấu hình, module và hướng dẫn vào staging
git add shadowrocket_locket_youtube.conf shadowrocket_locket_youtube.sgmodule README.md

# 4. Tạo commit lưu trữ phiên bản
git commit -m "feat: release unified Shadowrocket config and module for Locket Gold & YouTube Premium"

# 5. Đặt tên nhánh chính là main
git branch -M main

# 6. Liên kết với kho lưu trữ GitHub của bạn (thay thế USERNAME và REPO_NAME bằng thông tin thực tế của bạn)
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git

# 7. Đẩy toàn bộ dữ liệu lên GitHub
git push -u origin main
```

### 3. Cách lấy liên kết Raw để dán vào Shadowrocket trên iPhone
Sau khi mã đã được đẩy lên GitHub thành công:
1. Mở trang web GitHub của bạn trên máy tính hoặc Safari trên iPhone.
2. Nhấn vào tên file `shadowrocket_locket_youtube.conf` hoặc `shadowrocket_locket_youtube.sgmodule`.
3. Nhấn vào nút **Raw** ở góc trên bên phải khung xem code.
4. Trình duyệt sẽ mở một trang chỉ chứa văn bản thuần túy. Hãy sao chép toàn bộ thanh địa chỉ URL. Cấu trúc đường dẫn sẽ có dạng:
   - Đối với File Cấu hình:
     ```text
     https://raw.githubusercontent.com/<USERNAME>/<REPO_NAME>/main/shadowrocket_locket_youtube.conf
     ```
   - Đối với Module:
     ```text
     https://raw.githubusercontent.com/<USERNAME>/<REPO_NAME>/main/shadowrocket_locket_youtube.sgmodule
     ```
5. Dán liên kết này vào mục Cấu hình hoặc Module trong ứng dụng Shadowrocket trên iPhone như đã hướng dẫn ở Bước 4.

---

## 🔍 Khắc Phục Sự Cố & Câu Hỏi Thường Gặp (FAQ)

### Q1: Tại sao YouTube vẫn còn quảng cáo hoặc Locket chưa nhận huy hiệu vàng?
- **Nguyên nhân 1**: Bạn chưa bật công tắc **Giải mã HTTPS (HTTPS Decryption)** trong *Shadowrocket > Cài đặt*.
- **Nguyên nhân 2**: Bạn chưa gạt công tắc tin cậy chứng chỉ trong *Cài đặt của iPhone > Cài đặt chung > Giới thiệu > Cài đặt tin cậy chứng nhận*.
- **Nguyên nhân 3**: Chưa tắt hẳn ứng dụng (kill app). Hãy vuốt tắt ứng dụng Locket và YouTube trong bộ chuyển đổi đa nhiệm rồi mở lại.

### Q2: Tại sao cấu hình chặn UDP cổng 443 cho googlevideo.com và youtubei.googleapis.com?
- **Giải thích**: Ứng dụng YouTube sử dụng giao thức QUIC (HTTP/3 chạy trên nền UDP). Vì Shadowrocket chỉ có thể giải mã và can thiệp gói tin TLS qua giao thức TCP, việc chặn cổng UDP sẽ buộc ứng dụng YouTube tự động chuyển đổi dự phòng (fallback) sang giao thức TCP/TLS truyền thống trong vòng dưới 50ms, giúp toàn bộ quy tắc lọc quảng cáo và chèn mã hoạt động ổn định 100%.

### Q3: Tại sao danh sách MITM không sử dụng `*.googleapis.com`?
- **Giải thích**: Google dùng tên miền `googleapis.com` cho hầu hết các dịch vụ cốt lõi trên iOS như App Store, Google Search Safari, xác thực tài khoản Google SSO, Google Drive, Gmail và hàng ngàn ứng dụng bên thứ ba khác. Việc đưa ký tự đại diện `*.googleapis.com` vào giải mã MITM sẽ gây lỗi xác thực chứng chỉ (Certificate Pinning), làm tê liệt kết nối mạng diện rộng. Cấu hình này chỉ can thiệp chính xác vào đúng 2 máy chủ phụ bắt buộc là `firebaseremoteconfig.googleapis.com` (cho Locket) và `youtubei.googleapis.com` (cho YouTube), đảm bảo an toàn tuyệt đối cho hệ thống.

---

## 📜 Giấy Phép & Lời Cảm Ơn
- Cấu hình và tập lệnh Locket Gold được phát triển và tối ưu bởi **LAMDev** (`leanhminh2104/locketlam`).
- Mô-đun lọc Protobuf và dịch phụ đề song ngữ YouTube được xây dựng bởi tác giả **Maasea** (`Maasea/sgmodule`).
- Bộ cấu hình hợp nhất được tinh chỉnh và đóng gói hoàn thiện bởi cộng đồng người dùng Shadowrocket.
