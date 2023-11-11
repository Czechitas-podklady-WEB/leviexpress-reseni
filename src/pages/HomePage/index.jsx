import { useState } from "react";
import { JourneyPicker } from "../../components/JourneyPicker";
import { JourneyDetail } from "../../components/JourneyDetail";
import { SelectedSeat } from "../../components/SelectedSeat";
import "./style.css"

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (selectedJourney) => {
    setJourney(selectedJourney);
  };

  const handleBuy = () => {
    console.log("Objednávám.")
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
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
