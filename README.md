# OpenDataMarket

## Getting started
This will launch the website in your localhost server.
```c
$ git clone https://github.com/damianlago/libft.git
$ cd client
$ npm start
```

### Back-End Routes:

| Method | Path | Description |
| --- | --- | --- |
| Get  | /api/:id  | Specific user |
| Post | /api/login | Autheticated the user and record session |
| Delete | /api/logout | Log out from the current user session |


### Fron-End Routes:

| Path | Component | Description |
| --- | --- | --- |
| /       | Index  | Homepage View and graph selector |
| /login  | Login  | Log-in Page View |


### Components:
```bash
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
```
