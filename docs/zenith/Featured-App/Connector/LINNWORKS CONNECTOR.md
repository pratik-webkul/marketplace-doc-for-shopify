---
title: LINNWORKS CONNECTOR
description: LINNWORKS CONNECTOR
date: 2025-07-25
author: Chirag Tyagi
---
Connect **[Linnworks](https://www.linnworks.com/)**, an order management software, with **[Multivendor Marketplace App](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/)** for **Shopify** using this connector add-on.

**What is Linnworks?**  
Linnworks is an eCommerce platform that helps online retailers automate key processes, reduce costs, and grow their business.

An order management system using which you can spend less time on order processing, labels, picking, packing and spreadsheets, and more time leading your business. 

**Pricing of the connector:  
**This feature will have an additional charge of **USD 25 per month** over & above your current Multivendor Marketplace plan.

### Purpose of this connector:

Here are all the things that you can allow your sellers to sync once they connect their Linnworks store with the Marketplace:

The sellers can sync and auto-update the product **name**, **inventory**, **price**, **image**, **description**. Also, all the details regarding the orders can also be synced.

Any changes done on the seller's Linnworks store can be auto-updated on the Marketplace app. The seller can also set up price rules according to his needs.

Admin can also decide how he wants to charge tax on the products.

### Admin Panel: Installation & Configuration

Visit **Multivendor Admin Panel** > **Feature Apps** \> **Enable** the add-on:

![Feature-Apps-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Feature-Apps-Admin-1200x597.png)

Once enabled, you need to configure it.

Visit **Multivendor Admin Panel** > **Configuration** > **Linnworks** **Configuration** > Enter the required details- **Application ID**, **Application Secret**, **Installation URL** & **Channel Name**:

![Linnworks-App-Configuration-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Linnworks-App-Configuration-Admin-1200x940.png)

At the end of this page, you will have the Manifest that you can download. You will need them at the time you'll create an app on Linnworks.

### How to get Application ID, Secret & Installation URL?

Visit [](https://developer.linnworks.com/)[developer.linnworks.com/](https://developer.linnworks.com/) and login:

![Sign-In-Linnworks-Developer-Portal](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Sign-In-Linnworks-Developer-Portal-1200x592.png)

Click on **New App**:

![Applications-www-linnworks-net](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Applications-www-linnworks-net-1200x597.png)

Now, enter the name of the application (it could be anything) and select **Channel Integration** as application type:

![Applications-www-linnworks-net-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Applications-www-linnworks-net-1-1200x597.png)

On the redirected page, click on **App Modules** > **Switch to text editor**:

![Edit-Application-www-linnworks-net](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Edit-Application-www-linnworks-net-1200x597.png)

Copy-paste the Manifest that you have downloaded from the Linnworks Configuration page of the Multivendor Marketplace App & save:

**NOTE**: You need to fill these empty fields in the manifest before saving it.

These fields will be found twice; once under channel integration & then under external application:  
  
"moduleName": "",  
"formattedName": "",

Also, these fields which will be found only once in the manifest:  
  
{  
"name": "ChannelName",  
"value": ""  
},  
{  
"name": "ChannelFriendlyName",  
"value": ""  
},  
{

Maximum length is 20 characters.

![Edit-Application-www-linnworks-net-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Edit-Application-www-linnworks-net-1-1200x597.png)

Under the General tab, you will have the Application ID, Secret & Installation URL:

![Edit-Application-www-linnworks-net-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Edit-Application-www-linnworks-net-2-1200x597.png)

Furthermore, add these to the Linnworks Configuration page of the Marketplace App.

### Connector Configuartion

Visit **Multivendor Admin Panel** \> **Configuration** > **Connector Configuration**:

![Connector-Configurations-Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Connector-Configurations-Admin-2-1200x848.png)

Choose whether you want to auto-update the following product details on Marketplace when the seller updates them on Linnworks:

*   Name
*   Inventory
*   Price
*   Image
*   Description

Next, choose how you want to charge tax on products:

*   Charge tax as setup on the seller's Linnwork store
*   Not to charge tax on products
*   Or, charge tax on products as per you are charging on your marketplace products

**Sync Order**: From this option, you can choose whether you want to sync order with the seller's store. Further, choose to sync the following details with the seller's store:

*   Shipping Address
*   Billing Address
*   Customer Name
*   Email ID

![Connector-Configurations-Admin-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Connector-Configurations-Admin-3-1200x898.png)

### Seller Panel: Configuration

The sellers need to visit **Multivendor Seller Panel** > **Configuration** > **Linnworks Configuration**:

Further, they need to download **Shopify Linnworks App**:

![Linnworks-Details-Seller-•-Multivendor-MarketPlace-1200x597-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/12/Linnworks-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597-1.png)

The seller will land on a page where they will need to login to their Linnworks account:

![Linnworks-net-Authorize-Application](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Linnworks-net-Authorize-Application-1200x597.png)

After login, install the app:

![Linnworks-net-Authorize-Application-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Linnworks-net-Authorize-Application-1-1200x597.png)

Once installed, you will have this success message:

![Linnworks-net-Authorize-Application-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Linnworks-net-Authorize-Application-2-1200x597.png)

### Channel Integration

Visit [linnworks.net](https://www.linnworks.net/) & go to **Settings** > **Channel Integartion**:

![Homepage-www-linnworks-net](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Homepage-www-linnworks-net-1200x597.png)

Click on **Add New**:

![Channel-Integration-www-linnworks-net](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Channel-Integration-www-linnworks-net-1200x597.png)

Search for the channel & install:

![Channel-Integration-www-linnworks-net-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Channel-Integration-www-linnworks-net-1-1200x597.png)

Enter an account name for your own reference. This should be a unique name to help you to identify the integration within the system.

![Channel-Integration-www-linnworks-net-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Channel-Integration-www-linnworks-net-3-1200x597.png)

Agree to the terms & conditions and proceed:

![Channel-Integration-www-linnworks-net-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Channel-Integration-www-linnworks-net-4-1200x597.png)

Add the account name. This should be unique.

![fdd9f25d0bc61254d21df23e9a8041c0](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/fdd9f25d0bc61254d21df23e9a8041c0-1200x603.png)

Finish:

![Channel-Integration-www-linnworks-net-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Channel-Integration-www-linnworks-net-6-1200x597.png)

Now, enable the integration:

![Channel-Integration-www-linnworks-net-7](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Channel-Integration-www-linnworks-net-7-1200x597.png)

You can edit **channel location mapping**:

![Channel-Integration-www-linnworks-net-8](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Channel-Integration-www-linnworks-net-8-1200x597.png)

Product mapping can also be done:

![Channel-Mapping-www-linnworks-net](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Channel-Mapping-www-linnworks-net-1200x597.png)

Now, visit **Multivendor Seller Panel** > **Configuration** > **Linnworks Configuration** (refresh the page manually):

![Linnworks-Details-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/12/Linnworks-Details-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x859.png)

Select the weight unit of linnworks store and the currency. Also, save the changes.

Click on **Import Products** to import products from Linnworks. Here, you can import products from Linnworks via product SKUs or a CSV file.

Enter comma-separated SKUs or CSVs to import them:

![Import-Product-From-Linnworks-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/12/Import-Product-From-Linnworks-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x893.png)

Lastly, the imported products will be listing under product listing section. They can be manually synced with the store if needed:

![Product-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Product-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

### Connector Price Rules

Visit **Multivendor Seller Panel** > **Configuration** > **Connector Price Rule** > Set up **Price Rule**:

**What is a Price Rule?  
**This is the amount of the price difference between Shopify Marketplace products with respect to Linnworks store products.

**Example**: If you set the Price Rule= 10% (decrease) then a product of $100 at Linnworks will be listed for $90 at Shopify Marketplace.

Similarly, a product of $100 at Shopify Marketplace will be listed for $110 at Linnworks.

So, you need to select the price rule to be incremented or decremented. Price change could be in percentage or a fixed amount & lastly, add the value.

If you are setting this up after syncing products then click on the checkbox so that the price of previously added products is changed automatically as per the rule set.

![Price-Rule-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Price-Rule-Seller-%E2%80%A2-Multivendor-MarketPlace-1130x1024.png)

