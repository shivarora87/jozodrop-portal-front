export default function(isProduction){
  if(!isProduction){
    return  {}
  }
  return {
    name: 'load-script',
    transformIndexHtml() {
     return [
       {
         tag:'script',
         attrs:{
           src:'/js/autotrack/autotrack.js',
           crossorigin:true
         },
         injectTo:'head'
       }
     ]
    },
  }
}
