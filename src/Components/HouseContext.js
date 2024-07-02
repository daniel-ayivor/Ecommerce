import React, {useState, useEffect, createContext} from 'react'

//import data
import {data} from '../Components/Data'

//create context
export const HouseContext =createContext();

function HouseContextProvider({children}) {
    const [ Houses,setHouses] = useState(data); 
    const [country,setCountry] =useState('Location (any)');
    const [countries, setCountries] =useState([]);
    const [property, setProperty] =useState('Property type (any)');
    const [properties, setProperties] =useState([]);
    const [price, setPrice] =useState('Property type (any)');
    const [loading, setLoading] =useState(false)

    //return all houses
    useEffect(()=>{
      const allCountries =Houses.map((house)=> {
        return house.country;
      })
      //console.log(allCountries)
      //remove deuplicate
      const uniqueContries=['Location (any)',...new Set(allCountries)];
      //console.log(uniqueContries);
      //set countries state
      setCountries(uniqueContries);
    }, []);

     //return all property
     useEffect(()=>{
      const allProperties =Houses.map((house)=> {
        return house.type;
      })
      //console.log(allProperties)
      //remove deuplicate
      const uniqueProperties=['Location (any)',...new Set(allProperties)];
      //console.log(uniqueProperties);
      //set properties state
      setProperties(uniqueProperties);
    }, []);


    const HandleClick = ()=>{
     // console.log(country,property,price);
///set loading
setLoading(true);
      //function to check if string is inclusive
      const isDefault=(str)=>{
        return str.split(' ').includes('(any)');
    }
      //pase number
      const minPrice =parseInt(price.split('')[0]);
      const maxPrice=parseInt(price.split(' ')[2]);

      const NewHouses = data.filter((house)=>{
        const HousePrice= parseInt(house.price);

        //if all values are selected
        if(house.country === country 
          && house.type === property 
          && HousePrice >=minPrice
           && HousePrice <= maxPrice){
            return house;
           };
           //if all are not default
           if(!isDefault(country) && !isDefault(property) && !isDefault(price)){
            return house;
          }
               //if country are not default
               if(!isDefault(country) && isDefault(property) && isDefault(price)){
                return house.country === country;
              }

                   //if property are not default
           if(isDefault(country) && !isDefault(property) && isDefault(price)){
            return house.property === property;
          }
                   //if price are not default
                   if(isDefault(country) && isDefault(property) && !isDefault(price)){
                    if(HousePrice >= minPrice && HousePrice <= maxPrice){
                      return house;
                    }
                  };
                  //if country and property are not default
                  if(isDefault(country) && isDefault(property) && !isDefault(price)){
                    return house.country ===country && house.type === property;
                  }
        //if country and price are not default
        if(isDefault(country) && !isDefault(property) && isDefault(price)){
          if(HousePrice >= minPrice && HousePrice <= maxPrice){
            return house.country === country;
          }
        }
        //if price and property are not default
        if(isDefault(country) && !isDefault(property) && !isDefault(price)){
          if(HousePrice >= minPrice && HousePrice <= maxPrice){
            return house.type === property;
          }
        }
      })
setTimeout(()=>{
  return NewHouses.length < 1 ? setHouses([]) : setHouses(NewHouses),
  setLoading(false)
},1000)
    };

  return (
    <HouseContext.Provider
     value={
          {
            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            price,
            setPrice,
            Houses,
            loading,
            HandleClick,
            loading,
          }
    }>
{children}
    </HouseContext.Provider>
  )
}

export default HouseContextProvider