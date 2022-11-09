import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    Platform,
} from "react-native";

const MenuInput = ({ selectList, setSelectList }) => {
    return (
        <View style={{ alignItems: "center" }}>
            {selectList.map((menu, index) => {
                return (
                    <TextInput
                        style={{
                            borderWidth: 1,
                            padding: 10,
                            width: "80%",
                            borderRadius: 5,
                            marginBottom: 20,
                        }}
                        placeholder={`메뉴 ${index + 1} 입력...`}
                        key={index}
                        value={menu}
                        onChangeText={(input) => {
                            let newArray = selectList;
                            selectList[index] = input;
                            setSelectList([...newArray]);
                        }}
                    />
                );
            })}
            <TouchableOpacity
                onPress={() => {
                    // Alert.alert("버튼 누름");
                    if (selectList.includes("")) {
                        Alert.alert("메뉴 입력", "메뉴를 입력해 주세요.", [
                            { text: "OK", onPress: () => {} },
                        ]);
                        return;
                    } else {
                        setSelectList([...selectList, ""]);
                    }
                    // let tempInputList = inputList;
                    // tempInputList.push("");
                    // inputList = tempInputList;
                }}
                style={{
                    width: 100,
                    // backgroundColor:
                    //     Platform.OS === "android" ? "green" : "blue",
                    ...Platform.select({
                        android: { backgroundColor: "green" },
                        ios: { backgroundColor: "blue" },
                    }),
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
