import React from "react";

export default function GenericButton({ text, link  }) {
    
  
  
    return (
    <>

        <button className="border w-[10rem] bg-[#30ffffaf] hover:bg-black active:bg-[#41a4a4af] p-2 rounded-md">
            {text}
        </button>
    </>
    );
  }