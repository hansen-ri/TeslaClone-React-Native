import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        padding: 10,
    },

    button: {
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 15,
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});

export default styles;