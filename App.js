import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Books from './Books';

export default function App() {
  const [books, setBooks] = useState([
    {title: "Skidamarink", resume:"Alors que le vol de La Joconde fait la une de tous les journaux, quatre personnes qui ne se connaissent pas reçoivent un fragment découpé de la célèbre oeuvre de Léonard de Vinci, accompagné d’un mystérieux rendez-vous dans une chapelle de Toscane.Pourquoi eux ? Qui les a choisis ? Quel plan se cache derrière ce coup d’éclat ? Ils l’ignorent encore, mais à l’instant même où ils décident de résoudre ensemble cette énigme, leur vie prend un tournant dangereux, exaltant et sans retour."},
    {title:"Harry Potter et l'Ordre du Phénix", resume:"L'école de sorcellerie Poudlard n'a plus rien de secret pour Harry Potter. Mais il est très anxieux... L'adolescence, les examens, la présence des membres de l'Ordre du Phénix et ces étranges cauchemars... Car Voldemort est bel et bien de retour. Le ministère de la Magie semble ne pas prendre la menace au sérieux, contrairement à Dumbledore. La résistance s'organise autour d'Harry Potter qui va devoir compter sur ses amis Ron et Hermione pour affronter de nouvelles épreuves."},
    {title:"Harry Potter et la coupe de feu", resume:"Harry Potter a quatorze ans et entre en quatrième année à Poudlard. Une grande nouvelle attend Harry, Ron et Hermione à leur arrivée : la tenue d'un tournoi de magie exceptionnel entre les plus célèbres écoles de sorcellerie. Déjà les délégations étrangères font leur entrée. Harry se réjouit... Trop vite. Il va se trouver plongé au coeur des événements les plus dramatiques qu'il ait jamais eu à affronter."},
    {title:"Carrie", resume:"Carrie White, dix-sept ans, solitaire, timide et pas vraiment jolie, vit un calvaire : elle est victime du fanatisme religieux de sa mère et des moqueries incessantes de ses camarades de classe. Sans compter ce don, cet étrange pouvoir de déplacer les objets à distance, bien qu’elle le maîtrise encore avec difficulté... Un jour, cependant, la chance paraît lui sourire. Tommy Ross, le seul garçon qui semble la comprendre et l’aimer, l’invite au bal de printemps de l’école. Une marque d’attention qu’elle n’aurait jamais espérée, et peut-être même le signe d’un renouveau..."},
  ]);
  const [searchInput, setSearchInput] = useState("");

  const listBJSX = books.map(book => {
    return <Books title={book.title} des={book.resume} />
  })

  function searchBook(){
    // console.log(searchInput);    
    const search = books.find(book => searchInput == book.title
      // if(searchInput !== book.title){
      //   return 
      // } 
      // else {
      //   return <Text>Not found.</Text>
      // }
    );
    console.log(search);
    // setSearchInput("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma bibliotheque</Text>
      <View style={styles.recherche}>
        <TextInput style={styles.input} value={searchInput} onChangeText={(text) => {setSearchInput(text)}} />
        <Button title="OK" color="teal" onPress={searchBook}/>
      </View>
      <ScrollView>
        <View style={styles.livre}>
          {listBJSX}
        </View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,    
  },
  title: {
    color: 'teal',
    textAlign: "center",
    fontSize: 30,
    marginBottom: 10,    
  },
  input:{
    color: 'teal',
    borderWidth: 2,
    width: 250,
    marginRight: 15,
  },
  recherche: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  livre:{
    margin: 10,
  },
});
