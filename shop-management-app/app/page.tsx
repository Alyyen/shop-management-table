"use client";
import { Shop } from "@/class/Shop";
import TableComponent from "@/components/TableComponent";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState<Shop[]>([]);

  useEffect(() => {
    fetch("sectorisation.json")
      .then((res) => res.json())
      .then((res) => {
        let tmpList: Shop[] = [];
        // generate a tree with the shops
        res.data.roots.forEach((element: Shop) => {
          tmpList.push(Shop.fromJSON(element));
        });
        setList(tmpList);
      });
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TableComponent shopList={list} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Alyyen/shop-management-table"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          By Alyssia Colomar
        </a>
      </footer>
    </div>
  );
}
