import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity>
        onPress={handlePress}
        activeOpacity={0.7}
      <Text >CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton