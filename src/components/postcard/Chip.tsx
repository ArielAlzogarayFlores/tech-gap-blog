import Link from "next/link";
import React from "react";

type ChipProps = {
  label: string;
  url: string;
};

const Chip: React.FC<ChipProps> = ({ label, url }) => {
  return (
    <Link href={url}>
      <div className="dark:text-Text-Relevant font-medium text-Text-Default-LT text-sm overflow-hidden overflow-ellipsis whitespace-nowrap p-[10px] dark:bg-Background-Light bg-Background-Light-LT ease-out duration-150 border dark:border-Background-Variations border-Background-Variations-LT rounded dark:hover:border-Text-Default dark:hover:bg-[#181E2B] hover:bg-[#D8E2FC]">
        {`#${label}`}
      </div>
    </Link>
  );
};
export default Chip;
