// import react from "@vitejs/plugin-react-swc"
import react from '@vitejs/plugin-react'
// import ssr from 'vite-plugin-ssr/plugin'
// import babel from '@rollup/plugin-babel'
// import { webModulesToTranspile } from "../../configs/repo.config"


const reactNativeWeb = () => ({
  name: 'react-native-web-plugin',
  config: () => ({
    resolve: {
      extensions: [".web.jsx", ".web.js", ".jsx", ".js"],
      alias: {
        "react-native": "react-native-web",
      }
    }
  })
})
  
const config = {
  plugins: [
    react(), 
    reactNativeWeb(),
    // ssr()
  ],
  // optimizeDeps: {
  //   // include: [
  //   //   "@dank-style/react"
  //   // ]
  // },
  // build: {
  //   commonjsOptions: {
  //     include: [
  //       // "@dank-style/react",
  //       /@resoflect/,
  //       /node_modules/
  //     ],
  //   },
  //   rollupOptions: {
  //     plugins: [
  //       babel({
  //         babelHelpers: 'bundled',
  //         // include: [/node_modules\/@dank-style\/react/],
  //         // exclude: /node_modules/,
  //       }),
  //     ],
  //   }
  // },
}

export default config
