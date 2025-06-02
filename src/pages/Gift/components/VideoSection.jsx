import { Typography } from "antd";
import { useEffect, useRef, useState } from "react";
const { Title } = Typography;

const videos = [
  {
    code: "SSMkjlhdhl4",
    title:
      "2 🎉 Khoảnh Khắc Anh [*ucnt1] Nhận iPhone Chính Hãng Tại LIVE 789BET 23/02/2025",
    description:
      "https://newlive.sgp1.cdn.digitaloceanspaces.com/newlive/image_2025-05-06_22-28-15.png",
  },
  {
    code: "vzpAZdWyikY",
    title:
      "3 🎉 Chúc mừng khách hàng  [*tin71] Trúng Tivi Samsung Smart 4K Tại Phiên LIVE 789BET 09/03/2025",
    description:
      "https://newlive.sgp1.cdn.digitaloceanspaces.com/newlive/image_2025-05-06_22-31-26.png",
  },
  {
    code: "IauR7au42vE",
    title: "4 🎉Chủ Nhân Xe Máy VISION Đã Lộ Diện Tại LIVE 789BET 23/03/2025",
    description:
      "https://newlive.sgp1.cdn.digitaloceanspaces.com/newlive/image_2025-05-06_22-47-48.png",
  },
  {
    code: "JzOhuRiCpkI",
    title:
      "5 🎉 Chúc mừng khách hàng [*em03] Nhận Ghế Massage Cao Cấp Tại Phiên LIVE 789BET 30/03/2025",
    description:
      "https://newlive.sgp1.cdn.digitaloceanspaces.com/newlive/image_2025-05-06_22-34-07.png",
  },
  {
    code: "6yO9wP5HuvA",
    title:
      "6 🎉 Chúc mừng khách hàng [An****5cp] Rinh Xe Honda Tay Ga Tại LIVE 789BET Cùng Idol LYTA 13/04/2025",
    description:
      "https://newlive.sgp1.cdn.digitaloceanspaces.com/newlive/image_2025-05-06_22-35-13.png",
  },
  {
    code: "jCxFIk5iuj8",
    title:
      "7 🎉 Chúc mừng khách hàng] Rinh Xe Honda Tay Ga Tại LIVE 789BET trong  phiên Live ngày 20.04",
    description:
      "https://newlive.sgp1.cdn.digitaloceanspaces.com/newlive/image_2025-05-06_22-43-10.png",
  },
];

const VideoSection = () => {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState("SSMkjlhdhl4");

  useEffect(() => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("videoId", selectedVideo);
  return (
    <div className="bg-[var(--color-brand-primary)] py-4 px-3 rounded-2xl">
      <div className="max-w-7xl mx-auto">
        <span className="w-[100%] mx-auto block text-white text-xl lg:text-2xl text-center font-bold mb-6">
          Tổng Hợp Giải Thưởng Trao Tặng Khách Hàng Qua Các Phiên Livestream
        </span>

        <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row      gap-2 rounded-xl bg-white">
          {/* Video Player */}
          <div ref={divRef} className="lg:w-2/3 overflow-hidden">
            <div className="relative rounded-lg w-full aspect-video">
              <iframe
                className="absolute rounded-lg top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="Video player"
                allowFullScreen
              />
            </div>
          </div>

          {/* Video List */}
          <div
            className="lg:w-1/3 py-[8px] grid grid-cols-1 gap-4 pl-2 overflow-y-auto scrollbar-custom"
            style={{
              height: width >= 768 ? `${width * 0.5625}px` : `${400}px`,
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
                onClick={() => setSelectedVideo(video.code)}
              >
                <div className="relative w-32 h-20 shrink-0">
                  <img
                    src={video.description}
                    alt={video.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <Title
                    level={5}
                    className="!text-orange-500 !mb-1 line-clamp-5"
                  >
                    {video.title}
                  </Title>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
