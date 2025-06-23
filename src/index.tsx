

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'scA0';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"scA0",

          styles:[`{
width: "100%",
height: "100%",
backgroundColor: "#171F14",
}`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  alignItems: "center",
  width: "100%",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.box1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 20,
}`
          ],

          children: [
            `Jogos Populares`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '50px',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#212E1F',
borderRadius: '10px',
padding: '5px',
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("scA2");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `A2`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `scA0.gameList`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
flexDirection: 'row',
padding: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '60px',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '50px',
height: '50px',
}],

      URIvariablePath:[`$arg_thumb`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `$arg_title`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Preço normal: `
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `$arg_normalPrice`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Preço em promoção: `
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `$arg_salePrice`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '50px',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#212E1F',
borderRadius: '10px',
padding: '5px',
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
(item) => {
  const path2 = "sc.A1.wishlist";

const findFlatItem = obj => {
  if (typeof obj !== 'object' || obj === null) return null;

  if ('item' in obj) return obj.item;

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      for (const element of obj[key]) {
        const found = findFlatItem(element);
        if (found) return found;
      }
    } else if (typeof obj[key] === 'object') {
      const found = findFlatItem(obj[key]);
      if (found) return found;
    }
  }

  return null;
};

const fbValue = findFlatItem(item);

  const pass1 = { keyPath: [path2], value: [fbValue] };
  tools.functions.setVar({ args: '', pass: pass1 });
}, async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`wishlist`],
            arrPathData: [`sc.A1.wishlist`],
            arrFuncs: [()=>{}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `+ Lista`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[`{
width: "100%",
}`],    args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '50px'
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],
            args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  backgroundColor: "#212E1F",
  alignItems: "center",
  width: "100%",
  padding: "10px",
  flexDirection: "row",
  position: "absolute",
  bottom: "0px",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.box1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "50%",
alignItems: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("scA0");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={18}
    viewBox="0 0 23 18"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M22.698 13.29v-.014L21.16 5.385v-.017A5.632 5.632 0 0 0 15.625.75h-8.26a5.614 5.614 0 0 0-5.532 4.643L.304 13.276v.013a3.375 3.375 0 0 0 5.71 2.973l.033-.035L9.767 12h3.47l3.722 4.227.033.035c.633.631 1.49.986 2.383.988a3.375 3.375 0 0 0 3.322-3.96ZM9.25 7.5H8.5v.75a.75.75 0 0 1-1.5 0V7.5h-.75a.75.75 0 0 1 0-1.5H7v-.75a.75.75 0 0 1 1.5 0V6h.75a.75.75 0 0 1 0 1.5ZM13 6.75a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75Zm7.91 8.2a1.86 1.86 0 0 1-1.21.772 1.884 1.884 0 0 1-1.637-.505L15.23 12h.394a5.625 5.625 0 0 0 4.781-2.66l.82 4.218c.084.488-.03.989-.316 1.392Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6975 13.2891C22.698 13.2847 22.698 13.2803 22.6975 13.2759L21.1609 5.385C21.1609 5.37938 21.1609 5.37375 21.1609 5.36812C20.6715 2.69475 18.3428 0.752156 15.625 0.75H7.36469C4.63819 0.748952 2.30516 2.70712 1.83344 5.3925L0.304375 13.2759C0.303923 13.2803 0.303923 13.2847 0.304375 13.2891C0.04896 14.7394 0.763369 16.1878 2.06953 16.8679C3.3757 17.548 4.97203 17.3028 6.01375 16.2619L6.04656 16.2272L9.7675 12H13.2362L16.9591 16.2272C16.9694 16.2394 16.9806 16.2506 16.9919 16.2619C17.6245 16.8932 18.4813 17.2484 19.375 17.25C20.3722 17.2494 21.3181 16.8077 21.9589 16.0436C22.5996 15.2795 22.8697 14.2711 22.6966 13.2891H22.6975ZM9.25 7.5H8.5V8.25C8.5 8.66421 8.16421 9 7.75 9C7.33579 9 7 8.66421 7 8.25V7.5H6.25C5.83579 7.5 5.5 7.16421 5.5 6.75C5.5 6.33579 5.83579 6 6.25 6H7V5.25C7 4.83579 7.33579 4.5 7.75 4.5C8.16421 4.5 8.5 4.83579 8.5 5.25V6H9.25C9.66421 6 10 6.33579 10 6.75C10 7.16421 9.66421 7.5 9.25 7.5ZM13 6.75C13 6.33579 13.3358 6 13.75 6H16C16.4142 6 16.75 6.33579 16.75 6.75C16.75 7.16421 16.4142 7.5 16 7.5H13.75C13.3358 7.5 13 7.16421 13 6.75ZM20.9097 14.9503C20.6259 15.3589 20.1904 15.6367 19.7003 15.7219C19.1049 15.826 18.4957 15.638 18.0625 15.2166L15.2312 12H15.625C17.5718 12.0003 19.3803 10.9939 20.4062 9.33937L21.2256 13.5581C21.3099 14.0457 21.1962 14.5468 20.9097 14.9503Z" fill="white"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#171F14`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Jogos Populares`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "50%",
alignItems: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("scA1");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#0F1729"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Minha Lista`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  try {
    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=100", {
      method: "GET",
      redirect: "follow",
    });

    const result = await response.json();

    // Filtra para manter apenas uma oferta por jogo (pelo lower price)
    const uniqueGames = {};

    result.forEach((deal) => {
      const gameID = deal.gameID;

      if (!uniqueGames[gameID] || parseFloat(deal.salePrice) < parseFloat(uniqueGames[gameID].salePrice)) {
        uniqueGames[gameID] = deal;
      }
    });

    const bestDeals = Object.values(uniqueGames);

    console.log(bestDeals); // Mostra somente as melhores ofertas únicas por jogo

    const path1 = "scA0.gameList";
    const pass1 = { keyPath: [path1], value: [bestDeals] };

    tools.functions.setVar({ args: "", pass: pass1 });

  } catch (error) {
    console.log("Erro ao buscar jogos:", error);
  }
}]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"scA1",

          styles:[`{
width: "100%",
height: "100%",
backgroundColor: "#171F14",
}`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  alignItems: "center",
  width: "100%",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.box1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 20,
}`
          ],

          children: [
            `Minha Lista`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.A1.listed`,

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
flexDirection: 'row',
padding: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '60px',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '50px',
height: '50px',
}],

      URIvariablePath:[`$arg_thumb`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `$arg_title`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Preço normal: `
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `$arg_normalPrice`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Preço em promoção: `
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `$arg_salePrice`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '50px',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#212E1F',
borderRadius: '10px',
padding: '5px',
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [(...args) =>
        functions.firebase.deleteDocTool({ args, pass:{
   arrRefStrings: [
        `wishlist`, (() => {
console.log({args});
const item = tools.findFlatItem(args);
const idToDel = item.docId;

return idToDel;
})()],
   arrFuncs: [() => {}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `- Lista`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[`{
width: "100%",
}`],    args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '50px'
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],
            args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  backgroundColor: "#212E1F",
  alignItems: "center",
  width: "100%",
  padding: "10px",
  flexDirection: "row",
  position: "absolute",
  bottom: "0px",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.box1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "50%",
alignItems: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("scA0");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={18}
    viewBox="0 0 23 18"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M22.698 13.29v-.014L21.16 5.385v-.017A5.632 5.632 0 0 0 15.625.75h-8.26a5.614 5.614 0 0 0-5.532 4.643L.304 13.276v.013a3.375 3.375 0 0 0 5.71 2.973l.033-.035L9.767 12h3.47l3.722 4.227.033.035c.633.631 1.49.986 2.383.988a3.375 3.375 0 0 0 3.322-3.96ZM9.25 7.5H8.5v.75a.75.75 0 0 1-1.5 0V7.5h-.75a.75.75 0 0 1 0-1.5H7v-.75a.75.75 0 0 1 1.5 0V6h.75a.75.75 0 0 1 0 1.5ZM13 6.75a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75Zm7.91 8.2a1.86 1.86 0 0 1-1.21.772 1.884 1.884 0 0 1-1.637-.505L15.23 12h.394a5.625 5.625 0 0 0 4.781-2.66l.82 4.218c.084.488-.03.989-.316 1.392Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6975 13.2891C22.698 13.2847 22.698 13.2803 22.6975 13.2759L21.1609 5.385C21.1609 5.37938 21.1609 5.37375 21.1609 5.36812C20.6715 2.69475 18.3428 0.752156 15.625 0.75H7.36469C4.63819 0.748952 2.30516 2.70712 1.83344 5.3925L0.304375 13.2759C0.303923 13.2803 0.303923 13.2847 0.304375 13.2891C0.04896 14.7394 0.763369 16.1878 2.06953 16.8679C3.3757 17.548 4.97203 17.3028 6.01375 16.2619L6.04656 16.2272L9.7675 12H13.2362L16.9591 16.2272C16.9694 16.2394 16.9806 16.2506 16.9919 16.2619C17.6245 16.8932 18.4813 17.2484 19.375 17.25C20.3722 17.2494 21.3181 16.8077 21.9589 16.0436C22.5996 15.2795 22.8697 14.2711 22.6966 13.2891H22.6975ZM9.25 7.5H8.5V8.25C8.5 8.66421 8.16421 9 7.75 9C7.33579 9 7 8.66421 7 8.25V7.5H6.25C5.83579 7.5 5.5 7.16421 5.5 6.75C5.5 6.33579 5.83579 6 6.25 6H7V5.25C7 4.83579 7.33579 4.5 7.75 4.5C8.16421 4.5 8.5 4.83579 8.5 5.25V6H9.25C9.66421 6 10 6.33579 10 6.75C10 7.16421 9.66421 7.5 9.25 7.5ZM13 6.75C13 6.33579 13.3358 6 13.75 6H16C16.4142 6 16.75 6.33579 16.75 6.75C16.75 7.16421 16.4142 7.5 16 7.5H13.75C13.3358 7.5 13 7.16421 13 6.75ZM20.9097 14.9503C20.6259 15.3589 20.1904 15.6367 19.7003 15.7219C19.1049 15.826 18.4957 15.638 18.0625 15.2166L15.2312 12H15.625C17.5718 12.0003 19.3803 10.9939 20.4062 9.33937L21.2256 13.5581C21.3099 14.0457 21.1962 14.5468 20.9097 14.9503Z" fill="white"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Jogos Populares`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "50%",
alignItems: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("scA1");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#0F1729"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#171F14`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Minha Lista`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`wishlist`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A1.listed`],
          value: [args[0]]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"scA2",

          styles:[`{
width: "100%",
height: "100%",
backgroundColor: "#171F14",
}`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  alignItems: "center",
  width: "100%",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.box1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 20,
}`
          ],

          children: [
            `Jogos Populares`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        

 (...args:any) => <Elements.Custom pass={{
  arrItems: [() => {
  const [games, setGames] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchDeals = async (filterType) => {
    setLoading(true);
    let url = "https://www.cheapshark.com/api/1.0/deals?";

    switch (filterType) {
      case "store":
        url += "storeID=1"; // Steam por exemplo
        break;
      case "lowest":
        url += "sortBy=Price";
        break;
      case "discount":
        url += "sortBy=Deal%20Rating";
        break;
      default:
        break;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();
      setGames(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

const buttonStyle = {
    backgroundColor: "#212E1F",
    borderRadius: 10,
    padding: 5,
    alignItems: "center",
    marginBottom: 2,
    marginRight: 2,
  };

  const buttonTextStyle = {
    color: "#FFF",
    fontSize: 10,
  };

  return (
    <RN.View style={{ 
padding: 10,
  }}>
      <RN.Text style={{ color: "#FFF", fontSize: 10, marginBottom: 4 }}>
        Filtros:
      </RN.Text>

<RN.View style={{ 
flexDirection: 'row',
alignItems: 'center',
  }}>
      <RN.Pressable style={buttonStyle} onPress={() => fetchDeals("store")}>
        <RN.Text style={buttonTextStyle}>Filtrar por Loja (Steam)</RN.Text>
      </RN.Pressable>

      <RN.Pressable style={buttonStyle} onPress={() => fetchDeals("lowest")}>
        <RN.Text style={buttonTextStyle}>Menor Preço</RN.Text>
      </RN.Pressable>

      <RN.Pressable style={buttonStyle} onPress={() => fetchDeals("discount")}>
        <RN.Text style={buttonTextStyle}>Maior Desconto</RN.Text>
      </RN.Pressable>
</RN.View>


      {loading ? (
        <RN.ActivityIndicator size="large" />
      ) : (
        <RN.FlatList
          data={games}
          keyExtractor={(item) => item.dealID}
          renderItem={({ item }) => {
            const price =
              "Preço: $" +
              item.salePrice +
              " (Normal: $" +
              item.normalPrice +
              ")";
            const discount =
              "Desconto:" +
              Math.round(
                ((item.normalPrice - item.salePrice) / item.normalPrice) * 100
              ) +
              "%";

            return (
<RN.View
                style={{
                  flexDirection: 'row',
                }}
              >
<RN.Image
                  source={{ uri: item.thumb }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 6,
                    marginRight: 2,
					marginBottom: 2,
                  }}
                />
              <RN.View
                style={{
                  flex: 1,
                }}
              >
                <RN.Text style={{ color: "#FFF",
  fontSize: 12, fontWeight: 'bold'}}>
                  {item.title}
                </RN.Text>
                <RN.Text style={{ color: "#FFF",
  fontSize: 10, }}>{price}</RN.Text>
                <RN.Text style={{ color: "#FFF",
  fontSize: 10, }}>{discount}</RN.Text>
              </RN.View>
<RN.View
                style={{
                  flex: 1,
justifyContent: 'center',
                }}
              >
<RN.Pressable style={buttonStyle}
                    onPress={() => {
                    
  if (RN.Platform.OS === 'web') {
window.location.href = "https://www.cheapshark.com/redirect?dealID=" + item.dealID;
  } else {
RN.Linking.openURL("https://www.cheapshark.com/redirect?dealID=" + item.dealID);
  }
                    }}
                  >
                    <RN.Text style={buttonTextStyle}>Comprar</RN.Text>
                  </RN.Pressable>
</RN.View>
</RN.View>
            );
          }}
        />
      )}
    </RN.View>
  );
}] 
}}/>
, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '50px'
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],
            args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  backgroundColor: "#212E1F",
  alignItems: "center",
  width: "100%",
  padding: "10px",
  flexDirection: "row",
  position: "absolute",
  bottom: "0px",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.box1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "50%",
alignItems: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("scA0");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={18}
    viewBox="0 0 23 18"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M22.698 13.29v-.014L21.16 5.385v-.017A5.632 5.632 0 0 0 15.625.75h-8.26a5.614 5.614 0 0 0-5.532 4.643L.304 13.276v.013a3.375 3.375 0 0 0 5.71 2.973l.033-.035L9.767 12h3.47l3.722 4.227.033.035c.633.631 1.49.986 2.383.988a3.375 3.375 0 0 0 3.322-3.96ZM9.25 7.5H8.5v.75a.75.75 0 0 1-1.5 0V7.5h-.75a.75.75 0 0 1 0-1.5H7v-.75a.75.75 0 0 1 1.5 0V6h.75a.75.75 0 0 1 0 1.5ZM13 6.75a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75Zm7.91 8.2a1.86 1.86 0 0 1-1.21.772 1.884 1.884 0 0 1-1.637-.505L15.23 12h.394a5.625 5.625 0 0 0 4.781-2.66l.82 4.218c.084.488-.03.989-.316 1.392Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6975 13.2891C22.698 13.2847 22.698 13.2803 22.6975 13.2759L21.1609 5.385C21.1609 5.37938 21.1609 5.37375 21.1609 5.36812C20.6715 2.69475 18.3428 0.752156 15.625 0.75H7.36469C4.63819 0.748952 2.30516 2.70712 1.83344 5.3925L0.304375 13.2759C0.303923 13.2803 0.303923 13.2847 0.304375 13.2891C0.04896 14.7394 0.763369 16.1878 2.06953 16.8679C3.3757 17.548 4.97203 17.3028 6.01375 16.2619L6.04656 16.2272L9.7675 12H13.2362L16.9591 16.2272C16.9694 16.2394 16.9806 16.2506 16.9919 16.2619C17.6245 16.8932 18.4813 17.2484 19.375 17.25C20.3722 17.2494 21.3181 16.8077 21.9589 16.0436C22.5996 15.2795 22.8697 14.2711 22.6966 13.2891H22.6975ZM9.25 7.5H8.5V8.25C8.5 8.66421 8.16421 9 7.75 9C7.33579 9 7 8.66421 7 8.25V7.5H6.25C5.83579 7.5 5.5 7.16421 5.5 6.75C5.5 6.33579 5.83579 6 6.25 6H7V5.25C7 4.83579 7.33579 4.5 7.75 4.5C8.16421 4.5 8.5 4.83579 8.5 5.25V6H9.25C9.66421 6 10 6.33579 10 6.75C10 7.16421 9.66421 7.5 9.25 7.5ZM13 6.75C13 6.33579 13.3358 6 13.75 6H16C16.4142 6 16.75 6.33579 16.75 6.75C16.75 7.16421 16.4142 7.5 16 7.5H13.75C13.3358 7.5 13 7.16421 13 6.75ZM20.9097 14.9503C20.6259 15.3589 20.1904 15.6367 19.7003 15.7219C19.1049 15.826 18.4957 15.638 18.0625 15.2166L15.2312 12H15.625C17.5718 12.0003 19.3803 10.9939 20.4062 9.33937L21.2256 13.5581C21.3099 14.0457 21.1962 14.5468 20.9097 14.9503Z" fill="white"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#171F14`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Jogos Populares`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: "50%",
alignItems: "center",
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("scA1");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#0F1729"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  color: "#FFF",
  fontSize: 10,
}`
          ],

          children: [
            `Minha Lista`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[
        async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async () => {
  try {
    const response = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=100", {
      method: "GET",
      redirect: "follow",
    });

    const result = await response.json();

    // Filtra para manter apenas uma oferta por jogo (pelo lower price)
    const uniqueGames = {};

    result.forEach((deal) => {
      const gameID = deal.gameID;

      if (!uniqueGames[gameID] || parseFloat(deal.salePrice) < parseFloat(uniqueGames[gameID].salePrice)) {
        uniqueGames[gameID] = deal;
      }
    });

    const bestDeals = Object.values(uniqueGames);

    console.log(bestDeals); // Mostra somente as melhores ofertas únicas por jogo

    const path1 = "scA0.gameList";
    const pass1 = { keyPath: [path1], value: [bestDeals] };

    tools.functions.setVar({ args: "", pass: pass1 });

  } catch (error) {
    console.log("Erro ao buscar jogos:", error);
  }
}]
 , trigger: 'on init'
}}), async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`wishlist`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.A1.listed`],
          value: [args[0]]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#fff", 'secondary': "#0064fe" } 
, 
'cond1': false, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1", check: false},{name: "Task 2", check: false}] } 
, 
'name': "Name:", 
'dataToSet': {name: "Carlos", phone: "1111"}, 
'toggles': { 
'box1': true, 'checkbox1': false } 
, 'firebaseConfig': {
  apiKey: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI",
  authDomain: "devs-tests-95208.firebaseapp.com",
  projectId: "devs-tests-95208",
  storageBucket: "devs-tests-95208.appspot.com",
  messagingSenderId: "750912250366",
  appId: "1:750912250366:web:4629eac789a718a74220af"
} } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            async (...args) =>
  functions.firebase.fireInit({ args, pass:{
   fbConfig: `all.firebaseConfig`,

        }})
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
