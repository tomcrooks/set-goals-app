import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem({ id, text, onDeleteItem }) {
	return (
		<Pressable
			android_ripple={{ color: '#210664' }}
			style={({ pressed }) => pressed && styles.pressedItem}
			onPress={onDeleteItem.bind(this, id)}>
			<View style={styles.goalItem}>
				<Text style={styles.goalText}>{text}</Text>
			</View>
		</Pressable>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc'
	},
	pressedItem: {
		opacity: 0.5
	},
	goalText: {
		padding: 8,
		color: 'white'
	}
});
