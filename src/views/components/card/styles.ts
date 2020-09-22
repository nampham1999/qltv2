import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '@shared';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: Metrics.spacing.large,
    paddingHorizontal: Metrics.spacing.large,
    backgroundColor: Colors.White,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Metrics.spacing.extraLarge,
  },

  leftContent: {
    alignItems: 'center',
    right: Metrics.spacing.medium,
    bottom: '20%',
  },

  rightContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Metrics.spacing.tiny,
  },

  author: {fontSize: Metrics.FontSize.large, fontWeight: '500'},
  createAt: {
    fontSize: Metrics.FontSize.large,
    color: Colors.Text.textAcient,
  },
  foodImg: {
    width: 275,
    height: 216,
    borderRadius: 10,
    marginVertical: Metrics.spacing.large,
  },

  foodNameContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  foodName: {fontWeight: '500', fontSize: Metrics.FontSize.h5},
  locationContainer: {
    flexDirection: 'row',
    paddingTop: Metrics.spacing.medium,
  },
  at: {
    fontSize: Metrics.FontSize.large,
    color: Colors.Text.textAcient,
  },
  location: {
    fontSize: Metrics.FontSize.large,
    color: Colors.Blue,
    fontWeight: '500',
    marginLeft: Metrics.spacing.small,
  },
});

export {styles};
