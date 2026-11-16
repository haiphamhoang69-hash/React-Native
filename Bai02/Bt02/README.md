BÀI TẬP 02: THIẾT KẾ TRANG CHỦ ỨNG DỤNG HỌC TẬP
1. Link ứng dụng Expo
Tên ứng dụng: LearningApp
Link Expo: Dán link ứng dụng tại đây.
2. Quá trình thực hiện
Bước 1: Tạo dự án
Truy cập Expo Snack để tạo dự án React Native mới.
Tạo file App.js làm file chính của ứng dụng.
Tạo thư mục components để chứa các thành phần giao diện.
Tạo 4 file: Header.js, StatCard.js, CourseCard.js và BottomMenu.js.
Bước 2: Xây dựng Header
Sử dụng View để tạo khu vực đầu trang.
Sử dụng Text để hiển thị tên ứng dụng Góc học tập.
Sử dụng StyleSheet để định dạng màu sắc, kích thước chữ và khoảng cách.
Thiết kế giao diện theo tông màu kem và cam đất.


Bước 3: Xây dựng StatCard
Tạo component StatCard để hiển thị thông tin thống kê.
Sử dụng các thuộc tính number, title, icon, color và bg để truyền dữ liệu.
Thiết kế 3 thẻ thống kê gồm khóa học, bài học và phần trăm hoàn thành.
Sử dụng Flexbox để sắp xếp các thẻ nằm ngang.


Bước 4: Xây dựng CourseCard
Tạo component CourseCard để hiển thị thông tin từng môn học.
Sử dụng View và Text để trình bày tên môn học, giảng viên và biểu tượng.
Sử dụng map() để hiển thị danh sách môn học.
Tạo thanh tiến độ bằng các View lồng nhau.
Sử dụng thuộc tính width để thể hiện phần trăm hoàn thành.


Bước 5: Xây dựng BottomMenu
Tạo component BottomMenu để hiển thị thanh menu ở cuối màn hình.
Sử dụng TouchableOpacity để tạo các mục có thể nhấn.
Sử dụng useState để lưu mục menu đang được chọn.
Khi nhấn vào một mục, màu sắc của mục đó sẽ thay đổi.
Thanh menu gồm 4 mục: Trang chủ, Môn học, Bài tập và Cá nhân.
Đây là thanh menu giả lập, chưa có chức năng chuyển màn hình.


Bước 6: Hoàn thiện trang Home
Import 4 component vào file App.js.
Sử dụng SafeAreaView để tạo vùng hiển thị an toàn.
Sử dụng ScrollView để cho phép cuộn nội dung.
Hiển thị thông tin sinh viên, lời chào và ngày hiện tại.
Tạo danh sách môn học bằng mảng dữ liệu và hàm map().
Đặt BottomMenu bên ngoài ScrollView để thanh menu luôn nằm cuối màn hình.


3. Hình ảnh minh họa giao diện
3.1. thông tin sinh viên

<img width="330" height="136" alt="image" src="https://github.com/user-attachments/assets/aabcc3cb-11a6-4e74-a4e4-c0687cfe3dc9" />


3.2. Lời xin chào

<img width="189" height="184" alt="image" src="https://github.com/user-attachments/assets/49080b27-d6c7-4572-8a9c-bf8a8e75fc71" />


3.3. Thống kê môn học

<img width="313" height="196" alt="image" src="https://github.com/user-attachments/assets/cd72a507-3157-44aa-938a-a2f36fd14a1c" />


3.4. Danh sách môn học

<img width="323" height="504" alt="image" src="https://github.com/user-attachments/assets/db896702-4bae-4492-aa72-49b373052a41" />

3.5. Thanh giả lập

<img width="336" height="76" alt="image" src="https://github.com/user-attachments/assets/1bdfb6dd-0d2d-45c0-a200-30cc267e9040" />



4. Kết quả thực hiện

Sau khi hoàn thành, ứng dụng LearningApp có các thành phần:

Hiển thị tên ứng dụng và lời chào.
Hiển thị thông tin sinh viên.
Thống kê khóa học, bài học và tiến độ hoàn thành.
Hiển thị danh sách 4 môn học.
Hiển thị thanh tiến độ của từng môn học.
Có thanh menu giả lập ở cuối màn hình.
Có thể nhấn vào các mục menu để thay đổi trạng thái được chọn.

Ứng dụng được xây dựng và chạy thử nghiệm trên Expo Snack.
