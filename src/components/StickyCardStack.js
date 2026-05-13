import React, { useRef } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { colors, radius, spacing } from '../theme';

const { height: SCREEN_H } = Dimensions.get('window');

const CARD_HEIGHT = Math.min(SCREEN_H * 0.52, 420);

export default function StickyCardStack({
  title,
  label,
  cards,
  beforeContent,
  afterContent,
}) {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
      style={styles.container}
      contentContainerStyle={styles.content}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ],
        {
          useNativeDriver: true,
        }
      )}
    >
      {/* BEFORE SECTION */}
      {beforeContent}

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          Smooth mobile-first rolling cards layout
        </Text>
      </View>

      {/* CARDS */}
      <View style={styles.cardsContainer}>
        {cards.map((card, index) => {
          const inputRange = [
            index * 220,
            (index + 1) * 220,
          ];

          const translateY = scrollY.interpolate({
            inputRange,
            outputRange: [80, 0],
            extrapolate: 'clamp',
          });

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [0.94, 1],
            extrapolate: 'clamp',
          });

          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [0.4, 1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={card.id ?? index}
              style={[
                styles.columnCard,
                {
                  transform: [
                    { translateY },
                    { scale },
                  ],
                  opacity,
                },
              ]}
            >
              <CardBody
                card={card}
                index={index}
              />
            </Animated.View>
          );
        })}
      </View>

      {/* AFTER SECTION */}
      {afterContent}
    </Animated.ScrollView>
  );
}

function CardBody({ card, index }) {
  const accent = card.accent || colors.primary;

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: accent + '33',
          backgroundColor: accent + '40',
        },
      ]}
    >
      {/* TOP */}
      <View style={styles.cardTop}>
        <Text
          style={[
            styles.cardNumber,
            { color: accent },
          ]}
        >
          {card.id ||
            String(index + 1).padStart(2, '0')}
        </Text>

        {card.icon ? (
          <Text style={styles.cardIcon}>
            {card.icon}
          </Text>
        ) : null}
      </View>

      {/* BADGE */}
      <View
        style={[
          styles.badge,
          {
            backgroundColor: accent + '15',
            borderColor: accent + '30',
          },
        ]}
      >
        <Text
          style={[
            styles.badgeText,
            { color: accent },
          ]}
        >
          {card.role || 'FEATURE'}
        </Text>
      </View>

      {/* TITLE */}
      <Text style={styles.cardTitle}>
        {card.title}
      </Text>

      {/* DESC */}
      <Text style={styles.cardDesc}>
        {card.desc}
      </Text>

      {/* BULLETS */}
      {card.bullets && (
        <View style={styles.bulletsWrap}>
          {card.bullets.map((bullet, i) => (
            <View
              key={i}
              style={styles.bulletRow}
            >
              <View
                style={[
                  styles.bulletDot,
                  {
                    backgroundColor: accent,
                  },
                ]}
              />

              <Text style={styles.bulletText}>
                {bullet}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* TAGS */}
      {card.tags && (
        <View style={styles.tagsRow}>
          {card.tags.map((tag) => (
            <View
              key={tag}
              style={[
                styles.tag,
                {
                  borderColor: accent + '40',
                },
              ]}
            >
              <Text
                style={[
                  styles.tagText,
                  {
                    color: accent,
                  },
                ]}
              >
                {tag}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      colors.background ,
  },

  content: {
    paddingBottom: 100,
  },

  header: {
    paddingTop: 80,
    paddingHorizontal: spacing.lg,
    paddingBottom: 30,
  },

  label: {
    fontSize: 11,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: colors.primary,
    marginBottom: 10,
    fontFamily: 'Courier New',
  },

  title: {
    fontSize: 34,
    lineHeight: 42,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },

  subtitle: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 24,
    color: colors.grey2,
  },

  cardsContainer: {
    paddingHorizontal: 16,
    gap: 22,
  },

  columnCard: {
    width: '100%',
  },

  card: {
    minHeight: CARD_HEIGHT,
    borderWidth: 1,
    borderRadius: radius.xl || 28,
    padding: 24,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardNumber: {
    fontSize: 11,
    letterSpacing: 3,
    fontFamily: 'Courier New',
  },

  cardIcon: {
    fontSize: 34,
  },

  badge: {
    alignSelf: 'flex-start',
    marginTop: 18,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },

  badgeText: {
    fontSize: 10,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: 'Courier New',
  },

  cardTitle: {
    marginTop: 20,
    fontSize: 28,
    lineHeight: 34,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'Georgia',
  },

  cardDesc: {
    marginTop: 14,
    fontSize: 15,
    lineHeight: 25,
    color: colors.grey2,
  },

  bulletsWrap: {
    marginTop: 24,
    gap: 12,
  },

  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    marginTop: 8,
    marginRight: 10,
  },

  bulletText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 22,
    color: colors.grey2,
  },

  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 24,
  },

  tag: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  tagText: {
    fontSize: 11,
    letterSpacing: 1,
    fontFamily: 'Courier New',
  },
});