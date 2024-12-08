import React, { useEffect } from 'react'

export default function WishList() {
  const usePageTitle = (title) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};
usePageTitle("WishList")
  return (
    <div>
      
    </div>
  )
}
