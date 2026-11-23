BÀI TẬP 7: ỨNG DỤNG ĐẶT LỊCH DỊCH VỤ

1. Giới thiệu dự án

BookingApp là ứng dụng đặt phòng nghỉ dưỡng cao cấp được xây dựng bằng React Native và Expo Snack.

Ứng dụng cho phép người dùng khám phá các khu nghỉ dưỡng, xem thông tin chi tiết, lựa chọn ngày nhận phòng, ngày trả phòng, loại phòng và thực hiện quy trình đặt phòng mô phỏng.

Giao diện được thiết kế theo phong cách sang trọng với tông màu xanh rêu và vàng champagne.

2. Link ứng dụng
Expo Snack: https://snack.expo.dev/@phamhoanghai/bookingapp
3. Các chức năng chính
3.1. Trang chủ (HomeScreen)
Hiển thị banner giới thiệu khu nghỉ dưỡng.
Hiển thị danh sách 8 khu resort.
Lọc resort theo danh mục:
Tất cả
Biển
Cao cấp
Biệt thự
Hiển thị hình ảnh, tên, địa điểm và giá phòng.
3.2. Chi tiết resort (ServiceDetailScreen)
Hiển thị hình ảnh resort.
Hiển thị tên và địa điểm.
Hiển thị giá phòng và đánh giá.
Hiển thị mô tả và tiện ích.
Hiển thị các loại phòng.
Chuyển sang màn hình đặt phòng.
3.3. Đặt phòng (BookingScreen)
Chọn ngày nhận phòng.
Chọn ngày trả phòng.
Chọn số lượng khách.
Lựa chọn loại phòng.
Nhập họ tên, số điện thoại và email.
Kiểm tra thông tin khách hàng.
Tự động tính tổng tiền theo số đêm lưu trú.
3.4. Xác nhận đặt phòng (ConfirmationScreen)
Hiển thị thông báo đặt phòng thành công.
Tạo mã đặt phòng tự động.
Hiển thị thông tin khách hàng.
Hiển thị thông tin resort và thời gian lưu trú.
Hiển thị tổng chi phí đặt phòng.
Cho phép quay lại trang chủ.
4. Công nghệ sử dụng
Công nghệ	Mục đích
React Native	Xây dựng giao diện ứng dụng
Expo Snack	Viết và chạy ứng dụng trực tuyến
JavaScript	Ngôn ngữ lập trình
React Navigation	Điều hướng giữa các màn hình
useState	Quản lý trạng thái
Props	Truyền dữ liệu giữa các component
TextInput	Nhập thông tin khách hàng
Pressable	Xử lý thao tác nhấn
Ionicons	Hiển thị biểu tượng
5. Hình ảnh giao diện ứng dụng
5.1. Trang chủ

<img width="503" height="648" alt="image" src="https://github.com/user-attachments/assets/6320fc08-ea6f-4c58-8e18-c06ce86e7385" />


!Trang chủ BookingApp

5.2. Chi tiết resort

<img width="502" height="637" alt="image" src="https://github.com/user-attachments/assets/a4a98a94-c2d8-400e-b294-e17f9d658580" />


!Chi tiết resort

5.3. Màn hình đặt phòng

<img width="495" height="606" alt="image" src="https://github.com/user-attachments/assets/afdeed57-5a8c-45bd-b0f9-34e1e2e4c8fa" />


<img width="493" height="621" alt="image" src="https://github.com/user-attachments/assets/dab9de5c-5565-4c59-8ca1-adf60635c33b" />


!Màn hình đặt phòng

5.4. Màn hình xác nhận

<img width="491" height="622" alt="image" src="https://github.com/user-attachments/assets/593223b6-daff-46ee-9794-79ae32d26022" />


!Xác nhận đặt phòng

Lưu ý: Thay các ảnh minh họa bằng ảnh chụp thực tế từ Expo Snack. Tạo thư mục images và tải ảnh vào đúng tên file để GitHub hiển thị được.

6. Kiến thức áp dụng
Xây dựng ứng dụng nhiều màn hình bằng React Native.
Sử dụng Stack Navigation.
Truyền tham số giữa các màn hình.
Tạo và tái sử dụng Component.
Truyền dữ liệu bằng Props.
Quản lý trạng thái bằng useState.
Xử lý sự kiện bằng Pressable.
Nhập dữ liệu bằng TextInput.
Sử dụng Alert để thông báo lỗi.
7. Kết quả đạt được

Hoàn thành ứng dụng BookingApp với 4 màn hình chính và các component tái sử dụng.

Người dùng có thể thực hiện quy trình đặt phòng resort mô phỏng từ bước khám phá resort đến bước xác nhận đặt phòng.
