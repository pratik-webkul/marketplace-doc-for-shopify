---
title: Stripe
description: Stripe Configuration
date: 2025-06-27
author: Chirag Tyagi
---

[Multivendor Marketplace for Shopify](https://marketplace-doc.webkul.com/classic/Introduction/) has got the Stripe Connect Payment Gateway.

Using this, the order amount directly goes to the respective Seller & Admin account as per the share configured on the basis of commission.

If customers are applying a discount code on the orders, then all the order amount will be send to the Admin Stripe Account. And then Admin will send the seller earning to his account.

But if seller is bearing the discount, the amount will be split, i.e., the whole amount will not be receive by admin.

**NOTE**:- Both admin & seller need to have their respective Stripe accounts. Moreover, if you are using the older version of Stripe API (before 2019-08-14), make sure to upgrade it to the latest version.

To use this payment gateway, the admin needs to enable the [Stripe Connect](https://webkul.com/blog/shopify-multi-vendor-marketplace-stripe-connect-integration/) from the **feature app section**:

![Feature app SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/pay31.webp)

Multivendor Admin Panel > 'Feature Apps'

You may visit this guide for more details: [Multi-Vendor Marketplace for Shopify: Stripe Connect Integration](https://marketplace-doc.webkul.com/classic/payment/Stripe.html)

As we have introduced the **Strong Customer Authentication** for the Stripe Connect Payment Gateway.

So, in this blog, we'll only go through the steps needed to enable the following authentication.

Follow the steps below to configure the same.

Note: By default, the new users will be eligible for SCA. Also, please go through to know more about SCA regulation: [Strong Customer Authentication](https://stripe.com/docs/strong-customer-authentication)

### SCA Configuration

Configure **Checkout Payment Method** to implement new regulation called **SCA** (**Strong Customer Authentication**)

To configure this, visit Multivendor Admin Panel > Orders > Checkout Payment Method:

Here, you'll have the following configurations:

![image-8](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/image-8-1177x1024.png)

**SCA REGULATED ACCOUNT** **BUTTON**
------------------------------------

Enable this to implement the new regulation called **SCA** (Strong Customer Authentication). [Know more](https://stripe.com/docs/strong-customer-authentication)

Enabling this option will give you a few more options:

ENABLE STRIPE FOR: Stripe will work on the **checkout** page. (Merchants using the **Seller Membership feature app** can enable Stripe for **membership payments** as well.)

Admin can also Select **Both** Checkout and [Seller Membership](https://webkul.com/blog/shopify-multivendor-marketplace-seller-membership-new-theme/) for Stripe payment as shown below

![cxcx](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/01/cxcx.png)

GET CUSTOMER CARD DETAILS ON: The customer card details will validate on the **Thank You Page**.

Restrict Seller To View Order: In case you don't want your sellers to view those orders for which the customer hasn't done the payment, enable this option.

Auto Cancel Order: Auto cancel the order if the customer has not paid for the order. Next, you need to set the hours after which the order will be automatically canceled. Maximum can be 360 hours.

![image-7](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/03/image-7-1200x436.png)

*   PAYMENT FLOW: Choose where to enter the payment details, i.e., **Payment on the same page** or **Redirect to Stripe page**.

#### **NOTE:**

**Payment on the same page:** You need to select this option if you want the payment information pop-up to appear to customers on the same (Thank You) page.

**Redirect to Stripe page:** In case you want the payment information to appear on the Stripe payment page, you can select this option.

Now, once the customer completes the order process, he/she will be straightaway redirected to the Stripe payment page to enter the payment details and again get back to the Thank You page.

Now, in case you have selected **Payment on same page**, you will have to choose from these two payment methods:

![Checkout-Payment-Methods-Admin SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Checkout-Payment-Methods-Admin-1200x276.png)

Choose the Payment Method. [Know more](https://stripe.com/docs/payments/local-payment-methods).

**Note**: The **Card** payment method is by default selected. In case you choose the **iDEAL** payment method,

Make sure that your store currency is Euro and the customer’s geographical location is the Netherlands. [Know more about iDeal](https://stripe.com/docs/payments/ideal).

In case you have selected **Redirect to Stripe page**, you will have the following payment methods to choose from:

![SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/01/image-2-1200x597.png)

Choose payment method [Know more](https://stripe.com/docs/payments/local-payment-methods).

**Note**: Before choosing the above payment methods, make sure you have enabled them on your stripe account. [Activate Payment method](https://dashboard.stripe.com/settings/payments)

*   **iDEAL:** In case you choose the iDEAL payment method, make sure that your store currency is Euro and the customer is from the Netherlands [Know more](https://stripe.com/docs/payments/ideal).
*   **Sofort:** In case you choose the Sofort payment method, make sure that your store currency is Euro and the customer is from the Netherlands, Austria, Belgium, Germany, Italy, Spain and it takes 2 to 14 days to split the payment to the seller [Know more](https://stripe.com/docs/payments/sofort).
*   **Bancontact:** In case you choose the Bancontact payment method, make sure that your store currency is Euro and the customer’s geographical location is Belgium [Know more](https://stripe.com/docs/payments/bancontact).
*   **EPS:** In case you choose the EPS payment method, make sure that your store currency is Euro and the customer’s geographical location is Austria [Know more](https://stripe.com/docs/payments/eps).
*   **FPX:** In case you choose the FPX payment method, make sure that your store currency is Malaysian Ringgit and the customer’s geographical location is Malaysia [Know more](https://stripe.com/docs/payments/fpx).
*   **Giropay:** In case you choose the giro pay payment method, make sure that your store currency is Euro and the customer’s geographical location is Germany [Know more](https://stripe.com/docs/payments/giropay).
*   **Przelewy24:** In case you choose the Przelewy24 payment method, make sure that your store currency is Euro or Poland złoty and the customer’s geographical location is Poland [Know more](https://stripe.com/docs/payments/p24).
*   **Alipay :** In case you choose the Alipay payment method, make sure that the customer’s geographical location is China Know more.
*   **GrabPay:** In case you choose the GrabPay payment method, make sure that your store currency is Singapore Dollar or Malaysian Ringgit and the customer’s geographical location is from Singapore, Malaysia and Your Stripe accounts in Malaysia and Singapore [Know more](https://stripe.com/docs/payments/grabpay).

Next, you need to enter the two-letter country code of your Stripe Account.

![Check out Payment Method SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/09/Checkout-Payment-Methods-Admin-5.png)

This is the continuation of the above configuration page (Multivendor Admin Panel > Orders > Checkout Payment Method)

**EDIT TEMPLATE**\- You can edit the template for:

**Payment on the same page:** In case you want to edit the template of the payment page pop-up that appears on the Thank You page, you can make the changes from here as per your requirement.

The template can be restored by clicking on the 'Restore To Default' button as shown in the screenshot below.

![Edit-Stripe-Template-Admin SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Edit-Stripe-Template-Admin-1200x597.png)

**Redirect to Stripe page:** In case you want to edit the template of the payment cancel page pop-up that appears on the Thank You page,

You can make the changes from here as per your requirement. Similarly, the template can be restored.

**Processing Method:** You can select the processing method as either **Separate Charges & Transfer**, **Direct Charges** or **Destination Charges**.

**NOTE**

**Separate Charges & Transfer:** 
---------------------------------

By default, the whole order amount will be received by the admin from the customer. Further, the seller earning will be transferred to the respective stripe connected seller.

This is only supported when both admin stripe account and the connected seller's stripe account are in the same region: both in Europe or both in the U.S. [Know more](https://stripe.com/docs/connect/charges-transfers)

The checkout page branding will be the admin stripe account.

**Sample Image:**

![download-2- SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/download-2--1200x168.png)

Stripe: Admin End

**Destination Charges**:
------------------------

For selecting "Destination Charges" as the payment process method, make sure to enable the "split-cart" feature app: [Explore feature app](https://webkul.com/blog/shopify-multivendor-marketplace-split-cart/).

Moreover, if you haven't enabled the split-cart feature app then the amount of order with products from multiple sellers will go to the admin and the admin needs to manually pay the seller earning.

In other words, the destination charges will only work for the orders with the product(s) from a single seller.

The admin will bear the stripe processing fee and the admin commission will add to the application fee. [Know more](https://stripe.com/docs/connect/destination-charges)

The checkout page branding will be the seller stripe account.

**Sample Image:**

![download-1-2 SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/download-1-2-1200x223.png)

Stripe: Admin End

**Direct Charges**
------------------

For selecting "Direct Charges" as the payment process method, make sure to enable the "split-cart" feature app: [Explore feature app](https://webkul.com/blog/shopify-multivendor-marketplace-split-cart/).

Moreover, if you haven’t enabled the split-cart feature app then the amount of order with products from multiple sellers will go to the admin and the admin needs to manually pay the seller earning.

In other words, the direct charges will only work for the orders with the product(s) from a single seller.

**Sample Image:**

![download-3-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/02/download-3-1-1200x159.png)

Stripe: Admin End

The stripe processing fee will be borne by the seller only and the admin commission will be added to the application fee. [Know more](https://stripe.com/docs/connect/direct-charges).

In this case, The checkout page branding will be a seller stripe account.

*   STRIPE FEE BEAR BY: (Only in the case of **Separate Charges & transfer**) Select whether admin or seller will bear the Stripe Fees.
*   STRIPE PAYMENT NAME: Configure the Stripe Payment name label created at Shopify Payment Page.

![Checkout Payment Method SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/09/Checkout-Payment-Methods-Admin-3.png)

This is the continuation of the above configuration page (Multivendor Admin Panel > Orders > Checkout Payment Method)

Further, enter the details like **Secret Key, Publish Key** and **Client ID** and then click on **save**.

> The configuration from the seller end will the same as that was before. To know about that, use the following link: [https://webkul.com/blog/shopify-multi-vendor-marketplace-stripe-connect-integration/](https://marketplace-doc.webkul.com/classic/payment/Stripe.html)

**Note**: In case you have selected Direct Charges, it is mandatory for sellers to connect their Stripe account otherwise customer payment won't be successful.

### Stripe Order payment reminder

Admin can send reminders to customers for due payment. Moreover, the admin can set time and day intervals for sending reminders to customers.

![stripe-order-payment-reminder](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/04/stripe-order-payment-reminder.png)

The reminder will be send via email. For example, if admin has fill 6 hours in SET TIME FOR REMINDER EMAIL and 2 days in SET DAYS FOR REMINDER EMAIL.

Then, an reminder email will be send to customer for 2 days in every 6 hours.

**Note**:- Number of hours can't be more than number of days like 25 hours and 1 day will not consider.

### Webhook implemented for Stripe Payment

Once you'll enable SCA and update all the other details, you'll have the option to register Webhook.

![image-160 SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-160-1200x597.png)

After clicking on **view webhook**, you'll get the option to regsiter:

![image-161](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-161-1200x597.png)

Once done, registeration of the webhooks is complete.

![image-162 SCA STRIPE](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-162-1200x869.png)

This is how it will look on the Stripe dashboard:

![image-20](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/10/image-20.png)

### Delete Stripe Connected Seller

Click on **View Connected Sellers** to get the list of sellers who are using Stripe.

![image-163](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-163-1200x597.png)

From here, you can disconnect them from Stripe.

Note: Sellers won't be deleted from the marketplace, they will just be disconnected from Stripe.

![image-164](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-164-1200x597.png)

#### Mail Configuration

There are two mail configurations which the admin can do:

Visit **Multivendor Marketplace Admin Panel** > **Mail Configuration** > **Mail Configuration** (dropdown):

Customer Payment Reminder:
--------------------------

This will send a reminder mail to the customer to pay the order amount. It will be send for 48 hours (2 days) at an interval of 3 hours (only in the case of SCA).

This email will only be send if the customer didn't complete the payment.

![Customer Payment Reminder](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/09/Mail-Configuration-Admin.png)

Admin Panel > Mail Configuration

Stripe Payment Not Received:
----------------------------

This will send a notification to the merchant when the customer does not complete the payment process.

The admin will receive this email after 48 hours of the order placed and only till 51 hours of the order placed.

After this, if any of the customers didn't pay the order amount, the admin needs to manually pay the order or cancel it.

Also, if all the orders are paid within 48 hours, the admin will not receive this email.

![Stripe Payment Not Received](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/09/Mail-Configuration-Admin-1.png)

Admin Panel > Mail Configuration

### Frontend

At the checkout page, a customer will choose the “**Stripe Connect**” payment method to pay for the order.

![Stripe Pay Payment Option](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/09/Payment-Demo-Store-EUR-Checkout-1.png)

StoreFront

Further, the customer will be asked for the card details.

**Stripe hosted page:**

![Demo-Store](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Demo-Store-1200x597.png)

Card Payment Method

![Demo-Store-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Demo-Store-1-1200x597.png)

iDEAL Payment Method

**Cancel Page:**

![Stripe Frontend](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/10/Thank-you-Demo-Store-EUR-Checkout-1.png)

Storefront

**On the same page:**

![Thank-you-for-your-purchase-Demo-Store-USD-Checkout](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Thank-you-for-your-purchase-Demo-Store-USD-Checkout-1200x597.png)

Card Payment Method

![Thank-you-for-your-purchase-Demo-Store-USD-Checkout-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/04/Thank-you-for-your-purchase-Demo-Store-USD-Checkout-1-1-1200x597.png)

iDEAL Payment Method
