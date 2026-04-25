import { useState } from "react";
import { donationsApi } from "../api/api";

export default function CreateDonation() {

  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const submit = async () => {
    try {
      await donationsApi.post("/donations", {
        type,
        amount,
        description: "Desde React"
      });

      alert("Donación creada");
    } catch (error) {
      alert("Error al crear donación");
    }
  };

  return (
    <div>
      <h2>Crear Donación</h2>

      <input
        placeholder="Tipo"
        onChange={e => setType(e.target.value)}
      />

      <input
        placeholder="Monto"
        onChange={e => setAmount(e.target.value)}
      />

      <button onClick={submit}>Enviar</button>
    </div>
  );
}