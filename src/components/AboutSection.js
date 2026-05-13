// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { colors, spacing, radius } from '../theme';

// const pillars = [
//   'SCALABLE ARCHITECTURE — Built to grow with you',
//   'AFRICAN-FIRST DESIGN — Localized for real users',
//   'MISSION-DRIVEN — We solve, not just deliver',
// ];

// export default function AboutSection() {
//   return (
//     <View style={styles.wrap}>
//       <Text style={styles.label}>// Who We Are</Text>
//       <Text style={styles.title}>Born in Africa.{'\n'}Built for the World.</Text>

//       <View style={styles.divider} />

//       <Text style={styles.body}>
//         ProxAfrica is more than a tech company —{' '}
//         <Text style={styles.highlight}>we are a solution ground.</Text>
//         {' '}A place where African businesses come to transform their biggest
//         operational challenges into their strongest competitive advantages.
//       </Text>
//       <Text style={[styles.body, { marginTop: spacing.md }]}>
//         Founded on the belief that African institutions deserve world-class software,
//         we build{' '}
//         <Text style={styles.highlight}>scalable, smart, and affordable</Text>
//         {' '}technology that actually works in our environment.
//       </Text>

//       <View style={styles.pillars}>
//         {pillars.map((p, i) => (
//           <View key={i} style={styles.pillar}>
//             <View style={styles.pillarLine} />
//             <Text style={styles.pillarText}>{p}</Text>
//           </View>
//         ))}
//       </View>

//       {/* Visual block */}
//       <View style={styles.visual}>
//         <View style={styles.ring1} />
//         <View style={styles.ring2} />
//         <Text style={styles.visualText}>PROX</Text>
//         <View style={styles.orb1} />
//         <View style={styles.orb2} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrap: {
//     padding: spacing.lg,
//     paddingTop: spacing.xxl,
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
//     fontSize: 36,
//     fontWeight: '700',
//     color: colors.white,
//     lineHeight: 44,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: colors.border,
//     marginVertical: spacing.lg,
//   },
//   body: {
//     fontSize: 15,
//     lineHeight: 26,
//     color: colors.grey2,
//   },
//   highlight: {
//     color: colors.primary,
//     fontWeight: '600',
//   },
//   pillars: {
//     marginTop: spacing.xl,
//     gap: spacing.md,
//   },
//   pillar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: spacing.md,
//   },
//   pillarLine: {
//     width: 32,
//     height: 1,
//     backgroundColor: colors.primary,
//   },
//   pillarText: {
//     fontFamily: 'Courier New',
//     fontSize: 10,
//     letterSpacing: 1.5,
//     color: colors.grey2,
//     flex: 1,
//   },
//   visual: {
//     height: 240,
//     marginTop: spacing.xl,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//   },
//   ring1: {
//     position: 'absolute',
//     width: 200, height: 200,
//     borderRadius: 100,
//     borderWidth: 1,
//     borderColor: 'rgba(0,212,255,0.12)',
//   },
//   ring2: {
//     position: 'absolute',
//     width: 140, height: 140,
//     borderRadius: 70,
//     borderWidth: 1,
//     borderColor: 'rgba(0,212,255,0.2)',
//     backgroundColor: 'rgba(0,212,255,0.04)',
//   },
//   visualText: {
//     fontFamily: 'Georgia',
//     fontSize: 40,
//     fontWeight: '700',
//     color: 'rgba(0,212,255,0.15)',
//     letterSpacing: 8,
//   },
//   orb1: {
//     position: 'absolute',
//     width: 50, height: 50,
//     borderRadius: 25,
//     backgroundColor: 'rgba(255,107,43,0.2)',
//     top: 30, right: 60,
//     // blur simulated via opacity
//     opacity: 0.7,
//   },
//   orb2: {
//     position: 'absolute',
//     width: 30, height: 30,
//     borderRadius: 15,
//     backgroundColor: 'rgba(0,212,255,0.3)',
//     bottom: 40, left: 70,
//     opacity: 0.7,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius } from '../theme';

const pillars = [
  'ROLE-BASED ACCESS — Student, Rep & Admin dashboards',
  'IMMUTABLE LOGS — Every transaction is permanent and auditable',
  'NIGERIAN-FIRST — Paystack, USSD, cash marking & ₦ sessions',
];

// The problem cards
const problems = [
  {
    icon: '💸',
    problem: 'Cash collected by reps with no tracking',
    fix: 'Online payment via Paystack — every kobo logged',
  },
  {
    icon: '🧾',
    problem: 'Students lose receipts and can\'t prove payment',
    fix: 'PDF receipts with QR code, downloadable anytime',
  },
  {
    icon: '📋',
    problem: 'Reps have no idea who paid and who hasn\'t',
    fix: 'Real-time payment dashboard — paid, partial, unpaid',
  },
  {
    icon: '🏫',
    problem: 'Admin has zero visibility into dept finances',
    fix: 'Super admin sees every university, dept, and payment',
  },
];

export default function AboutSection() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>// The Problem We Fix</Text>
      <Text style={styles.title}>
        Nigerian campuses run on{'\n'}
        <Text style={styles.highlight}>WhatsApp and notebooks.</Text>
      </Text>

      <View style={styles.divider} />

      <Text style={styles.body}>
        Department fees are collected constantly — levies, dues, project fees, exam fees.
        But the process is completely manual. Course reps chase students on WhatsApp,
        collect cash, and keep records in notebooks or spreadsheets.{' '}
        <Text style={styles.highlight}>Money goes missing. Students forget. Reps have no accountability.</Text>
      </Text>

      <Text style={[styles.body, { marginTop: spacing.md }]}>
        ProxAfrica is the{' '}
        <Text style={styles.highlight}>campus finance operating system</Text>
        {' '}that fixes all of that — replacing chaos with a structured, role-based financial platform.
      </Text>

      {/* Problem / Fix grid */}
      <View style={styles.problemGrid}>
        {problems.map((p, i) => (
          <View key={i} style={styles.problemCard}>
            <Text style={styles.problemIcon}>{p.icon}</Text>
            <View style={styles.problemBody}>
              <Text style={styles.problemText}>✗ {p.problem}</Text>
              <Text style={styles.fixText}>✓ {p.fix}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Pillars */}
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
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 40,
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
  problemGrid: {
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  problemCard: {
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.surfaceRaised,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'flex-start',
  },
  problemIcon: {
    fontSize: 22,
    marginTop: 2,
  },
  problemBody: {
    flex: 1,
    gap: 6,
  },
  problemText: {
    fontFamily: 'Courier New',
    fontSize: 11,
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: 0.5,
  },
  fixText: {
    fontFamily: 'Courier New',
    fontSize: 11,
    color: colors.primary,
    letterSpacing: 0.5,
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