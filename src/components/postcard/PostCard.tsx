import Link from "next/link";
import React from "react";
import Chip from "./Chip";
import ViewCounter from "./ViewCounter";

type PostCardProps = {
  title: string;
  author: string;
  authorcontact: string;
  date: string;
  readtime: number;
  views: string;
  likes: number;
  tag: any;
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  author,
  authorcontact,
  date,
  readtime,
  views,
  likes,
  tag,
}) => {
  return (
    <div className="flex w-[100%] colum flex-col p-[30px] ease-out duration-150 rounded gap-[15px] border dark:border-Background-Light border-Extras-LT dark:bg-Background-Default bg-Background-Default-LT">
      <div className="text-sm font-medium dark:text-Text-Default text-Text-Default-LT ">
        {date} · {readtime} mins ·{"  "}
        <ViewCounter slug={views} blogPage={false} />
      </div>
      <Link href={`/${tag}/${views}`}>
        <h2 className="text-xl font-black dark:text-Text-Relevant text-Text-Relevant-LT hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm font-medium dark:text-Text-Default text-Text-Default-LT">
        Written by{" "}
        <a
          href={authorcontact}
          className="text-base font-medium text-CTA-Default hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {author}
        </a>
      </p>
      <div className="flex justify-between items-end">
        <div className="flex overflow-hidden mr-[15px] gap-[15px]">
          <div className="w-full">
            <Chip label={tag} url={`/${tag}`} />
          </div>
        </div>
        <div className="flex gap-[15px]">
          <button className="group" title="Save">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_5_356)">
                <path
                  d="M22 17V23.97L17 21.83L12 23.97V11H18V9H12C10.9 9 10 9.9 10 11V27L17 24L24 27V17H22ZM26 13H24V15H22V13H20V11H22V9H24V11H26V13Z"
                  className="dark:fill-[#5A6280] fill-Text-Default-LT group-hover:fill-Save ease-out duration-150"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_356">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="group" title="Copy URL">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5427 17.4936L22.8508 20.1855C22.3888 20.6476 21.8403 21.0141 21.2367 21.2641C20.633 21.5142 19.986 21.6429 19.3326 21.6429C18.6792 21.6429 18.0323 21.5142 17.4286 21.2641C16.825 21.0141 16.2765 20.6476 15.8145 20.1855C15.7006 20.0907 15.6077 19.9732 15.5418 19.8405C15.4758 19.7078 15.4383 19.5628 15.4315 19.4147C15.4248 19.2667 15.4489 19.1189 15.5025 18.9807C15.5561 18.8425 15.6379 18.7171 15.7427 18.6123C15.8475 18.5075 15.9729 18.4257 16.1111 18.3721C16.2493 18.3186 16.3971 18.2944 16.5451 18.3011C16.6932 18.3079 16.8382 18.3454 16.9709 18.4114C17.1036 18.4773 17.2211 18.5702 17.3159 18.6841C17.8515 19.2141 18.5746 19.5115 19.3282 19.5115C20.0817 19.5115 20.8049 19.2141 21.3405 18.6841L24.0324 15.9922C24.5661 15.4585 24.8659 14.7346 24.8659 13.9799C24.8659 13.2251 24.5661 12.5013 24.0324 11.9676C23.4987 11.4339 22.7749 11.1341 22.0201 11.1341C21.2654 11.1341 20.5415 11.4339 20.0078 11.9676L19.155 12.8294C18.9547 13.0296 18.683 13.1422 18.3998 13.1422C18.1166 13.1422 17.8449 13.0296 17.6446 12.8294C17.4443 12.6291 17.3318 12.3574 17.3318 12.0742C17.3318 11.791 17.4443 11.5193 17.6446 11.319L18.5064 10.4573C19.4395 9.5242 20.705 9 22.0246 9C23.3441 9 24.6097 9.5242 25.5427 10.4573C26.4758 11.3903 27 12.6559 27 13.9754C27 15.295 26.4758 16.5605 25.5427 17.4936ZM16.845 23.1706L15.9922 24.0324C15.4585 24.5661 14.7346 24.8659 13.9799 24.8659C13.2251 24.8659 12.5013 24.5661 11.9676 24.0324C11.4339 23.4987 11.1341 22.7749 11.1341 22.0201C11.1341 21.2654 11.4339 20.5415 11.9676 20.0078L14.6595 17.3159C15.1951 16.7859 15.9183 16.4885 16.6718 16.4885C17.4254 16.4885 18.1485 16.7859 18.6841 17.3159C18.8885 17.486 19.1491 17.5736 19.4147 17.5615C19.6804 17.5494 19.9319 17.4384 20.12 17.2504C20.308 17.0623 20.419 16.8108 20.4311 16.5451C20.4433 16.2795 20.3557 16.0189 20.1855 15.8145C19.7241 15.3514 19.1758 14.9839 18.5721 14.7332C17.9684 14.4825 17.3211 14.3534 16.6674 14.3534C16.0136 14.3534 15.3663 14.4825 14.7626 14.7332C14.1589 14.9839 13.6106 15.3514 13.1492 15.8145L10.4573 18.5064C9.5242 19.4395 9 20.705 9 22.0246C9 23.3441 9.5242 24.6097 10.4573 25.5427C11.3903 26.4758 12.6559 27 13.9754 27C15.295 27 16.5605 26.4758 17.4936 25.5427L18.3554 24.681C18.5557 24.4807 18.6682 24.209 18.6682 23.9258C18.6682 23.6426 18.5557 23.3709 18.3554 23.1706C18.1551 22.9704 17.8834 22.8578 17.6002 22.8578C17.317 22.8578 17.0453 22.9704 16.845 23.1706Z"
                className="dark:fill-[#5A6280] fill-Text-Default-LT group-hover:fill-Share ease-out duration-150"
              />
            </svg>
          </button>
          <button className="flex items-center group" title="Likes">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0766 27C17.8913 26.9991 17.709 26.9527 17.5458 26.865C17.1589 26.6401 8 21.4399 8 14.7642C7.99876 13.5941 8.35403 12.4513 9.0185 11.4882C9.68297 10.5251 10.6251 9.78724 11.7194 9.37297C12.8137 8.95869 14.0083 8.88765 15.144 9.16928C16.2797 9.45092 17.3026 10.0719 18.0766 10.9495C18.8505 10.0719 19.8735 9.45092 21.0092 9.16928C22.1449 8.88765 23.3394 8.95869 24.4337 9.37297C25.5281 9.78724 26.4702 10.5251 27.1347 11.4882C27.7991 12.4513 28.1544 13.5941 28.1531 14.7642C28.1531 21.4399 18.9943 26.6401 18.6074 26.865C18.4441 26.9527 18.2619 26.9991 18.0766 27ZM13.758 11.1654C12.8036 11.1654 11.8882 11.5445 11.2133 12.2194C10.5384 12.8943 10.1593 13.8097 10.1593 14.7642C10.1593 19.3706 16.2232 23.5092 18.0766 24.6608C19.9299 23.5092 25.9939 19.3706 25.9939 14.7642C25.9931 13.933 25.7045 13.1277 25.1773 12.4851C24.6501 11.8425 23.9168 11.4022 23.1018 11.239C22.2868 11.0758 21.4404 11.1998 20.7064 11.5898C19.9724 11.9798 19.3961 12.6119 19.0752 13.3786C18.9939 13.5766 18.8555 13.746 18.6777 13.8652C18.4999 13.9844 18.2906 14.048 18.0766 14.048C17.8625 14.048 17.6533 13.9844 17.4754 13.8652C17.2976 13.746 17.1593 13.5766 17.0779 13.3786C16.8056 12.7227 16.3448 12.1623 15.7538 11.7683C15.1628 11.3743 14.4683 11.1645 13.758 11.1654Z"
                className="dark:fill-[#5A6280] fill-Text-Default-LT group-hover:fill-Love ease-out duration-150"
              />
            </svg>
            <span className="text-Text-Default-LT text-sm font-medium group-hover:text-Love ease-out duration-150">
              {likes}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
