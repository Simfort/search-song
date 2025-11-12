"use client";

import { Suspense, useEffect, useState } from "react";
import SongItem from "./SongItem";
import { Song } from "@/lib/types";

export function SongData({ filter }: { filter: string }) {
  const [songs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    fetch(`/api?filter=${filter}`)
      .then((songs) => songs.json())
      .then((songs) => setSongs(songs));
  }, [filter]);
  return songs.map((val, key) => <SongItem key={key} data={{ ...val }} />);
}
