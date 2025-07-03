import comp from "/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/products/requirements.html.vue"
const data = JSON.parse("{\"path\":\"/products/requirements.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1749035508000,\"contributors\":[{\"name\":\"pratik\",\"username\":\"\",\"email\":\"pratik@webkul.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"8bb0cdf35ba22b90b083f5a6a104fd8e26d418ac\",\"time\":1749035508000,\"email\":\"pratik@webkul.com\",\"author\":\"pratik\",\"message\":\"add my first commit\"}]},\"filePathRelative\":\"products/requirements.md\"}")
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
