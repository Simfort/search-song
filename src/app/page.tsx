"use client";
import FilterSong from "@/ui/Search/FilterSong";
import Search from "@/ui/Search/Search";
import SongContainer from "@/ui/Song/SongContainer";
import TitleFilter from "@/ui/TitleFilter";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const filter = useSearchParams().get("filter")!;
  return (
    <div className=" grid grid-cols-subgrid grid-rows-subgrid">
      {" "}
      <header className=" col-start-2 col-end-12 flex flex-col justify-center items-center mt-9 bg-(--color-accent)  py-5 rounded-full">
        <Search />
      </header>
      <FilterSong />
      <TitleFilter filter={filter} />
      <SongContainer filter={filter} />
    </div>
  );
}
