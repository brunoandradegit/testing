import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 

const PRIMARY_COLOR = '#4db6ac'; 
const HEADER_BG_COLOR = '#1e1e1e'; 
const LIGHT_BG_COLOR = '#f4f7f8'; 
const CARD_BG = 'white';
const ICON_BG_COLOR = '#e0f2f1';
const ICON_COLOR = '#00796b';
const DELETE_COLOR = '#ef4444'; 

const RecipeCard = ({ name, time, frequency }) => (
  <View style={styles.recipeCard}>
    
    <View style={styles.textContainer}>
      <Text style={styles.recipeName}>{name}</Text>
      
      <View style={styles.pillContainer}>
        
        <View style={styles.detailPill}>
          <Ionicons name="time-outline" size={14} color={ICON_COLOR} />
          <Text style={styles.detailText}>{time}</Text>
        </View>
        
        <View style={styles.detailPill}>
          <Ionicons name="repeat-outline" size={14} color={ICON_COLOR} />
          <Text style={styles.detailText}>{frequency}</Text>
        </View>
      </View>
    </View>
    
    <TouchableOpacity style={styles.deleteButton} onPress={() => console.log('Excluir:', name)}>
      <Ionicons name="trash-outline" size={20} color={DELETE_COLOR} />
    </TouchableOpacity>
  </View>
);

export default function MyRecipes() {
  
  const router = useRouter(); 

  const handleGoBack = () => {
    router.back(); 
  };

  const handleAddRecipe = () => {
    router.push('/new-receipts'); 
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.fullScreenContainer}>
        
        <View style={styles.headerArea}>
          
          <View style={styles.headerBar}>
            <TouchableOpacity onPress={handleGoBack} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleAddRecipe} style={styles.addButton}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Minhas receitas</Text>
            <Text style={styles.subtitle}>
              Acompanhe seus medicamentos cadastrados e gerencie lembretes
            </Text>
          </View>
        </View>
        
        <View style={styles.contentAreaWrapper}>
          <ScrollView contentContainerStyle={styles.contentArea}>
              <RecipeCard name="Ritalina" time="14:00" frequency="A cada 12 horas" />
              <RecipeCard name="Rivotril" time="08:00" frequency="A cada 7 dias" />
              <RecipeCard name="Tadalafila" time="12:00" frequency="A cada 1 dia" />
              <RecipeCard name="Neosoro" time="22:00" frequency="A cada 6 horas" />
              <RecipeCard name="Vitaminas" time="09:30" frequency="Uma vez por dia" />
              <RecipeCard name="Antibiótico" time="18:00" frequency="A cada 8 horas" />
              <RecipeCard name="Suplemento" time="07:00" frequency="Uma vez por dia" />
              <RecipeCard name="Melatonina" time="23:00" frequency="A cada 24 horas" />
          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: HEADER_BG_COLOR,
  },
  fullScreenContainer: {
    flex: 1,
  },
  
  headerArea: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: HEADER_BG_COLOR,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  iconButton: {
    padding: 5,
    borderRadius: 20,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  titleContainer: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)', 
  },

  contentAreaWrapper: {
    flex: 1,
    backgroundColor: LIGHT_BG_COLOR,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden', 
  },
  contentArea: {
    padding: 20,
    paddingTop: 30, 
  },
  
  recipeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: CARD_BG,
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  pillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  detailPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ICON_BG_COLOR,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 8,
  },
  detailText: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '500',
    color: ICON_COLOR,
  },
  deleteButton: {
    padding: 8,
    borderRadius: 5,
  }
});