import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React from "react";
import Header from "../../components/Header";
import SearchFilter from "../../components/SearchFilter";
import CategoriesFilter from "../../components/CategoriesFilter";
import RecipeCard from "../../components/RecipeCard";

const RecipeListScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16, }}>
			<StatusBar backgroundColor='#f96163' barStyle='dark-content'/>
			{/* render header */}
			<Header headerText={"Hi, Dhama "} headerIcon={"bell-o"} />

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"enter your fav recipe"} />

			{/* Categories filter */}

			<View style={{ marginTop: 10 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 10, flex: 1,width:'100%' }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
				{/* Recipes list */}

				<RecipeCard />
			</View>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});