import { SongSearchData } from "./SongSearchData";

export default function SongSearchContainer({ search }: { search: string }) {
  return (
    <section className="bg-accent grid-cols-subgrid grid rounded-[100px] pb-10киш  col-start-3 col-end-11 gap-y-10 pt-5">
      <SongSearchData search={search} />
    </section>
  );
}
