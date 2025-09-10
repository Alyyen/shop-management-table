"use client";

import { useEffect, useState } from "react";
import RowComponent from "@/components/RowComponent";
import { Shop } from "@/class/Shop";

type Props = {
  shopList: Shop[];
};

const TableComponent = ({ shopList }: Props) => {
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
        {shopList.map((shop: Shop) => (
          <RowComponent key={shop.id} shop={shop} />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
