"use server";

import { SongParser } from "@/lib/songParser";
import { NextRequest } from "next/server";
import { unstable_cache } from "next/cache";
const cachedGetTopMusics = unstable_cache(
  async (filter) => {
    return await SongParser.getTopMusics(filter);
  },
  ["top-musics"], // ключ кэша
  { revalidate: 360 } // обновлять каждые 1 час
);

export async function GET(req: NextRequest) {
  try {
    const filter = req.nextUrl.searchParams.get("filter");
    const topMusics = await cachedGetTopMusics(filter ? filter : "today");

    return new Response(JSON.stringify(topMusics), {
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
