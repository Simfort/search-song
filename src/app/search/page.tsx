"use server";
import FilterSong from "@/ui/Search/FilterSong";
import Search from "@/ui/Search/Search";

import SongSearchContainer from "@/ui/Song/SongSearchContainer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const search = (await searchParams).search as string;
  return (
    <div className=" grid grid-cols-subgrid grid-rows-subgrid">
      {" "}
      <header className=" col-start-2 col-end-12 flex flex-col justify-center items-center mt-9 bg-(--color-accent)  py-5 rounded-full">
        <Search />
      </header>
      <FilterSong />
      <h1 className="col-start-1 text-center  col-end-13 mt-5 ">Songs</h1>
      <SongSearchContainer search={search} />
    </div>
  );
}
