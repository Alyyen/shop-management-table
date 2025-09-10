import { Shop } from "@/class/Shop";
import { useState } from "react";

export default function RowComponent({ shop, level = 0 }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasManagerAccess, setHasManagerAccess] = useState(shop.manager_access);
  const [hasAdminAccess, setHasAdminAccess] = useState(shop.admin_access);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleManagerAccess = () => setHasManagerAccess(!hasManagerAccess);
  const toggleAdminAccess = () => setHasAdminAccess(!hasAdminAccess);

  return (
    <>
      <tr>
        <td style={{ paddingLeft: `${level * 20}px` }}>
          {shop.children && (
            <button
              onClick={toggleOpen}
              style={{ marginRight: "8px" }}
              className={`${!shop.hasChild() && "hidden"}`}
            >
              {isOpen ? "▾" : "▸"}
            </button>
          )}
          {shop.name}
        </td>
        <td>
          <input
            value={shop.manager_access}
            type="checkbox"
            checked={hasManagerAccess}
            onChange={toggleManagerAccess}
          />
        </td>
        <td>
          <input
            value={shop.admin_access}
            type="checkbox"
            checked={hasAdminAccess}
            onChange={toggleAdminAccess}
          />
        </td>
      </tr>

      {isOpen &&
        shop.children?.map((child: Shop) => (
          <RowComponent key={child.id} shop={child} level={level + 1} />
        ))}
    </>
  );
}
