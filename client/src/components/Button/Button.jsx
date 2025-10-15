import { TouchableOpacity, Text, View } from 'react-native';

export default function Button({ label, onPress }) {
    return (
        <View className="justify-center items-center">
            <TouchableOpacity
             className="bg-[#0F3682] px-6 py-3 rounded-lg text-white"
             onPress={onPress}>
                <Text className="text-white">
                    {label}
                </Text>
            </TouchableOpacity>
        </View>

    );
}