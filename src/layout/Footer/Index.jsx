import { Flex } from "antd";
import { useLayoutContext } from "../Index";
import FeedBack from "../../components/FeedBack";

export default function BaseFooter() {
  const { Footer } = useLayoutContext();

  return (
    <Footer className="!px-4">
      <Flex
        vertical
        justify="center"
        align="center"
        className="max-w-screen-xl mx-auto mt-12"
        gap={24}
      >
        <Flex
          vertical
          className="uppercase font-bold text-center text-lg text-white mx-auto mb-2"
        >
          <p>
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>{" "}
            - NỀN TẢNG GIẢI TRÍ ĐỈNH CAO
          </p>
          <p>CHO BẠN TRẢI NGHIỆM KHÔNG GIỚI HẠN</p>
        </Flex>

        <Flex
          vertical
          align="start"
          className="text-white text-justify mb-5"
          gap={3}
        >
          <p>
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>{" "}
            tự hào là đơn vị tiên phong trong việc xây dựng một môi trường cá
            cược minh bạch, an toàn và có trách nhiệm. Chúng tôi cam kết mang
            lại giá trị đích thực cho cộng đồng người chơi thông qua các hoạt
            động cụ thể và định hướng rõ ràng với những tiêu chuẩn và cam kết
            sau:
          </p>
          <p>
            ⭐ Hỗ trợ tận tâm: Đội ngũ chăm sóc khách hàng chuyên nghiệp luôn
            sẵn sàng đồng hành và hỗ trợ mọi vấn đề kịp thời, đảm bảo quyền lợi
            cho người chơi trong suốt quá trình trải nghiệm tại{" "}
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>
            .
          </p>
          <p>
            ⭐ Thương hiệu quốc tế: Hợp tác cùng huyền thoại bóng đá{" "}
            <span className="text-[var(--color-brand-primary)] font-bold">
              Luis Suárez
            </span>
            , một bước tiến khẳng định vị thế và uy tín toàn cầu của{" "}
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>
            .
          </p>
          <p>
            ⭐ Trách nhiệm xã hội:{" "}
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>{" "}
            tích cực tham gia các hoạt động thiện nguyện, lan tỏa thông điệp yêu
            thương và chia sẻ đến những hoàn cảnh khó khăn trên khắp mọi miền
            Đất Nước.
          </p>
          <p>
            ⭐ Gắn kết cộng đồng: Mỗi tháng,{" "}
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>{" "}
            chi hàng tỷ đồng để tổ chức các buổi livestream tặng code, quà tặng
            miễn phí như lời tri ân sâu sắc và là cầu nối giữa thương hiệu với
            cộng đồng đam mê cá cược trực tuyến.
          </p>
          <p>
            ⭐ Kết nối cộng đồng: Hàng tháng,{" "}
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>{" "}
            chi hàng tỷ đồng để tổ chức các buổi livestream tặng code, quà tặng
            miễn phí - như một món quà tri ân và là cầu nối gắn kết giữa chúng
            tôi với cộng đồng đam mê cá cược trực tuyến.
          </p>
          <p>
            ⭐ Hợp tác đại lý: Bước đệm tài chính bền vững, chương trình đại lý{" "}
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>{" "}
            mang đến cơ hội thu nhập hấp dẫn với hoa hồng lên đến 60%. Cam kết
            “4 KHÔNG” - Không đặt cọc, Không cần vốn, Không chờ đợi, Không rủi
            ro - giúp bạn khởi đầu dễ dàng, phát triển ổn định và bền vững.
          </p>
          <p>
            Chúng tôi hiểu rằng trong quá trình tổ chức các sự kiện, đặc biệt là
            các buổi livestream, đôi khi không thể tránh khỏi những thiếu sót
            ngoài ý muốn.{" "}
            <span className="text-[var(--color-brand-primary)] font-bold">
              789BET
            </span>{" "}
            luôn lắng nghe và trân trọng mọi ý kiến đóng góp từ khách hàng, xem
            đó là động lực để không ngừng hoàn thiện chất lượng dịch vụ và mang
            đến trải nghiệm tốt nhất cho cộng đồng người chơi.
          </p>
        </Flex>

        <Flex vertical justify="center" align="center" className="w-full">
          <p
            className="uppercase text-[var(--color-brand-primary)] text-2xl font-bold mb-3"
            style={{
              textShadow: `1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,
                       1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff`,
            }}
          >
            PHẢN HỒI KHÁCH HÀNG
          </p>
          <FeedBack />
        </Flex>
      </Flex>
    </Footer>
  );
}
