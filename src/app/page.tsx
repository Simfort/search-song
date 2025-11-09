"use server";
import FilterSong from "@/ui/Search/FilterSong";
import Search from "@/ui/Search/Search";
import SongContainer from "@/ui/Song/SongContainer";
import TitleFilter from "@/ui/TitleFilter";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filter = (await searchParams).filter as string;
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
