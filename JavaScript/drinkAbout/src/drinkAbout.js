function drinkAbout(age){
	if (age < 14) return "drink Toddy"
	if (age < 18) return "drink coke"
	if (age < 30) return "drink beer"
	if (age > 29) return "drink whiskey"
	return "nope"
}