import * as React from 'react';
import {View, TextInput, StyleSheet, useColorScheme, KeyboardType} from "react-native";
import Colors from "../constants/Colors"; //절대경로로 하면 왜 인식이 안되지?
import Fonts from "../assets/fonts/Fonts";

interface IProps {
	placeHolder: string,
	value: string,
	setValue: (val: string) => void,
	secure: boolean
	keyboardType?: KeyboardType
	onPressOut?: () => void,
}

export default function (props: IProps) {
	const {placeHolder, value, setValue, secure, keyboardType, onPressOut} = props;
	return (
		<View style={styles.container}>
			<TextInput
				style={{fontFamily: Fonts.regular}}
				placeholder={placeHolder}
				value={value}
				onChangeText={(text: string) => setValue(text)}
				placeholderTextColor={Colors.StandardInputTextColor}
				secureTextEntry={secure}
				keyboardType={keyboardType ? keyboardType : 'default'}
				onPressOut={onPressOut}
			/>
		</View>
	)
};

const styles = StyleSheet.create({
    container: {
		backgroundColor: Colors.StandardInputBackground,
		height: 47,
		width: "80%",
		borderRadius: 4,
		justifyContent: "center",
		paddingHorizontal: 20,
		borderWidth: 1,
		borderColor: Colors.StandardInputBackground
	},
})