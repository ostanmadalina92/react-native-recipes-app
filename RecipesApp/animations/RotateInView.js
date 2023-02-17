import { Animated, Easing } from "react-native";
import { useRef, useEffect } from "react";

const RotateInView = (props) => {
  const rotateAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start();
  }, [rotateAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: rotateAnim,
        transform: [
          {
            rotate: rotateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["-180deg", "0deg"],
            }),
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default RotateInView;