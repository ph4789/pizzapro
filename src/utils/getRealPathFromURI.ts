// src/utils/getRealPathFromURI.ts

import {Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

// Função para transformar content:// em file:// no Android
export async function getRealPathFromURI(uri: string): Promise<string> {
  if (Platform.OS === 'ios') {
    return uri;
  }

  if (uri.startsWith('content://')) {
    const stat = await RNFetchBlob.fs.stat(uri);
    return stat.path;
  }

  return uri;
}
