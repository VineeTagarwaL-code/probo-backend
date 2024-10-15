type TConfigProp = {
  NODE_ENV: string;
  PORT: number;
};

type TInrBalances = {
  [key: string]: {
    balance: string;
    currency: string;
  };
};

export { TConfigProp, TInrBalances };
