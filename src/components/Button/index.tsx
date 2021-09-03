import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  LayoutAnimation,
  Platform,
  UIManager,
  LayoutChangeEvent,
} from 'react-native';

import {
  DEFAULT_ACTIVE_OPACITY,
  DEFAULT_BACKGROUND_COLOR,
  MOTION_DURATION,
} from '../../constants';
import { styles } from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface ButtonProps {
  /**
   * Label for the button
   */
  label: string;
  /**
   * Function to execute on press.
   */
  onPress: () => void;
  /**
   * Determines what the opacity of the wrapped view should be when touch is active.
   * Defaults to 0.6
   */
  activeOpacity?: number;
  /**
   * Define background color for the button
   */
  backgroundColor?: string;
  /**
   * Show a loading indicator
   */
  loading?: boolean;
  /**
   * A disabled button is greyed out and `onPress` is not called on touch.
   */
  disabled?: boolean;
}

/**
 * A button is component that the user can press to trigger an action.
 *
 * ### Usage
 * ```jsx
 * import { Button } from 'project-asdf';
 *
 * const MyComponent = () => (
 *   <Button label="Press me" onPress={() => console.log('Pressed')} />
 * );
 *
 * export default MyComponent;
 * ```
 */
export const Button = ({
  label,
  onPress,
  activeOpacity = DEFAULT_ACTIVE_OPACITY,
  backgroundColor = DEFAULT_BACKGROUND_COLOR,
  loading,
  disabled,
}: ButtonProps) => {
  const [minWidth, setMinWidth] = useState<number>(0);

  const handleOnPress = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        MOTION_DURATION,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleXY
      )
    );
    onPress();
  };

  const handleOnLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }: LayoutChangeEvent) => setMinWidth(width);

  return (
    <TouchableOpacity
      style={[
        {
          minWidth: minWidth,
        },
        styles.container,
        {
          backgroundColor,
        },
        disabled && styles.disabled,
      ]}
      onPress={handleOnPress}
      activeOpacity={activeOpacity}
      disabled={disabled}
      onLayout={handleOnLayout}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
