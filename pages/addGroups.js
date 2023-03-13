import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { addGrroup } from "@/lib/groups";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import { useRouter } from 'next/router';


export default function CreateGroup() {
  const { user } = useMirrorWorld();
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    category: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const groupData = {
      dueño: user.email, // Establecer la propiedad dueño como user.email
      name: formState.name,
      description: formState.description,
      category: formState.category,
      members:[user.username],
        
    };
    console.log(groupData);
    addGrroup(groupData);
    router.push ("/user/grupos");
  };

  return (
    <MainLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-bold mb-2"
          >
            Nombre del grupo
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Escribe el nombre del grupo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Descripción del grupo
          </label>
          <textarea
            name="description"
            id="description"
            value={formState.description}
            onChange={handleChange}
            placeholder="Escribe una descripción para el grupo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Categoría del grupo
          </label>
          <select
            name="category"
            id="category"
            value={formState.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Selecciona una categoría</option>
            <option value="amigos">Amigos</option>
            <option value="familia">Familia</option>
            <option value="trabajo">Trabajo</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Crear grupo
          </button>
        </div>
      </form>
    </MainLayout>
  );
}
