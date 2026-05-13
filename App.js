import React, { useRef } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Platform,
} from 'react-native';
import { colors } from './src/theme';

import NavBar from './src/components/NavBar';
import HeroSection from './src/components/HeroSection';
import StatsSection from './src/components/StatsSection';
import StickyCardStack from './src/components/StickyCardStack';
import AboutSection from './src/components/AboutSection';
import PlatformSection from './src/components/PlatformSection';
import CTASection from './src/components/CTASection';

import { services, education } from './src/data/content';

export default function App() {
  const scrollRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const platformRef = useRef(null);

  const sectionRefs = {
    services: servicesRef,
    about: aboutRef,
    education: educationRef,
    platform: platformRef,
  };

  const scrollTo = (ref) => {
    if (!ref?.current || !scrollRef?.current) return;
    ref.current.measureLayout(
      scrollRef.current,
      (x, y) => scrollRef.current.scrollTo({ y, animated: true }),
      () => {}
    );
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bg} />

      {/* NAV — now uses the NavBar component */}
      <NavBar scrollRef={scrollRef} sectionRefs={sectionRefs} />

      {/* MAIN SCROLL */}
      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={Platform.OS === 'ios'}
      >
        <HeroSection onCta={() => scrollTo(servicesRef)} />

        <StatsSection />

        <View ref={servicesRef} collapsable={false}>
          <StickyCardStack
            label="// What We Do"
            title={'We Solve Real\nBusiness Problems'}
            cards={services}
          />
        </View>

        <View ref={aboutRef} collapsable={false}>
          <AboutSection />
        </View>

        
          <StickyCardStack
            label="// Tech Education"
            title={'We Train the\nNext Generation'}
            cards={education}
          />
        

        <View ref={platformRef} collapsable={false}>
          <PlatformSection />
        </View>

        <CTASection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scroll: {
    flex: 1,
  },
  content: {
    backgroundColor: colors.bg,
    paddingBottom: 60,
  },
});
