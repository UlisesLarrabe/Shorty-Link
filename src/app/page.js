import InputUrl from "@/components/InputUrl/InputUrl";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:justify-center md:justify-normal md:mt-0 h-screen mt-8">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <header className="flex flex-col justify-center h-[10%] md:h-[30%] ">
        <h1 className=" text-white md:text-6xl text-3xl ">Shorty-Links</h1>
      </header>
      <InputUrl />
    </main>
  );
}
