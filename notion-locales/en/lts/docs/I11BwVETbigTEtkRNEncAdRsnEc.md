---
title: System Introduction
slug: I11BwVETbigTEtkRNEncAdRsnEc
sidebar_position: 1
---


# System Introduction

# System Introduction

PageHub is a visual page-building tool provided by Whale that enables operations and campaign personnel to construct marketing-related H5 web pages via a drag-and-drop component configuration interface, without requiring technical development; once configuration is complete, pages can be published and made live.

<img src="/assets/OM3Wblo0Uo8vdYxEuTpj7YYEp1r.png" src-width="2782" src-height="2032" align="center"/>

# Page Management

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>⚓ Menu path: Operations System &gt; PageHub</p>
</div>

<img src="/assets/FyO2baCtkof3cXxTcPajyEBipHd.png" src-width="2758" src-height="1420" align="center"/>

This module manages and maintains pages created using PageHub. The page functions are described as follows:

- Functional Area
    - Search Box
        <img src="/assets/B012biWqmop6F6xVqPhjDvglpEd.png" src-width="1280" src-height="554" align="center"/>
        - Enter title, page URL, sequence number, or filter by publication status to search.
    - Create New Page
        <img src="/assets/ATFMbLgWzoozkrxWoUcjlNdypwf.png" src-width="1280" src-height="554" align="center"/>
        - Click "Create New Page"

- List
    - Sequence Number
        <img src="/assets/Kq81bSaK1o4Ubbx05FMjRC50p77.png" src-width="2276" src-height="1330" align="center"/>
        - Page sequence number
    - Title
        <img src="/assets/DNOBbytrMoPBskxRRK7jP1VNpCe.png" src-width="2244" src-height="1318" align="center"/>
        - Page title: the name displayed in the header title bar when a custom page is configured and opened
    - Publication Status
        <img src="/assets/MRCEbWCXGowntrxtyRGjzU8xpdf.png" src-width="2256" src-height="1308" align="center"/>
        - Unpublished: the page is in draft status and must be published to take effect
        - Published: the page is in this status after a successful publish action; pages in this status are active immediately
        - Publish Failed: the page failed to publish for various reasons after the publish button was clicked
    - Page Address
        <img src="/assets/WVQRbPeF9oa3EAxr6XgjVGKHpTe.png" src-width="3306" src-height="918" align="center"/>
        <img src="/assets/Uv3xbVA5YoXclZxZGtFjstC2pxg.png" src-width="3286" src-height="1002" align="center"/>
        - Displays the link and a QR code; you can copy the link to open a preview directly or scan the QR code to preview
    - Creator
        - Name of the user who created the page
    - Last Publish Time
        <img src="/assets/NSB1bR7wbo1Jajx9MSEjR8hpp0b.png" src-width="2224" src-height="1284" align="center"/>
        - Time of the most recent publish/update
    - Actions
        <img src="/assets/XDA5bWlGPoqTJUxw7hsjav8hpvh.png" src-width="2248" src-height="1256" align="center"/>
        - Edit: click to open and edit the current page
        - Copy: click to duplicate the current page content and create/open a new page
        - Delete: delete the current page (use with caution)

# Page Components

<b>Component Tree / Asset Library:</b> The component tree displays the list of components currently configured on the page; click a component name to edit its configuration. The asset library contains all configurable component types; clicking or dragging a component type will automatically add it to the preview page.

<img src="/assets/Sj2WbNFhmokO3Lx0DOsjqsmxpve.png" src-width="664" src-height="754" align="center"/>

<img src="/assets/Vex7bJVUQozMIBx4rCkj6IXQpyc.png" src-width="690" src-height="1268" align="center"/>

<b>Navigation Header:</b> You can set the navigation background color, the link to navigate to when the logo is clicked, and actions available on the right side of the navigation.

<img src="/assets/RpI6bPusuokz7hxiFuOjL5zKpje.png" src-width="3828" src-height="1946" align="center"/>

<b>Image:</b> Supports uploading images or specifying an image URL; there is no size limit.

<img src="/assets/FCQyb5TzCoPpQFxPJqajpfVUpzc.png" src-width="3822" src-height="1928" align="center"/>

<b>Hot Zones:</b>

- Link sharing: when a user clicks, the share link is copied to the clipboard
- Poster sharing: when a user clicks, a poster is generated based on the configured image; the poster can be downloaded and shared
- Face-to-face sharing: when a user clicks, a QR code is generated from the configured image, which can be screenshotted or scanned to share
- Open Account: click to navigate to the account opening page
- Deposit: click to navigate to the deposit page
- Transfer: click to navigate to the transfer page
- Redirect Link: click to navigate to a custom configured link
- Open Account → Deposit → Link: if the user has not opened an account, redirect to account opening; if the user has opened an account, redirect to the deposit page; after deposit is completed, redirect directly to the configured link

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>💡 A single hot zone can be configured with multiple click events.</p>
</div>

<img src="/assets/QntYb3ID9okONNxJ6HWjE4Zlpde.png" src-width="3812" src-height="1942" align="center"/>

<b>Button Group:</b>

1. Supported button click events:

Link sharing: when a user clicks, the share link is copied to the clipboard

```text
- Poster sharing: when a user clicks, a poster is generated based on the configured image; the poster can be downloaded and shared
- Face-to-face sharing: when a user clicks, a QR code is generated from the configured image, which can be screenshotted or scanned to share
- Open Account: click to navigate to the account opening page
- Deposit: click to navigate to the deposit page
- Transfer: click to navigate to the transfer page
- Redirect Link: click to navigate to a custom configured link
- Open Account → Deposit → Link: if the user has not opened an account, redirect to account opening; if the user has opened an account, redirect to the deposit page; after deposit is completed, redirect directly to the configured link

1. File Link Configuration

If a button needs to include a hyperlink, such as for terms and conditions, you can set the text and the target link here


 b. Other Configuration
```

Floating fixed to bottom: if selected, the button remains displayed at the bottom of the page while the user scrolls

Component background color: set the background color of the component area surrounding the buttons

<img src="/assets/BDSabzP8eo6HO0xsUeAj7QYHpxc.png" src-width="3792" src-height="1948" align="center"/>

<b>Spacer:</b> Adjust the vertical spacing between components

<img src="/assets/Nzr0bmH8FoG0UDxHj35jVtO8pXd.png" src-width="3810" src-height="1952" align="center"/>

<b>My Performance:</b>

<img src="/assets/CuTibcjqKozlwixSMopjXfQ8pHh.png" src-width="3824" src-height="1918" align="center"/>

<b>Assist to Earn Rewards:</b>

<img src="/assets/OiYQb6oMTophfSxu4VXjFz0VpVb.png" src-width="3786" src-height="1868" align="center"/>

<b>Component Quick Actions:</b> Components in the preview area support moving up and down, copying, and deleting.

<img src="/assets/Y1NmbtNvvox5CyxHOisjRgOspXd.png" src-width="2406" src-height="1832" align="center"/>

# Page Configuration

The page configuration area includes parameters for: multilingual settings, applicable regions, activity settings, UI configuration, link parameters, and sharing settings, as shown below:

<img src="/assets/O5g7b4x4nokVHCxdA0ujEKdmpte.png" src-width="696" src-height="632" align="center"/>

- <b>Multilingual Settings:</b> Configure the languages and page titles the current page should support; quick switching is also supported.
    <img src="/assets/ZeOubBJ0aoNvebxSVxqjblu0pFd.png" src-width="800" src-height="356" align="center"/>

- <b>Applicable Region Settings:</b> Configure which IP regions can access the current page. There are three options: No restriction, Supported Regions Only, and Excluded Regions.
    - No restriction: the page is accessible from IPs in any region
    - Supported Regions Only: only IPs from the configured regions can access the page
    - Excluded Regions: IPs from the configured regions cannot access the page

- <b>Activity Settings:</b> Configure whether the current page requires login to access
    - No login required: users can access the page without logging in
    - Universal Login Page: users must log in via the universal login page to access the page

- <b>UI Configuration:</b> Configure the page background color
- <b>Link Parameter Configuration:</b> Configure channel IDs for links. If you need to distinguish traffic sources for analytics, you can configure a dedicated channel ID; otherwise, this field may be left blank.
- <b>Share Configuration:</b> Settings for the page's sharing functionality
    - Link sharing mode: when users initiate sharing, the link is copied or shared directly; you can configure a share title and description for the link. The share link can be configured separately; if not configured, the current page link is used by default. If configured, the configured link will be shared. The share thumbnail is displayed on platforms (e.g., WeChat) that show thumbnails.
    - Face-to-face sharing mode: when users initiate sharing, an image containing a QR code pops up; it can be screenshotted or scanned in person to open the corresponding page. A background image for the QR code popup must be configured.
    - Poster sharing mode: when users initiate sharing, a poster is displayed that can be screenshotted or shared directly. You can configure a share title and description for the poster. A poster image must be configured.

