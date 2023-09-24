import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader=async()=>{

    const loadedProducts=await fetch('products.json');
    const products=await loadedProducts.json();
    
    const storedCart=getShoppingCart()
    const savedCart=[]
    for(const id in storedCart){
        

        const addedproduct=products.find(pd=>pd.id===id)
        if(addedproduct){
            const quantity=storedCart[id]
            addedproduct.quantity=quantity
            savedCart.push(addedproduct)
        }
    }


    return savedCart


}


export default cartProductLoader