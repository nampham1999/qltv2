import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '@shared';

const styles = StyleSheet.create({
  loadingStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Metrics.spacing.medium,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: Metrics.spacing.medium,
    paddingVertical: Metrics.spacing.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export {styles};
