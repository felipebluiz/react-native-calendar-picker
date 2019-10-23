import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Controls({ styles, textStyles, label, onPressControl }) {
  return (
    <View>
      {label === 'Previous' ? (
        <FontAwesome5
        name="angle-left"
        solid
        size={20}
        color="#2FAA33"
        style={{ marginTop: -7, marginRight: 38, padding: 15 }}
        onPress={() => onPressControl()}
      />
      ) : (
        <FontAwesome5
        name="angle-right"
        solid
        size={20}
        color="#2FAA33"
        style={{ marginTop: -7, marginLeft: 38, padding: 15 }}
        onPress={() => onPressControl()}
      />
      )}
    </View>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
