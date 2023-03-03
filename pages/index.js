import MainLayout from "@/components/layouts/MainLayout";

import Image from 'next/image'
import logo from '../public/logo.png'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faHandHoldingUsd, faCertificate } from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  return (
    <MainLayout title="DemoPage" description="this is a demo page">
     <div className="min-h-screen w-full flex justify-center items-center">
  <div className="mx-auto py-12 text-center">
    <div className="mb-8 min-w-screen">
      <Image src={logo} alt="Paysol logo" width={250} height={250} />
      <h1 className="text-8xl left-0 font-bold text-white bg-black w-screen mt-4">Bienvenidos a Paysol</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-12">
  <div className="rounded-lg shadow-lg bg-white overflow-hidden">
    <div className="px-6 py-4">
      <div className="flex items-center mb-3">
        <FontAwesomeIcon icon={faWallet} className="text-blue-500 mr-2 w-16 h-16" />
        <h3 className="text-lg font-medium text-gray-900">Fácil de usar</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        Con Paysol, dividir la cuenta nunca ha sido tan fácil. Nuestra aplicación basada en la blockchain de Solana permite a los usuarios dividir los gastos de una salida con amigos y compartir los pagos de manera equitativa.
      </p>
    </div>
    <div className="pb-4 px-6">
      {/* contenido de la tarjeta */}
    </div>
  </div>
  <div className="rounded-lg shadow-lg bg-white overflow-hidden">
    <div className="px-6 py-4">
      <div className="flex items-center mb-3">
        <FontAwesomeIcon icon={faHandHoldingUsd} className="text-blue-500 mr-2 w-16 h-16" />
        <h3 className="text-lg font-medium text-gray-900">Seguro y confiable</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        En Paysol, la seguridad es una de nuestras principales preocupaciones. Implementamos medidas de seguridad adecuadas para proteger las claves privadas de las wallets de los usuarios y estamos comprometidos con el cumplimiento de las leyes y regulaciones locales.
      </p>
    </div>
    <div className="pb-4 px-6">
      {/* contenido de la tarjeta */}
    </div>
  </div>
  <div className="rounded-lg shadow-lg bg-white overflow-hidden">
    <div className="px-6 py-4">
      <div className="flex items-center mb-3">
        <FontAwesomeIcon icon={faCertificate} className="text-blue-500 mr-2 w-16 h-16" />
        <h3 className="text-lg font-medium text-gray-900">NFTs únicos</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">
        En Paysol, no solo nos preocupamos por la división de gastos justa, sino que también queremos que los usuarios tengan un registro visual de su experiencia compartida. Por eso, generamos NFTs únicos de cada salida que se pueden compartir en redes sociales y otros medios.
      </p>
    </div>
    <div className="pb-4 px-6">
      {/* contenido de la tarjeta */}
    </div>
  </div>
</div>

  </div>
</div>

    </MainLayout>
  );
}
