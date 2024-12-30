import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyle,textStyles,isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`min-h-[10px] justify-center
    items-center ${containerStyle} ${isLoading?'opacity-50':''}`}
    // style={{boxShadow:"shadow"}}
    >
      <Text className={`${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton