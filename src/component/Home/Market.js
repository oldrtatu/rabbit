import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import THEME from '../../config/theme';
import increment from '../../assets/incr.png';
import decrement from '../../assets/decr.png';
import international from '../../assets/int.png';

const marketData = [
  {
    code: 'ABSA',
    name: 'Absa Bank Kenya PLC',
    currentPrice: 'KSH 117.00',
    changePer: 2.24,
    isInternational: false,
  },

  {
    code: 'EQTY',
    name: 'Equity Group Ltd.',
    currentPrice: 'KSH 68.00',
    changePer: -2.24,
    isInternational: false,
  },
  {
    code: 'TSLA',
    name: 'Tesla Inc',
    currentPrice: 'KSH 79,991',
    changePer: -4.06,
    isInternational: true,
  },
  {
    code: 'AAPL',
    name: 'Apple Inc',
    currentPrice: 'KSH 28,808',
    changePer: -3.39,
    isInternational: true,
  },
];

class Market extends React.Component {
  getChange = (change) => {
    let isNegative = change < 0;

    return (
      <React.Fragment>
        <Text
          style={[
            {
              color: isNegative ? THEME.RED : THEME.GREEN,
              fontSize: 16,
              fontFamily: 'Avenir-Book',
            },
          ]}>
          {isNegative ? `${change}%` : `+${change}%`}
        </Text>
        <Image
          source={isNegative ? decrement : increment}
          style={style.change}
        />
      </React.Fragment>
    );
  };

  renderStockRateCard = (data, key) => {
    return (
      <View
        key={key}
        style={[style.cardContainer, {paddingRight: key == 3 ? 50 : 0}]}>
        <View style={style.section}>
          <Text style={[style.text, style.code]}>{data.code}</Text>
          <Text style={[style.text, style.right]}>{data.currentPrice}</Text>
        </View>

        <View style={style.section}>
          <Text style={[style.text, style.left, {fontSize: 12}]}>
            {data.name}
          </Text>
          <View style={[style.right, style.changeContainer]}>
            {this.getChange(data.changePer)}
          </View>
        </View>
        {data.isInternational ? (
          <View style={[style.international]}>
            <Image source={international} style={[style.intImage]} />
          </View>
        ) : null}
      </View>
    );
  };

  render() {
    return (
      <View style={style.container}>
        <View style={style.head}>
          <Text style={style.title}>Markets</Text>
          <Text style={style.navigateToShowAll}>Show all</Text>
        </View>

        <ScrollView
          horizontal={true}
          style={{
            marginTop: 20,
            paddingLeft: 50,
          }}
          showsHorizontalScrollIndicator={false}>
          {marketData.map((item, index) => {
            return this.renderStockRateCard(item, index);
          })}
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  head: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
  },
  navigateToShowAll: {
    marginLeft: 'auto',
    marginRight: 20,
    color: '#D9D9D9',
    fontSize: 12,
    fontFamily: 'Avenir-Book',
  },
  container: {
    position: 'relative',
  },

  // cards container

  cardContainer: {
    width: Dimensions.get('screen').width * 0.5,
    backgroundColor: '#F7F7F9',
    padding: 10,
    justifyContent: 'space-around',
    marginRight: 20,
    borderRadius: 2,
    marginBottom: 20,
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  code: {
    fontSize: 26,
    fontWeight: '600',
    marginLeft: 20,
    fontFamily: 'Avenir-Medium',
  },

  text: {
    width: 80,
    fontFamily: 'Avenir-Book',
  },

  right: {
    marginLeft: 'auto',
    marginRight: 10,
    fontFamily: 'Avenir-Book',
  },

  left: {
    marginLeft: 20,
  },

  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  change: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  international: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: -10,
    backgroundColor: '#F7F7F9',
    borderRadius: 10,
    left: 10,
    borderWidth: 2,
    borderColor: '#F7F7F9',
  },
  intImage: {
    width: 20,
    height: 20,
  },
});

export default Market;
