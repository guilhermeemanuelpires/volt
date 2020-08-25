import {
    createHTML,
    copyFromAssets,
    processLocalImage,
  } from "../util/pdf";

  
  export const simpleHtml = (sholudRemovePageMargin = true) => () =>
    createHTML();
  
  
    // export const htmlWithImage = (fromAssets = true) => async () => {
    //   let src = !fromAssets
    //     ? "https://upplabs.com/wp-content/uploads/2019/11/Logo_upplabs@2x.png"
    //     : "";
    //   if (fromAssets) {
    //     try {
    //       const localSrc = await copyFromAssets(IMAGES.logo);
    //       src = await processLocalImage(localSrc);
    //     } catch (error) {
    //       console.log(error);
    //       src = "";
    //     }
    //   }
    //   return createHTML({
    //     content: `
    //     <h1>Hello, UppLabs! Look at ${
    //       !fromAssets ? "this remote image" : "image from applicaion assets"
    //     }!</h1>
    //     <div class="container">
    //       <a class="img-wrap" href="${src}">
    //         <img class="img-fluid" src="${src}" alt="Logo" />
    //       </a>
    //     </div>
    //   `,
    //     styles: `
    //     .img-wrap {
    //       display: block;
    //       text-align: center;
    //       cursor: pointer;
    //     }
    //   `,
    //   });
    // };
    
    export const htmlWithImage = (fromAssets = false, valores) => async () => {
      // const imagem = require("../../assets/volt.png");
      let src = !fromAssets
      ? "logo.png"
      : "";
    if (fromAssets) {
      try {
        const localSrc = await copyFromAssets(IMAGES.logo);
        src = await processLocalImage(localSrc);
      } catch (error) {
        console.log(error);
        src = "";
      }
    }
    return createHTML({
      content: `
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
      <img style="position:absolute;top:10.22in;left:3.21in;width:4.86in;height:0.01in" src="ci_20.png" />   `,
    });
  };
  
  