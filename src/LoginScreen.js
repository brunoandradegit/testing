import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 

const PRIMARY_COLOR = '#4db6ac';
const DARK_BG = '#282828';
const INPUT_BORDER = '#555';

export default function Login() {
  const router = useRouter(); 

  const handleLogin = () => {
    router.replace('/home'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <View style={styles.iconBackground}>
          <Text style={styles.iconPlaceholder}>+</Text>
        </View>
        <Text style={styles.title}>REMEMBER</Text>
        <Text style={styles.subtitle}>MED</Text>
      </View>

      <View style={styles.formArea}>
        <Text style={styles.instructionText}>Entre para acessar suas receitas</Text>
        
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value="email@exemplo.com"
        />
        
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={true}
          />
          <Ionicons name="eye-off-outline" size={20} color="#999" style={styles.eyeIcon} />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}> 
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BG,
    padding: 30,
  },
  logoArea: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40,
  },
  iconBackground: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconPlaceholder: {
    fontSize: 40,
    color: 'white',
    lineHeight: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '300',
    color: 'white',
  },
  formArea: {
    flex: 1,
    alignItems: 'stretch',
  },
  instructionText: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: DARK_BG,
    borderWidth: 1,
    borderColor: INPUT_BORDER,
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: 'white',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DARK_BG,
    borderWidth: 1,
    borderColor: INPUT_BORDER,
    borderRadius: 8,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    color: 'white',
  },
  eyeIcon: {
    paddingRight: 15,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});