import React, {useState, useEffect} from 'react'
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios from "axios";
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

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState<Product[]>([]);
    const [filterData, setFilterData] = useState<Product[]>([]);
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data.map((item: any) => ({
          id: item.id,
          title: item.title})));
      } catch (err) {
        console.log(err, "error from API");
      }
    };
    useEffect(() => {
      fetchAllProducts();
    }, []);
    const handleInputBox = () => {
      console.log("Search Text: ", searchText);
      const resultData = data.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log("Filtered Data: ", resultData);
      setFilterData(resultData);
      setSearchText("");
    };
  return (
    <View>
      <Text style={styles.pageHeader}>Search the product</Text>
      <View style={styles.inputBoxContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Search for the product"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity onPress={handleInputBox}>
          <Text style={styles.searchButton}>Search</Text>
        </TouchableOpacity>
      </View>
      <View>
        {filterData && (
          <FlatList
            data={filterData}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  inputBoxContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
  },
    searchButton: {
        backgroundColor: "#007BFF",
        color: "#fff",
        padding: 10,
        borderRadius: 8,
    },
});
export default Search