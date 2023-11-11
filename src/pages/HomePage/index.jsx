import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const handleJourneyChange = (journey) => {
    console.log("Nalezený spoj:", journey);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
    </main>
  );
};
