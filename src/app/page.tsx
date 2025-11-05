import FilterSong from "@/ui/Search/FilterSong";
import Search from "@/ui/Search/Search";
import SongContainer from "@/ui/Song/SongContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-12 ">
      <header className=" col-start-2 col-end-12 flex flex-col justify-center items-center mt-9 bg-(--color-accent)  py-5 rounded-full">
        {" "}
        <Search />
      </header>

      <FilterSong />

      <h1 className="col-start-1 text-center col-end-13 mt-[20px] ">
        Popular Songs
      </h1>
      <SongContainer />
    </div>
  );
}
