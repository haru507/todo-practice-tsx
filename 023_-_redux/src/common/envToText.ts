type _Config = {
  key: string;
};

export const SERVER_URL: _Config = {
  key: process.env.REACT_APP_SERVER_URL || "",
};
