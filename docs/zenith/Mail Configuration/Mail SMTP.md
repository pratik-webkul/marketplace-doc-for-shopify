---
title: Mail SMTP
description: Mail SMTP.
date: 2025-10-08
author: Chirag Tyagi
---


In this guide, we will explain how to configure mail using the Multi-vendor Marketplace App for Shopify: Mail Settings

You would have used the [Multivendor Marketplace App](https://webkul.com/blog/shopify-multivendor-marketplace-new-theme-launched/) for Shopify to convert your store into a full-fledged marketplace.

This app facilitates the process of adding sellers and keep track of their sales.

In the Multi-vendor Marketplace app, by default, all the mails send to customers or sellers will get delivered from the Webkul email address.

But in case you want to send the emails from your email address then, this is possible in the app via SMTP.

For this, you need to manage the **mail settings** menu of the app and you will be able to send all emails from your end.

### What is SMTP?

SMTP or Simple Mail Transfer Protocol is an application layer (TCP/IP) protocol that handles the process of mail exchange i.e sending & receiving emails.


**SMTP Fundamentals**


SMTP is an application layer protocol. The client who wants to send the mail opens a TCP connection to the SMTP server and then sends the mail across the connection. The SMTP server is always on listening mode. As soon as it listens for a TCP connection from any client, the SMTP process initiates a connection on that port (25). After successfully establishing the TCP connection the client process sends the mail instantly.

**SMTP Protocol**


The SMTP model is of two type : End-to-end method Store-and-forward method The end to end model is used to communicate between different organizations whereas the store and forward method are used within an organization. An SMTP client who wants to send the mail will contact the destination’s host SMTP directly in order to send the mail to the destination. The SMTP server will keep the mail to itself until it is successfully copied to the receiver’s SMTP. The client SMTP is the one which initiates the session let us call it as the client- SMTP and the server SMTP is the one which response to the session request and let us call it as receiver-SMTP. The client- SMTP will start the session and the receiver-SMTP will respond to the request.

**Model of SMTP system**


In the SMTP model user deals with the user agent (UA) for example Microsoft Outlook, Netscape, Mozilla etc. In order to exchange the mail using TCP, MTA is used. The users sending the mail do not have to deal with the MTA it is the responsibility of the system admin to set up the local MTA. The MTA maintains a small queue of emails so that it can schedule repeat delivery of mail in case the receiver is not available. The MTA delivers the mail to the mailboxes and the information can later be downloaded by the user agents. ![](https://cdnblog.webkul.com/blog/wp-content/uploads/2018/10/Blog-image.png)   Both the SMTP-client and SMTP-server should have 2 components: 1.User agent (UA) 2.Local MTA Communication between the sender and the receiver : The senders, user agent prepare the message and send it to the MTA. The MTA functioning is to transfer the mail across the network to the receivers MTA.

**SENDING EMAIL:**


Mail is sent by a series of request and response messages between the client and a server. The message which is sent across consists of a header and the body. A null line is used to terminate the mail header. Everything which is after the null line is considered a body of the message which is a sequence of ASCII characters. The message body contains the actual information read by the receipt.

**RECEIVING EMAIL:**


The user agent at the server side checks the mailboxes at a particular time of intervals. If any information is received it informs the user about the mail. When a user tries to read the mail it displays a list of emails with a short description of each mail in the mailbox. By selecting any of the mail user can view its contents on the terminal. SMTP is one of the most widely used and implemented an application. With the explosively growing reliance on electronic mail for commercial and personal services, there grows the demand for authentication and confidentiality. To complement the weak security feature of SMTP industry use PGP-SMIME-PEM. Still, there is a need of implementing the measures to eliminate spam and other security breaches.

> Please Note:- The admin needs to have an account on any mail server like MailChimp, sendgrid, etc.

To configure this feature, the admin will have their own email IDs in the "Email From" and "Reply-To" section of the Mail Settings.

### Mail Settings in the App

Admin can manage the mail details from the Mail Settings section of the admin panel.

Simply follow the procedure:

Visit "Mail Settings" section of admin panel>> Click on "Mail settings" >>Here, you can manage the mail details from your end.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/mailsetting.webp)

Once you click the "Mail settings", a page appears to you where you will manage mail details.

You will get all this information from the Email Engine you are using.

![image](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/mailsmtp-scaled.webp)

In this way, you can manage emails to be sent to the sellers. Now, the admin will configure the “email from”, “reply-to”, “from name” sections as per his/her choice.

Once you set all the mail details from your end, you can test it by sending the test mail.

### How to Get the SMTP Details?

In order to send the emails from your end, you need to synchronize your Gmail account with the multi-vendor.

For this, you need to add your email account details in the form of the SMTP server.

1\. Login into Gmail with your account  
2\. Navigate to [https://security.google.com/settings/security/apppasswords](https://security.google.com/settings/security/apppasswords)

3\. In 'Select app' choose 'custom', give it an arbitrary name, and press **Generate**.  
4\. It will give you 16 characters token.

**NOTE**:- You need to have an account on any SMTP service provider like Mailchimp etc. Or Gmail SMTP will too work if you want to send the emails from your end.

**In case you want to use Gmail SMTP then you can use the following:**

SMTP host: smtp.gmail.com  
SMTP username: Your Gmail Address

  
and, SMTP password: Your Gmail Password  
SMTP port number: SSL (465)

(TLS): 587

**NOTE**:- If you have activated the two-way authentication then, please enter the app's password while configuring SMTP.

Learn More:- [https://support.google.com/mail/?p=BadCredentials](https://support.google.com/mail/?p=BadCredentials)

In case you are using Sendgrid SMTP:
------------------------------------

If you have enabled "IP access management" On your Sendgrid account, please make sure to whitelist these IPs:

**54.255.33.47**

**18.138.8.137**

**47.129.250.24**

**54.179.1.53**

**18.136.7.41**

**13.229.6.57**

**18.138.9.81**

**52.74.127.6**

**13.228.91.147**

**13.250.79.108**

**13.229.100.249**

**52.220.12.7**

**3.1.34.177**

**Difference between TLS & SSL?**
---------------------------------

There is just a minor difference between TLS and SSL.

Both come with different standards but are used to authenticate the transfer of data between servers, systems, applications, and users.

TLS is the upgraded version of SSL as it uses stronger encryption algorithms as compared to SSL and also has the ability to work on various ports.

[**Know more about SMTP**](https://webkul.com/blog/what-is-smtp-and-working-of-the-smtp/)

DEMO
----

[https://multivendor-marketplace-5.myshopify.com](https://multivendor-marketplace-5.myshopify.com)

