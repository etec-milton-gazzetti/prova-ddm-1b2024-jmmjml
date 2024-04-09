import React, { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Fotoprincipal from "./assets/foto_trigonometria.png";
import fundo from "./assets/fundo_trigonometria.png";
import Minhafoto from "./assets/eu.png";

function HomeScreen({ navigation }) {
  const [loaded] = useFonts({
    MulishR: require("./assets/fonts/Mulish/Regular.ttf"),
    MulishEB: require("./assets/fonts/Mulish/Mulish-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundo} style={styles.Fundo}>
        <Image source={Fotoprincipal} style={styles.image} />
        <Text style={styles.titulo}>Trigonometria</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("conteudo")}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Conteúdo</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

function Conteudo({ navigation }) {
  const [loaded] = useFonts({
    MulishR: require("./assets/fonts/Mulish/Regular.ttf"),
    MulishEB: require("./assets/fonts/Mulish/Mulish-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={fundo} style={styles.Fundo}>
        <Text style={styles.titulo2}>Trigonometria</Text>
        <ScrollView style={styles.partedotexto}>
          <Text style={styles.texto}>
            A trigonometria é um ramo da matemática que estuda as relações entre
            os ângulos e os lados dos triângulos, bem como as funções
            trigonométricas que modelam essas relações. Seu nome deriva das
            palavras gregas "trigonon" (que significa triângulo) e "metron" (que
            significa medida).
          </Text>
          <Text style={styles.titulo3}>Origem e História</Text>
          <Text style={styles.texto}>
            A trigonometria tem raízes antigas e suas origens remontam às
            civilizações antigas da Mesopotâmia, Egito, Grécia e Índia. Os
            babilônios e egípcios, por exemplo, desenvolveram técnicas
            rudimentares de trigonometria para resolver problemas práticos, como
            medição de terras e construção de edifícios.
          </Text>
          <Text style={styles.texto}>
            No entanto, a trigonometria como a conhecemos hoje começou a se
            desenvolver na Grécia Antiga, especialmente com os trabalhos de
            matemáticos como Hiparco de Niceia e Cláudio Ptolomeu. Hiparco, no
            século II a.C., é considerado por muitos como o pai da trigonometria
            devido ao seu trabalho com tabelas trigonométricas e ao estudo das
            relações entre ângulos e lados em triângulos.
          </Text>
          <Text style={styles.texto}>
            A trigonometria também desempenhou um papel significativo na
            astronomia grega, ajudando a determinar posições de estrelas e
            planetas.
          </Text>
          <Text style={styles.titulo3}>Desenvolvimento e Criadores</Text>
          <Text style={styles.texto}>
            Além de Hiparco, muitos outros matemáticos contribuíram para o
            desenvolvimento da trigonometria ao longo dos séculos. Por exemplo,
            o matemático indiano Aryabhata, no século V d.C., fez avanços
            importantes na trigonometria esférica, enquanto o matemático árabe
            Muhammad ibn Musa al-Khwarizmi, no século IX d.C., introduziu as
            funções seno e cosseno e trabalhou com trigonometria plana.
          </Text>
          <Text style={styles.texto}>
            Durante a Renascença, a trigonometria foi ainda mais desenvolvida
            por matemáticos como Johannes Kepler e François Viète. No século
            XVII, a trigonometria foi formalizada com a introdução das funções
            trigonométricas como conhecemos hoje.
          </Text>
          <Text style={styles.titulo3}>Aplicações</Text>
          <Text style={styles.texto}>
            A trigonometria é amplamente aplicada em várias áreas da ciência,
            engenharia e tecnologia. Algumas das suas aplicações mais comuns
            incluem:
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.texto2}>Engenharia:</Text> Utilizada em projetos
            de construção civil, engenharia elétrica, engenharia mecânica, entre
            outras áreas, para resolver problemas relacionados a forças,
            movimento, construção de estruturas, etc.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.texto2}>Física:</Text> Usada na descrição de
            movimentos oscilatórios, ondas, acústica, óptica e na análise de
            sistemas de partículas.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.texto2}>Astronomia:</Text> Fundamental para
            calcular posições de corpos celestes, prever eclipses, determinar
            trajetórias de satélites e muito mais.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.texto2}>Navegação:</Text> A trigonometria é
            essencial para determinar a posição de uma embarcação usando
            coordenadas geográficas e observações de estrelas e planetas.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.texto2}>Computação Gráfica e Jogos:</Text>{" "}
            Muitas técnicas de computação gráfica e design de jogos dependem
            fortemente de trigonometria para renderizar gráficos 3D, animações,
            simulações físicas, etc.
          </Text>
          <Text style={styles.texto}>
            <Text style={styles.texto2}>Ciências da Computação:</Text> Usada em
            algoritmos de visão computacional, processamento de sinais,
            criptografia e muito mais.
          </Text>
        </ScrollView>
        <View style={styles.botoesladoalado}>
          <View style={styles.botaolado}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.botaolado}>
            <TouchableOpacity
              onPress={() => navigation.navigate("sobre")}
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>Sobre</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
function Sobre({ navigation }) {
  const [loaded] = useFonts({
    MulishR: require("./assets/fonts/Mulish/Regular.ttf"),
    MulishEB: require("./assets/fonts/Mulish/Mulish-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={fundo} style={styles.Fundo}>
        <Image source={Minhafoto} style={styles.imagem2} />
          <Text style={styles.Textosobre}>José Miguel Gomes de Oliveira</Text>
          <Text style={styles.Textosobre}>RM: 07684</Text>
          <Text style={styles.Textosobre}>jose.oliveira652@etec.sp.gov.br</Text>
          <Text style={styles.Textosobre}>Curso: MTEC - Informática para Internet</Text>
          <Text style={styles.Textosobre}>Whatsapp: (18) 99696-7897</Text>
        <View style={styles.botoesladoalado}>
          <View style={styles.botaolado}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.botaolado}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.botao}
            >
              <Text style={styles.textoBotao}>Início</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="conteudo"
          component={Conteudo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sobre"
          component={Sobre}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontFamily: "MulishR",
    fontWeight: "400",
    textAlign: "justify",
    paddingBottom: 5,
    paddingTop: 5,
  },
  titulo: {
    fontFamily: "MulishEB",
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 200,
    paddingTop: 100,
  },
  botao: {
    backgroundColor: "#7EBCE6",
    height: 50,
    width: 120,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotao: {
    fontFamily: "MulishR",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo3: {
    fontFamily: "MulishEB",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 15,
  },
  titulo2: {
    fontFamily: "MulishEB",
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom: 30,
    paddingTop: 30,
  },
  partedotexto: {
    paddingHorizontal: 10,
    backgroundColor: "#fffafa9c",
  },
  texto2: {
    fontWeight: "bold",
  },
  Fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  botoesladoalado: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  botaolado: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  imagem2:{
    width: 300,
    height: 300,
    borderRadius:40,
    marginVertical: 30,

  },
  Textosobre:{
    fontFamily:"MulishR",
    fontSize: 21,
    fontWeight: "bold",
    paddingVertical: 10,
    alignItems: "center",
    textAlign: 'center',
  },
});
