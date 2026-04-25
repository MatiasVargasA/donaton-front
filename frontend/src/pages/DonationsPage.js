export default function DonationsPage() {
  return (
    <div className="bg-surface min-h-screen">

      {/* TOP BAR */}
      <header className="bg-white border-b flex justify-between items-center px-6 h-16 fixed w-full z-40">
        <h1 className="text-xl font-bold text-blue-800">Donaton</h1>
      </header>

      {/* SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-64 h-screen bg-gray-100 fixed top-16 left-0 p-4">
        <h2 className="font-bold mb-4">Menú</h2>

        <button className="text-left p-2 hover:bg-gray-200 rounded">
          Dashboard
        </button>

        <button className="text-left p-2 hover:bg-gray-200 rounded">
          Donaciones
        </button>
      </aside>

      {/* MAIN */}
      <main className="lg:ml-64 pt-24 p-6">

        <h1 className="text-3xl font-bold mb-6">
          Registro de Donaciones
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* FORM */}
          <div className="md:col-span-8 bg-white p-6 rounded-xl shadow">

            <h2 className="text-xl font-semibold mb-4">
              Detalles del Suministro
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <select className="p-2 border rounded">
                <option>Seleccionar categoría</option>
                <option>Alimentos</option>
                <option>Médico</option>
              </select>

              <input
                className="p-2 border rounded"
                placeholder="Entidad donante"
              />

              <input
                className="p-2 border rounded"
                type="number"
                placeholder="Cantidad"
              />

              <select className="p-2 border rounded">
                <option>kg</option>
                <option>unidades</option>
              </select>

            </div>

            <textarea
              className="w-full mt-4 p-2 border rounded"
              placeholder="Descripción"
            />

          </div>

          {/* RESUMEN */}
          <div className="md:col-span-4 bg-blue-200 p-6 rounded-xl">

            <h2 className="text-xl font-bold mb-4">
              Resumen
            </h2>

            <p>Categoría: -</p>
            <p>Cantidad: 0</p>

            <button className="mt-4 w-full bg-blue-700 text-white p-3 rounded">
              Confirmar
            </button>

          </div>

        </div>

      </main>
    </div>
  );
}