import React, { Component } from "react";
import { Text, View, ScrollView, Image, Animated } from "react-native";

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 70;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: "clamp"
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: "clamp"
    });

    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5
      ],
      extrapolate: "clamp"
    });
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: "clamp"
    });

    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            backgroundColor: "lightskyblue",
            height: headerHeight,
            zIndex: headerZindex,
            alignItems: "center"
          }}
        >
          <Animated.View
            style={{ position: "absolute", bottom: headerTitleBottom }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              Güven karanfil
            </Text>
          </Animated.View>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderWidth: 3,
              borderColor: "white",
              overflow: "hidden",
              marginTop: profileImageMarginTop,
              marginLeft: 10
            }}
          >
            <Image
              style={{ flex: 1, width: null, height: null }}
              source={require("./assets/profileYeni.jpeg")}
            />
          </Animated.View>
          <View>
            <Text style={{ fontSize: 26, fontWeight: "bold", paddingLeft: 10 }}>
              Güven
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

/*
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Easing,
  Animated,
  TouchableHighlight,
  ScrollView
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.animasyonDegeri = new Animated.Value(0);
  }

  animate(easing) {
    this.animasyonDegeri.setValue(0);
    Animated.timing(this.animasyonDegeri, {
      toValue: 1,
      duration: 1000,
      easing
    }).start();
  }

  render() {
    const marginLeft = this.animasyonDegeri.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 260]
    });
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.block, { marginLeft }]} />
        <ScrollView>
          <Text style={{ textAlign: "center" }}>
            Diğer animasyonlar için aşağı kaydır
          </Text>
          <Button
            easing="Bounce"
            onPress={this.animate.bind(this, Easing.bounce)}
          />
          <Button
            easing="Cubic"
            onPress={this.animate.bind(this, Easing.cubic)}
          />
          <Button
            easing="Back"
            onPress={this.animate.bind(this, Easing.back(2))}
          />
          <Button
            easing="Elastic"
            onPress={this.animate.bind(this, Easing.elastic(2))}
          />
          <Button
            easing="Ease"
            onPress={this.animate.bind(this, Easing.ease)}
          />
          <Button
            easing="InOut"
            onPress={this.animate.bind(this, Easing.inOut(Easing.quad))}
          />
          <Button
            easing="In"
            onPress={this.animate.bind(this, Easing.in(Easing.quad))}
          />
          <Button
            easing="Out"
            onPress={this.animate.bind(this, Easing.out(Easing.quad))}
          />
          <Button easing="Sin" onPress={this.animate.bind(this, Easing.sin)} />
          <Button
            easing="Linear"
            onPress={this.animate.bind(this, Easing.linear)}
          />
          <Button
            easing="Quad"
            onPress={this.animate.bind(this, Easing.quad)}
          />
        </ScrollView>
      </View>
    );
  }
}

const Button = ({ onPress, easing }) => (
  <TouchableHighlight style={styles.button} onPress={onPress}>
    <Text>{easing}</Text>
  </TouchableHighlight>
);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  button: {
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#ededed",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: "red"
  }
});
*/
