import MainLayout from "@/components/layouts/MainLayout";
import { getGroup, addMemberToGroup } from "@/lib/groups";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/user";
import { LoadingCircle } from "@/components/common/LoadingCircle";
import { useRouter } from "next/router";
import { Toaster, toast } from "react-hot-toast";
import { addDeuda } from "../../lib/deudas";
// import { getSoles } from "../../lib/groups";
export default function Salida() {
  const [users, setUsers] = useState([]);
  const { user } = useMirrorWorld();
  const [groups, setGroups] = useState([]);
  const [member, setMember] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [deudas, setDeudas] = useState([]);
  const solanaId = "5426";
  const router = useRouter();
  // const [soles, setSoles] = useState(0);
   

  // // URL de la API para obtener el precio de Solana en dólares estadounidenses
  // const url = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail?id=${solanaId}`;

  // // Realizar una solicitud GET a la API de CoinMarketCap
  // axios.get(url)
  //   .then(response => {
  //     // Obtener el precio de Solana en dólares estadounidenses
  //     console.log(response.data)
  //     const solPrice = response.data.data.price.quote.USD.price;

  //     // Hacer algo con el precio
  //     console.log(`El precio de Solana es de $${solPrice} USD`);
  //   })
  //   .catch(error => {
  //     console.error(`Error al obtener el precio de Solana: ${error}`);
  //   });
  // useEffect(() => {
  //   const getSoles = async () => {
  //     const soles = await getSoles();
  //     console.log(soles);
  //     setSoles(soles);
  //   };
  //   getSoles();
  // }, []);


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

  const updateValue = (index, field, money) => {
    const newMember = [...member];
    newMember[index][field] = money;
    console.log("Nuevo valor: ", newMember);
    setMember(newMember);
  };
  //crear un array de los miembros del grupo seleccionado
  useEffect(() => {
    if (selectedGroup) {
      const group = groups.find((group) => group.name === selectedGroup);
      console.log(group);
      if (group.members === undefined || group.members.length === 0) {
        console.log("no hay miembros");
        //redirect to add member
        router.push("/Groups");
      }
      //   crear un array de los miembros del grupo seleccionado

      var miembros = [];

      group.members.forEach((member) => {
        miembros.push({
          name: member,
          money: 0,
        });
      });

      console.log(miembros);
      setMember(miembros);
    }
  }, [selectedGroup]);

  if (!groups) {
    return (
      <MainLayout>
        <LoadingCircle />;
      </MainLayout>
    );
  }

  async function handleAddMemberClick() {
    try {
      const users = member;
      console.log("Los users son", users);

      let totalMoney = 0;
      users.forEach((user) => {
        totalMoney += parseFloat(user.money);
      });

      if (totalMoney !== 0) {
        console.log(totalMoney);
        console.log("La cantidad total de dinero no coincide");
      }

      const average = totalMoney / users.length;

      const balances = {};
      for (const { name, money } of users) {
        balances[name] = money - average;
      }

      console.log(balances);

      const result = [];
      while (Object.keys(balances).length > 1) {
        const minUser = Object.keys(balances).reduce((a, b) =>
          balances[a] < balances[b] ? a : b
        );
        const maxUser = Object.keys(balances).reduce((a, b) =>
          balances[a] > balances[b] ? a : b
        );
        const amount = Math.min(Math.abs(balances[minUser]), balances[maxUser]);

        console.log("amount", amount);
        balances[minUser] += amount;
        balances[maxUser] -= amount;
        result.push({ from: maxUser, to: minUser, amount });
        if (balances[maxUser] === 0) delete balances[maxUser];
        if (balances[minUser] === 0) delete balances[minUser];
      }
      crearValores(result);
      for (const { from, to, amount } of result) {
        console.log(`${to} debe ${amount} a ${from}`);
      }

      console.log(result);
      // Do something with the result here, like display it on the page
    } catch (error) {
      console.error(error);
      // Handle the error here, like displaying an error message on the page
    }
  }

  function crearValores(result) {
    console.log("result", result);
    setDeudas(result);
  }

  async function handleCreateDebt(){
     var deu=[];
      //agregamos a cada deuda si se ah pagado o no
      deudas.forEach((deuda) => {
        deu.push({
          from: deuda.from,
          to: deuda.to,
          amount: deuda.amount,
          paid: false,
          grupo: selectedGroup,
          date: new Date(),
        });
      });
      console.log("deuda", deu);



    const response = await addDeuda(deu);
  console.log(response);
    if (response.status === 200 || response.status === 201) {
      toast.success("Deudas creadas correctamente");
      router.push("/user/grupos");
    } else {
      toast.error("Error al crear las deudas");
    }
  }

  return (
    <MainLayout>
      <Toaster position="bottom-center" />
      <div className="relative">
        <select
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          name="concerned_GRUPOS"
          id="editar-gruposa"
          onChange={(e) => setSelectedGroup(e.target.value)}
          required
        >
          <option value="">Selecciona un grupo</option>
          {groups.map((group, key) => (
            <option key={key} value={group.name}>
              {group.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M18.8 17.2l-4.9-4.9C15.3 10.3 16 8.7 16 7c0-3.3-2.7-6-6-6S4 3.7 4 7s2.7 6 6 6c1.7 0 3.3-.7 4.5-1.9l4.9 4.9c.2.2.5.2.7 0l1.4-1.4c.2-.2.2-.5 0-.7zM5 7c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.8 2.8-2 3.5v2.2c0 .6-.4 1-1 1s-1-.4-1-1v-2.2c-1.2-.7-2-2-2-3.5zm8 7c-1.6 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
          </svg>
        </div>
      </div>

      {member ? (
        member.map((member, key) => (
          <div key={key} className="flex flex-wrap p-4">
            <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
              <label
                htmlFor="nombre"
                className="text-sm font-medium text-black bg-white"
              >
                Nombre:
              </label>
              <input
                id={`nombre-${key}`}
                name={`nombre-${key}`}
                type="text"
                disabled
                value={member.name}
                className="w-full rounded-md bg-[#dfd2c1] text-black border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/2 p-2">
              <label
                htmlFor="valor"
                className="text-sm font-medium text-white bg-black"
              >
                Cuanto puso:
              </label>
              <input
                id={`valor-${key}`}
                name={`valor-${key}`}
                type="text"
                placeholder="Ingresa un valor en SOLES"
                pattern="^\d{1,10}(\.\d{0,10})?$"

                // value={member.money}
                onChange={(e) => updateValue(key, "money", e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-wrap p-4">
          {toast.error("No hay miembros")}
        </div>
      )}
      {selectedGroup ? (
        <div className="flex flex-col justify-center">
          <button
            onClick={handleAddMemberClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calcular
          </button>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-col max-w-3xl:w-full items-center justify-center pt-4 space-y-4">
        <div className="w-full bg-gray-100 rounded-md flex flex-wrap flex-col items-center shadow-md justify-center">
          {deudas.map((deuda, index) => (
            <div
              key={index}
              className="max-w-3xl flex flex-col flex-wrap justify-center items-center w-full rounded-md shadow-md overflow-hidden"
            >
              <div
                className={`flex items-center flex-wrap justify-center p-4 border-b border-gray-300 ${
                  deuda.amount > 0 ? "bg-red-100" : "bg-green-100"
                }`}
              >
                <div className="m-4 font-semibold">{deuda.to}</div>
                
                <div className="">
                  {deuda.amount > 0 ? "le debe a" : "no le debe a"}
                </div>
                <div className="font-semibold ml-2">{deuda.from}</div>
                <div className="ml-5 sm:ml-8 mt-2 font-semibold">
                  {Math.abs(deuda.amount)} Sol
                </div>
            
              </div>
            </div>
          ))}
          {deudas.length > 0 && (
            <div className="flex justify-center p-4">
              <button
                onClick={handleCreateDebt}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Crear deuda
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
