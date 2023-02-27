import MainLayout from "@/components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="content flex justify-center items-center w-full bg-[#DFD2C1]">
        <div className="wrapper max-w-7xl">
          <h1 className="text-2xl text-center text-[#274790] font-bold">
            PaySol owo <br /> Aqui todo comienza
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap ">
                <h2 className="sm:text-3xl text-2xl text-[#3884CF] font-medium title-font mb-2 md:w-2/5">
                  GRUPOS
                </h2>
                <div className="md:w-3/5 md:pl-6 bg-[#67D29E]">
                  <p className="leading-relaxed text-base ">
                    Aqui podras vizualizar los grupos que has armado con tus
                    amigos para salir y dividir sus cuentas,ademas de editar los
                    grupos c; !vamos a echarles un vistazo¡
                  </p>
                  <div className="flex md:mt-4 mt-6 justify-center">
                    <a href="../Groups">
                      {" "}
                      <button className="inline-flex text-white bg-[#3884CF] border-0 py-1 px-4 focus:outline-none hover:bg-[#274790] rounded">
                        Mis grupos
                      </button>
                    </a>

                    <a className="text-[#67D29E] inline-flex items-center ml-4">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <a href="../addGroups">
                      {" "}
                      <button className="inline-flex text-white bg-[#3884CF] border-0 py-1 px-4 focus:outline-none hover:bg-[#274790] rounded">
                        Añadir grupo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </h1>
        </div>
      </div>
    </MainLayout>
  );
}
