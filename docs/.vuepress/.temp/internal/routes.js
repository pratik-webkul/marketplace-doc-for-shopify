export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Multivendor Marketplace Documentation"} }],
  ["/configuration/Seller-configuration.html", { loader: () => import(/* webpackChunkName: "configuration_Seller-configuration.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/configuration/Seller-configuration.html.js"), meta: {"title":"Multivendor Marketplace:Seller configuration"} }],
  ["/configuration/general-configration.html", { loader: () => import(/* webpackChunkName: "configuration_general-configration.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/configuration/general-configration.html.js"), meta: {"title":"Multivendor Marketplace:General configuration"} }],
  ["/configuration/product-configration.html", { loader: () => import(/* webpackChunkName: "configuration_product-configration.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/configuration/product-configration.html.js"), meta: {"title":"Multivendor Marketplace:Product configuration"} }],
  ["/products/Add-products.html", { loader: () => import(/* webpackChunkName: "products_Add-products.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/products/Add-products.html.js"), meta: {"title":"How to add Products"} }],
  ["/products/Collection-sync.html", { loader: () => import(/* webpackChunkName: "products_Collection-sync.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/products/Collection-sync.html.js"), meta: {"title":"Collection sync"} }],
  ["/products/Digital-products.html", { loader: () => import(/* webpackChunkName: "products_Digital-products.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/products/Digital-products.html.js"), meta: {"title":"Digital Products"} }],
  ["/products/Import-products.html", { loader: () => import(/* webpackChunkName: "products_Import-products.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/products/Import-products.html.js"), meta: {"title":"Import Products"} }],
  ["/products/", { loader: () => import(/* webpackChunkName: "products_index.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/products/index.html.js"), meta: {"title":"Product"} }],
  ["/payment/Paypal.html", { loader: () => import(/* webpackChunkName: "payment_Paypal.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/payment/Paypal.html.js"), meta: {"title":"Paypal"} }],
  ["/payment/RazorPayX.html", { loader: () => import(/* webpackChunkName: "payment_RazorPayX.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/payment/RazorPayX.html.js"), meta: {"title":"RazorPayX"} }],
  ["/payment/Stripe-configuration.html", { loader: () => import(/* webpackChunkName: "payment_Stripe-configuration.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/payment/Stripe-configuration.html.js"), meta: {"title":"Stripe"} }],
  ["/payment/Stripe.html", { loader: () => import(/* webpackChunkName: "payment_Stripe.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/payment/Stripe.html.js"), meta: {"title":"Stripe-connect"} }],
  ["/payment/overview.html", { loader: () => import(/* webpackChunkName: "payment_overview.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/payment/overview.html.js"), meta: {"title":"Payment"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/pratik/documentation/marketplace-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
