'use client';

import ScrapButton from '@/app/vulnerability-db/_components/ScrapButton';
import { ShareIcon } from '@/public/index';
import type { LabelType } from '@/types/articleCard';
import { formatDistanceToNowStrict } from 'date-fns';
import { ko } from 'date-fns/locale/ko';
import SuggestionChip from '../Chips/SuggestionChip';

type ArticleCardProps = {
  id: string;
  label: LabelType;
  title: string;
  company: string;
  content: string;
  date: Date;
  isScrapped: boolean;
};

export default function ArticleCard({
  label,
  title,
  company,
  content,
  date,
  id,
  isScrapped,
}: ArticleCardProps) {
  // const [isScrapped, setIsScrapped] = useState(false)
  const timeDifference = formatDistanceToNowStrict(date, { addSuffix: true, locale: ko });
  // const session = useSession();

  // const checkScrapped = async () => {
  //   const response = await (
  //     await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/scrap?userId=${session?.data?.user.id}&articleId=${id}`,
  //       {
  //         cache: 'no-cache',
  //       },
  //     )
  //   ).json();
  // };
  // useEffect(() => {}, []);

  return (
    <article className="flex h-fit w-[86.5rem] gap-[2.4rem] rounded-[0.8rem] border-[0.1rem] border-[#c3c3c3] p-[2.8rem] hover:shadow-button active:bg-purple-dark">
      <div className="flex w-full flex-col gap-[2.4rem]">
        <div className="flex flex-col">
          <div className="flex items-center gap-[0.8rem]">
            {label !== '' && <SuggestionChip variant={label} />}
            <div className="w-full">
              <h1 className="line-clamp-1 text-[2rem] font-regular leading-[2.42rem]">{title}</h1>
            </div>
          </div>
          <address className="mt-[0.8rem] text-[1.6rem] font-regular not-italic leading-[1.946rem] text-[#adadad]">
            {company}
          </address>
        </div>
        <div className="h-fit w-full rounded-[1.6rem] bg-gray-light p-[2rem]">
          <span className="line-clamp-2 text-[1.6rem] font-regular leading-[1.936rem] text-[#797979]">
            {content}
          </span>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-[1.2rem]">
            <ScrapButton articleId={id} isScrapped={isScrapped} />
            <button type="button">
              <ShareIcon />
            </button>
          </div>
          <span className="text-[1.6rem] font-regular leading-[1.936rem] text-[#a2a2a2]">
            {timeDifference}
          </span>
        </div>
      </div>
    </article>
  );
}
