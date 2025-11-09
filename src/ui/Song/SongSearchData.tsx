"use server";

import { SongParser } from "@/lib/songParser";

import SongItem from "./SongItem";

import { unstable_cache } from "next/cache";

const cachedGetMusics = unstable_cache(
  async (search, page) => {
    return await SongParser.getMusic(search, page);
  },
  ["top-musics"], // ключ кэша
  { revalidate: 3600 } // обновлять каждые 1 час
);

export async function SongSearchData({
  search,
  page,
}: {
  search: string;
  page?: number;
}) {
  const songs = await cachedGetMusics(search, page);
  return songs.map((val, key) => <SongItem key={key} data={{ ...val }} />);
}
