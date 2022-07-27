import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
      },
    
      carTitles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
    
      titlesHeader: {
        fontSize: 50,
        fontWeight: 'bold',
      },
    
      titlesSubtitle: {
        fontSize: 18,
        // color: '#5c5e62 ',
      },
    
      carImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },

        buttonContainer: {
            position: 'absolute',
            bottom: 50,
            width: '100%',
        },

        subtitleCTA: {
            textDecorationLine: 'underline',
        }

});

export default styles;