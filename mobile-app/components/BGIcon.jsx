import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, SPACING } from '../theme'
import { Ionicons } from '@expo/vector-icons'

const BGIcon = ({ name, color, size, BGColor }) => {
	return (
		<View style={[styles.IconBG, { backgroundColor: BGColor }]}>
			<Ionicons name={name} color={color} size={size} />
		</View>
	)
}

const styles = StyleSheet.create({
	IconBG: {
		height: SPACING.space_30,
		width: SPACING.space_30,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: BORDERRADIUS.radius_8,
	},
})

export default BGIcon
