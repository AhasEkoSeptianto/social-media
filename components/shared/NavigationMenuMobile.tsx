import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Menu1 } from "./Sidebar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function NavigationMenuMobile() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="w-screen p-2 shadow-lg">
        <NavigationMenuItem className="space-x-2 bg-brand rounded-lg p-2 text-highlight2">
          {Menu1.map((menu, idx) => (
            <NavigationMenuLink
              key={idx}
              className={`${navigationMenuTriggerStyle()} ${pathname === menu.url ? "bg-brand5 text-white" : ""} font-semibold`}
              render={<Link href={menu.url}>{menu.title}</Link>}
            />
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
