 const MenuGr = () => (   
<section className="text-gray-600 body-font ">
  <div className="container px-10 py-24 mx-auto bg-[#DFD2C1]">
    <div className  ="flex flex-wrap -m-3">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-[#67D29E]  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-[#274790] mb-3">NOMBRES DE GRUPOS: </h1>
          <p className="leading-relaxed mb-3">En esta seccion podras consultar si tienes un grupo y te apareceran por nombre. de lo contrario estara vacia.</p>         
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-[#67D29E] px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-[#274790] mb-3">PARTICIPANTES: </h1>
          <p className="leading-relaxed mb-3">En esta seccion podras ver los participantes depende del grupo seleccionado</p>


        
        <div className="elem-groupa">
        <label htmlFor="editar-gruposa"></label>
         <select id="editar-gruposa" name="concerned_GRUPOS" required className="text-white bg-[#3884CF]">
         <option value="billing ">Selecciona un grupo</option>
         <option value="billing">*Super Amigos</option>
         <option value="marketing">*Fuerza lobos</option>
         </select>
         </div>

         
         <div className="elem-groupb">
  <label htmlFor="editar-gruposb"></label>
  <select id="editar-gruposb" name="concerned_GRUPOS" required className="text-white bg-[#3884CF]">
    <option value="">Participantes</option>
    <option value="billing">Kira</option>
    <option value="marketing">Vsher</option>
    <option value="marketing">Vianey</option>
    <option value="marketing">Gera</option>
  </select>
</div>



          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-[#67D29E] px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-2xl text-xl font-medium  text-[#274790] mb-3">EDITAR GRUPOS: </h1>
          <p className="leading-relaxed mb-3">En esta opcion podras editar los grupos que tengas desde seleccionar que grupo gustas modificar hasta eliminar participantes.</p>

        <div className="elem-groupc">
        <label htmlFor="editar-gruposc"></label>
         <select id="editar-gruposc" name="concerned_GRUPOS" required className="text-white bg-[#3884CF]">
         <option value="">Selecciona un grupo</option>
         <option value="a">*Super Amigos</option>
         <option value="b">*Fuerza lobos</option>
         </select>
         </div>
         
         <div className="elem-groupd">
         <label htmlFor="editar-gruposd"></label>
         <select id="editar-gruposd" name="concerned_GRUPOS" required className="text-white bg-[#3884CF]">
         <option value="">Selecciona una opcion</option>
         <option value="a">*Agregar participantes.</option>
         <option value="b">*Eliminar participantes.</option>
         </select>
         </div>
         


          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

);

export default MenuGr;