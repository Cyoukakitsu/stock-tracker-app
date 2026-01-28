//👉 右上角的“用户头像按钮”
//👉 点一下 → 弹出一个下拉菜单
//👉 里面显示用户信息 + 登出按钮 +（移动端）导航

"use client";

// ==================== 导入依赖 ====================
// UI 组件
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Next.js 路由
import { useRouter } from "next/navigation";

// 图标
import { LogOut } from "lucide-react";

// 自定义组件
import NavItems from "./NavItems";

/**
 * UserDropdown 组件
 * 用户下拉菜单组件，显示用户头像和信息，提供登出等操作
 */
const UserDropdown = () => {
  // 获取路由实例，用于页面跳转(控制路由跳转的工具)
  const router = useRouter();

  /**
   * 处理用户登出
   * 跳转到登出页面
   */
  const handleSignOut = () => {
    //直接跳转到 /signout 这个路径（创建一个signout.tsx）
    router.push("/signout");
  };

  // 模拟用户数据（实际应用中应从认证状态获取）
  const user = { name: "John Doe", email: "john@example.com" };

  return (
    // ==================== 下拉菜单容器 ====================
    <DropdownMenu>
      {/* ========== 触发器：用户头像按钮 ========== */}
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-400"
        >
          {/* 用户头像 */}
          <Avatar className="h-8 w-8 ">
            <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=280&v=4" />
            {/* 头像加载失败时显示用户名首字母 */}
            <AvatarFallback className="bg-yellow-500 text-yellow-800 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          {/* 用户名（仅在中等及以上屏幕显示） */}
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      {/* ========== 下拉菜单内容 ========== */}
      <DropdownMenuContent className="text-gray-400">
        {/* 用户信息标签区域 */}
        <DropdownMenuLabel>
          <div className="flex relative items-center gap-3 py-2">
            {/* 较大的用户头像 */}
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=280&v=4" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            {/* 用户名和邮箱 */}
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        {/* 分隔线 */}
        <DropdownMenuSeparator className="bg-gray-600" />

        {/* 登出按钮 */}
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
        >
          <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
        </DropdownMenuItem>

        {/* 移动端导航菜单（响应式设计） */}
        <DropdownMenuItem className="hidden sm:block bg-gray-600">
          <nav className="sm:hidden">
            <NavItems />
          </nav>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
