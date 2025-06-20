export const themeData = JSON.parse("{\"logo\":\"image/mp-black.svg\",\"sidebar\":[{\"text\":\"Introduction\",\"link\":\"/\"},{\"text\":\"Product\",\"collapsible\":true,\"children\":[{\"text\":\"Products\",\"link\":\"products/\"},{\"text\":\"Configuration\",\"link\":\"products/configuration\"}]},{\"text\":\"API\",\"collapsible\":true,\"children\":[{\"text\":\"Introduction\",\"link\":\"/introduction/requirements\"},{\"text\":\"Advanced Usage\",\"link\":\"introduction/installation\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
