import { Avatar, Typography } from "antd";
import { FaShare } from "react-icons/fa";
import { useParams } from "react-router";
import ViewerCount from "./ViewerCount";
import useLiveDetail from "../../hooks/useLiveDetail";

export default function Header() {
  const { id } = useParams();
  const { data: liveData } = useLiveDetail(id);
  const liveDetailData = liveData?.data?.data;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "789BET Live",
        text: "Hãy xem thử livestream của chúng tôi!!!",
        url: window.location.href,
      });
    }
  };

  return (
    <div
      className={`bg-[var(--lighter-background)] w-full px-4 h-[85px] flex items-center justify-between`}
    >
      <div className="flex">
        <Avatar
          src={liveDetailData?.avatar}
          className="md:!w-16 md:!h-16 !w-12 !h-12"
        />
        <div className="flex flex-col justify-center ml-4">
          <Typography.Title
            level={2}
            className="!text-[var(--color-brand-primary)] !font-bold xl:!text-[1.0rem] lg:!text-[.7rem] !text-[.5rem]"
          >
            {liveDetailData?.title}
          </Typography.Title>
          <div className="flex items-center justify-start md:space-x-4 space-x-2">
            <Typography.Title
              level={3}
              className="!text-[var(--color-brand-primary)] !font-bold xl:!text-[.8rem] !text-[.4rem] !m-0"
            >
              {liveDetailData?.displayName}
            </Typography.Title>

            <ViewerCount />
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleShare}
        className={`bg-[var(--color-brand-primary)] min-w-[70px] 
              text-white xl:text-base 
              flex  items-center space-x-2 rounded-full 
              py-1 px-2 animate-blink`}
      >
        <FaShare />
        <span className="whitespace-nowrap">Chia sẻ</span>
      </button>
    </div>
  );
}
