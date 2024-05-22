import React, { useState } from 'react';

const OptionChainForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    assetName: 'ACME',
    optionType: 'Call',
    assetPriceLow: '100',
    assetPriceHigh: '102',
    assetPriceStep: '0.25',
    strikePriceLow: '101',
    strikePriceHigh: '103',
    strikePriceStep: '0.25',
    daysToExpiryLow: '1',
    daysToExpiryHigh: '3',
    daysToExpiryStep: '0.25',
    riskFreeRate: '0.1',
    volatility: '0.2',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.4vh'
  };

  const formStyle = { 
    marginLeft: '2%',
  }

  const fieldsetStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.1vh'
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <label style={labelStyle}>
                Asset Name:
        <input type="text" name="assetName" value={formData.assetName} onChange={handleChange} />
      </label>
      <label style={labelStyle}>
                Option type (Call or Put):
        <select name="optionType" value={formData.optionType} onChange={handleChange}>
          <option value="Call">Call</option>
          <option value="Put">Put</option>
        </select>
      </label>
      <fieldset style={fieldsetStyle}>
        <legend>Asset Price Range</legend>
        <label style={labelStyle}>
                    Low:
          <input type="number" name="assetPriceLow" value={formData.assetPriceLow} onChange={handleChange} />
        </label>
        <label style={labelStyle}>
                    Step:
          <input type="number" name="assetPriceStep" value={formData.assetPriceStep} onChange={handleChange} />
        </label>
        <label style={labelStyle}>
                    High:
          <input type="number" name="assetPriceHigh" value={formData.assetPriceHigh} onChange={handleChange} />
        </label>
      </fieldset>
      <fieldset style={fieldsetStyle}>
        <legend>Strike Price Range</legend>
        <label style={labelStyle}>
                    Low:
          <input type="number" name="strikePriceLow" value={formData.strikePriceLow} onChange={handleChange} />
        </label>
        <label style={labelStyle}>
                    Step:
          <input type="number" name="strikePriceStep" value={formData.strikePriceStep} onChange={handleChange} />
        </label>
        <label style={labelStyle}>
                    High:
          <input type="number" name="strikePriceHigh" value={formData.strikePriceHigh} onChange={handleChange} />
        </label>
      </fieldset>
      <fieldset style={fieldsetStyle}>
        <legend>Days to Expiry Range</legend>
        <label style={labelStyle}>
                    Low:
          <input type="number" name="daysToExpiryLow" value={formData.daysToExpiryLow} onChange={handleChange} />
        </label>
        <label style={labelStyle}>
                    Step:
          <input type="number" name="daysToExpiryStep" value={formData.daysToExpiryStep} onChange={handleChange} />
        </label>
        <label style={labelStyle}>
                    High:
          <input type="number" name="daysToExpiryHigh" value={formData.daysToExpiryHigh} onChange={handleChange} />
        </label>
      </fieldset>
      <label style={labelStyle}>
                Volatility:
        <input type="number" name="volatility" value={formData.volatility} onChange={handleChange} />
      </label>
      <label style={labelStyle}>
                Risk-Free Rate:
        <input type="number" name="riskFreeRate" value={formData.riskFreeRate} onChange={handleChange} />
      </label>
      <button type="submit">Calculate Option Chain</button>
    </form>
  );
};

export default OptionChainForm;