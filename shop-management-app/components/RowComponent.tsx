import { Shop } from "@/class/Shop";
import { useState } from "react";

export default function RowComponent({
  shop,
  level = 0,
  onChange,
}: {
  shop: Shop;
  level?: number;
  onChange: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleManagerAccess = () => {
    shop.setManagerAccess(!shop.manager_access);
    onChange();
  };
  const toggleAdminAccess = () => {
    shop.setAdminAccess(!shop.admin_access);
    onChange();
  };

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
              {isOpen ? "\u2304" : ">"}
            </button>
          )}
          {shop.name}
        </td>
        <td className="text-center">
          <input
            type="checkbox"
            checked={shop.hasManagerAccess()}
            onChange={toggleManagerAccess}
          />
        </td>
        <td className="text-center">
          <input
            type="checkbox"
            checked={shop.hasAdminAccess()}
            onChange={toggleAdminAccess}
          />
        </td>
      </tr>

      {isOpen &&
        shop.children?.map((child: Shop) => (
          <RowComponent
            key={child.id}
            shop={child}
            level={level + 1}
            onChange={onChange}
          />
        ))}
    </>
  );
}
