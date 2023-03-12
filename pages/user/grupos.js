import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="content flex justify-center items-center w-full">
        <div className="wrapper max-w-7xl">
          <h1 className="text-2xl text-center text-[#274790] bg-gray-200  font-bold">
            PaySol owo <br /> 
              <p className="sm:text-3xl text-2xl text-[#3884CF] font-medium title-font mb-2 md:w-2/5">
                Grupos
              </p>
          </h1>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-2 mx-auto flex flex-wrap">
              <div className="md:w-3/5 md:pl-6 bg-gray-200 rounded-lg p-6">
                <p className="leading-relaxed text-base mb-4 text-black">
                  Aquí podrás visualizar los grupos que has armado con tus amigos
                  para salir y dividir sus cuentas, además de editar los grupos.
                  ¡Vamos a echarles un vistazo!
                </p>
                <div className="flex md:mt-4 mt-6 justify-center">
                  <a href="../Groups">
                    <button className="inline-flex text-white bg-[#3884CF] border-0 py-1 px-4 focus:outline-none hover:bg-[#274790] rounded mr-4">
                      Mis grupos
                    </button>
                  </a>
                  <a href="../addGroups">
                    <button className="inline-flex text-white bg-[#3884CF] border-0 py-1 px-4 focus:outline-none hover:bg-[#274790] rounded mr-4">
                      Añadir grupo
                    </button>
                  </a>
                  <a href="/user/salida">
                    <button className="inline-flex text-[#67D29E] bg-white border-0 py-1 px-4 focus:outline-none hover:text-white hover:bg-[#67D29E] rounded">
                      Realizar salida
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        
      </div>
    </MainLayout>
  );
}
