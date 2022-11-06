import hoalac1 from "../../assets/du-an-hoa-lac/hoalac1.jpg";
import hoalac2 from "../../assets/du-an-hoa-lac/hoalac2.jpg";
import hoalac3 from "../../assets/du-an-hoa-lac/hoalac3.jpg";
import codong1 from "../../assets/du-an-co-dong/codong1.jpg";
import codong2 from "../../assets/du-an-co-dong/codong2.jpg";
import codong3 from "../../assets/du-an-co-dong/codong3.jpg";
import baidai1 from "../../assets/du-an-bai-dai/baidai1.jpg";
import baidai2 from "../../assets/du-an-bai-dai/baidai2.jpg";
import baidai3 from "../../assets/du-an-bai-dai/baidai3.jpg";
import phuctien1 from "../../assets/du-an-phuc-tien/phuctien1.jpg";
import phuctien2 from "../../assets/du-an-phuc-tien/phuctien2.jpg";
import phuctien3 from "../../assets/du-an-phuc-tien/phuctien3.jpg";

export const data: {
  id: number;
  thumbnailImg: string;
  imgUrl: string[];
  title: string;
  titleContent: string;
  content: string[];
}[] = [
  {
    id: 1,
    thumbnailImg: baidai1,
    imgUrl: [baidai2, baidai3],
    title: "Dự án đất nền Bãi Dài",
    titleContent: `
    Vị trí: Bãi Dài, xã Tiến Xuân, huyện Thạch Thất, Hà Nội.
    Phát triển cùng với khu Đô thị sinh thái và đón sóng Siêu dự án Đô thị Đại học Quốc Gia Hà Nội cơ sở tại Hòa Lạc.
    Đất nền Bãi Dài tự tin trở thành nước cờ đầu tư sinh lời số 1 tại Hòa Lạc.`,
    content: [
      "Vị trí: Bãi Dài, xã Tiến Xuân, huyện Thạch Thất, Hà Nội",
      "Với vị trí độc tôn, nằm trên trục huyết mạch của lõi Đô thị sinh thái",
      `Phong thủy vượng khí dồi dào với địa thế "Tựa Sơn Nghinh Thủy"`,
      "Nằm trên mặt đường Bãi Dài quy hoạch mở rộng 24m",
      "Giao thông thuận tiện kết nối ra các tuyến đường Đại lộ Thăng Long kéo dài, cao tốc Hòa Lạc - Hòa Bình...",
      "Phát triển cùng với khu Đô thị sinh thái và đón sóng Siêu dự án Đô thị Đại học Quốc Gia Hà Nội cơ sở tại Hòa Lạc",
      "Đất nền Bãi Dài tự tin trở thành nước cờ đầu tư sinh lời số 1 tại Hòa Lạc",
    ],
  },
  {
    id: 2,
    thumbnailImg: codong1,
    imgUrl: [codong2, codong3],
    title: "Dự án đất nền Cổ Đông",
    titleContent: `Sở hữu vị trí đặc biệt hiếm hoi tại vùng phát triển nhất xã Phúc Tiến. Nằm tại "tọa độ vàng" trung tâm ngã Tư, là nơi giao thoa 2 trục đường huyết mạch quan trọng là Tỉnh lộ 420 và trục Hồ Tây - Ba Vì.`,
    content: [
      "5 phút: đến Bến Du Thuyền, Sân Golf Long Thành, Khu vui chơi giải trí Sơn Tiên",
      "7 phút: đến Trung Tâm Đại Học Quốc Gia Tp.HCM",
      "10 phút: đến bệnh viện Shing Mark, Tp. Biên Hòa, Khu công nghệ cao",
      "15 phút: đến Trung Tâm Tài Chính Thủ Thiêm Big C – Aeon Mall – Lotte Mart – Nguyễn Kim",
      "20 phút: đến trung tâm Tp.HCM",
      "Cách Sân bay quốc tế Long Thành: 15 km",
      "Cách trạm cuối tuyến Metro Bến Thành – Suối Tiên: 6 km",
    ],
  },
  {
    id: 3,
    thumbnailImg: hoalac1,
    imgUrl: [hoalac2, hoalac3],
    title: "Dự án đất nền khu công nghệ cao Hòa Lạc",
    titleContent: `Sở hữu vị trí kim cương sát vách với khu Công Nghệ Cao Hòa Lạc, phân khu Tân Xã phát triển song song cùng với sự phát triển của Thành phố Khoa học Công Nghệ Cao.`,
    content: [
      "5 phút: đến Bến Du Thuyền, Sân Golf Long Thành, Khu vui chơi giải trí Sơn Tiên",
      "7 phút: đến Trung Tâm Đại Học Quốc Gia Tp.HCM",
      "10 phút: đến bệnh viện Shing Mark, Tp. Biên Hòa, Khu công nghệ cao",
      "15 phút: đến Trung Tâm Tài Chính Thủ Thiêm Big C – Aeon Mall – Lotte Mart – Nguyễn Kim",
      "20 phút: đến trung tâm Tp.HCM",
      "Cách Sân bay quốc tế Long Thành: 15 km",
      "Cách trạm cuối tuyến Metro Bến Thành – Suối Tiên: 6 km",
    ],
  },
  {
    id: 4,
    thumbnailImg: phuctien1,
    imgUrl: [phuctien2, phuctien3],
    title: "Dự án siêu mỏ vàng Phúc Tiến",
    titleContent: `Với vị trí đắc địa nằm trên mặt đường trục chính, Đất nền Cổ Đông trở thành 1 trong những lựa chọn hàng đầu của các nhà đầu tư sáng giá.`,
    content: [
      "5 phút: đến Bến Du Thuyền, Sân Golf Long Thành, Khu vui chơi giải trí Sơn Tiên",
      "7 phút: đến Trung Tâm Đại Học Quốc Gia Tp.HCM",
      "10 phút: đến bệnh viện Shing Mark, Tp. Biên Hòa, Khu công nghệ cao",
      "15 phút: đến Trung Tâm Tài Chính Thủ Thiêm Big C – Aeon Mall – Lotte Mart – Nguyễn Kim",
      "20 phút: đến trung tâm Tp.HCM",
      "Cách Sân bay quốc tế Long Thành: 15 km",
      "Cách trạm cuối tuyến Metro Bến Thành – Suối Tiên: 6 km",
    ],
  },
];
