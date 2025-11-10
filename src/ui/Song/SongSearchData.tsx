"use client";

import { useEffect, useState } from "react";
import SongItem from "./SongItem";
import { Song } from "@/lib/types";

export function SongSearchData({ search }: { search: string }) {
  const [songs, setSongs] = useState<Song[]>([]);
  useEffect(() => {
    fetch(`/api/search?search=${search}`)
      .then((songs) => songs.json())
      .then((songs) => setSongs(songs));
  }, [search]);
  return songs.map((val, key) => <SongItem key={key} data={{ ...val }} />);
}
