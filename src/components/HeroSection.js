// import React, { useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
//   Dimensions,
//   Platform,
// } from 'react-native';
// import { colors, spacing } from '../theme';
// import { Linking } from 'react-native';

// const { height: H, width: W } = Dimensions.get('window');

// export default function HeroSection({ onCta }) {
//   const fadeTitle = useRef(new Animated.Value(0)).current;
//   const slideTitle = useRef(new Animated.Value(40)).current;
//   const fadeSub = useRef(new Animated.Value(0)).current;
//   const slideSub = useRef(new Animated.Value(30)).current;
//   const fadeCta = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.sequence([
//       Animated.delay(200),
//       Animated.parallel([
//         Animated.timing(fadeTitle, { toValue: 1, duration: 700, useNativeDriver: true }),
//         Animated.timing(slideTitle, { toValue: 0, duration: 700, useNativeDriver: true }),
//       ]),
//       Animated.parallel([
//         Animated.timing(fadeSub, { toValue: 1, duration: 600, useNativeDriver: true }),
//         Animated.timing(slideSub, { toValue: 0, duration: 600, useNativeDriver: true }),
//       ]),
//       Animated.timing(fadeCta, { toValue: 1, duration: 500, useNativeDriver: true }),
//     ]).start();
//   }, []);

//   return (
//     <View style={styles.hero}>
//       {/* Background grid lines */}
//       <View style={styles.gridLines} pointerEvents="none">
//         {[...Array(6)].map((_, i) => (
//           <View key={i} style={[styles.gridLine, { left: `${(i + 1) * 14.28}%` }]} />
//         ))}
//         {[...Array(4)].map((_, i) => (
//           <View key={i} style={[styles.gridLineH, { top: `${(i + 1) * 20}%` }]} />
//         ))}
//       </View>

//       {/* Tag */}
//       <Animated.View style={[styles.tagWrap, { opacity: fadeTitle }]}>
//         <View style={styles.tagDot} />
//         <Text style={styles.tag}>Solution Ground — Nigeria's Tech Frontier</Text>
//       </Animated.View>

//       {/* Main title */}
//       <Animated.View style={{ opacity: fadeTitle, transform: [{ translateY: slideTitle }] }}>
//         <Text style={styles.titleSm}>WE BUILD</Text>
//         <Text style={styles.titleLg}>
//           SOLU<Text style={styles.titleAccent}>TIONS</Text>
//         </Text>
//         <Text style={styles.titleMd}>
//           FOR <Text style={styles.titleAccent2}>AFRICA</Text>
//         </Text>
//       </Animated.View>

//       {/* Sub */}
//       <Animated.Text style={[styles.sub, { opacity: fadeSub, transform: [{ translateY: slideSub }] }]}>
//         ProxAfrica is the{' '}
//         <Text style={styles.subAccent}>solution ground</Text>
//         {' '}— transforming how businesses operate, students learn, and institutions scale.
//       </Animated.Text>

//       {/* CTA row */}
//       <Animated.View style={[styles.ctaRow, { opacity: fadeCta }]}>
//         <TouchableOpacity style={styles.btnPrimary} onPress={onCta} activeOpacity={0.8}>
//           <Text style={styles.btnPrimaryText}>Explore Services →</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.btnGhost} activeOpacity={0.8} onPress={() => Linking.openURL('https://wa.me/message/BFK5N4OMHUXXG1')}>
//           <Text style={styles.btnGhostText}>Get In Touch ↗</Text>
//         </TouchableOpacity>
            
//       </Animated.View>

//       {/* Scroll hint */}
//       <Animated.View style={[styles.scrollHint, { opacity: fadeCta }]}>
//         <View style={styles.scrollLine} />
//         <Text style={styles.scrollText}>SCROLL</Text>
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   hero: {
//     minHeight: H,
//     paddingHorizontal: spacing.lg,
//     paddingTop: Platform.OS === 'ios' ? 120 : 90,
//     paddingBottom: spacing.xxl,
//     justifyContent: 'center',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   gridLines: {
//     position: 'absolute',
//     top: 0, left: 0, right: 0, bottom: 0,
//   },
//   gridLine: {
//     position: 'absolute',
//     top: 0, bottom: 0,
//     width: 1,
//     backgroundColor: 'rgba(255,255,255,0.025)',
//   },
//   gridLineH: {
//     position: 'absolute',
//     left: 0, right: 0,
//     height: 1,
//     backgroundColor: 'rgba(255,255,255,0.025)',
//   },
//   tagWrap: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     marginBottom: spacing.lg,
//   },
//   tagDot: {
//     width: 6, height: 6,
//     borderRadius: 3,
//     backgroundColor: colors.primary,
//   },
//   tag: {
//     fontFamily: 'Courier New',
//     fontSize: 11,
//     letterSpacing: 2,
//     color: colors.grey3,
//     textTransform: 'uppercase',
//   },
//   titleSm: {
//     fontFamily: 'Georgia',
//     fontSize: 22,
//     fontWeight: '400',
//     color: colors.grey2,
//     letterSpacing: 6,
//     textTransform: 'uppercase',
//   },
//   titleLg: {
//     fontFamily: 'Georgia',
//     fontSize: Math.min(W * 0.17, 80),
//     fontWeight: '700',
//     color: colors.white,
//     lineHeight: Math.min(W * 0.17, 80) * 1.0,
//     letterSpacing: -1,
//   },
//   titleMd: {
//     fontFamily: 'Georgia',
//     fontSize: Math.min(W * 0.13, 60),
//     fontWeight: '700',
//     color: colors.white,
//     lineHeight: Math.min(W * 0.13, 60) * 1.1,
//     letterSpacing: -1,
//   },
//   titleAccent: {
//     color: colors.primary,
//   },
//   titleAccent2: {
//     color: colors.accent,
//   },
//   sub: {
//     fontSize: 16,
//     lineHeight: 26,
//     color: colors.grey2,
//     marginTop: spacing.xl,
//     maxWidth: 420,
//   },
//   subAccent: {
//     color: colors.primary,
//     fontWeight: '600',
//   },
//   ctaRow: {
//     flexDirection: 'row',
//     gap: 12,
//     marginTop: spacing.xl,
//     flexWrap: 'wrap',
//   },
//   btnPrimary: {
//     backgroundColor: colors.primary,
//     paddingHorizontal: 24,
//     paddingVertical: 14,
//     borderRadius: 4,
//   },
//   btnPrimaryText: {
//     fontFamily: 'Courier New',
//     fontSize: 13,
//     fontWeight: '700',
//     color: '#09090B',
//     letterSpacing: 1,
//   },
//   btnGhost: {
//     borderWidth: 1,
//     borderColor: colors.borderLight,
//     paddingHorizontal: 24,
//     paddingVertical: 14,
//     borderRadius: 4,
//   },
//   btnGhostText: {
//     fontFamily: 'Courier New',
//     fontSize: 13,
//     color: colors.grey1,
//     letterSpacing: 1,
//   },
//   scrollHint: {
//     alignItems: 'center',
//     marginTop: spacing.xxl,
//     gap: 8,
//   },
//   scrollLine: {
//     width: 1,
//     height: 40,
//     backgroundColor: colors.grey3,
//   },
//   scrollText: {
//     fontFamily: 'Courier New',
//     fontSize: 9,
//     letterSpacing: 3,
//     color: colors.grey3,
//   },
// });
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import { colors, spacing } from '../theme';
import { Linking } from 'react-native';

const { height: H, width: W } = Dimensions.get('window');

export default function HeroSection({ onCta }) {
  const fadeTitle = useRef(new Animated.Value(0)).current;
  const slideTitle = useRef(new Animated.Value(40)).current;
  const fadeSub = useRef(new Animated.Value(0)).current;
  const slideSub = useRef(new Animated.Value(30)).current;
  const fadeCta = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(200),
      Animated.parallel([
        Animated.timing(fadeTitle, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.timing(slideTitle, { toValue: 0, duration: 700, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(fadeSub, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(slideSub, { toValue: 0, duration: 600, useNativeDriver: true }),
      ]),
      Animated.timing(fadeCta, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.hero}>
      {/* Background grid lines */}
      <View style={styles.gridLines} pointerEvents="none">
        {[...Array(6)].map((_, i) => (
          <View key={i} style={[styles.gridLine, { left: `${(i + 1) * 14.28}%` }]} />
        ))}
        {[...Array(4)].map((_, i) => (
          <View key={i} style={[styles.gridLineH, { top: `${(i + 1) * 20}%` }]} />
        ))}
      </View>

      {/* Tag */}
      <Animated.View style={[styles.tagWrap, { opacity: fadeTitle }]}>
        <View style={styles.tagDot} />
        <Text style={styles.tag}>Campus Finance OS — Built for Nigerian Universities</Text>
      </Animated.View>

      {/* Main title */}
      <Animated.View style={{ opacity: fadeTitle, transform: [{ translateY: slideTitle }] }}>
        <Text style={styles.titleSm}>THE END OF</Text>
        <Text style={styles.titleLg}>
          CASH<Text style={styles.titleAccent}>LESS</Text>
        </Text>
        <Text style={styles.titleMd}>
          FEE <Text style={styles.titleAccent2}>CHAOS</Text>
        </Text>
      </Animated.View>

      {/* Sub */}
      <Animated.Text style={[styles.sub, { opacity: fadeSub, transform: [{ translateY: slideSub }] }]}>
        ProxAfrica digitizes the entire{' '}
        <Text style={styles.subAccent}>fee collection process</Text>
        {' '}between course reps, students, and faculty — eliminating cash handling, lost receipts, and payment disputes.
      </Animated.Text>

      {/* Role pills */}
      <Animated.View style={[styles.pillRow, { opacity: fadeSub }]}>
        {['👨‍🎓 Students', '📋 Course Reps', '🛡️ Super Admin'].map((r, i) => (
          <View key={i} style={styles.pill}>
            <Text style={styles.pillText}>{r}</Text>
          </View>
        ))}
      </Animated.View>

      {/* CTA row */}
      <Animated.View style={[styles.ctaRow, { opacity: fadeCta }]}>
        <TouchableOpacity style={styles.btnPrimary} onPress={onCta} activeOpacity={0.8}>
          <Text style={styles.btnPrimaryText}>See How It Works →</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnGhost} activeOpacity={0.8} onPress={() => Linking.openURL('https://wa.me/message/BFK5N4OMHUXXG1')}>
          <Text style={styles.btnGhostText}>Request Access ↗</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Scroll hint */}
      <Animated.View style={[styles.scrollHint, { opacity: fadeCta }]}>
        <View style={styles.scrollLine} />
        <Text style={styles.scrollText}>SCROLL</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    minHeight: H,
    paddingHorizontal: spacing.lg,
    paddingTop: Platform.OS === 'ios' ? 120 : 90,
    paddingBottom: spacing.xxl,
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  gridLines: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
  },
  gridLine: {
    position: 'absolute',
    top: 0, bottom: 0,
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.025)',
  },
  gridLineH: {
    position: 'absolute',
    left: 0, right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.025)',
  },
  tagWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: spacing.lg,
  },
  tagDot: {
    width: 6, height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  tag: {
    fontFamily: 'Courier New',
    fontSize: 11,
    letterSpacing: 2,
    color: colors.grey3,
    textTransform: 'uppercase',
  },
  titleSm: {
    fontFamily: 'Georgia',
    fontSize: 22,
    fontWeight: '400',
    color: colors.grey2,
    letterSpacing: 6,
    textTransform: 'uppercase',
  },
  titleLg: {
    fontFamily: 'Georgia',
    fontSize: Math.min(W * 0.17, 80),
    fontWeight: '700',
    color: colors.white,
    lineHeight: Math.min(W * 0.17, 80) * 1.0,
    letterSpacing: -1,
  },
  titleMd: {
    fontFamily: 'Georgia',
    fontSize: Math.min(W * 0.13, 60),
    fontWeight: '700',
    color: colors.white,
    lineHeight: Math.min(W * 0.13, 60) * 1.1,
    letterSpacing: -1,
  },
  titleAccent: {
    color: colors.primary,
  },
  titleAccent2: {
    color: colors.accent,
  },
  sub: {
    fontSize: 16,
    lineHeight: 26,
    color: colors.grey2,
    marginTop: spacing.xl,
    maxWidth: 420,
  },
  subAccent: {
    color: colors.primary,
    fontWeight: '600',
  },
  pillRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: spacing.lg,
    flexWrap: 'wrap',
  },
  pill: {
    borderWidth: 1,
    borderColor: 'rgba(0,212,255,0.2)',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: 'rgba(0,212,255,0.05)',
  },
  pillText: {
    fontFamily: 'Courier New',
    fontSize: 10,
    letterSpacing: 1,
    color: colors.grey2,
  },
  ctaRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: spacing.xl,
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
  scrollHint: {
    alignItems: 'center',
    marginTop: spacing.xxl,
    gap: 8,
  },
  scrollLine: {
    width: 1,
    height: 40,
    backgroundColor: colors.grey3,
  },
  scrollText: {
    fontFamily: 'Courier New',
    fontSize: 9,
    letterSpacing: 3,
    color: colors.grey3,
  },
});