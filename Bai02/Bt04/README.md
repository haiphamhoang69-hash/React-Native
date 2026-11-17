BT04 – Xây dựng ứng dụng nhiều màn hình
1. Link ứng dụng
Link Expo :https://snack.expo.dev/@phamhoanghai/multiscreenapp

2. Giới thiệu ứng dụng

Cookie Shop là ứng dụng giới thiệu các loại bánh quy được xây dựng bằng React Native và Expo.

Ứng dụng giúp người dùng khám phá các loại bánh quy, xem hình ảnh, tên bánh, giá bán và đọc thông tin mô tả chi tiết của từng loại bánh.

Giao diện được thiết kế với tông màu kem, nâu và vàng nhạt, mang phong cách nhẹ nhàng, dễ thương, phù hợp với chủ đề cửa hàng bánh quy.

3. Các màn hình của ứng dụng
3.1. HomeScreen – Trang chủ

Chức năng:

Hiển thị lời chào người dùng.
Hiển thị tên cửa hàng Cookie Shop.
Hiển thị hình ảnh bánh quy.
Có nút Bắt đầu khám phá để chuyển sang màn hình danh sách bánh.

Hình ảnh giao diện:

<img width="321" height="626" alt="image" src="https://github.com/user-attachments/assets/88048828-b1d8-4330-9a12-733de820b084" />


!HomeScreen

3.2. ListScreen – Danh sách bánh quy

Chức năng:

Hiển thị danh sách các loại bánh quy.
Mỗi loại bánh có hình ảnh, tên và giá.
Sử dụng TouchableOpacity để tạo thao tác nhấn.
Khi nhấn vào một loại bánh, ứng dụng chuyển đến màn hình chi tiết tương ứng.

Các loại bánh gồm:

Chocolate Chip Cookie
Butter Cookie
Oatmeal Cookie
Strawberry Cookie
Almond Cookie
Double Chocolate Cookie

Hình ảnh giao diện:

<img width="316" height="629" alt="image" src="https://github.com/user-attachments/assets/89a92e86-1d30-439d-a113-b92323f9cd4e" />


!ListScreen

3.3. DetailScreen – Chi tiết bánh quy

Chức năng:

Hiển thị hình ảnh bánh được chọn.
Hiển thị tên và giá bánh.
Hiển thị nội dung mô tả riêng của từng loại bánh.
Có nút Quay lại danh sách để trở về màn hình trước đó.

Hình ảnh giao diện:

<img width="313" height="618" alt="image" src="https://github.com/user-attachments/assets/63d4a30c-2ddf-435c-a819-8b303879f5e9" />


!DetailScreen


4. Các thành phần và thư viện sử dụng
React Native Components
View: Tạo bố cục giao diện.
Text: Hiển thị nội dung văn bản.
Image: Hiển thị hình ảnh bánh quy.
ScrollView: Cho phép cuộn màn hình.
TouchableOpacity: Tạo nút và thao tác nhấn.
StyleSheet: Thiết kế giao diện cho các component.
Navigation
NavigationContainer: Quản lý điều hướng ứng dụng.
createNativeStackNavigator: Tạo Stack Navigation.
navigation.navigate(): Chuyển đến màn hình khác.
navigation.goBack(): Quay lại màn hình trước.
route.params: Nhận dữ liệu của loại bánh được chọn.
5. Các thay đổi giao diện

Trong quá trình xây dựng ứng dụng, em đã thực hiện các thay đổi:

Thay đổi màu nền sang tông kem và nâu.
Thay đổi màu sắc, kích thước và kiểu chữ.
Điều chỉnh khoảng cách giữa các thành phần.
Thiết kế các thẻ bánh quy có bo góc.
Thay đổi kích thước và cách hiển thị hình ảnh.
Thiết kế nút bấm với màu sắc phù hợp.
Bổ sung giao diện mô tả chi tiết từng loại bánh.
6. Chức năng điều hướng

Ứng dụng sử dụng Stack Navigation với luồng hoạt động:

HomeScreen → ListScreen → DetailScreen

Từ HomeScreen nhấn Bắt đầu khám phá để đến ListScreen.
Từ ListScreen chọn một loại bánh để đến DetailScreen.
Từ DetailScreen nhấn Quay lại danh sách để trở về ListScreen.
