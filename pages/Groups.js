import MainLayout from "@/components/layouts/MainLayout";
import MenuGr from "./PruebaVsher/MenuGr";




export default function Home() {
  return (
    <MainLayout>
      <div className="content flex justify-center items-center w-full bg-[#DFD2C1]">
        <div className="wrapper max-w-7xl">
          <h1 className="md:text-2x1 text-xl text-center text-gray-900 font-bold">
             PaySol (adjunta logo) <br /> GRUPOS {" "}
            <MenuGr />
          </h1>
        </div>
      </div>
    </MainLayout>
  );
}
