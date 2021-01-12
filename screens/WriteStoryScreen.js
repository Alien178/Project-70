import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Header
            centerComponent={{
                text: 'Writing Hub',
                style: { color: 'white', fontSize: 20, fontWeight: 'bold' },
            }}
            backgroundColor={'purple'}
            />
            <View>
                <TextInput style = {styles.titleInputBox} placeholder = "Title of the Story"/>
            </View>
            <View>
                <TextInput style = {styles.authorInputBox} placeholder = "Name of the Author"/>
            </View>
            <View>
                <TextInput style = {styles.storyInputBox} multiline numberOfLines = {30} placeholder = "Write your Story Here"/>
            </View>
            <View>
                <TouchableOpacity style = {styles.sendButton}><Text style = {styles.sendButtonText}>Send Story</Text></TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleInputBox: {
    marginTop: 15,
    width: 350,
    borderWidth: 4,
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 24,
  },
  authorInputBox: {
    marginTop: 15,
    width: 350,
    borderWidth: 4,
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  storyInputBox: {
    marginTop: 15,
    width: 350,
    borderWidth: 4,
    alignSelf: 'center',
    height: 350,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 17,
    textAlignVertical: "top",
    textAlign: 'auto',
    paddingHorizontal: 5,
  },
  sendButton: {
    marginTop: 15,
    width: 150,
    borderWidth: 3,
    alignSelf: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#009604',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#005604',
  },

  sendButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});