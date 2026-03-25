import AnchorPanel from "./components/AnchorPanel";
import Sidebar from "./components/Sidebar"

export default function Home() {
  return (
    <div>
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <main className="flex justify-between h-screen">
          <Sidebar />
          <AnchorPanel />
        </main>
      </div>
    </div>
  );
}
