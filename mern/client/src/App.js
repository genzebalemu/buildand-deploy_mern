import React from 'react'
import Home from './Component/Pages/Home'
import logoimage from "./img/logo.jpg"
const App = () => {
  return (
    <>
    <div class="py-8 px-8 max-w-sm mx-auto   bg-white rounded-xl shadow-lg  sm:py-4 sm:flex  sm:space-y-0 sm:space-x-6">
    <img class="brightness-100 mx-auto w-20 h-20 rounded-full sm:mx-0 sm:shrink-0" src={logoimage} alt="Woman's Face" />
    <div class="text-center space-y-2 ">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p class="text-slate-500 font-medium">
        Product Engineer
      </p>
      <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">204</span>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
  
</div>

  <div class="flex flex-col-reverse space-y-4">
  <div class="basis-1/4 rounded-xl bg-slate-400 p-10 text-white" >01</div>
  <div class="basis-1/4 rounded-xl bg-slate-400 px-5 py-6 text-white">02</div>
  <div class="basis-1/4 rounded-xl bg-slate-400 px-5 py-6 text-white">03</div>
  </div>
  <div>
    <button class="border-4 hover:border-8 border-slate-950 h-24 w-24 bg-gradient-to-r from-purple-500 to-pink-500">submit</button>
    <input class=" m-4 border-2 border-rose-600 ..."/>
    <button class="shadow-lg">Subscribe</button>
    <button class="m-10  shadow shadow-blue-500/40 hover:shadow-indigo-500/40">Subscribe</button>

</div>
  </>
  )
}

export default App


