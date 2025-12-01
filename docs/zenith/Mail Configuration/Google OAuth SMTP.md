---
title: Mail SMTP
description: Mail SMTP.
date: 2025-10-08
author: Chirag Tyagi
---

In this guide, we have explained the step by step directions to setup **Google OAuth SMTP Configuration** in [Multivendor Marketplace App For shopify](https://store.webkul.com/Shopify-Multi-Vendor-Marketplace.html) .

This feature allows you to set up your own SMTP to send emails directly from your mail server, giving you full control over the communication process with your customers.

With this setup, you can ensure that Marketplace related notifications, such as order updates and announcements, are sent seamlessly from your own email engine.

Enhancing your brand’s credibility and customer experience.

![select google smtp oauth](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/select-google-1200x484.webp)

To configure Google OAuth SMTP for your Marketplace App, navigate to the Mail setting section. From there, select **Mail Type** as **Google OAuth** to set up your custom email server.

Here you have to enter the details of your own SMTP like Client ID and Client Secrete .

![google oauth -smtp](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/google-smtp-1200x539.webp)

### How to get Google OAuth SMTP details ?

To get the Google OAuth SMTP details simply visit [Google console](https://console.cloud.google.com/) and create a new project .

![smtp library](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/library-1200x474.webp)

Then go to API & Services and navigate to Library and search for Gmail API and enable it.

![smtp-gmail-api](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/gmail-api-1200x620.webp)

After that you have to click on create credential to get client id and client secret .

![smtp-create-credentails](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/create-credentials-1200x474.webp)

Next, under **Credential Type**, select **Gmail API**. For **Data Access**, choose **User Data** and click **Next** to proceed with the configuration.

![smtp-user-data](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/gmail-user-data-1200x685.webp)

In the next step, enter a name for your API under **App Information** and provide the required details. Once done, click **Save and Continue** to proceed.

![smtp-api-name](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/api-name-1200x740.webp)

On the **OAuth Client ID** page, select **Application Type** as **Web Application**. Enter redirect URL **Provided Below** or mentioned on the Marketplace app .

![smtp-oauct-client-id](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/oauth-client-id-1200x756.webp)

**Authorized redirect URL**: [_https://sp-seller.webkul.com/admin/index.php?p=admin\_oauth\_token_](https://sp-seller.webkul.com/admin/index.php?p=admin_oauth_token)

**Authorised JavaScript origin:** _[https://sp-seller.webkul.com](https://sp-seller.webkul.com/)_

After entering the given URL, click **Create** to generate your Client ID.

![google oauth-url](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/enter-url.webp)

How to add Scopes in google oauth ?
-----------------------------------

To properly authenticate and interact with Google services, you must enable the necessary API scopes. Follow these steps:

1.  Navigate to **Google Auth Platform > Data access**.
2.  Click on **ADD OR REMOVE SCOPES**.
3.  Select the required scope for your application. For example, if your application needs Gmail access, you must enable `https://mail.google.com/`.
4.  Save the changes and refresh the page.

![smtp-scope](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/smtp-scope-1200x483.webp)

These scopes define the permissions that your app needs from the user. Missing or incorrect scopes may lead to authentication issues.

How to Get Client ID and Client Secret ?
----------------------------------------

Here after creating this you will get your **client id** there click on **Done.**

![smtp-oauth-client-id](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/client-id-1200x676.webp)

After clicking **Done**, you’ll receive your **Client ID** and **Client Secret** needed to configure your Google OAuth SMTP. You can copy your Client ID and Client Secret from here .

![oauth-client-secret](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/client-secret-1200x575.webp)

Click on save button to continue .

After setting up your project, go to **OAuth Consent Screen** and configure your app’s audience.

**Select Audience Type**: You have two options:

![smtp-select-audience](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/smtp-select-user-1200x553.webp)

Once you've selected **External**, your app will start in testing mode. To make it accessible to all users, you need to publish it:

Once published, your app will **then** require verification **before it can finally** be used in production.

Go to the **Audience** section in Google Auth Platform.

Locate the **Publishing Status** and click on **Publish App**.

![smtp-publish status](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/smtp-publish-status-1200x520.webp)

After completing the previous steps, you need to create or add a test user to configure your Google OAuth SMTP.

Note : Test mode allows testing with limited users and a shorter refresh token lifetime( 7 Days ) , while production mode requires verification and is intended for public apps with wider user access. 

To do this, click on **OAuth Consent Screen**, then select **Add Test User**. Add the test user from there(You have to enter the same mail here from which you are configuring this SMTP) .

![test user](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/add-user-1200x586.webp)

Now, simply go to your SMTP configuration page, enter the Client ID, Client Secret, and the remaining details, then click “Save” to configure your SMTP.

![final](https://cdnblog.webkul.com/blog/wp-content/uploads/2024/10/final-1-1200x581.webp)

**NOTE:** When configuring Google OAuth for your SMTP server,

**it is important to note that** any emails sent **prior to** the completion of the configuration **will still** be processed by your previous SMTP host server.

Once you finalize the Google OAuth SMTP configuration, the newly configured Google OAuth SMTP server will send all future emails.
