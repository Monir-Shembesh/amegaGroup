import React from 'react';
import {StyleSheet} from 'react-native';
import MaskInput from 'react-native-mask-input';

type Props = {
  value: string;
  onChange: (maskedText: string) => void;
};

const ipMask = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
];

const IpMaskedInput = ({value, onChange}: Props) => {
  return (
    <MaskInput
      value={value}
      onChangeText={onChange}
      mask={ipMask}
      style={styles.inputContainer}
      placeholder="Search for any IP"
      maskAutoComplete
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: 35,
    borderRadius: 10,
    paddingHorizontal: '2%',
    fontSize: 20,
    marginBottom: '2%',
  },
});

export default IpMaskedInput;
