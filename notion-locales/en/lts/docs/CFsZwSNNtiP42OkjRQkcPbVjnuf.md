---
title: Layout and Component Function Description
slug: CFsZwSNNtiP42OkjRQkcPbVjnuf
sidebar_position: 0
---


# Layout and Component Function Description

# Layout and Component Function Description

# Objective

<div class="callout callout-bg-5 callout-border-5 callout-color-1">
<div class='callout-emoji'>🎁</div>
<p>Instructions for using component tools and layout features on the desktop client (Custom Layout, Responsive Layout)</p>
</div>

# Terminology

# 1. Component Description

## 1.1 Unit Components

Unit components, also called "atomic components," are components that minimally carry a single function. Currently, features such as market quotes and tick-by-tick trades are implemented as unit components.

The advantage is that users can assemble the unit components to create the scenarios they need, or detached unit components can still provide value—for example, dragging a watchlist or a stock chart next to a news feed for simultaneous viewing.

## 1.2 Business Components

- Business components are composed of multiple unit components to carry a specific business function.
- The benefit of business components is that they satisfy most scenarios by allowing the user to add a single component to meet their needs, instead of repeatedly adding multiple unit components.
- For example, Mini Quotes is a business component that combines market quotes, tick-by-tick trades, buy/sell order book, and broker seat information.

# 2. Component Operations

## 2.1 Single Component Operations

### 2.1.1 Adding Components

A toolbox entry is added at the upper right, aggregating all functional components. Users can click to add a component or drag it into the current panel.

### 2.1.2 Resizing Components Freely

Each component’s width and height can be freely adjusted by dragging. Components can be resized and compressed at their edges.

### 2.1.3 Upper‑Right Component Controls

- Copy: Click Copy to duplicate the current component and generate a new component displayed in a detached window.
- Maximize: Click to maximize the component to fill its container; click the restore button in the upper right to return the component to its default size.
- Detach: Click Detach to move the component out of the current window into an independent window; this is useful for keeping a small view visible while using other software.
- Remove: Click Remove to delete the current component.

If a component was removed or dragged by mistake, you can click “Reset Layout” at the bottom of the component toolbox within the system panels (Watchlist, Stock Detail, Market, Trading, Screener). Custom panels do not allow layout reset.

## 2.2 Component Linkage (Interactivity)

### 2.2.1 Custom Linkage Groups

Components in system panels are linked by default and currently do not support custom linkage groups. Newly created custom panels and detached components allow users to define linkage groups, divided as follows:

- Default linkage: all components are linked without setting groups.
- No linkage: selected components or symbols are not linked.
- Linkage Group 1, Linkage Group 2 … Linkage Group 9: after enabling linkage, the component header will indicate the current linkage group; components in the same group will link automatically.
- Components in a newly created layout default to not linked; users must decide whether to set linkage groups.

### 2.2.2 Linkage Parameters

- Stock linkage: for example, charts and trading components are linked by stock; currently, most components support stock linkage.
- Currency linkage: for example, the currency field in Asset Overview links by default with the financing status and cash details components.

### 2.2.3 Unidirectional and Bidirectional Linkage

- Currently, existing linkage is bidirectional: clicking component A will also trigger linked component B, and vice versa.
- Unidirectional linkage: linkage flows in one direction—clicking component A affects component B, but not the reverse. There are no current business scenarios requiring this; it will be added progressively.

## 2.3 Component Header Search

Component headers include a search feature in scenarios such as:

- Some components have a stock‑symbol attribute, e.g., charts, order book, market quotes, tick-by-tick trades, and mini quotes.
- When these symbol-enabled components are detached, their headers include a stock search to facilitate symbol switching.
- Newly opened custom pages also include search in the headers of components that carry a stock‑symbol attribute to enable convenient symbol changes.

## 2.4 Component Pinning

When a component is detached, clicking other software or the main window can cause the component to be covered. If you need the component to remain on top, click the pin icon in the upper right to fix the component and keep it floating above other windows.

To cancel pinning, click the pin again to remove the topmost layer setting.

# 3. Page Layouts

## 3.1 System Panels, Custom Layouts, and Responsive Panels

- System Panels: Default system panels include Watchlist, Stock Detail, Market, Trading, and Screener. System panel menus are not editable or removable, but component layout and content within the panels can be freely adjusted.
- Responsive Layout: When components are placed in a responsive layout, resizing one component will automatically compress surrounding components. If a panel contains only one component, that component will by default fill the entire panel. Responsive layouts automatically adapt to different screen sizes and allow component sizes to adjust relative to each other.
- Custom Panels (Canvas Layout): Users can create custom panel layouts and position components according to personal preference. Component sizes are relatively fixed; the window can be resized and moved.

- Preview images
    - Responsive Layout: (preview)
    - Custom Layout (Canvas): (preview)

## 3.2 Entering a Responsive Layout

- Responsive layout entry: Click New Tab, choose between two layout options, select “Responsive Layout,” and click the empty layout to open the responsive layout workspace.
    Steps:
(1) Click the “+” on the right side of the menu bar to select a layout; (2) choose “Responsive Layout”; (3) select “Empty Layout.”

## 3.3 Entering a Custom Layout (Canvas)

- Custom layout (canvas) entry: Click New Tab, choose between two layout options, select “Custom Layout,” and click the empty layout to open the custom canvas.
    Steps:
(1) Click the “+” on the right side of the menu bar to select a layout; (2) choose “Custom Layout”; (3) select “Empty Layout.”

## 3.4 Adding Components to a Layout

- Custom Layout: After opening a new tab, the component toolbox appears on the page. Select the desired components and drag them into the layout workspace.
- Responsive Layout:

(1) Click to add the appropriate component to invoke the functional module. For example, click the “Chart” component to open the chart configuration dialog.

(2) You can also select the “Chart” component with the mouse and drag it into the current panel. If the panel contains only one component, that component will currently fill the panel.

(3) Similarly, add other components by dragging them into the panel. A highlighted area indicates the drop location. For example, dragging the Market Quotes component to the chart header will show a highlighted border on the chart header; releasing the drag will place Market Quotes above the chart. Click between the Market Quotes component and the chart to compress and adjust their relative sizes.

(4) You can combine the component operations described above—component linkage, header search, pinning, and other features—to perform coordinated operations according to your needs.

