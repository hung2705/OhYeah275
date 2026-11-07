# Bộ Cấu Hình & Module Hợp Nhất Shadowrocket iOS: Locket Gold VIP & YouTube Premium

<div align="center">

![Author](https://img.shields.io/badge/Author-hungw.-blue.svg?style=for-the-badge&logo=apple)
![Platform](https://img.shields.io/badge/Platform-iOS%2015%2B-lightgrey.svg?style=for-the-badge&logo=ios)
![Shadowrocket](https://img.shields.io/badge/Client-Shadowrocket-orange.svg?style=for-the-badge&logo=rocket)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active%20%26%20Verified-success.svg?style=for-the-badge)

**Giải pháp hợp nhất Standalone Config (`.conf`) và Module mở rộng (`.sgmodule`) chuẩn hóa cho Shadowrocket trên iPhone / iPad bởi tác giả hungw.**

[Tính Năng Nổi Bật](#-tính-năng-nổi-bật) • [Bộ Sưu Tập Caption Locket](#-bộ-sưu-tập-310-custom-captions-locket) • [Giải Mã UDP 443 QUIC](#-cơ-chế-chuyên-sâu-chặn-udp-cổng-443-quic--http3) • [Hướng Dẫn Cài Đặt CA](#-hướng-dẫn-cài-đặt-chứng-chỉ-ca--kích-hoạt-mitm-chuẩn-xác) • [Phát Trong Nền & PiP](#-hướng-dẫn-kích-hoạt-phát-trong-nền-background--hình-trong-hình-pip) • [Triển Khai GitHub](#-hướng-dẫn-triển-khai-lên-github--lấy-link-raw) • [FAQ](#-khắc-phục-sự-cố--câu-hỏi-thường-gặp-faq)

</div>

---

## 📖 Giới Thiệu Tổng Quan

Dự án cung cấp bộ thiết lập tối ưu toàn diện cho ứng dụng **Shadowrocket** trên iOS, tích hợp đồng thời hai tính năng giải trí và mạng xã hội được ưa chuộng nhất hiện nay:
1. **Locket Gold VIP (hungw. Edition)**: Bẻ khóa trọn đời bản quyền Locket Gold, mở khóa hơn 360 cờ Firebase Remote Config (quay video 60 giây, tải ảnh gốc Full HD+/2K, toàn bộ khung viền widget, bộ lọc camera) và tích hợp sẵn **hơn 310+ Custom Captions** độc quyền.
2. **YouTube Premium & Adblock (Chuẩn Upstream Maasea)**: Chặn đứng mọi loại quảng cáo (video ad, banner, Shorts), mở khóa chế độ Phát trong nền (Background Playback), Hình trong hình (Picture-in-Picture - PiP), tự động tạo phụ đề song ngữ Tiếng Việt (`vi`) và tinh gọn giao diện ứng dụng.

Toàn bộ gói cấu hình được đóng gói dưới hai hình thức tiện lợi:
- **Tập tin cấu hình độc lập (`shadowrocket_locket_youtube.conf`)**: Dành cho người dùng muốn cài đặt một lần sử dụng ngay toàn bộ quy tắc mạng, DNS tối ưu và tính năng VIP.
- **Tập tin Module cắm & chạy (`shadowrocket_locket_youtube.sgmodule`)**: Dành cho người dùng đã có sẵn gói cấu hình proxy/VPN cá nhân (như 4G data, proxy vượt tường lửa) và chỉ muốn bật tính năng Locket & YouTube mà không ảnh hưởng đến thiết lập hiện có.

---

## 🌟 Tính Năng Nổi Bật

### 🔴 1. YouTube Premium & Chặn Quảng Cáo Triệt Để

*Cập nhật và hoàn thiện theo chuẩn mã nguồn mới nhất từ `chengcei/youtube-shadowrocket` và upstream `Maasea/sgmodule`.*

* **Chặn đứng 100% các loại quảng cáo video**:
  * Loại bỏ hoàn toàn quảng cáo đầu video (Preroll), giữa video (Midroll), cuối video (Postroll) và quảng cáo đệm không thể bỏ qua (Bumper ads).
  * Chặn triệt để banner nhà tài trợ, bài đăng quảng cáo trong bảng tin trang chủ (Home feed), trang kết quả tìm kiếm (Search) và danh sách video đề xuất tiếp theo (Next feed).
  * Lọc sạch quảng cáo xen kẽ trong luồng video ngắn **YouTube Shorts** (`v1/reel/reel_watch_sequence`).
* **Phát âm thanh trong nền (Background Audio Playback)**:
  * Nghe nhạc, podcast liền mạch khi tắt màn hình khóa hoặc khi chuyển sang lướt ứng dụng khác (Facebook, Safari, Messenger).
  * Hỗ trợ đầy đủ widget điều khiển trên màn hình khóa (Lock Screen), Trung tâm điều khiển (Control Center) và các nút điều khiển vật lý/cảm ứng trên tai nghe Apple AirPods / tai nghe Bluetooth.
* **Hình trong hình (Picture-in-Picture - PiP)**:
  * Tự động thu nhỏ video thành một cửa sổ nổi linh hoạt trên màn hình chính khi bạn vuốt thoát khỏi ứng dụng YouTube.
  * Tự do phóng to/thu nhỏ (pinch-to-zoom), di chuyển đến bất kỳ góc nào trên màn hình, hoặc vuốt tạm vào mép màn hình để chỉ nghe tiếng mà không vướng tầm nhìn.
* **Tự động dịch & nhúng phụ đề song ngữ Tiếng Việt (`vi`)**:
  * Tự động phát hiện và dịch phụ đề các video quốc tế (tiếng Anh, Hàn, Nhật, Trung, Pháp, Tây Ban Nha,...) sang tiếng Việt chuẩn ngữ nghĩa.
  * Hiển thị phụ đề song ngữ thông minh `@Enhance (vi)` trực tiếp trong trình phát YouTube.
* **Cấu hình YouTube Shorts thông minh (`blockShorts: false`)**:
  * Giữ nguyên tính năng lướt xem video ngắn Shorts mà không bị ẩn hay lỗi giao diện, nhưng loại bỏ toàn bộ các clip quảng cáo tài trợ xuất hiện giữa các video.
* **Lược bỏ thành phần thừa & tối ưu hóa giao diện (`blockUpload: true, blockImmersive: true`)**:
  * Ẩn nút Tạo/Đăng tải dấu cộng `(+)` ở chính giữa thanh điều hướng dưới cùng, giúp giao diện gọn gàng, tránh bấm nhầm.
  * Ẩn các banner gợi ý đắm chìm (immersive popups) và các thông báo phiền phức.
* **Hệ thống xử lý kịch bản phân luồng (Script Pipeline)**:
  1. `youtube.response`: Xử lý phản hồi Protobuf nhị phân từ máy chủ `youtubei.googleapis.com` trên các điểm cuối API: `browse`, `next`, `player`, `search`, `reel/reel_watch_sequence`, `guide`, `account/get_setting`, `get_watch`, `log_event`, `config`. Argument truyền vào:
     ```json
     {"captionLang":"vi","blockUpload":true,"blockImmersive":true,"blockShorts":false,"debug":false}
     ```
  2. `youtube.request.init`: Can thiệp yêu cầu phát luồng `initplayback` trên máy chủ phân phối nội dung `*.googlevideo.com`, cấu hình chế độ nhị phân `binary-body-mode=1`, `requires-body=1` và tham số `captionLang: "vi"` để loại bỏ thông tin quảng cáo ngay trước khi video bắt đầu tải.
  3. `youtube.request.log_event`: Chặn bắt và xử lý điểm cuối `log_event` của Google, ngăn chặn việc báo cáo số liệu xem quảng cáo về hệ thống YouTube.

---

### 💛 2. Locket Gold VIP - hungw. Edition

* **Mở khóa gói đăng ký Locket Gold trọn đời**:
  * Can thiệp biên nhận giao dịch RevenueCat (`api.revenuecat.com` & `api.rc-backup.com`), gán quyền sở hữu vĩnh viễn đến năm 2099.
  * Loại bỏ hoàn toàn header bộ nhớ đệm `x-revenuecat-etag` bằng cả bộ lọc tiêu đề mạng (Header Rewrite) và kịch bản can thiệp yêu cầu (Request Script), ngăn chặn mã phản hồi `304 Not Modified`, đảm bảo thiết bị luôn tải về dữ liệu tài khoản VIP mới nhất.
* **Mở khóa hơn 360+ cấu hình từ xa (Firebase Remote Config Flags)**:
  * **Video dài 60 giây**: Nâng thời lượng quay video từ mức mặc định (3 giây - 10 giây) lên đến **60 giây** với âm thanh chất lượng cao.
  * **Tải ảnh độ phân giải gốc 2K / 4K**: Nâng kích thước ảnh tải lên từ chuẩn nén mặc định lên **2560px - 4096px**, giữ chất lượng ảnh sắc nét tuyệt đối.
  * **Mở khóa toàn bộ Khung viền Widget (Custom Widget Frames)**: Thỏa sức trang trí màn hình chính bằng các mẫu khung độc quyền (Shin-chan, Trung Thu, Golden Frames, Vintage,...).
  * **Mở khóa toàn bộ Bộ lọc & Chủ đề Máy ảnh (Camera Themes & Filters)**: Looks, Costumes, Goofy, Celebrate, Cute, Special.
  * **Không giới hạn bạn bè**: Nâng mức giới hạn bạn bè lên tới **999.999 bạn bè**.
  * **Khôi phục chuỗi miễn phí (Free Streak Recovery)**: Cứu chuỗi gửi ảnh bạn bè không tốn phí.
  * **Bộ chọn biểu tượng ứng dụng (App Icon Picker)**: Tự do đổi logo Locket trên màn hình chính theo phong cách cá nhân.
* **Huy hiệu vàng Gold Profile Badge**:
  * Tự động gán huy hiệu xác minh màu vàng Gold VIP cao cấp vào hồ sơ cá nhân và hiển thị đồng bộ trên trang chủ bạn bè, thanh hoạt động và bảng tin.

---

## 🎨 Bộ Sưu Tập 310+ Custom Captions Locket

Điểm nhấn độc quyền trong bản phát hành của **hungw.** là bộ sưu tập **hơn 310 mẫu chú thích (Custom Captions)** được tích hợp sẵn vào dữ liệu Remote Config của Locket. Tất cả caption được thiết kế tỉ mỉ với màu nền gradient sống động và biểu tượng đồ họa sắc nét (Apple SF Symbols và Emojis).

> [!TIP]
> ### 📖 TÀI LIỆU TRA CỨU ĐẦY ĐỦ
> Để xem danh sách chi tiết từng caption kèm mã định danh (Caption ID), nội dung hiển thị, mã màu nền gradient hex và tên icon, mời bạn truy cập tài liệu độc lập:
> 
> 👉 **[BẢNG TRA CỨU CHI TIẾT 310+ CUSTOM CAPTIONS LOCKET (LOCKET_CAPTIONS.md)](./LOCKET_CAPTIONS.md)**

### Tóm Tắt 11 Danh Mục Chú Thích

| # | Danh mục | Số lượng | Đặc điểm nổi bật |
|:---:|---|:---:|---|
| **1** | `👑 Độc Quyền hungw.` | 10 mẫu | Huy hiệu nhận diện thương hiệu `hungw.` VIP, Gold VIP, Dev Edition, Exclusive, Luxury Crown. |
| **2** | `🎨 Tính Năng Gốc Locket` | 14 mẫu | Các widget động tích hợp sâu vào hệ thống: Nhạc đang phát (Spotify/Apple Music), Thời tiết, Vị trí, Giờ thực, Chuỗi Streak, Cung hoàng đạo, Poll bình chọn, Bảng màu, Đếm số Locket, Trích dẫn (Quote), Tin nóng (Breaking News). |
| **3** | `☑️ Chứng Nhận Của Locket` | 18 mẫu | Huy hiệu tích xanh xác minh Apple SF Symbols (`checkmark.seal.fill`), Vương miện (`crown.fill`), Chế độ trực tiếp (`circle.fill`), Quay 4K 60FPS (`record.circle.fill`), Không làm phiền. |
| **4** | `💕 Tình Yêu & Cơm Chó` | 34 mẫu | Thả thính ngọt ngào, cặp đôi, hẹn hò, tỏ tình, nhớ người yêu, lời hứa lãng mạn. |
| **5** | `💅 Gen Z Slay & Xéo Xắt` | 41 mẫu | Thần thái visual đỉnh nóc, slay queen, +10000 Aura, độc lập, cuốn hút, kiêu kỳ. |
| **6** | `🔥 Trend TikTok & Độc Lạ` | 54 mẫu | Tổng hợp toàn bộ câu nói viral đình đám nhất trên mạng xã hội TikTok. |
| **7** | `🤡 Meme & Hài Hước` | 22 mẫu | Hài hước giải trí, check VAR, hóng drama, tự luyến vui vẻ. |
| **8** | `🫠 Bất Ổn & Hết Cứu` | 41 mẫu | Tâm trạng đêm muộn, overthinking, bất ổn đáng yêu, những ngày mệt mỏi cần được dỗ dành. |
| **9** | `☕ Daily, Chill & Đời Sống` | 52 mẫu | Đời sống thường nhật: cà phê sáng, trà sữa matcha, đi dạo phố, đi biển, đi ngủ, pin 1%. |
| **10** | `💸 Deadline & Tiền Bạc` | 9 mẫu | Tâm trạng đi làm, chạy deadline, kiếm tiền, tự chủ tài chính. |
| **11** | `🎄 Lễ Hội & Sự Kiện` | 15 mẫu | Tết Nguyên Đán, Giáng Sinh, Valentine, Trung Thu, Halloween, 8/3, 20/10 — đã mở khóa để sử dụng quanh năm 24/7. |

### Cách Chọn & Sử Dụng Caption Trong Ứng Dụng Locket
1. Mở ứng dụng **Locket** và chụp một bức ảnh hoặc nhấn giữ để quay video (lên đến 60 giây).
2. Nhấn vào biểu tượng **Chú thích (Caption)** trên màn hình chỉnh sửa hoặc vuốt ngang danh sách mẫu chú thích bên dưới ảnh.
3. Chạm vào danh mục bạn yêu thích và chọn mẫu caption muốn gửi. Màu nền gradient và biểu tượng tương ứng sẽ tự động hiển thị lung linh trên bức ảnh của bạn.
4. Nhấn nút **Gửi (Send)** đến bạn bè hoặc ghim lên tiện ích màn hình chính Widget.

---

## ⚡ Cơ Chế Chuyên Sâu: Chặn UDP Cổng 443 (QUIC / HTTP3)

Hiểu rõ nguyên lý hoạt động của quy tắc chặn UDP cổng 443 sẽ giúp bạn hiểu tại sao Shadowrocket có thể chặn sạch quảng cáo YouTube mà các bộ lọc thông thường khác thường xuyên thất bại.

```
                          ┌──────────────────────────────────────────────┐
                          │     Ứng dụng YouTube trên iOS khởi chạy      │
                          └──────────────────────┬───────────────────────┘
                                                 │
                                     (1) Cố gắng kết nối
                                       UDP 443 (QUIC)
                                                 │
                                                 ▼
                          ┌──────────────────────────────────────────────┐
                          │           Quy tắc Shadowrocket:              │
                          │ AND,((PROTOCOL,UDP),(DEST-PORT,443)),REJECT  │
                          └──────────────────────┬───────────────────────┘
                                                 │
                                    (2) REJECT ngay tức khắc
                                    (ICMP Port Unreachable)
                                                 │
                                                 ▼
                          ┌──────────────────────────────────────────────┐
                          │   Client YouTube tự động chuyển dự phòng:    │
                          │       Graceful Fallback sang TCP HTTPS       │
                          └──────────────────────┬───────────────────────┘
                                                 │
                                     (3) Kết nối TCP cổng 443
                                       Bắt tay TLS an toàn
                                                 │
                                                 ▼
                          ┌──────────────────────────────────────────────┐
                          │      Chứng chỉ CA Root của Shadowrocket      │
                          │     giải mã gói tin HTTPS qua engine MITM    │
                          └──────────────────────┬───────────────────────┘
                                                 │
                                     (4) Thực thi Scripts:
                                  - Loại bỏ luồng video quảng cáo
                                  - Kích hoạt PiP & Phát trong nền
                                  - Tự động nhúng phụ đề Tiếng Việt
                                                 │
                                                 ▼
                          ┌──────────────────────────────────────────────┐
                          │ Video phát mượt mà, KHÔNG MỘT BÓNG QUẢNG CÁO │
                          └──────────────────────────────────────────────┘
```

### Tại Sao YouTube Trên iOS Mặc Định Dùng QUIC / HTTP/3?
Các kỹ sư Google đã tích hợp giao thức mạng **QUIC** (chạy trên nền UDP tại cổng 443) làm kênh truyền tải ưu tiên số một cho ứng dụng YouTube trên iPhone/iPad. QUIC có ưu điểm giảm độ trễ bắt tay mạng (0-RTT), nhưng các gói tin UDP này sử dụng thuật toán mã hóa độc quyền của Google mà các công cụ proxy TLS thông thường **không thể giải mã MITM**. 

Nếu lưu lượng UDP cổng 443 được phép đi qua, ứng dụng YouTube sẽ trao đổi trực tiếp với máy chủ Google qua QUIC. Kết quả là mọi kịch bản lọc quảng cáo bằng JavaScript và Protobuf đều bị vô hiệu hóa vì không thể can thiệp vào dòng dữ liệu.

### Giải Pháp: Buộc Hạ Cấp Sang HTTPS / TCP Bằng Quy Tắc REJECT
Trong file cấu hình và module của chúng tôi, quy tắc sau đây được đặt ở **ưu tiên hàng đầu** của danh mục `[Rule]`:
```ini
AND,((PROTOCOL,UDP),(DEST-PORT,443)),REJECT
```
- Khi ứng dụng YouTube phát tín hiệu UDP cổng 443 ra ngoài, Shadowrocket sẽ lập tức trả về phản hồi từ chối kết nối (Reject).
- Ứng dụng YouTube được thiết kế với cơ chế tự thích ứng rất thông minh: khi nhận thấy cổng UDP bị chặn, nó sẽ lập tức tự động chuyển đổi dự phòng (**Graceful Fallback**) sang giao thức tiêu chuẩn **HTTPS (HTTP/2) qua TCP** trong thời gian cực ngắn (<50 mili-giây) mà người dùng không thể nhận thấy bất kỳ sự gián đoạn nào.
- Khi kết nối đã chuyển sang TCP, công nghệ giải mã HTTPS (MITM) của Shadowrocket sẽ dễ dàng can thiệp vào quá trình bắt tay TLS, cho phép các kịch bản `youtube.response.js` và `youtube.request.js` bóc tách cấu trúc dữ liệu Protobuf, gỡ sạch quảng cáo và mở khóa các tính năng Premium.

### Danh Sách Tên Miền Quảng Cáo Bị Chặn Tận Gốc
Bên cạnh việc chuyển đổi giao thức, toàn bộ các máy chủ phân phối quảng cáo của Google và DoubleClick đều bị ngăn chặn trực tiếp từ tầng định tuyến:
- `ad.doubleclick.net`
- `googleads.g.doubleclick.net`
- `pagead2.googlesyndication.com`
- `ade.googlesyndication.com`
- `tpc.googlesyndication.com`

---

## 🔐 Hướng Dẫn Cài Đặt Chứng Chỉ CA & Kích Hoạt MITM Chuẩn Xác

Để Shadowrocket có quyền giải mã các gói tin HTTPS của YouTube và Locket ngay trên thiết bị của bạn, bạn **bắt buộc** phải hoàn thành 4 giai đoạn dưới đây. Đây là quy trình bảo mật chuẩn của hệ điều hành Apple iOS.

> [!WARNING]
> Nếu bạn bỏ qua bước cài đặt hoặc chưa bật "Tin cậy hoàn toàn" cho chứng chỉ, Shadowrocket sẽ không thể can thiệp dữ liệu, dẫn đến việc YouTube vẫn xuất hiện quảng cáo hoặc ứng dụng báo mất kết nối Internet.

---

### Giai Đoạn 1: Khởi Tạo & Tải Chứng Chỉ CA Từ Shadowrocket

1. Mở ứng dụng **Shadowrocket** trên iPhone / iPad.
2. Nhấn vào tab **Cài đặt (Settings)** (biểu tượng bánh răng ở góc dưới cùng bên phải màn hình).
3. Tìm và nhấn vào mục **Chứng chỉ (Certificate)**.
4. Nhấn vào dòng chữ **Tạo chứng chỉ CA mới (Generate a New CA)**.
5. Khi chứng chỉ đã được tạo thành công, nhấn tiếp vào dòng **Cài đặt chứng chỉ vào hệ thống (Install CA to System)**.
6. Ứng dụng sẽ tự động chuyển hướng mở trình duyệt **Safari** và xuất hiện hộp thoại:
   > *"Trang web này đang cố gắng tải về một hồ sơ cấu hình. Bạn có muốn cho phép không?"*
7. Hãy chọn **Cho phép (Allow)**.
8. Khi màn hình xuất hiện thông báo *"Đã tải về hồ sơ (Profile Downloaded)"*, nhấn **Đóng (Close)**.

---

### Giai Đoạn 2: Cài Đặt Hồ Sơ Cấu Hình Vào Hệ Thống iOS

1. Thoát ra màn hình chính, mở ứng dụng **Cài đặt (Settings)** mặc định của iOS.
2. Ngay phía dưới thông tin tài khoản Apple ID / iCloud ở đầu trang, bạn sẽ thấy mục **Đã tải về hồ sơ (Profile Downloaded)** xuất hiện. Nhấn vào mục này.
   *(Nếu không thấy, bạn vào: Cài đặt > Cài đặt chung > Quản lý VPN & Thiết bị).*
3. Nhấn vào hồ sơ có tên **Shadowrocket...**
4. Nhấn nút **Cài đặt (Install)** ở góc trên cùng bên phải.
5. Nhập **Mật mã mở khóa màn hình** của thiết bị nếu được yêu cầu.
6. Khi bảng cảnh báo về chứng chỉ xuất hiện, tiếp tục nhấn **Cài đặt (Install)** ở góc trên bên phải.
7. Nhấn xác nhận **Cài đặt (Install)** thêm một lần nữa ở bảng thông báo xuất hiện dưới đáy màn hình.
8. Nhấn nút **Xong (Done)**.

---

### Giai Đoạn 3: Bật Tin Cậy Hoàn Toàn (Full Trust) Cho Chứng Thư Gốc

Hệ điều hành iOS yêu cầu người dùng phải xác nhận ủy quyền tin cậy tuyệt đối thủ công cho các chứng chỉ tự sinh:

1. Trong ứng dụng **Cài đặt (Settings)** của iOS, chọn **Cài đặt chung (General)**.
2. Nhấn vào mục đầu tiên: **Giới thiệu (About)**.
3. Cuộn xuống vị trí dưới cùng của danh sách, chọn **Cài đặt tin cậy chứng nhận (Certificate Trust Settings)**.
4. Tại khu vực có tiêu đề **"BẬT TIN CẬY ĐẦY ĐỦ CHO CÁC CHỨNG THƯ GỐC" (ENABLE FULL TRUST FOR ROOT CERTIFICATES)**, bạn sẽ thấy tên chứng chỉ Shadowrocket vừa cài đặt.
5. Gạt công tắc bên cạnh chứng chỉ sang trạng thái **BẬT (Màu xanh lá cây)**.
6. Một hộp thoại cảnh báo của Apple sẽ bật lên với nội dung:
   > *"Việc bật chứng chỉ gốc sẽ cho phép bên thứ ba tin cậy bất kỳ chứng nhận nào do chứng thư gốc đó cấp..."*
7. Hãy yên tâm chọn **Tiếp tục (Continue)** vì đây chính là chứng chỉ nội bộ do ứng dụng Shadowrocket trên máy bạn tự quản lý.

---

### Giai Đoạn 4: Bật Tính Năng Giải Mã HTTPS (HTTPS Decryption) Trong Shadowrocket

1. Quay trở lại mở ứng dụng **Shadowrocket**.
2. Nhấn vào tab **Cài đặt (Settings)** ở góc dưới bên phải màn hình.
3. Cuộn xuống phần thiết lập và tìm mục **Giải mã HTTPS (HTTPS Decryption)**.
4. Gạt công tắc **Giải mã HTTPS (HTTPS Decryption)** sang trạng thái **BẬT (Màu cam hoặc xanh)**.
5. Kiểm tra dòng **Tạo chứng chỉ CA (Generate CA)**: Đảm bảo có biểu tượng dấu tích chữ V màu xanh lá báo hiệu chứng chỉ đã sẵn sàng hoạt động.

---

## 📲 Hướng Dẫn Cài Đặt Cấu Hình (.conf) & Module (.sgmodule)

Bạn chỉ cần chọn **MỘT TRONG HAI** hình thức cài đặt dưới đây tùy theo nhu cầu cá nhân:

### Lựa Chọn 1: Sử Dụng Cấu Hình Độc Lập (.conf) — *Khuyên Dùng Cho Người Dùng Mới*
Cấu hình `.conf` áp dụng trọn vẹn toàn bộ các thiết lập định tuyến, tối ưu DNS, ngăn chặn rò rỉ dữ liệu và tích hợp sẵn đầy đủ Locket Gold + YouTube Premium.

1. Trong ứng dụng Shadowrocket, mở tab **Cấu hình (Config)** ở thanh điều hướng dưới.
2. Nhấn vào dấu cộng **(+)** ở góc trên cùng bên phải màn hình.
3. Dán liên kết Raw chính thức vào ô **URL**:
   ```text
   https://raw.githubusercontent.com/hung2705/OhYeah275/main/shadowrocket_locket_youtube.conf
   ```
4. Nhấn nút **Tải về (Download)**.
5. Trong danh sách cấu hình cục bộ, chạm nhẹ vào tên file `shadowrocket_locket_youtube.conf` và chọn dòng **Sử dụng cấu hình (Use Config)**. Tập tin có dấu chấm tròn màu cam/vàng bên cạnh chính là cấu hình đang được áp dụng.

---

### Lựa Chọn 2: Sử Dụng Module Mở Rộng (.sgmodule) — *Dành Cho Người Đã Có Proxy Riêng*
Nếu bạn đang sử dụng một cấu hình riêng (như proxy cá nhân, gói data 4G viễn thông, server vượt tường lửa quốc tế) và muốn giữ nguyên danh sách máy chủ proxy đó:

1. Trong ứng dụng Shadowrocket, vào tab **Cấu hình (Config)**.
2. Cuộn xuống khu vực có tiêu đề **Modules**.
3. Nhấn vào dấu cộng **(+)** ở góc trên bên phải khung Modules.
4. Dán liên kết Raw của module vào ô **URL**:
   ```text
   https://raw.githubusercontent.com/hung2705/OhYeah275/main/shadowrocket_locket_youtube.sgmodule
   ```
5. Nhấn nút **Tải về (Download)**.
6. Tìm module vừa tải trong danh sách và gạt công tắc bên cạnh sang trạng thái **BẬT**.

---

## 🎬 Hướng Dẫn Kích Hoạt Phát Trong Nền (Background) & Hình Trong Hình (PiP)

Sau khi cài đặt xong chứng chỉ và cấu hình, bạn có thể tận hưởng trọn vẹn trải nghiệm xem video cao cấp như tài khoản YouTube Premium trả phí.

### 1. Bật Tính Năng PiP Của Hệ Điều Hành iOS
Để tính năng Hình trong hình hoạt động trơn tru nhất:
1. Mở **Cài đặt (Settings)** trên iPhone.
2. Chọn **Cài đặt chung (General)** > **Hình trong hình (Picture in Picture)**.
3. Đảm bảo công tắc **Bắt đầu PiP tự động (Start PiP Automatically)** đang ở trạng thái **BẬT (Màu xanh)**.
4. Mở ứng dụng **YouTube** > Nhấn vào ảnh đại diện cá nhân ở góc dưới bên phải > Chọn biểu tượng bánh răng **Cài đặt** ở góc trên > Chọn mục **Chung (General)** > Gạt bật công tắc **Hình trong hình (Picture-in-Picture)** nếu có.

### 2. Cách Sử Dụng Chế Độ Hình Trong Hình (PiP)
- Mở một video bất kỳ trên YouTube và để video phát bình thường.
- **Vuốt từ mép dưới màn hình lên** (đối với iPhone có Face ID) hoặc **nhấn nút Home** (đối với iPhone có Touch ID) để trở về màn hình chính.
- Video sẽ tự động thu nhỏ thành một khung hình nổi mượt mà ngay trên màn hình chính:
  - Dùng hai ngón tay kéo để **phóng to** hoặc **thu nhỏ** khung hình video.
  - Kéo khung hình đến bất kỳ góc nào thuận tiện.
  - Vuốt khung hình về sát mép màn hình trái/phải để tạm ẩn hình ảnh mà vẫn nghe trọn vẹn âm thanh.

### 3. Cách Sử Dụng Chế Độ Phát Trong Nền (Background Playback)
- Mở bài hát, podcast hoặc video yêu thích trên ứng dụng YouTube.
- Nhấn **nút nguồn khóa màn hình iPhone** hoặc **chuyển sang ứng dụng khác** (Safari, Facebook, Game,...).
- Âm thanh sẽ tiếp tục phát liên tục mà không hề bị dừng hay gián đoạn.
- Bạn có thể chuyển bài, dừng/phát nhạc, chỉnh âm lượng trực tiếp từ:
  - Tiện ích Trình phát nhạc tại Màn hình khóa (Lock Screen Widget).
  - Trung tâm điều khiển (Control Center).
  - Thao tác chạm cảm ứng trên tai nghe AirPods / tai nghe Bluetooth không dây.

---

## 🚀 Hướng Dẫn Triển Khai Lên GitHub & Lấy Link Raw

Nếu bạn muốn tạo một bản sao lưu cá nhân trên tài khoản GitHub của riêng mình để tiện quản lý và cập nhật:

### 1. Tạo Kho Lưu Trữ (Repository)
1. Truy cập [GitHub.com](https://github.com) và đăng nhập vào tài khoản cá nhân.
2. Tạo một repository mới với tên mong muốn (ví dụ: `OhYeah275`).
3. Chọn chế độ hiển thị **Public (Công khai)** để Shadowrocket có thể tải file cấu hình mà không bị chặn quyền truy cập.

### 2. Thực Hiện Lệnh Git Từ Máy Tính
Mở công cụ dòng lệnh (Terminal trên macOS/Linux hoặc PowerShell trên Windows) tại thư mục chứa dự án và nhập lần lượt các lệnh:

```bash
# 1. Di chuyển vào thư mục chứa mã nguồn cấu hình
cd "c:\Users\huong\Music\Edge"

# 2. Khởi tạo kho lưu trữ Git cục bộ
git init

# 3. Thêm các tập tin cấu hình, tài liệu và kịch bản vào vùng chuẩn bị
git add shadowrocket_locket_youtube.conf shadowrocket_locket_youtube.sgmodule README.md LOCKET_CAPTIONS.md

# 4. Tạo commit lưu lại phiên bản phát hành
git commit -m "feat: release unified Shadowrocket config & module with YouTube Premium and Locket 310+ captions"

# 5. Đổi tên nhánh chính thành main
git branch -M main

# 6. Liên kết với kho lưu trữ từ xa trên GitHub của bạn
git remote add origin https://github.com/hung2705/OhYeah275.git

# 7. Đẩy toàn bộ dữ liệu lên GitHub
git push -u origin main
```

### 3. Cách Lấy Đường Dẫn Raw Để Dán Vào iPhone
1. Truy cập vào kho lưu trữ của bạn trên trình duyệt Safari hoặc máy tính.
2. Nhấn vào tên tập tin `shadowrocket_locket_youtube.conf` hoặc `shadowrocket_locket_youtube.sgmodule`.
3. Nhấn vào nút **Raw** ở góc trên bên phải khung hiển thị mã nguồn.
4. Sao chép toàn bộ đường dẫn trên thanh địa chỉ của trình duyệt. Cấu trúc liên kết chuẩn sẽ có dạng:
   - File cấu hình: `https://raw.githubusercontent.com/hung2705/OhYeah275/main/shadowrocket_locket_youtube.conf`
   - File module: `https://raw.githubusercontent.com/hung2705/OhYeah275/main/shadowrocket_locket_youtube.sgmodule`

---

## 🔍 Khắc Phục Sự Cố & Câu Hỏi Thường Gặp (FAQ)

### Q1: Tôi đã bật Shadowrocket nhưng YouTube vẫn còn quảng cáo và Locket chưa có Gold?
> **Khắc phục theo thứ tự sau:**
> 1. **Chưa tắt hẳn ứng dụng (Kill App)**: Bạn phải mở bộ chuyển đổi đa nhiệm (App Switcher) và **vuốt tắt hoàn toàn ứng dụng Locket và YouTube**, sau đó mới mở lại để ứng dụng xóa cache cũ.
> 2. **Chưa bật "Tin cậy hoàn toàn"**: Vào *Cài đặt của iPhone > Cài đặt chung > Giới thiệu > Cài đặt tin cậy chứng nhận*, kiểm tra xem chứng chỉ Shadowrocket đã được bật công tắc màu xanh chưa.
> 3. **Chưa bật Giải mã HTTPS trong Shadowrocket**: Vào *Shadowrocket > Cài đặt > Giải mã HTTPS*, đảm bảo công tắc đang BẬT.

### Q2: Tại sao phải chặn UDP cổng 443 thay vì chỉ chặn tên miền quảng cáo thông thường?
> **Giải thích:** Ứng dụng YouTube trên iOS ưu tiên truyền dữ liệu qua giao thức QUIC (HTTP/3 trên nền UDP). Do dữ liệu QUIC được mã hóa riêng biệt, proxy TCP thông thường không thể can thiệp. Quy tắc `AND,((PROTOCOL,UDP),(DEST-PORT,443)),REJECT` sẽ kích hoạt cơ chế fallback của YouTube, buộc ứng dụng chuyển sang kết nối HTTPS qua TCP trong chưa đầy 50ms, giúp Shadowrocket giải mã và loại bỏ quảng cáo thành công 100%.

### Q3: Tại sao cấu hình không đưa `*.googleapis.com` vào danh sách giải mã MITM?
> **Giải thích:** Hầu như mọi dịch vụ cốt lõi của Apple và Google (App Store, iCloud, Google SSO, Gmail, Google Drive, Safari Search) đều dùng tên miền con của `googleapis.com`. Nếu thêm ký tự đại diện `*.googleapis.com` vào MITM, các ứng dụng có cơ chế ghim chứng chỉ (Certificate Pinning) sẽ lập tức báo lỗi mạng hoặc không đăng nhập được. Cấu hình của chúng tôi chỉ can thiệp chính xác vào hai tên miền phụ chuyên biệt là `firebaseremoteconfig.googleapis.com` (cho Locket) và `youtubei.googleapis.com` (cho YouTube), bảo đảm an toàn và ổn định tuyệt đối cho toàn hệ thống.

### Q4: Video YouTube có bị giảm tốc độ tải khi chạy qua kịch bản lọc không?
> **Giải thích:** Hoàn toàn không. Toàn bộ các luồng video dung lượng lớn truyền từ máy chủ `googlevideo.com` được xử lý tối ưu với chế độ luồng nhị phân trực tiếp (`binary-body-mode=1`). Shadowrocket chỉ can thiệp vào tiêu đề và cấu trúc dữ liệu Protobuf ở yêu cầu khởi tạo (`initplayback`), các gói dữ liệu video thực tế sau đó được truyền tải với tốc độ gốc tối đa của đường truyền Internet.

---

## 📁 Danh Mục Tập Tin Trong Dự Án

```
├── shadowrocket_locket_youtube.conf    # Cấu hình Standalone hoàn chỉnh cho Shadowrocket
├── shadowrocket_locket_youtube.sgmodule  # Module mở rộng cắm và chạy cho Shadowrocket
├── LOCKET_CAPTIONS.md                  # Bảng tra cứu toàn bộ 310+ Custom Captions Locket
├── README.md                           # Tài liệu hướng dẫn sử dụng chi tiết này
└── js/
    ├── locket_gold.js                  # Kịch bản mở khóa quyền sở hữu RevenueCat Gold
    ├── locket_remote.js                # Kịch bản ghi đè Firebase Remote Config & Captions
    ├── locket_profile.js               # Kịch bản gán huy hiệu vàng Gold Profile Badge
    └── deleteHeader.js                 # Kịch bản xóa header ETag chống phản hồi 304
```

---

## 📜 Bản Quyền & Lời Cảm Ơn

- **Tác giả & Đóng gói**: **hungw.** ([GitHub: hung2705/OhYeah275](https://github.com/hung2705/OhYeah275)).
- **Upstream YouTube Scripts**: Kịch bản bóc tách Protobuf và dịch phụ đề song ngữ YouTube được phát triển bởi tác giả **Maasea** ([Maasea/sgmodule](https://github.com/Maasea/sgmodule)) và cộng đồng **chengcei/youtube-shadowrocket**.
- **Locket Scripts**: Kịch bản bẻ khóa RevenueCat và các cờ Remote Config được nghiên cứu và chia sẻ bởi cộng đồng lập trình viên iOS (**LAMDev** / `leanhminh2104`).
- **Giấy phép**: Phát hành miễn phí vì mục đích học tập và trải nghiệm người dùng phi thương mại.
