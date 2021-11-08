type EnvType = {
  apiUrl: string;
};

const env: EnvType = {
  apiUrl: process.env.REACT_APP_API_URL || "",
};

export default env;
