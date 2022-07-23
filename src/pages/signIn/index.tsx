import React, { useEffect, useState } from "react";

import { View, Text, TextInput, Pressable, Linking } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    email && password ? setIsFilled(true) : setIsFilled(false)
  }, [email, password])

  function logar() {
    alert('ok')
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#31333a',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View
        style={{
          marginBottom: 30,
          alignItems: 'flex-end'
        }}>

        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#fff'
        }}>
          Guia Comercial
        </Text>

        <Text style={{
          color: '#aaa'
        }}>
          admin
        </Text>

      </View>

      <TextInput
        onChangeText={(e) => setEmail(e)}
        value={email}
        keyboardType='email-address'
        placeholder="E-mail"
        placeholderTextColor={'#aaa'}
        style={{
          color: '#fff',
          height: 45,
          borderRadius: 45 / 2,
          margin: 4,
          width: '85%',
          backgroundColor: '#414450',
          paddingHorizontal: 20
        }} />

      <TextInput
        onChangeText={(e) => setPassword(e)}
        value={password}
        secureTextEntry={true}
        autoComplete='password'
        placeholder="Senha"
        placeholderTextColor={'#aaa'}
        style={{
          color: '#fff',
          height: 45,
          borderRadius: 45 / 2,
          margin: 4,
          width: '85%',
          backgroundColor: '#414450',
          paddingHorizontal: 20
        }} />

      <Pressable
        disabled={!isFilled}
        onPress={logar}
        style={{
          height: 45,
          borderRadius: 45 / 2,
          marginTop: 4,
          width: '85%',
          backgroundColor: isFilled ? '#fff' : '#ffffff50',
          justifyContent: 'center',
          elevation: isFilled ? 10 : 0
        }}>

        <Text style={{
          fontSize: 13,
          color: isFilled ? '#000' : '#333',
          alignSelf: 'center'
        }}>
          ENTRAR
        </Text>

      </Pressable>

      <Pressable
        onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=5586994773403`)}
        style={{
          height: 45,
          marginTop: 10,
          width: '85%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

        <Text style={{
          color: '#aaa',
          alignSelf: 'center',
          marginRight: 15
        }}>
          Fale com o Guia
        </Text>

        <Ionicons name="chatbox-outline" color={'#aaa'} size={18} />

      </Pressable>

    </View>
  )
}