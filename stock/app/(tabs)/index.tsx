import { Image } from "expo-image";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation, useRouter } from "expo-router";

export default function HomeScreen() {
	const router = useRouter();
	return (
		<ThemedView
			style={{
				flex: 1,
				paddingTop: Platform.OS === "ios" ? 48 : 0,
				paddingLeft: Platform.OS === "web" ? 8 : 16,
				paddingRight: Platform.OS === "web" ? 8 : 16,
			}}
		>
			<View style={{ alignItems: "center", marginBottom: 16 }}>
				<ThemedText>Welcome!</ThemedText>
				<Button
					title="Add investments"
					onPress={(e) => {
						// Redirect to the investments screen
						console.log("Add investments button pressed", e);
						if (Platform.OS === "web") {
							window.location.href = "/investments";
						} else {
							router.navigate("/investments");
						}
					}}
				/>
			</View>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: "absolute",
	},
});
