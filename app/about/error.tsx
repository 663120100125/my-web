'use client'
const error = ({error}:{error: Error}) => {
    console.log('tam err',error)
  return (
    <div>
        <h1>Error</h1>
    </div>
  )
}
export default error