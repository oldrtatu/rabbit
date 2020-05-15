import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import covid from '../../assets/news/covid.jpg';
import eco from '../../assets/news/eco.jpg';
import THEME from '../../config/theme';
import bookmark from '../../assets/news/bookmark.png';

const newsData = [
  {
    title:
      'Weekly jobless claims total 2.981 million, bringing coronavirus tally to 36.5 million',
    tags: ['#covid19', '#pandemic'],
    summary:
      'New filings for unemployment claims totaled just shy of 3 million for the most recent reporting period, a number that while still high declined for the sixth straight week, according to Labor Department figures Thursday.',
    imageURl: covid,
  },

  {
    title:
      'Goldman Sachs says a second wave of coronavirus could make the Fed rethink negative interest rates',
    tags: ['#covid19', '#pandemic', '#economic'],
    summary:
      'Another “big setback” in the U.S. economy could prompt the Federal Reserve to consider cutting interest rates into negative territory — but such a monetary policy wouldn’t be “very helpful,” a Goldman Sachs strategist said on Thursday.',
    imageURl: eco,
  },
];

class NewsHighLight extends React.Component {
  renderNews = () => {
    return newsData.map((item, index) => {
      return (
        <View
          key={index}
          style={[style.container, {paddingRight: index == 1 ? 50 : 0}]}>
          <View style={style.imageContainer}>
            <Image source={item.imageURl} style={style.image} />

            <TouchableOpacity style={style.bookmark}>
              <Image source={bookmark} style={style.bImage} />
            </TouchableOpacity>
          </View>
          <View style={style.tagContainer}>
            {item.tags.map((tag, ind) => {
              return (
                <Text key={ind} style={style.tag}>
                  {tag}
                </Text>
              );
            })}
          </View>

          <View style={style.infoContainer}>
            <Text style={style.title}>{item.title}</Text>
            <Text style={style.summary}>{item.summary}</Text>
          </View>
        </View>
      );
    });
  };
  render() {
    return (
      <View
        style={{
          marginBottom: 50,
          width: '100%',
          flex: 1,
        }}
        key={this.props.keyToSet}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 20,
            marginBottom: 20,
            fontFamily: 'Avenir-Medium',
          }}>
          News Highlights
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            paddingLeft: 50,
            // paddingRight: 100,
            flex: 1,
          }}>
          {this.renderNews()}
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: Dimensions.get('screen').width * 0.5,
    height: 300,
    resizeMode: 'cover',
    aspectRatio: 3 / 2.5,
  },
  tagContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  tag: {
    backgroundColor: THEME.BACKGROUND_COLOR,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 4,
    fontFamily: 'Avenir-Book',
  },
  infoContainer: {},
  title: {
    width: Dimensions.get('screen').width * 0.75,
    fontSize: 18,
    marginBottom: 5,
    fontWeight: '600',
    fontFamily: 'Avenir-Medium',
  },
  summary: {
    width: Dimensions.get('screen').width * 0.7,
    textAlign: 'justify',
    color: 'gray',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 5,
    fontFamily: 'Avenir-Book',
  },

  bookmark: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  bImage: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },
});

export default NewsHighLight;
