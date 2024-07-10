import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import { RichText, Toolbar } from '@10play/tentap-editor';
import useNote from './note.hook';

const Basic = ({ route }) => {
  const { title, setTitle, content, setContent, isLoading, error, editor } = useNote({ route });

  return (
    <SafeAreaView className="bg-sky-100 pt-[50px] p-[20px]" style={styles.fullScreen}>
      <TextInput
        placeholder="Titre"
        className="text-2xl mb-5"
        value={title}
        onChangeText={setTitle}
      />
      <View style={{ backgroundColor: "red" }}>
        <RichText editor={editor} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <Toolbar editor={editor} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Basic;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  keyboardAvoidingView: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
