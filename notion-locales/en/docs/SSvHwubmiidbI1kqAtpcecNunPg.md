---
title: System Introduction
slug: SSvHwubmiidbI1kqAtpcecNunPg
sidebar_position: 1
---


# System Overview

# System Introduction

# Overview

The Report Management System is a critical system for securities firms and financial institutions, used to process, manage, and generate various reports related to securities business. The system is designed to help firms ensure compliance with regulatory requirements and to provide accurate and timely financial and business information.

The Whale Report Management System typically offers the following capabilities and features:

1. Data collection and consolidation: The system can collect and consolidate data from multiple sources (such as trading systems, settlement systems, account systems, risk-control systems, etc.). It can extract data from different business units and systems to produce comprehensive reports.
2. Report printing functionality: The system can generate various reports according to corporate requirements, such as financial reports, settlement reports, risk reports, compliance reports, trading reports, client reports, and regulatory finance reports. The system provides customizable report columns, enabling users to generate reports with specific columns according to their needs.
3. Batch report printing functionality: The system provides batch settings and management for bulk report printing; multiple print batches can be created and each batch can include multiple reports, enabling generation of many reports at once based on different criteria.
4. Report printing operation logs: The system records logs for each report printing operation for audit and review.
5. Operational assistance features: Parameter settings, tag (label) management, “My Favorites,” and other features provide users with operational conveniences aligned with their job roles.

# Report Catalog

To help users quickly memorize report categories, WBO report codes use conventional department English names as prefixes for easier recognition and learning.

The system currently provides the following report catalog; additional reports will be added as needed.

## Settlement Reports

## Financial Reports

## Client Reports

## FRR Reports

## Risk Management Reports

## Compliance Reports

## Trading Reports

# Functional Operations

## I. Basic Auxiliary Functions and Page Layout Introduction

### Report Business Categories

You can switch report business categories on the right; the center area displays the executable report catalog list.

Each report item displays the report name, a brief description, and the most recent update time.

If a report item shows a "Real-time" label icon, it indicates that the report provides real-time data.

### Report Tagging and Categorization

You can edit your own report tag descriptions. You may assign one or more tags to a single report, and the system will automatically categorize related reports by tag for faster retrieval.

You may choose an existing tag (supporting multiple tags simultaneously) or create a new tag.

### Tag Management

A tag management function is available in the upper-left corner to maintain tag content:

- Deleting a tag will remove the association between that tag and all linked reports.
- Renaming a tag will directly update the tag name across the system.

### Report Favorites

A star icon allows you to favorite reports; once selected, they will appear in your “My Favorites” menu entry for quick access.

### Parameter Settings

- You can set report parameters through the report parameter settings to fulfill parameter requirements for certain reports.

### View Update Logs

- The update log enables users to stay informed of the latest update records for Whale system reports in a timely manner.

## II. Report Printing Function

Menu Path: Report Management &gt; Report Printing

### Report Data Search

The Report Printing home provides two methods to select a report:

Method 1:

- Enter keywords of the report code in the search bar to query and display matching reports. For example, entering SDR003 will reveal SDR003-related reports in a dropdown; click the desired report to open its details. Note: when searching by report code, letters must be entered in uppercase.

Method 2:

- Click the desired report name to expand and select the corresponding report to enter the detailed report page.

The top area of a single report’s details page is the report criteria field area, where you may filter report details by different conditions.

### Report Preview

- If a report is configured to support PDF format, a preview is available.
- Preview supports generating a document based on the first 30 detail records only.
- The preview interface allows download or printing.

Note: Because the preview displays only partial data, please ensure data completeness before downloading; future enhancements will indicate within the preview whether the data set is complete.

### Report Export

The export function allows selection of output file types. Most reports support CSV, PDF, and EXCEL formats; some special reports support only specific formats as indicated in the report catalog.

- CSV default: Exports the columns as displayed in the page list.
- PDF (config-supported): Exports according to the defined print template fields; supports grouped totals and report composition.
- EXCEL (config-supported): Exports according to the defined print template fields; supports grouped totals and report composition.

Clicking export generates a report export job automatically; you may view progress and download the output from the Export List page.

### Exported Files

Menu Path: Report Management &gt; Export List

You may query exported report documents for the currently logged-in user, and perform delete or direct download operations.

## III. Batch Printing Function

Menu Path: Report Management &gt; Batch Printing

### Configure Print Batches

The system supports batch printing. You may add a new batch job by selecting Add (top-right), providing a batch name and composing the batch reports.

After confirming the batch name, add reports to the batch (select report name/print method). Print criteria fields will automatically display according to each report and can be configured as needed.

You may also set different conditions per report criteria. In the batch details, click Add to open the report-add configuration page, choose a report, and set its conditions.

Example date selection options:

- ledger date — current ledger date
- Last ledger date — previous ledger date
- year start date — first day of the year
- month start date — first day of the current month
- last month end date — last day of the previous month
- last month begin date — first day of the previous month
- system date — current calendar date
- last system date — previous calendar date
- Before last ledger date — ledger date before the previous ledger date
- Before last system date — calendar date before the previous calendar date

### Edit Print Batches

Within batch details you can:

1. Click Modify to enter the report condition modification page.
2. Click Export to export a single report according to specified conditions.
3. Click Delete to remove a report from the batch.
4. Add the same report multiple times in a batch to accommodate different print parameters for the same report.

### Batch Printing Operations

In the right-side action area of an existing batch record you may:

- Details: enter the batch detail listing page
- Delete: remove the batch
- Batch Export: submit the batch to generate output files

### Export Batch Files

After a batch export executes, you may view it on the export list and download the entire folder.

Click Details to view each single report within the batch and download individual reports as needed.

## IV. Export Logs

Menu Path: Report Management &gt; Export Logs

Query historical report printing operations:

- "Single Print": query history for single-report printing operations.
- "Batch Print": query history for batch report printing operations.

## V. CRS File Generation

Menu Path: Report Management &gt; CRS File Generation

## Functional Operation Description

This job supports annual CRS file processing and supports both new message and correction message types.

Note: Tenants must be granted the following permissions to operate CRS-related file functions.

CRS file permissions

### Calculate Yields:

First, click Calculate Yields in the upper-right corner, enter the reporting year and identifier (company name), and a file generation task will be created (visible in the Tasks List tab).

Note: In the Calculate Yields dialog, the external tax filing site provides an identifier (AEOI ID). The company name must match the name registered with the external tax reporting system.

A system task will be generated. When the system task completes (this may take time to compile annual data), reference reporting data will be produced and can be viewed or modified in the CRS Data tab.

You may also click Details in the Tasks List tab for a record to automatically switch to the CRS Data tab to view or edit the data.

Records may be deleted (do not submit) or data may be modified as required.

### Generate Files

After verifying or editing data in the CRS Data tab, click Generate File in the upper-right corner to create a system task that generates tax-specification documents (this may take time to compile annual data).

### File Download

When the file generation task completes, you may download the file for upload to the external site.

(The system will generate a file with an XML file extension.)

Recommendation: Do not manually edit this file, as inadvertent edits may corrupt the document format and prevent successful upload.

### Upload Generated Files

Upload the XML file to the external system. After uploading, the external system will return a file serial number; update the status in the Tasks List tab by entering the external system’s serial number.

This effectively tags the generated CRS data with that file batch’s serial number, facilitating future queries or corrections for submitted data.

## Correcting and Re-uploading Data

Normally, submitted data status will be "File Submitted."

If data changes are required, click Edit to modify the data or Delete to remove submitted data. Then repeat the file generation and upload process to the external reporting site; the latest file serial number will be obtained and should be updated accordingly.

