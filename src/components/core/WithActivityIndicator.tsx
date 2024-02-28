import React, {PropsWithChildren} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type Props = {
  isLoading: boolean;
};

const WithActivityIndicator = ({
  isLoading,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <>
      {isLoading ? (
        <View style={styles.activityContainer}>
          <ActivityIndicator color={'blue'} />
        </View>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WithActivityIndicator;
