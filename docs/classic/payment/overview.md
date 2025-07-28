---
title: Payment
description: Payment Configuration
date: 2025-06-27
author: Chirag Tyagi
---

**Shopify Multivendor Marketplace | Payment Flow |**

[Multivendor Marketplace app for Shopify](http://localhost:8080/) app is a great tool to convert your shop into a fully functioning marketplace.

This user manual perfectly guides you to understand the payment flow in Multivendor Marketplace app for Shopify from setting up the payment methods to sending the payments to your sellers.

So in Multivendor Marketplace app for Shopify, the flow of payment goes like this:-

By default, Admin receives the complete amount of the order paid by the buyer/customer and then Admin transfers it to the seller after deducting his/her commission.

Admin can pay to sellers/vendors by four payment methods in the multivendor app in which two payment methods are online and two payment methods are offline.

**Online Payment Methods**
----------------------------

By these payment methods, the admin can pay sellers online through the app. Both admin and sellers must have a business PayPal account.

*   PayPal
*   PayFast
*   Razorpayx

**Offline Payment Methods** 
------------------------------

Admin can use these payment methods offline and can just track the amount in the app and can have a record of the way you pay the seller.

*   Internet Banking
*   Bank Wire Transfer

Now, let's understand its workflow:-

**Shopify Multivendor Marketplace | Payment Flow |WORKFLOW**
-------------------------------

**Payment Methods Setup**
----------------------

Firstly, the admin needs to set up the payment methods for the payment to the sellers from the admin panel of the app.

Admin end of Multivendor Marketplace app >> Payment >> Seller Payment Configuration >> Configure the payment methods from here >> Save

![mvm](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/one-2-1200x604.webp)

![methods](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/two-5-1200x598.webp)

![config](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/three-1-565x1024.webp)

**Separate Settings for "Shipping Tax Distribution"**
-----------------------------

This feature allows the admin to independently configure shipping tax settings, deciding whether it will be included in the admin's earnings or the seller's earnings.

![shipping](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/12/saperateshippingtax-1200x564.webp)

To manage the “Shipping Tax Distribution” settings, follow these steps:

1.  Navigate to the **Payment Configuration** section.
2.  Select **Seller Payment Configuration**.
3.  Click on **Payment Settings**.
4.  Scroll down to the "Shipping Tax Distribution" option.
5.  Enable or disable the feature based on your requirements.
6.  Save the changes to apply the settings.

This streamlined setup ensures flexible and transparent distribution of shipping taxes.

![autopay](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/auto-1200x599.webp)

Now the same payment methods will be available at seller end. And the seller can choose the payment methods from which he wants to be paid from admin.

Seller end of Multivendor app->> Profile->> Payment details->> Here choose any payment method from drop-down menu->> Save

![A3](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/c.png)

![A4](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/d.png)

Payment Methods added by the sellers from their respective panels can be edited/changed by the admin from his panel.

**Steps using which admin can change the Seller's Payment Methods:**
--------------------------------------------------------------------

Multivendor **Admin** Panel>>**Sellers**\>>**Select the Seller** whose Payment method needs to be changed>>Click on the "**Edit**" button in the **Action** menu.

![A10](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/Seller-Admin.png)

Now, Click on "**Seller Payment Details**" from the drop-down (**More Action** menu)>>Edit/change/add seller's payment method>>Save.

![A9](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/Edit-Seller-Admin.png)

This way admin can update Seller's Payment Methods from his end.
 
 **HOW ADMIN PAYS TO SELLERS**
----------------------------
Now to pay to sellers admin needs to visit the "Seller Payments" section under the "payment" menu in the admin panel of multivendor marketplace app

Admin Panel of Multivendor app->> Payment->> Seller Payments->> Click on "View"

In front of seller ID->> Select Payment resource (Click PayPal/PayFast if you want to pay online through the app or Click Manual(in case of offline payment)

if you want to make a record that you have paid to seller ->> Now enter the amount->> Pay to seller

![payment](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/seller-1200x602.webp)

![A6](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/a-1.png)

**Note: Now admin will be able to see failed transactions history also.**

![A7](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/Manage-Seller-Payment-Details-_-Admin.jpg)

![A8](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/c-1.png)

This way admin/merchant can pay to the sellers/vendors.

Now, from the same page, the admin can export all the transaction detail of the payment that he/she has paid to the seller.

Just click on the Export details button in front of TRANSACTION DETAILS.

![Manage-Seller-Payment-Details-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/10/Manage-Seller-Payment-Details-Admin-1200x608.png)

 **Seller Payment Type**
--------------------
You will now have the option to pay to the sellers **the whole amount of all the orders together** OR **pay for individual orders separately**.

Go to the **Payment** >> **Seller Payment Configuration** >> Select an option & pay to your sellers.

![type](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/type-1-1200x436.webp)

If you choose **"Pay Total Amount"**, you’ll now see a new option!  
You can select specific orders, or even all orders, based on a **custom date range**, and make the payment in one go.

1.  Go to Payment > Seller Paymemts

![Manage-Seller-Payment-Details-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Manage-Seller-Payment-Details-Admin-1200x627.png)

2\. Choose the **Order Creation Date** and click on **GET**

![newflow](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/newflow-1200x575.webp)

3\. From the list of orders, select the ones you want to pay for

![newflow1](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/newflow1-1200x575.webp)

5\. Review the **Payable Amount**, and confirm the payment by clicking on **Pay To Seller**

![newflow2](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/newflow2-1200x575.webp)

Choose PAY ORDER WISE in case, you want to pay for individual orders separately to your sellers.

In this case, there will be no such option to pay the whole order amount to sellers at a time, but can pay for each order separately from the **order detail** section.

![Order-Details-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Order-Details-Admin-1200x627.png)

> Please Note:- In case you choose “pay order wise”, we consider all the previous payments as paid as we have no records of order-wise payment history.
> 
> Kindly make sure that all payments are done for the previous orders as further, there will be no order-wise payment option available for the previous orders in the app.
> 
> So, before enabling this option, please pay for the previous orders either from the app or outside the app.

**Add Seller's Total Due Earning**
-------------------------
From the **Seller** **Payment Configuration**, you can choose when you want to add the total due earnings of the sellers.

i.e. on order placed, on paid order, on order delivered or on refund days completion.

![earnig](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/totalearning-1-1200x601.webp)

**How to Manage Payments in the Case of COD?**
---------------------------
In case the order amount is paid via **COD** or the payment status is in the "**Pending**" state.

You can choose whether you want to receive the order payment by yourself or you want your sellers to receive the order amount.

![cod](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/cod-1-1200x602.webp)

You can visit the " **Seller** **Payment Configuration**" menu of the app and configure the settings accordingly.

Click the **Save** button.

By default, the configuration is set to "Payment Received by Admin".

But in case the admin wants the seller to receive the total order amount then, this can be done with this configuration.

This is mainly the case when the customer has paid for the order via COD.

From the Seller Payment section of the Multi-vendor admin panel, you can view your commission, the seller's earnings & **total due amount** (amount to be paid to the seller).

There will be two cases here:-

**Case 1.** **The total due amount is Positive.**
-------------------------------------------------

**Suppose $300 USD i.e You need to pay $300 USD to the Seller.**

Once an order amount $100 is paid via COD and the seller will receive the complete order amount as per the admin's configuration.

In this case, the total due amount reflected on the admin side will be $200 USD i.e previous total due amount ($300 USD)**\-** current order amount received by the seller via COD ($100 USD).

![admin pay to seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/05051110/AwesomeScreenshot-Manage-Seller-Payment-Admin-2019-07-05-10-07-52.png)

Clicking the View button, the admin can pay the due amount to the seller.

![pay to seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/05051602/AwesomeScreenshot-Manage-Seller-Payment-Details-Admin-2019-07-05-10-07-99.png)

So, this is the simple case when you can simply pay the due amount to the seller.

The seller can view the transactions in the "**Order Payment**" section of his/her seller panel.

![transaction details-Seller Panel](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/05051822/AwesomeScreenshot-Payment-Receive-Seller-Multivendor-MarketPlace-2019-07-05-10-07-51.png)

**Case 2. The total due amount is Negative.**
---------------------------------------------

**Suppose it's -$300 USD i.e Seller needs to pay $300 USD to the admin.**

This is the case when the seller has received most of the payment via the COD payment method.

Thus, the seller needs to pay the admin's share (as Seller has received the complete order amount received via COD).

So, if the total due amount is negative then, the seller will get the option to pay to the admin from his/her seller panel.

![Receive amount from seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/05045535/AwesomeScreenshot-Manage-Seller-Payment-Admin-2019-07-05-10-07-19.png)

The seller can follow this procedure to Pay to the admin:

Go to Multi-vendor Seller Panel>>Visit **Order** menu>>Click **Order Payment** from the drop-down menu>>Click the **Pay to Admin** button.

![seller payment ](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/04130014/AwesomeScreenshot-Payment-Receive-Seller-Multivendor-MarketPlace-2019-07-04-18-07-48.png)

![manage details](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/06/05050217/AwesomeScreenshot-Manage-Seller-Payment-Details-Admin-2019-07-05-10-07-42.png)

From the **Seller Payment** section of the app, the admin can view the complete details of all the transactions that take place.

 **AUTO PAY**
------------------
In the multivendor marketplace app, we have two automatic payment methods:

*   **Stripe Connect payment gateway**: This is an add-on to the marketplace.  
    After the customer pays the amount for the order, the amount will go to the respective Seller and Admin account directly as per the share configured on the basis of commission.  
    Both admin & seller needs to have their respective Stripe accounts. [Know more](http://localhost:8080/payment/Stripe.html).
*   **PayPal Payout**: This is an inbuilt feature in the marketplace app.  
    This feature lets your sellers automatically receive their total earnings once they mark the order as delivered/fulfilled. [Know more](hhttp://localhost:8080/payment/Paypal.html).
*   **Razorpayx:** This is an inbuilt feature of the multivendor marketplace app that allows the merchant to use the Razor PayX gateway to pay their Sellers. This feature only works for Merchants and Sellers based in India. [Know more](http://localhost:8080/payment/RazorPayX.html).

**Export Seller Earning Details**
-----------------------------

From the admin panel section of the app, the admin can generate seller earning details.

To export the seller earning details admin needs to visit the seller’s section of the multivendor app.

Multi-vendor Admin Panel>>Sellers>>Seller Listing>> Click on “Edit” in front of SELLER ID>> More Action>> Export the seller earning details>>

Choose column (the details admin wants)>>Choose dates “FROM” and “TO” >> then “Export” or “Save and Export or “Export from Saved Lists”.

Admin can export a maximum of 30 days of details. Earnings for 30 days can be from any month or from a specific date to another date.

Refer to the below screenshots:-

![Seller Listing page ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/gavswsn-1200x560.webp)

![Edit seller page ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/ttest-1200x563.webp)

![choosing columns ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/test-1200x558.webp)

![fill date ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/testt-1083x1024.webp)

![export](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/testtt-1200x553.webp)

So **seller earning details** visible like this as showing in the screenshot.

![final view ](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/test-1-1200x362.webp)

### Export Earning transaction details on the Seller's end

On Seller's end
---------------

From the seller panel section of the app, the seller can export earning transaction details.

To export the transaction details, the Seller needs to navigate.

Multivendor Marketplace Seller panel >> Orders >> Order payments. As mentioned in the image below.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/export1-1200x569.webp)

It will redirect you to the order payment page.

On the Order payment page, click on the "Export" button. A popup will open, allowing you to select dates "FROM" and "TO". After selecting the dates, click on "Export".

After clicking on Export, the transaction details will be downloaded in a CSV file.

As mentioned in the image below.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/export2-1200x569.webp)

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/export3-1200x569.webp)

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/07/export4-1200x639.webp)

If the number of transactions exceeds 500, you will receive a CSV file via email.

### Shopify Multivendor Marketplace | Payment Flow |DEMO DETAIL

Check out: [https://multivendor-marketplace-5.myshopify.com/](https://multivendor-marketplace-5.myshopify.com/)
