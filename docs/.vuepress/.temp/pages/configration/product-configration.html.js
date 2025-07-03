import comp from "/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/configration/product-configration.html.vue"
const data = JSON.parse("{\"path\":\"/configration/product-configration.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Product Configuration-\",\"slug\":\"product-configuration\",\"link\":\"#product-configuration\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"configration/product-configration.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
