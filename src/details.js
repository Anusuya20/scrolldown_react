import React, { useState } from 'react'

const Country = () => {
    const[showdetails, setShowdetails] = useState(false)
    
    return ( 
        <>
           
          
            <br/>
            <div class="sliders">
                <button className='button' onClick={()=>setShowdetails(!showdetails)}>Mummification</button> <br></br>
                <br></br>
            </div>
            <div class="grid">
            {
                showdetails && <div class="slide">
                    <b>
                    <p>
                    Egyptian embalmers were so skilled that people mummified four thousand years ago still have skin, hair and recognizable features such as scars and tattoos.

The word mummy comes from the Arabic mummiya, meaning bitumen or coal and every Egyptian, except the most abject criminal, was entitled to be embalmed and receive a decent burial.

The body was taken to the embalmers by the relatives, who then chose the method and quality of mummification. The best and most expensive methods were used on the wealthy, but there were cheaper alternatives for the poor.


            </p></b>
          
            
                </div>
            }
            
            </div>
        </>
     );
}
 
export default Country;