import React, { useCallback, useState, useMemo } from "react";
import { StyleSheet, View, ScrollView, Alert, Image } from "react-native";
import Constants from "expo-constants";
import { Container, Header, Content, Form, Item, Input } from "native-base";

import { createAndSavePDF } from "../src/util/pdf";
import { COLORS, IMAGES } from "../src/util/constants";
import { simpleHtml, htmlWithImage } from "../src/util/html";
import Button from "../src/view/components/button/Button";
import CustomText from "../src/view/components/button/CustomText";
import { WebView } from 'react-native-webview';

const createPdf = (htmlFactory) => async () => {
  try {
    const html = await htmlFactory();
    if (html) {
      await createAndSavePDF(html);
      Alert.alert("Sucesso!", "O documento foi salvo com sucesso!");
    }
  } catch (error) {
    Alert.alert("Error", error.message || "Deu Pau...");
  }
}; 
export default function AppContainer(props) {

  const [loadingKey, setLoadingKey] = useState(null);
  const pageMarginState = useState(false);
  const avoidSectionBreakingState = useState(false);
  const useImageFromAssetsState = useState(false);
  const useCameraState = useState(false);
  const optimizeImageState = useState(false); 
  const valores  = props.route.params

  const onButtonPress = useCallback(
    (key, action) => async () => {
      try {
        if (action) {
          setLoadingKey(key);
          await action();
          setLoadingKey(null);
        }
      } catch (error) {
        setLoadingKey(null);
      }
    },
    []
  );

  const allButtons = useMemo(
    () => [
      {
        title: "Teste PDF",
        action: createPdf(htmlWithImage(useImageFromAssetsState[0], valores )),
        switches: [
          {
            label: "Use image from assets",
            state: useImageFromAssetsState,
          },
        ],
      },
    ],
    [
      pageMarginState,
      avoidSectionBreakingState,
      useImageFromAssetsState,
      useCameraState,
      optimizeImageState,
    ]
  );

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={IMAGES.logo} />
      
        <WebView 
        source={{ html: `
         <!DOCTYPE html>
         <html lang="pt">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <title>Exemplo PDF</title>
             <style>
                 @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap');
 
                 html {
                     height: 100%;
                 }
                 table {border-collapse: collapse;}
                 table td {padding: 0px}
 
                 body {
                     font-size: 16px;
                     margin: 0;
                     min-height: 100%;
                     overflow-x: hidden;
                     font-family: 'Red Hat Display', sans-serif;
                 }
 
                 * {
                     box-sizing: border-box;
                 }
                 .img-fluid {
                     width: 100%;
                     height: auto;
                 }
 
                 .container {
                     padding: 15px;
                 }
 

             </style>
         </head>
         <body>
         <div style="position:absolute;top:9.78in;left:0.92in;width:0.77in;line-height:0.17in;"><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000">Inversor</span><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:9.78in;left:3.47in;width:0.66in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">Fronius</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
         <div style="position:absolute;top:9.78in;left:6.54in;width:0.62in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">5 </span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171">anos</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
         <div style="position:absolute;top:10.01in;left:0.92in;width:2.03in;line-height:0.17in;"><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000">Módulos Fotovoltaicos</span><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:10.01in;left:3.47in;width:1.31in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">Canadian Solar</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
         <div style="position:absolute;top:10.01in;left:6.44in;width:0.79in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">12 </span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171">anos*</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
         <div style="position:absolute;top:10.24in;left:0.92in;width:0.94in;line-height:0.17in;"><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000">Instalação</span><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:10.24in;left:3.47in;width:1.35in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">Volt Engenharia</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
         <div style="position:absolute;top:10.24in;left:6.54in;width:0.52in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">1 </span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171">ano</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
         <div style="position:absolute;top:7.12in;left:0.59in;width:6.38in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#000000">** Esses valores são referências, e podem sofrer alterações de acordo com a faixa de consumo elétrico.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
         <div style="position:absolute;top:7.77in;left:0.62in;width:4.04in;line-height:0.34in;"><span style="font-style:normal;font-weight:bold;font-size:24pt;font-family:Arial;color:#f3a36d">Investimento Proposto</span><span style="font-style:normal;font-weight:bold;font-size:24pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
         <div style="position:absolute;top:0.90in;left:0.62in;width:3.04in;line-height:0.31in;"><span style="font-style:normal;font-weight:bold;font-size:22pt;font-family:Arial;color:#f3a36d">Escopo do Projeto</span><span style="font-style:normal;font-weight:bold;font-size:22pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
         <div style="position:absolute;top:1.72in;left:0.93in;width:2.71in;line-height:0.23in;"><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#000000">Potência total do Projeto</span><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#ffffff"> </span><br/></SPAN></div>
         <div style="position:absolute;top:1.74in;left:6.43in;width:1.27in;line-height:0.27in;"><span style="font-style:normal;font-weight:bold;font-size:14pt;font-family:Calibri;color:#000000">${valores.potencia_instalada} kWp</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:2.15in;left:0.93in;width:2.91in;line-height:0.23in;"><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#000000">Base de Consumo Mensal</span><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#ffffff"> </span><br/></SPAN></div>
         <div style="position:absolute;top:2.19in;left:6.10in;width:1.91in;line-height:0.24in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Calibri;color:#000000">${valores.mediaConsumoMes} kWh/mês</span><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:10.70in;left:0.59in;width:6.08in;line-height:0.14in;"><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Arial;color:#000000">(*) 25 anos de garantia de performance de geração e 12 anos para defeitos de fabricação.</span><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
         <div style="position:absolute;top:8.91in;left:0.59in;width:6.92in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#000000">* Valor para pagamento a vista. Para uma proposta de viabilidade economica será necessário uma visita técnica.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
         <div style="position:absolute;top:2.58in;left:0.93in;width:2.92in;line-height:0.23in;"><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#000000">Geração Estimada Mensal</span><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#ffffff"> </span><br/></SPAN></div>
         <div style="position:absolute;top:2.64in;left:6.22in;width:1.68in;line-height:0.21in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Calibri;color:#000000">${valores.geracaoEstimadaMensal} kWh/mês</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:8.39in;left:5.60in;width:1.79in;line-height:0.26in;"><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#3a3838">R$${valores.investimento}</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
         <div style="position:absolute;top:9.12in;left:0.62in;width:1.78in;line-height:0.34in;"><span style="font-style:normal;font-weight:bold;font-size:24pt;font-family:Arial;color:#f3a36d">Garantias</span><span style="font-style:normal;font-weight:bold;font-size:24pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
         <div style="position:absolute;top:3.26in;left:0.59in;width:7.41in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292">* Valor calculado com base na média histórica de radiação solar da região, e sujeito a variação em função das condições</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
         <div style="position:absolute;top:3.43in;left:0.59in;width:0.68in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292">climáticas.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
         <div style="position:absolute;top:3.64in;left:0.59in;width:4.57in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292">** A geração não é linear, sofrendo variação nos diferentes meses do ano.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
         <div style="position:absolute;top:4.30in;left:0.62in;width:3.04in;line-height:0.31in;"><span style="font-style:normal;font-weight:bold;font-size:22pt;font-family:Arial;color:#f3a36d">Análise Financeira</span><span style="font-style:normal;font-weight:bold;font-size:22pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.13in;left:1.10in;width:1.72in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Sua conta de Luz</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.39in;left:1.13in;width:1.67in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Anual sem a Volt</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.65in;left:1.39in;width:1.15in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Engenharia</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.13in;left:3.66in;width:1.72in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Sua conta de Luz</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.39in;left:3.68in;width:1.06in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Anual com</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <img style="position:absolute;top:5.60in;left:4.28in;width:0.46in;height:0.02in" src="ci_9.png" />
         <div style="position:absolute;top:5.39in;left:4.75in;width:0.60in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">a Volt</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.65in;left:3.94in;width:1.15in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Engenharia</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.13in;left:6.04in;width:2.02in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838">Sua economia Anual</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.39in;left:6.52in;width:1.07in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838">com a Volt</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
         <div style="position:absolute;top:5.65in;left:6.48in;width:1.15in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838">Engenharia</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
         <div style="position:absolute;top:6.19in;left:1.15in;width:1.63in;line-height:0.26in;"><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#000000">R$${valores.contaSemVolt}</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:6.19in;left:3.90in;width:1.26in;line-height:0.26in;"><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#000000">R$${valores.contaComVolt}</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
         <div style="position:absolute;top:6.19in;left:6.25in;width:1.63in;line-height:0.26in;"><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#3a3838">R$${valores.economia}</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
         <div style="position:absolute;top:6.90in;left:0.59in;width:4.52in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292">* Valores podem sofrer variação devido a ajustes tarifários e de impostos.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
         <img style="position:absolute;top:1.68in;left:5.73in;width:0.04in;height:0.34in" src="ci_10.png" />
         <img style="position:absolute;top:2.14in;left:5.73in;width:0.04in;height:0.31in" src="ci_11.png" />
         <img style="position:absolute;top:2.57in;left:5.73in;width:0.04in;height:0.31in" src="ci_12.png" />
         <img style="position:absolute;top:5.08in;left:3.18in;width:0.04in;height:1.43in" src="ci_13.png" />
         <img style="position:absolute;top:9.99in;left:0.88in;width:2.32in;height:0.01in" src="ci_14.png" />
         <img style="position:absolute;top:10.22in;left:0.88in;width:2.32in;height:0.01in" src="ci_15.png" />
         <img style="position:absolute;top:5.08in;left:5.73in;width:0.04in;height:1.43in" src="ci_16.png" />
         <img style="position:absolute;top:9.77in;left:3.20in;width:0.00in;height:0.69in" src="ci_17.png" />
         <img style="position:absolute;top:9.77in;left:3.20in;width:0.01in;height:0.69in" src="ci_18.png" />
         <img style="position:absolute;top:9.99in;left:3.21in;width:4.86in;height:0.01in" src="ci_19.png" />
         <img style="position:absolute;top:10.22in;left:3.21in;width:4.86in;height:0.01in" src="ci_20.png" />   
         </body>
         </html>` }}/>
        <View style={styles.buttonsContainer}>
          {allButtons.map(({ title, action }, index) => {
            const key = String(index);

            return (
              <View key={key} style={styles.exampleContainer}>

                <Button
                  disabled={!!loadingKey}
                  isLoading={loadingKey === key}
                  title="Gerar PDF"
                  onPress={onButtonPress(key, action)}
                />
              </View>
            );
          })}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  logo: {
    width: "100%",
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
    marginVertical: 5,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
    width: "100%",
  },
  buttonsContainer: {
    paddingHorizontal: 15,
  },
  exampleContainer: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: COLORS.black,
  },
  exampleTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});
