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
import MenuInput from "./components/MenuInput";
import MenuSelect from "./components/MenuSelect";

export default function App() {
    const [selectList, setSelectList] = useState([""]);
    return (
        <SafeAreaView>
            <ScrollView>
                <MenuSelect selectList={selectList} />
                <MenuInput
                    selectList={selectList}
                    setSelectList={setSelectList}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

// <img src="" /> 대신
// <Image source={require(...)} />
// 외부 리소스라면 <Image source={uri: (...)} /> (url 아님)

// View는 실제로 보이는 영역 (div와 같음)
// SaveAreaView는 ios의 상단 카메라 부분의 영역을 침범하지 않고 카메라 아래의 영역만 사용
// ScrollView는 스크롤이 가능한 영역
// horizontal 속성으로 가로 스크롤을 만들 수 있음

// TextInput === Input
// TextInput에는 텍스트의 변화만을 감지하는 onChangeText라는 핸들러가 있음
// event를 인자로 받지 않고 input을 인자로 받아서 e.target.value 대신 input만으로 텍스트 사용 가능

// TouchableOpacity는 해당 영역을 터치 가능하게 만들어줌으로서 Button과 비슷한 역할을 할 수 있음
// onPress로 눌렀을 때 동작을 정의 (Button도 동일)

// Alert.alert()로 알림창을 띄울 수 있음
// alert()의 첫 번째 인자는 알림창의 제목, 두 번째 인자는 알림창의 메시지, 세 번째 인자는 버튼 (text 속성으로 버튼의 텍스트 수정, onPress 속성으로 버튼을 눌렀을 때 실행될 함수 설정)

// props, state는 리액트와 동일

// Platform을 import한 후, Platform.OS === "android" 등으로 운영 체제마다 다른 화면을 보여주게끔 할 수 있음, 태그 뿐 아니라 스타일도 운영 체제별로 따로 설정 가능
// 스타일을 운영 체제 별로 간단히 적용하려면 ...Platform.select({ ios: {...}, android: {...} }) 등으로 설정 가능
// Platform.Version으로 버전도 선택 가능
// Platform.isPad, isTV 등 기기 종류도 선택 가능

