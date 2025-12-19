---
title: Multivendor Marketplace:General configuration
description: Learn about General configuration.
date: 2025-06-25
author: Chirag Tyagi
---

In this section of the blog, you’ll find everything related to the admin account. This includes all the essential settings and information specific to the admin’s configuration and control.

From here, the admin can enter the business email, set the currency for the shop, choose the weight unit for products, and much more.

![General configuration Multivendor Marketplace for Shopify by Webkul](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/general.webp)

To know about the **Configuration Updates**, Kindly refer: [https://webkul.com/blog/configuration-updates-multi-vendor-marketplace-for-shopify/](https://webkul.com/blog/configuration-updates-multi-vendor-marketplace-for-shopify/)

<!-- ### Minimum Purchase Amount for Orders

You can now allow sellers to set a minimum purchase amount for orders. That is, using this feature, you can restrict purchases for customers if the checkout condition is not satisfied. 

The customer can proceed to checkout only when the cart amount is greater than or equal to the minimum purchase amount set by the seller.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/minimumpurchase.webp)

All you need to do is just visit the **General Configuration** section of the app and enable the tab. 

So, as soon as you enable the “**Minimum Purchase Amount**” tab, the same will reflect at the seller side in the General Configuration menu.

That is, sellers can set a minimum amount required for the customers while purchasing products.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/miniseller.webp)

Now, only when the cart amount reaches the “minimum purchase amount”, the customers can proceed for checkout.

Else, the customer can either add more products to cart or increase product quantity so that the cart amount can reach the minimum purchase amount & he can easily proceed for checkout. -->

### C2C: CONVERT YOUR CUSTOMERS TO SELLERS

Take advantage of the new functionality of converting your customers into sellers with ease.

All you need to do is add the following code into the **customer/account.liquid** theme page to display the **“Seller Portal”** button on the customer’s account page.

To paste the below given, follow the below process:

<a class="btn btn--small wk\_c2c\_marketplace" target="\_blank" href="https://sp-seller.webkul.com/?p=c2c\_marketplace\_process&customer\_id={{customer.id}}&shop={{shop.permanent\_domain}}" style="display: none;float: right;">Seller Portal</a>

*   Go To Themes.
*   Click on Customize Theme button.
*   Further, click on the Edit Code button.
*   Select **customer/account.liquid** file from the templates.
*   Paste the code.
*   Click on save.

Once it is done, you will have to enable **C2C Marketplace** button from **General Configuration** >>> Activate this feature.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/c2c.webp)

**The functionality of C2C Marketplace:-  
**Enabling this feature, you can allow the buyers to convert into the sellers.

As soon as you enable this feature, you will have a few options to choose when you want to create customers:-  
\-At the time of sign up  
\-At the time of seller approval  
\-Don’t need to create customers.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/c22c.webp)

**If the 1st option “At the time of sign up” is enabled:-**  
The sellers will be added as a customer as soon as they get registered to the marketplace.

**In case the 2nd option “At the time of seller approval” is enabled:-**

If a seller registers on the marketplace, the 'Auto Approve Seller' tab should be disabled. This action will ensure that sellers are added as customers to the admin’s Shopify store

**Don’t need to create customers.  
**Select this option if you don’t want to add the registered sellers as customers.

On the **front end**, customers will get a button name as seller portal to become a seller.

![s8](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/s8-1200x531.png)

After clicking on the seller portal button it will redirect you to the terms and conditions page set by the store owner.

![s9](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/s9.png)

If the customer tick and click on submit tab it will redirect you to the seller portal but customer click on the cancel tab it will redirect to the previous page.

![s12](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/s12-1200x551.png)

### Minimum Purchase Amount for Orders

You can now allow sellers to set a minimum purchase amount for orders. That is, using this feature, you can restrict purchases for customers if the checkout condition is not satisfied. 

The customer can proceed to checkout only when the cart amount is greater than or equal to the minimum purchase amount set by the seller.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/minimumpurchase.webp)

All you need to do is just visit the **General Configuration** section of the app and enable the tab. 

So, as soon as you enable the “**Minimum Purchase Amount**” tab, the same will reflect at the seller side in the General Configuration menu.

That is, sellers can set a minimum amount required for the customers while purchasing products.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/miniseller.webp)

Now, only when the cart amount reaches the “minimum purchase amount”, the customers can proceed for checkout.

Else, the customer can either add more products to cart or increase product quantity so that the cart amount can reach the minimum purchase amount & he can easily proceed for checkout.

#Let’s understand it with an instance 

Price of Product A: $500  
Price of Product B: $1000  
Minimum Purchase Amount: $600*

*   Customer A adds Product A to Cart worth $500– **FAILED TO CHECKOUT** (as Product Price($500) < Minimum Purchase Amount ($600)
*   Customer B adds Product B to Cart worth $1000–**CHECKOUT** **SUCCESSFULLY** (as Product Price($1000) > Minimum Purchase Amount ($600)

In order to display the checkout conditions on the Cart page, you need to add the codes to the suggested liquid files (as shown in the screenshot).

So, go to Multi-vendor Admin Panel and then

Configuration >>Instruction for Marketplace >> Scroll down to get the codes for “Seller’s Minimum Purchase Amount for Orders” >> Copy the code from there & add it to the instructed liquid files.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/minicode.webp)

Once you add the codes to their respective liquid files, this will be the visibility of the cart page (Refer below screenshots).

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/06/Your-Shopping-Cart-%E2%80%93-Demo-Shop-1135x1024.png)

In short, if the cart amount is equal or greater than the minimum purchase amount, the customer can proceed for checkout.

![MULTIVENDOR MARKETPLACE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/06/Your-Shopping-Cart-%E2%80%93-Demo-Shop-1-1135x1024.png)


### Login As Seller

You as an admin will now have the access to login seller dashboards directly from your admin panel.

Firstly, you need to enable the option from the **General Configuration** menu of the app.  
Multi-vendor admin panel>>**Configuration**\>>**General Configuration**\>>Enable Option>>**Save** Changes.

![DWQd](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/loginsellerconfig.webp)

Once enabled, visit the **Seller Listing** section and click the “**Login as Seller**” from the Action menu.

Multi-vendor Admin Panel>>**Sellers**\>>**Seller Listing**\>>Click **Login as Seller** (Action menu).

![DQDD](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/loginasseller.webp)

Clicking this button, the seller will be redirected to the respective seller panel.

Note that the sellers will be notified every time you'll log in to their account using this option.  


### Change the Copyright label of the app footer

Now, you can change the copyright label of the app footer, for this visit-

App admin panel>>Configuration>>General Configuration

![screenshot_1695927184457](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/footer.webp)

**NOTE**\- This feature is available only in the PRO plan of the app.

### Default Currency Symbol

This feature allows the admin to replace the default currency symbol displayed in the seller panel with a custom text/symbol of the admin's choice wherever the currency symbol appears.

![Currency](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/customcurrency.webp)

To configure the default currency symbol for your sellers, the Admin needs to navigate to:  
Admin Dashboard>General Configuration>Enable Custom Currency Symbol>Enter your Currency Symbol>Save changes.
### Google Translation For Admin And Seller Panel

We’ve added a new feature in our Multivendor Marketplace app that allows you to translate both the Admin and Seller panels using Google Translate.

With just one configuration, you can choose whether you want to translate only the Admin panel, only the Seller panel, or both.

![configuration-google-translate](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/google.webp)

To enable this feature, simply navigate to **Admin Panel >> Configuration >> General Configuration** and choose your preferred option.

Once enabled, a Google Translate dropdown will appear at the top-right corner of the selected panel(s).

![configuration-translation-dropdown](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/12/translate.webp)

From there, you can choose your preferred language, and the entire panel will be translated instantly.

This makes it easier for admins and sellers from different regions to use the app in their own language, offering a more user-friendly and accessible experience.

**Note** : **This feature is not compatible with the Weglot Translation featured app. If Weglot is enabled, this feature will not function as expected.**

