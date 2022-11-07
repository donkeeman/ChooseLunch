import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";

const MenuInput = () => {
    return (
        <View style={{ height: 300, alignItems: "center" }}>
            <TextInput
                style={{
                    borderWidth: 1,
                    padding: 10,
                    width: "80%",
                    borderRadius: 5,
                    marginBottom: 20,
                }}
                placeholder="메뉴 입력..."
            />
            <TouchableOpacity
                onPress={() => {
                    Alert.alert("버튼 누름");
                }}
                style={{
                    width: 100,
                    backgroundColor: "blue",
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 10,
                }}
            >
                <Text
                    style={{
                        color: "white",
                        fontWeight: "900",
                        fontSize: 20,
                    }}
                >
                    메뉴 추가
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default MenuInput;
