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
    Image,
    Platform,
} from "react-native";

const MenuSelect = ({ selectList }) => {
    const [isSelect, setSelect] = useState(false);
    const [choicedMenu, setChoicedMenu] = useState("");
    return (
        <View style={{ height: 350, alignItems: "center", paddingTop: 70 }}>
            <Text style={{ fontSize: 30 }}>
                {isSelect ? "선택된 메뉴는" : "메뉴를 골라볼까요 ?"}
            </Text>
            {isSelect ? (
                <>
                    <Text style={{ fontSize: 30 }}>{choicedMenu}</Text>
                    <Text style={{ fontSize: 24 }}>다시 선택하시겠습니까?</Text>
                </>
            ) : null}

            <View
                style={{
                    marginTop: 30,
                    height: 120,
                    paddingHorizontal: 40,
                    alignItems: "center",
                }}
            >
                {Platform.OS === "android" ? (
                    <Text>안드로이드는 이게 보일 겁니다</Text>
                ) : Platform.OS === "ios" ? (
                    <Text>아이폰은 이게 보일 겁니다</Text>
                ) : null}
                <ScrollView horizontal={true}>
                    <Image
                        style={{ width: 100, height: 100, marginRight: 20 }}
                        source={{
                            uri: "http://gdimg.gmarket.co.kr/638886879/still/600?ver=1617159950",
                        }}
                    />
                    <Image
                        style={{ width: 100, height: 100, marginRight: 20 }}
                        source={{
                            uri: "http://gdimg.gmarket.co.kr/638886879/still/600?ver=1617159950",
                        }}
                    />
                    <Image
                        style={{ width: 100, height: 100, marginRight: 20 }}
                        source={{
                            uri: "http://gdimg.gmarket.co.kr/638886879/still/600?ver=1617159950",
                        }}
                    />
                    <Image
                        style={{ width: 100, height: 100, marginRight: 20 }}
                        source={{
                            uri: "http://gdimg.gmarket.co.kr/638886879/still/600?ver=1617159950",
                        }}
                    />
                </ScrollView>
            </View>

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
