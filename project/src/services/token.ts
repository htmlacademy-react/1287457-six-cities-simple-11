const AUTH_TOKEN_NAME = 'six-cities-simple-token';

export type TToken = string;

export const getToken = (): TToken => {
  const token = localStorage.getItem(AUTH_TOKEN_NAME) || '';
  return token;
};

export const setToken = (token: TToken): void => {
  localStorage.setItem(AUTH_TOKEN_NAME, token);
};

export const deleteToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_NAME);
};
