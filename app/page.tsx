import Sidebar from "./components/Sidebar"

export default function Home() {
  return (
    <div className="font-sans dark:bg-black">
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <main className="flex justify-between">
          <Sidebar />
          <div></div>
        </main>
      </div>
    </div>
  );
}
