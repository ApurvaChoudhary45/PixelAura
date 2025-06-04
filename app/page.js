'use client'
import HomePage from "@/component/HomePage";
import Image from "next/image";
import { useSession } from "next-auth/react"
import Details from "@/component/Details";
import Search from "@/component/Search";
import Cards from "@/component/Cards";
import Footer from "@/component/Footer";
import Featured from "@/component/Featured";


export default function Home() {
  const { data: session } = useSession()
  if(session){
    return(
      <>
      <div className="relative h-screen w-full overflow-hidden">
  {/* Blurry Background */}
  <div
    className="absolute inset-0 blur-xs scale-110"
    style={{
      background: `
        repeating-radial-gradient(circle at bottom left,
          #fedc00 0%, #fedc00 ${100 * 1 / 18}%,
          #fcb712 0%, #fcb712 ${100 * 2 / 18}%,
          #f7921e 0%, #f7921e ${100 * 3 / 18}%,
          #e87f24 0%, #e87f24 ${100 * 4 / 18}%,
          #dd6227 0%, #dd6227 ${100 * 5 / 18}%,
          #dc4c27 0%, #dc4c27 ${100 * 6 / 18}%,
          #ca3435 0%, #ca3435 ${100 * 7 / 18}%,
          #b82841 0%, #b82841 ${100 * 8 / 18}%,
          #953751 0%, #953751 ${100 * 9 / 18}%,
          #364c88 0%, #364c88 ${100 * 10 / 18}%,
          #16599d 0%, #16599d ${100 * 11 / 18}%,
          #02609e 0%, #02609e ${100 * 12 / 18}%,
          #0073a9 0%, #0073a9 ${100 * 13 / 18}%,
          #008aa4 0%, #008aa4 ${100 * 14 / 18}%,
          #239a87 0%, #239a87 ${100 * 15 / 18}%,
          #7cba6d 0%, #7cba6d ${100 * 16 / 18}%,
          #becc2f 0%, #becc2f ${100 * 17 / 18}%,
          #e0d81d 0%, #e0d81d ${100 * 18 / 18}%
        ),
        repeating-radial-gradient(circle at bottom right,
          #fedc00 0%, #fedc00 ${100 * 1 / 18}%,
          #fcb712 0%, #fcb712 ${100 * 2 / 18}%,
          #f7921e 0%, #f7921e ${100 * 3 / 18}%,
          #e87f24 0%, #e87f24 ${100 * 4 / 18}%,
          #dd6227 0%, #dd6227 ${100 * 5 / 18}%,
          #dc4c27 0%, #dc4c27 ${100 * 6 / 18}%,
          #ca3435 0%, #ca3435 ${100 * 7 / 18}%,
          #b82841 0%, #b82841 ${100 * 8 / 18}%,
          #953751 0%, #953751 ${100 * 9 / 18}%,
          #364c88 0%, #364c88 ${100 * 10 / 18}%,
          #16599d 0%, #16599d ${100 * 11 / 18}%,
          #02609e 0%, #02609e ${100 * 12 / 18}%,
          #0073a9 0%, #0073a9 ${100 * 13 / 18}%,
          #008aa4 0%, #008aa4 ${100 * 14 / 18}%,
          #239a87 0%, #239a87 ${100 * 15 / 18}%,
          #7cba6d 0%, #7cba6d ${100 * 16 / 18}%,
          #becc2f 0%, #becc2f ${100 * 17 / 18}%,
          #e0d81d 0%, #e0d81d ${100 * 18 / 18}%
        )
      `,
      backgroundBlendMode: "overlay",
    }}
    
  />
  <Featured/>
      <Details/>
      
      <Search/>
     
      </div>
       <Cards/>
       <Footer/>
      </>
    )
  }
  return (
    <>
   <div className="relative h-screen w-full overflow-hidden">
  {/* Blurry Background */}
  <div
    className="absolute inset-0 blur-xs scale-110"
    style={{
      background: `
        repeating-radial-gradient(circle at bottom left,
          #fedc00 0%, #fedc00 ${100 * 1 / 18}%,
          #fcb712 0%, #fcb712 ${100 * 2 / 18}%,
          #f7921e 0%, #f7921e ${100 * 3 / 18}%,
          #e87f24 0%, #e87f24 ${100 * 4 / 18}%,
          #dd6227 0%, #dd6227 ${100 * 5 / 18}%,
          #dc4c27 0%, #dc4c27 ${100 * 6 / 18}%,
          #ca3435 0%, #ca3435 ${100 * 7 / 18}%,
          #b82841 0%, #b82841 ${100 * 8 / 18}%,
          #953751 0%, #953751 ${100 * 9 / 18}%,
          #364c88 0%, #364c88 ${100 * 10 / 18}%,
          #16599d 0%, #16599d ${100 * 11 / 18}%,
          #02609e 0%, #02609e ${100 * 12 / 18}%,
          #0073a9 0%, #0073a9 ${100 * 13 / 18}%,
          #008aa4 0%, #008aa4 ${100 * 14 / 18}%,
          #239a87 0%, #239a87 ${100 * 15 / 18}%,
          #7cba6d 0%, #7cba6d ${100 * 16 / 18}%,
          #becc2f 0%, #becc2f ${100 * 17 / 18}%,
          #e0d81d 0%, #e0d81d ${100 * 18 / 18}%
        ),
        repeating-radial-gradient(circle at bottom right,
          #fedc00 0%, #fedc00 ${100 * 1 / 18}%,
          #fcb712 0%, #fcb712 ${100 * 2 / 18}%,
          #f7921e 0%, #f7921e ${100 * 3 / 18}%,
          #e87f24 0%, #e87f24 ${100 * 4 / 18}%,
          #dd6227 0%, #dd6227 ${100 * 5 / 18}%,
          #dc4c27 0%, #dc4c27 ${100 * 6 / 18}%,
          #ca3435 0%, #ca3435 ${100 * 7 / 18}%,
          #b82841 0%, #b82841 ${100 * 8 / 18}%,
          #953751 0%, #953751 ${100 * 9 / 18}%,
          #364c88 0%, #364c88 ${100 * 10 / 18}%,
          #16599d 0%, #16599d ${100 * 11 / 18}%,
          #02609e 0%, #02609e ${100 * 12 / 18}%,
          #0073a9 0%, #0073a9 ${100 * 13 / 18}%,
          #008aa4 0%, #008aa4 ${100 * 14 / 18}%,
          #239a87 0%, #239a87 ${100 * 15 / 18}%,
          #7cba6d 0%, #7cba6d ${100 * 16 / 18}%,
          #becc2f 0%, #becc2f ${100 * 17 / 18}%,
          #e0d81d 0%, #e0d81d ${100 * 18 / 18}%
        )
      `,
      backgroundBlendMode: "overlay",
    }}
    
  />
   <HomePage />
   
</div>


   

    </>
  );
}
