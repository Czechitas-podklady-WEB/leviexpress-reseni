import React from "react";
import { Seat } from "../Seat";
import "./style.css";

const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat
          key={seat.number}
          number={seat.number}
          isOccupied={seat.isOccupied}
          isSelected={rowSelectedSeat === seat.number}
          onSeatSelected={onSeatSelected}
        />
      ))}
    </div>
  );
};

export const SeatPicker = ({
  seats,
  selectedSeat,
  onSeatSelected,
}) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row) => (
          <SeatRow
            key={row[0].number}
            row={row}
            rowSelectedSeat={selectedSeat}
            onSeatSelected={onSeatSelected}
          />
        ))}
      </div>
    </div>
  );
};
