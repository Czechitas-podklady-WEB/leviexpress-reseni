import { BusStop } from "../BusStop";
import "./style.css";

export const JourneyDetail = () => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        <BusStop name="Praha" station="ÚAN Florenc" time="15:55" />
      </div>
    </div>
  );
};
