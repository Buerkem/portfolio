import React from "react";
import Image from "next/image";
import { techStacks } from "@/app/lib/constants";

type TechStackItemProps = {
  label: string;
  icon: string;
};

const TechStackItem: React.FC<TechStackItemProps> = ({ label, icon }) => {
  return (
    <li className="transition-transform -ml-2 first:ml-0 relative group">
      <span className="w-[36px] h-[36px] rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center bg-white dark:bg-zinc-800">
        <Image src={icon} alt={label} width={18} height={18} />
      </span>
      <span
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 border rounded-full border-zinc-300 dark:border-zinc-600 text-sm
              px-3 py-1 shadow-lg whitespace-nowrap z-10
              invisible opacity-0 group-hover:visible group-hover:opacity-100
              transition-opacity delay-200 duration-200"
      >
        {label}
      </span>
    </li>
  );
};

interface TechStackListProps {
  techStackIds: number[];
}

export const TechStackList: React.FC<TechStackListProps> = ({ techStackIds }) => {
  if (!techStackIds?.length) return null;
  return (
    <ul className="flex items-center" aria-label="Technology stack">
      {techStackIds.slice(0, 4).map((id) => {
        const stack = techStacks[id];
        if (!stack) return null;

        return (
          <TechStackItem key={stack.id} label={stack.label} icon={stack.icon} />
        );
      })}
    </ul>
  );
};