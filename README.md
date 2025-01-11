# React useEffect Cleanup Function Not Always Called on Unmount

This repository demonstrates a scenario where the cleanup function in React's `useEffect` hook might not always be called when the component unmounts.  This can lead to unexpected behavior, such as memory leaks or continued network requests after the component is no longer needed.

The issue arises under certain conditions, such as rapid component updates or when the component is unmounted before the asynchronous operation within the `useEffect` hook completes.

## Bug Description

The example code includes an `useEffect` hook that logs messages on update and unmount. Under normal conditions, the unmount log should always appear before the component is removed from the DOM. However, in certain circumstances (e.g., fast updates, early unmounts), the cleanup might be skipped.

## Solution

The solution involves ensuring that the cleanup function is always executed, even if the component unmounts prematurely. This often involves careful management of asynchronous operations within the `useEffect` hook.