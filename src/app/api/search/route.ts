"use server";

import { SongParser } from "@/lib/songParser";
import { NextRequest } from "next/server";
import { unstable_cache } from "next/cache";
const cachedGetMusic = unstable_cache(
  async (song) => {
    return await SongParser.getMusic(song);
  },
  ["top-musics"], // ключ кэша
  { revalidate: 360 } // обновлять каждые 1 час
);

export async function GET(req: NextRequest) {
  try {
    const search = req.nextUrl.searchParams.get("search");
    const musics = await cachedGetMusic(search);

    return new Response(JSON.stringify(musics), {
      status: 200,
      headers: {
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify(e), {
      status: 501,
    });
  }
}
