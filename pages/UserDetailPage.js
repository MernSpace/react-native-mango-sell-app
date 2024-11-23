
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from '../component/header';
import UserInput from '../component/userForm';


const UserDetailPage=()=>{
  return (
      <ScrollView>
          <Header/>
          <UserInput/>
      </ScrollView>
  )
}
const styles = StyleSheet.create({})

export default UserDetailPage;