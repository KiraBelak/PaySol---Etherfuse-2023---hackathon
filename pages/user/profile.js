import MainLayout from "@/components/layouts/MainLayout";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/user";
// import { addUser } from "@/lib/user";

export default function Caracas() {
  const { user, token, fetchUser, Transaction } = useMirrorWorld();
  const [soles, setSoles] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


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

  useEffect(() => {
    if (user == null) return;

    async function fetchData() {
      const soles = await token();
      setSoles(soles);
      const user = await fetchUser();
      console.log(user);
      // const formData = {
      //   username: user.username,
      //   email: user.email,
      //   address: user.wallet.sol_address,
      // };
      // await addUser(formData);

      const transactions = await Transaction();
      console.log(transactions);
      setTransactions(transactions);
    }
    fetchData();
  }, [user, token, fetchUser, Transaction]);

  if (user == null) {
    return (
      <MainLayout>
        <div className="flex justify-center items-center h-full">
          <LoadingCircle color="#000000" />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center w-screen h-full">
        <h1 className="text-5xl font-bold mb-4">Perfil</h1>
        <div className="flex flex-col items-center justify-center rounded-lg p-8 shadow-md bg-white">
          <p className="text-3xl mb-4">Nombre: {user.username}</p>
          <p className="text-3xl mb-4">Solana: {soles} SOL</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl font-bold mb-2">Transacciones realizadas</h1>
        <ul className=" divide-gray-300 w-full">
          {transactions.map((item, index) => (
            <li key={index} className="py-1">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-red-700 font-bold mr-2">
                    #{index + 1}
                  </span>
                </div>

                <div className="flex items-center flex-col justify-center w-full flex-wrap">
                
                  <span className="text-white font-bold mx-2 text-center text-sm w-full">
                  {item.transaction.message.accountKeys.slice(0, 2).map((atem, index) => (
  <div key={index}>
    <span className="text-gray-700 bg-white text-sm">
      {(atem.signer)? "Envia" : "Recibe"}
    </span>
    
    <br />
      {users.map((user, index) => (
    <span key={index} className="text-white bg-black">
          {(user.address === atem.pubkey)? user.username : ""}
    </span>
      ))}
  </div>
))}

                  </span>
                  <span className="text-black font-bold bg-white text-sm">En Tu Cuenta</span>
                  <span className="text-gray-700 font-bold mx-2 text-sm w-full max-w-full overflow-x-scroll">
                   
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
