import MainLayout from "@/components/layouts/MainLayout";
import { getGroup, addMemberToGroup } from "@/lib/groups";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/user";
import { toast, Toaster } from "react-hot-toast";
const logoUrl = "/logo.png";
export default function Home() {
  const [users, setUsers] = useState([]);
  const { user } = useMirrorWorld();
  const [groups, setGroups] = useState([]);
  const [values, setValues] = useState({});
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedMember, setSelectedMember] = useState("");

  useEffect(() => {
    const getGroups = async () => {
      const groups = await getGroup(user.email);
      const response = await getUsers();
      setUsers(response);

      console.log(groups);
      return groups;
    };

    if (user) {
      console.log(user.email);

      getGroups().then((groups) => setGroups(groups));
    }
  }, [user]);
  async function handleAddMemberClick() {
    try {
      const response = await addMemberToGroup(selectedGroup, [selectedMember]);
      
      switch (response.status) {
        case 200:
          toast.success("Miembro añadido");
          break;
        case 400:
          toast.error("Error al añadir miembro");
          break;
        case 404:
          toast.error("Error al añadir miembro");
          break;
          case 409:
          toast.error("Miembro ya existe");
          break;
        default:
          toast.error("Error al añadir miembro");
          break;
      }

      console.log('response ',response);
      

    } catch (error) {
      toast.error("Error al añadir miembro");
      console.error(error);
    } // Hacer algo con la respuesta
  }


  function handleGroupChange(e) {
    setSelectedGroup(e.target.value);
  }

  function handleMemberChange(e) {
    setSelectedMember(e.target.value);
  }

  return (
    <MainLayout>
     <Toaster
  position="bottom-center"/>
      <div className="content flex justify-center items-center w-full">
        <div className="wrapper max-w-7xl">
          <h1 className="md:text-2x1 text-xl text-center text-gray-900 font-bold">
            PaySol 
            </h1>
            <div className="flex flex-col justify-center w-full items-center">
            <img className="w-24" src={logoUrl} alt="" />
            </div>
            <section className="text-gray-600 body-font ">
              <div className="container px-10 py-12 mx-auto">
                <div className="flex flex-wrap -m-3">
                  <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-[#67D29E]  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-[#274790] mb-3">
                        NOMBRES DE GRUPOS:
                      </h1>
                      <p className="leading-relaxed mb-3">
                        En esta seccion podras consultar si tienes un grupo y te
                        apareceran por nombre. de lo contrario estara vacia.
                      </p>
                      {groups.map((group,i) => (
                        <h2 key={i} className="text-2xl font-bold text-white mb-2 shadow-md">
                          {group.name}
                        </h2>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-[#67D29E] px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h1 className="title-font sm:text-2xl text-xl font-medium text-[#274790] mb-3">
                        PARTICIPANTES:{" "}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        En esta seccion podras ver los participantes depende del
                        grupo seleccionado
                      </p>

                      <div className="elem-groupa py-5">
                        <label htmlFor="editar-gruposa"></label>
                        <select
                          id="editar-gruposa"
                          name="concerned_GRUPOS"
                          data-group="concerned_GRUPOS"
                          required
                          className="text-white bg-[#3884CF]"
                          onChange={handleGroupChange}
                        >
                          <option value="billing ">Selecciona un grupo</option>
                          {groups.map((group,key) => (
                            <option key={key} value={group.name}>{group.name}</option>
                          ))}
                        </select>
                      </div>

                     
                      <div className="flex flex-col flex-wrap max-w-sm justify-center overflow-hidden items-center">
                     <div className="elem-groupz text-center py-3">
                        <label htmlFor="editar-gruposz" className=""></label>
                        <select
                          id="editar-gruposz"
                          name="concerned_User"
                          required
                          className="text-white bg-[#3884CF] flex flex-col flex-wrap text-center overflow-hidden"
                          onChange={handleMemberChange}
                        >
                         <option value={null}>Selecciona usuario</option>
                          {users.map((user,index) => (
                            <option key={index} className="text-white text-xs max-w-sm flex flex-wrap p-2 scroll-my-2" value={user.username}>{user.username}</option>
                          ))}
                        </select>
                      </div>
                        <button onClick={handleAddMemberClick}>
                          añadir usuario
                        </button>
                     </div>
                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-[#67D29E] px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                      <h1 className="title-font sm:text-2xl text-xl font-medium  text-[#274790] mb-3">
                        EDITAR GRUPOS:{" "}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        En esta opcion podras editar los grupos que tengas desde
                        seleccionar que grupo gustas modificar hasta eliminar
                        participantes.
                      </p>

                      <div className="elem-groupc">
                        <label htmlFor="editar-gruposc"></label>
                        <select
                          id="editar-gruposc"
                          name="concerned_GRUPOS"
                          required
                          className="text-white bg-[#3884CF]"
                        >
                          <option value="">Selecciona un grupo</option>
                          <option value="a">*Super Amigos</option>
                          <option value="b">*Fuerza lobos</option>
                        </select>
                      </div>

                      <div className="elem-groupd">
                        <label htmlFor="editar-gruposd"></label>
                        <select
                          id="editar-gruposd"
                          name="concerned_GRUPOS"
                          required
                          className="text-white bg-[#3884CF]"
                        >
                          <option value="">Selecciona una opcion</option>
                          <option value="a">*Agregar participantes.</option>
                          <option value="b">*Eliminar participantes.</option>
                        </select>
                      </div>

                      <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          
        </div>
      </div>
    </MainLayout>
  );
}
