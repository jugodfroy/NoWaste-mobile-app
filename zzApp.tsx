import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

export default function App () {
	return (
		<View style={styles.container}>
			<Text>Hello World!</Text>
			<RNPickerSelect
				onValueChange={(value) => console.log(value)}
				items={[
					{ label: "JavaScript", value: "JavaScript" },
					{ label: "TypeStript", value: "TypeStript" },
					{ label: "Python", value: "Python" },
					{ label: "Java", value: "Java" },
					{ label: "C++", value: "C++" },
					{ label: "C", value: "C" },
				]}
			/>
			<Text>Hello world</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : "gray",
		alignItems      : "center",
		justifyContent  : "center",
	},
});