import { useNavigate, useParams } from "react-router";
import useLiveDetail from "../../hooks/useLiveDetail";
import { Avatar } from "antd";
import { useSignalR } from "../../contexts/SIgnalRContext";
import { screenType, useDevice } from "../../contexts/ResponsiveContext";
import { useCallback, useEffect } from "react";
import { FaEye } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import Countdown from "../../components/CountDown";
import { FaShare } from "react-icons/fa";
import LiveTabs from "../Live/LiveTabs";
import IdolRating from "../../components/IdolRating";
import LivestreamPlayer from "../../components/VideoPlayer";

const ViewerCount = ({ liveDetailData }) => {
  const { viewer } = useSignalR();
  const { isStreaming, viewer: liveViewer } = liveDetailData || {};

  return (
    <span className="flex items-center gap-1">
      <FaEye />
      {isStreaming && viewer !== 0
        ? viewer
        : isStreaming && liveViewer
        ? liveViewer
        : 0}
    </span>
  );
};

export default function LiveMobile() {
  const { id } = useParams();
  const { data } = useLiveDetail(id);
  const liveData = data?.data?.data;
  const isStreaming = liveData?.isStreaming;
  const navigate = useNavigate();
  const { deviceType } = useDevice();
  const isMobile = deviceType === screenType.MOBILE;

  const handleShare = useCallback(() => {
    if (navigator.share) {
      navigator.share({
        title: "789BET Live",
        text: "Hãy xem thử livestream của chúng tôi!!!",
        url: window.location.href,
      });
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      navigate(`/live/${id}`);
    }
  }, [isMobile, id, navigate]);

  return (
    <div
      className={`relative w-full h-[100dvh] overflow-hidden transition-all duration-300 ease-in-out`}
      style={{
        background:
          "radial-gradient(71.52% 71.52% at 50% 100%, #44331C 0%, #101010 100%)",
      }}
    >
      <div
        className={`w-full overflow-hidden flex flex-col justify-between h-full`}
      >
        <div className="w-full h-fit z-10 px-2 pt-3 flex items-center justify-between">
          <div className="bg-white/20 pr-2 rounded-full flex items-center gap-2">
            <div>
              <Avatar src={liveData?.avatar} />
            </div>
            <div className="flex flex-col text-white text-[9px]">
              <span>{liveData?.displayName}</span>
              <ViewerCount
                isStreaming={isStreaming}
                liveDetailData={liveData}
              />
            </div>
          </div>
          {/* {!isStreaming && <Countdown time={liveData?.scheduleTime} />} */}

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="bg-[var(--color-brand-primary)] rounded-full p-1.5 text-white flex gap-2 items-center animate-blink"
            >
              <FaShare />
              <span className="text-[10px] whitespace-nowrap">Chia sẻ</span>
            </button>
            <IoCloseSharp
              className="text-white text-2xl"
              onClick={() => navigate("/")}
            />
          </div>
        </div>

        <div className="w-full z-0 px-2">
          <LivestreamPlayer liveId={id} />
          <IdolRating />
        </div>

        <div className="z-10 mx-2">
          <LiveTabs />
        </div>
      </div>
    </div>
  );
}
