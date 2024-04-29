import React, { useState } from 'react';

const CurrencySelector: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const currencies: string[] = ['USD', 'EUR', 'GBP', 'JPY', 'CAD']; // Add more currencies as needed

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    setShowOptions(false);
  };

  return (
    <div className='currency-class'>
      <p style={{'fontSize':'1.8vw'}}>Selected Currency: {selectedCurrency}</p>
      {!showOptions ? (
        <button onClick={() => setShowOptions(true)}>Change</button>
      ) : (
        <div>
          <p style={{'fontSize':'1.3vw','color':'black'}}>Select Currency:</p>
          <select value={selectedCurrency} onChange={(e) => handleCurrencyChange(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <button onClick={() => setShowOptions(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
