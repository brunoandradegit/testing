import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  TextInput, 
  ScrollView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BACKGROUND_COLOR = '#f4f7f8';
const TEXT_PRIMARY = '#1f2937';
const TEXT_SECONDARY = '#6b7280';
const INPUT_BORDER = '#e5e7eb';
const INPUT_BACKGROUND = '#ffffff';
const BUTTON_RED = '#b91c1c'; 
const BUTTON_TEXT = '#ffffff';

export default function NewReceiptScreen() {
  const router = useRouter();
  
  const [remedio, setRemedio] = useState('');
  const [horario, setHorario] = useState('00:00');
  const [recorrencia, setRecorrencia] = useState('Selecione');
  const [tomarAgora, setTomarAgora] = useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const handleAddReceipt = () => {
    console.log({ remedio, horario, recorrencia, tomarAgora });
    alert('Nova Receita Adicionada (Simulação)');
  };

  const Checkbox = ({ checked, onPress, label }) => (
    <TouchableOpacity style={newStyles.checkboxContainer} onPress={onPress}>
      <View style={[newStyles.checkbox, checked && newStyles.checkboxChecked]}>
        {checked && <Ionicons name="checkmark" size={16} color={BUTTON_TEXT} />}
      </View>
      <Text style={newStyles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );

  const FormField = ({ label, placeholder, value, onChangeText, onPress, type = 'text' }) => (
    <View style={newStyles.formGroup}>
      <Text style={newStyles.label}>{label}</Text>
      {type === 'pressable' ? (
        <TouchableOpacity style={newStyles.inputContainer} onPress={onPress}>
          <Text style={[newStyles.inputText, value === placeholder && newStyles.placeholderText]}>
            {value}
          </Text>
        </TouchableOpacity>
      ) : (
        <TextInput
          style={newStyles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={TEXT_SECONDARY}
          keyboardType={type === 'numeric' ? 'numeric' : 'default'}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={newStyles.safeArea}>
      <View style={newStyles.container}>
        
        <View style={newStyles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons name="arrow-back" size={24} color={TEXT_PRIMARY} />
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={newStyles.scrollContent} bounces={false}>
          
          <Text style={newStyles.title}>Nova receita</Text>
          <Text style={newStyles.description}>
            Adicione a sua prescrição médica para receber lembretes de quando tomar seu medicamento
          </Text>

          <View style={newStyles.form}>
            
            <FormField
              label="Remédio"
              placeholder="Nome do medicamento"
              value={remedio}
              onChangeText={setRemedio}
            />

            <FormField
              label="Horário"
              placeholder="00:00"
              value={horario}
              type="pressable"
            />

            <FormField
              label="Recorrência"
              placeholder="Selecione"
              value={recorrencia}
              type="pressable"
            />
            
            <Checkbox 
              label="Tomar agora"
              checked={tomarAgora}
              onPress={() => setTomarAgora(!tomarAgora)}
            />

          </View>
        </ScrollView>
        
        <View style={newStyles.footer}>
          <TouchableOpacity style={newStyles.addButton} onPress={handleAddReceipt}>
            <Ionicons name="add" size={24} color={BUTTON_TEXT} />
            <Text style={newStyles.addButtonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const newStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: INPUT_BACKGROUND, 
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: TEXT_SECONDARY,
    marginBottom: 30,
    lineHeight: 22,
  },
  form: {
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: TEXT_PRIMARY,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    height: 50,
    borderColor: INPUT_BORDER,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: TEXT_PRIMARY,
    backgroundColor: INPUT_BACKGROUND,
  },
  inputContainer: {
    height: 50,
    borderColor: INPUT_BORDER,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: INPUT_BACKGROUND,
  },
  inputText: {
    fontSize: 16,
    color: TEXT_PRIMARY,
  },
  placeholderText: {
    color: TEXT_SECONDARY,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: TEXT_SECONDARY,
    borderRadius: 4,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: BUTTON_RED,
    borderColor: BUTTON_RED,
  },
  checkboxLabel: {
    fontSize: 16,
    color: TEXT_PRIMARY,
  },
  footer: {
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: BUTTON_RED,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 10,
  },
  addButtonText: {
    color: BUTTON_TEXT,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});