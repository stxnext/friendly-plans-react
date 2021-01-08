import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { palette } from 'styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
  padded?: boolean;
  narrow?: boolean;
  darkBackground?: boolean;
  extraStyles?: object;
  noScrollView?: boolean;
}

export class FullScreenTemplate extends React.PureComponent<Props> {
  render() {
    const { children, padded, narrow, darkBackground, extraStyles, noScrollView } = this.props;

    return (
      <SafeAreaView style={[styles.safeArea, darkBackground && styles.darkBackground, extraStyles]}>
        {!noScrollView ? (
          <ScrollView
            contentContainerStyle={[
              styles.contentContainer,
              padded && styles.padded,
              narrow && styles.narrowContainer,
            ]}
          >
            <View style={[styles.contentContainer, narrow && styles.narrow]}>{children}</View>
          </ScrollView>
        ) : (
          <View
            style={[styles.contentContainer, padded && styles.padded, narrow && styles.narrowContainer]}
          >
            <View style={[styles.contentContainer, narrow && styles.narrow]}>{children}</View>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  contentContainer: {
    flexGrow: 1,
  },
  darkBackground: {
    backgroundColor: palette.backgroundSurface,
  },
  padded: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  narrowContainer: {
    alignItems: 'center',
  },
  narrow: {
    width: 400,
  },
});
