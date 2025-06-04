export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/pratik/documentation/marketplace-doc-for-shopify/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Multivendor Marketplace Documentation"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/pratik/documentation/marketplace-doc-for-shopify/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":""} }],
  ["/products/", { loader: () => import(/* webpackChunkName: "products_index.html" */"/home/pratik/documentation/marketplace-doc-for-shopify/docs/.vuepress/.temp/pages/products/index.html.js"), meta: {"title":"Product"} }],
  ["/products/configuration.html", { loader: () => import(/* webpackChunkName: "products_configuration.html" */"/home/pratik/documentation/marketplace-doc-for-shopify/docs/.vuepress/.temp/pages/products/configuration.html.js"), meta: {"title":""} }],
  ["/products/installation.html", { loader: () => import(/* webpackChunkName: "products_installation.html" */"/home/pratik/documentation/marketplace-doc-for-shopify/docs/.vuepress/.temp/pages/products/installation.html.js"), meta: {"title":""} }],
  ["/products/requirements.html", { loader: () => import(/* webpackChunkName: "products_requirements.html" */"/home/pratik/documentation/marketplace-doc-for-shopify/docs/.vuepress/.temp/pages/products/requirements.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/pratik/documentation/marketplace-doc-for-shopify/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
