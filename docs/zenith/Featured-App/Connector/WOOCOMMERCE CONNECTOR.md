---
title: WOOCOMMERCE CONNECTOR
description: WOOCOMMERCE CONNECTOR
date: 2025-07-20
author: Chirag Tyagi
---
[**Multivendor Marketplace**](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) App is here to introduce a new Feature App named **WooCommerce Connector**.

Using this feature app, you can allow your sellers to sync their WooCommerce store's Products with your Shopify Store.

So, if your sellers have their online store on WooCommerce, they can easily import their products into the admin's store.

To make this feature work for the sellers, the admin needs to enable it from the Feature Apps section of the Multivendor App.

After that, proceed to approve the charge of $25 USD per month over and above your current Multivendor Plan.

Let's understand more about this feature:

### Features

*   Sellers can sync their WooCommerce Store's Products with the admin's Store.
*   Your seller needs to have a WooCommerce Store to use this feature. Sellers can import the products from their store to the admin's store.
*   Also, allow your sellers to import their products using any of the 3 distinctive methods i.e. by selecting the date range, by product ID, or by Product Slug.
*   Initially, the imported product will be in a pending state at both the admin and seller side.
*   Admin can anytime enable or deny the products imported by the seller.
*   Once approved by the admin, sellers can sell those products on your Store.
*   Moreover, product Inventory gets updated automatically on the admin's Store once an order is created on Seller's WooCommerce Store.
*   **[Slot Pricing](https://webkul.com/blog/shopify-multivendor-marketplace-slot-pricing/) is compatible** with this connector.
*   Now, both admin & seller can sync the seller’s products in any state from the “Product Listing” section of their respective panels.

![woocommerce](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Product-Admin-2-1200x597.png)

An email notification will be sent to the sellers for invalid variants in Import Woo commerce products. You can configure the email template from the **Mail Configuration** menu in the app.

![Screenshot-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/Screenshot-3.png)

### Eligibility Criteria for Product Import

To import the products from seller's Woocommerce store into your marketplace, please ask your sellers to check if the product is eligible for all the following criteria or not:-

Eligibility for a product to be imported into the multivendor app as well as on Shopify stores:-

*   The product should be **published on the seller Woocommerce store**.
*   The product should be either "**simple**" or "**variable**" product.
*   There **cannot be more than 3 attributes/options** on a product because Shopify allows only up to 3 options from which you can create different variants.
*   The number of **variants/variations cannot be more than 100** as Shopify allows only up to 100 variants.
*   The product should not be "**downloadable"** or **"virtual**".
*   The product should be "**purchasable**" (Product should have quantity OR price).
*   The Multi-vendor Marketplace app **server IPs must be whitelisted** -
*   54.255.33.47
*   18.138.8.137
*   47.129.250.24
*   54.179.1.53
*   18.136.7.41
*   13.229.6.57
*   18.138.9.81
*   52.74.127.6
*   13.228.91.147
*   13.250.79.108
*   13.229.100.249
*   52.220.12.7
*   3.1.34.177

**Important Note:-** Please make sure that the Woocommerce Store URL of Your seller is accessible from the code end i.e.

Store URL must return with "200 or 201 OK" status for successful integration with the app.

**Please ask Your Sellers to contact their Store manager to make the store URL accessible from the code end.** 

Also **NOTE**:-  
No of Woocommerce Product's attributes will be equal to its Variant's attributes count. Otherwise, Products will not be synced properly & products will not get published to your store.

### How to activate

Now, to activate this feature, you first need to visit the Feature Apps section of the Multivendor App. There, you will get this app namely "WooCommerce Connector".

**Feature Apps:**

![WooCommerce2](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Feature-Apps-Admin-3-1.png)

So, once you click on the Enable button, you need to agree with the charges of USD 25 per month over and above your current Multivendor Plan.

![WooCommerce3](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Feature-Apps-Admin-4.png)

Now, you need to click on the "Approve Charges" button to approve the charge for this feature app.

![WooCommerce11](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Demo-Store-Approve-fees-Shopify.png)

Once you will approve the charge, you can view the WooCommerce Connector feature app installed on your Marketplace.

Product Detail Configuration
----------------------------

Now, the admin needs to select the Woocommerce connector from the “**Connector Configuration**” menu.

Go to **Configuration**\>>**Product Detail Configuration**\>>Select the Connector from the drop-down menu.

Now, he can enable/disable other tabs for this section:

![product detail configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/12044543/AwesomeScreenshot-Connector-Configurations-Admin-2019-07-12-10-07-48.png)

Note:- Now, Auto approve product functionality will also work for products imported through the Woocommerce connector features app.

Auto approve product option, you can enable from admin panel >> configuration >> product configuration.

### Sync Orders

Orders can now be created in Seller's Woo Commerce store through the WooCommerce Connector feature app.

You can choose if you want to create an order on the seller’s WooCommerce Store or not. For this, you need to visit the admin panel>>Connector Configuration>>Enable **Sync Order** tab.

Thus, the order created in your store will get synced with the seller's store.

![sync order](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/Connector-Configurations-Admin-1200x556.png)

As soon as you enable this tab, you will get the option to choose if you want to sync customer data related to the order or not.

Also, you can restock inventory in the seller's store when an order is refunded on admin store.

![sync orders
](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/aaa-1200x561.webp)

This way, you can sync the customer details related to the order with the seller's store and also restock the inventory when the order is refunded on admin store.

**Note:-** Once the order is created at the admin Shopify store for the connector product then the same order will be created on the seller's Woocommerce store also.

Even, the admin will get a reference order number like below that will show order section of the seller's Woocommerce store.

![screenshot_from_2022_12_27_12_51_33-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_from_2022_12_27_12_51_33-6-1200x595.png)

![screenshot_from_2022_12_27_12_51_33-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_from_2022_12_27_12_51_33-5-1200x595.png)

### WooCommerce Configuration

Once you enable this feature on your marketplace, a new menu gets added in the configuration section. i.e. WooCommerce Configuration.

![WooCommerce15](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Dashboard-Seller-•-Multivendor-MarketPlace.png)

Here in this section, Sellers need to provide their respective WooCommerce details so that they can sync their WooCommerce store's products to admin's Shopify Store.

Your sellers need the following details:

\-Firstly Seller needs to enter his/her WooCommerce Store URL from where he/she wants to sync the products.

\-Select the Weight Unit of WooCommerce Store's products.

\-Enter the API key and Secret key.

##### **SELLER PANEL**

![WooCommerce16](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Woo-Commerce-Details-Seller-•-Multivendor-MarketPlace-1.png)

### Enter Language ISO Code

If the seller has any language restriction on their respective WooCommerce store, they can add ISO code of the language in the option provided:-

![Screenshot-2021-07-29T170706.760](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/Screenshot-2021-07-29T170706.760.png)

Suppose if the seller's store is in English language, enter **ISO as "en"** else, **enter "all"** if the seller's WooCommerce store supports multi-languages.

### How to get API & Secret Key?

In Order to get the API key and secret key, Sellers need to login to their WordPress account and visit the WooCommerce store.

![WooCommerce115](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Dashboard-%E2%80%B9-WP-D-V-%E2%80%94-WordPress.png)

From there, Seller will get the path to generate the **API key** and **the Secret Key:**

Login to WordPress>>Go to WooCommerce Settings>>Advanced>>REST API>>Add Key>>Click on Generate API Key>>From here seller will get the API Key as well as the Secret key.

![Rest API](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/06/screenshot-nimbusweb.me-2021.06.28-12_50_56.png)

Now, the Seller needs to enter the following Secret & API keys in WooCommerce Configuration section of the app.

![Woo Commerce Details Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Woo-Commerce-Details-Seller-•-Multivendor-MarketPlace-2.png)

On the same page, after entering the store URL & keys, the Seller will have the WooCommerce Delivery URLs.

Now, the seller will enter these URLs while setting Webhook & get all the data through it.

That is, whenever an order is created or product is created/updated/deleted at Seller’s WooCommerce Store, the same will be updated in the Multivendor app.

Coming back to the Multivendor App again, Seller can now map admin's product Categories & Tags with his/her own WooCommerce categories & product tags.

### Category Mapping

From this section, Seller will map admin’s pre-defined store collections with seller’s WooCommerce Collection.

**Note**:- Make sure that admin has enabled the “Restrict Collection” tab from MV admin panel.

**MARK**:- The category mapping works only for the manual collections, not for the automated collection.

![WooCommerce Collection](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Screenshot-15-1.png)

Now, clicking on the Map Collection button, the seller needs to select collection of admin’s store that he/she wants to map with the collections of his/her WooCommerce store.

This will be a One to Many Mapping.

![seller side](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Screenshot-16-1.png)

Seller will map all the Product’s Tags of admin’s store with the tags of his/her WooCommerce Store.

**\-Tag Mapping** 
------------------

**Note**:- Make sure that admin has enabled the “Restrict Product Tag” tab from MV admin panel.

![wooCommerce](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Screenshot-18-1.png)

![WooCommerce23](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Screenshot-19.png)

Clicking on the Map Tags button, Seller will enter the product tag created by admin and the tags of his/her WooCommerce store to map them with each other.

This will be a One to Many Mapping.

### How to Add Webhooks?

Once done, Seller needs to register Webhook to update the Product Inventory automatically on Shopify Store once any order is created on his/her WooCommerce Store.

In addition to it, if an order is edited/deleted on WooCommerce, the same will be updated/deleted on the Multivendor App too.

So, to add Webhook, the seller needs to enter the Webhook name, Status, Topic, Login URL (where the payload is delivered).

Admin can now add 4 new webhooks as Product Created, Product Updated, Product Deleted and Order Created.

Follow the below-given Procedure:

**WooCommerce**\>>**Settings**\>>**Advanced**\>>**Webhooks**\>>**Add Webhook**\>>Enter the above details>>Click on **Save Webhook**.

![webhook2](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/WooCommerce-settings-‹-WP-D-V-—-WordPress-5.png)

This is the complete configuration of this app.

Once done, let's see how Sellers import Products from WooCommerce Store to admin's Shopify Store.

### Import Products from WooCommerce to Shopify

Now, after the configuration, sellers can easily sync their WooCommerce Store's products to your Shopify store and thus on Marketplace.

Once the seller configures WooCommerce details on his/her end, he/she will get an option to **Import Products**.

The seller can click on it to import the products from WooCommerce by using 3 different methods.

*   **Method 1.** Import Products by choosing a Date Interval.  
    Seller can select a date range to import the product created in between the selected range.
*   **Method 2.** Import Products by Product IDs.  
    Seller can enter the comma-separated Product IDs and import all of them in one go.
*   **Method 3.** Import Products by Product Slug.  
    Seller can enter the Product's slug and import that product.

**Note:-** Product Slug in WooCommerce is Product Handle in Shopify.

![WooCommerce18](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Import-Product-From-Woo-Commerce-Seller-•-Multivendor-MarketPlace.png)

In this way, Sellers can import their Woo-Commerce Store's products to admin's Shopify Store.

Now, you can view the products in the Product Listing section of their respective panel.

#### **Admin End**

![WooCommerce19](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Product-Admin.png)

![WooCommerce10](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Product-Seller-•-Multivendor-MarketPlace.png)

This is how the products will appear:-  
**Seller End**

![WooCommerce122](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Product-Seller-•-Multivendor-MarketPlace-1.png)

Here, the products will remain in Pending State until you approve or deny the product. This will update the products on seller's side too.

![WooCommerce123](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/09/Product-Admin-1.png)

Now, once the admin denies any product, he needs to mention the reason for the same.

### Create Price Rule

Let the sellers create price rules to manage the product price of their WooCommerce store to the merchant’s store.

Now, the sellers will have a new menu named **Connector Price Rule** in the configuration menu of the app.

From here, the seller can create price rules based on which seller’s product price will be calculated on the merchant’s store. 

![Price rule ](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/01/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-1.png)

Now, clicking the **Connector Price Rule**, the seller needs to enable “Price Rule” status. Moreover, select the options as increase/decrease price.

This will change the price by a fixed amount or a percentage amount.

![price rule](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/01/Price-Rule-%E2%80%A2-Multivendor-MarketPlace.png)

Now, enable the checkbox to update the already synced product’s price at the merchant’s store as per the price rule created.

This way, sellers can create price rules from their respective seller panels based on which you will get the product price on your store.

So, this is all about Multivendor Marketplace WooCommerce Connector feature app.

### Demo Details

You can check the Demo:-

[https://multivendor-woo-commerce.myshopify.com/pages/multivendor-woocommerce-connector](https://multivendor-woo-commerce.myshopify.com/pages/multivendor-woocommerce-connector)
