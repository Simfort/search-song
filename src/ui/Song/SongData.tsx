"use server";

import { SongParser } from "@/lib/songParser";

import SongItem from "./SongItem";

import { unstable_cache } from "next/cache";

const cachedGetTopMusics = unstable_cache(
  async (filter, page) => {
    return await SongParser.getTopMusics(filter, page);
  },
  ["top-musics"], // ключ кэша
  { revalidate: 3600 } // обновлять каждые 1 час
);

export async function SongData({
  filter,
  page,
}: {
  filter: string;
  page?: number;
}) {
  const songs = await cachedGetTopMusics(
    filter !== "rate" ? "today" : "rated",
    page
  );
  return songs.map((val, key) => <SongItem key={key} data={{ ...val }} />);
}
