import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PeriodTrackerScreen = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [periodLength, setPeriodLength] = useState('');

  const calculateNextPeriodDate = () => {
    import { addDays, format } from 'date-fns';

const calculateNextPeriodDate = () => {
  if (!lastPeriodDate || !cycleLength || !periodLength) {
    // Ensure all required fields are filled
    alert('Please fill in all the fields.');
    return;
  }

  // Convert input strings to date objects
  const lastPeriodDateObj = new Date(lastPeriodDate);
  const cycleLengthNum = parseInt(cycleLength, 10);
  const periodLengthNum = parseInt(periodLength, 10);

  // Calculate the next period date
  const nextPeriodDate = addDays(lastPeriodDateObj, cycleLengthNum);
  
  // You might want to store or display the calculated date
  alert(`Next period date: ${format(nextPeriodDate, 'yyyy-MM-dd')}`);
};
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Last Period Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={lastPeriodDate}
        onChangeText={(text) => setLastPeriodDate(text)}
      />

      <Text style={styles.label}>Average Cycle Length (days):</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 28"
        keyboardType="numeric"
        value={cycleLength}
        onChangeText={(text) => setCycleLength(text)}
      />

      <Text style={styles.label}>Average Period Length (days):</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 5"
        keyboardType="numeric"
        value={periodLength}
        onChangeText={(text) => setPeriodLength(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calculateNextPeriodDate}>
        <Text style={styles.buttonText}>Calculate Next Period Date</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default periodTrackerScreen;