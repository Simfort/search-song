import { JSDOM } from "jsdom";
import { Song } from "./types";

export class SongParser {
  static #getSongs(data: string) {
    const window = new JSDOM(data).window;
    const document = window.document;
    const songs = document.querySelectorAll(".tmtMus_blc");
    const dataSongs: Song[] = [];
    songs.forEach((val) => {
      const song = {} as Song;
      const title = val.querySelector(".tmtMus_blc_tracklink");
      const author = val.querySelector(".tmtMus_blc_artist");
      const href = val.querySelector(".tmtMus_blc_download.link");
      const time = val.querySelector(".tmtMus_blc_time");

      song.title = title!.textContent.trim();
      song.author = author!.textContent;
      song.href = href!.getAttribute("href")!;
      song.time = time!.textContent;
      dataSongs.push(song);
    });
    return dataSongs;
  }
  static async getTopMusics(type: "rated" | "today", page?: number) {
    const res = await fetch(`https://muzbomb.net/`);

    const data = await res.text();

    return SongParser.#getSongs(data);
  }
  static async getMusic(music: string) {
    const res = await fetch(`https://muzbomb.net/?song=${music}`);

    const data = await res.text();

    return SongParser.#getSongs(data);
  }
}
