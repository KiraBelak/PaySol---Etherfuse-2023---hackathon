import MainLayout from "@/components/layouts/MainLayout";
import { useMirrorWorld } from "@/lib/useMirrorWorld";
import LoadingCircle from "@/components/common/LoadingCircle";
import { useEffect, useState } from "react";
import { getUsers } from "@/lib/user";

export default function Users() {
  const { user, token } = useMirrorWorld();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  return (
    <MainLayout>
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Usuarios</h1>
      <div className="w-full px-4">
        <div className="overflow-x-auto">
          <div className="min-w-full overflow-hidden rounded-lg shadow-xs">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nombre de usuario
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Correo electrónico
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td>
                        
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-full py-2 px-4 rounded"
  onClick={() => {
    transferSOL(user.email, 100); // Transferir 100 SOL al usuario actual
  }}
>
  Transferir
</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
  );
}
