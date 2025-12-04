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
            <Text style={styles.statLarge}>88%</Text>
            <Text style={styles.calloutBody}>
              of adults in the US have suboptimal health literacy
            </Text>
            </View>
          </View>
</View>
</View>
</View>


          {/* RESEARCH SECTION */}
<View style={styles.researchSection}>
  <View style={styles.researchContent}>
    <Text style={styles.researchHeading}>
      Beyond being a search engine,{"\n"}
      we're{" "}
      <Text style={styles.researchHeadingItalic}>
        pushing the needle
      </Text>{" "}
      of medical research
    </Text>

    <View style={styles.pillRow}>
      <View style={styles.pill}>
        <Text style={styles.pillText}>
          Improving cardiovascular disease disparities
        </Text>
      </View>
      <View style={styles.pill2}>
        <Text style={styles.pillText}>
          Knowledge acquisition and rates of HPV vaccination
        </Text>
      </View>
      <View style={styles.pill3}>
        <Text style={styles.pillText}>
          Co-management of diabetes and cancer
        </Text>
      </View>
      <View style={styles.pill4}>
        <Text style={styles.pillText}>
          Medication barriers after hospital discharge
        </Text>
      </View>
      <View style={styles.pill5}>
        <Text style={styles.pillText}>
          Cardiovascular disease risk with rheumatoid arthritis
        </Text>
      </View>
      <View style={styles.pill6}>
        <Text style={styles.pillText}>
          Improving disparities for hypertensive individuals
        </Text>
      </View>
    </View>
  </View>
</View>


{/* TEAM SECTION */}
<View style={styles.teamSection}>
  <View style={styles.teamContent}>
    <Text style={styles.teamTitle}>
      We wouldn't be who we are without our team
    </Text>

    <View style={styles.teamCardWrap}>
      <ProfileIcon
        label="Jeffrey R. Curtis, MD"
        description="PALS Co-Founder"
      />
    </View>
  </View>
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

researchSection: {
  width: "100%",
  paddingHorizontal: 32,
  marginBottom: 80,
  alignItems: "center",
},

researchContent: {
  width: "100%",
  maxWidth: 364,
  alignItems: "flex-start",
},

researchHeading: {
  fontSize: 24,
  fontWeight: "700",
  color: "#000",
  letterSpacing: -0.48,
},

researchHeadingItalic: {
  fontSize: 24,
  fontWeight: "700",
  color: "#000",
  letterSpacing: -0.48,
  fontStyle: "italic",
},

  pillRow: {
  width: "100%",
  marginTop: 24,
  alignItems: "center"
},

pill: {
  paddingVertical: 6, 
  alignSelf: "center",
  paddingHorizontal: 18,
  borderRadius: 18,
  borderWidth: 1.2,
  borderColor: "#F9F9F9",
  backgroundColor: "#433592",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 21.53,
},

pill2: {
  alignSelf: "center",
  paddingVertical: 5.98,
  paddingHorizontal: 17.939,
  borderRadius: 17.939,
  borderWidth: 1.196,         
  borderColor: "#F9F9F9",
  backgroundColor: "#67A342",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 21.53,
},
pill3: {
  alignSelf: "center",
  paddingVertical: 5.98,
  paddingHorizontal: 17.939,
  borderRadius: 17.939,
  borderWidth: 1.196,         
  borderColor: "#F9F9F9",
  backgroundColor: "#2F5DBA",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 21.53,
},

pill4: {
  alignSelf: "center",
  paddingVertical: 5.98,
  paddingHorizontal: 17.939,
  borderRadius: 17.939,
  borderWidth: 1.196,         
  borderColor: "#F9F9F9",
  backgroundColor: "#C145AB",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 21.53,
},

pill5: {
  alignSelf: "center",
  paddingVertical: 5.98,
  paddingHorizontal: 17.939,
  borderRadius: 17.939,
  borderWidth: 1.196,         
  borderColor: "#F9F9F9",
  backgroundColor: "#86BFFF",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 21.53,
},

pill6: {
  alignSelf: "center",
  paddingVertical: 5.98,
  paddingHorizontal: 17.939,
  borderRadius: 17.939,
  borderWidth: 1.196,         
  borderColor: "#F9F9F9",
  backgroundColor: "#433592",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 21.53,
},


  pillText: {
    fontSize: 13.155,
    color: "#FFF",  fontWeight: "500",
letterSpacing: -0.263,
textAlign: "center"

  },

frame3893:{
  width: "100%",   
  alignItems: "center",},
frame3895: {
  marginTop: 24,
},

hugBox: {
  gap: "21.419",
  flexDirection: "row",
  alignItems: "center",
  display: "flex",
},

statLarge: {
  fontSize: 53.082,
  fontWeight: "700",
  color: "#000",
  letterSpacing: -1.592,
  textAlign: "center",
},

calloutBody: {
  fontSize: 16.22,
  fontWeight: "500",
  color: "#000",
  opacity: 0.66,
  lineHeight: 24.329,
  letterSpacing: -0.324,
  width: 178.815,          
  marginLeft: 21.42,       
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

teamSection: {
  width: "100%",
  paddingHorizontal: 32,
  marginTop: 80,
  marginBottom: 80,
  alignItems: "center",
},

teamContent: {
  width: "100%",
  maxWidth: 364,
  alignItems: "flex-start",
},

teamTitle: {
  fontSize: 24,
  fontWeight: "700",
  color: "#000",
  letterSpacing: -0.48,
  lineHeight: 28,
  marginBottom: 24,
},

teamCardWrap: {
  width: "100%",
},
});

