// client/screens/about.tsx
import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import ProfileIcon from "../components/ProfileIcon";

export default function About() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.page}>
          <View style={styles.mainPage}>
              <View style={styles.globeCrop}>
              <View style={styles.globeInner} />
          </View>
            <View style={styles.heroTextWrap}>
              <Text style={styles.mainTitle}>
                Providing medical access to over half a million users
              </Text>
              <View style={styles.statsRow}>
                <Text style={styles.statLight}>510,000+ visitors</Text>
                <Text style={[styles.statLight, { marginTop: 4 }]}>
                  200+ countries
                </Text>
              </View>
            </View>
            </View>
<View style={styles.frame3941}>
  <View style={styles.frameContent}>
<View style={styles.intro}>
  <Text style={styles.lead}>
    Navigating health information online can be overwhelming and unreliable.
  </Text>

  <Text style={styles.body}>
    We provide easy-to-understand, trustworthy, and accessible healthcare,
    empowering users to make{" "}
    <Text style={styles.bodyAccent}>informed medical decisions</Text>.
  </Text>

  <Text style={styles.subHeading}>What is MedExplain?</Text>
  <Text style={styles.body}>
    MedExplain's Patient Activated Learning System is a publicly available
    platform backed by Weill Cornell Medicine for individuals to obtain
    health-related information sourced from trustworthy medical research.
    We provide clear and easy-to-understand medical information, addressing
    real-world questions with explanations that are designed to improve
    overall comprehension. Our content is curated by our medical professionals
    and undergoes a double-blind peer review to provide accurate and reliable
    information.
  </Text>

  <Text style={[styles.subHeading, { marginTop: 16 }]}>Why we started</Text>
  <Text style={styles.body}>
    Monika Safford, MD, a general internist, and Jeff Curtis, MD, a
    rheumatologist, conceived of the PALS at the University of Alabama at
    Birmingham in 2015. The two collaborated on research projects to better
    understand why so many people hesitate to take the medicines their doctors
    recommend. In the course of that work, we learned that many people had
    questions about their health that were very different than what doctors
    wanted people to know. 88% of adults in the U.S. have suboptimal health
    literacy; we aim to bridge that gap between marginalized communities and
    healthcare.
  </Text>
</View>
<View style={styles.frame3893}>
<View style={styles.frame3895}> 
            <View style={styles.hugBox}>
              {/* still editing */}
            <Text style={styles.statLarge}>88%</Text>
            <Text style={styles.calloutBody}>
              of adults in the US have suboptimal health literacy
            </Text>
            </View>
          </View>
</View>
</View>
</View>


          {/* PILL ROW */}
          <View style={styles.pillRow}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>
                Improving cardiovascular disease disparities
              </Text>
            </View>
            <View style={styles.pill}>
              <Text style={styles.pillText}>
                Co-management of diabetes and cancer
              </Text>
            </View>
            <View style={styles.pill}>
              <Text style={styles.pillText}>
                Medication barriers after hospital discharge
              </Text>
            </View>
          </View>

          {/* TEAM HEADER */}
          <View style={styles.teamHeader}>
            <Text style={styles.sectionTitle}>
              We wouldn't be who we are without our team
            </Text>
          </View>

          <View style={{ marginBottom: 32 }}>
            <ProfileIcon
              label="Keith Roach, MD"
              description="Director of Creative"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContainer: {
    paddingBottom: 48,
    flexGrow: 1,
    alignItems: "center",
  },

  // PAGE specs:
  page: {
    width: "100%",
    maxWidth: 428,
    paddingVertical: 80,
    alignItems: "flex-start",
    backgroundColor: "#F9F9F9",
  },

  mainPage: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 80,
  },

 globeCrop: {
  width: 342 / 2,      // show half the globe
  height: 342,
  overflow: "hidden", 
  marginRight: 10,
},
globeInner: {
  width: 342,       
  height: 342,
  borderRadius: 342 / 2,
  backgroundColor: "#8FBEFE",
  transform: [{ translateX: -(342 / 2) }],
},

  heroTextWrap: {
    width: 210,            
    marginLeft: 0, 
    paddingRight: 8,
  },

  mainTitle: {
    maxWidth: "100%",
    fontSize: 28,
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: -0.56,
    color: "#000",
    marginBottom: 24,
    textAlign: "left",
    lineHeight: 32,
  },

  statsRow: {
    marginTop: 8,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  statLight: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0655C0",
    lineHeight: 17.6,
    marginBottom: 8,
  },

frame3941: {
  width: "100%",
  paddingHorizontal: 32,
  paddingVertical: 80,
  alignItems: "flex-start",
  justifyContent: "center",
  marginBottom: 80, 
},

frameContent: {
  width: "100%",
  maxWidth: 364,
  alignItems: "flex-start", 
},

  intro: {
    width: "100%",
    marginBottom: 24,
  },
  lead: {
    fontSize: 24,
    color: "#000",
    fontStyle: "normal",
    fontWeight: 700,
    marginBottom: 24,
    letterSpacing: -0.48,
  },
  body: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
    letterSpacing: -0.28,
    marginTop: 8,
  },

bodyAccent: {
  color: "#433592",
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: -0.28,
},

subHeading: {
  marginTop: 24,
  fontSize: 14,
  fontWeight: "700",
  color: "#000",
  letterSpacing: -0.28,
},

  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#E6F0FF",
    marginRight: 8,
    marginBottom: 8,
  },
  pillText: {
    fontSize: 12,
    color: "#0F3682",
  },

frame3893:{},
frame3895: {
  marginTop: 12,
  marginBottom: 24,
  backgroundColor: "#F7F7F8",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  width: 178,
  height: 314,
  alignSelf: "flex-start",
  flexWrap: "nowrap",
},

  statLarge: {
    fontSize: 53.082,
    fontWeight: "700",
    color: "#000",
    letterSpacing: -1.592,
  },

  hugBox: {
  paddingHorizontal: 10,
  paddingVertical: 6,
  alignItems: "center",
  justifyContent: "center",
  marginRight: 16,
  backgroundColor: "transparent",
  alignSelf: "flex-start",
},

  calloutBody: {
    fontSize: 16.22,
    fontWeight: 500,
    color: "#000",
    opacity: 0.66,
    lineHeight: 24.329,
    letterSpacing: -0.324,
    maxWidth: 220,
    flexShrink: 1,
  },

  teamHeader: {
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
});

