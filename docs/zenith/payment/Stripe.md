---
title: Stripe-connect
description: Stripe-connect Configuration
date: 2025-06-27
author: Chirag Tyagi
---
We have launched Stripe Connect payment gateway in the [Multivendor Marketplace](https://marketplace-doc.webkul.com/classic/Introduction/) app for Shopify.

Where now after the customer pays the amount for the order, the amount will go to the respective Seller and Admin account directly as per the share configured based on commission.

Both admin & seller needs to have their respective Stripe accounts.

This feature is available at a cost of USD 10 per month over and above your monthly plan. And you can use marketplace shipping or any other shipping of your store with this feature.

**NOTE**: If you as Store Owner sell products, then you have to become Seller to get Payment through Stripe Connect.

Stripe Payment Method works in the case of Gift Cards.

But the admin will receive the whole payment, and it will not be auto-split between vendors and the admin.

The admin then further needs to transfer the vendor's share separately.

\- This will not work in the case of Custom Product & Gift Card Product.

#### **POINT TO REMEMBER**

If customers apply a discount code to their orders, the entire order amount will be sent to the Admin Stripe Account.

Then Admin will be responsible for sending the seller's earnings to his account.

**NOTE**:- If you are using the older version of Stripe API (before 2019-08-14), make sure to upgrade it to the latest version.

#### Minimum & Maximum Charge Amount

The minimum amount you can charge 0.5$ and the maximum is up to eight digits (e.g., a value of **99999999** for a USD charge of $999,999.99). [Learn more](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts).

### **ACTIVATION IN NEW THEME**

Firstly, enable the app from the Feature App section.

![Feature app](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/11/Feature-Apps-_-Admin-1.png)

Once you click on the "Enable" button, you need to agree on additional charges which are USD 10 per month.

![Stripe Connect13](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/bb.png)

Now, let's understand its workflow:-

### Workflow

**Configuration of the app is given in this blog:** [Stripe SCA Enabled: Multivendor Marketplace for Shopify](https://webkul.com/blog/stripe-sca-enabled-multivendor-marketplace-for-shopify/)

### Stripe Account Types

Also, you need to choose the Stripe account type of your sellers while configuring the Stripe details in the app.

Select the account type whether **Standard** or **Express** that the seller is using with Stripe. [Know more](https://stripe.com/docs/connect/accounts) about the Stripe accounts.

**NOTE**:- You can’t change the account type to Express if the seller is already connected to the Standard Stripe account and vice versa.

Additionally, enter the details like Secret key, Publish Key and Client ID and then click on save.

![Stripe Details](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/pay32.webp)

You need to log in to your Stripe Account to get the above keys.

"Secret key" and "Publish key" you will get from the "API" section of your Stripe account.

![screenshot-dashboard.stripe.com-2022.01.31-13_21_31](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/01/screenshot-dashboard.stripe.com-2022.01.31-13_21_31-1200x543.png)

"Client ID" you will get from "settings > Connect Settings" of your Stripe account.

![screenshot-dashboard.stripe.com-2022.01.31-13_32_29](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/01/screenshot-dashboard.stripe.com-2022.01.31-13_32_29-1200x543.png)

Copy the client ID:

![screenshot-dashboard.stripe.com-2022.01.31-13_33_191-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/01/screenshot-dashboard.stripe.com-2022.01.31-13_33_191-2-1200x543.png)

Now, to connect the seller's Stripe account to your stripe account copy the code from the "instruction for the marketplace" section of the configuration menu in the app,

paste into the "Redirect URI" section of your Stripe account, and make this default as shown in the following screenshot:-

Admin end>> Configuration >> Instruction for marketplace >> Visit "Stripe connect" section>> Copy the given code to connect the seller's Stripe account to your Stripe account.

![Stripe Connect188](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/pay33.webp)

Now open your "Stripe account" and paste the code in the "Redirect URI" section and make it default.

![screenshot-dashboard.stripe.com-2022.01.31-13_32_29-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/01/screenshot-dashboard.stripe.com-2022.01.31-13_32_29-1-1200x543.png)

![screenshot-dashboard.stripe.com-2022.01.31-13_39_34](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/01/screenshot-dashboard.stripe.com-2022.01.31-13_39_34-1200x581.png)

Go to Settings>> Connect Settings >> Redirects:

Enter the URL:

![screenshot-dashboard.stripe.com-2022.01.31-13_41_40-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/01/screenshot-dashboard.stripe.com-2022.01.31-13_41_40-1-1200x581.png)

Set it as default:

![screenshot-dashboard.stripe.com-2022.01.31-13_42_33-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/01/screenshot-dashboard.stripe.com-2022.01.31-13_42_33-1-1200x581.png)

### Code Pasting

You will find the codes under **Multivendor Admin Panel** > **Configuration** > **Instruction for Marketplace** > Under **Stripe Connect**.

Connect seller Stripe account to your Stripe account by pasting these codes in the given template files.

Copy the code from the **Instruction for Marketplace** section into **Redirect URIs** inside account applications settings ([Visit Stripe Account](https://dashboard.stripe.com/account/applications/settings)). The code will look like this:

    https://{your_seller_url}/index.php?p=stripe_connect_config&sid={your_sid}&type=connect

**Note**: Please don't paste the exact same code as provided above as it doesn't have the seller URL & sid number. Visit **Instruction for Marketplace** section and then copy the code from there.

Copy the below-given code & paste it to the **customers/order.liquid** template.
```html
<div style="display:none;" id="wk_order_payment_status" data-payment_status="{{ order.financial_status }}" data-sh_gateway="{{ order.transactions[0].gateway }}" data-wk_gateway="Stripe Payment"></div>
```

![image-78](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/pay33.webp)

### SHOPIFY STORE SETTINGS

**NOTE:**

Admin just needs to create a custom payment method from the Shopify store backend,

Please note:- Name of your custom payment method should be the same as the name of the Stripe Payment name (Which you have entered from the “Checkout payment method” section of the multivendor app).

Then customers must pay via this custom payment method, Only after that payment gets split between admin & seller.

Admin needs to create the stripe connect payment name from Shopify store settings to add Payment Name for the checkout page. Please follow the below steps:-

Admin panel of Shopify store>Settings > Payment Providers>Visit "Manual Payments" section>click "Create Custom Payment Method" from drop down>Enter Payment Method name>Click on the "Activate" button.

![Settings ](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/11/johndoe-_-Settings-_-Shopify-jpg-1301×678--e1552042429162.png)

Please note:- Name of your custom payment method should be the same as the name of Stripe Payment name. (Which you have entered from the "Checkout payment method" section of the multivendor app)

![payment provider1](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/11/Demo-Store-Payment-providers-Shopify-e1552042467314.png)

This way you can create the payment method which the customer will select at the checkout page once added by the admin.

### Checkout extension for Stripe Payment method: Payment Option on the Thank You Page

_Note: Shopify's Additional Script has been deprecated and will be removed at any time._

To address this, we have implemented a checkout extension for Stripe.  
When a customer places an order and selects Stripe as their payment method. They will be redirected to the Thank You page.

A popup will appear on the Thank You page notifying the customer that "Your payment is incomplete. Click here to complete and confirm your order".

Once clicked, the customer will be redirected to the Stripe payment page where they can finalize their payment.

To set the stripe New checkout method, the Admin needs to navigate to the Shopify Backend >> Setting >> Checkout >> Click on the customize button from the configuration.

![shopify setting for stripe](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/stripe1-1200x943.webp)

![customize checkout ](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/stripe2-1200x943.webp)

On the redirected page, select the Thank You page from the dropdown menu.

![customize thankyou page](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/stripe3-1200x569.webp)

Next, add the Checkout UI Extension block in the Order section, as shown in the image.

![add block](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/stripe4-1200x569.webp)

On the Thank You page, the popup to complete the payment will appear and save.

![thankyou page.](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/01/stripe5-1200x943.webp)

### SELLER PANEL IN NEW THEME

The multivendor marketplace app now displays a "Stripe Connect Configuration" menu in the orders section of the seller panel.

![Stripe Connect121](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/09/pay35.webp)

After visiting this section click on "Add account to stripe"

![image-165](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-165-1200x627.png)

![Stripe Login Panel ](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/25-1.png)

**Standard**:-

![Stripe Connect account ](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/26-1.png)

**Express**:-

![Express Account](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/03/Screenshot-38-1200x605.png)

Further, the account will be successfully added.

![Stripe Connect Orders](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/03/27-1.png)

### Seller Stripe Dashboard: Express Account Type

If the seller has configured the express account, he will have the option to redirect to the stripe dashboard from here:

![image-166](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/07/image-166-1200x627.png)

### CUSTOMER FRONTEND

At the checkout page, a customer can choose the "Stripe Connect" payment method to pay for the order.

![pay via stripe](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/11/Screenshot-3.png)

### Stripe Payout Payment

**Purpose of this feature**:  
This feature lets your sellers automatically receive their total earnings. Once they mark the order as delivered/fulfilled/pay after the refund date.

In the case of Stripe Payout, according to the order status (delivered/fulfilled/pay after the refund date) set by Admin,

the seller earnings are transferred from the Admin stripe account to the seller stripe account.

This transfer of seller earnings from  Admin to Seller Stripe account is managed by STRIPE & then as per the settings configured by the seller on their respective Stripe dashboard,

the amount is transferred from the Seller Stripe account to their bank account is managed by the Multivendor marketplace App.

**Note:** The stripe payout feature is not compatible with two countries that is Brazil & India.

### Limitations of stripe payout

1) Balance must be available in the seller connector stripe account.  
2) Enable Manual Pay on the seller's Stripe account.

How to configure the Stripe Payout feature?
-------------------------------------------

To configure this feature, the Admin needs to follow the steps written below:

*   Go to Multi vendor Marketplace **Admin Panel**
*   Hover over the **Order** menu & select the **Checkout payment method** from the drop-down menus.

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp-1-1200x541.png)

After clicking on the checkout payment method, the user will land on the checkout method page as shown in the image. The user needs to click on the add button.

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/ssp1-1-1200x496.png)

Once the user clicks on the add button the stripe configuration page will open and the user needs to select the stripe payout as the **use stripe for option.**

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp2-2-1200x548.png)

After fulfilling all the relevant details, the payout configuration is there **AUTOPAY TO SELLER**.

Once you enable this configuration, you will get the three options to select

### **Fulfil**l:

If you select the fulfill option then once the seller marks the order as fulfilled then seller earnings will be transferred to the seller account.

### **Delivery**:

In the case of delivery, the seller's earnings will be transferred to the seller's account once the order is marked as delivered.

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp3-1-1200x847.png)

### **Pay after the return date:**

To enable this, the admin first needs to enable the **ENABLE CASHABLE AMOUNT FOR SELLER** configuration which allows you to set particular days after which you want your Sellers to receive the payment.

These days are basically the days in which your customers can refund the purchased items.

Configure the following feature by navigating through: **Multivendor Marketplace Admin Panel > Payment > Seller Payment Configuration**.

Refer to the images below:

![admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/admindashboard-2-1200x595.webp)

![payment](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/paymentsetting-2-1200x596.webp)

![cashable](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/enablecashable-1-1200x602.webp)

Here, the Admin needs to enter the days after which the payment will be done to his sellers for the order (order refund days) and,

select whether you want to calculate the provided span of time from the delivery date, order fulfillment date, or order creation date.

Example: If you have selected the delivery date & mentioned refund days (pay after days) as 30 then after 30 days of the delivery date, the Sellers will receive the payment.

**NOTE**: Refund days should be greater than -1 otherwise it will not work.

Lastly, enable the ‘**Allow seller to enter refund days**‘ if you want your sellers to add their individual refund days.

Once enabled, the sellers will be able to set the refund days by visiting **Marketplace Seller Panel > Configuration > General Configuration > Enter the day & save:**

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp6-1-1200x542.png)

**Note:** The sellers who have not entered any refund days will by default have the refund days set by the admin.  
If entered then the refund days should be greater than -1 otherwise it will not work.

Only after enabling this option, the Admin will have the ‘Pay after refund date’ option in stripe Payout Configuration:

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp7-1-1200x471.png)

Also, the Admin won’t be able to choose the ‘pay after’ as delivery or fulfilment because now it will work as per configured in the ‘Cashable Amount for Seller’ option.

The whole auto-pay process at a glance!
---------------------------------------

Suppose, a customer placed an order and the Admin has set the stripe Payout payment condition as ‘fulfilled’,

i.e., the Seller will auto-receive the payment once he set the order status as fulfilled. Considering this scenario, let’s have a look:

The Admin can view the orders in the Order Listing page of the **Admin panel**:

Admin Panel > Orders > Order listing:

![spp87](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp87-1200x373.png)

Similarly, the Seller can view the orders in the Order Listing page of th**e Seller Panel:**

Seller Panel > Orders > Order Listing:

![spp877](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp877-1200x379.png)

Until the order is **fulfilled** by the Seller, the Seller Payment will remain due at the Admin end.

Admin end > Payment > Seller Payments:

![spp43](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp43-1200x477.png)

Also, the Seller will not receive any payment information in the ‘Payment Received’ page at Seller end **(Seller end > Orders > Payment Received)**.

Once, the order is fulfilled by the Seller & the order status changes from Unfulfilled to Fulfilled at both, Admin & Seller end:

Seller end > Orders > Order Listing:

![spp98](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp98-1200x374.png)

Now, as soon as the order is fulfilled by the Seller, the total due amount at the Admin end will become zero & payment earnings will be auto-paid as per the configuration.

Admin end > Payment > Seller Payments:

![spp67](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp67-1200x475.png)

### Stripe Transfer

#### **Purpose of this feature**:

This feature lets your sellers automatically receive their total earnings once they mark the order as delivered/fulfilled/paid after the refund date.

**In the Stripe Transfer** feature customers will pay the admin via the payment method available on the Shopify end.

The seller's earnings are transferred from the Admin Stripe account to the Seller Stripe account.

![All payment methods](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/11/stripe-1200x304.webp)

Now admin can choose to create a payment (transfer to the seller) only if the payment is made through a specific payment method on Shopify.

![Stripe payment method](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/11/stripepaymentmethod-1-1200x359.webp)

This transfer of seller earnings from  Admin to Seller Stripe account is managed by the MVM app,

then as per the settings configured by the seller on their respective stripe dashboard, the amount transferred from the Seller Stripe account to their bank account is managed by the Stripe end.

**Note:** The stripe Transfer feature is not compatible with one country that is **India.**

![stripe-balance](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/stripe-balance-1200x476.png)

How to configure the Stripe Transfer feature?
---------------------------------------------

To configure this feature, the Admin needs to follow the steps written below:

*   Go to Multi vendor Marketplace **Admin Panel**
*   Hover over the **Order** menu & select the **Checkout payment method** from the drop-down menus.

![screenshot_1675923554142](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1675923554142-1200x586.png)

After clicking on the checkout payment method, the user will land on the checkout method page as shown in the image. The user needs to click on the add button.

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/ssp1-1-1200x496.png)

Once the user clicks on the add button the stripe configuration page will open and the user needs to select the **Transfer** for the field **"use stripe for**".

![screenshot_1675923802059](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1675923802059-1200x592.png)

After fulfilling all the relevant details, the payout configuration is there **AUTOPAY TO SELLER**.

Once you enable this configuration, you will get the three options to select

### **Fulfil**l:

If you select the fulfill option then once the seller marks the order as fulfilled then seller earnings will be transferred to the seller account.

### **Delivery**:

In the case of delivery, the seller’s earnings will be transferred to the seller’s account once the order is marked as delivered.

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp3-1-1200x847.png)

### **Pay after the return date:**

To enable this, the admin first needs to enable the **ENABLE CASHABLE AMOUNT FOR SELLER** configuration which allows you to set particular days after which you want your Sellers to receive the payment.

These days are basically the days in which your customers can refund the purchased items.

Configure the following feature by navigating through: **Multivendor Marketplace Admin Panel > Payment > Seller Payment Configuration**.

Refer to the images below:

![admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/admindashboard-4-1200x595.webp)

![payment](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/paymentsetting-4-1200x596.webp)

![cashable](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/enablecashable-4-1200x602.webp)

Here, the Admin needs to enter the days after which the payment will be done to his sellers for the order (order refund days),

and select whether you want to calculate the provided span of time from the delivery date, order fulfillment date, or order creation date.

Example: If you have selected the delivery date & mentioned refund days (pay after days) as 30 then after 30 days of the delivery date, the Sellers will receive the payment.

**NOTE**: Refund days should be greater than -1 otherwise it will not work.

Lastly, enable the ‘**Allow seller to enter refund days**‘ if you want your sellers to add their individual refund days.

Once enabled, the sellers will be able to set the refund days by visiting **Marketplace Seller Panel > Configuration > General Configuration > Enter the day & save:**

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp6-1-1200x542.png)

**Note:** The sellers who have not entered any refund days will by default have the refund days set by the admin.  
If entered then the refund days should be greater than -1 otherwise it will not work.

Only after enabling this option, the Admin will have the ‘Pay after refund date’ option in stripe Transfer Configuration:

![Stripe Connect](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/12/spp7-1-1200x471.png)

Also, the Admin won’t be able to choose the ‘pay after’ as delivery or fulfillment because now it will work as configured in the ‘Cashable Amount for Seller’ option.
