import MainLayout from "@/components/layouts/MainLayout";
import Link from "next/link";
import {DebtCard} from "@/components/deuda";
import {getDeudas, paidDeuda} from "@/lib/deudas";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/user";
import toast, { Toaster } from "react-hot-toast";
import Router, { useRouter } from 'next/router';


export default function Gome() {
  const [deudas, setDeudas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, token, fetchUser, Transaction } = useMirrorWorld();
  const [users, setUsers] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [collapsed2, setCollapsed2] = useState(true);


  useEffect(() => {

    async function fetchData() {
      try {
        setIsLoading(true);
        console.log("user desde grupos: ",user.username)
        const response = await getDeudas(user.username);
        setDeudas(response);
        const responss = await getUsers();
        console.log("responss desde grupos: ",responss)
        setUsers(responss);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("An error occurred while fetching deudas");
      }
    }
    fetchData();
  }, [user]);
  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  function toggleCollapsed2() {
    setCollapsed2(!collapsed2);
  }

  return (
    <MainLayout>
      <Toaster position="bottom-center"/>
  <div className="content flex justify-center items-center w-full">
    <div className="wrapper max-w-7xl">
      <h1 className="text-2xl text-center text-[#274790] bg-gray-200 font-bold py-4 md:py-8">
        PaySol owo <br /> 
        <span className="text-[#3884CF] font-medium">
          Grupos
        </span>
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-4 md:px-0 py-4 md:py-8 mx-auto flex flex-wrap justify-center md:justify-between">
          <div className="w-full md:w-3/5 md:pr-6 bg-gray-200 rounded-lg p-6">
            <p className="leading-relaxed text-base mb-4 text-black">
              Aquí podrás visualizar los grupos que has armado con tus amigos
              para salir y dividir sus cuentas, además de editar los grupos.
              ¡Vamos a echarles un vistazo!
            </p>
            <div className="flex flex-wrap md:mt-4 mt-6 justify-center md:justify-start">
              <Link href="../Groups">
                <button className="inline-flex text-white bg-[#3884CF] border-0 py-2 px-4 focus:outline-none hover:bg-[#274790] rounded-lg mr-4 mb-4 md:mb-0">
                  Mis grupos
                </button>
              </Link>
              <Link href="../addGroups">
                <button className="inline-flex text-white bg-[#3884CF] border-0 py-2 px-4 focus:outline-none hover:bg-[#274790] rounded-lg mr-4 mb-4 md:mb-0">
                  Añadir grupo
                </button>
              </Link>
              <Link href="/user/salida">
                <button className="inline-flex text-[#67D29E] bg-white border border-[#67D29E] py-2 px-4 focus:outline-none hover:text-white hover:bg-[#67D29E] rounded-lg">
                  Realizar salida
                </button>
              </Link>
            </div>
          </div>
          <div className="container px-4 pt-2 md:px-0 mx-auto">
            {deudas ? (
             <div className="container mx-auto">
             <h2 className="text-xl font-bold mb-4 bg-black text-white" onClick={toggleCollapsed}>➡️Deudas NO pagadas⬅️</h2>
             {!collapsed && deudas.filter(debt => !debt.paid).map(debt => (
               <DebtCard
                 key={debt._id}
                 from={debt.from}
                 to={debt.to}
                 amount={debt.amount}
                 paid={debt.paid}
                 // ...
               />
             ))}
             <h2 className="text-xl font-bold bg-green-500 text-black my-4" onClick={toggleCollapsed2}>➡️ Deudas pagadas ⬅️</h2>
             {collapsed2 && deudas.filter(debt => debt.paid).map(debt => (
               <DebtCard
                 key={debt._id}
                 from={debt.from}
                 to={debt.to}
                 amount={debt.amount}
                 paid={debt.paid}
                 // ...
               />
             ))}
           </div>
           
            ) : (
              <div className="text-black">
                No hay deudas
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  </div>
</MainLayout>


  );
}

