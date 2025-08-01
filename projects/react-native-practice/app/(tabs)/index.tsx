import {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, Text, Image, Pressable } from "react-native";
import axios from 'axios';
import { useRouter } from 'expo-router';
const API = "https://fakestoreapi.com/products";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductCard = ({ item }: { item: Product }) => {
  const router = useRouter();
  return (
    <Pressable
      style={styles.productCard}
      onPress={() => router.push(`/products/${item.id}`)}
    >
      <Text style={styles.titleCard}>{item.title}</Text>
      <Image style={styles.productImage} source={{ uri: item.image }} />
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.priceText}>Price: {item.price}</Text>
    </Pressable>
  );
};

export default function HomeScreen() {
  const [data, setData] = useState<Product[]>([]);
  const fetchAllProducts = async () =>{
    try{
      const response = await axios.get(API);
      console.log(response.data, "data");
      setData(response.data)
    }catch(err){
      console.log(err,'error from API')
    }
  }
  useEffect(()=>{
    fetchAllProducts();
  },[])
  return (
    <View>
      <Text style={styles.pageHeader}>Product List</Text>
      <FlatList data={data} renderItem={({item})=> <ProductCard item={item}/>} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  titleCard: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
    maxWidth: 300,
    lineHeight: 24,
  },
  productCard: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "cover",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  pageHeader:{
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  }
});
