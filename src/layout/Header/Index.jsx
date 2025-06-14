import { Flex, Image } from "antd";
import { useLayoutContext } from "../Index";
import Logo from "../../components/Logo";
import TopNav from "./PC/TopNav";
import GroupButton from "./GroupButton";
import Marquee from "react-fast-marquee";
import Speaker from "../../assets/speaker.gif";
import BurgerTopNav from "./Mobile/BurgerTopNav";
import { Link } from "react-router";
import UserActionDropdown from "./PC/UserActionDropDown";
import DeviceProvider from "../../contexts/ResponsiveContext";
import UserActionDrawer from "./Mobile/UserActionDrawer";

export default function BaseHeader({ ...rest }) {
  const { Header } = useLayoutContext();
  return (
    <Header {...rest}>
      <Flex
        justify="space-between"
        align="center"
        className="max-w-screen-xl mx-auto py-2 lg:px-8 px-4"
      >
        <DeviceProvider.MOBILE>
          <BurgerTopNav />
        </DeviceProvider.MOBILE>
        <Link to="/">
          <Logo />
        </Link>

        <DeviceProvider.PC>
          <TopNav />
          <UserActionDropdown />
        </DeviceProvider.PC>

        <DeviceProvider.TABLET>
          <TopNav />
          <UserActionDrawer />
        </DeviceProvider.TABLET>

        <GroupButton />
        <DeviceProvider.MOBILE>
          <UserActionDrawer />
        </DeviceProvider.MOBILE>
      </Flex>

      <div className="bg-[var(--color-brand-primary)]">
        <Flex
          className="h-[42px] max-w-screen-xl mx-auto"
          justify="center"
          align="center"
        >
          <Flex
            className="md:w-[25%] w-[15%] h-full shadow-[4px_-2px_4px_0_rgba(0,0,0,0.10)]"
            align="center"
          >
            <Flex align="center" justify="center" gap={8} className="px-4">
              <Image
                src={Speaker}
                alt="speaker icon"
                loading="lazy"
                preview={false}
                width={24}
                height={24}
                className="-rotate-12"
              />
              <span className="uppercase font-bold text-white md:block hidden lg:text-[15px] text-[12px] whitespace-nowrap">
                TIN TỨC MỚI NHẤT
              </span>
            </Flex>
          </Flex>
          <Marquee className="text-[white] overflow-hidden">
            <span>
              CASINO, TÔI CHỈ CHỌN 789BET SIÊU THƯỞNG NẠP ĐẦU TẶNG 100%, CHỈ 1
              VÒNG CƯỢC TẶNG NGAY 50K KHI TẢI APP ĐĂNG KÝ TÀI KHOẢN QUÀ TẶNG CAO
              CẤP, GIÁ TRỊ THIẾT THỰC TRAO TAY
            </span>
          </Marquee>
        </Flex>
      </div>
    </Header>
  );
}
