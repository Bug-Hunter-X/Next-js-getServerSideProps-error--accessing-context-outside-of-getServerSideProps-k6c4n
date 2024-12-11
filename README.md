# Next.js getServerSideProps Error: Accessing Context Outside of getServerSideProps

This repository demonstrates a common error in Next.js applications when using `getServerSideProps` to fetch data. The error arises from attempting to access the `context` object outside of the `getServerSideProps` function itself.

## Description

The `about.js` file contains a function `About` which attempts to call `getServerSideProps` function directly to fetch user data. This is incorrect as `getServerSideProps` is a Next.js API function that should only be used inside the `getServerSideProps` function itself.

## Solution

The `aboutSolution.js` file provides a corrected implementation. Instead of calling `getServerSideProps` directly, it correctly fetches the data within `getServerSideProps` and passes it as props to the `About` component.

## How to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Navigate to `/about`
5. Observe the error in the console

## How to fix

Refer to `aboutSolution.js` for the corrected implementation.