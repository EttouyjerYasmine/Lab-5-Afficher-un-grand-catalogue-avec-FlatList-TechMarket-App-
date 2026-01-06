// components/ui/ProductList.js
import * as React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const productsToDisplay = [
  { id: 'P01', name: 'Smartphone Nova X', price: '499 €', category: 'Smartphone' },
  { id: 'P02', name: 'Laptop Pro 15"', price: '1 199 €', category: 'Ordinateur' },
  { id: 'P03', name: 'Casque Bluetooth AirSound', price: '149 €', category: 'Audio' },
  { id: 'P04', name: 'Montre Connectée FitTrack', price: '199 €', category: 'Wearable' },
  { id: 'P05', name: 'Clavier Mécanique MX Blue', price: '89 €', category: 'Périphérique' },
  { id: 'P06', name: 'Souris Gamer LaserX', price: '59 €', category: 'Périphérique' },
  { id: 'P07', name: 'Écran 27" UltraHD', price: '349 €', category: 'Moniteur' },
  { id: 'P08', name: 'Disque SSD 1 To', price: '129 €', category: 'Stockage' },
  { id: 'P09', name: 'Routeur WiFi 6', price: '179 €', category: 'Réseau' },
  { id: 'P10', name: 'Casque VR Immersion', price: '399 €', category: 'VR' },
  // Ajoutons quelques produits supplémentaires
  { id: 'P11', name: 'Tablette Graphique Pro', price: '799 €', category: 'Création' },
  { id: 'P12', name: 'Enceinte Bluetooth Premium', price: '299 €', category: 'Audio' },
  { id: 'P13', name: 'Batterie Externe 20000mAh', price: '79 €', category: 'Accessoire' },
  { id: 'P14', name: 'Console de Jeux NextGen', price: '549 €', category: 'Gaming' },
  { id: 'P15', name: 'Smart TV 55" 4K', price: '899 €', category: 'TV' },
];

// Composant pour la ligne de séparation
function ItemSeparatorComponent() {
  return (
    <View style={styles.separator} />
  );
}

// Composant pour l'en-tête de liste
function ListHeaderComponent() {
  return (
    <View style={styles.listHeader}>
      <Text style={styles.listSubtitle}>Découvrez notre sélection de produits high-tech</Text>
      <Text style={styles.listInfo}>{productsToDisplay.length} produits disponibles</Text>
    </View>
  );
}

// Composant produit amélioré
function ProductItem({ name, price, category, isExpensive }) {
  return (
    <View style={[styles.itemContainer, isExpensive && styles.expensiveItem]}>
      <View style={styles.productInfo}>
        <Text style={styles.itemName}>{name}</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryBadge}>{category}</Text>
        </View>
      </View>
      <Text style={[styles.itemPrice, isExpensive && styles.expensivePrice]}>{price}</Text>
    </View>
  );
}

export default function ProductList() {
  // Convertir le prix en nombre pour la comparaison
  const getPriceNumber = (priceString) => {
    return parseFloat(priceString.replace(' €', '').replace(' ', ''));
  };

  // Fonction qui décrit comment afficher chaque élément de la liste
  const renderProductItem = ({ item, index }) => {
    const priceNumber = getPriceNumber(item.price);
    const isExpensive = priceNumber > 500;
    
    return (
      <ProductItem
        name={`${index + 1}. ${item.name}`}
        price={item.price}
        category={item.category}
        isExpensive={isExpensive}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Catalogue TechMarket</Text>

      <FlatList
        data={productsToDisplay}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEFEE',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    textAlign: 'center',
  },
  listHeader: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  listSubtitle: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  listInfo: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expensiveItem: {
    backgroundColor: '#FFF8F0', // Fond plus clair pour les produits chers
    borderColor: '#FFA726', // Bordure orange pour les produits > 500€
    borderWidth: 2,
  },
  productInfo: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
    fontWeight: '500',
  },
  categoryContainer: {
    alignSelf: 'flex-start',
  },
  categoryBadge: {
    fontSize: 12,
    color: '#666666',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    overflow: 'hidden',
  },
  itemPrice: {
    fontSize: 16,
    color: '#EE9972',
    fontWeight: 'bold',
    minWidth: 80,
    textAlign: 'right',
  },
  expensivePrice: {
    color: '#D84315', // Couleur plus foncée pour les prix élevés
    fontSize: 17,
    fontWeight: '800',
  },
  separator: {
    height: 8,
    backgroundColor: 'transparent',
  },
  // Optionnel : une ligne fine comme séparateur
  // separator: {
  //   height: 1,
  //   backgroundColor: '#EEEEEE',
  //   marginVertical: 4,
  // },
});