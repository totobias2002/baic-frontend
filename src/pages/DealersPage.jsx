import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDealers, selectDealers } from '../features/dealers/index.js'

export default function DealersPage() {
  const dispatch = useDispatch()
  const dealers = useSelector(selectDealers)

  useEffect(() => {
    dispatch(fetchDealers())
  }, [dispatch])

  return (
    <div className="container dealers-page">
      <h1>Red de concesionarios</h1>
      <div className="dealers-grid">
        {dealers.map((dealer) => (
          <div key={dealer.id} className="dealer-card">
            <h4>{dealer.name}</h4>
            <p>{dealer.city}</p>
            <p>{dealer.phone}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
