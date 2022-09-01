import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors"; //절대경로로 하면 왜 인식이 안되지?
import Fonts from "../../assets/fonts/Fonts";

interface IProps {
	name: string,
	onPress: () => void,
	main?: boolean,
	disabled?: boolean, // disabled: mode when button cannot be pressed
}

export default function (props: IProps) {
	const {name, onPress, main, disabled} = props;
	return (
		<TouchableOpacity onPress={onPress}
            style={[styles.container, disabled ? {backgroundColor: Colors.AuthWideButtonColorDisabled} : {backgroundColor: Colors.AuthWideButtonColor}]}
            disabled={!!disabled}
		>
			{
				main ?
                    <View style={styles.mainButton}>
						<Text style={styles.buttonText}>{name}</Text>
					</View>
					: <View style={styles.subButton}>
						<Text style={styles.text}>{name}</Text>
					</View>
			}
		</TouchableOpacity>
	)
};

const styles = StyleSheet.create({
    container: {
		height: 47,
		width: "80%",
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
    mainButton: {
        width: "100%", 
        height: "100%", 
        alignItems: "center", 
        justifyContent: "center", 
    },
    subButton: {
        width: "100%", 
        height: "100%", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: Colors.background,
    },
    buttonText: {
        color: Colors.buttonText,
        fontFamily: Fonts.bold,
    },
    text: {
        color: Colors.text,
        fontFamily: Fonts.bold,
    }
})