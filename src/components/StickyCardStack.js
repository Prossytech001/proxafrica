import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import { colors, radius, spacing } from '../theme';

const { height: SCREEN_H, width: SCREEN_W } = Dimensions.get('window');
const CARD_HEIGHT = Math.min(SCREEN_H * 0.72, 520);
const CARD_OFFSET = 24; // how much each stacked card peeks

/**
 * StickyCardStack
 * Props:
 *   title: string
 *   label: string
 *   cards: Array<{ id, title, desc, accent, icon, tags? }>
 *   renderCard: (card, index) => ReactNode  (optional override)
 */
export default function StickyCardStack({ title, label, cards }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.wrapper}>
      {/* Section Header — scrolls away normally */}
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Scroll area: card height * count gives the total scroll length */}
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={styles.scrollArea}
        contentContainerStyle={{ paddingBottom: CARD_HEIGHT * 0.3 }}
      >
        {/* Spacer so first card starts visible */}
        <View style={{ height: 20 }} />

        {cards.map((card, index) => {
          // Each card sticks when it reaches the top
          // translateY: once card scrolled to sticking point → stays, pushes by next card
          const cardScrollStart = index * (CARD_HEIGHT - CARD_OFFSET * (cards.length - index));

          const translateY = scrollY.interpolate({
            inputRange: [
              Math.max(0, cardScrollStart - CARD_HEIGHT),
              cardScrollStart,
              cardScrollStart + CARD_HEIGHT,
            ],
            outputRange: [CARD_HEIGHT * 0.15, 0, 0],
            extrapolate: 'clamp',
          });

          const scale = scrollY.interpolate({
            inputRange: [
              cardScrollStart,
              cardScrollStart + CARD_HEIGHT,
            ],
            outputRange: [1, 0.94],
            extrapolate: 'clamp',
          });

          const opacity = scrollY.interpolate({
            inputRange: [
              cardScrollStart + CARD_HEIGHT * 0.6,
              cardScrollStart + CARD_HEIGHT,
            ],
            outputRange: [1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={card.id}
              style={[
                styles.cardWrap,
                {
                  transform: [{ translateY }, { scale }],
                  opacity,
                  zIndex: index + 1,
                  top: CARD_OFFSET * index,
                  // On web, use position sticky feel via marginTop
                  marginBottom: index < cards.length - 1 ? -CARD_HEIGHT * 0.55 : 0,
                },
              ]}
            >
              <CardBody card={card} index={index} />
            </Animated.View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}

function CardBody({ card, index }) {
  const accentColor = card.accent || card.color || colors.primary;

  return (
    <View style={[styles.card, { borderTopColor: accentColor }]}>
      {/* Top row */}
      <View style={styles.cardTop}>
        <Text style={[styles.cardNum, { color: accentColor }]}>{card.id || String(index + 1).padStart(2, '0')}</Text>
        {card.icon ? <Text style={styles.cardIcon}>{card.icon}</Text> : null}
      </View>

      {/* Title */}
      <Text style={styles.cardTitle}>{card.title}</Text>

      {/* Desc */}
      <Text style={styles.cardDesc}>{card.desc}</Text>

      {/* Tags */}
      {card.tags && (
        <View style={styles.tagsRow}>
          {card.tags.map(t => (
            <View key={t} style={[styles.tag, { borderColor: accentColor + '40' }]}>
              <Text style={[styles.tagText, { color: accentColor }]}>{t}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Bottom accent line */}
      <View style={[styles.bottomLine, { backgroundColor: accentColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    minHeight: SCREEN_H,
    paddingHorizontal: spacing.md,
  },
  header: {
    paddingTop: spacing.xxl,
    paddingBottom: spacing.lg,
  },
  label: {
    fontFamily: 'Courier New',
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  title: {
    fontFamily: 'Georgia',
    fontSize: 36,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 42,
  },
  scrollArea: {
    flex: 1,
  },
  cardWrap: {
    position: 'relative',
    width: '100%',
  },
  card: {
    backgroundColor: colors.surfaceRaised,
    borderRadius: radius.lg,
    borderTopWidth: 2,
    borderTopColor: colors.primary,
    padding: spacing.lg,
    height: CARD_HEIGHT,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 20,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardNum: {
    fontFamily: 'Courier New',
    fontSize: 12,
    letterSpacing: 3,
    color: colors.primary,
  },
  cardIcon: {
    fontSize: 36,
  },
  cardTitle: {
    fontFamily: 'Georgia',
    fontSize: 28,
    fontWeight: '700',
    color: colors.white,
    lineHeight: 34,
    marginTop: spacing.md,
  },
  cardDesc: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.grey2,
    marginTop: spacing.sm,
    flex: 1,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: spacing.md,
  },
  tag: {
    borderWidth: 1,
    borderRadius: radius.sm,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    fontFamily: 'Courier New',
    fontSize: 10,
    letterSpacing: 1,
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    opacity: 0.2,
  },
});
