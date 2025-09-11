"use client";

import RowComponent from "@/components/RowComponent";
import { Shop } from "@/class/Shop";
import { useEffect, useState } from "react";
import CheckedItemsList from "./CheckedItemsList";

export default function TableComponent({ shopList }: { shopList: Shop[] }) {
  const [providedShopList, setProvidedShopList] = useState<Shop[]>(shopList);

  useEffect(() => {
    setProvidedShopList(shopList);
  }, [shopList]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Accès Manager</th>
            <th>Accès Admin</th>
          </tr>
        </thead>
        <tbody>
          {providedShopList.map((shop: Shop) => (
            <RowComponent
              key={shop.id}
              shop={shop}
              onChange={() => {
                setProvidedShopList([...providedShopList]);
              }}
            />
          ))}
        </tbody>
      </table>
      <h2>Accès Manager sélectionnés</h2>
      <ul>
        {providedShopList.map((shop: Shop) => (
          <CheckedItemsList key={shop.id} shop={shop} access="manager" />
        ))}
      </ul>
      <h2>Accès Admin sélectionnés</h2>
      <ul>
        {providedShopList.map((shop: Shop) => (
          <CheckedItemsList key={shop.id} shop={shop} access="admin" />
        ))}
      </ul>
    </>
  );
};
