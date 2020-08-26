import {
    createHTML,
    copyFromAssets,
    processLocalImage,
  } from "../util/pdf";

  
  export const simpleHtml = (sholudRemovePageMargin = true) => () =>
    createHTML();
  
  
    export const htmlWithImage = (fromAssets = true, valores) => async () => {
      try {
        var date = new Date().getDate();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        const meses = [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ]
        var mes = meses[month]
      
        const asset = require('../../assets/volt.png');
        const ri_1 = require('../../assets/ri_1.png');
        const ri_2 = require('../../assets/ri_2.png');
        const ri_3 = require('../../assets/ri_3.png');
        const ri_4 = require('../../assets/ri_4.png');
        const ci_1 = require('../../assets/ci_1.png');
        const ci_2 = require('../../assets/ci_2.png');
        const ci_3 = require('../../assets/ci_3.png');
        const ci_4 = require('../../assets/ci_4.png');
        const vi_1 = require('../../assets/vi_1.png');
        const vi_2 = require('../../assets/vi_2.png');
        const vi_3 = require('../../assets/vi_3.png');
        const vi_4 = require('../../assets/vi_4.png');
        let src = await copyFromAssets(asset);
        let src_ri_1 = await copyFromAssets(ri_1);
        let src_ri_2 = await copyFromAssets(ri_2);
        let src_ri_3 = await copyFromAssets(ri_3);
        let src_ri_4 = await copyFromAssets(ri_4);
        let src_ci_1 = await copyFromAssets(ci_1);
        let src_ci_2 = await copyFromAssets(ci_2);
        let src_ci_3 = await copyFromAssets(ci_3);
        let src_ci_4 = await copyFromAssets(ci_4);
        let src_vi_1 = await copyFromAssets(vi_1);
        let src_vi_2 = await copyFromAssets(vi_2);
        let src_vi_3 = await copyFromAssets(vi_3);
        let src_vi_4 = await copyFromAssets(vi_4);
        // if(Platform.OS === 'ios') {
        //     src = await processLocalImageIOS(src);
        // }
        return createHTML({
          content: `
          <img style="position:absolute;top:0.18in;left:7.97in;width:0.79in;height:0.41in" src="${src_ri_1}" />
          <div style="position:absolute;top:0.70in;left:5.59in;width:0.84in;line-height:0.15in;"><span style="font-style:italic;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#2f75b5">Dois Vizinhos,</span><span style="font-style:italic;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#2f75b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:5.65in;left:0.83in;width:2.69in;line-height:0.25in;"><span style="font-style:normal;font-weight:bold;font-size:17pt;font-family:Arial;color:#f3a36d">Nosso compromisso</span><span style="font-style:normal;font-weight:bold;font-size:17pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
          <div style="position:absolute;top:4.90in;left:3.66in;width:3.76in;line-height:0.22in;"><span style="font-style:normal;font-weight:bold;font-size:15pt;font-family:Arial;color:#929292">Prezado (a) ${valores.nomeCli}</span><span style="font-style:normal;font-weight:bold;font-size:15pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
          <div style="position:absolute;top:5.17in;left:5.60in;width:2.00in;line-height:0.19in;"><span style="font-style:normal;font-weight:bold;font-size:13pt;font-family:Arial;color:#929292">${date} de ${mes} de ${year}.</span><span style="font-style:normal;font-weight:bold;font-size:13pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
          <div style="position:absolute;top:5.17in;left:3.66in;width:1.46in;line-height:0.19in;"><span style="font-style:normal;font-weight:bold;font-size:13pt;font-family:Arial;color:#929292">Dois Vizinhos,</span><span style="font-style:normal;font-weight:bold;font-size:13pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
          <div style="position:absolute;top:0.69in;left:7.23in;width:1.23in;line-height:0.15in;"><span style="font-style:italic;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#2f75b5">${date} de ${mes} de ${year}.</span><span style="font-style:italic;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#2f75b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:0.91in;left:5.79in;width:2.66in;line-height:0.15in;"><span style="font-style:italic;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#2f75b5">PROPOSTA COMERCIAL - VOLT ENGENHARIA</span><span style="font-style:italic;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#2f75b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:11.10in;left:6.21in;width:1.63in;line-height:0.16in;"><span style="font-style:italic;font-weight:normal;font-size:10pt;font-family:Calibri Light;color:#000000">Jaqueline Krause Steffen</span><span style="font-style:italic;font-weight:normal;font-size:10pt;font-family:Calibri Light;color:#000000"> </span><br/></SPAN></div>
          <div style="position:absolute;top:11.32in;left:6.10in;width:1.89in;line-height:0.15in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#000000">Eng.ª Eletricista - 156.182/D-PR</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#000000"> </span><br/></SPAN></div>
          <div style="position:absolute;top:11.53in;left:6.03in;width:2.03in;line-height:0.15in;"><a href="mailto:jaqueline.krause@volteng.com.br"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#0563c1">jaqueline</span></a>
          <span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#0563c1">.krause@volteng.com.br</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#0563c1"> </span><br/></SPAN></div>
          <img style="position:absolute;top:11.66in;left:6.03in;width:2.00in;height:0.01in" src="${src_ci_1}" />
          <div style="position:absolute;top:11.73in;left:6.51in;width:1.06in;line-height:0.15in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#375623">(46) 9 9941 1742</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#375623"> </span><br/></SPAN></div>
          <div style="position:absolute;top:11.09in;left:1.41in;width:1.59in;line-height:0.16in;"><span style="font-style:italic;font-weight:normal;font-size:10pt;font-family:Calibri Light;color:#000000">Isolei Nunes de Almeida</span><span style="font-style:italic;font-weight:normal;font-size:10pt;font-family:Calibri Light;color:#000000"> </span><br/></SPAN></div>
          <div style="position:absolute;top:11.31in;left:1.72in;width:1.01in;line-height:0.15in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#000000">Vendas Externas</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#000000"> </span><br/></SPAN></div>
          <div style="position:absolute;top:11.73in;left:1.68in;width:1.08in;line-height:0.15in;"><a href="mailto:volteng.contato@gmail.com"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#375623">(4</span></a>
          <span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#375623">6) 9.8421-5936</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#375623"> </span><br/></SPAN></div>
          <div style="position:absolute;top:11.53in;left:1.46in;width:1.52in;line-height:0.15in;"><a href="mailto:contato@volteng.com.br"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#0563c1">contato@</span></a>
          <span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#0563c1">volteng.com.br</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Calibri Light;color:#0563c1"> </span><br/></SPAN></div>
          <img style="position:absolute;top:11.66in;left:1.46in;width:1.49in;height:0.01in" src="${src_ci_2}" />
          <img style="position:absolute;top:11.05in;left:0.78in;width:2.84in;height:0.01in" src="${src_ci_3}" />
          <img style="position:absolute;top:11.05in;left:5.56in;width:2.92in;height:0.01in" src="${src_ci_4}" />
          <img style="position:absolute;top:0.98in;left:0.81in;width:6.64in;height:3.72in" src="${src_ri_2}" />
          <div style="position:absolute;top:2.46in;left:3.54in;width:4.90in;line-height:0.59in;"><span style="font-style:normal;font-weight:bold;font-size:39pt;font-family:Calibri;color:#de6614">Proposta Comercial</span><span style="font-style:normal;font-weight:bold;font-size:39pt;font-family:Calibri;color:#de6614"> </span><br/></SPAN></div>
          <div style="position:absolute;top:3.28in;left:5.82in;width:2.55in;line-height:0.29in;"><span style="font-style:normal;font-weight:normal;font-size:19pt;font-family:Calibri Light;color:#de6614">_________________</span><span style="font-style:normal;font-weight:normal;font-size:19pt;font-family:Calibri Light;color:#de6614"> </span><br/></SPAN></div>
          <img style="position:absolute;top:6.72in;left:1.22in;width:3.32in;height:2.59in" src="${src_vi_1}" />
          <img style="position:absolute;top:6.72in;left:4.68in;width:3.32in;height:2.59in" src="${src_vi_2}" />
          <img style="position:absolute;top:6.94in;left:1.33in;width:3.15in;height:2.16in" src="${src_vi_3}" />
          <div style="position:absolute;top:7.06in;left:2.04in;width:1.78in;line-height:0.29in;"><span style="font-style:normal;font-weight:bold;font-size:19pt;font-family:Calibri;color:#b5b5b5">Confiança se</span><span style="font-style:normal;font-weight:bold;font-size:19pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:7.44in;left:2.24in;width:1.38in;line-height:0.29in;"><span style="font-style:normal;font-weight:bold;font-size:19pt;font-family:Calibri;color:#b5b5b5">conquista</span><span style="font-style:normal;font-weight:bold;font-size:19pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:8.05in;left:1.70in;width:2.44in;line-height:0.18in;"><span style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Calibri;color:#b5b5b5">A t u a m o s  e m  t o d a  R e g i ã o  d o </span><span style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:8.28in;left:1.77in;width:2.29in;line-height:0.18in;"><span style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Calibri;color:#b5b5b5">P a r a n á  c o m  m a i s  d e  2  M W </span><span style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:8.51in;left:2.44in;width:0.95in;line-height:0.18in;"><span style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Calibri;color:#b5b5b5">i n s t a l a d o s .</span><span style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <img style="position:absolute;top:6.92in;left:4.80in;width:3.09in;height:2.21in" src="${src_vi_4}" />
          <div style="position:absolute;top:7.04in;left:5.20in;width:2.34in;line-height:0.29in;"><span style="font-style:normal;font-weight:bold;font-size:19pt;font-family:Calibri;color:#b5b5b5">Sustentabilidade</span><span style="font-style:normal;font-weight:bold;font-size:19pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:7.51in;left:5.02in;width:2.66in;line-height:0.18in;"><span style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Calibri;color:#b5b5b5">M a i s  e n e r g i a ,  m e n o s  c o n s u m o .</span><span style="font-style:normal;font-weight:normal;font-size:11pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:7.84in;left:5.30in;width:2.16in;line-height:0.16in;"><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Calibri;color:#b5b5b5">S u a  c a s a  o u  e m p r e s a ,  m a i s </span><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <div style="position:absolute;top:8.06in;left:4.97in;width:2.78in;line-height:0.16in;"><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Calibri;color:#b5b5b5">i n t e l i g e n t e  </span></SPAN><br/></div>
          <div style="position:absolute;top:8.06in;left:4.97in;width:2.78in;line-height:0.16in;"><DIV style="position:relative; left:0.92in;"><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Calibri;color:#b5b5b5">e  s u s t e n t á v e l  n a  f o r m a </span><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></DIV></div>
          <div style="position:absolute;top:8.27in;left:5.03in;width:2.64in;line-height:0.16in;"><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Calibri;color:#b5b5b5">c o m o  c o n s o m e  e  p r o d u z  e n e r g i a .</span><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Calibri;color:#b5b5b5"> </span><br/></SPAN></div>
          <img style="position:absolute;top:6.29in;left:0.77in;width:0.92in;height:0.86in" src="${src_ri_3}" />
          <img style="position:absolute;top:6.29in;left:7.59in;width:0.80in;height:0.86in" src="${src_ri_4}" />
          <div style="position:absolute;top:12.28in;left:0.77in;width:1.03in;line-height:0.12in;"><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000">www.volteng.com.br</span><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
          <div style="position:absolute;top:12.44in;left:0.77in;width:1.06in;line-height:0.12in;"><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000">Fone: (46) 3010-1533</span><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
          <div style="position:absolute;top:12.28in;left:3.68in;width:2.20in;line-height:0.12in;"><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000">VOLT ENGENHARIA - SOLUÇÕES EM ENERGIA</span><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
          <div style="position:absolute;top:12.44in;left:2.93in;width:3.70in;line-height:0.12in;"><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000">Rod. PR-281, Av. dos Imigrantes, 3545 - Parque Industrial - Dois Vizinhos - PR</span><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
          <div style="position:absolute;top:12.44in;left:8.12in;width:0.67in;line-height:0.12in;"><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000">Página 1 de 8</span><span style="font-style:normal;font-weight:normal;font-size:8pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
          
        `,
        });
    } catch (error) {
        console.log(error);
    }


    };
    
  //   export const htmlWithImage = (fromAssets = false, valores) => async () => {
  //     // const imagem = require("../../assets/volt.png");
  //     let src = !fromAssets
  //     ? "logo.png"
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
  //     <div style="position:absolute;top:9.78in;left:0.92in;width:0.77in;line-height:0.17in;"><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000">Inversor</span><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:9.78in;left:3.47in;width:0.66in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">Fronius</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:9.78in;left:6.54in;width:0.62in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">5 </span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171">anos</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:10.01in;left:0.92in;width:2.03in;line-height:0.17in;"><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000">Módulos Fotovoltaicos</span><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:10.01in;left:3.47in;width:1.31in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">Canadian Solar</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:10.01in;left:6.44in;width:0.79in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">12 </span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171">anos*</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:10.24in;left:0.92in;width:0.94in;line-height:0.17in;"><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000">Instalação</span><span style="font-style:normal;font-weight:bold;font-size:12pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:10.24in;left:3.47in;width:1.35in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">Volt Engenharia</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:10.24in;left:6.54in;width:0.52in;line-height:0.17in;"><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#000000">1 </span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171">ano</span><span style="font-style:normal;font-weight:normal;font-size:12pt;font-family:Arial;color:#757171"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:7.12in;left:0.59in;width:6.38in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#000000">** Esses valores são referências, e podem sofrer alterações de acordo com a faixa de consumo elétrico.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:7.77in;left:0.62in;width:4.04in;line-height:0.34in;"><span style="font-style:normal;font-weight:bold;font-size:24pt;font-family:Arial;color:#f3a36d">Investimento Proposto</span><span style="font-style:normal;font-weight:bold;font-size:24pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:0.90in;left:0.62in;width:3.04in;line-height:0.31in;"><span style="font-style:normal;font-weight:bold;font-size:22pt;font-family:Arial;color:#f3a36d">Escopo do Projeto</span><span style="font-style:normal;font-weight:bold;font-size:22pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:1.72in;left:0.93in;width:2.71in;line-height:0.23in;"><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#000000">Potência total do Projeto</span><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#ffffff"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:1.74in;left:6.43in;width:1.27in;line-height:0.27in;"><span style="font-style:normal;font-weight:bold;font-size:14pt;font-family:Calibri;color:#000000">${valores.potencia_instalada} kWp</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:2.15in;left:0.93in;width:2.91in;line-height:0.23in;"><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#000000">Base de Consumo Mensal</span><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#ffffff"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:2.19in;left:6.10in;width:1.91in;line-height:0.24in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Calibri;color:#000000">${valores.mediaConsumoMes} kWh/mês</span><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:10.70in;left:0.59in;width:6.08in;line-height:0.14in;"><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Arial;color:#000000">(*) 25 anos de garantia de performance de geração e 12 anos para defeitos de fabricação.</span><span style="font-style:normal;font-weight:normal;font-size:10pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:8.91in;left:0.59in;width:6.92in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#000000">* Valor para pagamento a vista. Para uma proposta de viabilidade economica será necessário uma visita técnica.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:2.58in;left:0.93in;width:2.92in;line-height:0.23in;"><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#000000">Geração Estimada Mensal</span><span style="font-style:normal;font-weight:normal;font-size:16pt;font-family:Arial;color:#ffffff"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:2.64in;left:6.22in;width:1.68in;line-height:0.21in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Calibri;color:#000000">${valores.geracaoEstimadaMensal} kWh/mês</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Calibri;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:8.39in;left:5.60in;width:1.79in;line-height:0.26in;"><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#3a3838">R$${valores.investimento}</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:9.12in;left:0.62in;width:1.78in;line-height:0.34in;"><span style="font-style:normal;font-weight:bold;font-size:24pt;font-family:Arial;color:#f3a36d">Garantias</span><span style="font-style:normal;font-weight:bold;font-size:24pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:3.26in;left:0.59in;width:7.41in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292">* Valor calculado com base na média histórica de radiação solar da região, e sujeito a variação em função das condições</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:3.43in;left:0.59in;width:0.68in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292">climáticas.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:3.64in;left:0.59in;width:4.57in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292">** A geração não é linear, sofrendo variação nos diferentes meses do ano.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:4.30in;left:0.62in;width:3.04in;line-height:0.31in;"><span style="font-style:normal;font-weight:bold;font-size:22pt;font-family:Arial;color:#f3a36d">Análise Financeira</span><span style="font-style:normal;font-weight:bold;font-size:22pt;font-family:Arial;color:#f3a36d"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.13in;left:1.10in;width:1.72in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Sua conta de Luz</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.39in;left:1.13in;width:1.67in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Anual sem a Volt</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.65in;left:1.39in;width:1.15in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Engenharia</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.13in;left:3.66in;width:1.72in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Sua conta de Luz</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.39in;left:3.68in;width:1.06in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Anual com</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <img style="position:absolute;top:5.60in;left:4.28in;width:0.46in;height:0.02in" src="ci_9.png" />
  //     <div style="position:absolute;top:5.39in;left:4.75in;width:0.60in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">a Volt</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.65in;left:3.94in;width:1.15in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000">Engenharia</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.13in;left:6.04in;width:2.02in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838">Sua economia Anual</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.39in;left:6.52in;width:1.07in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838">com a Volt</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:5.65in;left:6.48in;width:1.15in;line-height:0.20in;"><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838">Engenharia</span><span style="font-style:normal;font-weight:normal;font-size:14pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:6.19in;left:1.15in;width:1.63in;line-height:0.26in;"><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#000000">R$${valores.contaSemVolt}</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:6.19in;left:3.90in;width:1.26in;line-height:0.26in;"><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#000000">R$${valores.contaComVolt}</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#000000"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:6.19in;left:6.25in;width:1.63in;line-height:0.26in;"><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#3a3838">R$${valores.economia}</span><span style="font-style:normal;font-weight:bold;font-size:18pt;font-family:Arial;color:#3a3838"> </span><br/></SPAN></div>
  //     <div style="position:absolute;top:6.90in;left:0.59in;width:4.52in;line-height:0.13in;"><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292">* Valores podem sofrer variação devido a ajustes tarifários e de impostos.</span><span style="font-style:normal;font-weight:normal;font-size:9pt;font-family:Arial;color:#929292"> </span><br/></SPAN></div>
  //     <img style="position:absolute;top:1.68in;left:5.73in;width:0.04in;height:0.34in" src="ci_10.png" />
  //     <img style="position:absolute;top:2.14in;left:5.73in;width:0.04in;height:0.31in" src="ci_11.png" />
  //     <img style="position:absolute;top:2.57in;left:5.73in;width:0.04in;height:0.31in" src="ci_12.png" />
  //     <img style="position:absolute;top:5.08in;left:3.18in;width:0.04in;height:1.43in" src="ci_13.png" />
  //     <img style="position:absolute;top:9.99in;left:0.88in;width:2.32in;height:0.01in" src="ci_14.png" />
  //     <img style="position:absolute;top:10.22in;left:0.88in;width:2.32in;height:0.01in" src="ci_15.png" />
  //     <img style="position:absolute;top:5.08in;left:5.73in;width:0.04in;height:1.43in" src="ci_16.png" />
  //     <img style="position:absolute;top:9.77in;left:3.20in;width:0.00in;height:0.69in" src="ci_17.png" />
  //     <img style="position:absolute;top:9.77in;left:3.20in;width:0.01in;height:0.69in" src="ci_18.png" />
  //     <img style="position:absolute;top:9.99in;left:3.21in;width:4.86in;height:0.01in" src="ci_19.png" />
  //     <img style="position:absolute;top:10.22in;left:3.21in;width:4.86in;height:0.01in" src="ci_20.png" />   `,
  //   });
  // };
  
  