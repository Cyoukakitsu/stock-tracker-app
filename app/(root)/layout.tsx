//路由分组（Route Group）专用 layout,只是为了组织结构
//常见用途：放 Header / Footer
//页面主结构（导航栏 + 内容区）

import Header from "@/components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <div className="container py-10">{children}</div>
    </main>
  );
};

export default layout;
