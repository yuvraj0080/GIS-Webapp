import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const menuItems = [
    { name: "Layers", id: "layers" },
    { name: "Map Tools", id: "tools" },
    { name: "Info", id: "info" },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <nav className="flex-1 p-4 space-y-4">
        {menuItems.map((item) => (
          <SidebarItem key={item.id} name={item.name} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
