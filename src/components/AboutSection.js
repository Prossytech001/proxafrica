import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius } from '../theme';

const pillars = [
  'SCALABLE ARCHITECTURE — Built to grow with you',
  'AFRICAN-FIRST DESIGN — Localized for real users',
  'MISSION-DRIVEN — We solve, not just deliver',
];

export default function AboutSection() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>// Who We Are</Text>
      <Text style={styles.title}>Born in Africa.{'\n'}Built for the World.</Text>

      <View style={styles.divider} />

      <Text style={styles.body}>
        ProxAfrica is more than a tech company —{' '}
        <Text style={styles.highlight}>we are a solution ground.</Text>
        {' '}A place where African businesses come to transform their biggest
        operational challenges into their strongest competitive advantages.
      </Text>
      <Text style={[styles.body, { marginTop: spacing.md }]}>
        Founded on the belief that African institutions deserve world-class software,
        we build{' '}
        <Text style={styles.highlight}>scalable, smart, and affordable</Text>
        {' '}technology that actually works in our environment.
      </Text>

      <View style={styles.pillars}>
        {pillars.map((p, i) => (
          <View key={i} style={styles.pillar}>
            <View style={styles.pillarLine} />
            <Text style={styles.pillarText}>{p}</Text>
          </View>
        ))}
      </View>

      {/* Visual block */}
      <View style={styles.visual}>
        <View style={styles.ring1} />
        <View style={styles.ring2} />
        <Text style={styles.visualText}>PROX</Text>
        <View style={styles.orb1} />
        <View style={styles.orb2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    padding: spacing.lg,
    paddingTop: spacing.xxl,
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
    fontSize: 36,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 44,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  body: {
    fontSize: 15,
    lineHeight: 26,
    color: colors.grey2,
  },
  highlight: {
    color: colors.primary,
    fontWeight: '600',
  },
  pillars: {
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  pillar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  pillarLine: {
    width: 32,
    height: 1,
    backgroundColor: colors.primary,
  },
  pillarText: {
    fontFamily: 'Courier New',
    fontSize: 10,
    letterSpacing: 1.5,
    color: colors.grey2,
    flex: 1,
  },
  visual: {
    height: 240,
    marginTop: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  ring1: {
    position: 'absolute',
    width: 200, height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(0,212,255,0.12)',
  },
  ring2: {
    position: 'absolute',
    width: 140, height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: 'rgba(0,212,255,0.2)',
    backgroundColor: 'rgba(0,212,255,0.04)',
  },
  visualText: {
    fontFamily: 'Georgia',
    fontSize: 40,
    fontWeight: '700',
    color: 'rgba(0,212,255,0.15)',
    letterSpacing: 8,
  },
  orb1: {
    position: 'absolute',
    width: 50, height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,107,43,0.2)',
    top: 30, right: 60,
    // blur simulated via opacity
    opacity: 0.7,
  },
  orb2: {
    position: 'absolute',
    width: 30, height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(0,212,255,0.3)',
    bottom: 40, left: 70,
    opacity: 0.7,
  },
});
