import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';
import { stats } from '../data/content';

export default function StatsSection() {
  return (
    <View style={styles.wrap}>
      <View style={styles.topLine} />
      <View style={styles.grid}>
        {stats.map((s, i) => (
          <View key={i} style={styles.item}>
            <Text style={[styles.num, { color: s.color }]}>{s.num}</Text>
            <Text style={styles.label}>{s.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bottomLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  topLine: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: spacing.xl,
  },
  bottomLine: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: spacing.xl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xl,
    justifyContent: 'space-between',
  },
  item: {
    minWidth: 130,
    flex: 1,
  },
  num: {
    fontFamily: 'Georgia',
    fontSize: 44,
    fontWeight: '700',
    color: colors.primary,
    lineHeight: 48,
  },
  label: {
    fontFamily: 'Courier New',
    fontSize: 10,
    letterSpacing: 2,
    color: colors.grey3,
    textTransform: 'uppercase',
    marginTop: 6,
  },
});
