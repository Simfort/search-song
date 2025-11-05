import Image from "next/image";
import loop from "../../../public/interface-edit-pin-3--pin-push-thumbtack.svg";

export default function Search() {
  return (
    <form action="">
      <label
        htmlFor="song"
        className=" flex items-center justify-end  relative   ">
        {" "}
        <input
          type="text"
          className="bg-[#00000044] outline-0 px-[50px] rounded-full py-3.5"
          placeholder="Search Song"
          name="song"
        />
        <Image
          src={loop}
          alt="loop"
          width={32}
          height={32}
          className=" absolute mr-[50px]"
        />
      </label>
    </form>
  );
}
