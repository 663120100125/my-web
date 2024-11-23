const AboutDarailsPage = async({params}) => {
    const {id} = await params;
    console.log(id);
  return (
    <div>AboutDarailsPage
        {id}
    </div>
  )
}
export default AboutDarailsPage