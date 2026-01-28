//渲染顶部导航菜单，并根据当前 URL 高亮“当前页面”

"use client";

import { NAV_ITEMS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NavItems = () => {
  const pathname = usePathname();

  //某个菜单链接是不是当前页面（或当前模块）
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";

    //字符串.startsWith(另一个字符串)
    //这个字符串，是不是从这个内容开始的？return true/false
    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
      {NAV_ITEMS.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={`hover:text-yellow-500 transition-colors ${isActive(href) ? "text-yellow-100" : ""}`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
