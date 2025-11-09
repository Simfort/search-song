"use server";

import { SongParser } from "@/lib/songParser";
import { NextRequest, NextResponse } from "next/server";
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

    return NextResponse.json(topMusics);
  } catch (e) {
    console.log(e);
  }
}
