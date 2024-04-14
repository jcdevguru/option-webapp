import React, { useState } from 'react';

const OptionChainForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        assetName: '',
        optionType: 'Call',
        assetPriceLow: '',
        assetPriceHigh: '',
        strikePriceLow: '',
        strikePriceHigh: '',
        riskFreeRate: '',
        volatility: '',
        daysToExpiry: ''
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
            <label style={labelStyle}>
                Asset Price Range (Low):
                <input type="number" name="assetPriceLow" value={formData.assetPriceLow} onChange={handleChange} />
            </label>
            <label style={labelStyle}>
                Asset Price Range (High):
                <input type="number" name="assetPriceHigh" value={formData.assetPriceHigh} onChange={handleChange} />
            </label>
            <label style={labelStyle}>
                Strike Price Range (Low):
                <input type="number" name="strikePriceLow" value={formData.strikePriceLow} onChange={handleChange} />
            </label>
            <label style={labelStyle}>
                Strike Price Range (High):
                <input type="number" name="strikePriceHigh" value={formData.strikePriceHigh} onChange={handleChange} />
            </label>
            <label style={labelStyle}>
                Risk-Free Rate:
                <input type="number" name="riskFreeRate" value={formData.riskFreeRate} onChange={handleChange} />
            </label>
            <label style={labelStyle}>
                Volatility:
                <input type="number" name="volatility" value={formData.volatility} onChange={handleChange} />
            </label>
            <label style={labelStyle}>
                Days to Expiry Range (Low):
                <input type="number" name="daysToExpiryLow" value={formData.daysToExpiryLow} onChange={handleChange} />
            </label>
            <label style={labelStyle}>
                Days to Expiry Range (High):
                <input type="number" name="daysToExpiryHigh" value={formData.daysToExpiryHigh} onChange={handleChange} />
            </label>
            <button type="submit">Calculate Option Chain</button>
        </form>
    );
};

export default OptionChainForm;