import { Image } from "antd";
import PlaceHolderFlagImg from "../../../assets/placeholder-flag.png";

export default function PlaceHolderFlag() {
  return (
    <Image
      src={PlaceHolderFlagImg}
      alt="placeholder flag"
      loading="lazy"
      preview={false}
      width={30}
      height={30}
      className="block md:hidden"
    />
  );
}
