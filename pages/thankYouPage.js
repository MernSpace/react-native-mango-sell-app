import {Text, View,StyleSheet} from 'react-native';
import ThankYouModal from '../component/thankYouModal';

const ThankYouPage = ({navigation})=>{

    return(
        <View style={styles.container}>
        <ThankYouModal navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default ThankYouPage