import Link from "next/link";
import React from "react";

type ChipProps = {
  label: string;
};

const Chip: React.FC<ChipProps> = ({ label }) => {
  return (
    <Link href="#">
      <div className="text-Text-Relevant text-sm overflow-hidden overflow-ellipsis whitespace-nowrap p-[10px] bg-Background-Light ease-out duration-150 border border-Background-Variations rounded hover:border-Text-Default hover:bg-[#181E2B]">
        {label}
      </div>
    </Link>
  );
};
export default Chip;
