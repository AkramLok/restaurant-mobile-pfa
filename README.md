## Mobile App by [Oussama KRITTEL](https://github.com/oussama-krittel) (React Native) - Restaurant Management System
This repository contains the mobile application for the Restaurant Management System, developed using React Native. This app allows clients to browse the menu, place orders, and participate in loyalty programs, while servers can manage and track orders.

## Other Links:
#### Backend API (Spring Boot): [Restaurant Backend API](https://github.com/AkramLok/restaurant-backend-pfa)
#### Front Website (for Owners) : [Restaurant Frontend Web](https://github.com/AkramLok/restaurant-frontend-web-pfa)
#### Mobile application for login test only (waiter login need some id): [Restaurant Mobile Test APP](https://github.com/AkramLok/resstaurant-mobile-test-pfa)

## Key Features
User Management: Login functionality for clients and servers.
Order Management: Place orders, track order status, and receive notifications for updates.
Loyalty System: Clients can earn and redeem points based on their purchases.
Menu Browsing: Clients can view available menu items, including prices and descriptions.
Promotions: Display promotions available to clients for loyalty rewards.
Authentication: Secured authentication using tokens.
Technologies Used
React Native: For building cross-platform mobile apps (iOS & Android).
Redux: For state management.
Axios: For API calls to the backend.
JWT Authentication: For secure access to the backend API.
## Installation & Setup
1. Clone the repository:
```
git clone https://github.com/AkramLok/restaurant-mobile-pfa.git
```
2. Navigate to the project directory:
```
cd restaurant-mobile-pfa
```
3. Install dependencies:
```
npm install
```
4. Configure API URL:

- Open the config.js file and set the BASE_URL to point to your backend API:
```
export const BASE_URL = 'http://localhost:8080/';
```
## Run the application:

### For Android:
```
npx react-native run-android
```
### For iOS:
```
npx react-native run-ios
```
## API Endpoints
These are the key API endpoints the app consumes from the backend:

1. User Management:
```
POST /auth/login: User login.
```
2. Order Management:
```
GET /api/orders: Fetch all orders (for servers).
POST /api/orders: Place a new order (for clients).
```
3. Menu Management:
```
GET /api/menu: Fetch available menu items.
```
4. Loyalty Points & Offers:
```
GET /api/offers: Fetch available offers and promotions.
GET /api/loyalty-points: Get loyalty points for a user.
```
## Security
This mobile app integrates JWT-based authentication with the backend. Upon login, a JWT token is received, and it must be included in all subsequent requests in the Authorization header:
```
Authorization: Bearer <token>
```
## License
This project is licensed under the MIT License.
