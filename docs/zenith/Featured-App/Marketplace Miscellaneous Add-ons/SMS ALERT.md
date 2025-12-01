---
title: SMS ALERT
description: SMS ALERT
date: 2025-07-25
author: Chirag Tyagi
---


The [Multivendor Marketplace for Shopify](https://marketplace-doc.webkul.com/classic/Introduction/) is now integrated with the **SMS Gateway tools**(SMS Alert) for sending automated messages & calls.

Enable the SMS Alert feature app to include this functionality in your marketplace.

**Purpose:** Admin, as well as, vendors will receive an SMS notification/ IVR calls for newly placed orders.

Earlier in the multivendor marketplace, notification of a new order placed by the customer was sent only via email.

**Charges:** This will cost an additional **5 USD** per month over & above your current Multivendor Marketplace plan.

### Enable SMS Alert Feature App

Visit the '**Feature app**' section from your multivendor marketplace admin panel. Now, click on the enable button to install the app.

![Multivendor Marketplace for Shopify: Clockwork Integration](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/05/29113657/AwesomeScreenshot-Feature-Apps-Admin-2019-07-29-17-07-39.png)

Once done, you need to accept the payment. Further, you can enable the app successfully.

### Configuration: Admin Interface

Firstly, the admin needs to set up the SMS Gateways. There are two SMS Gateways for the following feature app:

1.  **Clockwork**: For sending automatic messages.
2.  **Twilio**: For making IVR phone calls and sending text messages.

For configuration, visit **Multivendor Marketplace Admin Panel** > **Orders** > **SMS Gateway Settings**

![SMS-Gateway-Setting-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/SMS-Gateway-Setting-Admin-1200x597.png)

Here, you can activate both or any one of the SMS Gateways.

### Configuring Clockwork SMS Gateway

Firstly, click on the three dots to activate the gateway. Refer:

![SMS-Gateway-Setting-Admin-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/SMS-Gateway-Setting-Admin-1-1200x597.png)

Once you click on the activate button, you need to enter the **Clockwork API key**.

![SMS-Gateway-Setting-Admin-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/SMS-Gateway-Setting-Admin-2-1200x597.png)

Enter the key & save the details.

**How to get Clockwork API Key?**

To get the API key you have to create an account on **[Clockwork](https://www.clockworksms.com/)** and select the plan as per your requirement.

### Configuring Twilio SMS Gateway

You can activate the Twilio SMS Gateway by clicking on the three dots. Refer:

![SMS-Gateway-Setting-Admin-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/SMS-Gateway-Setting-Admin-3-1200x597.png)

Once you'll click on the activate button, you'll be asked to enter the **Twilio SID** & **Auth Key**. Enter these details and save them to proceed.

![SMS-Gateway-Setting-Admin-4](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/SMS-Gateway-Setting-Admin-4-1200x597.png)

**How to get Twilio SID & Auth Key?**

Follow these steps:

*   Login to [Twilio](https://www.twilio.com/login). Sign-up in case you don't have an account.
*   Further login, on the **Twilio Dashboard**, you'll have the Account SID & Auth Key. Refer:

![Twilio-Cloud-Communications-Web-Service-API-for-building-Voice-and-SMS-Applications](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Twilio-Cloud-Communications-Web-Service-API-for-building-Voice-and-SMS-Applications-1200x551.png)

Furthermore, after entering these Twilio keys, you'll be able to configure Twilio for the marketplace app.

Now, visit **Multivendor Marketplace Admin Panel** > **Configuration** > **SMS Twilio Configuration**.

![SMS-Twilio-Configuration-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/SMS-Twilio-Configuration-Admin-1200x887.png)

Here, you need to enter the **Twilio Contact Number** (it should be in international format).

Enable **Twilio SMS** to send your marketplace seller an order notification message whenever a customer places a new order for their products.

Furthermore, enable the **Twilio Call** if you want your marketplace sellers to receive an order notification auto-generate voice message whenever an order is placed by the customers for their products.

Moreover, enter the Twilio text to speech note which will be sent to your sellers over IVR Calls.

**NOTE**

The above contact number should be registered with Twilio.

**How to get a Twilio registered number?**

For this, login to your [Twilio](http://twilio.com/login) account. From the **dashboard**, click on the three dots (All Products & Services) > Further, click on **Programmable Voice**.

![Twilio-Cloud-Communications-Web-Service-API-for-building-Voice-and-SMS-Applications-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Twilio-Cloud-Communications-Web-Service-API-for-building-Voice-and-SMS-Applications-1-1200x597.png)

On the redirected page, click on **Numbers**. Refer:

![Twilio-Cloud-Communications-Web-Service-API-for-building-Voice-and-SMS-Applications-1-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Twilio-Cloud-Communications-Web-Service-API-for-building-Voice-and-SMS-Applications-1-1-1200x597.png)

Here, you can add your own number to get it registered with Twilio by clicking on **Manage Numbers**. Or, you can also get a number from Twilio as well by clicking on **Get a Number** button.

After setting up the SMS Gateways, now, you need to do the SMS Settings.

**NOTE**:- If you have the mobile number of any other countries, then, you need to add it to the Geo locations to send SMS to those countries.

Thus, add GEO locations to your Twilio account accordingly.

### SMS Settings

Visit **Multivendor Admin Panel** > **Orders** > **SMS Settings**.

![SMS-Message-Setting-Admin](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/SMS-Message-Setting-Admin-1200x860.png)

Configure the following details:

*   **Order notification to seller:** From here, you can change the status of the notification. If disabled, no messages will be sent to the sellers.
*   **From Name:** Enter the sender's name. Example: Demo Store Admin
*   **Content:** Enter the content of the SMS that you want to send to your sellers with respect to the Gateway you are using.

### Important Points

*   In the case of Clockwork Gateway:  
    Admin needs to enter the contact number registered with the SMS Gateway by visiting **Configuration** > **General Configuration**.  
    Enter the number with country code, starting without ‘**+**’ and ‘**0**’. Moreover, the number should be in international format.  
    Refer:

![Configuration-Admin-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/Configuration-Admin-3-1200x597.png)

*   In the case of any SMS Gateway:  
    The sellers have to enter their contact number in order to receive messages regarding new orders.  
    
*   For this, sellers need to visit their **multivendor seller panel** > **Profile** > **My Account**. Further, enter the contact number & save. (Enter the number with country code, starting without '**+**' and '**0**'.)
*   Moreover, the number should be in international format.

![My-Account-Seller-•-Multivendor-MarketPlace](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/01/My-Account-Seller-%E2%80%A2-Multivendor-MarketPlace-1200x597.png)

*   The number of messages will depend on the plan selected by you on your SMS Gateway account.
*   Monthly payment to your SMS Gateway providers on the basis of their plan chosen by you will be separate. That is, it will be over and above the marketplace plan + SMS Alert feature app's monthly charges.
