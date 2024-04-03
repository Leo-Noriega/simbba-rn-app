import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomAlert = ({ visible, title, message, onConfirm, onCancel }) => {
	return (
		<Modal
			transparent={true}
			visible={visible}
			animationType="slide"
			onRequestClose={onCancel}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalTitle}>{title}</Text>
					<Text style={styles.modalMessage}>{message}</Text>
					<TouchableOpacity style={styles.button} onPress={onConfirm}>
						<Text style={styles.textStyle}>Aceptar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalTitle: {
		marginBottom: 15,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
	},
	modalMessage: {
		marginBottom: 15,
		textAlign: 'center',
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default CustomAlert;
