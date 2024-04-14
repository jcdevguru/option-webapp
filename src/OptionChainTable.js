import React from 'react';

const OptionChainTable = ({ response }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>{response.optionType} Strike Positions for {response.assetName}</th>
                </tr>
            </thead>
            <tbody>
                {response.optionChain.map((chainLink, index) => (
                    <React.Fragment key={index}>
                        <tr>
                            <th>Asset Price: {chainLink.assetPrice.toFixed(2)}</th>
                        </tr>
                        <tr>
                            <td>
                                {chainLink.strikePositions.map((strikePosition, index) => (
                                    <table key={index}>
                                        <thead>
                                            <tr>
                                                <th>Strike Price</th>
                                                <th>Days to Expiry</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {strikePosition.positions.map((expiryPrice, index) => (
                                                <tr key={index}>
                                                    {index === 0 && <td rowSpan={strikePosition.positions.length}>{strikePosition.strikePrice.toFixed(2)}</td>}
                                                    <td>{expiryPrice.daysToExpiry}</td>
                                                    <td>{expiryPrice.price.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ))}
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}
export default OptionChainTable;