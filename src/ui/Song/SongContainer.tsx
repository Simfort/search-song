import { Suspense } from "react";
import { SongData } from "./SongData";

export default function SongContainer({ filter }: { filter: string }) {
  return (
    <section className="bg-accent grid-cols-subgrid grid rounded-[100px]  col-start-3 col-end-11 gap-y-10 pt-5">
      <SongData filter={filter} />
    </section>
  );
}
