"use client";

import { Song } from "@/lib/types";
import { Download } from "lucide-react";
import Image from "next/image";

export default function SongItem({ data }: { data: Song }) {
  return (
    <div className="w-1/1 py-2.5 px-5 flex col-start-2 col-end-8 rounded-full items-center justify-between bg-foreground text-background">
      <div className="flex items-center  ">
        {data.image ? (
          <Image
            src={data.image}
            alt="image"
            width={70}
            height={70}
            className="rounded-full"
            unoptimized
          />
        ) : (
          <div className="w-[70px] h-[70px] bg-black rounded-full"></div>
        )}

        <div className="flex-col flex w-[300px]">
          <p className="text-center">{data.title}</p>
          <p className="opacity-50 text-center">{data.author}</p>
        </div>
      </div>
      <div className="flex gap-10 pr-10">
        <time className="opacity-50 w-[100px]">{data.time}</time>
        <a download href={data.href}>
          <Download />
        </a>
      </div>
    </div>
  );
}
