import { useEffect, useState } from "react";
import { needsApi } from "../api/api";

export default function NeedsList() {

  const [needs, setNeeds] = useState([]);

  useEffect(() => {
    needsApi.get("/needs")
      .then(res => setNeeds(res.data))
      .catch(() => alert("Error cargando necesidades"));
  }, []);

  return (
    <div>
      <h2>Necesidades</h2>

      {needs.map(n => (
        <div key={n.id}>
          {n.type} - {n.location}
        </div>
      ))}
    </div>
  );
}