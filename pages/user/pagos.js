import MainLayout from "@/components/layouts/MainLayout";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
import QRCode from 'qrcode.react';







export default function  Pagitos () {
   const { user} = useMirrorWorld();
   const [qrCodeImage, setQRCodeImage] = useState(null);

   
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const qrCodeContent = `{"sol": "${user.wallet.sol_address}","amount": ${amount*1000000000}}`;
      console.log(name, amount);
      setQRCodeImage(qrCodeContent);
    };
    

    
//     if (user == null) {
//         return (
//             <MainLayout>
//           <div className="flex justify-center items-center h-full">
//             <LoadingCircle color="#000000" />
//           </div>
//           </MainLayout>
//         );
//       }else{
//         const [soles, setSoles] = useState(0);

//   useEffect(() => {
//     async function fetchData() {
//       const soles = await token();
//       setSoles(soles);
//     }
//     fetchData();
//   }, []);
        return(
        <MainLayout>
           
           <div className="flex justify-center flex-col items-center h-full">
  {!qrCodeImage ? (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="text-2xl font-bold mb-2">
          Nombre:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="amount" className="text-2xl font-bold mb-2">
          Cantidad:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amount"
          type="text"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Enviar
      </button>
    </form>
  ) : (
    <QRCode value={qrCodeImage} size={256} />
  )}
</div>

        </MainLayout>
        )
      
      
    
}
   
// 