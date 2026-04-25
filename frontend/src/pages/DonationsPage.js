import { useState } from "react";

function DonationPage() {
  const [form, setForm] = useState({
    tipo: "",
    entidad: "",
    cantidad: "",
    prioridad: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaDonacion = {
      ...form,
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      color:
        form.prioridad === "critica"
          ? "red"
          : form.prioridad === "urgente"
          ? "orange"
          : "blue",
    };

    const guardadas = JSON.parse(localStorage.getItem("donaciones")) || [];

    localStorage.setItem(
      "donaciones",
      JSON.stringify([...guardadas, nuevaDonacion])
    );

    alert("Donación guardada");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-xl font-bold text-blue-700 mb-6">Donaton</h1>

        <ul className="space-y-3">
          <li className="text-gray-600">Panel</li>
          <li className="text-blue-700 font-bold">Registro</li>
          <li><a href="/mapa" className="text-gray-600 hover:text-blue-700 transition">Mapa</a></li>
        </ul>
      </aside>

      {/* CONTENIDO */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Registro de Donaciones
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md grid grid-cols-2 gap-6"
        >
          {/* Tipo */}
          <div>
            <label className="block mb-2 font-semibold">
              Tipo de Donación
            </label>
            <select
              name="tipo"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Seleccionar</option>
              <option value="alimentos">Alimentos</option>
              <option value="medico">Médico</option>
            </select>
          </div>

          {/* Entidad */}
          <div>
            <label className="block mb-2 font-semibold">
              Entidad Donante
            </label>
            <input
              name="entidad"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Cantidad */}
          <div>
            <label className="block mb-2 font-semibold">
              Cantidad
            </label>
            <input
              name="cantidad"
              type="number"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          {/* Prioridad */}
          <div>
            <label className="block mb-2 font-semibold">
              Prioridad
            </label>
            <select
              name="prioridad"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="normal">Normal</option>
              <option value="urgente">Urgente</option>
              <option value="critica">Crítica</option>
            </select>
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            className="col-span-2 bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Guardar Donación
          </button>
        </form>
      </div>
    </div>
  );
}

export default DonationPage;