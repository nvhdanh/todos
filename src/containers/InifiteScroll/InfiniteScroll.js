import { useState, useEffect, useMemo, useRef } from 'react'
import axios from 'axios'

import classes from './InfiniteScroll.module.css'

const InfiniteScroll = props => {
    const [data, setData] = useState([])
    const [isBottom, setIsBottom] = useState(false)

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/image/random/20')
            .then(res => {
                console.log('bottom')
                setData(c => [...c, ...res.data.message])
                setIsBottom(false)
            })
            .catch(e => console.log(e))
    }, [isBottom])

    useEffect(() => {
        let onScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            	setIsBottom(true)
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])



    return (
        <div className={classes.InfiniteScroll}>
        	{data.map((el,i)=><img src={el} key={el+i} alt=""/>)}
        </div>
    )
}

export default InfiniteScroll