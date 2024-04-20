import React from 'react';
import './OptionChainTable.css'; // Make sure you link to the appropriate CSS file

const OptionChainTable = ({ response }) => {
  return (
    <div className="option-chain-container">
      <div className="header">
        {response.optionType} Strike Positions for {response.assetName}
      </div>
      {response.optionChain.map((chainLink, index) => (
        <div className="asset-section" key={index}>
          <div className="asset-heading">
            <div className="asset-price">Asset Price: {chainLink.assetPrice.toFixed(2)}</div>
            <div className="expiry-heading">
              {response.daysToExpiry.map((day, index) => (
                <div key={index} className="expiry-title">{day}</div>
              ))}
            </div>
          </div>
          <div className="strike-data-container">
            {chainLink.strikePositions.map((strikePosition, idx) => (
              <div className="strike-row" key={idx}>
                <div className="strike-price">{strikePosition.strikePrice.toFixed(2)}</div>
                {response.daysToExpiry.map((day, expiryIndex) => {
                  const position = strikePosition.positions.find(p => p.daysToExpiry === day);
                  return <div key={expiryIndex} className="price">{position ? position.price.toFixed(2) : '-'}</div>;
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
export default OptionChainTable;
