# OpenDataMarket

Back-End Routes:

| Method | Path | Description |
| ------------- | ------------- |
| Get  | /api/users  | All users |
| Get  | /api/users/:id  | Specific user |
| Post | /api/users/logged | Autheticated the user and record session |
| Delete | /api/users/logout | Log out from the current user session |


Fron-End Routes:

| Path | Component | Description |
| ------------- | ------------- |
| /       | Index  | Homepage View and graph selector |
| /login  | Login  | Log-in Page View |


Components:

src
├── service
│   └── ...services.js
├── components
│   ├── app
│   ├── layout
│   │       ├── Navbar
│   │       ├── Footer
│   │
│   │── pages
│   │       ├── index
│   │       ├── log-in
│   │       ├── dynamic
│   │       │       ├──DataVisualization.js
│   │       │       ├──NewDataForm  
│   │       │       │      ├── DataSelect
│   │       │       │      ├── Filters
│   │       │       │      ├── GraphSelect
.....