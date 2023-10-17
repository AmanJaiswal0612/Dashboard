import product from '../assets/icons/product.png'
import help from '../assets/icons/help.png'
import discount from '../assets/icons/discount.png'
import income from '../assets/icons/income.png'
import customer from '../assets/icons/customers.png'
import dashboard from "../assets/icons/dashboard.png";

export const modules = [
    {
       url: "/",
       title: "Dashboard",
       icon: <img src={dashboard} className='sidebar-icon' alt="home" />,
       modules: [],
    },
    {
       url: "/products",
       title: "Product",
       icon: <img src={product} className='sidebar-icon' alt="home" />,
       modules: [
         {
            url: "/products/create",
            title: "Create Product",
            hidden:true
         },
         {
            url: "/products/edit",
            title: "Update Product",
            hidden:true
         },
       ],
    },
    {
      url: "/customers",
   title: "Customers",
      icon: <img src={customer} className='sidebar-icon' alt="home" />,
      modules: [
         {
            url: "/customers/create",
            title: "Create Customer",
            hidden:true
         },
         {
            url: "/customers/edit",
            title: "Update Customer",
            hidden:true
         },
      ],
   },
    {
        url: "/income/operating",
        title: "Income",
        icon: <img src={income} className='sidebar-icon' alt="home" />,
        modules: [
           {
              url: "/income/operating",
              title: "Operating Income",
           },
           {
              url: "/income/nonoperating",
              title: "Non Operating Income",
           },
        
        ],
     },
     {
      url: "/promote",
      title: "Promote",
      icon: <img src={discount} className='sidebar-icon' alt="home" />,
      modules: [
      ],
     },
     {
      url: "/help",
      title: "Help",
      icon: <img src={help} className='sidebar-icon' alt="home" />,
      modules: [
      ],
     },
 ];


 export const moduleitems = modules.map((el, index) => {
   const key = String(index + 1);
   return {
      key: `sub${key}`,
      icon: el.icon,
      label: el.title,
      url: el.url,
      hidden: el.hidden?true:false,
      children:
         el.modules &&
         el.modules.map((item, j) => {
            const subKey = index * 4 + j + 1 + "";
            return {
               key: subKey,
               label: item.title,
               url: item.url,
               hidden: item.hidden?true:false,
               children:
                  item.modules &&
                  item.modules.map((subChild, k) => {
                     const subChildKey = k * 4 * Math.random();
                     return {
                        key: subChildKey,
                        lable: subChild.title,
                        url: subChild.url,
                        hidden: subChild.hidden?true:false,
                     };
                  }),
            };
         }),
   };
});

 export const getPath=(url)=> {
    let path = [];
    modules.map((v) => findPath(v, path, url));
    return path;
 }
 
 function findPath(node, path, url) {
    let l = path.length;
    for (let i = 0; i < node?.modules?.length && path.length === l; i++) {
       findPath(node.modules[i], path, url);
    }
 
    if (
       (node.urlType === "param" && matchParamUrl(url, node.url)) ||
       node.url === url ||
       node.url + "/" === url ||
       path.length > l
    )
       path.splice(0, 0, { url: node.url, title: node.title, urlType: node.urlType });
 }
 
 function matchParamUrl(url, sign) {
    let u = url.charAt(url.length - 1) === "/" ? url.slice(0, url.length - 1) : url;
    let a = u.split("/");
    let b = sign.split("/");
 
    let isSame = true;
    b.map((v, i) => {
       if (v.charAt(0) === ":") {
          // if (!(/^\d+$/.test(a[i])))
          //     isSame = false;
       } else if (v !== a[i]) isSame = false;
    });
    return isSame && a.length === b.length;
 }

export let getModules = (title) => {
    // console.log("tittle", title)
    switch(title) {
        case 'root':
            return JSON.parse(JSON.stringify(modules));
        default:
            return JSON.parse(JSON.stringify(modules.find(f => f.title === title).modules));
    }
}
// console.log("aya kya", getModules('root'))


export let currentModule = (url) => {
    return getPath(url)[0];
}