import { JSDOM } from "jsdom";
import { Song } from "./types";

export class SongParser {
  static #getSongs(data: string) {
    const window = new JSDOM(data).window;
    const document = window.document;
    const songs = document.querySelectorAll(".c-card-mp3");
    const dataSongs: Song[] = [];
    songs.forEach((val) => {
      const song = {} as Song;
      const title = val.querySelector(".c-card-mp3__title-song > a");
      const author = val.querySelector(".c-card-mp3__title-artist > a");
      const href = val.querySelector(
        ".c-card-mp3__controls > a"
      ) as HTMLAnchorElement;
      const time = val.querySelector(".c-card-mp3__duration");
      const image = val.querySelector(
        ".c-card-mp3__cover-wrapper"
      ) as HTMLImageElement;
      song.title = title!.textContent.trim();
      song.author = author!.textContent;
      song.href = href!.href;
      song.time = time!.textContent;
      song.image = image.src;
      dataSongs.push(song);
    });
    return dataSongs;
  }
  static async getTopMusics(type: "rated" | "today", page?: number) {
    const res = await fetch(`https://lmusic.kz/genres/pop-music/rus`, {
      signal: AbortSignal.timeout(12000),
    });

    const data = await res.text();

    return SongParser.#getSongs(data);
  }
  static async getMusic(music: string) {
    const res = await fetch(`https://muzbomb.net/?song=${music}`);

    const data = await res.text();

    return SongParser.#getSongs(data);
  }
}
