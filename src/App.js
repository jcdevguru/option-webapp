import React from 'react';
import OptionChainForm from './OptionChainForm';
import OptionChainTable from './OptionChainTable';
import useApi from './useApi';
import env from './config/setup-env';
import { ReactComponent as OptionAssistantLogo } from './logo.svg';

const App = () => {
  const { REACT_APP_API_URL, USE_PROXY } = env;
  const baseUrl = USE_PROXY ? '' : REACT_APP_API_URL;

  const { data: response, loading, error, callApi } = useApi(baseUrl, 'api/v1/optionChain');

  const handleSubmit = async (formData) => {
    await callApi(formData);
  };

  const logoStyle = {
    width: '50px', // adjust as needed
    height: 'auto',
    display: 'inline-block',
    verticalAlign: 'middle'
  };

  const titleStyle = {
    display: 'inline-block',
    marginLeft: '10px',
    verticalAlign: 'middle'
  };

  const formStyle = {
    marginTop: '20px'
  };

  return (
    <div>
      <OptionAssistantLogo style={logoStyle} />
      <h1 style={titleStyle}>Option Assistant</h1>
      <OptionChainForm style={formStyle} onSubmit={handleSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && <OptionChainTable response={response} />}
    </div>
  );
};

export default App;
