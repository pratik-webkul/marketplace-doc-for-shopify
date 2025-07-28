---
title: SELLER SHOPIFY STORE CONNECTOR
description: SELLER SHOPIFY STORE CONNECTOR
date: 2025-07-20
author: Chirag Tyagi
---


Here is the solution to allow them to sync their Shopify store products with your Shopify store. "Create an app for your sellers" by enabling the Seller Shopify store Connector feature app.

If your sellers also have Shopify stores and they want to add products from their respective stores to the Admin Shopify Store

then you can use Seller Shopify store connector featured app of the [Multi-vendor Marketplace app](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/).

You can get this featured app at a monthly subscription of $ 40 (USD) over & above your current multivendor app plan.

### Features

*   Let the marketplace sellers sync their Shopify store products with the admin's Shopify store.
*   Also, Seller’s Shopify store’s inventory will be synced with the admin Shopify store.
*   Further, the seller needs to create a private app on his Shopify store and configure the details in his/her seller panel.
*   Order & inventory will be synced on both admin & seller Shopify end.
*   Moreover, sellers can now update products in bulk from the “products” section of the seller app.
*   The sellers can register webbooks on their own based on their permission.
*   Compatible with the **[Partial Fulfillment](https://webkul.com/blog/shopify-multivendor-marketplace-partial-fulfillment/)** feature.
*   Smart collections can now be imported from the seller Shopify store into the Multi-vendor app via this Seller Shopify store connector add-on. [Know About Collection Sync Process](https://webkul.com/blog/shopify-multivendor-marketplace-collection-sync-from-shopify-store/)
*   Tags can be mapped via CSV file upload.

Check the below video for the Seller Shopify Store Connector:

0wTN1sLpD78

### Activate the Feature App

To get this feature app, go to the Feature App section & get the "Seller Shopify store connector" feature app.

![Screenshot-96](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot-96.png)

Click the **Enable** button to activate the **Seller Shopify Store Connector** feature app.

Approve the charge & get the feature to your marketplace.

Now, as soon as the Seller Shopify Connector feature app is Active, the sellers will get a new menu to the configuration menu of their respective Seller panels .

![Dashboard-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x627.png)

### NEW WORKFLOW :

To make the product sync features work, the seller firstly needs to create a custom app on their Shopify store.

Step 1: The seller needs to log in to their Shopify account and create a custom app from the "apps" section.

![screenshot-sagar-satti-store.myshopify.com-2022.02.09-11_37_35](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-sagar-satti-store.myshopify.com-2022.02.09-11_37_35-1200x581.png)

Step 2: Click on "create an app" and enter the name of the app.

![screenshot-sagar-satti-store.myshopify.com-2022.02.09-11_40_42](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-sagar-satti-store.myshopify.com-2022.02.09-11_40_42-1200x581.png)

After entering the name of the app, click on "Create app".

![screenshot-sagar-satti-store.myshopify.com-2022.02.09-11_44_40](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-sagar-satti-store.myshopify.com-2022.02.09-11_44_40.png)

Step 3: After creating the custom app, now the seller needs to configure Admin APIs by clicking on "configure Admin API scopes".

![screenshot-sagar-satti-store.myshopify.com-2022.02.09-11_49_55](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-sagar-satti-store.myshopify.com-2022.02.09-11_49_55-1200x581.png)

Now, the seller needs to provide the required permission for the custom app.  
  
**Mandatory Permission to create custom app as sales channel:**

![permissions](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/permissions.png)

### REQUIRED PERMISSIONS FOR CUSTOM APP

**Here are the required permissions for the custom seller app**:

Assigned fulfillment orders _(**Read and write**)  
_\# `write_assigned_fulfillment_orders` , `read_assigned_fulfillment_orders`

Fulfillment services _(**Read and write**)  
_\# read\_fulfillments, write\_fulfillments

Inventory _(**Read and write**)  
_\# read\_inventory, write\_inventory

Locations _(**Read Access**)  
_\# read\_locations

Order Editing _(**Read and write**)  
_\# read\_orders, write\_orders  
Allow this permission if you want to sync the order details with the seller store once edited on the merchant's store, else don't allow it.

Orders _(**Read and write**)  
_\# read\_orders, write\_orders

Products _**(Read and write)**_  
\# read\_products, write\_product

Markets  
\# **read\_merkets\_home**

### Required Permission for Sales Channel Configuration

#write\_product\_listings, #read\_product\_listings  
  
**Storefront API access scopes**:  
#`unauthenticated_read_product_listings`  
  
_Note: These permissions are mandatory for Sales Channel Configuration._

After providing the required permission, click on save.

![screenshot-sagar-satti-store.myshopify.com-2022.02.09-12_06_39](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-sagar-satti-store.myshopify.com-2022.02.09-12_06_39-823x1024.png)

Once, the permissions are saved, the seller will get an option to install the custom app.

The seller needs to install the app by clicking on the "install app" button.

![screenshot-sagar-satti-store.myshopify.com-2022.02.09-12_13_09](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-sagar-satti-store.myshopify.com-2022.02.09-12_13_09-1200x581.png)

Step 4: After installing the app, the seller will get the access token, API key, and secret key.

Now, the seller needs to copy the access token, API key, and secret key and paste them into the "seller sync app configuration" on their Multi-vendor seller panel

![screenshot-sagar-satti-store.myshopify.com-2022.02.09-12_14_16](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-sagar-satti-store.myshopify.com-2022.02.09-12_14_16-1200x801.png)

NOTE: Ignore the flow explained below as the private apps are now depreciated by Shopify. Please skip to the "[seller panel](https://webkul.com/blog/seller-shopify-store-connector-multi-vendor-marketplace-for-shopify/#seller-panel)" section below

To make the product sync features work, the sellers first need to create a private app on their respective Shopify stores.

Then, the sellers will get all the app details to configure for syncing products with the admin’s store.

### How does the Seller Create a Private App?

To create a Private App, firstly the seller needs to Visit the “**Apps**” section of his/her Shopify Store.

Then, scrolling down to the bottom, You will get the “**Manage Private Apps**” option. Click on it to create a new Private app.

![Seller App](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Shopify-1200x576.png)

[**Know how to create a Private App**](https://webkul.com/blog/how-to-create-js-sdk-token/#panel-0)

![seller shopify store connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/05/screenshot-rohit-jha-store18.myshopify.com-2021.05.17-17_06_49-1200x549.png)

This way, the seller can create a private app from his/her Shopify store.

![seller shopify store connector API](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/05/screenshot-rohit-jha-store18.myshopify.com-2021.05.17-17_02_15-1200x549.png)

Now, the seller will configure all the details from his seller panel.

### REQUIRED PERMISSIONS TO CREATE A PRIVATE APP

**Here is the required Permission for private seller\_app:**

Assigned fulfillment orders _(**Read and write**)  
_\# read\_orders, write\_orders

Fulfillment services _(**Read and write**)  
_\# read\_fulfillments, write\_fulfillments

Inventory _(**Read and write**)  
_\# read\_inventory, write\_inventory

Locations _(**Read Access**)  
_\# read\_locations

Order Editing _(**Read and write**)  
_\# read\_orders, write\_orders  
Allow this permission if you want to sync the order details with the seller store once edited on the merchant's store, else don't allow.

Orders _(**Read and write**)  
_\# read\_orders, write\_orders

Products _**(Read and write)**_  
\# read\_products, write\_products

![Admin API](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/05/Screenshot-15-1200x509.png)

![Screenshot-16-1200x511-png-1200×511-](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-16-1200x511-png-1200%C3%97511-.png)

### Seller Panel

After Installing the custom app on the seller Shopify store, the seller has got the access token, API key, and secret key which he/she needs to paste in the "seller sync app configuration".

Seller panel >> configuration >> seller sync app configurations

![Dashboard-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x627.png)

Enter the access token, API key, and secret key >> save.

![screenshot-shopify-trunk.webkul.com-2022.02.09-12_36_19](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-shopify-trunk.webkul.com-2022.02.09-12_36_19-1091x1024.png)

After saving the details, the seller can now start with importing the products.

![screenshot-shopify-trunk.webkul.com-2022.02.09-12_44_13](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/02/screenshot-shopify-trunk.webkul.com-2022.02.09-12_44_13-820x1024.png)

### Admin Panel: Seller Supported App Configuration

**Seller App Configuration**

**SYNC ORDERS  
**You will have a Sync Order option. So, enabling this option will let you choose whether you want to sync order with the seller's store.

![Seller-Supported-App-Configuration-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Seller-Supported-App-Configuration-Admin-1200x627.png)

**SYNC ONLY PAID ORDERS**

With this configuration, you can sync only paid orders with the seller's Shopify store.

![download-20-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/download-20-1-1200x515.png)

### Create Orders on Seller Store

You will now have an option to create orders on your seller's Shopify store.

For this, Go to Orders>>Order Listing>>View Order>>More Action>>Create Order on Seller Store.

![download-21-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/download-21-1-1200x505.png)

![download-22-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/download-22-1-1200x503.png)

**Note:-** Even, the admin will get a reference order number like below that will be shown order section of seller's Shopify store.

![screenshot_from_2022_12_27_12_51_33](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_from_2022_12_27_12_51_33-1200x595.png)

### Manual Sync Orders

In case an order is placed on the admin's store and is not synced with the seller's Shopify store then, then seller can sync the order manually from the seller panel.

To sync the order manually, the seller need to visit the Multi-vendor **Seller Panel**\>>Go to **Orders**\>>**View Order**\>>On Order Detail Page-In **More Action**\-Click **Sync Order** button.

![download-15](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/02/download-15-1200x549.png)

This way, orders can be synced manually with the seller Shopify store connector.

### Sync Order Refund

You can now choose to sync orders from the seller store to the admin store and vice versa. For this, you need to visit the admin panel>>Go to Configuration>>**Seller Supported App Configuration**.

Enable the below tabs:-  
ORDERS REFUND FROM SELLER TO ADMIN STORE:- You can choose if you want to sync the seller's order refunds to your store or not.

ORDER REFUND FROM ADMIN TO SELLER STORE:- You can choose if you want to sync orders from your store to the seller store.

![7ed348be-4f35-48bb-b883-d741689b6432](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/7ed348be-4f35-48bb-b883-d741689b6432-1200x584.png)

### Sync Customer Details

By enabling this tab, you can sync customer details in order with the seller's store. Let's understand this feature in detail.

CASE 1: Sync Customer Details tab is **ON** (**enabled**):

Once a customer places an order, the customer is there on the seller's Shopify store with complete shipping and billing details.

Also, the customers will receive an email from the seller's store regarding the same.

NOTE:- In this case, if you don't want to send an email to the customer, you can configure a dummy email.

![customer details ON](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Screenshot-2020-05-08T103054.342-1200x622.png)

CASE 2: Sync Customer Details tab is **OFF** (**disabled**):

In case you disable this tab, you will get multiple options to choose whether you want to sync the customer's shipping address, billing address, name, and email or not.

You can configure the settings as per the requirements.

![seller app configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Seller_Supported_App_Configuration_Admin-1151x1024.png)

**Product Details Configuration  
**In the “Product Details Configuration”, you can enable/disable the options. Thus, auto-update the enable fields when the sellers make any update from their end.

![Seller-Supported-App-Configuration-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Seller-Supported-App-Configuration-Admin-1-889x1024.png)

### RESTRICT IMAGE COUNT ON PRODUCTS

Admin can enable restrict image count configuration to restrict the number of Product images between 1 to 20.

So seller can only sync a certain number of images which is set by the Admin.

![bdjsbhdsj](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/11/bdjsbhdsj-1200x542.png)

### Import Product Meta Field

You can now import product meta fields from the seller's Shopify store into your marketplace.

For this, you need to enable the below-given option from the Seller App Configuration>>**Product Details Configuration**.

![Screenshot-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/Screenshot-5-1200x610.png)

### Seller Updating Products

If the seller has disabled the Auto Sync New Products Tab:-

Once the seller makes any changes in the products on his/her Shopify store, he/she will get info on the multi-vendor seller dashboard to update all products.

Now, clicking the “**View the products**” button, redirect your sellers to a page where all the products will be listed that are not yet updated on the admin’s store.

![Screenshot-100](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot-100-1200x499.png)

Additionally, the seller can update all the products in a go simply by clicking the**“Update all products”** button. Additionally, the seller can manually update each product as per his/her choice.

![Bulk-Product-Update-Details-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Bulk-Product-Update-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x627.png)

In the manual update, Clicking the “Update Product” button, the product will be in the “**Processing**” state.

![Bulk-Product-Update-Details-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Bulk-Product-Update-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x627.png)

Once processed, the product will get unlisted from this section.

![Bulk-Product-Update-Details-Seller-•-Multivendor-MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Bulk-Product-Update-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x627.png)

Now, before the sellers start importing products from their respective Shopify stores into the app, please ask your sellers to firstly**, Map The Products then, Import Products**.

### Sales channel configuration : Seller panel

Using this configuration Sellers can import their products by creating a unique sales channel, especially for the Admin Store which is not available on their own online store.

The seller can create a custom app and provide certain permission which you find below that would convert the custom app into a Sales channel that they can select for their product.

Please refer to the images below for a better understanding.

Sellers can add Products only for the Admin marketplace which will only be available on the Sales channel created by the Seller and connected via the seller panel.

**Note: Once Seller enables this configuration they won't be able to disable it.**

![Sales-channel](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/Sales-channel-1200x616.png)

To Add the product Please make sure the Product is added to the sales channel app that the Seller created as shown below otherwise it won't be imported or synced.

![sales-channel-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/sales-channel-1-1200x856.png)

Pic 1

### Required Permission for Sales Channel Configuration

#write\_product\_listings, #read\_product\_listings

**Storefront API access scopes**:  
#`unauthenticated_read_product_listings`

**_Note: These permissions are mandatory for Sales Channel Configuration._**

![permissions-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/permissions-2.png)

Pic 2

### Map Product Type and Collection

The seller will have the option to map the admin’s store product type & collection with the product type & collection of their Shopify store.

Note:- Make sure that the admin has restricted the product type & collection from the admin panel. Also, add types and collections to the admin's marketplace.

Now, on the seller panel, here is the option to map product types & collections in the Seller Sync App Configuration menu of the app.

![Map Collection](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/Seller-App-Configuration-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x619.png)

**MAP COLLECTION**

![Map-Collections-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/Map-Collections-%E2%80%A2-Multivendor-MarketPlace-1200x619.png)

**MAP PRODUCT TYPE**

Similarly, sellers can map the product type of their respective stores with the product type of your Shopify store.

Thus, clicking the Map Type, the seller will have the option to choose once product type from the admin's store and map the same with the product type of his/her Shopify store.

![Seller-App-Configuration-Details-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/Seller-App-Configuration-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x619.png)

![Map-Product-Type-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/Map-Product-Type-%E2%80%A2-Multivendor-MarketPlace-1200x619.png)

### Map Product Tags

You can now allow sellers to map the product tags of their respective stores with the product tag of your Shopify store.

![screenshot-ravikant-sh.webkul.com-2021.07.09-13_00_27](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-ravikant-sh.webkul.com-2021.07.09-13_00_27-1200x549.png)

Clicking Tag Mapping, the seller will get the option to map the tag.

![screenshot-ravikant-sh.webkul.com-2021.07.09-13_03_34](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-ravikant-sh.webkul.com-2021.07.09-13_03_34-1200x549.png)

The seller can map product tag via CSV file upload.

![screenshot-ravikant-sh.webkul.com-2021.07.09-13_04_32](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/07/screenshot-ravikant-sh.webkul.com-2021.07.09-13_04_32-1200x974.png)

### Seller-wise product tag restriction

Admin needs to enable this configuration from the **Admin panel > configuration > restrict configuration > enable the restrict product tags tab.**

![seller shopify store connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/ab1-1200x966.png)

Once the admin enables this configuration, then the admin can allow or restrict the products tag, **seller wise** at the edit seller section. as shown below.

**Admin panel > seller > seller listing > edit seller.**

![seller shopify store connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/05/ab2-1200x619.png)

If the above configuration is enabled then the seller needs to do mapping but if the admin disables this tab,

it means the admin allows the seller to import the product along with their product tag.

The seller will not be able to see the tag mapping option at the time of importing the products if the above tab is disabled.

### Import Products from Seller’s Shopify Store

Now, by clicking on the Import Products button, the seller can import products from his/her Shopify store to the admin’s Shopify store.

Seller will have three methods to import products:-

**Method 1:-** Choose a Date Range & import products.

![Import-Product-From-Seller-App-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Import-Product-From-Seller-App-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x459.png)

**2nd Method:-** Import products by comma-separated product IDs.

![Screenshot-98](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot-98-1200x236.png)

**Method 3:-** Import products by product handle.

![Screenshot-99](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot-99-1200x252.png)

This way, sellers can import products to the admin’s store.

Thus, all the products imported by the seller will be visible in the “Product Listing” section of his/her seller panel.

![Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x627.png)

Now, the admin can view a new menu added under the **Configuration** menu of the admin panel i.e. **Seller Supported App Configuration**.

### Inventory Update on Order: Points to be Noted!

**ORDER CREATION ON ADMIN'S STORE**

Case 1: Sync Order tab is **OFF**

When the order is placed on the admin's store and **Sync Order** Tab is disabled then, Order will not create on the seller's Shopify store. However inventory will be managed on the seller's store.

Case 2: Sync Order tab is **ON**

Once an order is placed on the admin's store and **Sync Order** Tab is ON then, the same order will be created on the seller's Shopify store too.

Thus, update inventory and manage product quantity accordingly on the seller's store.

Merchants don't need to update the inventory each time when an order is placed on the admin's Shopify store.

**ORDER CREATION ON SELLER'S STORE**

Once an order is placed on the seller's Shopify store, only product inventory will be managed on the admin end i.e. product quantity gets updated on the admin's store.

In case any seller's product (listed on the admin's store) is not synced with the seller's store then,

both the admin and the seller can sync products manually from the **Product Listing** section of their respective panels.

**Admin End**

![admin end- product ](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/Product-Admin-1200x619.png)

**Seller End**

![seller end](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x619.png)

### Third-Party App for Drop Shipping

In case any of your sellers are using a third-party app, Oberlo for drop shipping then,

products synced from Oberlo to seller’s Shopify store can easily be synced with the admin’s store at his store’s primary location.

![Multivendor Marketplace App for Shopify- Seller Product Sync](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/Screenshot-54.png)

To import products from Oberlo to the seller app, the seller needs to enable the “**Third-Party App for Drop Shipping**” option from the **Configuration** menu.

Moreover, once enable, import products to the seller app.

![Seller-App-Configuration-Details-Seller-•-Multivendor-MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Seller-App-Configuration-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x627.png)

Get the list of all imported products in the Products section of the seller app (sync with the admin's store).

This way, products will update on the admin’s marketplace.  

### Connector Price Rule & Currency Conversion

Seller will select the Seller Sync App from the drop-down menu for currency conversion & price rule:

![Screenshot22](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Screenshot22-1200x528.png)

**CURRENCY CONVERSION**

If the currency of your seller’s store is different from the currency you set on your marketplace, then, the sellers can specify their currency rate with respect to your currency rate.

Accordingly, your seller’s product price calculates once a customer places an order

![Price-Rule-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Price-Rule-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x825.png)

**PRICE RULE**

In the price rule menu, the seller can create a price rule to manage the price of the product on your Shopify store. The seller has to set the price rule:

*   The seller has to enable or disable the price rule status to configure the settings.
*   Select the price rule, either to increase or decrease.
*   Select the Price change, either fixed or percentage.  
    Enter the amount of how much the sellers want to increase or decrease the price.

![Price-Rule-Seller-•-Multivendor-MarketPlace-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Price-Rule-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x627.png)

### Allow Sellers to Register Webhook

**PURPOSE**:- The seller requires certain [permission](https://webkul.com/blog/seller-shopify-store-connector-multi-vendor-marketplace-for-shopify/#required-permissions-to-create-a-private-app) to create a private app to make the sync process work.

In case the seller has missed enabling any permission and created the private app, still, he/she will have the option to register webhooks from his/her seller panel.  

The seller can visit the **Seller Sync App Configuration** where there is a list of all the webhooks. Just register/unregister webhooks as per the requirement.

Using the seller store connector, the admin can now allow sellers to view/register webhooks from the seller panels based on the permission provided.

Seller Panel>>Seller Sync App Configuration>>Click **Shopify Webhooks**

![register webhook](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Seller_App_Configuration_Details_Seller_%E2%80%A2_Multivendor_MarketPlace-1-1158x1024.png)

List of all webhooks. The seller can anytime unregister webhooks from the listing.

![unregister](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Screenshot-2020-05-15T204027.688-1200x585.png)

The seller can unregister/delete webhook and can anytime register it again.

![delete webhook](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Screenshot-2020-05-15T204208.729-1200x586.png)

### Map Product With Connected Stores

Sellers can now map products with their connected Shopify stores.

In case a seller wants to map a product with a specific product of his/her Shopify store then, the variant will be mapped automatically.

Now, the seller can map the products from the Product Listing>>Edit product>>**Map Product** button.

![Edit-Product-Seller-•-Multivendor-MarketPlace-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Edit-Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x597.png)

Clicking the Map Product button, the seller can choose whether to map the products manually or auto-map with any specific product with same SKU or Option Name.

![Screenshot-2020-10-09T172100.279](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Screenshot-2020-10-09T172100.279-1200x592.png)

**On selecting the "Map Product Automatic" option**:- The seller needs to choose a product from his/her Shopify store and then, choose the Map Type as "Map with SKUs" or "Map with Option Name".

![Screenshot20-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Screenshot20-2-1200x563.png)

**On selecting "Map Product Manually" option**:-

Once you choose this option, the seller simply needs to select his/her Shopify store product with which you need to map the seller's marketplace product.click the **Submit** button.

![Screenshot-2020-10-09T173753.254](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Screenshot-2020-10-09T173753.254-1200x510.png)

### Sync Order On Seller Shopify Store

In case the order created in the app, not synced with the seller's Shopify store then, the seller can manually create an order on his/her Shopify store.

For this, the seller will visit the seller panel>>Order>>Edit Order>>Click the **"Sync Order"** button in the More Action menu.

![Order-Details-Seller-•-Multivendor-MarketPlace-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/12/Order-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-6-1200x597.png)

### Update Marketplace Shipping Labels

You can now allow sellers to change the marketplace shipping labels to their respective Shopify store's shipping labels.

For this, visit the Seller Supported App Configuration & enable the tab.

![Seller-Supported-App-Configuration-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Seller-Supported-App-Configuration-Admin-1-1200x516.png)

SELLER PANEL

The seller can enable the option from the Seller Sync App Configuration menu:

![Screenshot-2021-08-20T134736.976](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/08/Screenshot-2021-08-20T134736.976.png)

### Multi-location Inventory Sync

In case you are using the [Multi-location Inventory feature app](https://webkul.com/blog/shopify-multivendor-marketplace-multi-location-inventory/) along with this connector add-on:-

You can provide an option to let sellers choose the location of which they want to sync the product quantity with your Shopify store.

There will be a list of the seller's Shopify store locations (seller's Shopify-admin) once you enable the tab.  
For this, Go to Multi-vendor **Seller Panel**\>>**Configuration**\>>**Seller Sync App Configuration**.

Now, sellers can enable the location on the seller panel and sync the product's quantity with the admin's marketplace.

![Seller end](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/10/screenshot-vineet-sinha-sh.webkul.com-2021.10.08-16_07_56-1200x590.png)

### Inventory Policy Sync

With this option, you can now verify the "Continue Selling Out of Stock" option on Shopify and allow customers to purchase the items accordingly.

![Screenshot-2021-10-08T180822.481](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/10/Screenshot-2021-10-08T180822.481-1200x472.png)

Now, to enable this tab, go to admin panel>>Configuration>>**Seller Supported App Configuration**.

![Screenshot-2021-10-08T175408.237-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/10/Screenshot-2021-10-08T175408.237-1-1200x532.png)

That's all about the this feature app.
