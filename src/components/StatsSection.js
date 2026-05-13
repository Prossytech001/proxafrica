// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { colors, spacing } from '../theme';
// import { stats } from '../data/content';

// export default function StatsSection() {
//   return (
//     <View style={styles.wrap}>
//       <View style={styles.topLine} />
//       <View style={styles.grid}>
//         {stats.map((s, i) => (
//           <View key={i} style={styles.item}>
//             <Text style={[styles.num, { color: s.color }]}>{s.num}</Text>
//             <Text style={styles.label}>{s.label}</Text>
//           </View>
//         ))}
//       </View>
//       <View style={styles.bottomLine} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   wrap: {
//     paddingVertical: spacing.xl,
//     paddingHorizontal: spacing.lg,
//   },
//   topLine: {
//     height: 1,
//     backgroundColor: colors.border,
//     marginBottom: spacing.xl,
//   },
//   bottomLine: {
//     height: 1,
//     backgroundColor: colors.border,
//     marginTop: spacing.xl,
//   },
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: spacing.xl,
//     justifyContent: 'space-between',
//   },
//   item: {
//     minWidth: 130,
//     flex: 1,
//   },
//   num: {
//     fontFamily: 'Georgia',
//     fontSize: 44,
//     fontWeight: '700',
//     color: colors.primary,
//     lineHeight: 48,
//   },
//   label: {
//     fontFamily: 'Courier New',
//     fontSize: 10,
//     letterSpacing: 2,
//     color: colors.grey3,
//     textTransform: 'uppercase',
//     marginTop: 6,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

// Replace with real stats as ProxAfrica grows
const stats = [
  { num: '₦0', label: 'Cash handled manually', color: colors.primary },
  { num: '3', label: 'Roles — student, rep, admin', color: colors.accent },
  { num: '100%', label: 'Payment audit trail', color: colors.ember || '#FF6B2B' },
  { num: '1', label: 'University live — UNIZIK', color: colors.gold || '#F59E0B' },
];

export default function StatsSection() {
  return (
    <View style={styles.wrap}>
      <View style={styles.topLine} />

      {/* Section label */}
      <Text style={styles.sectionLabel}>// By the numbers</Text>

      <View style={styles.grid}>
        {stats.map((s, i) => (
          <View key={i} style={styles.item}>
            <Text style={[styles.num, { color: s.color }]}>{s.num}</Text>
            <Text style={styles.label}>{s.label}</Text>
          </View>
        ))}
      </View>

      {/* Bottom tagline */}
      <View style={styles.taglineRow}>
        <View style={styles.taglineLine} />
        <Text style={styles.tagline}>Built for Nigerian campuses. Expanding university by university.</Text>
        <View style={styles.taglineLine} />
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
    marginBottom: spacing.lg,
  },
  bottomLine: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: spacing.xl,
  },
  sectionLabel: {
    fontFamily: 'Courier New',
    fontSize: 10,
    letterSpacing: 2.5,
    color: colors.grey3,
    marginBottom: spacing.lg,
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
  taglineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.xl,
  },
  taglineLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  tagline: {
    fontFamily: 'Courier New',
    fontSize: 9,
    letterSpacing: 1.5,
    color: colors.grey3,
    textAlign: 'center',
    maxWidth: 200,
  },
});