---
title: Route Insurance
description: Route Insurance
date: 2025-07-25
author: Chirag Tyagi
---


**[Route](https://route.com/)**:- An android/iOS app that allows to virtually track the orders i.e. packages to be delivered. It enables package protection and one-click refunds and reorders.

Using the [Multi-vendor Marketplace app](https://marketplace-doc.webkul.com/classic/Introduction/) for Shopify, you can allow customers to ensure their orders with **Routes**.

In Short, you can allow customers to enable insurance on product purchases and virtually track the packages to be shipped.

With the "**Route Insurance**" feature app, you can provide an "Insurance" option to the customers on the cart page.

Enabling the option, the customers need to pay the insurance amount configured via Route.

This feature app comes with the pricing of **$7 USD/month** in addition to your current Multi-vendor plan.

**MAKE A NOTE:-**

*   Sellers won't be able to select the "Insurance" option on their products individually, but the option will be enabled for all the products.
*   "Orders with Route Insurance" will be created as draft orders in the app. So, if you charge insurance amount on order, discount coupons won't be applicable to the checkout page.

### How to Route Feature App?

To enable this feature app, first visit the Feature Apps section. Now, search for the "**Route Insurance**".

![Dashboard-Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Dashboard-Admin-2-1200x597.png)

Now, activate the Route Insurance feature app.

![Screenshot-2020-10-07T105719.027](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Screenshot-2020-10-07T105719.027.png)

Click the “**Enable**” button.

#### **ADMIN END CONFIGURATION**

As soon as you activate this feature app, you need to visit the admin panel Configuration>>**Route Insurance Configuration**\>>Enter Details>>Save.

![Home-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Home-Admin-1-1200x597.png)

Enter the Route Insurance Details.

![Add-Route-Configuration-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Add-Route-Configuration-Admin-1200x799.png)

### How to Get Route Insurance Details?

To use this feature app, you need to have an account on [Route](https://dashboard.route.com/). Now, to get the details, you need to follow the below steps:-

*   Firstly, login to Route: [https://dashboard.route.com/login](https://dashboard.route.com/login)

![Route](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Route-1200x597.png)

*   Visiting the Route Dashboard, go to the **Admin** menu.
*   In the Installation Details section, get the Public Token and Secret Token.

![Route-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Route-1-1200x627.png)

Get the details and configure in the app.

Moreover, to make it work, You need to visit the Configuration>>**Order Configuration** menu and enable the "Mandate Order Tranking Number" tab.

![Configuration-Admin-13](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Configuration-Admin-13-1200x627.png)

Now, to show the "Insurance" option on the cart page, you need to add the codes provided in the app.

### Insurance Option on Cart Page

To show the "Insurance" option on the cart page, you need to get the codes provided in Configuration>>Instruction for Marketplace menu and add the codes to the store theme liquid file.

To Display Insurance Model on Cart Page, copy the below code as first line in **cart.liquid:**\-
```liquid
    <header> <script src="https://cdn.routeapp.io/route-widget/stable/route-widget-stable.min.js"></script> </header>
```
Copy following code into **cart.liquid (or cart-template.liquid,** if exist) template above the checkout button:-
```liquid
    <div id="RouteWidget"></div>
```
To Display Insurance Model at Customers/Order Page, copy the following code as first-line in **customers/order.liquid.**
```liquid
    <header><script src="https://route-cdn.s3.amazonaws.com/route-widget-shopify/route-widget-static.min.js"></script></header>
```
Copy following code into **customers/order.liquid** template, After your order details tabel code:
```liquid
    <div class="route-div"></div>
```
Once done, the "Insurance" option will be visible to the customers on the cart page.

How does it work for Customers?
-------------------------------

As soon as customers will choose the "Insurance" option (a toggle checker) on the cart page, they will be able to view the price and then, will proceed for checkout.

![Your-Shopping-Cart-–-JohnDoe2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Your-Shopping-Cart-%E2%80%93-JohnDoe2-1200x597.png)

Now, once the customer enables the toggle checker on the cart page, a custom product gets added as insurance with some amount added to the total order amount.

Let say, Insurance amount is $5 then, a custom product with $5 gets added to the cart.

You will be able to view that custom product on the order details page in their backend and can easily recognize the insurance amount.

![Information-JohnDoe2-Checkout](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/Information-JohnDoe2-Checkout-1200x597.png)

This is how the Route Insurance Feature App works.

Demo Details
------------

You can check the demo of the Multivendor Marketplace App for Shopify: [https://multivendor-marketplace-5.myshopify.com/pages/seller-profile](https://multivendor-marketplace-5.myshopify.com/pages/seller-profile)

