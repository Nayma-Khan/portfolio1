// import React from 'react'
import Image from "next/image"
export default function Last(){
    return(
        
        <section className="mt-16 lg:mt-28">
        <div className="max-w-screen-xl">
            <h1 className="text-5xl my-12 text-center" data-aos="fade-right">Projects</h1>
            
            <div className="flex text-center mx-12"data-aos="fade-right">
            <div className="w-1/4 px-4 py-5">
                <h1 className="font-bold text-lg" data-aos="fade-right">ATM</h1>
            <Image 
             src="/images/atm.jpg"
            //  objectPosition="fill"
              width={500} 
              height={500}
              alt="image"
              />
            
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
            </div>
        


            <div className=" w-4/12 px-4 py-5 mx-4" data-aos="fade-right">
                <h1 className="font-bold">CURRENCY CONVERTER</h1>
            <Image  
            src="/images/currency.jpg" 
            width={500} height={500} alt="image"/>
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
            </div>

            <div className="w-1/4 px-4 py-5 mx-4"data-aos="fade-right">
                <h1 className="font-bold">SIMPLE CALCULATOR</h1>
            <Image  src="/images/calculator.png" width={500} height={500} alt="image"/>
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
            </div>

            <div className="w-1/4 px-4 py-5 mx-4" data-aos="fade-right">
                <h1 className="font-bold">TO DO LIST</h1>
            <Image  src="/images/todo.jpg" width={500} height={500} alt="image"/>
                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
            </div>

            </div>
        </div>
        
        <div className="flex text-center mx-12">

        <div className="w-1/4 px-4 py-5 mx-4" data-aos="fade-right">
        <h1 className="font-bold" data-aos="fade-right">CLI</h1>
    <Image  src="/images/cli.png" width={500} height={500} alt="image"/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
    </div>

    <div className=" w-1/4 px-4 py-5 mx-4" data-aos="fade-right">
        <h1 className="font-bold" data-aos="fade-right">WORDS COUNTER</h1>
    <Image  src="/images/word.png" width={500} height={500} alt="image"/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
    </div>

    <div className="w-1/4 px-4 py-5 mx-4" data-aos="fade-right">
        <h1 className="font-bold"data-aos="fade-right">RESUME</h1>
    <Image className="cursor"  src="/images/resume.jpg" width={500} height={500} alt="image"/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
    </div>

    <div className="w-1/4 px-4 py-5 mx-4"data-aos="fade-right">
        <h1 className="font-bold"data-aos="fade-right">LANDING PAGES</h1>
    <Image  src="/images/landing.jpg" width={500} height={500} alt="image"/>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repellendus nam? Corrupti magnam distinctio dolor necessitatibus ex cupiditate nobis perferendis cumque saepe a, voluptatem velit! Corrupti, explicabo hic! Quas, temporibus.</p> */}
    </div>

    </div>

        </section>
       
        
    )
}