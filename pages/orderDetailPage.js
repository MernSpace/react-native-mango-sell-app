import {Text, Touchable, View} from 'react-native';
import OrderDetail from './orderDetail';

const OrderDetailPage = ({navigation})=>{
 return(
     <View>
         <OrderDetail navigation={navigation}/>
     </View>
 )
}

export default OrderDetailPage