import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { DEFAULT_ACTIVE_OPACITY } from '../../constants';
import { styles } from './styles';

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
}: ButtonProps) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    activeOpacity={activeOpacity}
  >
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);