import { Flex } from "antd";
import { useLayoutContext } from "../Index";
import FeedBack from "../../components/FeedBack";

export default function MobileFooter() {
  const { Footer } = useLayoutContext();

  return (
    <Footer className="lg:hidden block px-6">
      <p className="uppercase font-bold text-center text-lg text-white w-[80%] mx-auto mb-2">
        789BET - NỀN TẢNG CÁ CƯỢC TRỰC TUYẾN CHẤT LƯỢNG CAO
      </p>

      <Flex
        vertical
        align="center"
        className="text-white text-justify mb-5"
        gap={3}
      >
        <p>
          Hiện nay, thị trường cá cược trực tuyến đang đối mặt với tình trạng
          nhiều nhà cái mạo danh, thiếu uy tín, lợi dụng lòng tin của người chơi
          để lừa đảo - yêu cầu nạp tiền nhưng không cho rút tiền. Điều này đã
          gây ra không ít bức xúc và tranh cãi trong cộng đồng đam mê cá cược.
        </p>
        <p>
          Với mong muốn tạo ra sự khác biệt và mang đến những giá trị đẳng cấp,
          789BET tự hào là đơn vị tiên phong trong việc xây dựng một môi trường
          giải trí lành mạnh, minh bạch và trách nhiệm. Bên cạnh việc cung cấp
          dịch vụ cá cược chất lượng, chúng tôi còn chú trọng đến các hoạt động
          ý nghĩa hướng đến cộng đồng và khách hàng:
        </p>
        <p>
          ⭐Hỗ trợ tận tâm: Luôn đồng hành và hỗ trợ khách hàng trong mọi tình
          huống, đặc biệt là xử lý khiếu nại khi người chơi gặp khó khăn trong
          quá trình tham gia tại 789BET.
        </p>
        <p>
          ⭐️Thương hiệu quốc tế - Hợp tác cùng huyền thoại bóng đá RONALDINHO,
          khẳng định vị thế toàn cầu.
        </p>
        <p>
          ⭐Hoạt động thiện nguyện: Chung tay giúp đỡ những hoàn cảnh khó khăn,
          lan tỏa tinh thần nhân ái đến cộng đồng.
        </p>
        <p>
          ⭐Kết nối cộng đồng: Hàng tháng, 789BET chi hàng tỷ đồng để tổ chức
          các buổi livestream tặng code, quà tặng miễn phí – như một món quà tri
          ân và là cầu nối gắn kết giữa chúng tôi với cộng đồng đam mê cá cược
          trực tuyến.
        </p>
        <p>
          Chúng tôi hiểu rằng không thể tránh khỏi những thiếu sót trong quá
          trình tổ chức các sự kiện, đặc biệt là các buổi phát trực tiếp. 789BET
          luôn trân trọng mọi góp ý từ khách hàng để ngày càng hoàn thiện và
          phục vụ tốt hơn.
        </p>
      </Flex>

      <Flex vertical justify="center" align="center">
        <p
          className="uppercase text-[var(--color-brand-primary)] text-2xl font-bold mb-3"
          style={{
            textShadow: `2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff`,
          }}
        >
          PHẢN HỒI KHÁCH HÀNG
        </p>
        <FeedBack />
      </Flex>
    </Footer>
  );
}
