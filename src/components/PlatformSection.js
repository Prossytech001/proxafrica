import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius } from '../theme';
import { platformFeatures } from '../data/content';

export default function PlatformSection() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>// ProxAfrica Platform</Text>
      <Text style={styles.title}>
        One platform.{'\n'}Every department.{' '}
        <Text style={styles.titleAccent}>Zero hand-coding.</Text>
      </Text>

      <View style={styles.divider} />

      <View style={styles.grid}>
        {platformFeatures.map((f, i) => (
          <View key={i} style={[styles.card, i % 2 === 1 && styles.cardOffset]}>
            <Text style={styles.cardNum}>{f.num} — {f.label}</Text>
            <Text style={styles.cardTitle}>{f.title}</Text>
            <Text style={styles.cardDesc}>{f.desc}</Text>
            <View style={[styles.cardBar, { backgroundColor: i === 0 ? colors.primary : i === 1 ? colors.accent : i === 2 ? colors.ember : colors.gold }]} />
          </View>
        ))}
      </View>

      {/* Bottom CTA area */}
      <View style={styles.ctaBanner}>
        <Text style={styles.ctaBannerLabel}>Currently live at</Text>
        <Text style={styles.ctaBannerValue}>Nnamdi Azikiwe Univercity</Text>
        <View style={styles.liveDot}>
          <View style={styles.liveInner} />
          <Text style={styles.liveText}>LIVE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    padding: spacing.lg,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
  },
  label: {
    fontFamily: 'Courier New',
    fontSize: 11,
    letterSpacing: 3,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 40,
  },
  titleAccent: {
    color: colors.primary,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  grid: {
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.surfaceRaised,
    borderRadius: radius.md,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    position: 'relative',
    overflow: 'hidden',
  },
  cardOffset: {
    marginLeft: spacing.xl,
  },
  cardNum: {
    fontFamily: 'Courier New',
    fontSize: 10,
    letterSpacing: 2,
    color: colors.grey3,
    marginBottom: spacing.sm,
  },
  cardTitle: {
    fontFamily: 'Georgia',
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
    marginBottom: spacing.sm,
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.grey2,
  },
  cardBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    borderRadius: 2,
  },
  ctaBanner: {
    marginTop: spacing.xl,
    padding: spacing.lg,
    backgroundColor: colors.primaryDim,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: 'rgba(0,212,255,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  ctaBannerLabel: {
    fontFamily: 'Courier New',
    fontSize: 10,
    color: colors.grey3,
    letterSpacing: 1,
  },
  ctaBannerValue: {
    fontFamily: 'Courier New',
    fontSize: 12,
    color: colors.primary,
    fontWeight: '700',
    flex: 1,
  },
  liveDot: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  liveInner: {
    width: 8, height: 8,
    borderRadius: 4,
    backgroundColor: '#22c55e',
  },
  liveText: {
    fontFamily: 'Courier New',
    fontSize: 10,
    color: '#22c55e',
    letterSpacing: 2,
  },
});
