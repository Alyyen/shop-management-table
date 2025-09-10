"use client";

import RowComponent from "@/components/RowComponent";
import { Shop } from "@/class/Shop";
import { useEffect, useState } from "react";

type Props = {
  shopList: Shop[];
};

const TableComponent = ({ shopList }: Props) => {
  const [providedShopList, setProvidedShopList] = useState<Shop[]>(shopList);

  useEffect(() => {
    setProvidedShopList(shopList);
  }, [shopList]);

  return (
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
            onChange={() => setProvidedShopList([...providedShopList])}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
