import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JourneyPicker } from "../../components/JourneyPicker";
import { JourneyDetail } from "../../components/JourneyDetail";
import { SeatPicker } from "../../components/SeatPicker";
import "./style.css";

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (selectedJourney) => {
    setJourney(selectedJourney);
  };

  const handleBuy = async () => {
    const resp = await fetch(
      "https://apps.kodim.cz/daweb/leviexpress/api/reservation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "create",
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      }
    );
    if (!resp.ok) {
      alert("Aj, karamba! Něco se pokazilo. Server se mnou nemluví 😢");
      return;
    }
    const data = await resp.json();
    const reservation = data.results;
    navigate(`/reservation/${reservation.reservationId}`);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      <SeatPicker />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};
