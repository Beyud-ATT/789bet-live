import { Flex, Image } from "antd";
import { EmptyStar, FilledStar } from "../../../utils/svg";
import Img from "../../../assets/image.svg";
import usePresentCommentsGet from "../../../hooks/usePresentCommentsGet";
import moment from "moment/moment";

function RattingCommentItems({
  avatar,
  displayName,
  createdAt,
  comment,
  rate,
}) {
  return (
    <Flex justify="space-between" className="md:flex-row flex-col gap-2">
      <Flex gap={20}>
        <Image
          src={avatar ?? Img}
          loading="lazy"
          preview={false}
          alt="user avatar"
          className="lg:!w-[111px] lg:!h-[111px] !w-[60px] !h-[60px] rounded-full border-[2px] border-[var(--color-brand-primary)]"
        />
      </Flex>
      <Flex className="w-[65%] max-[426px]:w-full">
        <Flex vertical gap={10}>
          <Flex align="end" className="md:gap-7 gap-2">
            <p className="text-[var(--color-brand-primary)] lg:text-3xl text-[17px] font-semibold">
              {displayName}
            </p>
            <p className="lg:text-lg text-sm">
              {moment(createdAt).format("DD/MM/YYYY")}
            </p>
          </Flex>
          <p className="text-white md:text-lg text-sm">{comment}</p>
        </Flex>
      </Flex>
      <Flex gap={10} className="w-[20%] max-[426px]:w-full">
        {Array.from({ length: 5 }).map((_, index) =>
          index < rate ? (
            <FilledStar
              key={index}
              className="lg:w-[34px] lg:h-[46px] w-[27px] h-[29px]"
            />
          ) : (
            <EmptyStar
              key={index}
              className="lg:w-[34px] lg:h-[46px] w-[27px] h-[29px]"
            />
          )
        )}
      </Flex>
    </Flex>
  );
}

export default function RatingComment() {
  const { data: comments } = usePresentCommentsGet();
  console.log(comments);
  return (
    <Flex className="w-full" vertical gap={30}>
      {comments?.data?.data?.map((cmt) => (
        <RattingCommentItems key={cmt.id} {...cmt} />
      ))}
    </Flex>
  );
}
