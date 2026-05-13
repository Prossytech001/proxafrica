// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { colors, spacing, radius } from '../theme';
// import { platformFeatures } from '../data/content';

// export default function PlatformSection() {
//   return (
//     <View style={styles.wrap}>
//       <Text style={styles.label}>// ProxAfrica Platform</Text>
//       <Text style={styles.title}>
//         One platform.{'\n'}Every department.{' '}
//         <Text style={styles.titleAccent}>Zero hand-coding.</Text>
//       </Text>

//       <View style={styles.divider} />

//       <View style={styles.grid}>
//         {platformFeatures.map((f, i) => (
//           <View key={i} style={[styles.card, i % 2 === 1 && styles.cardOffset]}>
//             <Text style={styles.cardNum}>{f.num} — {f.label}</Text>
//             <Text style={styles.cardTitle}>{f.title}</Text>
//             <Text style={styles.cardDesc}>{f.desc}</Text>
//             <View style={[styles.cardBar, { backgroundColor: i === 0 ? colors.primary : i === 1 ? colors.accent : i === 2 ? colors.ember : colors.gold }]} />
//           </View>
//         ))}
//       </View>

//       {/* Bottom CTA area */}
//       <View style={styles.ctaBanner}>
//         <Text style={styles.ctaBannerLabel}>Currently live at</Text>
//         <Text style={styles.ctaBannerValue}>Nnamdi Azikiwe Univercity</Text>
//         <View style={styles.liveDot}>
//           <View style={styles.liveInner} />
//           <Text style={styles.liveText}>LIVE</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrap: {
//     padding: spacing.lg,
//     paddingTop: spacing.xxl,
//     paddingBottom: spacing.xxl,
//   },
//   label: {
//     fontFamily: 'Courier New',
//     fontSize: 11,
//     letterSpacing: 3,
//     color: colors.primary,
//     marginBottom: spacing.sm,
//   },
//   title: {
//     fontFamily: 'Georgia',
//     fontSize: 32,
//     fontWeight: '700',
//     color: colors.white,
//     lineHeight: 40,
//   },
//   titleAccent: {
//     color: colors.primary,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: colors.border,
//     marginVertical: spacing.lg,
//   },
//   grid: {
//     gap: spacing.md,
//   },
//   card: {
//     backgroundColor: colors.surfaceRaised,
//     borderRadius: radius.md,
//     padding: spacing.lg,
//     borderWidth: 1,
//     borderColor: colors.border,
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   cardOffset: {
//     marginLeft: spacing.xl,
//   },
//   cardNum: {
//     fontFamily: 'Courier New',
//     fontSize: 10,
//     letterSpacing: 2,
//     color: colors.grey3,
//     marginBottom: spacing.sm,
//   },
//   cardTitle: {
//     fontFamily: 'Georgia',
//     fontSize: 20,
//     fontWeight: '700',
//     color: colors.white,
//     marginBottom: spacing.sm,
//   },
//   cardDesc: {
//     fontSize: 14,
//     lineHeight: 22,
//     color: colors.grey2,
//   },
//   cardBar: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     bottom: 0,
//     width: 2,
//     borderRadius: 2,
//   },
//   ctaBanner: {
//     marginTop: spacing.xl,
//     padding: spacing.lg,
//     backgroundColor: colors.primaryDim,
//     borderRadius: radius.md,
//     borderWidth: 1,
//     borderColor: 'rgba(0,212,255,0.2)',
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     gap: spacing.sm,
//   },
//   ctaBannerLabel: {
//     fontFamily: 'Courier New',
//     fontSize: 10,
//     color: colors.grey3,
//     letterSpacing: 1,
//   },
//   ctaBannerValue: {
//     fontFamily: 'Courier New',
//     fontSize: 12,
//     color: colors.primary,
//     fontWeight: '700',
//     flex: 1,
//   },
//   liveDot: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 6,
//   },
//   liveInner: {
//     width: 8, height: 8,
//     borderRadius: 4,
//     backgroundColor: '#22c55e',
//   },
//   liveText: {
//     fontFamily: 'Courier New',
//     fontSize: 10,
//     color: '#22c55e',
//     letterSpacing: 2,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius } from '../theme';

const platformFeatures = [
  {
    num: '01',
    label: 'Fee Management',
    title: 'Create, assign & track fees',
    desc: 'Scope fees to a faculty, department, or specific option. Supports online (Paystack) and offline (cash) payments. Transaction logs are immutable — they cannot be edited or deleted.',
    color: colors.primary,
  },
  {
    num: '02',
    label: 'Payout System',
    title: 'Reps get paid, ProxAfrica earns',
    desc: 'Reps request payouts after collecting fees. Co-rep approval required. ProxAfrica takes ₦100 per transaction automatically. Full payout history and status tracking.',
    color: colors.accent,
  },
  {
    num: '03',
    label: 'Updates & Notifications',
    title: 'Lecture notes. Assignments. Exams.',
    desc: 'Reps post updates by category — Lecture, Assignment, Announcement, Exam. Students get push notifications instantly. Unread indicator on every update.',
    color: colors.ember || '#FF6B2B',
  },
  {
    num: '04',
    label: 'ProxBot AI + Support',
    title: 'Always-on help for every user',
    desc: 'Floating AI assistant answers questions about fees, receipts, and platform usage. Students and reps can also open support tickets with full threaded conversation.',
    color: colors.gold || '#F59E0B',
  },
];

export default function PlatformSection() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>// Platform Features</Text>
      <Text style={styles.title}>
        One platform.{'\n'}Every department.{' '}
        <Text style={styles.titleAccent}>Zero cash chaos.</Text>
      </Text>

      <View style={styles.divider} />

      {/* Tech note */}
      <View style={styles.techRow}>
        {['React Native', 'Node.js + Express', 'Supabase', 'Paystack', 'Expo Notifications'].map((t, i) => (
          <View key={i} style={styles.techPill}>
            <Text style={styles.techPillText}>{t}</Text>
          </View>
        ))}
      </View>

      <View style={styles.grid}>
        {platformFeatures.map((f, i) => (
          <View key={i} style={[styles.card, i % 2 === 1 && styles.cardOffset]}>
            <Text style={[styles.cardNum, { color: f.color }]}>{f.num} — {f.label}</Text>
            <Text style={styles.cardTitle}>{f.title}</Text>
            <Text style={styles.cardDesc}>{f.desc}</Text>
            <View style={[styles.cardBar, { backgroundColor: f.color }]} />
          </View>
        ))}
      </View>

      {/* Live banner */}
      <View style={styles.ctaBanner}>
        <Text style={styles.ctaBannerLabel}>Currently live at</Text>
        <Text style={styles.ctaBannerValue}>Nnamdi Azikiwe University</Text>
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
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: spacing.xl,
  },
  techPill: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'rgba(255,255,255,0.03)',
  },
  techPillText: {
    fontFamily: 'Courier New',
    fontSize: 9,
    letterSpacing: 1,
    color: colors.grey3,
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