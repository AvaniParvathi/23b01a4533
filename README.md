# Campus Notification System

## Overview

This project is a Campus Notification System built using React and Material UI. It displays notifications, supports filtering by notification type, pagination, and highlights priority notifications. A reusable logging middleware is integrated to record important application events.

## Project Structure

* **logging-middleware/** – Reusable logging utility for sending logs to the logging service.
* **notification-app-fe/** – React frontend application.

  * `apis/` – API request functions.
  * `hooks/` – Custom React hooks for data fetching.
  * `components/` – Reusable UI components.
  * `pages/` – Application pages.
  * notification-app-be/ – Backend service (project scaffold).

## Approach

* Followed a modular component-based architecture.
* Separated API logic, UI components, and hooks for better maintainability.
* Used Material UI for a responsive and consistent interface.
* Integrated logging middleware for important application events and error handling.
* Used Git with incremental commits throughout development.

## Technologies

* React
* Vite
* Material UI
* Axios
* React Router
* Git & GitHub
