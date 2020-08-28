import { Platform } from "react-native";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import { Asset } from "expo-asset";
import * as ImageManipulator from "expo-image-manipulator";
import * as Sharing from "expo-sharing";
import { COLORS } from "./constants";

export const createHTML = ({
  content = "",
  styles = "",
  sholudRemovePageMargin = true,
} = {sholudRemovePageMargin}) => {
  return `
        <!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Orçamento</title>
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
                    color: ${COLORS.black};
                    min-height: 100%;
                    overflow-x: hidden;
                    font-family: 'Red Hat Display', sans-serif;
                }

                * {
                    box-sizing: border-box;
                }

                @page {
                  margin: 1;
                
                }
                .img-fluid {
                    width: 100%;
                    height: auto;
                }

                .container {
                    padding: 15px;
                }

                ${styles}
            </style>
        </head>
        <body>
            ${content}
        </body>
        </html>
    `;
};

export const createAndSavePDF = async (html, val) => {
  try {
    let isShared = false;
    const { uri } = await Print.printToFileAsync({ html });
    if (Platform.OS === "ios") {
      isShared = await Sharing.shareAsync(uri);
    } else {
      const permission = await MediaLibrary.requestPermissionsAsync();

      if (permission.granted) {

        const asset = await MediaLibrary.createAssetAsync(uri);
        asset.filename = "Orcamento" + val.nomeCli.trim() +".pdf"
        // asset.uri = "file:///storage/emulated/0/Volt Orçamento/OrcamentoDouglasCezaro.pdf"
        MediaLibrary.createAlbumAsync('Volt Orçamento', asset)
        MediaLibrary.getAssetInfoAsync(asset)
        console.log(asset)
        isShared = true;
      }
    }

    if (!isShared) {
      throw new Error("Deu Pau...");
    }
  } catch (error) {
    console.log(error);
    throw err;
  }
};

export const copyFromAssets = async (asset) => {
  try {
    await Asset.loadAsync(asset);
    const { localUri } = Asset.fromModule(asset);

    return localUri;
  } catch (error) {
    console.log(error);
    throw err;
  }
};

export const processLocalImage = async (
  imageUri = "",
  optimize = false,
  actions = []
) => {
  try {
    const format = 'png';

    const options = { format, base64: Platform.OS === "ios" };
    const allActions = actions || [];

    if (optimize) {
      options.compress = 0.1;
      allActions.push({
        resize: {
          width: 400,
        },
      });
    }

    const { uri, base64 } = await ImageManipulator.manipulateAsync(
      imageUri,
      allActions,
      options
    );

    return Platform.OS === "ios"
      ? `data:image/${format};base64,${base64}`
      : uri;
  } catch (error) {
    console.log(error);
    return imageUri;
  }
};