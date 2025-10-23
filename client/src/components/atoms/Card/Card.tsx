import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  onPress?: () => void;
  iconBackgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ 
  icon, 
  label, 
  description, 
  onPress,
  iconBackgroundColor = '#5B4FA3'
}) => {
  const Container = onPress ? TouchableOpacity : View;

  return (
    <Container
      onPress={onPress}
      style={styles.card}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={[styles.iconCircle, { backgroundColor: iconBackgroundColor }]}>
        {icon}
      </View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.description}>
        Examples: {description}
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    width: '90%',
    maxWidth: 400,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
});

export default Card;