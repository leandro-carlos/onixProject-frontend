import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import ImageLogo from '../../assets/imagens/Group4.svg';

export default function Home() {
  const [errorCode, setErrorCode] = useState('');

  return (
    <View style={style.container}>
      <View style={style.body}>
        <ImageLogo width={moderateScale(217)} height={moderateScale(40)} />

        <TextInput
          maxLength={35}
          placeholder="Código do erro"
          onChangeText={setErrorCode}
          style={style.inputError}
        />

        <TouchableOpacity activeOpacity={0.5} style={style.btnPesquisar}>
          <Text style={style.txtBtn}>PESQUISAR</Text>
        </TouchableOpacity>

        <Text
          style={{
            borderBottomWidth: 1,
            width: 275,
            borderColor: '#262626',
            marginBottom: 20,
          }}
        />
        <TextInput
          editable={false}
          placeholderTextColor={'white'}
          placeholder={'Informe o código do erro no campo acima.'}
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
