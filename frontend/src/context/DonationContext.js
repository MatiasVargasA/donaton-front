import React, { createContext, useState } from "react";

export const DonationContext = createContext();

export const DonationProvider = ({ children }) => {

  const [donations, setDonations] = useState([]);

  const addDonation = (donation) => {
    setDonations([...donations, donation]);
  };

  return (
    <DonationContext.Provider value={{ donations, addDonation }}>
      {children}
    </DonationContext.Provider>
  );
};