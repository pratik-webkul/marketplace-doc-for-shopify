---
title: Multivendor API
description: Multivendor API
date: 2025-07-25
author: Chirag Tyagi
---

Here we are with the [Multivendor Marketplace](https://marketplace-doc.webkul.com/classic/Introduction/) app for Shopify: Multi-vendor API.

**API** stands for Application programming interface which is a set of tools and protocols that will help you building sync and much more.

Till now, you were using the API Version 1 to allow users to access the Multi-vendor APIs in [Multi-vendor Marketplace app](https://marketplace-doc.webkul.com/classic/Introduction/) for Shopify.

Now, we have introduced the **Multi-vendor API Version 2**.

With this upgraded version, you can allow the sellers to get access to Multi-vendor APIs and let them check the responses for various actions performed in the app.

**Please note: -**  
_The Multivendor API is currently not supported on JS or any other client-side implementation._

You have to enable this API feature from the feature app section so that you can access the API.

Moreover, this feature will have additional charges of USD15 per month over and above your current multivendor plan.

Let's understand this in detail.

**ENABLE API FEATURE**
----------------------

To enable the API feature you will have to visit **features app s**ection of the app. Find this app in the Multivendor Marketplace feature app section.

You have to enable this API feature from the featured app section so that you can access the API.

Besides that, this will have additional charges of USD15 per month over and above your current multivendor plan.

![Multivendor API](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/08/31111725/Screenshot-23.png)

Click the **ENABLE** button to activate the Multi-vendor API feature app.

### Features of Multi-vendor API Version 2

*   Admin can **add multiple users** and **generate API credentials** to let them access Multi-vendor API for version 2.
*   Admin can **assign permissions** to users for various resources such as Products, Orders & Account Info.
*   From the **Seller Listing** section, admin can **generate API credentials** for the sellers.
*   Sellers will get the access token & refresh token from their respective "**My Account**" sections.
*   After that, the seller will get **access to the Multi-vendor API** for the permitted fields.

**[Multi-vendor API Doc](https://mvmapi.webkul.com/)** [](https://mvmapi.webkul.com/)will be provided to the admin in the app.

> Please Note:-  
> 1\. With the upgraded Multi-vendor API version 2, You can allow both Users & sellers to access the API with desired permissions.
> 
> So, the provided API credentials will work separately for both of them i.e.
> 
> User will have the permission to access admin's data while the sellers will be permitted to access their own seller panel data.  It's all depends on the assigned permissions.
> 
> 2\. The API rate limit is 2 API calls per second

### API Doc

API Doc includes all the URLs listed in POST, GET, PUT & DELETE method.

**POST Method** of the API is where developers can interface with other API or system to get the desired outcome. It is more often utilized to create new resources.

**GET Method** of API is to read or retrieve a representation of a resource or information.

**PUT Method** of the API is where developers can interface with other API or system to get the desired outcome. It is more often utilized to update existing resources.

**DELETE Method** of API is to delete resources from the database.

![AwesomeScreenshot-shopify-trunk-webkul-mvmapi-2019-07-31_2_45](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/31091605/AwesomeScreenshot-shopify-trunk-webkul-mvmapi-2019-07-31_2_45.png)

**Base URL**: [https://mvmapi.webkul.com](https://mvmapi.webkul.com/)

### How to Add Users?

As soon as you enable the Multi-vendor API feature app, the **Multi-vendor API** menu gets reflected in the side menu of the admin panel.

![AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_2_50-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/31092103/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_2_50-1.png)

Clicking this button, You will be redirected to the API Credentials section. Just click the "**Add User**" button & fill the details to add users & assign permissions to them.

![AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_2_56](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/31092703/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_2_56.png)

Clicking the **Add User** button, you need to fill the User details such as User name, user email, and password.

![AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_3_16](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/31094724/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_3_16.png)

Now, click the **Continue** button to set the resource permission for the API. Click the checkboxes to assign permission to the users for various resources.

![AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_3_23](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/07/31095410/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_3_23.png)

Now, click the **Save** button to save the settings.

This way, you can add user & assign certain permissions to let him/her access the Multi-vendor API. You can anytime **disable** or **revoke** the user as per the requirement.

![added user](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/08/31115820/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_5_27.png)

Now, let's see how the marketplace sellers will get access to multi-vendor APIs.

### How to Allow Sellers to Get Access to APIs?

#### **ADMIN PANEL**

With this new API Version 2, You can allow sellers to get the API credentials & let them access Multi-vendor APIs with limited permissions.

You need to follow the below-given steps:-

*   Visit the **Sellers** section of the Multi-vendor app.
*   Click the **Seller Listing** menu.
*   Select the seller to which you want to permit the API access.

![select sellers](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/08/31112716/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_4_44.png)

*   Visiting the Edit Seller section of the app, scroll down to the bottom to get the option to Generate API credentials for your sellers.
*   Click the **Generate API Credentials** button & generate the tokens to access the APIs.

![generate credentails](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/08/31113157/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-07-31_5_01.png)

As soon as the admin clicks the Generate API credentials button, a pop-up appears and you will be asked to set resource permissions for your sellers. Enable the **checkbox** to assign permission.

![AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-08-01_11_20](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/01055043/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-08-01_11_20.png)

Clicking the **Save** button, a unique access token gets generated for the seller that will reflect at the seller side too.

Now, once you generate the credentials & enable the checkbox "**Send Notification to Seller**", the sellers will receive an email regarding the same.

Later if required, admin can update the token. He needs to click the "**Update Permissions**" button and then, click the "**Save**" button to get a new access token.

![token](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Edit-Seller-Admin-1200x597.png)

Now, click the **SAVE** button.

![permission](https://cdnblog.webkul.com/blog/wp-content/uploads/2020/08/Edit-Seller-Admin-1-1200x551.png)

> **POINT TO BE NOTED**
> 
> Once you update the permission and click the Save Changes button, a new access token gets generated.
> 
> So, make sure that you have checked the checkbox "**Send Notification to Seller**" to send an automatic mail to notifiy the seller about the new update.

You will have the option to configure the email from the "Mail Configuration" menu of the app.

![AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-08-01_11_24](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/01055514/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-admin-index.php-2019-08-01_11_24.png)

This way, you can generate API credentials for the sellers.

**SELLER PANEL**
----------------

To get the API credentials, the seller needs to visit his "**My Account**" section of his/her seller panel. 

![Seller end-My Account](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/08/31113646/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-index.php-2019-07-31_5_06.png)

In the **My Account** section, the seller will get the API credentials. 

![Api credential for sellers](https://cdnblog.webkul.com/blog/wp-content/uploads/2017/08/31115035/AwesomeScreenshot-shopify-trunk-webkul-shopify-mp-index.php-2019-07-31_5_19.png)

Now, the seller will get the Multi-vendor API access to check the response of certain actions. 

IMPORTANT NOTE
--------------

Access Token Validity:-

> The unique access token will be valid for  
> **1 YEAR** for the **Users**  
> **30 DAYS** for the **sellers.**  

Refresh Token Validity:-

> The refresh token will be valid for  
> **2 YEARS** for both Users & Sellers.

### How to check the response?

Using the provided API credentials, both users and sellers can check responses for specific actions performed in the app.

After you share the API documentation with the user or seller, they can view the responses by following these steps:

1.  Open the API documentation.
2.  Click the **Authorize** button.

![AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_28](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/01065907/AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_28.png)

*   Clicking the Authorize button, get the option to enter the value as **Bearer {access\_token}** and click the **Authorize** button.  
    **NOTE**: The value that needs to be entered in the box: **Bearer {access\_token}**. You need to add 'Bearer' prior to the access token. Here is an example: **Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9**

![AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_35](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/01070552/AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_35.png)

*   Click the **Done** button.

![AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_36](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/01070715/AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_36.png)

*   Now, the seller/user will open any of the resources to check the response.

![AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_42](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/01071313/AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_42.png)

*   Click the **Try it out** button to check the action.

![AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_40-1](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/01071146/AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_40-1.png)

*   Lastly, click the **Execute** button.

![AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_44](https://cdnblog.webkul.com/blog/wp-content/uploads/2019/08/01071528/AwesomeScreenshot-mvmapi-webkul-2019-08-01_12_44.png)

This way, the seller/user can get the response for different actions performed in the app.

That's all about the Multi-vendor API feature app.

### Demo

[https://multivendor-marketplace-4.myshopify.com/pages/demo](https://multivendor-marketplace-4.myshopify.com/pages/demo)

