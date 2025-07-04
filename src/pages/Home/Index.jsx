// import IdolHot from "../../components/IdolTop";
import NewsTab from "../../components/NewsTab";
// import OnlineTable from "../../components/OnlineTable";
// import PromotionSlider from "../../components/PromotionSlide";
// import TopInteraction from "../../components/TopInteraction";
import BannerSection from "./BannerSection";
import LiveSection from "./LiveSection";
import MobileGIF from "./MobileGIF";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <BannerSection />
      </div>
      <div>
        <LiveSection />
      </div>
      {/* <div className="mt-16">
        <TopInteraction />
      </div>
      <div className="mt-11">
        <OnlineTable />
      </div> */}
      {/* <div className="mt-3">
        <PromotionSlider />
      </div> */}
      {/* <div>
        <IdolHot />
      </div> */}
      <div className="md:hidden block mt-2">
        <MobileGIF />
      </div>
      <div className="md:mt-8 mt-3">
        <NewsTab />
      </div>
    </div>
  );
}
