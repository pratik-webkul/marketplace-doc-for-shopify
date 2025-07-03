// docs/.vuepress/config.js
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import searchPlugin from "@vuepress/plugin-search";
var config_default = defineUserConfig({
  lang: "en-US",
  title: "",
  description: "Multi-Vendor Marketplace for Shopify",
  head: [["link", { rel: "stylesheet", href: "/styles/index.css" }]],
  theme: defaultTheme({
    logo: "image/mp-black.svg",
    sidebar: [
      {
        text: "Introduction",
        link: "/"
      },
      {
        text: "Product",
        collapsible: true,
        children: [
          { text: "Products", link: "products/" },
          { text: "Global product", link: "products/configuration" },
          { text: "Global product1", link: "products/configuration1" }
        ]
      },
      {
        text: "API",
        collapsible: true,
        children: [
          { text: "Introduction", link: "/introduction/requirements" },
          { text: "Advanced Usage", link: "introduction/installation" }
        ]
      }
    ]
    // navbar: ['/', '/get-started'],
  }),
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search"
        }
      }
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJhdGlrL2RvY3VtZW50YXRpb24vbWFya2V0cGxhY2UtZG9jL2RvY3MvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcmF0aWsvZG9jdW1lbnRhdGlvbi9tYXJrZXRwbGFjZS1kb2MvZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3ByYXRpay9kb2N1bWVudGF0aW9uL21hcmtldHBsYWNlLWRvYy9kb2NzLy52dWVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAdnVlcHJlc3MvdGhlbWUtZGVmYXVsdCdcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcydcbmltcG9ydCB7IHZpdGVCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItdml0ZSdcbmltcG9ydCAgc2VhcmNoUGx1Z2luICBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaCdcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgbGFuZzogJ2VuLVVTJyxcbiAgdGl0bGU6ICcnLFxuICBkZXNjcmlwdGlvbjogJ011bHRpLVZlbmRvciBNYXJrZXRwbGFjZSBmb3IgU2hvcGlmeScsXG4gIGhlYWQ6IFtbJ2xpbmsnLCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiAnL3N0eWxlcy9pbmRleC5jc3MnIH1dXSxcblxuXG4gIHRoZW1lOiBkZWZhdWx0VGhlbWUoe1xuICAgIGxvZ286ICdpbWFnZS9tcC1ibGFjay5zdmcnLFxuICAgIFxuICAgIHNpZGViYXI6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0ludHJvZHVjdGlvbicsXG4gICAgICAgIGxpbms6ICcvJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1Byb2R1Y3QnLFxuICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6ICdQcm9kdWN0cycsIGxpbms6ICdwcm9kdWN0cy8nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnR2xvYmFsIHByb2R1Y3QnLCBsaW5rOiAncHJvZHVjdHMvY29uZmlndXJhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdHbG9iYWwgcHJvZHVjdDEnLCBsaW5rOiAncHJvZHVjdHMvY29uZmlndXJhdGlvbjEnIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0FQSScsXG4gICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvaW50cm9kdWN0aW9uL3JlcXVpcmVtZW50cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdBZHZhbmNlZCBVc2FnZScsIGxpbms6ICdpbnRyb2R1Y3Rpb24vaW5zdGFsbGF0aW9uJyB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG5cbiAgICAvLyBuYXZiYXI6IFsnLycsICcvZ2V0LXN0YXJ0ZWQnXSxcbiAgfSksXG4gIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKCksXG4gIHBsdWdpbnM6IFtcbiAgICBzZWFyY2hQbHVnaW4oe1xuICAgICAgbG9jYWxlczoge1xuICAgICAgICAnLyc6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCcsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgXVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVYsU0FBUyxvQkFBb0I7QUFDaFgsU0FBUyx3QkFBd0I7QUFDakMsU0FBUyxtQkFBbUI7QUFDNUIsT0FBUSxrQkFBbUI7QUFHM0IsSUFBTyxpQkFBUSxpQkFBaUI7QUFBQSxFQUM5QixNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLE1BQU0sb0JBQW9CLENBQUMsQ0FBQztBQUFBLEVBR2pFLE9BQU8sYUFBYTtBQUFBLElBQ2xCLE1BQU07QUFBQSxJQUVOLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWE7QUFBQSxRQUNiLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxZQUFZLE1BQU0sWUFBWTtBQUFBLFVBQ3RDLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSx5QkFBeUI7QUFBQSxVQUN6RCxFQUFFLE1BQU0sbUJBQW1CLE1BQU0sMEJBQTBCO0FBQUEsUUFDN0Q7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFFBQ2IsVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLGdCQUFnQixNQUFNLDZCQUE2QjtBQUFBLFVBQzNELEVBQUUsTUFBTSxrQkFBa0IsTUFBTSw0QkFBNEI7QUFBQSxRQUM5RDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxFQUdGLENBQUM7QUFBQSxFQUNELFNBQVMsWUFBWTtBQUFBLEVBQ3JCLFNBQVM7QUFBQSxJQUNQLGFBQWE7QUFBQSxNQUNYLFNBQVM7QUFBQSxRQUNQLEtBQUs7QUFBQSxVQUNILGFBQWE7QUFBQSxRQUNmO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
