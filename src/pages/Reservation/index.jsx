import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Reservation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);
  
  useEffect(() => {
    const fetchReservation = async () => {
      const resp = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`
      );
      if (!resp.ok) {
        alert("Aj, karamba! Něco se pokazilo. Server se mnou nemluví 😢");
        return;
      }
      const data = await resp.json();      
      console.log(data);
    };

    fetchReservation();
  }, []);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {id}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          <p>pá 28. květen 2021</p>
          <p>Bratislava, 21:15</p>
          <p>Budapest, 23:55</p>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};
