import { Shop } from "@/class/Shop";

export default function CheckedItemsList({
  shop,
  access,
}: {
  shop: Shop;
  access: "manager" | "admin";
}) {
  return (
    <>
      {shop.children?.map((child: Shop) => (
        <CheckedItemsList key={child.id} shop={child} access={access} />
      ))}

      {((access === "manager" && shop.hasManagerAccess()) ||
        (access === "admin" && shop.hasAdminAccess())) && <li>{shop.id}</li>}
    </>
  );
}
