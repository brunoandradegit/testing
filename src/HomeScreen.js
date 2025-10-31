import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BACKGROUND_COLOR = '#f4f7f8';
const TEXT_PRIMARY = '#1f2937';
const TEXT_SECONDARY = '#6b7280';
const CARD_BACKGROUND = '#ffffff';
const ICON_BLUE_BG = '#dbeafe';
const ICON_BLUE_FG = '#3b82f6';
const ICON_RED_BG = '#fee2e2';
const ICON_RED_FG = '#ef4444';
const BUTTON_DARK = '#282828';

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace('/');
  };

  const handleMyReceipts = () => {
    router.push('/my-receipts');
  };

  const handleNewReceipt = () => {
    router.push('/new-receipts');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Image
            style={styles.profilePic}
            source={{ uri: 'https://imgs.search.brave.com/oxE4qAaw15JWlsXSZD_VRjnUfIcP55COewvrmy6iWrQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9wdXJlLW5hdHVy/ZS1sYW5kc2NhcGUt/c2luZ2xlLXRyZWUt/aW4tZ3JlZW4tZmll/bGQtZnJlZS1waG90/by5qcGc_dz02MDAm/cXVhbGl0eT04MA' }}
          />
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Boas vindas</Text>
            <Text style={styles.welcomeName}>Bruno Eduardo</Text>
          </View>
          <TouchableOpacity onPress={handleLogout}>
            <Ionicons name="exit-outline" size={28} color={ICON_RED_FG} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainCard}>
          <TouchableOpacity 
            style={styles.optionButton} 
            onPress={handleMyReceipts}
          >
            <View style={[styles.iconContainer, { backgroundColor: ICON_BLUE_BG }]}>
              <Ionicons name="document-text-outline" size={24} color={ICON_BLUE_FG} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Minhas receitas</Text>
              <Text style={styles.optionSubtitle}>
                Acompanhe os medicamentos e gerencie lembretes
              </Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color={TEXT_SECONDARY} />
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity 
            style={styles.optionButton}
            onPress={handleNewReceipt} 
          >
            <View style={[styles.iconContainer, { backgroundColor: ICON_RED_BG }]}>
              <Ionicons name="medkit-outline" size={24} color={ICON_RED_FG} />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Nova receita</Text>
              <Text style={styles.optionSubtitle}>
                Cadastre novos lembretes de receitas
              </Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color={TEXT_SECONDARY} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.evaluateButton}>
          <Ionicons name="star" size={20} color="#fff" />
          <Text style={styles.evaluateButtonText}>Avaliar</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: '#eee',
  },
  welcomeContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 14,
    color: TEXT_SECONDARY,
  },
  welcomeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
  },
  mainCard: {
    backgroundColor: CARD_BACKGROUND,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  optionTextContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: TEXT_PRIMARY,
  },
  optionSubtitle: {
    fontSize: 13,
    color: TEXT_SECONDARY,
    marginTop: 2,
  },
  separator: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 0,
  },
  evaluateButton: {
    backgroundColor: BUTTON_DARK,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 999,
    position: 'absolute',
    bottom: 30,
    left: 25,
    right: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  evaluateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});