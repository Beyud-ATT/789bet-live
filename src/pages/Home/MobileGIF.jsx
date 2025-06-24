import { Flex, Image } from "antd";
import CodeGIF from "../../assets/code.gif";
import DownLoadNow from "../../assets/download-now.gif";
import { Link } from "react-router";
import useGetGeneralLinks from "../../hooks/useGetGeneralLinks";

export default function MobileGIF() {
  const { generalLinks } = useGetGeneralLinks();
  const { linkApp } = generalLinks?.data?.data || {};
  return (
    <Flex gap={20}>
      <Link to={linkApp} target="_blank">
        <Image
          src={DownLoadNow}
          alt="download now"
          preview={false}
          loading="lazy"
        />
      </Link>
      <Link to={import.meta.env.VITE_CODE_URL} target="_blank">
        <Image src={CodeGIF} alt="insert code" preview={false} loading="lazy" />
      </Link>
    </Flex>
  );
}
