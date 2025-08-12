---
title: SELLER BUYER CHAT
description: SELLER BUYER CHAT
date: 2025-07-29
author: Chirag Tyagi
---
[ChatWhizz](https://webkul.com/blog/chatwhizz-communication-solution-for-your-organization/) is now integrated with the [Seller-Buyer Chat](https://webkul.com/blog/shopify-multivendor-marketplace-seller-buyer-chat-new-theme/) add-on of the [Multivendor Marketplace App](https://apps.shopify.com/multi-vendor-marketplace) for Shopify.

Using this integration, you can display a live chat widget on your storefront. The customers can connect with the sellers on the runtime and get their queries resolved.

wgM0xE1t4PQ

### ChatWhizz Registration

**How to get registered on ChatWhizz(Registration Process)**  
Read the [blog](https://webkul.com/blog/how-to-get-registration-on-chatwhizz/) to the end to learn how to register on ChatWhizz!

### Installation at ChatWhizz End: Seller-Buyer Chat Add-on

To install the add-on, visit the **Admin Panel** of **ChatWhizz**. From here, click on the **Add-ons** menu from the left navigation bar. On this redirected page, you’ll have the add-on listed.

![Seller buyer chat](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/sellerbuyerchat1-1-1200x603.webp)

There are different plans to choose from. You can opt for a plan that is suitable for your business needs.

![r6](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/r6-1004x1024.png)

### Installation at Multivendor Marketplace End: Seller-Buyer Chat Add-on

To install the add-on, visit **Multivendor Marketplace Admin Panel** > Hover over the **three dots** on the top right of the dashboard > **Feature Apps**. Next, enable the **Seller-Buyer Chat** add-on:

![r9](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/r9-1200x504.png)

Once enabled, visit **Configuration** > **Seller Buyer Chat**:

![image-25](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-25-1200x597.png)

Next, you need to configure the add-on by entering the following details:

*   Email ID (Admin needs to mention marketplace admin email ID)
*   Access Token
*   Refresh Token

![c2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/c2-1200x580.png)

To get the access token and refresh token, visit **ChatWhizz admin > installed add-ons > seller buyer chat > API details:**

![API](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/apidetails-1-1200x603.webp)

Here, you will have both the keys:

![Expiry](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/expirydate-1-1200x603.webp)

Once you'll save the details, you will get this success message on the screen:

![c3](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/c3-1200x510.png)

NOTE:

If the admin enables **Allow Sellers to Configure this Feature** tab, then the seller will be able to see and configure the seller-buyer chat on the seller panel.

![c5](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/c5-1200x407.png)

But if the admin disables "**Allow Sellers to Configure this Feature**" tab, then the seller will not be able to configure.

![c4](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/08/c4-1200x874.png)

### Auto-login to Seller-Buyer Chat

Sellers can now auto-login to the Chatwhizz panel from within their own seller panel.

They will find the option under Seller panel>> Configuration>>Seller-Buyer Chat>> Chat login

![screenshot_1696409564787](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/10/screenshot_1696409564787-1200x616.png)

### Code Instructions

Furthermore, visit **Multivendor Admin Panel** > **Configuration** > **Instructions for Marketplace**.

Here, you will have the code to add to the **footer.liquid** (or theme.liquid) template to display the chat box on frontend:

To show Chat History on the Storefront Customer Account page, you need to add the codes in **main-account.liquid** template

![sp-seller.webkul.com_admin_index.php_pinstruction](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/sp-seller.webkul.com_admin_index.php_pinstruction-1200x600.png)

### Code For Online Store 2.0

If you are using Online Store 2.0 (Example- Dawn), the codes to show the chatbox will remain the same.

### Marketplace Seller Panel

On the marketplace seller panel, a seller needs to visit **Configuration** > **Seller Buyer Chat**:

![image-30](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-30-1200x597.png)

Lastly, enable the option & save the changes:

![image-31](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-31-1200x590.png)

Once done, an operator account will be created for the seller. The seller will receive an email regarding the same with login credentials.

### Chat Box on Storefront

You will have the chat widget on the bottom of the page (depending on the configuration):

![image-32](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-32-1200x597.png)

Customers can send their queries in this chat box:

![image-33](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-33.png)

The operators/sellers will monitor it from the ChatWhizz backend.

![image-34](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/04/image-34-1200x590.png)

**Note**: Suppose a customer is on the product description page of product A. If the customer initiates the chat from this page, the seller selling product A will receive the message.

Similarly, the product page from where the chat starts will decide which seller will get the chat notification.

Now, in case the customer is on any other page that is not a product page, the chat notification will go to the admin. The admin needs to conduct the chat in that case.

### Show chat history to customers

Now, you can show chat history to your customers on their account page. For this, firstly admin needs to regenerate the file from the storefront configuration

Multivendor marketplace admin panel>>Configuration>>Storefront configuration>> regenerate Seller buyer chat

![screenshot_1706078483020](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/screenshot_1706078483020-1200x575.png)

A page named "Seller Buyer Chat" will be created on the Shopify pages section.

**NOTE-** Make sure to add the code to the respective liquid file on Shopify as [**mentioned above**](https://webkul.com/blog/chatwhizz-seller-buyer-chat-integration/#code-instructions).

### SELLER END

On the seller's end, a chat widget will appear in the dashboard like this.

![screenshot_1706078731815](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/screenshot_1706078731815-1200x575.png)

**NOTE- To show the chat widget on the seller dashboard make sure that seller-buyer chat is enabled for that particular seller.**

Seller can accept/decline the chat and can create a ticket or end chat of an ongoing chat.

Enable UV desk addon on chatwhizz end for ticket creation.

![screenshot_1706078973827](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/screenshot_1706078973827-1200x575.png)

![screenshot_1706079009778](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/screenshot_1706079009778-1200x575.png)

### On customer end

This is how it will look on the customer end

![screenshot_1706088448749](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/screenshot_1706088448749-1200x575.png)

![screenshot_1706088463155](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/screenshot_1706088463155-1200x575.png)

![seller-buyer-chat.myshopify.com_pages_seller-buyer-chat_clientId65b0d6fa1a4d0420fc29f108](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/01/seller-buyer-chat.myshopify.com_pages_seller-buyer-chat_clientId65b0d6fa1a4d0420fc29f108-1200x942.png)

