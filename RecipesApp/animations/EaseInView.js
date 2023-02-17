import { Animated, Easing } from "react-native";
import { useRef, useEffect } from "react";


  const EaseInView = (props) => {
    const easeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(easeAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
        easing: Easing.elastic(1.5),
      }).start();
    }, [easeAnim]);

    return (
      <Animated.View
        style={{
          ...props.style,
          transform: [{ scale: easeAnim }],
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  export default EaseInView;