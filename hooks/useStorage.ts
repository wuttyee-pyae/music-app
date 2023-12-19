type StorageType = 'session' | 'local';
type UseStorageReturnValue = {
  getItem: (key: string, type?: StorageType) => any;
  setItem: (key: string, value: any, type?: StorageType) => boolean;
  removeItem: (key: string, type?: StorageType) => void;
};

const useStorage = (): UseStorageReturnValue => {
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' => `${type ?? 'session'}Storage`;

  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = (key: string, type?: StorageType): any => {
    const response =  isBrowser ? window[storageType(type)][key] : "";
    if(response == undefined || response == 'undefined'){
      return null
    }else{
      return JSON.parse(response)
    }
    
  };

  const setItem = (key: string, value: any, type?: StorageType): boolean => {
    if (isBrowser) {
        const storageValue = JSON.stringify(value)
      window[storageType(type)].setItem(key, storageValue);
      return true;
    }

    return false;
  };

  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

export default useStorage;