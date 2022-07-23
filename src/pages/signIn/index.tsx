import React, { useEffect, useState } from "react";

import { View, Text, TextInput, Pressable } from 'react-native'

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
          backgroundColor: isFilled ? '#fff' : '#aaa',
          justifyContent: 'center',
          elevation: isFilled? 10:0
        }}>

        <Text style={{
          color: isFilled ? '#222':'#555',
          alignSelf: 'center'
        }}>
          Login
        </Text>

      </Pressable>

      <Pressable
        style={{
          marginTop: 30
        }}>
        <Text style={{
          color: '#aaa',
        }}>
          Fale com o Guia
        </Text>
      </Pressable>

    </View>
  )
}