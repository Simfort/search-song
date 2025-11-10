"use client";
import FilterSong from "@/ui/Search/FilterSong";
import Search from "@/ui/Search/Search";
import SongContainer from "@/ui/Song/SongContainer";
import SongSearchContainer from "@/ui/Song/SongSearchContainer";
import TitleFilter from "@/ui/TitleFilter";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const search = useSearchParams().get("search")!;
  return (
    <div className=" grid grid-cols-subgrid grid-rows-subgrid">
      {" "}
      <header className=" col-start-2 col-end-12 flex flex-col justify-center items-center mt-9 bg-(--color-accent)  py-5 rounded-full">
        <Search />
      </header>
      <FilterSong />
      <TitleFilter filter={search} />
      <SongSearchContainer search={search} />
    </div>
  );
}
