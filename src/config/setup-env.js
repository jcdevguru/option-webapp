const DEFAULT_ENV_NAME = 'default';
const devEnv = { 
    REACT_APP_API_URL: 'http://localhost:8080',
    USE_PROXY: true
}
const environments = {
    development: devEnv,
    [DEFAULT_ENV_NAME]: devEnv
};

const setupEnv = () => { 
    const nodeEnv = process.env.NODE_ENV;
    let env = DEFAULT_ENV_NAME;

    switch (nodeEnv) {
    case 'development':
        env = nodeEnv;
        break;
    default:
        console.warn(`warning - using '${env}' environment for unsupported system environment (NODE_ENV = ${nodeEnv})`);
    }
    return environments[env];
}

export default setupEnv();