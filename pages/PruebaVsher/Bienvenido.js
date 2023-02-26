const Bienvenidos = () => (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap ">
        <h2 className="sm:text-3xl text-2xl text-[#3884CF] font-medium title-font mb-2 md:w-2/5">GRUPOS</h2>
        <div className="md:w-3/5 md:pl-6 bg-[#67D29E]">
          <p className="leading-relaxed text-base ">Aqui podras vizualizar los grupos que has armado con tus amigos para salir y dividir sus cuentas,ademas de editar los grupos c;             !vamos a echarles un vistazo¡</p>
          <div className="flex md:mt-4 mt-6">
          <a href="../Groups"> <button className="inline-flex text-white bg-[#3884CF] border-0 py-1 px-4 focus:outline-none hover:bg-[#274790] rounded">Vamos a alla</button></a>
            <a className="text-[#67D29E] inline-flex items-center ml-4">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    );
    
    export default Bienvenidos;
    