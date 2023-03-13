import MainLayout from "@/components/layouts/MainLayout";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/user";
import toast, { Toaster } from "react-hot-toast";
import Router, { useRouter } from 'next/router';
import { setTimeout } from "timers";


export default function Users() {
  const { transferSOL } = useMirrorWorld();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [soles, setSoles] = useState(0);
  const [values, setValues] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await getUsers();
        setUsers(response);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("An error occurred while fetching users");
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-full">
          <LoadingCircle color="#000000" />
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-full">
          <p className="text-red-500">{error}</p>
        </div>
      </MainLayout>
    );
  }
  const handleInputChange = (index, event) => {
    const newValues = { ...values };
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  return (
    <MainLayout>
      <Toaster position="bottom-center"/>
      <div className="w-full flex flex-col items-center justify-center ">
        <h1 className="text-5xl font-bold mb-8">Usuarios</h1>
        <div className="w-full px-4">
          <div className="overflow-x-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {users.map((user, index) => (
    <div key={index} className="overflow-hidden bg-white rounded-md shadow-md">
      <div className="px-4 py-5 sm:p-6 flex flex-col justify-center items-center">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{user.username}</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">{user.email}</div>
        <div className="mt-4">
          <input
            type="number"
            value={values[index] || ''}
            onChange={(e) => handleInputChange(index, e)}
            className="shadow appearance-none border rounded w-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <button
            className="mt-2 ml-2 bg-blue-500 hover:bg-blue-700 text-white shadow-xl font-bold py-2 px-4 rounded"
            onClick={() => {
              try {
                const index = users.findIndex((user) => user.username == debt.from);
                const cuenta= users[index].address;
            
                const res = transferSOL(cuenta, parseInt(debt.amount*1000000000))
                .then((resultadoTransferencia) => {
                  console.log(resultadoTransferencia); // aquí puedes hacer algo con la información recibida, como mostrar un mensaje de éxito en la interfaz
                  toast.dismiss();
                  toast.success("Transferencia exitosa");
                  // setTimeout(() => {
                  //   Router.push('/user/profile');
                  // }, 2000);
                })
                .catch((error) => {
                  toast.dismiss();
                  if (error.message === "Transaction failed") {
                    toast.error("Error al transferir");
                  } else {
                    toast.error("Fondos insuficientes");
                  }
                });
                    if (res) {
                      toast.loading("Transferencia en proceso...");
                      console.log("Transferencia en proceso");
                    }
            
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Transferir
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
