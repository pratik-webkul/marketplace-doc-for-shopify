---
title: Paypal
description: Paypal Configuration
date: 2025-06-27
author: Chirag Tyagi
---


Want to auto-pay your Sellers once they mark the order as delivered/fulfilled?  
For this, configure **PayPal Payout Payment** in your [Multivendor Marketplace for Shopify](https://marketplace-doc.webkul.com/classic/Introduction/).

**Purpose of this feature**:  
This feature lets your sellers automatically receive their total earnings once they mark the order as delivered/fulfilled.

**Note**: Paypal Payout is now compatible with **discounted orders** which means auto-payment to sellers is possible for discounted orders.

### How to configure the PayPal Payout feature?

To configure this feature, the Admin needs to follow the steps written below:

*   Go to Multi vendor Marketplace **Admin Panel**
*   Click on the **Payment** menu & select the **Seller** **Payment Configuration** from the drop-down menus

![dashboard](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal11.webp)

Note: Whenever you update the configuration, the previous orders will not remain eligible for payout anymore.

For example, if we make changes to the PayPal details, only the upcoming orders will be eligible for payout and not the previous ones.

*   From the Seller Payment Configuration section, mark the PayPal option enable and then open payment configuration.

![paypal](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal2.webp)

*   Now, the Paypal Payout configuration page is open then, Enable "AutoPay to Seller" option as shown below:

![configuration](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal3.webp)

*   After enabling this option, you need to enter the following details:

**Pay After**: Pay to the Sellers after the order is marked as **delivered** or **Fulfilled**.  
**PayPal Client ID**: Enter your PayPal client ID  
**PayPal Secret Key**: Enter your PayPal secret key

*   Save Changes

### How to get PayPal Client ID and Secret Key?

To get your Paypal Client ID & Secret Key, you need to login to your PayPal Account by visiting the following link: [https://developer.paypal.com/docs/api/overview/#api-requests](https://developer.paypal.com/docs/api/overview/#api-requests)

![Get Started PayPal Developer](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/Get-Started-PayPal-Developer.png)

After clicking on the **Log into Dashboard** menu, you need to enter your PayPal credentials:

![Log in to your PayPal account](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/Log-in-to-your-PayPal-account.png)

Once you login to your PayPal account, you'll reach the dashboard.

Furthermore, you need to go to **My Apps & Credentials** and click on **Create App**:

![Applications PayPal Developer](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/Applications-PayPal-Developer.png)

When you'll click on the **Create App** menu, you'll land on a page where you'll need to enter the **A**pp** Name** (you can provide any random name) & enter your email ID in the **Sandbox Account** menu:

![12](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/12-6.png)

(The **Sandbox Account** email ID is for test purpose, you can input the email ID that you used to login to PayPal account or

even create a new one by going to the same link: **Dashboard** > **Accounts** > **Create Account**.)

![Sandbox accounts PayPal Developer](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/Sandbox-accounts-PayPal-Developer.png)

After creating the app, you'll be redirected to a page where you'll get your **PayPal Client ID**,

Click on the **show** menu to have your **PayPal Secret Key** & make sure to check the **Payouts** in the **App Feature Options** as shown below:

![1 (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/1-1-1.png)

Click on the **show** menu & copy your **PayPal secret key** then paste it in the Multivendor Marketplace payment configuration:

![Edit Applications PayPal Developer](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/03/Edit-Applications-PayPal-Developer.png)

**NOTE:**

If you want the details for a **live account** then please change the PayPal environment to live and follow the same steps as mentioned above.

### Pay After Refund date

There is one more scenario to the PayPal Payout configuration.

Suppose the Admin has selected the PayPal Payout autopay method to pay his Sellers after order delivery or fulfillment.

Then in case of order refunds the payment is already done to the Sellers which isn't supposed to be and hence this causes chaos in the whole process.

Considering this, we have given an option in Multi-Vendor Marketplace Seller Payment Configuration which allows you to set particular days after which you want your Sellers to receive the payment.

These days are basically the days in which your customers can refund the purchased items.

Configure the following feature by navigating through: **Multivendor Marketplace Admin Panel > Payment > Seller Payment Configuration**.

Refer to the images below:

![admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paymet4.webp)

![payment](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/payment5.webp)

![enalbe cashable](http://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal6.webp)

Here, the Admin needs to enter the days after which the payment will be done to his sellers for the order (order refund days)

And select whether you want to calculate the provided span of time from delivery date, order fulfillment date or order creation date.

Example: If you have selected delivery date & mentioned refund days (pay after days) as 30 then after 30 days of the delivery date, the Sellers will receive the payment.

**NOTE**: Refund days should be greater than -1 otherwise it will not work.

Lastly, enable the '**Allow seller to enter refund days**' if you want your sellers to add their individual refund days.

Once enabled, the sellers will be able to set the refund days by visiting **Marketplace Seller Panel > Configuration > General Configuration > Enter the day & save:**

![General-Configuration-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/General-Configuration-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

**Note:** The sellers who have not entered any refund days will by default have the refund days set by the admin.

If entered then the refund days should be greater than -1 otherwise it will not work.

Only after enabling this option, the Admin will have the 'Pay after refund date' option in PayPal Payout Configuration:

![pay after refund date](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal7.webp)

Also, the Admin won't be able to choose the 'pay after' as delivery or fulfillment because now it will work as per configured in the 'Cashable Amount for Seller' option.

### Configuration for Seller's Panel

To configure this feature, the Seller needs to follow the steps written below:

*   Go to Multi vendor Marketplace **Seller Panel**
*   Hover over the **Profile** menu & select the **Payment Details** from the drop-down menus

![Dashboard Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal8.webp)

*   On this page, the Seller needs to select the **payment method** as PayPal & needs to enter his **PayPal Email**.

![Payment Details Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal99.webp)

*   Click on **save**.

This is all you'll need to do for configuring the PayPal Payout Payment.

### Workflow

When an order gets placed, the total amount paid by the customer will go to the Admin's account.

So, whenever the Seller changes the order status to delivered/fulfilled from his end then the Seller's total earning will be received by him excluding the Admin's commission.

**Order Fulfillment Process**

When the order is placed, the Seller will have the order in the Multivendor Marketplace **Seller Panel** > **Orders** > **Order Listing** > **View**:

![Order Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal10.webp)

Further, on the redirected page, the Seller needs to click on the **Fulfill** menu:

![Order Details Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal111.webp)

A pop-up will arrive, enter the required details & click on **fulfill**:

![Order Details Seller • Multivendor MarketPlace (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal12.webp)

Now, the Seller will get auto-paid.

But if auto-pay is set for 'delivered' case by the Admin then the Seller first needs to set the order status as delivered & just after that he'll receive the payment.

Order Delivering Process

For this: **Seller Panel** > **Orders** > **Order Listing** > **View**

In the Fulfillment Details section, click on the **Enter Delivery Details** button:

![Order Details Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal13.webp)

Mark the delivery status as delivered, enter the delivery date & submit:

![Order Details Seller • Multivendor MarketPlace (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal14.webp)

### The whole auto-pay process at a glance!

Suppose, a customer placed an order and the Admin has set the PayPal Payout payment condition as 'fulfilled', i.e.,

The Seller will auto-receive the payment once he set the order status as fulfilled. Considering this scenario, let's have a look:

The Admin can view the orders in the Order Listing page of **Admin panel**:

Admin Panel > Orders > Order listing:

![Orders Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal15.webp)

Similarly, the Seller can view the orders in the Order Listing page of **Seller Panel:**

Seller Panel > Orders > Order Listing:

![Order Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paypal16.webp)

Until the order is **fulfilled** by the Seller, the Seller Payment will remain due at Admin end.

Admin end > Payment > Seller Payments:

![Manage Seller Payment Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/paymentdueatadminend.webp)
Also, the Seller will not receive any payment information in the 'Payment Received' page at Seller end (Seller end > Orders > Payment Received).

Once, the order is fulfilled by the Seller & the order status changes from Unfulfilled to Fulfilled at both, Admin & Seller end:

Seller end > Orders > Order Listing:

![Order Seller • Multivendor MarketPlace (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/orderfulfilled.webp)

Now, as soon as the order is fulfilled by the Seller, the total due amount at Admin end will become zero.

And payment will be received by the Seller which can be viewed in the 'Payment Received' page at Seller end.

Admin end > Payment > Seller Payments:

![Manage Seller Payment Admin (1)](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/dueamountzero.webp)

Moreover, the Seller will receive the payment and this info can be viewed on the 'Payment Received' page of Seller panel:

Seller end > Orders > Payment Received:

![Payment Receive Seller • Multivendor MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/04/Payment-Receive-Seller-•-Multivendor-MarketPlace.png)

Note: PayPal Payout also works for batch payments & orders with multiple seller products. In this case, the Seller earning will go to respective Seller accounts.

### Schedule Payout.

We are here with a new feature for your Paypal Payouts i.e, “Schedule payout”. This feature enables you to schedule all your payouts to happen at a scheuled time i.e, Daily, Monthly Or Weekly.

All eligible payouts will be triggered on your scheduled day, according to your PayPal payout settings, instead of being triggered instantly.

For example, PayPal setup is to trigger the payment when the order is fulfilled, and you have scheduled the payouts weekly for Monday.

Now, PayPal will pay out all the eligible payouts (fulfilled orders) to the sellers on Monday

Let’s dive into the settings part:

![This image show the direction to enable the "schedule payout" setting in Multi-vendor Marketplace app for Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/sellerpaymentconfig.webp)

Enable this to access this feature:

![This images show how to access the "schedule payout" feature in Multi-vendor marketplace app.](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/autopayoff.webp)

Once you enable this you can select the Sum of all eligible payments.  
NOTE: All the eligible orders will be paid out in one transaction on the scheduled day.

![This image shows settings required for "schedule payout" in paypal payout setting in Multi-vendor Marketplace app by Webkul.](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/autopayon.webp)

You can now schedule your payouts on these time frames as per your need:

*   Daily
*   Weekly
*   Monthly

![This image describe the daily, weekly and monthly payout settings in multi-vendor marketplace for Shopify.](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/autopayperiod.webp)

Now, when you use the 'schedule payout' feature, the system will trigger the sum of all eligible payouts in one transaction. Here's how you can see all the orders associated with a transaction:

![This image show how you can see all your orders associated with a payout transaction in Multi-vendor marketplace app for Shopify by Webkul.](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/vieworder-1.webp)

![This images shows all the orders that are associated with a paypal payout in multi-vendor Marketplace app for Shopify](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/11/bulkorderpayoutdetail.webp)

This was all regarding the PayPal Payout Payment Method!

### Demo Details

Furthermore, check out: [https://paypal-payout.myshopify.com/pages/demo-details](https://paypal-payout.myshopify.com/pages/demo-details)
