'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addcards, setcards } from '@/Redux/Details/details'
import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { filter } from '@/Redux/Like/like'
import Spinner from './Spinner'

const Cards = () => {
  const cardss = useSelector(state => state.card.cards)
  const search = useSelector(state => state.search.query)
  const filling = useSelector(state => state.fill.cards)
  const daaark = useSelector(state => state.black.darkmode)
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [loading, setloading] = useState(false)
  const selector = useSelector(state => state.tab.selectTab)

  useEffect(() => {
    setPage(1)
  }, [search])
  useEffect(() => {
    const fetchdata = async () => {
      setloading(true)
      const data = await fetch(`https://api.unsplash.com/search/photos?query=${search}&page=${page}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`)
      const response = await data.json()

      if (page === 1) {
        dispatch(setcards(response.results))
      }
      else {
        dispatch(addcards(response.results))
      }
      setloading(false)
    }
    fetchdata()
  }, [dispatch, search, page])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      if (scrollTop + windowHeight >= fullHeight - 300 && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading])
  useEffect(() => {
    setPage(1)
  }, [selector])

  useEffect(() => {
    const fetching = async () => {
      setloading(true)
      const data = await fetch(`https://api.unsplash.com/search/photos?query=${selector}&page=${page}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_API_KEY}`)
      const response = await data.json()

      if (page === 1) {
        dispatch(setcards(response.results))
      }
      else {
        dispatch(addcards(response.results))
      }
      setloading(false)
    }
    fetching()
  }, [dispatch, selector, page])

  return (
    <>
      <div>
        <div className={`relative z-10 ${daaark ? 'bg-zinc-800' : 'bg-white'}`}>
          <h1 className={`text-center py-10 text-5xl font-bold ${daaark ? 'text-white bg-zinc-800' : 'text-gray-800'}`}>Top Wallpapers</h1>
          <div className='grid grid-cols-3 gap-6 px-6 relative z-10'>
            {loading ? (<Spinner />) : (Array.isArray(cardss) && cardss.length > 0 ? cardss.map(item => {
              const isLike = filling.includes(item.id)
              {
                return (<div key={item.id}>

                  <div className="bg-white backdrop-blur-lg rounded-2xl shadow-xl p-4 border border-white/20 text-gray-800 hover:cursor-pointer hover:scale-105 hover:transition-all">
                    <img src={item.urls.regular} alt={item.alt_description || 'Image'} className="w-full h-48 object-cover rounded-xl mb-4 border border-white/10" />

                    <div className="mb-2">
                      <h2 className='text-2xl'>{item.alt_description}</h2>
                      <h2 className="text-xl font-bold">@{item.user.username}</h2>
                      <p className="text-sm text-gray/80">Bio: {item.user.bio || "No bio available."}</p>
                    </div>

                    <div className="text-sm text-white/70 mb-2">
                      <p className='text-gray-800'>📍 Location: {item.user.location || "Unknown"}</p>
                      <p className='text-gray-800'>📅 Created: {new Date(item.user.updated_at).toLocaleDateString()}</p>
                      <p className="italic">"{item.alt_description || "No description"}"</p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <div className={`bg-${isLike ? 'white' : 'rose-500'} flex justify-center items-center gap-3 rounded-full py-1 px-3`}>
                        {isLike ? (<FaHeart className='text-rose-500 bg-white' onClick={() => dispatch(filter(item.id))}></FaHeart>) : (<FaHeart className='text-black' onClick={() => dispatch(filter(item.id))}></FaHeart>)}
                        {isLike ? (<p className='text-lg text-red-500'>Liked</p>) : (<p className='text-lg text-gray-900/60'>Like</p>)}
                      </div>
                      <button className='text-blue-400 cursor-pointer' onClick={() => {
                        fetch(item.urls.raw)
                          .then(res => res.blob())
                          .then(blob => {
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = 'image.jpg'; // you can change the name
                            a.click();
                            URL.revokeObjectURL(url);
                          });
                      }}>Download</button>
                      <span className="text-gray/80">Photo by Unsplash</span>
                    </div>
                  </div>
                </div>
                )
              }
            }) : (<p className='text-center text-2xl'>No results Found</p>))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
