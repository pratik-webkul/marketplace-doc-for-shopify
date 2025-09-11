
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
// import { searchPlugin } from '@vuepress/plugin-search'


export default defineUserConfig({
  lang: 'en-US',
  title: '',
  description: 'Multi-Vendor Marketplace for Shopify',
  // base: '/marketplace-doc-for-shopify/',
  // head: [['link', { rel: 'stylesheet', href: '/styles/index.css' }]],
  base: '/',
  head: [['link', { rel: 'stylesheet', href: '/styles/index.css' }],
  ['script', { src: '/js/test.js' }],
  // ['script', { src: '/js/toggle-sidebar.js' }],
  
  ['meta', { name: 'title', content: 'Multi-Vendor Marketplace for Shopify' }],
  ['meta', { name: 'description', content: 'Powerful Multi-Vendor Marketplace solution for Shopify store owners to convert their store into a fully functioning marketplace.' }],

  
  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:title', content: 'Multi-Vendor Marketplace for Shopify' }],
  ['meta', { property: 'og:description', content: 'Powerful Multi-Vendor Marketplace solution for Shopify store owners to convert their store into a fully functioning marketplace.' }],
  ['meta', { property: 'og:image', content: 'https://webkul.com/blog/ogimage/?ogid=MTAwMDIz' }],
  ['meta', { property: 'og:url', content: 'https://marketplace-doc.webkul.com/' }],  
  
  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:title', content: 'Multi-Vendor Marketplace for Shopify' }],
  ['meta', { name: 'twitter:description', content: 'Powerful Multi-Vendor Marketplace solution for Shopify store owners to convert their store into a fully functioning marketplace.' }],
  ['meta', { name: 'twitter:image', content: 'https://webkul.com/blog/ogimage/?ogid=MTAwMDIz' }],
],


  theme: defaultTheme({
    logo: 'image/mp-black.svg',
    logoDark : 'image/mp-white.svg',
    navbar: [
        { text: 'Classic Theme', link: '/classic/Introduction/' },
        { text: 'Zenith Theme', link: '/zenith/Introduction/' },
        { text: 'Webkul', link: 'https://webkul.com/' },
        { text: 'Get App', link: 'https://apps.shopify.com/multi-vendor-marketplace' },
        { text: 'Support', link: 'https://webkul.uvdesk.com/' }
      ],
    sidebar: {
      '/classic/': [
        {
          text: 'Introduction',
          collapsible: true,
          children: [
            { text: 'Getting Started', link: '/classic/Introduction/' },                     
            { text: 'Overview', link: '/classic/Introduction/Overview' }                  
          ]
        },
        // {
        //   text: 'Introduction',
        //   link: '//'
        // },
        {
          text: 'Configuration',
          collapsible: true,
          children: [
            { text: 'General configuration', link: '/classic/configuration/general-configration' },
            { text: 'Product configuration', link: '/classic/configuration/product-configration' },
            { text: 'Seller configuration', link: '/classic/configuration/Seller-configuration' },
            { text: 'Invoice configuration', link: '/classic/configuration/Invoice configuration' },
            { text: 'Configuration Updates', link: '/classic/configuration/Configuration Updates' },
            { text: 'Minimum Purchase Quantity', link: '/classic/configuration/Minimum Purchase Quantity' },
            { text: 'Minimum Purchase Amount', link: '/classic/configuration/Minimum Purchase Amount' }


            // Add more configuration if needed 
          ]
        },
        {
          text: 'Seller',
          collapsible: true,
          children: [
            { text: 'Seller Profile Page Settings', link: '/classic/seller/Seller-Profile-Page-Settings' },
            { text: 'Seller Notification', link: '/classic/seller/Seller-Notification' },
            { text: 'Advanced Seller Policy', link: '/classic/seller/Advanced-Seller-Policy' } 
          ]
        },
        {
          text: 'Product',
          collapsible: true,
          children: [
            // { text: 'products', link: '/products/' },
            { text: 'Digital products', link: '/classic/products/Digital-products' },
            { text: 'Import products', link: '/classic/products/Import-products' },
            { text: 'Add products', link: '/classic/products/Add-products' },
            { text: 'Collection sync', link: '/classic/products/Collection-sync' },
            { text: 'Products updates', link: '/classic/products/Products-updates' },
            { text: 'Multilevel Collection', link: '/classic/products/Multilevel Collection' },
          ]
        },
        {
          text: 'Commission', 
          collapsible: true, 
          children: [
              { text: 'Overview', link: '/classic/Commission/Overview' },
              {text:'Commission-Type',link:'/classic/Commission/Commission-Type'}
          ]
        },
        {
          text: 'Payment Flow',
          collapsible: true,
          children: [
            { text: 'Seller-Payment', link: '/classic/payment/Seller-Payment' },
            { text: 'Stripe', link: '/classic/payment/Stripe' },
            { text: 'Stripe-configuration', link: '/classic/payment/Stripe-configuration' },
            { text: 'Paypal', link: '/classic/payment/Paypal' },
            { text: 'RazorPayX', link: '/classic/payment/RazorPayX' },
            { text: 'Seller-payment-configuration', link: '/classic/payment/Seller-payment-configuration' }

            // Add more payment-related links here if needed
          ]
        },
        {
          text: 'Featured-App',
          collapsible: true,
          children: 
          [
              { text: 'Overview', link: '/classic/Featured-App/Overview' },
              {
                text: 'Shipping',
                collapsible: true,
                children: [
                  { text: 'Marketplace Shipping', link: '/classic/Featured-App/Shipping/Marketplace Shipping' },
                  { text: 'USPS SHIPPING', link: '/classic/Featured-App/Shipping/USPS SHIPPING' },
                  { text: 'ECOM EXPRESS SHIPPING', link: '/classic/Featured-App/Shipping/ECOM EXPRESS SHIPPING' },
                  { text: 'CANADA POST SHIPPING', link: '/classic/Featured-App/Shipping/CANADA POST SHIPPING' },
                  { text: 'STORE PICKUP', link: '/classic/Featured-App/Shipping/STORE PICKUP' },
                  { text: 'AIR SPEED SHIPPING', link: '/classic/Featured-App/Shipping/AIR SPEED SHIPPING' },
                  { text: 'AUSTRALIA POST SHIPPING', link: '/classic/Featured-App/Shipping/AUSTRALIA POST SHIPPING' },
                  { text: 'UPS SHIPPING', link: '/classic/Featured-App/Shipping/UPS SHIPPING' },
                  { text: 'FEDEX SHIPPING', link: '/classic/Featured-App/Shipping/FEDEX SHIPPING' },
                  { text: 'VAMASHIP', link: '/classic/Featured-App/Shipping/VAMASHIP' },
                  { text: 'SHIPSTATION', link: '/classic/Featured-App/Shipping/SHIPSTATION' },
                  { text: 'BLUEDART', link: '/classic/Featured-App/Shipping/BLUEDART' },
                  { text: 'ENVIA SHIPPING', link: '/classic/Featured-App/Shipping/ENVIA SHIPPING' },
                  { text: 'DHL EXPRESS', link: '/classic/Featured-App/Shipping/DHL EXPRESS' },
                  { text: 'BRING SHIPPING', link: '/classic/Featured-App/Shipping/BRING SHIPPING' },
                  { text: 'POSTNL', link: '/classic/Featured-App/Shipping/POSTNL' },
                  { text: 'J&TEXPRESS SHIPPING', link: '/classic/Featured-App/Shipping/J&TEXPRESS SHIPPING' },
                  { text: 'SHIPMONDO', link: '/classic/Featured-App/Shipping/SHIPMONDO' },
                  { text: 'SENDLE SHIPPING', link: '/classic/Featured-App/Shipping/SENDLE SHIPPING' },
                  { text: 'SWISSPOST SHIPPING', link: '/classic/Featured-App/Shipping/SWISSPOST SHIPPING' },
                  { text: 'DELHIVERY', link: '/classic/Featured-App/Shipping/DELHIVERY' },
                  { text: 'EASYPOST SHIPPING', link: '/classic/Featured-App/Shipping/EASYPOST SHIPPING' },
                  { text: 'EASYSHIP', link: '/classic/Featured-App/Shipping/EASYSHIP' },
                  { text: 'SHIPROCKET SHIPPING', link: '/classic/Featured-App/Shipping/SHIPROCKET SHIPPING' },
                  { text: 'SBEEDY SHIPPING', link: '/classic/Featured-App/Shipping/SBEEDY SHIPPING' },
                  { text: 'SHIPPIT SHIPPING', link: '/classic/Featured-App/Shipping/SHIPPIT SHIPPING' }            
              ]
            },
            {
              text: 'Connector',
              collapsible: true,
              children: [
                { text: 'SELLER SHOPIFY STORE CONNECTOR', link: '/classic/Featured-App/Connector/SELLER SHOPIFY STORE CONNECTOR' },
                { text: 'WOOCOMMERCE CONNECTOR', link: '/classic/Featured-App/Connector/WOOCOMMERCE CONNECTOR' },
                { text: 'SHOPIFY ETSY CONNECTOR', link: '/classic/Featured-App/Connector/SHOPIFY ETSY CONNECTOR' },
                { text: 'SHOPIFY MAGENTO CONNECTOR', link: '/classic/Featured-App/Connector/SHOPIFY MAGENTO CONNECTOR' },
                { text: 'SHOPIFY PRESTASHOP CONNECTOR', link: '/classic/Featured-App/Connector/SHOPIFY PRESTASHOP CONNECTOR' },
                { text: 'SQUAREUP CONNECTOR', link: '/classic/Featured-App/Connector/SQUAREUP CONNECTOR' },
                { text: 'LINNWORKS CONNECTOR', link: '/classic/Featured-App/Connector/LINNWORKS CONNECTOR' },
                { text: 'SOOPOS CONNECTOR', link: '/classic/Featured-App/Connector/SOOPOS CONNECTOR' },
                { text: 'BIGCOMMERCE CONNECTOR', link: '/classic/Featured-App/Connector/BIGCOMMERCE CONNECTOR' },
                { text: 'AMAZON CONNECTOR', link: '/classic/Featured-App/Connector/AMAZON CONNECTOR' },
                { text: 'SHOPIFY EBAY CONNECTOR', link: '/classic/Featured-App/Connector/SHOPIFY EBAY CONNECTOR' },
                { text: 'DYTEL POS CONNECTOR', link: '/classic/Featured-App/Connector/DYTEL POS CONNECTOR' }       
              ]
            },
            {
              text: 'Seller Add-Ons',
              collapsible: true,
              children: [
                { text: 'SELLER MEMBERSHIP', link: '/classic/Featured-App/Seller Add-Ons/SELLER MEMBERSHIP' },
                { text: 'SELLER BUYER CHAT', link: '/classic/Featured-App/Seller Add-Ons/SELLER BUYER CHAT' },
                { text: 'ASK A QUESTION', link: '/classic/Featured-App/Seller Add-Ons/ASK A QUESTION' },
                // { text: 'SOCIAL NETWORK TABS', link: '/classic/Featured-App/Seller Add-Ons/SOCIAL NETWORK TABS' },
                { text: 'SELLER VACATION APP', link: '/classic/Featured-App/Seller Add-Ons/SELLER VACATION APP' },
                { text: 'PWA', link: '/classic/Featured-App/Seller Add-Ons/PWA' },
                { text: 'SELLER AND CUSTOMER BADGE', link: '/classic/Featured-App/Seller Add-Ons/SELLER AND CUSTOMER BADGE' },
                { text: 'SELLER TAGS AND CATEGORIES', link: '/classic/Featured-App/Seller Add-Ons/SELLER TAGS AND CATEGORIES' },
                { text: 'SELLER TIME SLOT MANAGEMENT', link: '/classic/Featured-App/Seller Add-Ons/SELLER TIME SLOT MANAGEMENT' },
                { text: 'SOCIAL MEDIA LOGIN', link: '/classic/Featured-App/Seller Add-Ons/SOCIAL MEDIA LOGIN' },
                { text: 'EMAIL MARKETING', link: '/classic/Featured-App/Seller Add-Ons/EMAIL MARKETING' },
                { text: 'WHATSAPP INTEGRATION', link: '/classic/Featured-App/Seller Add-Ons/WHATSAPP INTEGRATION' },
                { text: 'AFFILIATE-REFERRAL SELLER', link: '/classic/Featured-App/Seller Add-Ons/AFFILIATE-REFERRAL SELLER' }
                // Add more seller add-ons here
              ]
            },
            {
              text:'Marketplace Product Add-Ons',
              collapsible: true,
              children:[
                { text: 'GLOBAL PRODUCT', link: '/classic/Featured-App/Marketplace Product Add-Ons/GLOBAL PRODUCT' },
                { text: 'FAVORITE PRODUCT|SELLER', link: '/classic/Featured-App/Marketplace Product Add-Ons/FAVORITE PRODUCT|SELLER' },
                { text: 'STOCK MANAGEMENT', link: '/classic/Featured-App/Marketplace Product Add-Ons/STOCK MANAGEMENT' },
                { text: 'MAKE AN OFFER', link: '/classic/Featured-App/Marketplace Product Add-Ons/MAKE AN OFFER' },
                { text: 'PRODUCT FEED', link: '/classic/Featured-App/Marketplace Product Add-Ons/PRODUCT FEED' },
                { text: 'PRODUCT AUCTION FOR SELLER', link: '/classic/Featured-App/Marketplace Product Add-Ons/PRODUCT AUCTION FOR SELLER' },
                { text: 'SPONSORED PRODUCT', link: '/classic/Featured-App/Marketplace Product Add-Ons/SPONSORED PRODUCT' },
                { text: 'INDIAN GST', link: '/classic/Featured-App/Marketplace Product Add-Ons/INDIAN GST' },
                { text: 'PRODUCT EXPIRY', link: '/classic/Featured-App/Marketplace Product Add-Ons/PRODUCT EXPIRY' },
                { text: 'SLOT PRICING', link: '/classic/Featured-App/Marketplace Product Add-Ons/SLOT PRICING' },
                { text: 'BOOKING PRODUCT', link: '/classic/Featured-App/Marketplace Product Add-Ons/BOOKING PRODUCT' },
                { text: 'DAILY DEALS', link: '/classic/Featured-App/Marketplace Product Add-Ons/DAILY DEALS' },
                { text: 'ARTIST PRODUCT DESIGN', link: '/classic/Featured-App/Marketplace Product Add-Ons/ARTIST PRODUCT DESIGN' },
                { text: 'PRODUCT REVIEW', link: '/classic/Featured-App/Marketplace Product Add-Ons/PRODUCT REVIEW' },
                { text: 'CUSTOM OPTIONS', link: '/classic/Featured-App/Marketplace Product Add-Ons/CUSTOM OPTIONS' },
                { text: 'PAY WHAT YOU WANT', link: '/classic/Featured-App/Marketplace Product Add-Ons/PAY WHAT YOU WANT' },
                { text: 'CROWDFUNDING', link: '/classic/Featured-App/Marketplace Product Add-Ons/CROWDFUNDING' },
                { text: 'PREORDER INTEGRATION', link: '/classic/Featured-App/Marketplace Product Add-Ons/PREORDER INTEGRATION' },
                { text: 'DELIVERY SLOT MANAGEMENT', link: '/classic/Featured-App/Marketplace Product Add-Ons/DELIVERY SLOT MANAGEMENT' },
                { text: 'PACK PRODUCT INTEGRATION', link: '/classic/Featured-App/Marketplace Product Add-Ons/PACK PRODUCT INTEGRATION' },
                { text: 'DELIVERY BOY INTEGRATION', link: '/classic/Featured-App/Marketplace Product Add-Ons/DELIVERY BOY INTEGRATION' },
                { text: 'E-SIGNATURE', link: '/classic/Featured-App/Marketplace Product Add-Ons/E-SIGNATURE' }
              ]
            },
            {
              text:'Marketplace Other Add-Ons',
              collapsible: true,
              children:[
                { text: 'LOCATE YOUR PICKUP STORE', link: '/classic/Featured-App/Marketplace Other Add-Ons/LOCATE YOUR PICKUP STORE' },
                { text: 'SUBSCRIPTION PRODUCT WITH STRIPE CONNECT', link: '/classic/Featured-App/Marketplace Other Add-Ons/SUBSCRIPTION PRODUCT WITH STRIPE CONNECT' },
                { text: 'CHAT GPT', link: '/classic/Featured-App/Marketplace Other Add-Ons/CHAT GPT' },
                { text: 'MULTIVENDOR DATABASE BACKUP', link: '/classic/Featured-App/Marketplace Other Add-Ons/MULTIVENDOR DATABASE BACKUP' },
                { text: 'WATERMARK', link: '/classic/Featured-App/Marketplace Other Add-Ons/WATERMARK' },
                { text: 'SELLER BLOG', link: '/classic/Featured-App/Marketplace Other Add-Ons/SELLER BLOG' },
                { text: 'EASY GROUP BUY APP', link: '/classic/Featured-App/Marketplace Other Add-Ons/EASY GROUP BUY APP' }
              ]
            },
            {
              text:'Marketplace Miscellaneous Add-ons',
              collapsible: true,
              children:[
                { text: 'SMS ALERT', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/SMS ALERT' },
                { text: 'WEGLOT TRANSLATION', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/WEGLOT TRANSLATION' },
                { text: 'MULTIVENDOR API', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/MULTIVENDOR API' },
                { text: 'SELLER STAFF', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/SELLER STAFF' },
                { text: 'ADMIN STAFF', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/ADMIN STAFF' },
                { text: 'MULTI LOCATION INVENTORY', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/MULTI LOCATION INVENTORY' },
                { text: 'CUSTOMER ORDER MANAGEMENT', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/CUSTOMER ORDER MANAGEMENT' },
                { text: 'SPLIT CART', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/SPLIT CART' },
                { text: 'HYPERLOCAL MARKETPLACE', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/HYPERLOCAL MARKETPLACE' },
                { text: 'ROUTE INSURANCE', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/ROUTE INSURANCE' },
                { text: 'ZOHO INTEGRATION', link: '/classic/Featured-App/Marketplace Miscellaneous Add-ons/ZOHO INTEGRATION' }               
              ]
            }
          ]
        }
      ],
      '/zenith/': [
        {
          text: 'Introduction',
          collapsible: true,
          children: [
            { text: 'Getting Started', link: '/zenith/Introduction/' },                     
            { text: 'Overview', link: '/zenith/Introduction/Overview' }                  
          ]
        },
        // {
        //   text: 'Introduction',
        //   link: '//'
        // },
        {
          text: 'Configuration',
          collapsible: true,
          children: [
            { text: 'General configuration', link: '/zenith/configuration/general-configration' },
            { text: 'Product configuration', link: '/zenith/configuration/product-configration' },
            { text: 'Seller configuration', link: '/zenith/configuration/Seller-configuration' },
            { text: 'Invoice configuration', link: '/zenith/configuration/Invoice configuration' },
            { text: 'Configuration Updates', link: '/zenith/configuration/Configuration Updates' },
            { text: 'Minimum Purchase Quantity', link: '/zenith/configuration/Minimum Purchase Quantity' },
            { text: 'Minimum Purchase Amount', link: '/zenith/configuration/Minimum Purchase Amount' }

            // Add more configuration if needed 
          ]
        },
        {
          text: 'Seller',
          collapsible: true,
          children: [
            { text: 'Seller Profile Page Settings', link: '/zenith/seller/Seller-Profile-Page-Settings' },
            { text: 'Seller Notification', link: '/zenith/seller/Seller-Notification' },
            { text: 'Advanced Seller Policy', link: '/zenith/seller/Advanced-Seller-Policy' } 
          ]
        },
        {
          text: 'Product',
          collapsible: true,
          children: [
            //{ text: 'products', link: '/products/' },
            { text: 'Digital products', link: '/zenith/products/Digital-products' },
            { text: 'Import products', link: '/zenith/products/Import-products' },
            { text: 'Add products', link: '/zenith/products/Add-products' },
            { text: 'Collection sync', link: '/zenith/products/Collection-sync' }
          ]
        },
        {
          text: 'Commission', 
          collapsible: true, 
          children: [
              { text: 'Overview', link: '/zenith/Commission/Overview' },
              {text:'Commission-Type',link:'/zenith/Commission/Commission-Type'}
          ]
        },
        {
          text: 'Payment Flow',
          collapsible: true,
          children: [
            { text: 'Seller-Payment', link: '/zenith/payment/Seller-Payment' },
            { text: 'Stripe', link: '/zenith/payment/Stripe' },
            { text: 'Stripe-configuration', link: '/zenith/payment/Stripe-configuration' },
            { text: 'Paypal', link: '/zenith/payment/Paypal' },
            { text: 'RazorPayX', link: '/zenith/payment/RazorPayX' },
            { text: 'Seller-payment-configuration', link: '/zenith/payment/Seller-payment-configuration' }


            // Add more payment-related links here if needed
          ]
        },
        {
          text: 'Featured-App',
          collapsible: true,
          children: 
          [
              { text: 'Overview', link: '/zenith/Featured-App/Overview' },
              {
                text: 'Shipping',
                collapsible: true,
                children: [
                  { text: 'Marketplace Shipping', link: '/zenith/Featured-App/Shipping/Marketplace Shipping' },
                  { text: 'USPS SHIPPING', link: '/zenith/Featured-App/Shipping/USPS SHIPPING' },
                  { text: 'ECOM EXPRESS SHIPPING', link: '/zenith/Featured-App/Shipping/ECOM EXPRESS SHIPPING' },
                  { text: 'CANADA POST SHIPPING', link: '/zenith/Featured-App/Shipping/CANADA POST SHIPPING' },
                  { text: 'STORE PICKUP', link: '/zenith/Featured-App/Shipping/STORE PICKUP' },
                  { text: 'AIR SPEED SHIPPING', link: '/zenith/Featured-App/Shipping/AIR SPEED SHIPPING' },
                  { text: 'AUSTRALIA POST SHIPPING', link: '/zenith/Featured-App/Shipping/AUSTRALIA POST SHIPPING' },
                  { text: 'UPS SHIPPING', link: '/zenith/Featured-App/Shipping/UPS SHIPPING' },
                  { text: 'FEDEX SHIPPING', link: '/zenith/Featured-App/Shipping/FEDEX SHIPPING' },
                  { text: 'VAMASHIP', link: '/zenith/Featured-App/Shipping/VAMASHIP' },
                  { text: 'SHIPSTATION', link: '/zenith/Featured-App/Shipping/SHIPSTATION' },
                  { text: 'BLUEDART', link: '/zenith/Featured-App/Shipping/BLUEDART' },
                  { text: 'ENVIA SHIPPING', link: '/zenith/Featured-App/Shipping/ENVIA SHIPPING' },
                  { text: 'DHL EXPRESS', link: '/zenith/Featured-App/Shipping/DHL EXPRESS' },
                  { text: 'BRING SHIPPING', link: '/zenith/Featured-App/Shipping/BRING SHIPPING' },
                  { text: 'POSTNL', link: '/zenith/Featured-App/Shipping/POSTNL' },
                  { text: 'J&TEXPRESS SHIPPING', link: '/zenith/Featured-App/Shipping/J&TEXPRESS SHIPPING' },
                  { text: 'SHIPMONDO', link: '/zenith/Featured-App/Shipping/SHIPMONDO' },
                  { text: 'SENDLE SHIPPING', link: '/zenith/Featured-App/Shipping/SENDLE SHIPPING' },
                  { text: 'SWISSPOST SHIPPING', link: '/zenith/Featured-App/Shipping/SWISSPOST SHIPPING' },
                  { text: 'DELHIVERY', link: '/zenith/Featured-App/Shipping/DELHIVERY' },
                  { text: 'EASYPOST SHIPPING', link: '/zenith/Featured-App/Shipping/EASYPOST SHIPPING' },
                  { text: 'EASYSHIP', link: '/zenith/Featured-App/Shipping/EASYSHIP' },
                  { text: 'SHIPROCKET SHIPPING', link: '/zenith/Featured-App/Shipping/SHIPROCKET SHIPPING' },
                  { text: 'SBEEDY SHIPPING', link: '/zenith/Featured-App/Shipping/SBEEDY SHIPPING' },
                  { text: 'SHIPPIT SHIPPING', link: '/zenith/Featured-App/Shipping/SHIPPIT SHIPPING' }            
              ]
            },
            {
              text: 'Connector',
              collapsible: true,
              children: [
                { text: 'SELLER SHOPIFY STORE CONNECTOR', link: '/zenith/Featured-App/Connector/SELLER SHOPIFY STORE CONNECTOR' },
                { text: 'WOOCOMMERCE CONNECTOR', link: '/zenith/Featured-App/Connector/WOOCOMMERCE CONNECTOR' },
                { text: 'SHOPIFY ETSY CONNECTOR', link: '/zenith/Featured-App/Connector/SHOPIFY ETSY CONNECTOR' },
                { text: 'SHOPIFY MAGENTO CONNECTOR', link: '/zenith/Featured-App/Connector/SHOPIFY MAGENTO CONNECTOR' },
                { text: 'SHOPIFY PRESTASHOP CONNECTOR', link: '/zenith/Featured-App/Connector/SHOPIFY PRESTASHOP CONNECTOR' },
                { text: 'SQUAREUP CONNECTOR', link: '/zenith/Featured-App/Connector/SQUAREUP CONNECTOR' },
                { text: 'LINNWORKS CONNECTOR', link: '/zenith/Featured-App/Connector/LINNWORKS CONNECTOR' },
                { text: 'SOOPOS CONNECTOR', link: '/zenith/Featured-App/Connector/SOOPOS CONNECTOR' },
                { text: 'BIGCOMMERCE CONNECTOR', link: '/zenith/Featured-App/Connector/BIGCOMMERCE CONNECTOR' },
                { text: 'AMAZON CONNECTOR', link: '/zenith/Featured-App/Connector/AMAZON CONNECTOR' },
                { text: 'SHOPIFY EBAY CONNECTOR', link: '/zenith/Featured-App/Connector/SHOPIFY EBAY CONNECTOR' },
                { text: 'DYTEL POS CONNECTOR', link: '/zenith/Featured-App/Connector/DYTEL POS CONNECTOR' }       
              ]
            },
            {
              text: 'Seller Add-Ons',
              collapsible: true,
              children: [
                { text: 'SELLER MEMBERSHIP', link: '/zenith/Featured-App/Seller Add-Ons/SELLER MEMBERSHIP' },
                { text: 'SELLER BUYER CHAT', link: '/zenith/Featured-App/Seller Add-Ons/SELLER BUYER CHAT' },
                { text: 'ASK A QUESTION', link: '/zenith/Featured-App/Seller Add-Ons/ASK A QUESTION' },
                { text: 'SOCIAL NETWORK TABS', link: '/zenith/Featured-App/Seller Add-Ons/SOCIAL NETWORK TABS' },
                { text: 'SELLER VACATION APP', link: '/zenith/Featured-App/Seller Add-Ons/SELLER VACATION APP' },
                { text: 'PWA', link: '/zenith/Featured-App/Seller Add-Ons/PWA' },
                { text: 'SELLER AND CUSTOMER BADGE', link: '/zenith/Featured-App/Seller Add-Ons/SELLER AND CUSTOMER BADGE' },
                { text: 'SELLER TAGS AND CATEGORIES', link: '/zenith/Featured-App/Seller Add-Ons/SELLER TAGS AND CATEGORIES' },
                { text: 'SELLER TIME SLOT MANAGEMENT', link: '/zenith/Featured-App/Seller Add-Ons/SELLER TIME SLOT MANAGEMENT' },
                { text: 'SOCIAL MEDIA LOGIN', link: '/zenith/Featured-App/Seller Add-Ons/SOCIAL MEDIA LOGIN' },
                { text: 'EMAIL MARKETING', link: '/zenith/Featured-App/Seller Add-Ons/EMAIL MARKETING' },
                { text: 'WHATSAPP INTEGRATION', link: '/zenith/Featured-App/Seller Add-Ons/WHATSAPP INTEGRATION' },
                { text: 'AFFILIATE-REFERRAL SELLER', link: '/zenith/Featured-App/Seller Add-Ons/AFFILIATE-REFERRAL SELLER' }
                // Add more seller add-ons here
              ]
            },
            {
              text:'Marketplace Product Add-Ons',
              collapsible: true,
              children:[
                { text: 'GLOBAL PRODUCT', link: '/zenith/Featured-App/Marketplace Product Add-Ons/GLOBAL PRODUCT' },
                { text: 'FAVORITE PRODUCT|SELLER', link: '/zenith/Featured-App/Marketplace Product Add-Ons/FAVORITE PRODUCT|SELLER' },
                { text: 'STOCK MANAGEMENT', link: '/zenith/Featured-App/Marketplace Product Add-Ons/STOCK MANAGEMENT' },
                { text: 'MAKE AN OFFER', link: '/zenith/Featured-App/Marketplace Product Add-Ons/MAKE AN OFFER' },
                { text: 'PRODUCT FEED', link: '/zenith/Featured-App/Marketplace Product Add-Ons/PRODUCT FEED' },
                { text: 'PRODUCT AUCTION FOR SELLER', link: '/zenith/Featured-App/Marketplace Product Add-Ons/PRODUCT AUCTION FOR SELLER' },
                { text: 'SPONSORED PRODUCT', link: '/zenith/Featured-App/Marketplace Product Add-Ons/SPONSORED PRODUCT' },
                { text: 'INDIAN GST', link: '/zenith/Featured-App/Marketplace Product Add-Ons/INDIAN GST' },
                { text: 'PRODUCT EXPIRY', link: '/zenith/Featured-App/Marketplace Product Add-Ons/PRODUCT EXPIRY' },
                { text: 'SLOT PRICING', link: '/zenith/Featured-App/Marketplace Product Add-Ons/SLOT PRICING' },
                { text: 'BOOKING PRODUCT', link: '/zenith/Featured-App/Marketplace Product Add-Ons/BOOKING PRODUCT' },
                { text: 'DAILY DEALS', link: '/zenith/Featured-App/Marketplace Product Add-Ons/DAILY DEALS' },
                { text: 'ARTIST PRODUCT DESIGN', link: '/zenith/Featured-App/Marketplace Product Add-Ons/ARTIST PRODUCT DESIGN' },
                { text: 'PRODUCT REVIEW', link: '/zenith/Featured-App/Marketplace Product Add-Ons/PRODUCT REVIEW' },
                { text: 'CUSTOM OPTIONS', link: '/zenith/Featured-App/Marketplace Product Add-Ons/CUSTOM OPTIONS' },
                { text: 'PAY WHAT YOU WANT', link: '/zenith/Featured-App/Marketplace Product Add-Ons/PAY WHAT YOU WANT' },
                { text: 'CROWDFUNDING', link: '/zenith/Featured-App/Marketplace Product Add-Ons/CROWDFUNDING' },
                { text: 'PREORDER INTEGRATION', link: '/zenith/Featured-App/Marketplace Product Add-Ons/PREORDER INTEGRATION' },
                { text: 'DELIVERY SLOT MANAGEMENT', link: '/zenith/Featured-App/Marketplace Product Add-Ons/DELIVERY SLOT MANAGEMENT' },
                { text: 'PACK PRODUCT INTEGRATION', link: '/zenith/Featured-App/Marketplace Product Add-Ons/PACK PRODUCT INTEGRATION' },
                { text: 'DELIVERY BOY INTEGRATION', link: '/zenith/Featured-App/Marketplace Product Add-Ons/DELIVERY BOY INTEGRATION' },
                { text: 'E-SIGNATURE', link: '/zenith/Featured-App/Marketplace Product Add-Ons/E-SIGNATURE' }
              ]
            },
            {
              text:'Marketplace Other Add-Ons',
              collapsible: true,
              children:[
                { text: 'LOCATE YOUR PICKUP STORE', link: '/zenith/Featured-App/Marketplace Other Add-Ons/LOCATE YOUR PICKUP STORE' },
                { text: 'SUBSCRIPTION PRODUCT WITH STRIPE CONNECT', link: '/zenith/Featured-App/Marketplace Other Add-Ons/SUBSCRIPTION PRODUCT WITH STRIPE CONNECT' },
                { text: 'CHAT GPT', link: '/zenith/Featured-App/Marketplace Other Add-Ons/CHAT GPT' },
                { text: 'MULTIVENDOR DATABASE BACKUP', link: '/zenith/Featured-App/Marketplace Other Add-Ons/MULTIVENDOR DATABASE BACKUP' },
                { text: 'WATERMARK', link: '/zenith/Featured-App/Marketplace Other Add-Ons/WATERMARK' },
                { text: 'SELLER BLOG', link: '/zenith/Featured-App/Marketplace Other Add-Ons/SELLER BLOG' },
                { text: 'EASY GROUP BUY APP', link: '/zenith/Featured-App/Marketplace Other Add-Ons/EASY GROUP BUY APP' }
              ]
            },
            {
              text:'Marketplace Miscellaneous Add-ons',
              collapsible: true,
              children:[
                { text: 'SMS ALERT', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/SMS ALERT' },
                { text: 'WEGLOT TRANSLATION', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/WEGLOT TRANSLATION' },
                { text: 'MULTIVENDOR API', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/MULTIVENDOR API' },
                { text: 'SELLER STAFF', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/SELLER STAFF' },
                { text: 'ADMIN STAFF', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/ADMIN STAFF' },
                { text: 'MULTI LOCATION INVENTORY', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/MULTI LOCATION INVENTORY' },
                { text: 'CUSTOMER ORDER MANAGEMENT', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/CUSTOMER ORDER MANAGEMENT' },
                { text: 'SPLIT CART', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/SPLIT CART' },
                { text: 'HYPERLOCAL MARKETPLACE', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/HYPERLOCAL MARKETPLACE' },
                { text: 'ROUTE INSURANCE', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/ROUTE INSURANCE' },
                { text: 'ZOHO INTEGRATION', link: '/zenith/Featured-App/Marketplace Miscellaneous Add-ons/ZOHO INTEGRATION' }               
              ]
            }
          ]
        }
      ],
    }

    // navbar: ['/', '/get-started'],
  }),
  bundler: viteBundler(),
  plugins: [
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
})




