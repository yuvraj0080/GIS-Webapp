import Header from "../common/header";
import MapContainer from "./MapContainer";
import Sidebar from "./sidebar";

function Layout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex flex-1 mt-2">
        <Sidebar />
        <main className="flex flex-1 bg-gray-100 p-4">
          <MapContainer />
        </main>
      </div>
    </div>
  );
}

export default Layout;
