import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'; // Importez les deux ici
import ProductList from '../../components/ui/ProductList';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
});