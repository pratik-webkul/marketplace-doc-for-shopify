import comp from "/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/configration/general-configration.html.vue"
const data = JSON.parse("{\"path\":\"/configration/general-configration.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"General Configuration-\",\"slug\":\"general-configuration\",\"link\":\"#general-configuration\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"configration/general-configration.md\"}")
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
