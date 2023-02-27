import MainLayout from "@/components/layouts/MainLayout";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
// import { addUser } from "@/lib/user";

export default function Caracas() {
  const { user, token, fetchUser, Transaction } = useMirrorWorld();
  const [soles, setSoles] = useState(0);
  const [transactions, setTransactions] = useState([]);
 
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
  <ul className="divide-y divide-gray-300 w-full">
    {transactions.map((item, index) => (
      <li key={index} className="py-2">
        <div className="flex flex-col items-center max-w-full">
          <div className="flex items-center justify-center mb-2">
            <span className="text-red-700 font-bold mr-2">#{index
+1}</span>
          </div>
       
          <div className="flex items-center flex-col justify-center w-full">
            <span className="text-gray-700 text-sm">Postbalances:</span>
            <span className="text-gray-700 font-bold mx-2 text-sm w-1/2">{JSON.stringify(item.postBalances)}</span>
  <span className="text-gray-700 text-sm">Account keys:</span>
  <span className="text-gray-700 font-bold mx-2 text-sm w-1/3 max-w-full overflow-x-scroll">{JSON.stringify(item.transaction.message.accountKeys)}</span>
</div>
</div>
      </li>
    ))}
  </ul>
</div>


    </MainLayout>
  );
}
