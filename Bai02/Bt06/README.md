BÀI TẬP 6: ỨNG DỤNG QUẢN LÝ THỜI KHÓA BIỂU CÁ NHÂN
1. Liên kết ứng dụng
Link ứng dụng Expo: https://snack.expo.dev/@phamhoanghai/scheduleapp
Link GitHub: Truy cập repository Bt06
3. Giới thiệu đề tài

ScheduleApp là ứng dụng quản lý thời khóa biểu cá nhân dành cho sinh viên, được xây dựng bằng React Native và Expo.

Ứng dụng được thiết kế nhằm hỗ trợ sinh viên quản lý lịch học hằng tuần một cách khoa học, thuận tiện và dễ dàng theo dõi.

Thông qua ứng dụng, người dùng có thể xem các ngày trong tuần, lựa chọn ngày muốn xem và kiểm tra thông tin các buổi học bao gồm tên môn học, phòng học, thời gian học và giảng viên phụ trách.

Giao diện sử dụng phong cách thiết kế hiện đại với tông màu xanh pastel kết hợp trắng và các màu sắc nổi bật khác nhau để phân biệt từng môn học.

3. Mục tiêu thực hiện
Xây dựng giao diện thời khóa biểu đẹp mắt, dễ sử dụng.
Hiển thị đầy đủ 7 ngày trong tuần theo hàng ngang.
Giúp người dùng dễ dàng lựa chọn ngày muốn xem.
Hiển thị thông tin chi tiết của từng buổi học.
Sử dụng màu sắc để phân biệt các môn học.
Cập nhật danh sách lịch học khi người dùng thay đổi ngày.
Hiển thị thông báo khi ngày được chọn không có lịch học.
4. Các chức năng chính của ứng dụng
4.1. Header – Thông tin ứng dụng

Phần Header nằm ở đầu giao diện, hiển thị tên ứng dụng ScheduleApp và thông tin sinh viên thực hiện.

Thông tin sinh viên được trình bày cùng biểu tượng tốt nghiệp, tạo điểm nhấn cho giao diện.

4.2. Hiển thị lịch 7 ngày trong tuần

Ứng dụng hiển thị 7 ngày từ thứ Hai đến Chủ nhật theo hàng ngang.

Mỗi ngày bao gồm tên thứ và ngày trong tháng. Ngày hiện tại được tự động xác định và làm nổi bật trên giao diện.

Người dùng có thể nhấn vào từng ngày để xem thời khóa biểu tương ứng.

4.3. Hiển thị danh sách lịch học

Ứng dụng cung cấp danh sách các buổi học trong tuần.

Mỗi buổi học hiển thị đầy đủ các thông tin:

Tên môn học.
Phòng học.
Giờ bắt đầu và kết thúc.
Tên giảng viên phụ trách.

Các buổi học được thiết kế dưới dạng thẻ thông tin riêng biệt, giúp người dùng dễ dàng quan sát.

4.4. Phân biệt môn học bằng màu sắc

Mỗi môn học được sử dụng một màu sắc riêng để tạo sự khác biệt.

Một số màu sắc được sử dụng:

Xanh dương: Lập trình React Native.
Cam: Cơ sở dữ liệu.
Tím: Thiết kế giao diện UI/UX.
Vàng: Lập trình JavaScript.
Xanh lá: Tiếng Anh chuyên ngành.
Hồng: Phát triển ứng dụng.
4.5. Chức năng lựa chọn ngày

Khi người dùng nhấn chọn một ngày bất kỳ trong tuần, ứng dụng sẽ tự động cập nhật danh sách lịch học theo ngày được chọn.

Thông tin ngày đang xem được hiển thị rõ ràng để người dùng dễ dàng nhận biết.

4.6. Thông báo khi không có lịch học

Nếu ngày được chọn không có buổi học nào, ứng dụng sẽ hiển thị thông báo:

Hôm nay chưa có lịch học!

Thông báo giúp người dùng biết được ngày đã chọn hiện không có lịch học và có thể chủ động sắp xếp thời gian cá nhân.

5. Giới thiệu các thành phần giao diện
5.1. Header.js

Đây là component chịu trách nhiệm hiển thị phần đầu ứng dụng.

Các thông tin bao gồm:

Tên ứng dụng ScheduleApp.
Tên sinh viên Phạm Hoàng Hải.
Biểu tượng đại diện.
Lời chào người dùng.

Hình ảnh giao diện:

<img width="326" height="329" alt="image" src="https://github.com/user-attachments/assets/ff7e8b73-a286-4899-982f-7fbaa780e62b" />


!Header

5.2. WeekCalendar.js

Component hiển thị 7 ngày trong tuần theo hàng ngang.

Các chức năng:

Hiển thị thứ và ngày trong tháng.
Làm nổi bật ngày đang được chọn.
Cho phép người dùng nhấn chọn ngày.
Cập nhật trạng thái ngày được chọn.

Hình ảnh giao diện:

<img width="325" height="209" alt="image" src="https://github.com/user-attachments/assets/6d3ae2c4-47a8-4266-a171-b64aba21a845" />


!WeekCalendar

5.3. ScheduleList.js

Component chịu trách nhiệm hiển thị danh sách lịch học theo ngày được lựa chọn.

Các chức năng:

Hiển thị tên môn học.
Hiển thị thời gian học.
Hiển thị phòng học.
Hiển thị tên giảng viên.
Sử dụng màu sắc riêng cho từng môn.
Hiển thị thông báo khi không có lịch học.

Hình ảnh giao diện:

<img width="288" height="157" alt="image" src="https://github.com/user-attachments/assets/a89cbecd-f82b-4b54-aee6-f35fa67f8348" />


!ScheduleList

6. Hình ảnh kết quả thực hiện
6.1. Giao diện chính của ứng dụng

Hiển thị Header, thông tin sinh viên, lịch 7 ngày trong tuần và danh sách lịch học.

!AppScreen

6.2. Giao diện khi thay đổi ngày

Khi lựa chọn một ngày khác, danh sách môn học được cập nhật theo ngày tương ứng.

!ChangeDay

6.3. Giao diện khi ngày không có lịch học

Khi chọn ngày không có lịch học, ứng dụng hiển thị thông báo để người dùng nhận biết.

!EmptySchedule

9. Kết quả đạt được

Sau khi hoàn thành bài tập, em đã xây dựng được ứng dụng ScheduleApp với các chức năng:

Thiết kế Header hiển thị tên ứng dụng và tên sinh viên.
Hiển thị 7 ngày trong tuần theo hàng ngang.
Hiển thị nhiều lịch học với đầy đủ thông tin.
Phân biệt các môn học bằng màu sắc.
Cho phép lựa chọn ngày để xem lịch học.
Tự động cập nhật danh sách lịch học theo ngày được chọn.
Hiển thị thông báo khi ngày được chọn không có lịch học.
Tự động xác định ngày hiện tại theo thời gian của thiết bị.
