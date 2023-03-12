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
      var i;
      for (transactions,  i = 0; i < transactions.length; i++) {
        if (user.wallet.sol_address != transactions[i].transaction.message.accountKeys[0]) {
          transactions[i].meta.postBalances[0] = transactions[i].meta.postBalances[1];
          transactions[i].meta.postBalances[1] = 0;
        }
      }
      // if(user.wallet.sol_address != transactions[0].transaction.message.accountKeys[0]){
      //   console.log("es el mismo");
      //   const temp =transactions[0].meta.postBalances[0];
      //   transactions[0].meta.postBalances[0]=transactions[0].meta.postBalances[1];
      //   transactions[0].meta.postBalances[1]=temp;
      //   console.log(transactions[0].meta.postBalances)
      //   // transactions[0].transaction.message.accountKeys[0] = "Tu";
      // }
      // console.log(transactions);

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
  <h1 className="text-4xl sm:text-8xl font-bold mb-8">Perfil</h1>
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 rounded-lg shadow-md bg-white">
    <div className="py-4 text-center">
      <p className="text-2xl mb-2 font-bold text-gray-600">Nombre:</p>
      <p className="text-3xl mb-8">{user.username}</p>
      <p className="text-2xl mb-2 font-bold text-gray-600">Saldo Solana:</p>
      <p className="text-3xl">{soles/1000000000} SOL</p>
    </div>
  </div>
</div>

      <div className="flex flex-col justify-center items-center mt-4 h-full">
        <h1 className="text-3xl font-bold mb-2">Transacciones realizadas</h1>
   <div className="flex flex-wrap">
  {transactions.slice(0, 30).map((item, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 h-full">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
        <div className="bg-[#dfd2c1] text-center text-white font-bold text-lg py-2">
          #{index + 1}
        </div>
        <div className="px-4 py-2 h-full">
          {item.transaction.message.accountKeys.slice(0, 2).map((account, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span className="text-gray-600 font-bold">{(account.signer) ? "Envía" : "Recibe"}</span>
              <span className="text-gray-800 font-bold">{users.find(user => user.address === account.pubkey)?.username}</span>
            </div>
          ))}
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-bold">En tu cuenta</span>
            <span className="text-gray-800 font-bold">{item.meta.postBalances[0]/1000000000}</span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </MainLayout>
  );
}
