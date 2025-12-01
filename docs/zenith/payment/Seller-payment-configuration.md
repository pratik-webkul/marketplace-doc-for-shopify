---
title: Seller Payment Configuration
description: Seller Payment Configuration
date: 2025-07-10
author: Chirag Tyagi
---



# Seller Payment Configuration in Shopify Multivendor Marketplace

Managing payments efficiently is a critical part of any online marketplace. As an admin using the [Shopify Multivendor Marketplace app by Webkul](https://marketplace-doc.webkul.com/classic/Introduction/), it’s essential to have full control over seller earnings, deductions (like transaction and handling charges), and how discounts affect those calculations.

In this guide, we’ll walk you through all key aspects of Seller Payment Configuration, including how to manage:

- Transaction & Handling Charges  
- Discounts on Orders  
- Seller Due Earnings  
- Commission Calculations  
- Payment Methods, Shipping, and Taxes Configuration

Let’s dive into each feature in detail.

---

## 1. Seller Payment Configuration

This section allows the admin to set up **Payment Methods**, **Shipping Cost**, and **Tax Distribution Rules** for sellers.

### Configure Seller Payment Methods

Admins can configure available payment methods which will also be visible to sellers. This helps manage how sellers are paid within the marketplace.

You can also configure how **shipping costs** and **taxes** should be shared between the admin and the seller, allowing for flexible and customizable payout structures.

![payment](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/sellerpayment.webp)  
![methods](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/paymentmethods.webp)  
![settings](http://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/paymentsetting-scaled.webp)  
![autopay](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/autopaysetting.webp)

To learn more about the full seller payment workflow, check the [Complete Payment Flow of the Multivendor Marketplace App](https://marketplace-doc.webkul.com/classic/payment/overview.html).

---

## 2. Handling & Transaction Charges

Handling and transaction charges play a key role in determining seller and admin earnings. Let's first understand what these charges are.

### What is a Handling Charge?

Handling charges cover seller's operational costs packaging, fulfillment, and shipping. It’s applied in addition to the product price and shipping fee.

### What is a Transaction Charge?

Transaction charges are the fees levied by payment service providers for processing online payments.

By default, merchants usually bear these charges. But with the Sales Price and Transaction Charges features in the app, you can define who pays what.

---

## 3. Enabling Sales Price Configuration

**Steps:**

Go to: Admin Panel >> Configuration >> Product Configuration >> Enable "Sales Price"

Once enabled, you’ll get the option to add:

- Handling Charges  
- Transaction Charges  

![Sales Price](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/displaysalesprice.webp)

---

### Sales Price Calculation Example

Let’s say:

- Base Price = $100  
- Commission = 10%  
- Handling Fee = $10  
- Transaction Fee = 10% + $5  

**Sales Price = {(100 + 10%) + 10} + (10% + 5) = $137**

![Handling Charges](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/priceddetails.webp)

---

## 4. Manage Transaction Charges on Orders

You can define whether the admin or the seller will bear the transaction charge on every order.

**Steps:**

Go to: Admin Panel >> Configuration >> Product Configuration >> Enable "Transaction Charges"

Then configure:

- Transaction Charges to be Paid By: Admin / Seller  
- Type: Percentage or Fixed Amount  
- Basis: Product-wise / Seller-wise / Order-wise

---

### Real-life Example

Suppose:

- Product A = $100  
- Commission = 10%  
- Transaction Charge = 10%

| Case         | Admin Earning | Seller Earning |
|--------------|----------------|----------------|
| Admin Bears  | $10            | $90            |
| Seller Bears | $20            | $80            |

**Note:**  
- If Sales Price is ON, admin bears transaction charge.  
- If Sales Price is OFF, you can assign it to seller/admin based on product/seller/order.

---

## 5. Managing Discounts on Orders

Discounts can affect seller earnings and admin commissions. You can configure how discounts are applied and who bears them.

### Configuration Path

Go to: Admin Panel >> Payment >> Seller Payment Configuration >> Enable "Manage Discount on Order"

Once enabled, configure the following:

- Discount Charges: Admin / Seller / No One  
- Commission Calculated On: Actual Price / Discounted Price  
- Discount on Shipping: Admin / Seller

![Discount Setting](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/discountcharges.webp)

---

### Use Cases

#### Seller Bears Discount + Commission on Actual Price

Commission is calculated on the full price and deducted from seller’s earning.

#### Seller Bears Discount + Commission on Discounted Price

Commission is calculated on the discounted amount. Seller’s earning reduces but less commission is applied.

#### Admin Bears Discount + Commission on Actual Price

Admin absorbs discount. Seller’s commission is still based on original price.

#### Admin Bears Discount + Commission on Discounted Price

Only commission based on discounted price is deducted from seller's earning.

---

### "No One" Option for Discount Charges

By selecting the "No One" option, the admin ensures that both the commission and earnings are calculated based on the discounted price only.

This simplifies calculations and keeps things consistent.

![no one](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/discountchargesnoone.webp)

---

### Wallet App Compatibility

The [Wallet Management App](https://apps.shopify.com/wallet-management) is compatible with this discount flow. Discounts given through wallet will reflect in seller/customer invoices.

**Important:**  
If you've saved older invoice templates, reset or [request support](https://webkul.uvdesk.com/en/customer/login) to display "Pay via Wallet" properly.

---

## 6. Seller Total Due Earning

Admins can configure when seller earnings are added to the Total Due Amount.

**Steps:**

Go to: Admin Panel → Configuration → Payment Configuration

Update seller earnings based on these order events:

- Order placed  
- Order paid  
- Order delivered  
- Refund days completed  

![seller earning config](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/totaldueearning-1.webp)

**Note:**  
To add earnings post-refund period, enable [Cashable Amount for Sellers](https://marketplace-doc.webkul.com/classic/payment/Paypal.html#pay-after-refund-date).

---

### Display Seller’s Due on Dashboard

Let your sellers see their total due earnings from their dashboard.

**Steps:**

Admin Panel >> Configuration >> Seller Configuration >> Enable “ALLOW SELLER TO VIEW TOTAL DUE”

![seller dashboard](https://cdnblog.webkul.com/blog/wp-content/uploads/2025/10/totaldue-1.webp)



We hope this guide helped you understand the complete flow of seller payment configuration in the Shopify Multivendor Marketplace App by Webkul.

[Explore the app](https://marketplace-doc.webkul.com/classic/Introduction/)
