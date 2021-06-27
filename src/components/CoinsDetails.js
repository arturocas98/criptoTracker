import React,{Component} from 'react';
import { View,Text } from 'react-native';

class CoinsDetails extends Component{
    componentDidMount(){
        // console.log("monedas desde detalle:",this.props.route.params);
        const {coin} = this.props.route.params;

        this.props.navigation.setOptions({title:coin.symbol})
    }
    render(){
        
        return(
            <View>
                <Text>
                    Detalles de monedas
                </Text>
            </View>
        )
    }

}

export default CoinsDetails;