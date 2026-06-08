# Apartment Market Rent Growth Analysis

**Analyst:** Aaron Hardy  
**Last Updated:** June 7, 2026  
**Data Source:** Zillow Research, U.S. Census Bureau

---

## Overview

This project analyzes U.S. metro-level apartment rental rate trends using Zillow's Observed Rent Index (ZORI) to identify markets with the fastest and slowest rent growth. The goal is to surface actionable intelligence for apartment investment underwriting and market selection.

---

## Objectives

1. Identify metro markets where multi-family rents are rising fastest
2. Identify metro markets where multi-family rents are rising slowest
3. _(Planned)_ Analyze renter demand trends by market (ZORDI)
4. _(Planned)_ Analyze new construction sale price per square foot by market
5. _(Planned)_ Score markets for apartment investment potential using rent growth, demand, and replacement cost signals

---

## Data Sources

| Dataset                                  | Source             | Description                                                                  |
| ---------------------------------------- | ------------------ | ---------------------------------------------------------------------------- |
| ZORI — Multi-Family, Seasonally Adjusted | Zillow Research    | Smoothed, repeat-rent index for multi-family properties; metro-level monthly |
| ZORDI — All Homes                        | Zillow Research    | Renter demand proxy based on listing engagement; metro-level monthly         |
| ZORDI — Multi-Family                     | Zillow Research    | Same as above, scoped to multi-family                                        |
| New Construction Median Sale Price/Sqft  | Zillow Research    | SFR/condo new construction pricing; metro-level monthly                      |
| CBSA Population Estimates                | U.S. Census Bureau | 2025 metro population estimates (released May 2026)                          |

### About ZORI

ZORI is a repeat-rent index weighted to the full rental housing stock (not just active listings). It reflects the 35th–65th percentile rent range across all homes and apartments in a metro, then smoothed with a 3-month simple moving average. A seasonally adjusted version is used here.

---

## Methodology

### Universe

- **Starting universe:** ~932 metro regions with ZORI data
- **Minimum history filter:** Regions with fewer than 62 months of data excluded (~5 years + 2 months required to compute 5-year CAGR)
- **Size filter:** Top 200 metros by Zillow SizeRank retained (reduces noise from small, illiquid markets)
- **Outlier removal:** Tukey IQR filter (factor = 1.5) applied to 1-year CAGR to remove statistical outliers

### Metrics Computed

| Metric     | Description                                                                         |
| ---------- | ----------------------------------------------------------------------------------- |
| `CAGR_1yr` | 1-year compound annual rent growth rate                                             |
| `CAGR_2yr` | 2-year compound annual rent growth rate                                             |
| `CAGR_5yr` | 5-year compound annual rent growth rate                                             |
| `SD_1yr`   | Annualized standard deviation of monthly rent growth over 1 year (volatility proxy) |
| `SD_2yr`   | Same, over 2 years                                                                  |
| `SD_5yr`   | Same, over 5 years                                                                  |

---

## Key Findings (as of April 2026)

### Top 5 Markets by 1-Year Rent CAGR

| Rank | Metro            | ZORI   | 1yr CAGR | 2yr CAGR | 5yr CAGR | Population |
| ---- | ---------------- | ------ | -------- | -------- | -------- | ---------- |
| 1    | Cedar Rapids, IA | $1,014 | 12.9%    | 8.5%     | 6.2%     | 279,285    |
| 2    | Evansville, IN   | $1,001 | 12.0%    | 9.7%     | 9.9%     | 273,786    |
| 3    | Binghamton, NY   | $1,213 | 8.9%     | 7.1%     | 9.6%     | 243,189    |
| 4    | Reno, NV         | $1,783 | 8.9%     | 5.9%     | 4.3%     | 578,734    |
| 5    | Gulfport, MS     | $1,206 | 8.3%     | 6.6%     | 8.2%     | —          |

**Notable observations:**

- Cedar Rapids leads on growth rate and declining volatility — suggesting trend stability
- Evansville shows accelerating volatility alongside high growth — less predictable
- Reno is the largest market in the top 5 and sits at a higher absolute rent level

---

## Project Structure

```
├── data/
│   ├── raw/
│   │   ├── zillow/
│   │   │   ├── Metro_zori_uc_mfr_sm_month.csv
│   │   │   ├── Metro_zordi_uc_sfrcondomfr_month.csv
│   │   │   ├── Metro_zordi_uc_mfr_month.csv
│   │   │   └── Metro_new_con_median_sale_price_per_sqft_uc_sfrcondo_month.csv
│   │   └── census/
│   │       └── cbsa-est2025-alldata.csv
│   └── processed/
├── notebooks/
│   └── analysis.ipynb          # Main analysis notebook
├── storage/
│   └── data.duckdb             # (Optional) DuckDB persistent store
└── README.md
```

---

## Dependencies

```
pandas
numpy
duckdb
matplotlib
seaborn
```

---

## Status

| Section                       | Status         |
| ----------------------------- | -------------- |
| ZORI rent growth analysis     | ✅ Complete    |
| ZORDI demand analysis         | 🔲 Planned     |
| New construction price/sqft   | 🔲 Planned     |
| Combined market scoring model | 🔲 Planned     |
| Visualizations                | 🔲 In progress |
