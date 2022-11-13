import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import ImageLogo from '../../assets/imagens/Group4.svg';
import api from '../service/api';

export default function Home() {
  const [data, setData] = useState<body>({
    codigo: '0',
    message: 'Informe o código do erro no campo acima.',
  });
  const [errorCode, setErrorCode] = useState('');
  const [loading, setLoading] = useState(false);

  interface body {
    codigo: string;
    message: string;
  }

  async function handleCodeError(codigo: string) {
    setLoading(true);
    api
      .get(`getSingleCode/${codigo}`)
      .then(res => {
        if (res.data !== null) {
          setData(res.data);
        } else {
          setData({
            codigo: '0',
            message: 'Nenhum código encontrado... :(',
          });
        }
      })
      .catch(err => {
        console.log('deu erro na função handleCodeError -> ' + err);
      })
      .finally(() => setLoading(false));
  }

  return (
    <View style={style.container}>
      <View style={style.body}>
        <ImageLogo width={moderateScale(217)} height={moderateScale(40)} />

        <TextInput
          maxLength={35}
          placeholder="Código do erro"
          keyboardType='decimal-pad'
          onChangeText={setErrorCode}
          style={style.inputError}
        />

        <TouchableOpacity
          onPress={() => handleCodeError(errorCode)}
          activeOpacity={0.5}
          style={style.btnPesquisar}>
          <Text style={style.txtBtn}>
            {loading ? <ActivityIndicator color={'white'} /> : 'PESQUISAR'}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            borderBottomWidth: moderateScale(1),
            width: moderateScale(275),
            borderColor: '#262626',
            marginBottom: moderateScale(20),
          }}
        />
        <TextInput
          editable={false}
          placeholderTextColor={'white'}
          placeholder={data.message}
          style={style.divResult}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121214',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputError: {
    paddingHorizontal: moderateScale(10),
    width: moderateScale(313),
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    marginVertical: moderateScale(30),
    backgroundColor: '#7B7B7B',
    color: 'white',
  },
  btnPesquisar: {
    width: moderateScale(313),
    height: moderateScale(50),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#398193',
  },
  txtBtn: {
    color: 'white',
  },
  divResult: {
    width: moderateScale(313),
    height: moderateScale(232),
    borderRadius: moderateScale(8),
    fontSize: moderateScale(16),
    backgroundColor: '#1F1F1F',
    textAlign: 'center',
  },
});
