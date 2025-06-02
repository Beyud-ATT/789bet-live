import { Image, Typography } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import useHomeNews from "../hooks/useHomeNews";

function NewsTab() {
  const [activeTab, setActiveTab] = useState(null);
  const { data } = useHomeNews();
  const news = data?.data?.data;
  let i = 1;

  const homeNews = useMemo(() => {
    return news
      ? news?.map((item) => {
          return {
            content: item.content,
            image: item.image,
            description: "",
            id: `tab${i++}`,
          };
        })
      : [];
  }, [news, i]);

  useEffect(() => {
    setActiveTab(homeNews[0]?.id);
  }, [homeNews]);

  return (
    <div className="border p-6 border-[#333741] rounded-lg">
      <Typography.Title
        level={3}
        className="bg-[var(--color-brand-primary)] !text-white text-center py-3 mb-2 font-bold md:!text-xl !text-sm rounded-lg"
      >
        TIN TỨC
      </Typography.Title>
      <div className="flex md:flex-row flex-col gap-8 mt-4">
        {/* Left side - Tab buttons */}
        <div className="md:w-[30%] w-full">
          {homeNews.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left p-4 relative`}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 transition-opacity duration-200 ${
                  activeTab === tab.id
                    ? "bg-[var(--color-brand-primary)]"
                    : "bg-[#F2F4F7]"
                }`}
              />
              <h3
                className={`font-bold mb-1 text-[var(--color-brand-primary)] lg:text-[14px] text-[10px]`}
              >
                {tab.content}
              </h3>
              <p className="text-sm text-gray-400">{tab.description}</p>
            </button>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="bg-[#1A1A1A] text-gray-200 flex flex-col justify-center lg:p-0 md:px-4 w-full">
          <Image
            src={homeNews.find((tab) => tab.id === activeTab)?.image}
            preview={false}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsTab;
