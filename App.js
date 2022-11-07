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
import MenuInput from "./components/MenuInput";

export default function App() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ height: 300 }}></View>
                <MenuInput />
            </ScrollView>
        </SafeAreaView>
    );
}

// <img src="" /> 대신
// <Image source={require(...)} />
// 외부 리소스라면 <Image source={url: (...)} />

// View는 실제로 보이는 영역 (div와 같음)
// SaveAreaView는 ios의 상단 카메라 부분의 영역을 침범하지 않고 카메라 아래의 영역만 사용
// ScrollView는 스크롤이 가능한 영역

// TextInput === Input

// TouchableOpacity는 해당 영역을 터치 가능하게 만들어줌으로서 Button과 비슷한 역할을 할 수 있음
// onPress로 눌렀을 때 동작을 정의 (Button도 동일)

// Alert.alert()로 알림창을 띄울 수 있음
