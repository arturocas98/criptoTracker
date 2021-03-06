import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Http from '../libs/http';
import CoinsItem from '../components/CoinsItems';
import Colors from '../res/colors';

class CoinsScreen extends Component {
  state = {
    coins: [],
    loading: false,
  };
  componentDidMount = async () => {
    this.setState({loading: true});
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({coins: res.data, loading: false});
    // console.log('moneda:', res.data);
  };

  handlePress = (coin) => {
    // console.log('Ir a detalle:', this.props);
    this.props.navigation.navigate('MonedasDetalle',{coin});
  };

  render() {
    const {coins, loading} = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" style={styles.loader} />
        ) : (
          null
        )}
        <FlatList
          data={coins}
          renderItem={({item}) => <CoinsItem item={item} onPress={ ()=> this.handlePress(item)} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
