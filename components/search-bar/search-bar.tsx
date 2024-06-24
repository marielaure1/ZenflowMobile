import { SearchNormal1 } from 'iconsax-react-native';
import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ allData, fields, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  
  useEffect(() => {
    if (searchQuery.trim() === '') {
      onSearch(allData); 
    } else {
      const filtered = allData.filter(item => {
        return fields.some(field => {
            return item[field] && item[field].toLowerCase().includes(searchQuery.trim().toLowerCase())
        })
        
      });
      onSearch(filtered); 
    }
    
  }, [searchQuery]);

  return (
      <View className="p-[15px] w-full flex-row justify-between items-center gap-md rounded-[15px] bg-base-0">
        <SearchNormal1 color={"#010101"} size={18}/>
      <TextInput
         className="w-full  h-full"
        placeholder="Rechercher..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default SearchBar;
