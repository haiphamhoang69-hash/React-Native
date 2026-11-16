PRODUCTAPP – ỨNG DỤNG BÁN SÁCH
1. Link ứng dụng Expo
Tên ứng dụng: ProductApp
Link ứng dụng: https://snack.expo.dev/@phamhoanghai/productapp
2. Mô tả cách thực hiện
Bước 1: Xây dựng giao diện chính (App.js)

Đầu tiên, tạo giao diện chính cho ứng dụng bán sách bằng React Native. Sử dụng các thành phần View, Text, ScrollView và TextInput để bố trí giao diện.

Thiết kế giao diện theo tông màu kem kết hợp xanh rêu và nâu, tạo cảm giác nhẹ nhàng và gần gũi.

Bước 2: Tạo thành phần Header

Tách phần đầu trang thành component Header.js.

Thành phần này dùng để hiển thị tên cửa hàng Tiệm Sách Nhỏ và biểu tượng sách.

Trong App.js, sử dụng:

jsx
<Header />

Bước 3: Tạo thành phần Category

Tạo file Category.js để hiển thị các danh mục sách gồm Tất cả, Văn học và Kỹ năng.

Sử dụng props để truyền danh sách danh mục và trạng thái được chọn từ App.js. Khi nhấn vào danh mục, ứng dụng sẽ lọc và hiển thị những sản phẩm phù hợp.

Bước 4: Tạo thành phần ProductCard

Tạo file ProductCard.js để hiển thị thông tin của từng cuốn sách.

Mỗi sản phẩm bao gồm:

Hình ảnh sách.
Tên sách.
Giá bán.
Mô tả sản phẩm.
Nút thêm sản phẩm.

Sử dụng props để nhận dữ liệu từ App.js:

jsx
export default function ProductCard({ product }) {


Nhờ đó, có thể sử dụng lại một component để hiển thị nhiều sản phẩm khác nhau.

Bước 5: Tạo danh sách sản phẩm

Trong App.js, tạo danh sách gồm 6 cuốn sách với các thông tin như tên, hình ảnh, giá, mô tả và danh mục.

Sử dụng hàm map() để duyệt danh sách và hiển thị từng sản phẩm thông qua ProductCard:

jsx
{filteredProducts.map(product => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}

Bước 6: Tạo chức năng tìm kiếm và lọc sản phẩm

Sử dụng useState để lưu nội dung tìm kiếm và danh mục được chọn.

Tìm kiếm: Cho phép nhập tên sách để tìm sản phẩm.
Lọc danh mục: Hiển thị sách theo danh mục Văn học hoặc Kỹ năng.
Khi chọn Tất cả, ứng dụng hiển thị toàn bộ sản phẩm.
Bước 7: Hoàn thiện ứng dụng

Sau khi hoàn thành các component, tiến hành chạy ứng dụng trên Expo Snack để kiểm tra giao diện, hình ảnh và các chức năng tìm kiếm, lọc sản phẩm.

3. Hình ảnh minh họa

<img width="323" height="630" alt="image" src="https://github.com/user-attachments/assets/d606065f-051c-4bf3-8524-e0b4f69af90c" />


4. Kết quả thực hiện

Hoàn thành ứng dụng bán sách ProductApp bằng React Native trên Expo Snack. Ứng dụng có 6 sản phẩm, hiển thị đầy đủ thông tin, sử dụng component ProductCard nhận dữ liệu qua props và hàm map() để kết xuất danh sách sản phẩm.

Qua bài thực hành, hiểu thêm cách chia component, truyền dữ liệu bằng props và quản lý trạng thái bằng useState trong React Native.
