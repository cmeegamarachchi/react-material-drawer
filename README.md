# React - MaterialUI drawer

Simple react starter project featuring multiple views and material-ui drawer

Insparation https://material-ui.com/components/drawers/

View flow
![alt text](https://github.com/cmeegamarachchi/react-material-drawer/raw/master/docs/view_flow.png "View flow")

#### To install and run
```
npm install
npm start
```

#### Key components
|  Component | Description  |
| ------------ | ------------ |
|  App.tsx | Holds state, defines routing   |
|  SideNavigation.tsx | Renders routing links using material-drawer   |
|  Home.tsx | Stub for home-view   |
|  View1.tsx | Stub for first view   |
|  View2.tsx | Stub for second view   |

#### Adding new views
Create a view in ./sec folder

Regisger a route under `<switch>` component in App.tsx

Create navigation link in SideNavigation.tsx 



### MIT License

Copyright (c) 2020 Chintana Meegamarachchi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.