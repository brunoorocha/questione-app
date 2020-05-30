import AsyncStorage from '@react-native-community/async-storage';

export const useAsyncStorage = () => {
  const userKey = '@QuestioneApp:user';
  const tokenKey = '@QuestioneApp:token';

  const setUser = async (userData) => {
    if (userData) {
      const stringifyiedUserData = JSON.stringify(userData);
      await AsyncStorage.setItem(userKey, stringifyiedUserData);
      return;
    }

    await AsyncStorage.setItem(userKey, undefined);
  };

  const getUser = async () => {
    const storagedUserData = await AsyncStorage.getItem(userKey);
    return storagedUserData ? JSON.parse(storagedUserData) : undefined;
  };

  const setToken = async (token) => {
    await AsyncStorage.setItem(tokenKey, token);
  };

  const getToken = async () => {
    const storagedToken = await AsyncStorage.getItem(tokenKey);
    return storagedToken;
  };

  const clearStorage = async () => {
    await AsyncStorage.setItem(userKey, undefined);
    await AsyncStorage.setItem(tokenKey, undefined);
  };

  return { setUser, getUser, setToken, getToken, clearStorage };
};
