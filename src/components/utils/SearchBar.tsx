import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {SearchBarProps} from '../../types';

const SearchBar = ({setQuery}: SearchBarProps) => {
  const [value, setValue] = useState('');

  return (
    <View className="mx-2 my-3 rounded-lg bg-slate-200 dark:bg-slate-800">
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        onChangeText={text => {
          setValue(text);
          setQuery(text);
        }}
        value={value}
        clearButtonMode="always"
        className="p-2 text-black dark:text-white"
      />
    </View>
  );
};

export default SearchBar;
