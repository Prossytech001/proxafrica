import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { colors, spacing, radius } from '../theme';


export default function CTASection() {
  return (
    <View style={styles.wrap}>
      <View style={styles.card}>
        <Text style={styles.eyebrow}>// Ready to Launch?</Text>
        <Text style={styles.title}>LET'S BUILD{'\n'}<Text style={styles.accent}>TOGETHER</Text></Text>
        <Text style={styles.sub}>
          Whether you need a platform, a strategy, or want your team trained —
          ProxAfrica is your solution ground.
        </Text>

        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={() => Linking.openURL('mailto:hello@proxafrica.com')}
            activeOpacity={0.8}
          >
            <Text style={styles.btnPrimaryText} onPress={() => Linking.openURL('https://chat.whatsapp.com/I45oBV5XfS1CSZ76Z8PX3J?mode=gi_t')}>Start a Project ↗</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGhost} activeOpacity={0.8} onPress={() => Linking.openURL('https://chat.whatsapp.com/I45oBV5XfS1CSZ76Z8PX3J?mode=gi_t')}>
            <Text style={styles.btnGhostText}>Join Training</Text>
          </TouchableOpacity>
        </View>

        {/* Decorative corner */}
        <View style={styles.cornerTL} />
        <View style={styles.cornerBR} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerLogo}>PROX<Text style={styles.footerAccent}>AFRICA</Text></Text>
        <Text style={styles.footerTag}>Solution Ground — Building Africa's Digital Future</Text>
        <Text style={styles.footerCopy}>© 2025 ProxAfrica. All rights reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  card: {
    backgroundColor: colors.surfaceRaised,
    borderRadius: radius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    position: 'relative',
    overflow: 'hidden',
  },
  eyebrow: {
    fontFamily: 'Courier New',
    fontSize: 11,
    letterSpacing: 3,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 48,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 52,
    marginBottom: spacing.lg,
  },
  accent: {
    color: colors.primary,
  },
  sub: {
    fontSize: 15,
    lineHeight: 26,
    color: colors.grey2,
    marginBottom: spacing.xl,
  },
  btns: {
    flexDirection: 'row',
    gap: 12,
    flexWrap: 'wrap',
  },
  btnPrimary: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 4,
  },
  btnPrimaryText: {
    fontFamily: 'Courier New',
    fontSize: 13,
    fontWeight: '700',
    color: '#09090B',
    letterSpacing: 1,
  },
  btnGhost: {
    borderWidth: 1,
    borderColor: colors.borderLight,
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 4,
  },
  btnGhostText: {
    fontFamily: 'Courier New',
    fontSize: 13,
    color: colors.grey1,
    letterSpacing: 1,
  },
  cornerTL: {
    position: 'absolute',
    top: 0, left: 0,
    width: 60, height: 60,
    borderTopLeftRadius: radius.xl,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: colors.primary,
    opacity: 0.3,
  },
  cornerBR: {
    position: 'absolute',
    bottom: 0, right: 0,
    width: 60, height: 60,
    borderBottomRightRadius: radius.xl,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: colors.accent,
    opacity: 0.3,
  },
  footer: {
    marginTop: spacing.xl,
    alignItems: 'center',
    gap: spacing.sm,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  footerLogo: {
    fontFamily: 'Courier New',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 4,
    color: colors.primary,
  },
  footerAccent: {
    color: colors.accent,
  },
  footerTag: {
    fontFamily: 'Courier New',
    fontSize: 10,
    letterSpacing: 1.5,
    color: colors.grey3,
    textAlign: 'center',
  },
  footerCopy: {
    fontFamily: 'Courier New',
    fontSize: 10,
    color: 'rgba(255,255,255,0.15)',
    marginTop: spacing.sm,
  },
});
