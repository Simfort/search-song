import { JSDOM } from "jsdom";
import { Song } from "./types";

export class SongParser {
  static #getSongs(data: string) {
    const window = new JSDOM(data).window;
    const document = window.document;
    const songs = document.querySelectorAll(".tracks__item");
    const dataSongs: Song[] = [];
    songs.forEach((val) => {
      const song = {} as Song;
      const title = val.querySelector(".track__title");
      const author = val.querySelector(".track__desc");
      const href = val.querySelector("a[data-nopjax]") as HTMLAnchorElement;
      const time = val.querySelector(".track__fulltime");
      const bgUrl = window
        .getComputedStyle(val.querySelector(".track__img")!)
        .backgroundImage.slice(5, -2);

      song.image = bgUrl;
      song.title = title!.textContent.trim();
      song.author = author!.textContent;
      song.href = href.href;
      song.time = time!.textContent;
      dataSongs.push(song);
    });
    return dataSongs;
  }
  static async getTopMusics(type: "rated" | "today", page?: number) {
    const res = !page
      ? await fetch(`https://eu.hitmo-top.com/songs/top-${type}`, {
          headers: {
            "user-agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 YaBrowser/22.11.3.838 Yowser/2.5 Safari/537.36",
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          },
        })
      : await fetch(
          `https://eu.hitmo-top.com/songs/top-${type}/start/${(page - 1) * 48}`
        );
    const data = await res.text();

    return SongParser.#getSongs(data);
  }
  static async getMusic(music: string, page?: number) {
    const res = !page
      ? await fetch(`https://eu.hitmo-top.com/search?q=${music}`)
      : await fetch(
          `https://eu.hitmo-top.com/search/start/${(page - 1) * 48}?q=${music}`
        );
    const data = await res.text();

    return SongParser.#getSongs(data);
  }
}
