---
title: SQUAREUP CONNECTOR
description: SQUAREUP CONNECTOR
date: 2025-07-20
author: Chirag Tyagi
---
Square up is now integrated with the [Multi-vendor Marketplace](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) app for Shopify. This integration will help your sellers to connect their Square POS to the admin's Shopify store.

Thus, the marketplace sellers can manage products, inventory, pricing at a single location.

> [**Squareup**](https://squareup.com/us/en) is mainly a Free mobile POS app developed for Android applications. It offers the simplest way to accept credit card payment from customers.
> 
> Thus, the _sellers who are selling products using Square POS can connect their stores to the admin's Shopify store_.

With the Squareup connector, sellers selling on Square **POS** can auto-sync their products with the admin's marketplace.

Also, the sellers can import their products from Square POS to the admin's marketplace.

Accordingly, inventory will be managed at both the ends once an order is created/updated for the seller’s product at Square POS or at Shopify.

You can enable the **Squareup connector** from the “**Feature App**” section of the app. Then, approve the additional charge of $25 USD/month over and above your current Multi-vendor app plan.

Let's explore the connector in detail.

### Features

*   Sellers can connect their Square POS to the admin's Shopify store.
*   **Auto-Sync** Option:- To sync all the newly added products of the seller's Squareup store will be auto-synced with the admin's Shopify store.
*   Option to re-sync the products from the product listing section.
*   Allow sellers to **create price rules**:- Based on the product price rules created by the seller, the product price of Square up POS will be calculated at the merchant’s store.
*   Marketplace sellers can import their Square POS products to the admin's store.
*   The sellers can now have multiple variant options in a product synced from Squareup into the multi-vendor marketplace app.

### How to enable this feature app?

Go to the Feature app section and enable the Squareup connector feature app.

![Dashboard](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Home-Admin-1.png)

Visiting the feature App section, search for the **Squareup Connector** & **enable** the feature app.

![Squareup](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-55.png)

Click the **Enable** button.

This way, you can install the Squareup connector in the app.

### Squareup Connector Configuration: Admin End

After enabling the Squareup feature app, a new menu appears under the **Configuration** menu i.e. **Squareup App Configuration**.

You need to configure the Squareup app details for the seller's Squareup store.

![squareup](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Dashboard-Admin-5-1200x597.png)

Visiting this section, you will get the options to enter the details of the app that you have created on Squareup for your sellers.

![square up configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Squareup-App-Configuration-Admin-1-1200x867.png)

Now, in order to let the sellers connect their Squareup stores to your Shopify store, you need to _**Create an App**_ on Squareup.

From the app, you will get the credentials that are required to configure the app settings & make things work for the sellers.

You can create an app on your own or [**request**](https://webkul.uvdesk.com/en/customer/create-ticket/) to create the app.

### How to Create an App on SquareUp?

You can follow the below-given steps to create an app on Square up:-

*   Log in to [**Squareup**](https://squareup.com/).
*   Go to the **Dashboard** and click on **+** button to add a **New Application**.

![square up portal](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Square-Developer-Portal-1200x627.png)

*   Now, **enter** the Application Name & click the **Save** button.

![Square-Developer-Portal-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Square-Developer-Portal-1-1200x627.png)

This way, you can create an application on Squareup.

![Square-Developer-Portal-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Square-Developer-Portal-2-1200x627.png)

Now, enable the **Production mode** settings and get the credentials to configure Squareup settings on the multi-vendor app.

![Square-Developer-Portal-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Square-Developer-Portal-3-1057x1024.png)

Note
----

Make sure to change the API Version suggested in the app. You need to click the **Change Version** button & select the version: **(_2019-09-25_)**

![API version](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Square-Developer-Portal-14-1200x627.png)

Clicking the version, you can select the version **(_2019-09-25_)** from the drop-down menu.

![change API](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot2-1200x590.png)

This way, you can end up creating an app on Squareup. Now, you need the app credentials to configure the square up settings for your sellers on the multivendor app.

### How to Get the Squareup App Credentials?

After creating the Squareup app, all the credentials will be available to configure the settings. Let's see how to get each of them.

1.  **Application ID**  
    Go to Dashboard>>Visit Squareup App>>View Details>>**Credentials.**

![production app ID](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Square-Developer-Portal-4-1200x485.png)

2\. **Application Secret**  
Go to Developer >>Visit Squareup App>>View Details>>**OAuth**.

![Square-Developer-Portal-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Square-Developer-Portal-6-1200x627.png)

3\. **Webhook Signature Key**  
To get the Signature Key, first, you need to create a webhook. Let's see how to do that.

### Why Create Webhook?

You need to register a webhook to **get triggered by specific events that occur on the seller's Square POS**.

APIs require calls at regular time intervals in order to detect changes in data.

Thus, **webhook replaces these API calls & provides instant, real-time notification updates on specific events that** occur at the seller end (on Square POS).

For more details, [**Click here**](https://developer.squareup.com/docs/webhooks-api/what-it-does)

So, let's see how to create a webhook.

### How to Create Webhook?

Creating a webhook will provide you the signature key to configure the Squareup app details for sellers in the Multi-vendor App. To get the hit, perform the below-given steps & add a webhook:-

*   Log in to **Squareup**.
*   Visit the **Squareup Dashboard**.
*   Go to **Apps**.
*   If you have created an app, go to **My Apps**.
*   Go to **Developer Dashboard**.
*   Click **View Details** of the app you have created.
*   You will be redirected to the Credentials section from where you need to visit the **Webhook** section.
*   **Enable** Webhook.

![webhook](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Square-Developer-Portal-5-1200x597.png)

*   Now, proceed to **Connect v2 Webhooks**.
*   Click the **Add Endpoint**.
*   Here, You need to enter the Webhook **name**, Webhook **Listener URL** (provided in the app), set the **API version (_2019-09-25_)**.
*   Select the two events:-  
    _catalog.version.updated_  
    _inventory.count.updated_
*   **Save**.

![add endpoint](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Square-Developer-Portal-6-1200x597.png)

*   This way, you can end up creating a Webhook. Now, click the **Save** button to save the created Webhook.

![connect v2](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Square-Developer-Portal-7-1200x627.png)

Thereafter, you will get the **Webhook Signature Key**, required to configure the Squareup details for sellers in the multi-vendor app.

Click the name of the created Webhook & get the signature key from there.

![webhook key](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Square-Developer-Portal-10-1200x627.png)

Get the **Webhook Signature Key** from here.

![signature key](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Square-Developer-Portal-11-1200x627.png)

With these details, you can configure the Squareup settings in the app and allow sellers to connect their Squareup shop with the admin's Shopify store.

Details Saved Successfully:-

![squareup details](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Squareup-App-Configuration-Admin-1-1200x627.png)

Now, let's proceed to check the functionalities on the Seller end.

### Squareup Configuration: Seller End

As soon as the admin enables the Squareup feature, a new sub-menu gets added to the **Configuration** menu of the app i.e. **Squareup Configuration**.

![seller end](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace.png)

Visting the **Squareup Configuration** menu, firstly, the seller needs to install the Squareup App (that is already developed at the time of integration of Squareup with the Multi-vendor Marketplace app).

Seller will click the **Download Shopify-Squareup App**. This will redirect the seller to the [login page of the Squareup](https://squareup.com/login).

![download app](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Squareup-Details-Seller-%E2%80%A2-Multivendor-MarketPlace.png)

Clicking the above button, the seller will be asked to log in to the Squareup store.

If already logged in, subsequently, the seller will be redirected to the Squareup permission page. The seller needs to allow access.

![sign up](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-48.png)

Now, the seller will log in to his/her Squareup store and allow access.

![permission](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-by-Lightshot-1-1200x627.png)

![Allow](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-by-Lightshot-1-1-1200x408.png)

Coming back to the seller panel, the seller will configure the settings such as enable the **auto-sync option**, change **weight unit**, **map collections**, etc.

Auto-sync New Products
----------------------

The sellers can enable this option to auto-sync the newly added products to the admin's Shopify store.

Moreover, the seller will click the **import products** button to import previously added Squareup store products to the admin's Shopify store.

![configuration details](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Squareup-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1-2.png)

### Map Collection

Before the product import, the seller needs to map the admin's store collection with the collections of his/her Squareup store.

**Note**:- Make sure that the admin has enabled the “**Restrict Collection**” tab from the multi-vendor admin panel.

For this, the seller will visit the **Map Collection** section and then, select the admin's collection to map with his/her own Squareup store's collection.

![Collection mapping ](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot-50-1.png)

Seller will choose the admin's store collection & map it with Squareup store's collection.

![Map Collection](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Map-Collections-%E2%80%A2-Multivendor-MarketPlace.png)

Finally, all the mapped collections will be listed like this:-

![collection](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Squareup-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-3-1200x756-png-1200%C3%97756-.png)

This way, sellers can map collection.

### Import Products

After all these settings, the seller will proceed to import products from his/her Squareup store to the admin's Shopify store.

Clicking the **Import Product** button, the seller will enter the **comma-separated product IDs** (that the seller wants to import).

_**Please note: You can only import**_ **"simple"** _**and "**_**variable**" _**products.**_

![import](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Import-Product-From-Squareup-Seller-%E2%80%A2-Multivendor-MarketPlace.png)

This way, the seller can import Squareup products to the admin's Shopify store.

Sync with Seller's Store
------------------------

In case the products are not synced once you import them, you can visit the seller listing section & sync products with the seller's store.

Products>>>**Product Listing**\>>>**Action** menu>>>Click "**Sync with seller store**" button.

![sync with seller's store](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Product-Admin-2.png)

After that, all the imported products will be listed in the "**Approval Pending state**". Thus, the admin needs to approve them from the product listing section of the app.

![enable sync ](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Product-Admin-1.png)

### Create Price Rule

Let the sellers create price rules to manage the product price of the seller's Square up POS to the merchant’s store.

![configure](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Dashboard-Seller-%E2%80%A2-Multivendor-MarketPlace-2-1200x627.png)

Sellers will have a new menu named **Connector Price Rule** in the configuration menu of the app.

From here, the seller can create price rules based on which the seller’s product price will be calculated on the merchant’s store. 

![square up](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Screenshot5-1200x454.png)

Clicking the **Connector Price Rule**, afterward, the seller needs to enable “Price Rule” status and select the options as increase/decrease price,

the price will be changed by a fixed amount or a percentage amount, enter the amount that needs to be changed.

![price rule](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/Price-Rule-%E2%80%A2-Multivendor-MarketPlace-1121x1024.png)

Enable the checkbox to update the already synced product’s price at the merchant’s store as per the price rule created.

As shown above, through this way, sellers can create price rules from their respective seller panels based on which product price of the seller’s POS will be calculated at the merchant’s store.

### Sync Orders

Orders can now be created in Seller’s Squareup through the Squareup Connector feature app.

You can choose if you want to create an order on the seller’s Squareup Store or not. For this, you need to visit the admin panel>>Connector Configuration>>Enable **Sync Order** tab.

![sync orders](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/11/screenshot_1715166796720-1200x606.webp)

As soon as you enable this tab, you will get the option to choose if you want to sync customer data related to the order or not.

Also, you can restock inventory in the seller's store when an order is refunded on the admin store.

![sync](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/09/squareup-1200x568.webp)

This way, you can sync the customer details related to the order with the seller’s store and also restock the inventory when the order is refunded on the admin store.


Demo Details
------------

Follow the below link to use the demo of Multi-vendor Marketplace app:

[https://multivendor-marketplace-5.myshopify.com/](https://multivendor-marketplace-5.myshopify.com/)