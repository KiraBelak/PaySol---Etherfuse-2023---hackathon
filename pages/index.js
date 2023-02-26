import MainLayout from "@/components/layouts/MainLayout";
import Bienvenidos from "./PruebaVsher/Bienvenido";


export default function Home() {
  return (
    <MainLayout>
      <div className="content flex justify-center items-center w-full my-16 bg-[#DFD2C1]">
        <div className="wrapper max-w-7xl">
          <h1 className="text-2xl text-center text-[#274790] font-bold">
            PaySol owo <br /> Aqui todo comienza {" "}
            <Bienvenidos />
          </h1>
        </div>
      </div>
    </MainLayout>
  );
}
