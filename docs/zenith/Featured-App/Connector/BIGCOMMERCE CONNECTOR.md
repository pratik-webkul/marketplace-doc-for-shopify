---
title: BIGCOMMERCE CONNECTOR
description: BIGCOMMERCE CONNECTOR
date: 2025-07-25
author: Chirag Tyagi
---
[BigCommerce](https://www.bigcommerce.com/), an eCommerce platform that provides software as a service to retailers is now integrated with the Multi-vendor Marketplace app for Shopify.

This integration will help the marketplace sellers to connect their BigCommerce stores with the admin’s Shopify store.

Using the connector, sellers selling on BigCommerce can auto-sync their products with the admin’s marketplace. Also, the sellers can import their products from BigCommerce to Shopify.

Accordingly, inventory will be managed at both ends once an order is created/updated for the seller’s product at BigCommerce or at Shopify.

You can enable the **BigCommerce Connector** from the “**Feature App**” section of the app.

Check the below video of the BigCommerce Connector feature app:

BmnShr6fcq0

Let’s dig deeper to know more about the BigCommerce Connector.

### How to Enable?

Go to the **Feature App** section and enable the **BigCommerce Connector** feature app.

![screenshot-sp-seller.webkul.com-2021.09.27-16_13_42-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/screenshot-sp-seller.webkul.com-2021.09.27-16_13_42-1-1200x590.png)

Then, approve the additional charge of $25 USD/month over and above your current Multi-vendor app plan.

### Admin Panel Configuration

To configure the settings, visit the admin panel **Configurations**\>>**Connector Configuration**\>>select the connector.

![connector configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/Dashboard-Admin-1-1200x556.png)

From here, you can configure the settings.

![admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/biggcommerce-571x1024.webp)

**Note:-** Once the order is created at admin shopify store for connector product then same order will be created on seller's bigcommerce store also.

Even, the admin will get a reference order number like below that will be shown order section of seller's Bigcommerce store.

![screenshot_from_2022_12_27_12_51_33-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_from_2022_12_27_12_51_33-2-1200x595.png)

Product PreOrder Configuration
------------------------------

We’re excited to introduce a new feature in the **BigCommerce Connector** for the **Shopify Multivendor Marketplace app by Webkul**—**Preorder Data Syncing**.

This feature allows merchants to sync product preorder data between BigCommerce and Shopify seamlessly.

![product pre order admin panel ](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/pre-order-1200x895.webp)

Once enabled, the Multivendor Marketplace App saves the preorder data and automatically syncs it through a metafield on the Shopify admin side.

![perorder admin side details](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/preorder-admin-side-1200x414.webp)

The storefront then displays the same preorder details to customers, ensuring they have accurate information about product availability.

To enable this feature, admins need to navigate to the **BigCommerce Connector** configuration section in the app’s admin panel.

There, users can enable the Preorder Data Sync option to begin syncing preorder details for products, ensuring seamless data integration.

To Display this information on your store you need to add the code for this on your store in the liquid file .You will get this code in the **Instruction for Marketplace Navigation** .

![bigcomm-storefront](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/store-front-1200x895.webp)

Copy following code into **product.json >> sections/main-product.liquid** (or product-template, if exist).

![BigCommerce-Preorder Data Information](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/preorder-code-edited-scaled.webp)

### Seller Panel Configuration

Now, the seller needs to manage the configuration from the Multi-vendor seller panel. Go to seller panel **Configuration**\>>**BigCommerce Configuration**.

![BigCommerce configure](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x556.png)

The seller will configure the BigCommerce details such as store hash, unit weight, store currency, dimension unit, access token.

Moreover, the seller can choose if he/she wants to auto-sync newly added products or not.

![configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/BigCommerce-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x956.png)

The sellers will get all the details from their BigCommerce stores by creating API accounts.

### How To Create an API Account?

To create an API account, the seller needs to login to his/her BigCommerce store.

Now, go to **Advanced Settings**.

![advanced settings](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/DEMO-STORE-BigCommerce-Control-Panel-1200x549.png)

Scroll down to get **API Accounts** menu. Click on it and proceed to create an API account.

![API account](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/DEMO-STORE-BigCommerce-Control-Panel-1-1200x499.png)

Enter the following details:-

![BigCommerce ](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/10/Screenshot-2021-10-05T180908.149.png)

![BigCommerce ](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/10/Screenshot-2021-10-05T181032.376.png)

![BigCommerce ](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/10/Screenshot-2021-10-05T181046.674.png)

### Seller Panel Configuration

As soon as the admin enables the BigCommerce feature, a new sub-menu gets added to the **Configuration** menu of the app i.e. **BigCommerce Configuration**.

![bigcommerce configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-3-1200x549.png)

Visiting the BigCommerce Connector section, the seller needs to enter the details such as store hash, weight unit, currency, dimension unit and access token.

Next in this guide, we will see how to get access token.

![BigCommerce](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/BigCommerce-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1-1200x949.png)

### How to Get Access Token?

While creating an API account, enter the details and click the Save button. A pop-up appears from where you will get the access token.

![Get access token](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/DEMO-STORE-BigCommerce-Control-Panel-3-1200x549.png)

### Seller Importing Products - BigCommerce to Shopify

After all these settings, the seller will proceed to import products from his/her BigCommerce store to the admin’s Shopify store.

Clicking the **Import Product** button, the seller will have two methods to import products.

**Method 1**: the seller will enter the **comma-separated product IDs** (that the seller wants to import).  
**Method 2:** Select a range and import products.

![Import products](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/Import-Product-From-BigComerce-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x680.png)

### Auto Approve Imported Products

You can enable Auto Approve from the Admin panel >> Configuration >> Product configuration so that the Admin would automatically approve all these imported products.  

### Register Webhook

The seller can register or unregister BigCommerce webhooks from the seller panel. For this, login to seller panel>>go to BigCommerce Configuration>>BigCommerce Webhooks.

![register webhook](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/Screenshot-32-1200x544.png)

### Price Rule

Let the sellers create price rules to manage the product price of the seller’s Square up POS to the merchant’s store.

![connector price rule](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x627.png)

Sellers will have a new menu named **Connector Price Rule** in the configuration menu of the app.

From here, the seller can create price rules based on which the seller’s product price will be calculated on the merchant’s store. 

Now, the seller needs to enable “Price Rule” status and select the options as increase/decrease price, the price will be changed by a fixed amount or a percentage amount,

enter the amount that needs to be changed.

![price rule](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/09/Price-Rule-Seller-%E2%80%A2-Multivendor-MarketPlace-1196x1024.png)

Now, enable the checkbox to update sync product’s price at the merchant’s store as per the price rule created.

### Sync Barcode

Now the admin can allow their sellers to sync the product's Barcodes (UPC, MPN, GTIN, etc) from their Bigcommerce store to the Admin's Shopify store.

To do this, first Admin needs to enable this Configuration from Admin Panel>> Configuration>> Connector Configuration>>Choose Bigcommerce Connector>>

Enable Product Barcode Option>>Save Changes.

![Admin-panel-connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/02/Admin-panel-connector-1200x505.jpeg)

After this is enabled, the seller can select the Barcode( MPN, GTIN, UPC, etc)

that he wants to sync with the Barcode field in Admin Shopify by navigating to Seller Panel>> BigCommerce Configuration>> Select Barcode>>Save.

![bigcom-mpn-seller-side](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/02/bigcom-mpn-seller-side-1200x581.jpeg)
Demo Details
------------

Follow the below link to use the demo of Multi-vendor Marketplace app: [https://multivendor-marketplace-5.myshopify.com/](https://multivendor-marketplace-5.myshopify.com/)

Thanks for reading !!