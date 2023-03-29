(ns demo.web.app
  (:require
   ["react" :as r]
   ["react-native" :as rn]))

(defn App []
  (r/createElement (.-Text rn) #js {} "hello world!"))
