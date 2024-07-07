import React from 'react';
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import { RichText, Toolbar, useEditorBridge } from '@10play/tentap-editor';
import useNote from './note.hook';

const Basic = ({ route }) => {
  const { id } = route.params || {};
  const { title, setTitle, content, setContent, isLoading, error, editor } = useNote({ id });

  return (
    <SafeAreaView className="bg-sky-100 pt-[50px] p-[20px]" style={[styles.fullScreen]}>
      <TextInput
        placeholder="Titre"
        className="text-2xl mb-5"
        value={title}
        onChangeText={setTitle}
      />

      <RichText
        editor={editor}
      />

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
    bottom: 0
  },
});
