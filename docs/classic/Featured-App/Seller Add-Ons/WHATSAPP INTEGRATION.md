---
title: WHATSAPP INTEGRATION
description: WHATSAPP INTEGRATION
date: 2025-07-29
author: Chirag Tyagi
---
We have come with another feature app for our Multivendor Marketplace that is **WhatsApp Integration**. Now admin can send Automated WhatsApp Notification to sellers and customers.

As well for order placed, order fulfilled, order refund, order cancelled, and many more.

**Charges:** This will cost an additional **15 USD** per month over & above your current Multivendor Marketplace plan

### Enable WhatsApp Integration Feature App

Visit the ‘**Feature app**‘ section from your multivendor marketplace admin panel. Now, click on the enable button to install the app

![screenshot_1678775013217](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/03/screenshot_1678775013217.png)

Once done, you need to accept the payment. Further, you can enable the app successfully.

### Configuration: Admin Interface

As a admin you need to configure the app. Navigate from admin panel **configuration >> WhatsApp Integration Configuration**

![screenshot_1678775885383](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/03/screenshot_1678775885383.png)

Now as a admin you need to add following fields in order to start using WhatsApp Notification Feature.

*   WHATSAPP PHONE NUMBER ID\*
*   WHATSAPP BUSINESS ACCOUNT ID\*
*   WHATSAPP ACCESS TOKEN\*
*   WHATSAPP TEMPLATE NAME

### How to Get " WHATSAPP PHONE NUMBER ID\* "

In order to get **WHATSAPP PHONE NUMBER ID\*** you need to go to [developers.facebook.com](https://developers.facebook.com/) and create an account.

Once done you need to create an App, you can name it **as per your marketplace name.**

![wh2](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/wh2-1200x372.png)

![wh1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/wh1-1200x365.png)

Add app name and then create a app. Once app is created click on app.

![MVM WhatsApp Integration](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676883004928-1200x585.png)

Your app dashboard will open. Now navigate to ****Add products to your app**** and Add **WhatsApp**

![screenshot_1676883160238](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676883160238.png)

Click on WhatsApp product Settings >> Start using the API

![screenshot_1676883974163](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676883974163-1200x561.png)

Once done you need to add your Business WhatsApp Number to get started

> **Note**: If you are using already existed WhatsApp messenger number then it will not work.
> 
> Either you use new number or delete already existing WhatsApp messenger account then use it here in WhatsApp API.
> 
> After deleting the existing WhatsApp messenger account same number can be used after 15 min of deletion.

![wh5](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/wh5-1200x464.png)

![screenshot_1676886683265](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676886683265-1200x566.png)

![screenshot_1676886730043](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676886730043-1200x566.png)

![screenshot_1676886756309](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676886756309-1200x556.png)

Once Phone number is added we need to copy the ****Phone number ID**** and ****WhatsApp Business Account ID**** and paste it in your multivendor WhatsApp integration configuration.

![WhatsApp Integration](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/wh4-1200x525.png)

### How to Get " WHATSAPP BUSINESS ACCOUNT ID\* "

WhatsApp Business Account ID is also listed on same page where WhatsApp Phone Number ID is listed

![WhatsApp Integration](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/wh4-1200x525.png)

![screenshot_1678775943562](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/03/screenshot_1678775943562-1200x535.png)

### How to Get " WHATSAPP ACCESS TOKEN\* "

#### We need to get permanent access token to use in whatsApp Integration configuration

You can find your **temporary access token** that expires in 24 hours and your testing phone number in WhatsApp product setting. But in order to use WhatsApp API we need **permanent access token.**

To generate the permanent token go under [Users > System users](https://business.facebook.com/settings/system-users/) in your Business Manager settings, click _Add_, name it as you want, and choose _Admin_ user role.

![screenshot_1676891719972](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676891719972-1200x497.png)

Now, click _Generate new token_ and make sure you enable the **_whatsapp\_business\_management_**_,_ **_whatsapp\_business\_messaging_** and **_business\_management_ permissions**:

![Like](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676891773972-1200x503.png)

Then, copy the generated access token:

![permanent access token](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676891863149-1200x620.png)

You need to paste this token in **Multivendor app whatsApp integration configuration**

### Create WhatsApp Template

You need to create two template one for all orders notification and another for all products notifications ( events ). Create a template mentioned under send messages with the API.

![whatsapp-template](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/whatsapp-template-1200x525.jpeg)

![eng](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/eng.png)

#### Product Template

Create Product Template, use following information mentioned below.

![product-info-temp](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/product-info-temp-1200x525.jpeg)

**Body Content:**

> Hello \*{{1}}\*,
> 
> This is to inform you that the following product id \*{{2}}\* has been \*{{3}}\*.  
> For more details contact your merchant. Product Name : \*{{4}}\* ,
> 
> Regards {{5}}

Here in Body variables are created automatically which is define below Body as samples for body content. Kindly add each variable properly as it is responsible for dynamic content.

### Order Template

Create Another Order template, use following information mentioned below.

![screenshot_1683282852173](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1683282852173-1200x498.png)

![image-10-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/image-10-1.png)

**Body Content:**

> Hello \*{{1}}\*,
> 
> This is to inform you that order \*{{2}}\* has been \*{{3}}\* .  
> \*{{4}}\*
> 
> Regards {{5}}

Here in Body variables are created automatically which is define below Body as samples for body content. Kindly add each variable properly as it is responsible for dynamic content.

**Now you need to include both of these template in whats-app configuration setting in multivendor app.**

![screenshot_1683232697465](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/05/screenshot_1683232697465-1200x525.png)

**Note:** kindly add product template name first and then order template name separated by comma.

### Configure events for which you want to send WhatsApp Notification to seller and Customer

As admin you can configure among the listed notifications as per your requirement.

![screenshot_1678776067635](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/03/screenshot_1678776067635.png)

Once everything is done click on save. Now WhatsApp integration feature app will send notifications as per listed above events.

### Seller Configuration

Seller needs to enable Whatsapp notification feature from **configuration >> General Configuration >> Want To Receieve Order/Product Updates On Whatsapp**.

![whatsapp-notification-seller](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/07/whatsapp-notification-seller-1200x616.jpeg)

### Notifications on Whatsapp messenger

![whatsapp-notification-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/03/whatsapp-notification-1.png)

### WhatsApp Notifications Log

Like we have email notifications logs as a admin you can also check the WhatsApp Notifications logs as well send via WhatsApp API.

You can find that under **Mail configuration >> WhatsApp Log**

![screenshot_1678776119244](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/03/screenshot_1678776119244.png)

You can find all the logs in this page.

![Whatsapp logs page](https://cdnblog.webkul.com/blog/wp-content/uploads/2023/02/screenshot_1676894281483-1200x449.png)
