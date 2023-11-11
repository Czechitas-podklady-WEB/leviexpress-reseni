import { useState } from "react";
import { JourneyPicker } from "../../components/JourneyPicker";
import { JourneyDetail } from "../../components/JourneyDetail";
import { SelectedSeat } from "../../components/SelectedSeat";

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (selectedJourney) => {
    setJourney(selectedJourney);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />          
        </>
      )}
    </main>
  );
};
