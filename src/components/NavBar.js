import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Platform,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { colors, spacing } from '../theme';

const { width: SCREEN_W } = Dimensions.get('window');
const IS_SMALL = SCREEN_W < 600;

const NAV_ITEMS = ['Services', 'About', 'Education', 'Platform'];

export default function NavBar({ scrollRef, sectionRefs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuAnim = useRef(new Animated.Value(0)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;

  const openMenu = () => {
    setMenuOpen(true);
    Animated.parallel([
      Animated.timing(menuAnim, { toValue: 1, duration: 280, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 1, duration: 280, useNativeDriver: true }),
    ]).start();
  };

  const closeMenu = () => {
    Animated.parallel([
      Animated.timing(menuAnim, { toValue: 0, duration: 220, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 0, duration: 220, useNativeDriver: true }),
    ]).start(() => setMenuOpen(false));
  };

  const scrollToSection = (key) => {
    closeMenu();
    const ref = sectionRefs?.[key];
    if (ref?.current && scrollRef?.current) {
      ref.current.measureLayout(
        scrollRef.current,
        (x, y) => scrollRef.current.scrollTo({ y: y - 70, animated: true }),
        () => {}
      );
    }
  };

  // Hamburger bar animations → X
  const top1 = menuAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 6] });
  const rot1 = menuAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '45deg'] });
  const op2  = menuAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0] });
  const top3 = menuAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -6] });
  const rot3 = menuAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-45deg'] });

  // Drawer slides in from left
  const drawerTranslate = menuAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-320, 0],
  });

  return (
    <>
      {/* ── NAV BAR ── */}
      <View style={styles.nav}>

        {/* Logo */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => scrollRef?.current?.scrollTo({ y: 0, animated: true })}
        >
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Desktop links */}
        {!IS_SMALL && (
          <View style={styles.desktopLinks}>
            {NAV_ITEMS.map(item => (
              <TouchableOpacity
                key={item}
                onPress={() => scrollToSection(item.toLowerCase())}
                activeOpacity={0.7}
              >
                <Text style={styles.desktopLink}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Desktop CTA button */}
        {!IS_SMALL && (
          <TouchableOpacity style={styles.ctaBtn} activeOpacity={0.8}>
            <Text style={styles.ctaBtnText}>Get In Touch</Text>
          </TouchableOpacity>
        )}

        {/* Mobile hamburger */}
        {IS_SMALL && (
          <TouchableOpacity
            onPress={menuOpen ? closeMenu : openMenu}
            activeOpacity={0.7}
            style={styles.hamburger}
          >
            <Animated.View style={[styles.bar, { transform: [{ translateY: top1 }, { rotate: rot1 }] }]} />
            <Animated.View style={[styles.bar, { opacity: op2 }]} />
            <Animated.View style={[styles.bar, { transform: [{ translateY: top3 }, { rotate: rot3 }] }]} />
          </TouchableOpacity>
        )}
      </View>

      {/* ── MOBILE DRAWER ── */}
      {menuOpen && IS_SMALL && (
        <>
          {/* Dark overlay — tap to close */}
          <TouchableWithoutFeedback onPress={closeMenu}>
            <Animated.View style={[styles.overlay, { opacity: overlayAnim }]} />
          </TouchableWithoutFeedback>

          {/* Slide-in drawer panel */}
          <Animated.View
            style={[styles.drawer, { transform: [{ translateX: drawerTranslate }] }]}
          >
            {/* Drawer top row */}
            <View style={styles.drawerHeader}>
              <Image
                source={require('../../assets/logo.png')}
                style={styles.drawerLogo}
                resizeMode="contain"
              />
              <TouchableOpacity onPress={closeMenu} style={styles.closeBtn}>
                <Text style={styles.closeBtnText}>✕</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            {/* Nav links */}
            <View style={styles.drawerLinks}>
              {NAV_ITEMS.map((item, i) => (
                <TouchableOpacity
                  key={item}
                  onPress={() => scrollToSection(item.toLowerCase())}
                  activeOpacity={0.7}
                  style={styles.drawerItem}
                >
                  <Text style={styles.drawerNum}>0{i + 1}</Text>
                  <Text style={styles.drawerItemText}>{item}</Text>
                  <Text style={styles.drawerArrow}>→</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.divider} />

            {/* CTA */}
            <TouchableOpacity style={styles.drawerCta} activeOpacity={0.8}>
              <Text style={styles.drawerCtaText}>Get In Touch ↗</Text>
            </TouchableOpacity>

            {/* Brand tagline at bottom */}
            <Text style={styles.drawerBrand}>PROXAFRICA · SOLUTION GROUND</Text>
          </Animated.View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: Platform.OS === 'ios' ? 52 : 18,
    paddingBottom: 14,
    backgroundColor: 'rgba(9,9,11,0.92)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.06)',
  },

  logo: {
    width: 110,
    height: 36,
  },

  // ── Desktop ──
  desktopLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 28,
  },
  desktopLink: {
    fontFamily: 'Courier New',
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.45)',
  },
  ctaBtn: {
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 4,
  },
  ctaBtnText: {
    fontFamily: 'Courier New',
    fontSize: 11,
    letterSpacing: 1.5,
    color: colors.primary,
  },

  // ── Hamburger ──
  hamburger: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  bar: {
    width: 24,
    height: 2,
    backgroundColor: colors.primary,
    borderRadius: 2,
  },

  // ── Overlay ──
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
    zIndex: 110,
  },

  // ── Drawer ──
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '78%',
    maxWidth: 300,
    backgroundColor: '#0C0C11',
    zIndex: 120,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    borderRightWidth: 1,
    borderRightColor: 'rgba(0,212,255,0.1)',
  },
  drawerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 58 : 24,
    paddingBottom: spacing.sm,
  },
  drawerLogo: {
    width: 100,
    height: 32,
  },
  closeBtn: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
  },
  closeBtnText: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.06)',
    marginVertical: spacing.md,
  },
  drawerLinks: {
    gap: 0,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    gap: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  drawerNum: {
    fontFamily: 'Courier New',
    fontSize: 10,
    color: colors.primary,
    letterSpacing: 1,
    width: 24,
  },
  drawerItemText: {
    fontFamily: 'Courier New',
    fontSize: 14,
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.8)',
    flex: 1,
  },
  drawerArrow: {
    color: 'rgba(255,255,255,0.2)',
    fontSize: 14,
  },
  drawerCta: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 4,
  },
  drawerCtaText: {
    fontFamily: 'Courier New',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#09090B',
  },
  drawerBrand: {
    fontFamily: 'Courier New',
    fontSize: 9,
    letterSpacing: 2,
    color: 'rgba(255,255,255,0.12)',
    textAlign: 'center',
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
  },
});
