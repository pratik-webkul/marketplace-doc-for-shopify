---
title: SHOPIFY EBAY CONNECTOR
description: SHOPIFY EBAY CONNECTOR
date: 2025-07-25
author: Chirag Tyagi
---
The Shopify eBay Connector allows sellers to integrate their eBay products into your marketplace, simplifying inventory management across both platforms.

You're likely familiar with [eBay](https://www.ebay.com/), a prominent global e-commerce platform where individuals and businesses trade a wide range of goods and services.

If your sellers already have stores on eBay and wish to integrate their eBay products into your marketplace, the **Shopify eBay Connector** feature app is the solution.

Admin can activate this feature by approving an additional charge of up to $200 per month depending on their seller count.

This enables sellers to seamlessly import their eBay store products into the Multivendor Marketplace, ensuring streamlined inventory management across both platforms.

**Note:** Currently, this app supports one-way sync, which means that any product updates made on eBay will reflect in your Shopify store,

but changes made in your Shopify store will not update the product details on eBay.

However, inventory updates will be synchronized on eBay when an order is placed on the multivendor marketplace.

**Note: Previously, we did not manage the weight on eBay, but now we sync the weight** **that is set on the seller's eBay store.**

Let's delve into the detailed features.

Features of Shopify eBay connector
----------------------------------

1.  **Real-time Inventory Sync:** Ensure your product inventory is always up-to-date between your eBay store and your Shopify marketplace.
2.  **Custom Pricing Rules:** Set different pricing rules for products imported from eBay to match your marketplace strategy.

Admin End
---------

To enable the Shopify eBay Connector feature app, admins can follow these steps within the Multivendor app:

![feature app Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/featureapp-1200x526.webp)

![shopify ebay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/shopifyebay-1200x524.webp)

1.  Navigate to the "**Feature Apps**" section.
2.  Search for "**Shopify-Ebay Connector** app."
3.  Click on the "**Enable**" button to activate the feature.
4.  Now, you will need to choose the plan that suits your requirements.
5.  Tap "**Agree**" to proceed and approve the additional charge.
6.  Click on "**Approve** **Charge**" to finalize the installation.

Admin end Configuration
-----------------------

Now let's look at the admin configuration section:

To configure the Shopify eBay Connector feature app on the admin end:

![connector configuration Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/1connectorconfig-1200x532.webp)

1.  Go to your Admin Dashboard.
2.  Navigate to Configuration.
3.  Select Connector Configuration.
4.  In the dropdown menu for the connector feature app, choose "Shopify eBay Connector."

![connector feature app Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/2connectoerfeatureapps-1200x530.webp)

From here, you can enable or disable various tabs and settings within this section as needed. This allows you to customize and manage settings according to your preferences.

You can see the "Allow Seller to Choose Environment" settings.

![allow seller to choose environment Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/3allowsellertochoosenvi-1200x530.webp)

Admins can enable this option to allow sellers to select between the testing environment and the production environment.

This gives sellers the flexibility to choose the appropriate environment for their needs.

Charge Tax On Products
----------------------

In the Connector Configuration, you have the option to decide how taxes are applied to products synced from the seller’s eBay store.

You can choose to:

*   Charge Tax on Products.
*   Charge Tax as on Seller's Store.
*   Never Charge Tax on Products.

![charge tax on product Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/06/chargetaxonproduct-1200x551.webp)

Once you've made your selection, remember to click on "Save Changes."

That concludes the configuration from the admin end.

Collection Mapping Settings
---------------------------

In the admin panel, there is an additional setting available by navigating to Configuration > Restriction Configuration.

![restriction configuration Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/5restrictionconfiguration-1200x531.webp)

![restrict collection Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/6restrictcollection-1200x531.webp)

1.  Enable the "Restrict Collection Settings" option.
2.  Click on "Save Changes."

By enabling this option, sellers can map collections with their eBay store directly from their panel.

Next, let's explore how sellers can manage their configurations to connect their eBay store with the admin’s marketplace.

Seller end Configuration
------------------------

Once the admin installs the Shopify-Ebay Connector feature app within the Multivendor Marketplace App, sellers can access a new sub-menu in their Configuration panel.

Sellers can navigate this by following Configuration > eBay Configuration

![ebay configuration Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/4sellerebayconfiguration-1200x531.webp)

To set up the "Shopify eBay Connector App Configuration," sellers need to enter the following details:

*   eBay User Name
*   App Client ID
*   Dev ID
*   App Client Secret
*   eBay Redirect URL Name
*   Seller Marketplace
*   Select Credential Type
*   Weight unit of your eBay Store
*   Currency

![ebay store details Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/ebayconfigdetails-1200x530.webp)

**Auto-sync Product Configuration**
-----------------------------------

Auto Sync product configuration makes managing your products easier by automatically adding any new item listed on eBay to your Shopify store.

When a seller adds a product to their connected eBay account, it will be auto-imported on your marketplace

This feature keeps your product listings consistent across both platforms and saves time by removing the need for manual import.

Navigate to **Seller panel > Configuration > eBay Configuration**, enable the **Auto Sync new products** option, and then click on the **‘Save’** button.

![auto sync new products](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/autosyncebayconnector-1200x526.webp)

Now, upon clicking the "Save" button, the seller will be redirected to the eBay store login page, where they need to sign in using their credentials.

Once signed in, a pop-up notification will appear stating, "App Details Updated Successfully."

![success pop up Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/7successpopup-1200x538.webp)

How to get eBay credentials?
----------------------------

To get your eBay store details, follow these steps:  
  
**Login to eBay Developer Account**

First, log in to your eBay developer account via this link: [eBay Developer Sign-In](https://developer.ebay.com/signin?return_to=%2Fsandbox%2Fregister)

**Navigate to the Application Page**

After logging in, you will be redirected to the "Application Page."

Enter a title in the "Enter Application Title" box.

![app keys](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/08/applicationpage-1200x479.webp)

**Sandbox and Production Sections**

![app title](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/08/apptitle-1200x432.webp)

Upon entering the title, you will see two sections: "Sandbox" and "Production."

  
  
**Create a Keyset**

In the "Production" section, click on the clickable text "Create a Keyset."

A new section will open where you can see your App Client ID, Dev ID, and Secret ID.

**Please Note: Before clicking on “Create Keyset,” please make sure to fill in the details under your profile contact.**

If you encounter this error when clicking on "Create Keyset" in production mode:

![error](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/08/productionerror.webp)

You will be redirected to this page upon clicking the link:

![production env](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/08/redirectedpg-1200x680.webp)

Now here,

i) Select the "Production" environment.

ii) In the "Event Notification Delivery Method," choose "Marketplace Account Deletion."

iii) Enable the "Exempted from Marketplace Account Deletion" option.

Now click on confirm

![popup](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/08/popup.webp)

**Generate User Token**

Under the Client ID, click on the "User Token" link. (Refer to the screenshot below)

![user tokens](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/08/usertoken.webp)

Scroll down and click on "Add eBay Redirect URL."

![add url](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/08/addurl-1200x628.webp)

**Configure Redirect URL**

A new section will appear.

Select the "OAuth" radio button.

Enter a "Display Title of your choice.

In the "Auth Accepted URL" field, enter the URL from the eBay configuration page from the seller side.

In the "Auth Declined URL" field, enter the URL from the eBay configuration page.

Click on "Save."

**Final Step**

Copy the Client ID, Dev ID, and Secret ID and paste them on the eBay configuration page.

Collection Mapping
------------------

Now, the seller can map collections by navigating to the Collection Mapping section.

![map collection Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/8collectionmapping-1200x518.webp)

![map collection details Shopify eBay connector](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/9mapcollectionfieldsnames-1200x528.webp)

To map their collection:

1.  Click on "Map Collection."
2.  Select the "Collection Name of Merchant Store."
3.  In the "Collection Name of Your Store" box, enter the collection name created on the eBay store.
4.  Click on "Save."

In the Collection Mapping section, you will see a list of all the mapped collections.

![delete mapping](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/10deletemapping-1200x527.webp)

To manage these mappings, you can disable or delete any mapping by clicking on the three dots under the "Action" column next to the particular mapped collection.

Import Products
---------------

To import products from eBay store to Shopify, sellers can follow these steps:

1.  Go to the Seller Panel.
2.  Navigate to Configuration > eBay Configuration.
3.  Click on "Import Products."

![import products](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/11importproducts-1200x529.webp)

![import products methods](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/12methodstoimportproduct-1200x524.webp)

Sellers have two methods to import products:

**Method 1: Select Duration**

1.  Use this option to import products created within a specific date range.
2.  Enter the "From" date and "To" date.
3.  Click on "Import Products."
4.  A pop-up notification will appear, confirming that the products have been imported successfully.  
    

**Method 2: Using eBay Item Number**

1.  Use this option to import specific products by entering their eBay item number.
2.  Enter the eBay item number.
3.  Click on "Import Product."

After the products are imported, the seller can view them by navigating to the Products > Product Listing.

![product listing](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/13ebayproductimported-1200x528.webp)

![product edit](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/14editebayproduct-1200x526.webp)

To edit product details, sellers need to follow these steps:

1.  Go to the Seller Panel.
2.  Navigate to Products > Product Listing.
3.  Click on the three dots "…" under the Action column next to the product you want to edit.
4.  Click on "Edit."
5.  Make the necessary changes to the product details.
6.  Click on "Save."

That’s all about the Shopify eBay Connector Feature App, which allows admins to easily enable their sellers to connect their eBay stores with the admin’s Shopify store.
