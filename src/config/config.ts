enum Enviroment {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  LOCAL = 'local',
}

interface Config {
  apiHost: string;
}

const config: Record<Enviroment, Config> = {
  [Enviroment.PRODUCTION]: {
    apiHost: 'http://localhost:5000',
  },
  [Enviroment.DEVELOPMENT]: {
    apiHost: 'http://localhost:5000',
  },
  [Enviroment.LOCAL]: {
    apiHost: 'http://localhost:5000',
  },
};

export default config[process.env.NODE_ENV as Enviroment];
