import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; 

const PRIMARY_COLOR = '#4db6ac'; 

export default function Splash() {
  const router = useRouter(); 

  const handleStart = () => {
    router.replace('/login'); 
  };

  return (
    <View style={styles.container}>
        
      <View style={styles.logoRow}> 
        <View style={styles.iconBackground}>
          <Text style={styles.iconPlaceholder}>+</Text>
        </View>
        <View style={styles.textColumn}>
            <Text style={styles.title}>REMEMBER</Text>
            <Text style={styles.subtitle}>MED</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.startButton} onPress={handleStart}>
        <Text style={styles.startButtonText}>Começar</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoRow: {
      flexDirection: 'row', 
      alignItems: 'center', 
      marginBottom: 50, 
  },
  textColumn: {
      marginLeft: 10, 
  },
  iconBackground: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconPlaceholder: {
    fontSize: 60,
    color: PRIMARY_COLOR,
    lineHeight: 80, 
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '300', 
    color: 'white',
    letterSpacing: 1.5,
  },
  startButton: {
    marginTop: 20, 
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  startButtonText: {
    color: PRIMARY_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
  }
});