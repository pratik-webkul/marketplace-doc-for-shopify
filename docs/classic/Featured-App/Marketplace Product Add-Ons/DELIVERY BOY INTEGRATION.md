---
title: DELIVERY BOY INTEGRATION
description: DELIVERY BOY INTEGRATION
author: Chirag Tyagi
---

**[Delivery boy app by Webkul](https://webkul.com/blog/delivery-boy-app-for-shopify/)** is a simplified solution for admin to add agents as delivery boys, assign orders to them, and track orders assigned for deliveries.

Now, the **[Delivery boy app by Webkul](https://webkul.com/blog/delivery-boy-app-for-shopify/)** is integrated with the very popular **[Multi-vendor Marketplace app](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/)** for Shopify.

By enabling this featured app, the merchant can allow sellers to add warehouses and manage delivery agents and orders for sellers also.

The agents will manage the deliveries via the Android/iOS mobile app.

### Additional Features of this App

*   Add delivery agents to manage deliveries for the orders received on your Shopify store.
*   Agents can easily access the orders received and manage deliveries via the Android/iOS mobile app.
*   You will have a complete order history to check past deliveries.
*   The delivery agent can accept/cancel order directly from the app.
*   Also, commission rules for delivery agents: Define how much your agents earn per order delivered.
*   The customer can track his/ her order.

Let’s understand the workflow.

### Installation

![feature](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/feature.png)

![delivery-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/delivery-6-1200x627.png)

Now once you have clicked on the “Enable” button you will be first asked to install and configure the “Delivery boy App by Webkul” app.

And as soon as you agree with this condition you will get the Delivery boy App installed on your store.

![image7](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/image7-1200x465.png)

### DELIVERY BOY CONFIGURATION

After the delivery boy integration app is enabled, go to "**Delivery boy configuration**" to enable the sellers to add their warehouses.  
  
**Go to configuration >> Delivery boy configuration**

![delivery-boy-ss1-](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/delivery-boy-ss1--1200x619.png)

Now, enable the "**Allow sellers to add their warehouse details**"

And paste your google map access token and select a distance unit from the dropdown.  
  
**Note**:- Google map access token is required for enabling delivery boy integration featured app.

![delivery-boy-ss2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/delivery-boy-ss2-1200x772.png)

  
After this, the seller will also enable the delivery boy integration from his/ her seller panel >> Configuration >> delivery boy configuration >> enable "delivery boy integration."

And click "SAVE" button.

![Screenshot-11](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/Screenshot-11.png)

![Screenshot1-8](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/Screenshot1-8.png)

By enabling the delivery boy integration, by default, the seller's address will be added as his/her warehouse address.

Now, if the seller wants to edit the warehouse address from their respective seller panel  
Profile >> My Account >> Scroll down.

And click on the "EDIT WAREHOUSE" button.

![Screenshot4-6](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/09/Screenshot4-6.png)

In warehouse detail, the seller needs to fill in his warehouse address, latitude, longitude, and proximity distance.

![delivery-boy-4.2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/delivery-boy-4.2-1200x968.png)

  
After the seller has added the warehouse then in the **delivery boy app by webkul**.

The admin/merchant has to enable "auto assign warehouse on order line item" option from settings >> general settings.

![editss](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/editss-1200x619.png)

After admin enable "auto assign the warehouse on order line item" the admin will manage that seller's orders from the delivery boy app for Shopify only.

### Warehouse management

Even, you can make any warehouse as default from the warehouse list so that,

By default, any ordered item will come in that warehouse only if the vendor is not found in order line item.  
  
Click on action in front of that warehouse and click “make default” button

![default-ware](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/default-ware-1200x868.png)

### Email/Push Notifications

In the app, you can manage notification settings. Visit the Click **Settings>> Notifications Settings**  
In "Select activity" dropdown, we have several options to select,

i.e. Warehouse assigned for order line item, order assigned to delivery agent, order rejected by delivery agent, order out for delivery, and order delivered to customer.

![new-update](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/new-update-1200x676.png)

After selecting the activity from the dropdown, click the **Configure Notification settings** button to configure the email notification which includes several fields

i.e.Name, Subject, message, status, and Target (it includes dropdown of merchant and customer)

![afterclicking-configure-notification-](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/afterclicking-configure-notification--1200x975.png)

Even, you can use placeholder variables to customize the email notification.

Like you can add customer name by customer.name shortcode, add agent name by add agent.name shortcode, etc.  
  

![image-190](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/image-190-1200x672.png)

For example, if the admin wants to edit the mail template for out for delivery and can order tracking link also in the mail template so that customer can track order from that tracking link.

Select "Order out for delivery" from the activity dropdown and click "Configure Notification settings"

![out-for-delivery-](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/out-for-delivery--1200x619.png)

Now, you have to enter the name of the notification, subject, message, active the status, targetted person for the mail.

And then click SAVE notification setting button below  
  
In the message box, you can use placeholder variables like in the below image.
```liquid
i.e. {{customer. name}} - to display customer name, {{order.name}} to display order name, {{tracking.link}} to display tracking link so that customer can track order from this link.

And same way for {{agent.contact}} and {{agent.vehicaleNumber}}  
```
![notifu-order-delivery](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/notifu-order-delivery-1111x1024.png)

Let's proceed to add agents to the app.

### Add Delivery Agents

You can easily add the delivery agents to the app for managing your store deliveries.

For this, you need to visit the “Delivery Agents” section of the app and click the “**Add Agent**” button to configure the agent’s account details.

![ss8](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/ss8-1200x563.png)

You need to add details of your agents such as **First Name, Last Name, Email ID, Mobile Number**, Address, latitude, and longitude.

Then You need to select the **vehicle type** for your delivery agent either **Bike** or **Cycle**. Now, enter the vehicle number using which the order is to be delivered by the agent.

Soon after you save the details, your delivery agent will receive an email (to the registered email ID) asking to reset the password.  
  

![add-agent-updated-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/add-agent-updated-1-847x1024.png)

Even, the admin can track the live location of their all agent. Just go to Delivery Agents and click on Track All Agent’s live location button.

![track1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/track1-1200x619.png)

![track2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/track2-1200x820.png)

### Order Listing

In the app, whenever a customer orders a product then you can see that order on the order listing page.

Just click on order in your delivery boy app, you will see the order listing page and have the option to accept/reject the orders from the listing and view the order detail also.

![accept-order](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/accept-order-1200x722.png)

### How to Assign Orders to the Delivery Agents?

As soon as a customer places an order, you will get it listed in the app as well.

In the Orders section of the app, you can check the orders received with the “Pending Approval” state.

Firstly, click the **Accept Order** button to accept the order and proceed further.

![accept-order-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/accept-order-1-1200x722.png)

  
Now, to assign an order to the delivery agent, you need to click on the “**View Details**” button to assign the ordered item to the delivery agent and to see the order detail.

![delivery-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/delivery-1-1200x627.png)

![view-detail-page](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/view-detail-page-594x1024.png)

In the order detail page, you have two options, either assign an ordered item to a particular delivery agent or assign all ordered line items to one delivery agent.

**To assign an ordered item to a particular delivery agent** – First tick on that ordered item and click on “Assign delivery agent”

And Even you can change the warehouse location also for that particular ordered item.

![delivery-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/delivery-2-1200x619.png)

Now, click on the “Assign order” button to assign the order to a delivery agent.

![delivery-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/delivery-3-1200x627.png)

  
In a similar way, **you can assign all ordered inline items to one delivery agent** – Tick the item checkbox which will select all ordered items, and click on “Assign order”

![delivery-5](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/delivery-5-1200x627.png)

![delivery-3-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/delivery-3-1-1200x627.png)

### Delivery agent order management

After assigning the order, the delivery agent can accept or reject the order, pick up the order, deliver the order and see other detail from his mobile app.

![screenshot_2022_07_01_12_03_50_924_com.shopifydeliveryboy.android](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/screenshot_2022_07_01_12_03_50_924_com.shopifydeliveryboy.android-473x1024.jpg)

![screenshot_2022_07_01_12_04_02_915_com.shopifydeliveryboy.android](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/screenshot_2022_07_01_12_04_02_915_com.shopifydeliveryboy.android-473x1024.jpg)

![screenshot_2022_07_01_12_04_15_844_com.shopifydeliveryboy.android](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/screenshot_2022_07_01_12_04_15_844_com.shopifydeliveryboy.android-473x1024.jpg)

When the order is out for delivery then also the admin can track the agent to check that, whether the agent has reached to customer's location or not.

Go to order >> click on the order which is "out for delivery" >> go to the delivery agent section >> click on three dots and then click track agent.  
  

![image1-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/image1-3-1200x671.png)

**Product delivered**

When the ordered product is delivered by the delivery agent then the admin has to "mark as delivered" and "mark commission as paid".

For that particular order then the status of the delivery agent is shown as paid.  
  
Go to the delivered Order section >> click the “view detail” button  

![view-detail-for-delivered-order](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/view-detail-for-delivered-order-1200x627.png)

For this, go to the delivered Order section >> click the “view detail” button >> Go to the Delivery agent section and click mark as delivered from option.

![image3](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/image3-1200x576.png)

Redirect to the same Delivery agent section and click "mark commission as paid"

![mask-as-paid](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/mask-as-paid-1200x627.png)

Then accordingly, paid/ unpaid status will be shown in the delivery agent list.

![paidunpaid](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/paidunpaid-1200x627.png)

### Membership Plans

The Delivery Boy app comes with three distinctive plans i.e. BASIC, PRO & Elite.

**Basic plan** charges **$5/month**:- You can add up to **2 delivery agents** to manage orders in your store.

**Pro plan** charges **$15/month**:- You can add **10 delivery agents** to manage orders in your store.  
  
**Elite plan** charges **$30/month** :- You can add 30 delivery agents to manage order in your store.

Also, you can allow delivery agents to manage unlimited orders using any of the three plans.

![tr5](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/06/tr5-1200x515.png)

### How to Install the Mobile App?

In the Mobile App section, we provide QR codes to scan and install the Delivery Boy Mobile app for the agents.

The mobile app is available for **Android** as well as **iOS** devices. All the necessary instructions are provided in the app.

![download-11](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/02/download-11-1200x573.png)

Once you scan and open the app, the below screen appears:-

![download-13](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/02/download-13.png)

In the Unique App ID field, you need to enter the code provided in the app (Refer to the below screenshot):-

![download-10](https://cdnblog.webkul.com/blog/wp-content/uploads/2021/02/download-10.png)

Additionally, you can create a demo for your shop on your mobile phone using the unique code provided in the app.

Now, you can use the app.

This is all about how to allow delivery agents to manage the order process using the app on your Shopify store.

Let’s understand the delivery agent’s interface i.e. Delivery Boy Mobile App.

### **Mobile App Dashboard:**

So, after installing the mobile app, the agents need to login to the app using the credentials

![Login ](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/Login-mock.png)

  
As soon as the agent login to the mobile app, he/she gets redirected to the app dashboard from where the can track ongoing sales.  
  
**Mobile App Dashboard:**

![dashboard](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/mobile_mock_1.png)

**Track the Orders:**

![orders](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/mobile_mock_2.png)

The side panel view to **check the order details** and **manage account settings**.

![mobile_mock_4](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/mobile_mock_4.png)

**Account Settings:  
**The agents can check their details from the “**Delivery Boy Details**” section of the mobile app.

![mobile_mock_6-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/mobile_mock_6-1.png)

![mobile_mock_5](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/05/mobile_mock_5.png)

**Adding payment** **method** – To add the payment method, the delivery agent will click on the Account setting.

![payment-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/payment-1-473x1024.png)

Now click on the Edit button in the payment detail section

![payment-2](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/payment-2-473x1024.png)

Enter the payment method detail and click SAVE button  

![payment-3](https://cdnblog.webkul.com/blog/wp-content/uploads/2022/07/payment-3-473x1024.png)

**Android Mobile Link**: [https://deliveryboy.webkul.com/images/mobikul/android.png](https://deliveryboy.webkul.com/images/mobikul/android.png)

**iOS Mobile Link**: [https://deliveryboy.webkul.com/images/mobikul/ios.png](https://deliveryboy.webkul.com/images/mobikul/ios.png)

### **How to install an IPA from the given link (iOS only)?**

####   
**Instruction**  
For installation in your device you can use either of the two options:

Open the URL in the iOS device and **install** it by clicking on the install option. OR

Open the URL in a web browser of your system, scan the QR code from an iOS device and wait for a minimum 30 seconds for a prompt.

After clicking on the prompt, you can install the app on your iOS device.

After installation: Go to **iPhone settings** → **General** → **Device Management** → Select **WEBKUL SOFTWARE PRIVATE LIMITED** → Click **TRUST**

**[GET THE APP](https://apps.shopify.com/delivery-boy) NOW!**

