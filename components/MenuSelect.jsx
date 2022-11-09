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
} from "react-native";
import { Button } from "react-native-web";

const MenuSelect = ({ selectList }) => {
    const [isSelect, setSelect] = useState(false);
    const [choicedMenu, setChoicedMenu] = useState("");
    return (
        <View style={{ alignItems: "center", paddingTop: 70 }}>
            <Text style={{ fontSize: 30 }}>
                {isSelect ? "선택된 메뉴는" : "메뉴를 골라볼까요 ?"}
            </Text>
            {isSelect ? (
                <>
                    <Text style={{ fontSize: 30 }}>{choicedMenu}</Text>
                    <Text style={{ fontSize: 24 }}>다시 선택하시겠습니까?</Text>
                </>
            ) : null}
            <View>
                <TouchableOpacity
                    onPress={() => {
                        if (selectList.includes("")) {
                            Alert.alert("메뉴 입력", "메뉴를 입력해 주세요.", [
                                { text: "OK", onPress: () => {} },
                            ]);
                            return;
                        } else {
                            const index = Math.floor(
                                Math.random() * selectList.length
                            );
                            setChoicedMenu(selectList[index]);
                            setSelect(true);
                        }
                    }}
                    style={{
                        width: 100,
                        backgroundColor: "blue",
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                        marginVertical: 30,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            fontWeight: "900",
                            fontSize: 20,
                        }}
                    >
                        메뉴 선택
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MenuSelect;
